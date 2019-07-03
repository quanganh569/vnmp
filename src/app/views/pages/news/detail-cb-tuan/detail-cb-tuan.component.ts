import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../../services-api/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'kt-detail-cb-tuan',
  templateUrl: './detail-cb-tuan.component.html',
  styleUrls: ['./detail-cb-tuan.component.scss']
})
export class DetailCbTuanComponent implements OnInit,OnDestroy {
  idCbtuan: string;
  public title: string;
  public imgLink: any;
  public description: string;
  // status: number;
  public subcription: Subscription;
  constructor(private _acRouter: ActivatedRoute, private _data: DataService, private _router: Router) {

    this.idCbtuan = this._acRouter.snapshot.params['id'];

    if (this.idCbtuan) {
      this._data.detailWARNING(this.idCbtuan).subscribe(
        data => {
          this.title = data.title;
          this.imgLink = data.imgLink;
          this.description = data.description;
        }, error => {
          console.log('Có lỗi xảy ra trong quá trình tải dữ liệu', 'Tải dữ liệu bị lỗi');

        });

    }
  }
  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
  ngOnInit() {}

  Backtonews() {
    this._router.navigateByUrl(`/news/cb-tuan`);
  }
}
