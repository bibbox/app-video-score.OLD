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
    { path: 'detail/:id', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailComponent"] },
    { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"] }
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

module.exports = "h1 {\n  font-size: 2.0em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 1em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\nappdecoration {\n   background-color: #CFD8DC;\n   margin-top:300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUVEO0dBQ0csMEJBQTBCO0dBQzFCLGlCQUFpQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBmb250LXNpemU6IDIuMGVtO1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmgyIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxubmF2IGEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbm5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XG4gIGNvbG9yOiAjNjA3RDhCO1xufVxubmF2IGE6aG92ZXIge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbn1cbm5hdiBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuXG5hcHBkZWNvcmF0aW9uIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG4gICBtYXJnaW4tdG9wOjMwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n  <div class=\"appdecoration\">\n    <h1> {{title}} </h1>\n    <nav>\n        <a routerLink=\"/dashboard\">Dashboard</a>\n        <a routerLink=\"/movies\">Movies</a>\n    </nav>\n    <router-outlet></router-outlet>\n  </div>\n\n\n"

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



var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.title = 'Movie Annotator';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.testRoute().subscribe(function (data) { return _this.msg = data['msg']; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _stripes_stripes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stripes/stripes.component */ "./src/app/stripes/stripes.component.ts");
/* harmony import */ var _stripes_overlay_stripes_overlay_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stripes-overlay/stripes-overlay.component */ "./src/app/stripes-overlay/stripes-overlay.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__["MoviesComponent"],
                _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__["MovieDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_9__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _stripes_stripes_component__WEBPACK_IMPORTED_MODULE_13__["StripesComponent"],
                _stripes_overlay_stripes_overlay_component__WEBPACK_IMPORTED_MODULE_14__["StripesOverlayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.testRoute = function () {
        console.log("connect the event listener");
        //    this.connect();
        return this.http.get('http://0.0.0.0:8077/api/ping');
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\n.mmbox {\n  display: flex;\n  \n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center;\n  margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n\n  margin: 0;\n}\n.col-1-4 {\n  width: 50%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607d8b;\n  border-radius: 2px;\n  white-space: nowrap;\n}\n.module:hover {\n  background-color: #eee;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QztFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGNBQWM7O0NBRWY7QUFDRDtFQUNFLHNCQUFzQjtDQUN2QjtBQUNEO0VBR0UsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDs7RUFFRSxVQUFVO0NBQ1g7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCO0FBQ0Q7O0VBRUUsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFFO0NBQ3RCO0FBQ0Q7RUFDRTtJQUNFLFVBQVU7R0FDWDtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEYXNoYm9hcmRDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbltjbGFzcyo9J2NvbC0nXSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbltjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubW1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4qLCAqOmFmdGVyLCAqOmJlZm9yZSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5oNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ncmlkIHtcblxuICBtYXJnaW46IDA7XG59XG4uY29sLTEtNCB7XG4gIHdpZHRoOiA1MCU7XG59XG4ubW9kdWxlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2VlZTtcbiAgbWF4LWhlaWdodDogMTIwcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5tb2R1bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjA3ZDhiO1xufVxuLmdyaWQtcGFkIHtcblxuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uZ3JpZC1wYWQgPiBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kdWxlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWF4LWhlaWdodDogNzVweDsgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZ3JpZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5tb2R1bGUge1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Top Movies</h3>\n<div class=\"mmbox\">\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let movie of movies\" class=\"col-1-4\"\n    routerLink=\"/detail/{{movie.id}}\">\n    <div class=\"module movie\">\n      <h4>{{movie.name}}</h4>\n    </div>\n\n  </a>\n</div>\n</div>\n\n"

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
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(movieService) {
        this.movieService = movieService;
        this.movies = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    DashboardComponent.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getMovies()
            .subscribe(function (movies) { return _this.movies = movies.slice(0, 5); });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

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

module.exports = "label {\n    display: inline-block;\n    width: 5em;\n    margin: .5em 0;\n    color: #607D8B;\n    font-weight: bold;\n  }\n  input {\n    height: 2em;\n    width: 40em;\n    font-size: 1em;\n    padding-left: .4em;\n  }\n  button {\n    margin-top: 20px;\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer; cursor: hand;\n  }\n  button:hover {\n    background-color: #cfd8dc;\n  }\n  button:disabled {\n    background-color: #eee;\n    color: #ccc;\n    cursor: auto;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtHQUNuQjtFQUNEO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0dBQ3BCO0VBQ0Q7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0IsQ0FBQyxhQUFhO0dBQy9CO0VBQ0Q7SUFDRSwwQkFBMEI7R0FDM0I7RUFDRDtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtHQUNkIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNWVtO1xuICAgIG1hcmdpbjogLjVlbSAwO1xuICAgIGNvbG9yOiAjNjA3RDhCO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIGlucHV0IHtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogNDBlbTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IC40ZW07XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyBjdXJzb3I6IGhhbmQ7XG4gIH1cbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICB9XG4gIGJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogI2NjYztcbiAgICBjdXJzb3I6IGF1dG87XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\">\n\n  <br>\n\n  <a href={{movie.uri}} target=\"_blank\"> {{movie.name}}</a>  stripes:{{movie.stripeStatus}}&#37;  cuts:\n\n  <div>\n    <button (click)=\"computeStripes()\">(re)compute stripes</button>\n    <button (click)=\"computeCuts()\">(re)compute cuts</button>\n  </div>\n  <button (click)=\"goBack()\">go back</button>\n\n\n  <app-stripes></app-stripes>\n\n\n\n</div>\n"

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
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie */ "./src/app/movie.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/observable/interval */ "./node_modules/rxjs/internal/observable/interval.js");
/* harmony import */ var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(route, movieService, location) {
        this.route = route;
        this.movieService = movieService;
        this.location = location;
        this.alive = true;
    }
    MovieDetailComponent.prototype.ngOnDestroy = function () {
        console.log('[takeWhile] ngOnDestory');
        this.alive = false;
    };
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMovie();
        Object(rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_6__["interval"])(1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeWhile"])(function () { return _this.checkMovieStripeStatus(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function () { return _this.movieService.getMovie(parseInt(_this.route.snapshot.paramMap.get('id'))); }))
            .subscribe(function (movie) { return _this.assignMovie(movie); });
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
    MovieDetailComponent.prototype.getMovie = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.movieService.getMovie(id)
            .subscribe(function (movie) { return _this.assignMovie(movie); });
    };
    MovieDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    MovieDetailComponent.prototype.computeStripes = function () {
        console.log("Start the Compute Stripes Process");
        this.movieService.computeStripe(this.movie).subscribe();
    };
    MovieDetailComponent.prototype.computeCuts = function () {
        console.log("Start the Compute Cut Process");
        this.movieService.computeCuts(this.movie).subscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _movie__WEBPACK_IMPORTED_MODULE_2__["Movie"])
    ], MovieDetailComponent.prototype, "movie", void 0);
    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.component.html */ "./src/app/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.css */ "./src/app/movie-detail/movie-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _movie_service__WEBPACK_IMPORTED_MODULE_5__["MovieService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
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
    MovieService.prototype.getMovies = function () {
        var movies = this.http.get(this.movieAPI);
        this.messageService.add('MovieService: fetched movies');
        return movies;
    };
    MovieService.prototype.getMovie = function (id) {
        var _this = this;
        var url = "/api/movie/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched movie for id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getMovie id=" + id)));
    };
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
    MovieService.prototype.addMovie = function (movie) {
        var _this = this;
        var url = "/api/movies";
        return this.http.post(url, movie, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (Movie) { return _this.log("added movie w/ id=" + movie.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addMovie')));
    };
    /** DELETE: delete the hero from the server */
    MovieService.prototype.deleteMovie = function (movie) {
        var _this = this;
        var id = typeof movie === 'number' ? movie : movie.id;
        var url = "/api/movie/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted movie id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteMovie')));
    };
    MovieService.prototype.computeStripe = function (movie) {
        var _this = this;
        console.log("Compute Stripes Process in MOVIE SERVICES");
        var id = typeof movie === 'number' ? movie : movie.id;
        var url = "/api/movie/" + id + "/command";
        var command = "{ \"command\": \"generate-stripes\", \"parameters\": {\"silent\": \"true\"} }";
        return this.http.post(url, command, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("generate stripes id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('computeStripe')));
    };
    MovieService.prototype.computeCuts = function (movie) {
        var _this = this;
        console.log("Compute Cut Process in MOVIE SERVICES");
        var id = typeof movie === 'number' ? movie : movie.id;
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

/***/ "./src/app/movie.ts":
/*!**************************!*\
  !*** ./src/app/movie.ts ***!
  \**************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Movies Component's private CSS styles */\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.movies {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  position: left;\n  width: 45em;\n  text-align: left;\n}\n.movies li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.movies li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.movies li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.movies .text {\n  position: relative;\n  top: -3px;\n}\n.movies .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUMzQztFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0NBQ2Q7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7Q0FDWDtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwyQkFBMkI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNb3ZpZXMgQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tb3ZpZXMge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogbGVmdDtcbiAgd2lkdGg6IDQ1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubW92aWVzIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIG1hcmdpbjogLjVlbTtcbiAgcGFkZGluZzogLjNlbSAwO1xuICBoZWlnaHQ6IDEuNmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ubW92aWVzIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubW92aWVzIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIGxlZnQ6IC4xZW07XG59XG4ubW92aWVzIC50ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG59XG4ubW92aWVzIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"movies\">\n  <li *ngFor=\"let movie of movies\">\n    <a routerLink=\"/detail/{{movie.id}}\">\n      <span class=\"badge\">{{movie.id}}</span> {{movie.name}}\n    </a>\n  </li>\n</ul>\n"

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
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");



var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(movieService) {
        this.movieService = movieService;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    MoviesComponent.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getMovies()
            .subscribe(function (movies) { return _this.movies = movies; });
    };
    MoviesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.movieService.addMovie({ name: name })
            .subscribe(function (movie) {
            _this.movies.push(movie);
        });
    };
    MoviesComponent.prototype.delete = function (movie) {
        this.movies = this.movies.filter(function (h) { return h !== movie; });
        this.movieService.deleteMovie(movie).subscribe();
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/stripes-overlay/stripes-overlay.component.css":
/*!***************************************************************!*\
  !*** ./src/app/stripes-overlay/stripes-overlay.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cmlwZXMtb3ZlcmxheS9zdHJpcGVzLW92ZXJsYXkuY29tcG9uZW50LmNzcyJ9 */"

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

module.exports = ".outerdiv {\n  position: relative;\n}\n\n.overlaycanvas {\n  position: absolute;\n  z-index: 100;\n}\n\n.stripeimagearray {\n  position: absolute;\n  z-index: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RyaXBlcy9zdHJpcGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL3N0cmlwZXMvc3RyaXBlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3ZlcmxheWNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uc3RyaXBlaW1hZ2VhcnJheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbn1cbiJdfQ== */"

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
            console.log(i, s);
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