import { Component, OnInit } from '@angular/core';

import { FireDataService } from '../fire-data.service';
import { Fire } from '../fire-data.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public fires: Fire[];
  private deleteFire: Fire;
  constructor(private fireDataService: FireDataService) { }

  ngOnInit() {
     this.getFireData();
  }

  getFireData(): void {
    this.fireDataService.getData()
      .subscribe(fires => this.fires = fires);
  }

  delete(fire: Fire): void {
    this.fires = this.fires.filter(keepFire => keepFire !== fire);
    this.deleteFire = fire;
    this.fireDataService.deleteFire(fire).subscribe();
  }

}
