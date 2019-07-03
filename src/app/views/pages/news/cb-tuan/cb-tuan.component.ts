import { Component, OnInit, OnDestroy } from '@angular/core';
import { Warning } from '../../../../services-api/model/warning';
import { DataService } from '../../../../services-api/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'kt-cb-tuan',
  templateUrl: './cb-tuan.component.html',
  styleUrls: ['./cb-tuan.component.scss']
})
export class CbTuanComponent implements OnInit,OnDestroy {

  public lstWarning: Warning[] = [];
  public subcription: Subscription;

  constructor(private _data: DataService, private _router: Router) { }


  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

  ngOnInit() {
    this.getWARNING();
  }

  getWARNING() {
    this.subcription = this._data.getWARNING().subscribe(data => {
      this.lstWarning = data;
      console.log(data);

    }, error => {
      console.log(error);
    });
  }

  onDetail(id: string) {
    this._router.navigateByUrl(`/news/${id}`);
  }

  getStatusGlasses( item: {id: number,imgLink: any, title: string,description: string,status: string}) {
return{
  'badge badge-success': item.status === 'High',
  'badge badge-warning': item.status === 'Medium',
  'badge badge-danger': item.status === 'Low',
};
  }
}
