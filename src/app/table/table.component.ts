import { Component, OnInit } from '@angular/core';

import { FireDataService } from '../fire-data.service';
import { Fire } from '../fire-data.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // Setting the property of fires to the import of Fire[] from the fire-data.interface.
  public fires: Fire[];

  private deleteFire: Fire;

  constructor(private fireDataService: FireDataService) { }
  // ngOnInit is called right after the directive's data-bound properties have been checked for the first time, and before any of its children have been checked. It is invoked only once when the directive is instantiated.
  ngOnInit() {
     this.getFireData();
  }

  getFireData(): void {
    this.fireDataService.getData()
    // Subscribe is the other half of the observable. Observable is newspaper, subscribe is what gets it. It is also only delivered at the newspapers set delivery cycle
      .subscribe(fires => this.fires = fires);
  }

  delete(fire: Fire): void {
    this.fires = this.fires.filter(keepFire => keepFire !== fire);
    this.deleteFire = fire;
    this.fireDataService.deleteFire(fire).subscribe();
  }

}
