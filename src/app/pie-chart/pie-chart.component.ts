import { Component, OnInit, OnChanges, Input, ViewEncapsulation } from '@angular/core';

import { Fire } from '../fire-data.interface';
import * as d3 from 'd3';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  encapsulation: ViewEncapsulation.None // Need for svg styles in bar-chart.component.css
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() private fires: Fire[];
  @Input() private deleteFire: Fire;
  private pieData: {key: string, value: number}[];
  private color: d3.ScaleOrdinal<string, string>;
  private svg: d3.Selection<SVGElement, null, HTMLElement, any>;
  private chart: any;
  private pie: d3.Pie<SVGElement, {key: string, value: number}>;
  private piePieces: any;
  private pieText: any;
  private radius: number;
  private margin: { top: number, right: number, bottom: number, left: number };

  constructor() { }

  ngOnInit() {
    this.svg = d3.select('.pie-chart');
    this.chart = this.svg.append('g');
    this.setChartProperties();
    this.drawPie();
  }

  ngOnChanges() {
    if (this.piePieces) {
      this.pieData.forEach(d =>
        d.key === this.deleteFire.Cause ? d.value-- : d.value
      );
      this.updatePie();
    }
  }

  onResize() {
    this.setChartProperties();
    this.updatePie();
  }

  private setChartProperties() {
    const canvasWidth = parseInt(this.svg.style('width'), 0);
    const canvasHeight = parseInt(this.svg.style('height'), 0);

    this.radius = Math.min(canvasWidth, canvasHeight) * 0.75 / 2;

    this.chart
      .attr('transform', `translate( ${canvasWidth / 2}, ${canvasHeight / 2})`);

  }

  private drawPie() {
    this.color = d3.scaleOrdinal(d3.schemeCategory10)
      .domain(this.fires.map(fire => fire.Cause));

    this.pieData = d3.nest<Fire, number>()
      .key(d => d.Cause)
      .rollup(v => v.length)
      .entries(this.fires);

    this.pie = d3.pie<{key: string, value: number}>()
      .sort(null)
      .value(d => d.value);

    const arc = d3.arc().outerRadius(this.radius).innerRadius(0);
    const arcText = d3.arc().outerRadius(this.radius * 2.05).innerRadius(0);

    this.chart
      .datum(this.pieData);

    this.piePieces = this.chart.selectAll('path')
      .data(this.pie)
      .enter().append('path')
        .attr('d', arc)
        .attr('fill', d => this.color(d.data.key))
        .each(function(d) { this._current = d; });

    this.pieText = this.chart.selectAll('text')
      .data(this.pie)
      .enter().append('text')
        .text(d => d.data.key)
        .attr('transform', d => `translate(${arcText.centroid(d)})`)
        .attr('text-anchor', d =>
            Math.sin((d.endAngle + d.startAngle) / 2) > 0 ? 'start' : 'end'
        )
        .attr('dominant-baseline', d =>
            Math.cos((d.endAngle + d.startAngle) / 2) > 0 ? 'initial' : 'hanging'
        );
  }

  private updatePie() {
    const arc = d3.arc().outerRadius(this.radius).innerRadius(0);
    const arcText = d3.arc().outerRadius(this.radius * 2.05).innerRadius(0);
    this.piePieces.data(this.pie);
    this.chart.selectAll('text').data(this.pie);

    this.piePieces
      .transition().duration(750).attrTween('d', arcTween);

    this.pieText
      .text(d => d.value === 0 ? '' : d.data.key)
      .transition().duration(750)
      .attr('transform', d =>  `translate(${arcText.centroid(d)})`)
      .attr('text-anchor', d =>
          Math.sin((d.endAngle + d.startAngle) / 2) > 0 ? 'start' : 'end'
      )
      .attr('dominant-baseline', d =>
          Math.cos((d.endAngle + d.startAngle) / 2) > 0 ? 'initial' : 'hanging'
      );

    function arcTween(a) {
      const interpolation = d3.interpolate(this._current, a);
      this._current = interpolation(0);
      return function(t) {
        return arc(interpolation(t));
      };
    }
  }

}
