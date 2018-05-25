# Getting Started with Angular and D3.js

This workshop was developed to help walk you through the creation of a data dashboard using Angular and D3.js. While it is not a step-by-step tutorial we have added extensive comments to the code. We have tried to highlight the most important steps in the process on this site. Most of the work you will be doing is uncommenting sections of code, in a sequential manner, to get a sense of how each component of the application works.

A complete, working example is available for demo here: https://waltgurley.github.io/fires-dashboard-final-build/

Data for this demo consists of information related to the top 20 largest California wildfires as of 1/12/2018. This data was accessed from the CA.gov [CAL FIRE Incident Information Page](http://cdfdata.fire.ca.gov/incidents/incidents_statsevents) and transcribed from the document 'Top 20 Largest California Wildfires': [Top20_Acres.pdf](http://www.fire.ca.gov/communications/downloads/fact_sheets/Top20_Acres.pdf)

*****

## Setting up an Angular project

## Angular Background

Angular is an open-source front-end web framework written in TypeScript. It is primarily maintained by Google. It is designed to create single-page web applications. It is based around a hierarch of components to encourage modularized development.

> **Naming Note:** The current (2.x and up) versions of Angular are quite different from the 1.x versions which can create a lot of confusion while troubleshooting. Angular 1.x has been renamed to AngularJS and the current versions are simply referred to as Angular.

### Angular Resources

This workshop is intended to give a brief overview of the Angular architecture and how it can be used to build applications. If you are looking for more in-depth information on Angular here are some additional resources. 

[**Angular Tutorial: Tour of Heroes**](https://angular.io/tutorial) - There is an excellent walkthrough of Angular via the [Angular Tour of Heroes](https://angular.io/tutorial) tutorial. This tutorial provides an in-depth walk through for those new to angular. 

[**Angular Quickstart**](https://angular.io/guide/quickstart) - An in-depth overview of setting up a development environment and bootstrapping your first Angular app. 

*****

## Getting Started with this Tutorial

### Clone the Repository and Install Packages

If you have not already done so - please do the following:

- Install [Node](https://nodejs.org/en/)
- Install AngularCLI by running this command from the terminal `npm install -g @angular/cli`
- Clone the project repo from https://github.ncsu.edu/ncsu-libraries/angular-d3-workshop

### Installing Node Packages

In order to begin working within the dashboard application you will need to install the proper node packages. To do so open up your terminal application or command prompt and run the following commands.

```
cd angular-d3-workshop
npm install
npm start
```

After running the `npm start` command you should be able to navigate to localhost:4200 in your browser and see your application. At this point the application should only consist of a handful of gray lines near the top of your browser. If you are able to navigate to this page, then you are set up and ready to move on to the next part of the workshop.

*****

### Angular File Overview

This application consists of three components - each of which are responsible for distinct functions within the application.

#### Table Component
The main purpose of the table component is to pull in data from a data source, and to display that data in a table.

#### Bar Chart Component
The main purpose of the bar chart component is to use the data from its parent component (table) to build a bar chart using D3.js

#### Pie Chart Component
The main purpose of the pie chart component is to use the data from its parent component (table) to build a pie chart using D3.js


### Functions of Important Files
We have marked up the following files with comments that attempt to thoroughly describe the function of each part of the file. The comments are found directly in the code below. Take a look at the each of the files below to get a better idea of what each file is doing.

- #### [app.component.ts](https://github.com/NCSU-Libraries/angular-d3-workshop/blob/master/src/app/app.component.ts)

- #### [index.html](https://github.com/NCSU-Libraries/angular-d3-workshop/blob/master/src/index.html)

- #### [app.module.ts](https://github.com/NCSU-Libraries/angular-d3-workshop/blob/master/src/app/app.module.ts)

- #### [fire-data.interface.ts](https://github.com/NCSU-Libraries/angular-d3-workshop/blob/master/src/app/fire-data.interface.ts)

- #### [table.component.ts](https://github.com/NCSU-Libraries/angular-d3-workshop/blob/master/src/app/table/table.component.ts)

- #### [table.component.html](https://github.com/NCSU-Libraries/angular-d3-workshop/blob/master/src/app/table/table.component.html)

- #### [bar-chart.component.ts](https://github.com/NCSU-Libraries/angular-d3-workshop/blob/master/src/app/bar-chart/bar-chart.component.ts)

*****

## Making a bar chart with D3.js

This part of the workshop will walk you through the process of binding data to a child component and using the D3 JavaScript library to create a bar chart with the data. These instructions follow notes and commented-out lines of code within each file to be edited. Each code snippet is preceded by the line number and document where it can be found.

*Note: While this section incorporates Angular properties and TypeScript syntax, the D3.js code is agnostic to the framework and could be readily modified for incorporation to another JavaScript framework.*

### Add the bar chart component and set up its properties

Add the `<app-bar-chart>` component to the `TableComponent` template (`table.component.html`) with the addition of an `ngIf` built-in directive and a data binding. The `ngIf` directive is set to the `fires` data property of `TableComponent` to ensure that the fires data has loaded before the `BarChartComponent` initializes. The `fires` data property of the `TableComponent` is bound as an input property to the `firesBars` data property of the `BarChartComponent`.

Line 5 in `table.component.html`:
```html
  <app-bar-chart class="col-12 col-md-6" *ngIf="fires" [firesBars]="fires"></app-bar-chart>
```

*Notes:*

*You must add an asterisk* `*` *in front of ngIf.*

*Additional Bootstrap css classes are included to set the size of the component display: "col-12 col-md-6"*

###
