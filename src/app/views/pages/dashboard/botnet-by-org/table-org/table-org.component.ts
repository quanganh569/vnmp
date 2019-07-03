import { Component, OnInit, OnDestroy } from '@angular/core';
import { Org } from '../../../../../services-api/model/org';
import { DataService } from '../../../../../services-api/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sort } from '@angular/material';


@Component({
  selector: 'kt-table-org',
  templateUrl: './table-org.component.html',
  styleUrls: ['./table-org.component.scss']
})
export class TableOrgComponent implements OnInit, OnDestroy {
  IP: any;
  Malware: string;
  CCserver: any;
  Time: Date;

  public subcription: Subscription;
  public lstORG: Org[] = [];
  searchText;
  p: number = 1;


  constructor(private _data: DataService, private _router: Router) {
    this.lstORG = this.lstORG.slice();
  }


  sortlstORG(sort: Sort) {
    const data = this.lstORG.slice();
    if (!sort.active || sort.direction === '') {
      this.lstORG = data;
      return;
    }
    this.lstORG = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'IP': return compare(a.IP, b.IP, isAsc);
        case 'Malware': return compare(a.Malware, b.Malware, isAsc);
        case 'CCserver': return compare(a.CCserver, b.CCserver, isAsc);
        case 'Time' : return compare (a.Time, b.Time ,isAsc);
        default: return 0;
      }
    });
  }




  ngOnInit() {
    this.getORG();
  }
  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
  getORG() {
    this.subcription = this._data.getORG().subscribe(data => {
      this.lstORG = data;

    }, error => {
      console.log(error);

    });
  }
}
function compare(a: number | string | any | Date, b: number | string | any |Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
