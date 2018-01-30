import { Component, OnInit, OnChanges, Input, ViewEncapsulation } from '@angular/core';

import { Fire } from '../data.interface';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  encapsulation: ViewEncapsulation.None // Need for svg styles in bar-chart.component.css
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() private fires: Fire[];
  private svg: d3.Selection<SVGElement, any, any, any>;
  private chart: d3.Selection<any, any, any, any>;
  private bars: d3.Selection<any, Fire, any, any>;
  private width: number;
  private height: number;
  private margin: { top: number, right: number, bottom: number, left: number };
  private xScale: d3.ScaleLinear<number, number>;
  private yScale: d3.ScaleBand<string>;
  private xAxis: any;
  private yAxis: any;

  constructor() { }

  ngOnInit() {
    this.svg = d3.select('.bar-chart');
    this.chart = this.svg.append('g');

    this.setChartProperties();
    this.setScales();
    this.drawBars();
    this.drawAxes();
  }

  ngOnChanges() {
    if (this.bars) {
      this.setScales();
      this.drawBars();
      this.updateAxes();
    }
  }

  private setChartProperties() {
    const canvasWidth = parseInt(this.svg.style('width'), 0);
    const canvasHeight = parseInt(this.svg.style('height'), 0);

    this.margin = {
      top: canvasHeight * 0.05,
      right: canvasWidth * 0.05,
      bottom: canvasHeight * 0.1,
      left: canvasWidth * 0.3,
    };
    this.width = canvasWidth - this.margin.left - this.margin.right;
    this.height = canvasHeight - this.margin.top - this.margin.bottom;

    this.chart
      .attr('transform', `translate( ${this.margin.left}, ${this.margin.top})`);
  }

  private setScales() {
    const xDomain = [0, d3.max(this.fires.map(fire => fire.Acres))];
    const yDomain = this.fires.map(fire => fire.Name);

    this.xScale = d3.scaleLinear().domain(xDomain).range([0, this.width]);
    this.yScale = d3.scaleBand().domain(yDomain).range([0, this.height])
      .padding(0.1);
  }

  private drawBars() {
    const color = d3.scaleOrdinal(d3.schemeCategory10)
      .domain(this.fires.map(fire => fire.Cause));

    this.bars = this.chart
      .selectAll('.bar')
      .data(this.fires, fire => fire.id);

    // Enter - Add bars to chart
    this.bars
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('fill', fire => color(fire.Cause))
      .attr('x', 0)
      .attr('y', fire => this.yScale(fire.Name))
      .attr('width', fire => this.xScale(fire.Acres))
      .attr('height', this.yScale.bandwidth());

    // Update - Modify current bars on chart
    this.bars
      .transition().delay(500)
      .attr('y', fire => this.yScale(fire.Name))
      .attr('width', fire => this.xScale(fire.Acres))
      .attr('height', this.yScale.bandwidth());

    // Exit - Remove bars from chart
    this.bars
      .exit()
      .transition()
      .attr('width', 0)
      .remove();
  }

  private drawAxes() {
    this.xAxis = d3.axisBottom(this.xScale);
    this.yAxis = d3.axisLeft(this.yScale);

    this.chart.append('g')
      .call(this.xAxis)
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(0, ${this.height})`)
      .selectAll('text')
      .attr('dy', '1em')
      .attr('transform', 'translate(12, 0) rotate(60)')
      .style('text-anchor', 'start');

    this.chart.append('g')
      .call(this.yAxis)
      .attr('class', 'axis axis-y')
      .attr('dy', '0.31em')
      .attr('text-anchor', 'end');
  }

  private updateAxes() {
    this.xAxis = d3.axisBottom(this.xScale);
    this.yAxis = d3.axisLeft(this.yScale);

    this.chart.select('.axis-x')
      .transition().delay(500)
      .call(this.xAxis);

    this.chart.select('.axis-y')
      .transition().delay(500)
      .call(this.yAxis);
  }

}
