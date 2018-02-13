import { Component, OnInit, OnChanges, Input, ViewEncapsulation } from '@angular/core';

import { Fire } from '../fire-data.interface'; // Import the fire object type format
import * as d3 from 'd3'; // Import the d3 library

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() private firesBars: Fire[]; // Fires array input property bound to fires in table.component.ts
  private svg: d3.Selection<SVGElement, any, HTMLElement, any>; // d3 selection of svg element
  private chart: any; // d3 selection of svg group, 'g', element
  private bars: d3.Selection<SVGElement, Fire, any, any>; // d3 selection of svg 'rect' element
  private width: number;
  private height: number;
  private margin: { top: number, right: number, bottom: number, left: number };
  private xScale: d3.ScaleLinear<number, number>; // d3 linear scale function
  private yScale: d3.ScaleBand<string>; // d3 band scale function
  private xAxis: any;
  private yAxis: any;

  constructor() { }

  // NOTE: ngOnInit is called once after data-bound input properties are set with ngOnChanges
  ngOnInit() {
    // TODO-1: Create a d3 selection from the SVG with class 'bar-chart' and append a SVG group element ('g')
    // this.svg = d3.select('.bar-chart');
    // this.chart = this.svg.append('g');

    this.setChartProperties();
    this.setScales();
    this.drawBars();
    this.drawAxes();
  }

  // NOTE: ngOnChanges is called when the fires data changes, this includes at initial creation
  ngOnChanges() {
    if (this.bars) {
      // this.setScales();
      // this.drawBars();
      // this.updateAxes();
    }
  }

  // NOTE: onResize is bound to a window resize event (see bar-chart.component.html)
  onResize() {
    // this.setChartProperties();
    // this.drawOnResize();
  }

  // TODO-2: Setup chart properties to easily manage the chart canvas
  private setChartProperties() {
    // TODO-2.1: Get the SVG width and Height from the SVG selection
    // const canvasWidth = parseInt(this.svg.style('width'), 0);
    // const canvasHeight = parseInt(this.svg.style('height'), 0);

    // TODO-2.2: Set a margin based on the SVG width and height then set the width and height of our chart with margins
    // this.margin = {
    //   top: canvasHeight * 0.05,
    //   right: canvasWidth * 0.05,
    //   bottom: canvasHeight * 0.1,
    //   left: canvasWidth * 0.3,
    // };
    // this.width = canvasWidth - this.margin.left - this.margin.right;
    // this.height = canvasHeight - this.margin.top - this.margin.bottom;

    // TODO-2.3: Transform the chart by the left and top margin to center it in our div
    // this.chart
    //   .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
  }

  // TODO-3: Set the scales that will define the range of our graph data
  private setScales() {
    // TODO-3.1: Set the input domain (the spread of values of our input data) for the x and y variables
    // const xDomain = [0, d3.max(this.firesBars.map(fire => fire.Acres))];
    // const yDomain = this.firesBars.map(fire => fire.Name);

    // TODO-3.2: Create a linear scale for our x data (Acres) with the appropriate domain and range
    // this.xScale = d3.scaleLinear()
    //   .domain(xDomain).range([0, this.width]);

    // TODO-3.3: Create a band scale for our y data (Name) with the appropriate domain and range (https://github.com/d3/d3-scale#band-scales)
    // this.yScale = d3.scaleBand()
    //   .domain(yDomain).range([0, this.height])
    //   .padding(0.1);
  }

  // TODO-4: Draw the chart axes
  private drawAxes() {
    // TODO-4.1: Initialize the x and y axis properties with appropriate d3.axis methods
    // this.xAxis = d3.axisBottom(this.xScale)
    //   .ticks(5);
    // this.yAxis = d3.axisLeft(this.yScale);

    // TODO-4.2: Draw the x axis
    // this.chart.append('g')
    //   .call(this.xAxis)
    //   .attr('class', 'axis-x')
    //   .attr('transform', `translate(0, ${this.height})`)
    //   .append('text')
    //     .text('Acres')
    //     .attr('class', 'axis-x-title')
    //     .attr('transform', `translate(${this.width}, 0)`)
    //     .attr('fill', `black`)
    //     .attr('dominant-baseline', `ideographic`)
    //     .attr('text-anchor', `end`);

    // TODO-4.3: Draw the y axis
    // this.chart.append('g')
    //   .call(this.yAxis)
    //   .attr('class', 'axis-y');
  }

  // TODO-5: Draw the visual representation of our data as bars with relative length representing Acres and color representing Cause
  private drawBars() {
    // TODO-5.1: Create an ordinal scale with a domain to map fire Cause to unique colors
    // const color = d3.scaleOrdinal(d3.schemeCategory10)
    //   .domain(this.firesBars.map(fire => fire.Cause));

    // TODO-5.2: Join fire data to the '.bar' elements using a key function
    // this.bars = this.chart
    //    .selectAll('.bar')
    //    .data(this.firesBars, fire => fire.id); // https://bost.ocks.org/mike/constancy/

    // TODO-5.3: Enter - Add bars to chart
    // this.bars
    //   .enter()
    //   .append('rect')
    //   .attr('class', 'bar')
    //   .attr('fill', fire => color(fire.Cause))
    //   .attr('x', 0)
    //   .attr('y', fire => this.yScale(fire.Name))
    //   .attr('width', fire => this.xScale(fire.Acres))
    //   .attr('height', this.yScale.bandwidth());

    // TODO-5.4: Update - Modify current bars on chart
    // this.bars
    //   .transition().delay(250)
    //   .attr('y', fire => this.yScale(fire.Name))
    //   .attr('width', fire => this.xScale(fire.Acres))
    //   .attr('height', this.yScale.bandwidth());

    // TODO-5.5: Exit - Remove bars from chart
    // this.bars
    //   .exit()
    //   .transition()
    //   .attr('width', 0)
    //   .remove();
  }

  private updateAxes() {
    this.xAxis.scale(this.xScale);
    this.yAxis.scale(this.yScale);

    this.chart.select('.axis-x')
      .transition().delay(250)
      .call(this.xAxis);

    this.chart.select('.axis-y')
      .transition().delay(250)
      .call(this.yAxis);
  }

  private drawOnResize() {
    this.xScale.range([0, this.width]);
    this.yScale.range([0, this.height]);

    this.chart.select('.axis-x')
      .call(this.xAxis)
      .attr('transform', `translate(0, ${this.height})`)
      .select('.axis-x-title')
        .attr('transform', `translate(${this.width}, 0)`);

    this.chart.select('.axis-y')
      .call(this.yAxis);

    this.chart.selectAll('.bar')
      .attr('x', 0)
      .attr('y', fire => this.yScale(fire.Name))
      .attr('width', fire => this.xScale(fire.Acres))
      .attr('height', this.yScale.bandwidth());
  }

}
