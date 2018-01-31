import { Component, OnInit, OnChanges, Input, ViewEncapsulation } from '@angular/core';

import { Fire } from '../data.interface';
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
  private pieData: Array<{key, value}>;
  private color: d3.ScaleOrdinal<string, string>;
  private svg: d3.Selection<SVGElement, any, any, any>;
  private chart: any;
  private pie: any;
  private piePieces: any;
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
      this.updatePie();
    }
  }

  private setChartProperties() {
    const canvasWidth = parseInt(this.svg.style('width'), 0);
    const canvasHeight = parseInt(this.svg.style('height'), 0);

    this.radius = Math.min(canvasWidth, canvasHeight) * 0.75 / 2;

    this.chart
      .attr('fill', '#333')
      .attr('transform', `translate( ${canvasWidth / 2}, ${canvasHeight / 2})`);

  }

  private drawPie() {
    this.color = d3.scaleOrdinal(d3.schemeCategory10)
      .domain(this.fires.map(fire => fire.Cause));

    this.pieData = d3.nest<Fire, number>()
      .key(d => d.Cause)
      .rollup(v => v.length)
      .entries(this.fires);

    this.pie = d3.pie<any>()
      .sort(null)
      .value(d => d.value);

    const arc = d3.arc().outerRadius(this.radius).innerRadius(0);

    this.piePieces = this.chart.datum(this.pieData).selectAll('path')
      .data(this.pie)
      .enter().append('path')
        .attr('d', arc)
        .attr('fill', d => this.color(d.data.key))
        .each(function(d) { this._current = d; });
  }

  private updatePie() {
    this.pieData.forEach(d =>
      d.key === this.deleteFire.Cause ? d.value-- : d.value
    );

    // this.chart.datum(this.pieData);

    const arc = d3.arc().outerRadius(this.radius).innerRadius(0);
    this.piePieces = this.piePieces.data(this.pie);
    this.piePieces
      .transition().duration(750).attrTween('d', arcTween);

    function arcTween(a) {
      const i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function(t) {
        return arc(i(t));
      };
    }
  }

}
