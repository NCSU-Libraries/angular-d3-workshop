import { Component, OnInit } from '@angular/core';

import { FireDataService } from '../fire-data.service';
import { Fire } from '../data.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private fires: Fire[];
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
    this.fireDataService.deleteFire(fire).subscribe();
  }

}
