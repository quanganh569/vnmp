import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../../services-api/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sort } from '@angular/material';
import { Account } from '../../../../services-api/model/account';
@Component({
  selector: 'kt-account-leaked-by-domain',
  templateUrl: './account-leaked-by-domain.component.html',
  styleUrls: ['./account-leaked-by-domain.component.scss']
})
export class AccountLeakedByDomainComponent implements OnInit, OnDestroy {
  Domain: string;
  Count: number;

  public lstAccountDomain: Account[] = [];
  public subcription: Subscription;
  searchText;

  constructor(private _data: DataService, private _router: Router) {
    this.lstAccountDomain = this.lstAccountDomain.slice();
  }
  sortlstAccountDomain(sort: Sort) {
    const data = this.lstAccountDomain.slice();
    if (!sort.active || sort.direction === '') {
      this.lstAccountDomain = data;
      return;
    }
    this.lstAccountDomain = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Domain': return compare(a.Domain, b.Domain, isAsc);
        case 'Count': return compare(a.Count, b.Count, isAsc);
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
      this.lstAccountDomain = data;
    }, error => {
      console.log(error);
    });
  }
}
function compare(a: number | string | any | Date, b: number | string | any | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
