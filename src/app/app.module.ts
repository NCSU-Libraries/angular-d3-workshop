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

//NOTE: NgModules is a decorator function, that takes a single metadata object that consists of multiple properties. The most common properties are declarations, imports, providers. The bootstrap property is also included in the root @NgModule (found in app.module.ts).
// For more information on Modules please visit: https://angular.io/guide/architecture#modules
@NgModule({

//NOTE: Declarations are the view classes that belog to this module. In this case they are other components of the application.
  declarations: [
    AppComponent,
    TableComponent,
    PieChartComponent,
    BarChartComponent
  ],

  //NOTE: Imports other modules whose classes are needed by this component templates in this module.
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

  //NOTE: Providers are the creators of services that become globally available within the application.
  providers: [FireDataService],

  //NOTE: The main application view (root component or app.component.ts) is launched by bootstrap. The root module should be the only module that has a bootstrap property.
  bootstrap: [AppComponent]
})
export class AppModule { }
