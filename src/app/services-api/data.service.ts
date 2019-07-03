import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warning } from './model/warning';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  linkLOCATIONapi: string = 'https://5d0c475e9ab9d80014c25e66.mockapi.io/Location';
  linkIPSapi: string = 'https://5d0c475e9ab9d80014c25e66.mockapi.io/Location';
  linkDOMAINapi: string = 'https://5d0c475e9ab9d80014c25e66.mockapi.io/Location';
  linkORGapi: string = 'https://5d0c475e9ab9d80014c25e66.mockapi.io/Organization';
  linkACCOUNTapi: string = 'https://5d0c475e9ab9d80014c25e66.mockapi.io/Account';
  linkWARNINGapi: string = 'https://5d0c475e9ab9d80014c25e66.mockapi.io/Warning';

  linkWARNINGDETAILapi: string = 'https://5d0c475e9ab9d80014c25e66.mockapi.io/Warning/';

  constructor(private _http: HttpClient) { }

  getLOCATION(): Observable<any> {
    return this._http.get(this.linkLOCATIONapi);
  }

  getIPS(): Observable<any> {
    return this._http.get(this.linkIPSapi);
  }

  getDOMAIN(): Observable<any> {
    return this._http.get(this.linkDOMAINapi);
  }

  getORG(): Observable<any> {
    return this._http.get(this.linkORGapi);
  }

  getACCOUNT(): Observable<any> {
    return this._http.get(this.linkACCOUNTapi);
  }

  getWARNING(): Observable<any> {
    return this._http.get(this.linkWARNINGapi);
  }

  detailWARNING(id: string) {
    return this._http.get<Warning>(`${this.linkWARNINGDETAILapi}${id}`);
  }

}
