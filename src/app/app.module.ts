import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { FireDataService } from './fire-data.service';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [FireDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
