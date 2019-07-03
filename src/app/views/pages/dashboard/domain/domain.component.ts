import { Component, OnInit, OnDestroy } from '@angular/core';
import { Domain } from '../../../../services-api/model/domain';
import { DataService } from '../../../../services-api/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sort } from '@angular/material';

@Component({
  selector: 'kt-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit, OnDestroy {
  Domain: string;
  public subcription: Subscription;
  public lstDomain: Domain[] = [];

  p: number = 1;
  searchText;

  constructor(private _data: DataService, private _router: Router) { }
  sortlstDomain(sort: Sort) {
    const data = this.lstDomain.slice();
    if (!sort.active || sort.direction === '') {
      this.lstDomain = data;
      return;
    }
    this.lstDomain = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Domain': return compare(a.Domain, b.Domain, isAsc);
      }
    });
  }
  ngOnInit() {
    this.getDOMAIN();
  }
  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }

  }

  getDOMAIN() {
    this.subcription = this._data.getDOMAIN().subscribe(data => {
      this.lstDomain = data;

      // console.log(data);
    }, error => {
      console.log(error);

    }
    );
  }
}
function compare(a: number | string | any | Date, b: number | string | any | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
