(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");






var routes = [
    { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nh1 {\n  font-size: 2.0em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 1em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\nappdecoration {\n   background-color: #CFD8DC;\n   margin-top:300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBRUQ7R0FDRywwQkFBMEI7R0FDMUIsaUJBQWlCO0NBQ25CIiwiZmlsZSI6Ii4uL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oMSB7XG4gIGZvbnQtc2l6ZTogMi4wZW07XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaDIge1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5uYXYgYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxubmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcbiAgY29sb3I6ICM2MDdEOEI7XG59XG5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xufVxubmF2IGEuYWN0aXZlIHtcbiAgY29sb3I6ICMwMzliZTU7XG59XG5cbmFwcGRlY29yYXRpb24ge1xuICAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbiAgIG1hcmdpbi10b3A6MzAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n \n  <div class=\"appdecoration\">\n\n    <mat-icon svgIcon=\"home\"></mat-icon>\n    <button mat-button [matMenuTriggerFor]=\"menu\">File</button>\n    <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>New</button>\n        <button mat-menu-item (click)=\"openMovieList()\">Open</button>\n        <button mat-menu-item>Recent</button>\n        <button mat-menu-item>Upload</button>\n        <button mat-menu-item>Link to Nextcloud</button>\n        <button mat-menu-item>Export</button>\n        <button mat-menu-item>Close</button>\n      </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"edit\">Edit</button>\n    <mat-menu #edit=\"matMenu\">\n        <button mat-menu-item>Copy</button>\n        <button mat-menu-item>Cut</button>\n        <button mat-menu-item>Paste</button>\n         <button mat-menu-item>Search</button>\n    </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"view\">View</button>\n    <mat-menu #view=\"matMenu\">\n        <button mat-menu-item>Outline</button>\n        <button mat-menu-item>OM Images</button>\n        <button mat-menu-item>Audio track</button>\n         <button mat-menu-item>Export</button>\n    </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"format\">Format</button>\n    <mat-menu #format=\"matMenu\">\n        <button mat-menu-item>Headings</button>\n        <button mat-menu-item>Paragraph</button>\n        <button mat-menu-item>Text</button>\n         <button mat-menu-item>OM Images</button>\n    </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"format\">Analyze</button>\n    <mat-menu #analyze=\"matMenu\">\n        <button mat-menu-item>Cut Sructure</button>\n        <button mat-menu-item>Audio Structure</button>\n        <button mat-menu-item>Novements</button>\n         <button mat-menu-item>Persons</button>\n    </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"window\">Window</button>\n    <mat-menu #window=\"matMenu\">\n        <button mat-menu-item>Score</button>\n        <button mat-menu-item>Background Tasks</button>\n        <button mat-menu-item>Help</button>\n    </mat-menu>\n\n    <router-outlet></router-outlet>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.title = 'Video Score';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.initStore().subscribe(function (data) { return _this.msg = data['msg']; });
    };
    AppComponent.prototype.openMovieList = function () {
        this.router.navigateByUrl('/movies');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _entities_movies_api_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities/movies-api.effects */ "./src/app/entities/movies-api.effects.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _stripes_stripes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stripes/stripes.component */ "./src/app/stripes/stripes.component.ts");
/* harmony import */ var _stripes_overlay_stripes_overlay_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stripes-overlay/stripes-overlay.component */ "./src/app/stripes-overlay/stripes-overlay.component.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");

















// STORE



// MATERIAL





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_9__["MoviesComponent"],
                _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_10__["MovieDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _stripes_stripes_component__WEBPACK_IMPORTED_MODULE_15__["StripesComponent"],
                _stripes_overlay_stripes_overlay_component__WEBPACK_IMPORTED_MODULE_16__["StripesOverlayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_19__["reducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__["StoreDevtoolsModule"].instrument({ maxAge: 25 }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_entities_movies_api_effects__WEBPACK_IMPORTED_MODULE_6__["MovieApiEffects"]])
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"]],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _entities_movies_api_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities/movies-api.actions */ "./src/app/entities/movies-api.actions.ts");





var AppService = /** @class */ (function () {
    function AppService(http, store) {
        this.http = http;
        this.store = store;
    }
    AppService.prototype.initStore = function () {
        console.log('in the APP SERVICE class');
        this.store.dispatch(new _entities_movies_api_actions__WEBPACK_IMPORTED_MODULE_4__["LoadMovies"]());
        return this.http.get('/api/ping');
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\n.mmbox {\n  display: flex;\n  \n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center;\n  margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n\n  margin: 0;\n}\n.col-1-4 {\n  width: 50%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607d8b;\n  border-radius: 2px;\n  white-space: nowrap;\n}\n.module:hover {\n  background-color: #eee;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0M7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBRUQ7RUFDRSxjQUFjOztDQUVmO0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkI7QUFDRDtFQUdFLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7O0VBRUUsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjtBQUNEOztFQUVFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBRTtDQUN0QjtBQUNEO0VBQ0U7SUFDRSxVQUFVO0dBQ1g7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjtDQUNGIiwiZmlsZSI6Ii4uL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuW2NsYXNzKj0nY29sLSddIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5tbWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiosICo6YWZ0ZXIsICo6YmVmb3JlIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmg0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmdyaWQge1xuXG4gIG1hcmdpbjogMDtcbn1cbi5jb2wtMS00IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5tb2R1bGUge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZWVlO1xuICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm1vZHVsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2MDdkOGI7XG59XG4uZ3JpZC1wYWQge1xuXG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2R1bGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiA3NXB4OyB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ncmlkIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLm1vZHVsZSB7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Movies</h3>\n\n<div class=\"mmbox\">\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let movie of movies$ | async\" class=\"col-1-4\"\n    routerLink=\"/detail/{{movie.id}}\">\n    <div class=\"module movie\">\n      <h4>{{movie.name}}</h4>\n    </div>\n\n  </a>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _entities_movie_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities/movie.selectors */ "./src/app/entities/movie.selectors.ts");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(movieService, store) {
        this.movieService = movieService;
        this.store = store;
        this.movies$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_4__["selectAllMovies"]));
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/entities/movie.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/entities/movie.actions.ts ***!
  \*******************************************/
/*! exports provided: MovieActionTypes, LoadMovies, AddMovie, UpsertMovie, AddMovies, UpsertMovies, UpdateMovie, UpdateMovies, DeleteMovie, DeleteMovies, ClearMovies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieActionTypes", function() { return MovieActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMovies", function() { return LoadMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovie", function() { return AddMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsertMovie", function() { return UpsertMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovies", function() { return AddMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsertMovies", function() { return UpsertMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMovie", function() { return UpdateMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMovies", function() { return UpdateMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMovie", function() { return DeleteMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMovies", function() { return DeleteMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearMovies", function() { return ClearMovies; });
var MovieActionTypes;
(function (MovieActionTypes) {
    MovieActionTypes["LoadMovies"] = "[Movie] Load Movies";
    MovieActionTypes["AddMovie"] = "[Movie] Add Movie";
    MovieActionTypes["UpsertMovie"] = "[Movie] Upsert Movie";
    MovieActionTypes["AddMovies"] = "[Movie] Add Movies";
    MovieActionTypes["UpsertMovies"] = "[Movie] Upsert Movies";
    MovieActionTypes["UpdateMovie"] = "[Movie] Update Movie";
    MovieActionTypes["UpdateMovies"] = "[Movie] Update Movies";
    MovieActionTypes["DeleteMovie"] = "[Movie] Delete Movie";
    MovieActionTypes["DeleteMovies"] = "[Movie] Delete Movies";
    MovieActionTypes["ClearMovies"] = "[Movie] Clear Movies";
})(MovieActionTypes || (MovieActionTypes = {}));
var LoadMovies = /** @class */ (function () {
    function LoadMovies(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.LoadMovies;
    }
    return LoadMovies;
}());

var AddMovie = /** @class */ (function () {
    function AddMovie(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.AddMovie;
    }
    return AddMovie;
}());

var UpsertMovie = /** @class */ (function () {
    function UpsertMovie(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.UpsertMovie;
    }
    return UpsertMovie;
}());

var AddMovies = /** @class */ (function () {
    function AddMovies(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.AddMovies;
    }
    return AddMovies;
}());

var UpsertMovies = /** @class */ (function () {
    function UpsertMovies(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.UpsertMovies;
    }
    return UpsertMovies;
}());

var UpdateMovie = /** @class */ (function () {
    function UpdateMovie(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.UpdateMovie;
    }
    return UpdateMovie;
}());

var UpdateMovies = /** @class */ (function () {
    function UpdateMovies(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.UpdateMovies;
    }
    return UpdateMovies;
}());

var DeleteMovie = /** @class */ (function () {
    function DeleteMovie(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.DeleteMovie;
    }
    return DeleteMovie;
}());

var DeleteMovies = /** @class */ (function () {
    function DeleteMovies(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.DeleteMovies;
    }
    return DeleteMovies;
}());

var ClearMovies = /** @class */ (function () {
    function ClearMovies() {
        this.type = MovieActionTypes.ClearMovies;
    }
    return ClearMovies;
}());



/***/ }),

/***/ "./src/app/entities/movie.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/entities/movie.reducer.ts ***!
  \*******************************************/
/*! exports provided: adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _movie_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie.actions */ "./src/app/entities/movie.actions.ts");
var _a;


function sortByMovieID(e1, e2) {
    return e1.id - e2.id;
}
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    sortComparer: sortByMovieID
});
var initialState = adapter.getInitialState({
// additional entity state properties
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].AddMovie: {
            return adapter.addOne(action.payload.movie, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].UpsertMovie: {
            return adapter.upsertOne(action.payload.movie, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].AddMovies: {
            return adapter.addMany(action.payload.movies, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].UpsertMovies: {
            return adapter.upsertMany(action.payload.movies, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].UpdateMovie: {
            return adapter.updateOne(action.payload.movie, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].UpdateMovies: {
            return adapter.updateMany(action.payload.movies, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].DeleteMovie: {
            return adapter.removeOne(action.payload.id, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].DeleteMovies: {
            return adapter.removeMany(action.payload.ids, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].LoadMovies: {
            return adapter.addAll(action.payload.movies, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].ClearMovies: {
            return adapter.removeAll(state);
        }
        default: {
            return state;
        }
    }
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/entities/movie.selectors.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/movie.selectors.ts ***!
  \*********************************************/
/*! exports provided: selectMovieState, selectAllMovies, selectMoviesEntities, selectMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMovieState", function() { return selectMovieState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllMovies", function() { return selectAllMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMoviesEntities", function() { return selectMoviesEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMovie", function() { return selectMovie; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _movie_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie.reducer */ "./src/app/entities/movie.reducer.ts");


var _a = _movie_reducer__WEBPACK_IMPORTED_MODULE_1__["adapter"].getSelectors(), selectEntities = _a.selectEntities, selectAll = _a.selectAll;
var selectMovieState = function (state) { return state.movies; };
var selectAllMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMovieState, selectAll);
var selectMoviesEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMovieState, selectEntities);
var selectMovie = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMoviesEntities, function (movie) { return function (id) { return movie[id]; }; });


/***/ }),

/***/ "./src/app/entities/movies-api.actions.ts":
/*!************************************************!*\
  !*** ./src/app/entities/movies-api.actions.ts ***!
  \************************************************/
/*! exports provided: MoviesAPIActionTypes, LoadMovies, LoadMoviesSucess, LoadMoviesError, AddMovie, AddMovieSucess, AddMovieError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesAPIActionTypes", function() { return MoviesAPIActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMovies", function() { return LoadMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMoviesSucess", function() { return LoadMoviesSucess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMoviesError", function() { return LoadMoviesError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovie", function() { return AddMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieSucess", function() { return AddMovieSucess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieError", function() { return AddMovieError; });
var MoviesAPIActionTypes;
(function (MoviesAPIActionTypes) {
    MoviesAPIActionTypes["LoadMovies"] = "[Movies API] Load Movies";
    MoviesAPIActionTypes["LoadMoviesSucess"] = "[Movies API] Load Movies Success";
    MoviesAPIActionTypes["LoadMoviesError"] = "[Movies API] Load Movies Error";
    MoviesAPIActionTypes["AddMovie"] = "[Movies API] Add Movie";
    MoviesAPIActionTypes["AddMovieSucess"] = "[Movies API] Add Success";
    MoviesAPIActionTypes["AddMovieError"] = "[Movies API] Add Error";
})(MoviesAPIActionTypes || (MoviesAPIActionTypes = {}));
var LoadMovies = /** @class */ (function () {
    function LoadMovies() {
        this.type = MoviesAPIActionTypes.LoadMovies;
    }
    return LoadMovies;
}());

var LoadMoviesSucess = /** @class */ (function () {
    function LoadMoviesSucess() {
        this.type = MoviesAPIActionTypes.LoadMoviesSucess;
    }
    return LoadMoviesSucess;
}());

var LoadMoviesError = /** @class */ (function () {
    function LoadMoviesError() {
        this.type = MoviesAPIActionTypes.LoadMoviesError;
    }
    return LoadMoviesError;
}());

var AddMovie = /** @class */ (function () {
    function AddMovie() {
        this.type = MoviesAPIActionTypes.AddMovie;
    }
    return AddMovie;
}());

var AddMovieSucess = /** @class */ (function () {
    function AddMovieSucess() {
        this.type = MoviesAPIActionTypes.AddMovieSucess;
    }
    return AddMovieSucess;
}());

var AddMovieError = /** @class */ (function () {
    function AddMovieError() {
        this.type = MoviesAPIActionTypes.AddMovieError;
    }
    return AddMovieError;
}());



/***/ }),

/***/ "./src/app/entities/movies-api.effects.ts":
/*!************************************************!*\
  !*** ./src/app/entities/movies-api.effects.ts ***!
  \************************************************/
/*! exports provided: MovieApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieApiEffects", function() { return MovieApiEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _movie_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie.actions */ "./src/app/entities/movie.actions.ts");
/* harmony import */ var _movies_api_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movies-api.actions */ "./src/app/entities/movies-api.actions.ts");









var MovieApiEffects = /** @class */ (function () {
    function MovieApiEffects(http, actions$, store) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.store = store;
        this.movieAPI = '/api/movies'; // URL to web api
        this.loadMovies$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_movies_api_actions__WEBPACK_IMPORTED_MODULE_8__["MoviesAPIActionTypes"].LoadMovies), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () { return _this.http.get(_this.movieAPI)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (movies) { return (new _movie_actions__WEBPACK_IMPORTED_MODULE_7__["LoadMovies"]({ movies: movies })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: '[Movie] Movies Loaded Error' }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.store.dispatch(new _movies_api_actions__WEBPACK_IMPORTED_MODULE_8__["LoadMoviesSucess"]()); })); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieApiEffects.prototype, "loadMovies$", void 0);
    MovieApiEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MovieApiEffects);
    return MovieApiEffects;
}());



/***/ }),

/***/ "./src/app/entities/movies-api.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/entities/movies-api.reducer.ts ***!
  \************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _movies_api_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies-api.actions */ "./src/app/entities/movies-api.actions.ts");

var initialState = {
    pending: false,
    error: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _movies_api_actions__WEBPACK_IMPORTED_MODULE_0__["MoviesAPIActionTypes"].LoadMovies: {
            console.log('MoviesAPIActionTypes.LoadMovies');
            return Object.assign({}, state, { pending: true, error: null });
        }
        case _movies_api_actions__WEBPACK_IMPORTED_MODULE_0__["MoviesAPIActionTypes"].LoadMoviesSucess: {
            console.log('MoviesAPIActionTypes.LoadMoviesSucess');
            return Object.assign({}, state, { pending: false });
        }
        case _movies_api_actions__WEBPACK_IMPORTED_MODULE_0__["MoviesAPIActionTypes"].LoadMoviesError: {
            return Object.assign({}, state, { pending: false, error: 'ERROR' });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n\n  <div *ngFor='let message of messageService.messages'> {{message}}\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nlabel {\n    display: inline-block;\n    width: 5em;\n    margin: .5em 0;\n    color: #607D8B;\n    font-weight: bold;\n  }\n  input {\n    height: 2em;\n    width: 40em;\n    font-size: 1em;\n    padding-left: .4em;\n  }\n  button {\n    margin-top: 20px;\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer; cursor: hand;\n  }\n  button:hover {\n    background-color: #cfd8dc;\n  }\n  button:disabled {\n    background-color: #eee;\n    color: #ccc;\n    cursor: auto;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21vdmllLWRldGFpbC9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0dBQ25CO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7R0FDcEI7RUFDRDtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQixDQUFDLGFBQWE7R0FDL0I7RUFDRDtJQUNFLDBCQUEwQjtHQUMzQjtFQUNEO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0dBQ2QiLCJmaWxlIjoiLi4vbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA1ZW07XG4gICAgbWFyZ2luOiAuNWVtIDA7XG4gICAgY29sb3I6ICM2MDdEOEI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgaW5wdXQge1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiA0MGVtO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogLjRlbTtcbiAgfVxuICBidXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IGN1cnNvcjogaGFuZDtcbiAgfVxuICBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG4gIH1cbiAgYnV0dG9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjY2NjO1xuICAgIGN1cnNvcjogYXV0bztcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=(movies$|async)(id)>\n\n  <br>\n  <a href=\"{{(movies$|async)(id).uri}}\" target=\"_blank\"> {{(movies$|async)(id).name}}</a>  stripes:{{(movies$|async)(id).stripeStatus}}&#37;  cuts:\n  <div>\n    <button (click)=\"computeStripes()\">(re)compute stripes</button>\n    <button (click)=\"computeCuts()\">(re)compute cuts</button>\n  </div>\n  <button (click)=\"goBack()\">go back</button>\n\n  <mat-checkbox>Check me</mat-checkbox> \n\n  <app-stripes></app-stripes>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _entities_movie_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entities/movie.selectors */ "./src/app/entities/movie.selectors.ts");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");








var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(route, movieService, location, store) {
        this.route = route;
        this.movieService = movieService;
        this.location = location;
        this.store = store;
        this.movies$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_6__["selectMovie"]));
        this.alive = true;
    }
    MovieDetailComponent.prototype.ngOnDestroy = function () {
        console.log('[takeWhile] ngOnDestory');
        this.alive = false;
    };
    MovieDetailComponent.prototype.ngOnInit = function () {
        //   this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        console.log(this.id);
        console.log(this.movies$);
    };
    MovieDetailComponent.prototype.checkMovieStripeStatus = function () {
        if (!this.alive)
            return false;
        if (this.movie)
            return (this.movie.stripeStatus < 100);
        else
            return true;
    };
    MovieDetailComponent.prototype.assignMovie = function (movie) {
        this.movie = movie;
        console.log("Movie Data Structures, received from the Movie Service");
        console.log(movie);
        console.log(movie.stripeStatus);
    };
    MovieDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    MovieDetailComponent.prototype.computeStripes = function () {
        var _this = this;
        console.log('Start the Compute Stripes Process');
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_6__["selectMovie"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (f) { return f(_this.id); })).subscribe(function (m) { return _this.movieService.computeStripe(m.id).subscribe(); });
    };
    MovieDetailComponent.prototype.computeCuts = function () {
        var _this = this;
        console.log('Start the Compute Cut Process');
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_6__["selectMovie"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (f) { return f(_this.id); })).subscribe(function (m) { return _this.movieService.computeCuts(m.id).subscribe(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieDetailComponent.prototype, "movie", void 0);
    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.component.html */ "./src/app/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.css */ "./src/app/movie-detail/movie-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _movie_service__WEBPACK_IMPORTED_MODULE_7__["MovieService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "./src/app/movie.service.ts":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MovieService = /** @class */ (function () {
    function MovieService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.movieAPI = '/api/movies'; // URL to web api
    }
    MovieService.prototype.getStripes = function (id) {
        var _this = this;
        var url = "/api/movie/" + id + "/stripes";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched stripes for id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getStripes id=" + id)));
    };
    MovieService.prototype.getCuts = function (id) {
        var _this = this;
        var url = "/api/movie/" + id + "/cuts";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched cuts for id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getCuts id=" + id)));
    };
    /** DELETE: delete the hero from the server */
    MovieService.prototype.deleteMovie = function (movie) {
        var _this = this;
        var id = typeof movie === 'number' ? movie : movie.id;
        var url = "/api/movie/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted movie id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteMovie')));
    };
    MovieService.prototype.computeStripe = function (id) {
        var _this = this;
        console.log("Compute Stripes Process in MOVIE SERVICES");
        var url = "/api/movie/" + id + "/command";
        var command = "{ \"command\": \"generate-stripes\", \"parameters\": {\"silent\": \"true\"} }";
        console.log(url);
        return this.http.post(url, command, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("generate stripes id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('computeStripe')));
    };
    MovieService.prototype.computeCuts = function (id) {
        var _this = this;
        console.log("Compute Cut Process in MOVIE SERVICES");
        var url = "/api/movie/" + id + "/command";
        var command = "{ \"command\": \"compute-cuts\", \"parameters\": {\"silent\": \"true\"} }";
        return this.http.post(url, command, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("compute cuts movie id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('computeCuts')));
    };
    MovieService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    MovieService.prototype.log = function (message) {
        this.messageService.add("MovieService: " + message);
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Movies Component's private CSS styles */\n\ntable {\n  width: 100%;\n}\n\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n\n.movies {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  position: left;\n  width: 45em;\n  text-align: left;\n}\n\n.movies li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n\n.movies li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n\n.movies li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n\n.movies .text {\n  position: relative;\n  top: -3px;\n}\n\n.movies .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7O0FBRTNDO0VBQ0UsWUFBWTtDQUNiOztBQUdEO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7Q0FDZDs7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCOztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0NBQ2Q7O0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7Q0FDWjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDJCQUEyQjtDQUM1QiIsImZpbGUiOiIuLi9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNb3ZpZXMgQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubW92aWVzIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGxlZnQ7XG4gIHdpZHRoOiA0NWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1vdmllcyBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBtYXJnaW46IC41ZW07XG4gIHBhZGRpbmc6IC4zZW0gMDtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLm1vdmllcyBsaS5zZWxlY3RlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1vdmllcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICBsZWZ0OiAuMWVtO1xufVxuLm1vdmllcyAudGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuLm1vdmllcyAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMXB4O1xuICB0b3A6IC00cHg7XG4gIGhlaWdodDogMS44ZW07XG4gIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"movies$|async\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> ID </th>\n    <td mat-cell *matCellDef=\"let m\"> {{m.id}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let m\"> \n        <a routerLink=\"/detail/{{m.id}}\"> {{m.name}}</a> \n  </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"uri\">\n    <th mat-header-cell *matHeaderCellDef> Link </th>\n    <td mat-cell *matCellDef=\"let m\"> \n        <a href=\"{{m.uri}}\" target=\"_blank\"> {{m.uri}}</a>       \n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _entities_movie_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/movie.selectors */ "./src/app/entities/movie.selectors.ts");




var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(store) {
        this.store = store;
        this.movies$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAllMovies"]));
        this.movientitiedes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_3__["selectMoviesEntities"]));
        this.displayedColumns = ['id', 'name', 'uri'];
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.movies$.subscribe(function (m) { return console.log(m); });
        this.movientitiedes$.subscribe(function (m) { return console.log(m); });
        //   this.getMovies();
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _entities_movie_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/movie.reducer */ "./src/app/entities/movie.reducer.ts");
/* harmony import */ var _entities_movies_api_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/movies-api.reducer */ "./src/app/entities/movies-api.reducer.ts");


var reducers = {
    movies: _entities_movie_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    movieapi: _entities_movies_api_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};


/***/ }),

/***/ "./src/app/stripes-overlay/stripes-overlay.component.css":
/*!***************************************************************!*\
  !*** ./src/app/stripes-overlay/stripes-overlay.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zdHJpcGVzLW92ZXJsYXkvc3RyaXBlcy1vdmVybGF5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/stripes-overlay/stripes-overlay.component.html":
/*!****************************************************************!*\
  !*** ./src/app/stripes-overlay/stripes-overlay.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  stripes-overlay works!\n</p>\n<canvas #myCanvas width=\"500\" height=\"500\">\n</canvas>\n"

/***/ }),

/***/ "./src/app/stripes-overlay/stripes-overlay.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/stripes-overlay/stripes-overlay.component.ts ***!
  \**************************************************************/
/*! exports provided: StripesOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripesOverlayComponent", function() { return StripesOverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var StripesOverlayComponent = /** @class */ (function () {
    function StripesOverlayComponent() {
    }
    StripesOverlayComponent.prototype.ngOnInit = function () {
        var ctx = this.canvasRef.nativeElement.getContext('2d');
        // Clear any previous content.
        ctx.clearRect(0, 0, 500, 500);
        // Draw the clip path that will mask everything else
        // that we'll draw later.
        ctx.beginPath();
        ctx.moveTo(250, 60);
        ctx.lineTo(63.8, 126.4);
        ctx.lineTo(92.2, 372.6);
        ctx.lineTo(250, 460);
        ctx.lineTo(407.8, 372.6);
        ctx.lineTo(436.2, 126.4);
        ctx.moveTo(250, 104.2);
        ctx.lineTo(133.6, 365.2);
        ctx.lineTo(177, 365.2);
        ctx.lineTo(200.4, 306.8);
        ctx.lineTo(299.2, 306.8);
        ctx.lineTo(325.2, 365.2);
        ctx.lineTo(362.6, 365.2);
        ctx.lineTo(250, 104.2);
        ctx.moveTo(304, 270.8);
        ctx.lineTo(216, 270.8);
        ctx.lineTo(250, 189);
        ctx.lineTo(284, 270.8);
        ctx.clip('evenodd');
        // Draw 50,000 circles at random points
        ctx.beginPath();
        ctx.fillStyle = '#DD0031';
        for (var i = 0; i < 50000; i++) {
            var x = Math.random() * 500;
            var y = Math.random() * 500;
            ctx.moveTo(x, y);
            ctx.arc(x, y, 1, 0, Math.PI * 2);
        }
        ctx.fill();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StripesOverlayComponent.prototype, "canvasRef", void 0);
    StripesOverlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stripes-overlay',
            template: __webpack_require__(/*! ./stripes-overlay.component.html */ "./src/app/stripes-overlay/stripes-overlay.component.html"),
            styles: [__webpack_require__(/*! ./stripes-overlay.component.css */ "./src/app/stripes-overlay/stripes-overlay.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StripesOverlayComponent);
    return StripesOverlayComponent;
}());



/***/ }),

/***/ "./src/app/stripes/stripes.component.css":
/*!***********************************************!*\
  !*** ./src/app/stripes/stripes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outerdiv {\n  position: relative;\n}\n\n.overlaycanvas {\n  position: absolute;\n  z-index: 100;\n}\n\n.stripeimagearray {\n  position: absolute;\n  z-index: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N0cmlwZXMvc3RyaXBlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1oiLCJmaWxlIjoiLi4vc3RyaXBlcy9zdHJpcGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXJkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdmVybGF5Y2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5zdHJpcGVpbWFnZWFycmF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/stripes/stripes.component.html":
/*!************************************************!*\
  !*** ./src/app/stripes/stripes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outerdiv\" width=\"800\">\n\n  <canvas class=\"stripeimagearray\" #imageCanvas   width=\"800\" height=\"10\">\n  </canvas>\n  <canvas class=\"overlaycanvas\"    #overlayCanvas width=\"800\" height=\"10\">\n  </canvas>\n\n</div>\n"

/***/ }),

/***/ "./src/app/stripes/stripes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stripes/stripes.component.ts ***!
  \**********************************************/
/*! exports provided: StripesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripesComponent", function() { return StripesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");





var StripesComponent = /** @class */ (function () {
    function StripesComponent(renderer, movieService, route) {
        this.renderer = renderer;
        this.movieService = movieService;
        this.route = route;
    }
    StripesComponent.prototype.ngOnInit = function () {
        this.getStripes();
        this.getCuts();
    };
    StripesComponent.prototype.drawImages = function () {
        var ctx = this.imageCanvas.nativeElement.getContext('2d');
        ctx.clearRect(0, 0, 1500, 800);
        var i = 0;
        var _loop_1 = function (s) {
            //         console.log (i, s)
            var stripeimage = new Image();
            stripeimage.src = s.url;
            var y = i * 80;
            stripeimage.onload = function () { ctx.drawImage(stripeimage, 0, y, 800, 75); };
            i = i + 1;
        };
        for (var _i = 0, _a = this.stripes; _i < _a.length; _i++) {
            var s = _a[_i];
            _loop_1(s);
        }
    };
    StripesComponent.prototype.drawOverlay = function () {
        var ctx = this.overlayCanvas.nativeElement.getContext('2d');
        ctx.strokeStyle = '#ff0000';
        for (var _i = 0, _a = this.cuts; _i < _a.length; _i++) {
            var c = _a[_i];
            var y = Math.floor(c.fn / 1500.0);
            var x = 800 * (c.fn - y * 1500) / 1500;
            ctx.beginPath();
            ctx.moveTo(x, y * 80);
            ctx.lineTo(x, y * 80 + 75);
            ctx.stroke();
        }
    };
    StripesComponent.prototype.assignStripesAndDrawImages = function (stripes) {
        this.stripes = stripes;
        var h = this.stripes.length * 80;
        this.renderer.setElementProperty(this.imageCanvas.nativeElement, "height", h.toString());
        this.drawImages();
    };
    StripesComponent.prototype.assignCutsAndDrawOverlay = function (cuts) {
        this.cuts = cuts;
        console.log(cuts);
        var lastfn = cuts[cuts.length - 1].fn;
        var h = 80 * Math.ceil(lastfn / 1500.0);
        this.renderer.setElementProperty(this.overlayCanvas.nativeElement, "height", h.toString());
        this.drawOverlay();
    };
    StripesComponent.prototype.getStripes = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.movieService.getStripes(id)
            .subscribe(function (stripes) { return _this.assignStripesAndDrawImages(stripes); });
    };
    StripesComponent.prototype.getCuts = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.movieService.getCuts(id)
            .subscribe(function (cuts) { return _this.assignCutsAndDrawOverlay(cuts); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StripesComponent.prototype, "imageCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('overlayCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StripesComponent.prototype, "overlayCanvas", void 0);
    StripesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stripes',
            template: __webpack_require__(/*! ./stripes.component.html */ "./src/app/stripes/stripes.component.html"),
            styles: [__webpack_require__(/*! ./stripes.component.css */ "./src/app/stripes/stripes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StripesComponent);
    return StripesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Shared/SWD/BIBBOX-DOCKER-CONTAINER-DEV/app-video-score/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map