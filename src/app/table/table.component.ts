import { Component, OnInit } from '@angular/core';

import { FireDataService } from '../fire-data.service';
import { Fire } from '../data.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  //This is where we introduce data interface
  private fires: Fire[];
  private deleteFire: Fire;
  constructor(private fireDataService: FireDataService) { }
  //Lifecycle Hooks - after first ngOnChanges
  ngOnInit() {
     this.getFireData();
  }

  getFireData(): void {
    this.fireDataService.getData()
    //Subscribe is the other half of the observable. Observable is newspaper, subscribe is what gets it. It is also only delivered at the newspapers set delivery cycle
      .subscribe(fires => this.fires = fires);
  }

  delete(fire: Fire): void {
    this.fires = this.fires.filter(keepFire => keepFire !== fire);
    this.deleteFire = fire;
    this.fireDataService.deleteFire(fire).subscribe();
  }

}
