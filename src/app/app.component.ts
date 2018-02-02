// NOTE: A component controls the view. This is the main (or default app componeent). The most important things to note in this component are the selector and template url properties.

import { Component } from '@angular/core';

@Component({
  // NOTE: The selector tells the application that it will be contained within the <app-root> html tag on the index.html page
  selector: 'app-root',
  // NOTE: The templateUrl designates which html file to use as the template for this componeent.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
