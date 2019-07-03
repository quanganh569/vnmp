import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { DataService } from '../../../../services-api/data.service';
import { Router } from '@angular/router';
import { Ips } from '../../../../services-api/model/ips';
import { Subscription } from 'rxjs';
import { Sort } from '@angular/material';

@Component({
  selector: 'kt-ips',
  templateUrl: './ips.component.html',
  styleUrls: ['./ips.component.scss']
})
export class IpsComponent implements OnInit, OnDestroy, OnChanges {

  IP: string;
  Purpose: string;

  public subcription: Subscription;
  public lstIPS: Ips[] = [];

  p: number = 1;
  searchText;
  constructor(private _data: DataService, private _router: Router) {
    this.lstIPS = this.lstIPS.slice();
   }

   sortlstIPS(sort: Sort) {
    const data = this.lstIPS.slice();
    if (!sort.active || sort.direction === '') {
      this.lstIPS = data;
      return;
    }
    this.lstIPS = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'IP': return compare(a.IP, b.IP, isAsc);
        case 'Purpose': return compare(a.Purpose, b.Purpose, isAsc);
      }
    });
  }
  ngOnChanges() { }
  ngOnInit() {
    this.getIPS();
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
  getIPS() {
    this.subcription = this._data.getIPS().subscribe(data => {
      this.lstIPS = data;

      // console.log(data);

    }, error => {
      console.log(error);

    });
  }
}
function compare(a: number | string | any | Date, b: number | string | any | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
