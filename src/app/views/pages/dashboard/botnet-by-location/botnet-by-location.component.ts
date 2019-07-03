import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../../services-api/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sort } from '@angular/material';
import { Location } from '../../../../services-api/model/location';





@Component({
  selector: 'kt-botnet-by-location',
  templateUrl: './botnet-by-location.component.html',
  styleUrls: ['./botnet-by-location.component.scss']
})
export class BotnetByLocationComponent implements OnInit,OnDestroy {
    IP: string;
    Purpose: string;
    Domain: string;
    Address: string;

  public subcription: Subscription;
  public lstLOCATION: Location[] = [];
  p: number;
  searchText;


  constructor(private _data: DataService, private _router: Router) {
    this.lstLOCATION = this.lstLOCATION.slice();
   }
   sortlstLOCATION(sort: Sort) {
    const data = this.lstLOCATION.slice();
    if (!sort.active || sort.direction === '') {
      this.lstLOCATION = data ;
      return;
    }
    this.lstLOCATION = data.sort((a,b) => {
     const isAsc = sort.direction === 'asc';
     switch (sort.active) {
       case 'IP' : return compare(a.IP,b.IP,isAsc);
       case 'Purpose': return compare (a.Purpose,b.Purpose,isAsc);
       case 'Domain' : return compare (a.Domain,b.Domain,isAsc);
       case 'Address' : return compare (a.Address,b.Address,isAsc);
       default: return 0;
     }
    });
  }

  ngOnInit() {
    this.getLOCATION();
  }
  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

  getLOCATION() {
    this.subcription = this._data.getLOCATION().subscribe(data => {
      this.lstLOCATION = data;

    }, error => {
      console.log(error);
    });
  }
}
function compare(a: number | string | any | Date, b: number | string | any |Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
