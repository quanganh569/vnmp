import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../../services-api/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sort } from '@angular/material';
import { Account } from '../../../../services-api/model/account';


@Component({
  selector: 'kt-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {
  Name: string;
  Email: string;
  Phone: number;

  public subcription: Subscription;
  public lstContact: Account[] = [];
  p: number = 1;
  searchText;

  constructor(private _data: DataService, private _router: Router) {
    this.lstContact = this.lstContact.slice();
  }
  sortlstContact(sort: Sort) {
    const data = this.lstContact.slice();
    if (!sort.active || sort.direction === '') {
      this.lstContact = data;
      return;
    }
    this.lstContact = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Name': return compare(a.Name, b.Name, isAsc);
        case 'Email': return compare(a.Email, b.Email, isAsc);
        case 'Phone': return compare(a.Phone, b.Phone, isAsc);
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
      this.lstContact = data;

    }, error => {
      console.log(error);
    });
  }
}
function compare(a: number | string | any | Date, b: number | string | any | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
