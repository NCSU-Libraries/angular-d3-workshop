# Getting Started with Angular and D3.js

This workshop was developed to help walk you through the creation of a data dashboard using Angular and D3.js. While it is not a step-by-step tutorial we have added extensive comments to the code. We have tried to highlight the most important steps in the process on this site. Most of the work you will be doing is uncommenting sections of code, in a sequential manner, to get a sense of how each component of the application works.

A complete, working example is available for demo here: https://waltgurley.github.io/fires-dashboard-final-build/

Data for this demo consists of information related to the top 20 largest California wildfires as of 1/12/2018. This data was accessed from the CA.gov [CAL FIRE Incident Information Page](http://cdfdata.fire.ca.gov/incidents/incidents_statsevents) and transcribed from the document 'Top 20 Largest California Wildfires': [Top20_Acres.pdf](http://www.fire.ca.gov/communications/downloads/fact_sheets/Top20_Acres.pdf)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Using the Angular CLI tool

### Install the CLI tool

`npm install -g @angular/cli`

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Setting up an Angular project

...

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
