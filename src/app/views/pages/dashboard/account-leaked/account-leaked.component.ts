import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../../services-api/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sort } from '@angular/material';
import { Account } from '../../../../services-api/model/account';

@Component({
  selector: 'kt-account-leaked',
  templateUrl: './account-leaked.component.html',
  styleUrls: ['./account-leaked.component.scss']
})
export class AccountLeakedComponent implements OnInit,OnDestroy {
  DetectedAt: Date;
  Domain: string;
  Username: string;
  Password: string;


  public subcription: Subscription;
  public lstAccount: Account[] = [];

  a: number ;
  searchText;

  constructor(private _data: DataService,private _router: Router) {
    this.lstAccount = this.lstAccount.slice();
  }
  sortlstAccount(sort: Sort ) {
      const data = this.lstAccount.slice();
      if (!sort.active || sort.direction === '') {
         this.lstAccount = data;
         return;
      }
      this.lstAccount = data.sort((a,b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'DetectedAt': return compare(a.DetectedAt, b.DetectedAt, isAsc);
          case 'Domain': return compare(a.Domain, b.Domain, isAsc);
          case 'Username': return compare(a.Username, b.Username, isAsc);
          case 'Password': return compare(a.Password, b.Password, isAsc);
          default: return 0;
        }
      });
  }
  ngOnInit() {
    this.getACCOUNT();
  }
  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }

  }

  getACCOUNT() {
    this.subcription = this._data.getACCOUNT().subscribe(data => {
      this.lstAccount = data;
    },error => {
      console.log(error);
    });
  }
}
function compare(a: number | string | any | Date, b: number | string | any |Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
