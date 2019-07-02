(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-news-news-module"],{

/***/ "./src/app/views/pages/news/cb-dotxuat/cb-dotxuat.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/news/cb-dotxuat/cb-dotxuat.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n<div class=\"row\"> \r\n    <div class=\"col-xl-12\">\r\n        <kt-portlet [class]=\"'kt-portlet'\">\r\n            <kt-portlet-body>\r\n              content cb-dotxuat\r\n            </kt-portlet-body>\r\n        </kt-portlet>\r\n    </div>\r\n  </div> -->"

/***/ }),

/***/ "./src/app/views/pages/news/cb-dotxuat/cb-dotxuat.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/news/cb-dotxuat/cb-dotxuat.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL25ld3MvY2ItZG90eHVhdC9jYi1kb3R4dWF0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/news/cb-dotxuat/cb-dotxuat.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/news/cb-dotxuat/cb-dotxuat.component.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var CbDotxuatComponent = /** @class */ (function () {
    function CbDotxuatComponent() {
    }
    CbDotxuatComponent.prototype.ngOnInit = function () {
    };
    CbDotxuatComponent = __decorate([
        core_1.Component({
            selector: 'kt-cb-dotxuat',
            template: __webpack_require__(/*! ./cb-dotxuat.component.html */ "./src/app/views/pages/news/cb-dotxuat/cb-dotxuat.component.html"),
            styles: [__webpack_require__(/*! ./cb-dotxuat.component.scss */ "./src/app/views/pages/news/cb-dotxuat/cb-dotxuat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CbDotxuatComponent);
    return CbDotxuatComponent;
}());
exports.CbDotxuatComponent = CbDotxuatComponent;


/***/ }),

/***/ "./src/app/views/pages/news/cb-tuan/cb-tuan.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/news/cb-tuan/cb-tuan.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> <!--DASHBOARD WEBBOX-->\r\n  <div class=\"col-xl-12\">\r\n      <kt-portlet [class]=\"'kt-portlet'\">\r\n          <kt-portlet-body>\r\n            <div class=\"media\" *ngFor=\"let item of lstWarning|paginate: { itemsPerPage: 10, currentPage: p9, id: 'nineth' } \">\r\n              <img class=\"mr-3 img-thumbnail\" src=\"{{item.imgLink}}\" style=\"width: 50px ;height: 50px;margin:0 10px 0 10px\" alt=\"\">\r\n              <div class=\"media-body\">\r\n                <h5 class=\"mt-0\" (click)=\"onDetail(item?.id)\" style=\"cursor:pointer\">{{item.title}}</h5>\r\n                {{item.description}} <a (click)=\"onDetail(item?.id)\" style=\"cursor:pointer;color:cornflowerblue\" id=\"read\"> - Read more </a>\r\n              </div>\r\n              <span class=\"badge badge-primary badge-pill\" [ngClass]=\"getStatusGlasses(item)\">{{item.status}}</span>\r\n            </div>\r\n            <pagination-controls (pageChange)=\"p9 = $event\" id=\"nineth\"></pagination-controls>\r\n          </kt-portlet-body>\r\n      </kt-portlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/pages/news/cb-tuan/cb-tuan.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/news/cb-tuan/cb-tuan.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin-top: 2em; }\n\n.item-list {\n  display: -webkit-box;\n  display: flex; }\n\n.tab-list li {\n  list-style: none; }\n\n.read {\n  cursor: pointer; }\n\n.read:hover {\n  color: blue; }\n\n.content {\n  display: -webkit-box;\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbmV3cy9jYi10dWFuL0Y6XFx2aWV0bmFtbmV0d29ya21vdGl0b3Jpbmdwb3J0YWwvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcbmV3c1xcY2ItdHVhblxcY2ItdHVhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWMsRUFBQTs7QUFFbEI7RUFDSSxvQkFBWTtFQUFaLGFBQVksRUFBQTs7QUFFaEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksV0FBVSxFQUFBOztBQUVkO0VBQ0ksb0JBQVk7RUFBWixhQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9uZXdzL2NiLXR1YW4vY2ItdHVhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgICBtYXJnaW4tdG9wOjJlbTtcclxufVxyXG4uaXRlbS1saXN0e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG59XHJcbi50YWItbGlzdCBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnJlYWR7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnJlYWQ6aG92ZXJ7XHJcbiAgICBjb2xvcjpibHVlO1xyXG59XHJcbi5jb250ZW50e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/views/pages/news/cb-tuan/cb-tuan.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/pages/news/cb-tuan/cb-tuan.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var data_service_1 = __webpack_require__(/*! ../../../../services-api/data.service */ "./src/app/services-api/data.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var CbTuanComponent = /** @class */ (function () {
    function CbTuanComponent(_data, _router) {
        this._data = _data;
        this._router = _router;
        this.lstWarning = [];
    }
    CbTuanComponent.prototype.ngOnDestroy = function () {
        if (this.subcription) {
            this.subcription.unsubscribe();
        }
    };
    CbTuanComponent.prototype.ngOnInit = function () {
        this.getWARNING();
    };
    CbTuanComponent.prototype.getWARNING = function () {
        var _this = this;
        this.subcription = this._data.getWARNING().subscribe(function (data) {
            _this.lstWarning = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    CbTuanComponent.prototype.onDetail = function (id) {
        this._router.navigateByUrl("/news/" + id);
    };
    CbTuanComponent.prototype.getStatusGlasses = function (item) {
        return {
            'badge badge-success': item.status === 'High',
            'badge badge-warning': item.status === 'Medium',
            'badge badge-danger': item.status === 'Low',
        };
    };
    CbTuanComponent = __decorate([
        core_1.Component({
            selector: 'kt-cb-tuan',
            template: __webpack_require__(/*! ./cb-tuan.component.html */ "./src/app/views/pages/news/cb-tuan/cb-tuan.component.html"),
            styles: [__webpack_require__(/*! ./cb-tuan.component.scss */ "./src/app/views/pages/news/cb-tuan/cb-tuan.component.scss")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], CbTuanComponent);
    return CbTuanComponent;
}());
exports.CbTuanComponent = CbTuanComponent;


/***/ }),

/***/ "./src/app/views/pages/news/detail-cb-tuan/detail-cb-tuan.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/news/detail-cb-tuan/detail-cb-tuan.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> <!--DASHBOARD LOCATION-->\r\n  <div class=\"col-xl-12\">\r\n      <kt-portlet [class]=\"'kt-portlet'\">\r\n          <kt-portlet-header [title]=\"'Botnet by location'\">\r\n          </kt-portlet-header>\r\n          <kt-portlet-body>\r\n            <div>\r\n              <h3>{{title}}</h3>\r\n            \r\n            </div>\r\n          </kt-portlet-body>\r\n      </kt-portlet>\r\n  </div>\r\n</div>\r\n<button type=\"button\" class=\"btn btn-info\" (click)=Backtonews()><img class=\"img-fluid\" src=\"https://image.flaticon.com/icons/png/512/13/13964.png\" style=\"max-width:15px;max-height: 15px;\">  Back to News </button>"

/***/ }),

/***/ "./src/app/views/pages/news/detail-cb-tuan/detail-cb-tuan.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/news/detail-cb-tuan/detail-cb-tuan.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL25ld3MvZGV0YWlsLWNiLXR1YW4vZGV0YWlsLWNiLXR1YW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/news/detail-cb-tuan/detail-cb-tuan.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/news/detail-cb-tuan/detail-cb-tuan.component.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var data_service_1 = __webpack_require__(/*! ../../../../services-api/data.service */ "./src/app/services-api/data.service.ts");
var DetailCbTuanComponent = /** @class */ (function () {
    function DetailCbTuanComponent(_acRouter, _data, _router) {
        var _this = this;
        this._acRouter = _acRouter;
        this._data = _data;
        this._router = _router;
        this.idCbtuan = this._acRouter.snapshot.params['id'];
        if (this.idCbtuan) {
            this._data.detailWARNING(this.idCbtuan).subscribe(function (data) {
                _this.title = data.title;
                _this.imgLink = data.imgLink;
                _this.description = data.description;
            }, function (error) {
                console.log('Có lỗi xảy ra trong quá trình tải dữ liệu', 'Tải dữ liệu bị lỗi');
            });
        }
    }
    DetailCbTuanComponent.prototype.ngOnDestroy = function () {
        if (this.subcription) {
            this.subcription.unsubscribe();
        }
    };
    DetailCbTuanComponent.prototype.ngOnInit = function () { };
    DetailCbTuanComponent.prototype.Backtonews = function () {
        this._router.navigateByUrl("/news/cb-tuan");
    };
    DetailCbTuanComponent = __decorate([
        core_1.Component({
            selector: 'kt-detail-cb-tuan',
            template: __webpack_require__(/*! ./detail-cb-tuan.component.html */ "./src/app/views/pages/news/detail-cb-tuan/detail-cb-tuan.component.html"),
            styles: [__webpack_require__(/*! ./detail-cb-tuan.component.scss */ "./src/app/views/pages/news/detail-cb-tuan/detail-cb-tuan.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, data_service_1.DataService, router_1.Router])
    ], DetailCbTuanComponent);
    return DetailCbTuanComponent;
}());
exports.DetailCbTuanComponent = DetailCbTuanComponent;


/***/ }),

/***/ "./src/app/views/pages/news/news.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/pages/news/news.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <button type=\"button\" class=\"btn btn-default\" routerLink='cb-tuan' routerLinkActive=\"router-link-active\" >Cảnh báo tuần</button>\r\n  <button type=\"button\" class=\"btn btn-default\" routerLink='cb-dotxuat' routerLinkActive=\"router-link-active\" >Cảnh báo đột xuất</button>\r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/views/pages/news/news.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/pages/news/news.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".router-link-active {\n  border: none;\n  border-top: 2px solid blue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbmV3cy9GOlxcdmlldG5hbW5ldHdvcmttb3RpdG9yaW5ncG9ydGFsL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXG5ld3NcXG5ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFXO0VBQ1gsMEJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnJvdXRlci1saW5rLWFjdGl2ZXtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLXRvcDoycHggc29saWQgYmx1ZTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/news/news.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/pages/news/news.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        core_1.Component({
            selector: 'kt-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/views/pages/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/views/pages/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;


/***/ }),

/***/ "./src/app/views/pages/news/news.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/pages/news/news.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
// NgBootstrap
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
// Core Module
var core_module_1 = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
var partials_module_1 = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
var news_component_1 = __webpack_require__(/*! ./news.component */ "./src/app/views/pages/news/news.component.ts");
var cb_tuan_component_1 = __webpack_require__(/*! ./cb-tuan/cb-tuan.component */ "./src/app/views/pages/news/cb-tuan/cb-tuan.component.ts");
var cb_dotxuat_component_1 = __webpack_require__(/*! ./cb-dotxuat/cb-dotxuat.component */ "./src/app/views/pages/news/cb-dotxuat/cb-dotxuat.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ngx_pagination_1 = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var ng2_search_filter_1 = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
var detail_cb_tuan_component_1 = __webpack_require__(/*! ./detail-cb-tuan/detail-cb-tuan.component */ "./src/app/views/pages/news/detail-cb-tuan/detail-cb-tuan.component.ts");
var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        core_1.NgModule({
            imports: [
                ng2_search_filter_1.Ng2SearchPipeModule,
                ngx_pagination_1.NgxPaginationModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                partials_module_1.PartialsModule,
                core_module_1.CoreModule,
                ng_bootstrap_1.NgbModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: news_component_1.NewsComponent,
                        children: [
                            { path: 'cb-tuan', component: cb_tuan_component_1.CbTuanComponent },
                            { path: 'cb-dotxuat', component: cb_dotxuat_component_1.CbDotxuatComponent },
                            { path: ':id', component: detail_cb_tuan_component_1.DetailCbTuanComponent }
                        ]
                    },
                ]),
            ],
            providers: [],
            declarations: [
                news_component_1.NewsComponent,
                cb_tuan_component_1.CbTuanComponent,
                cb_dotxuat_component_1.CbDotxuatComponent,
                detail_cb_tuan_component_1.DetailCbTuanComponent,
            ]
        })
    ], NewsModule);
    return NewsModule;
}());
exports.NewsModule = NewsModule;


/***/ })

}]);
//# sourceMappingURL=app-views-pages-news-news-module.js.map