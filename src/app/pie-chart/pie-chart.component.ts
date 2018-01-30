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
  private svg: d3.Selection<SVGElement, any, any, any>;
  private chart: d3.Selection<any, any, any, any>;
  private piePieces: d3.Selection<any, any, any, any>;
  private width: number;
  private height: number;
  private margin: { top: number, right: number, bottom: number, left: number };
  constructor() { }

  ngOnInit() {
    console.log(this.fires)
    this.svg = d3.select('.pie-chart');
    this.chart = this.svg.append('g');

    this.setChartProperties();
  }

  ngOnChanges() {

  }

  private setChartProperties() {
    const canvasWidth = parseInt(this.svg.style('width'), 0);
    const canvasHeight = parseInt(this.svg.style('height'), 0);

    this.margin = {
      top: canvasHeight * 0.05,
      right: canvasWidth * 0.05,
      bottom: canvasHeight * 0.05,
      left: canvasWidth * 0.05,
    };
    this.width = canvasWidth - this.margin.left - this.margin.right;
    this.height = canvasHeight - this.margin.top - this.margin.bottom;

    this.chart
      .attr('fill', '#333')
      .attr('transform', `translate( ${this.margin.left}, ${this.margin.top})`);
  }

}
