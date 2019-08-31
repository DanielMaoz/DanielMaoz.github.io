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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/customers/customers.component */ "./src/app/components/customers/customers.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _components_albums_albums_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/albums/albums.component */ "./src/app/components/albums/albums.component.ts");
/* harmony import */ var _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-customer/add-customer.component */ "./src/app/components/add-customer/add-customer.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _components_edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/edit-customer/edit-customer.component */ "./src/app/components/edit-customer/edit-customer.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");













var appRoutes = [
    { path: '', redirectTo: 'customers', pathMatch: 'full' },
    { path: 'contacts', component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'customers', component: _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'customers/add', component: _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_8__["AddCustomerComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'customer/:id', component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_9__["CustomerComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'customer/:id/edit', component: _components_edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_10__["EditCustomerComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'albums', component: _components_albums_albums_component__WEBPACK_IMPORTED_MODULE_7__["AlbumsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ]
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

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-topnav [isLogin]=\"isLogin\" [userEmail]=\"userEmail\"></app-topnav>\n  <flash-messages></flash-messages>\n</header>\n<main>\n  <div class=\"container-fluid mt-5\">\n    <div class=\"row\">\n      <div class=\"col-2 pl-0\">\n        <app-sidenav [isLogin]=\"isLogin\"></app-sidenav>\n      </div>\n      <div class=\"col-1\"></div>\n      <div class=\"col-8 mb-5 bg-white rounded\">\n        <div class=\"col-1\"></div>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</main>\n<footer></footer>\n"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.isLogin = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLogin = true;
                _this.userEmail = auth.email;
            }
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/topnav/topnav.component */ "./src/app/components/topnav/topnav.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/customers/customers.component */ "./src/app/components/customers/customers.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _pipes_clean_name_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/clean-name.pipe */ "./src/app/pipes/clean-name.pipe.ts");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _components_albums_albums_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/albums/albums.component */ "./src/app/components/albums/albums.component.ts");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/page-header/page-header.component */ "./src/app/components/page-header/page-header.component.ts");
/* harmony import */ var _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/add-customer/add-customer.component */ "./src/app/components/add-customer/add-customer.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _components_edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/edit-customer/edit-customer.component */ "./src/app/components/edit-customer/edit-customer.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_25__);


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_11__["TopnavComponent"],
                _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__["SidenavComponent"],
                _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_13__["CustomersComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_16__["ContactsComponent"],
                _pipes_clean_name_pipe__WEBPACK_IMPORTED_MODULE_17__["CleanNamePipe"],
                _components_albums_albums_component__WEBPACK_IMPORTED_MODULE_19__["AlbumsComponent"],
                _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_20__["PageHeaderComponent"],
                _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_21__["AddCustomerComponent"],
                _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_22__["CustomerComponent"],
                _components_edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_23__["EditCustomerComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_25__["FlashMessagesModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyA_mZ34QkFnLfcDDnx1_xKYwGF3ITmpIyo',
                    libraries: ['places']
                })
            ],
            providers: [_services_contacts_service__WEBPACK_IMPORTED_MODULE_18__["ContactsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-customer/add-customer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/add-customer/add-customer.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWN1c3RvbWVyL2FkZC1jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/add-customer/add-customer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-customer/add-customer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [pageTitle]=\"pageTitle\" [headerIcon]=\"headerIcon\"></app-page-header>\n\n<div class=\"row\">\n\n  <div class=\"col-12 ml-5\">\n    <form #customerForm=\"ngForm\" (ngSubmit)=\"onSubmit(customerForm)\" novalidate=\"novalidate\" autocomplete=\"off\">\n\n      <div class=\"row\">\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"firstName\"><span class=\"text-danger\">*</span> First name</label>\n          <input [ngClass]=\"{'is-invalid':fnf.errors && fnf.touched}\" required minlength=\"2\" #fnf=\"ngModel\"\n            [(ngModel)]=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"firstName\">\n          <div [hidden]=\"!fnf.errors?.required\" class=\"invalid-feedback\">\n            First name is required\n          </div>\n          <div [hidden]=\"!fnf.errors?.minlength\" class=\"invalid-feedback\">\n            First name minlength must be 2 chars\n          </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"lastName\"><span class=\"text-danger\">*</span> Last name</label>\n          <input [ngClass]=\"{'is-invalid':lnf.errors && lnf.touched}\" required minlength=\"2\" #lnf=\"ngModel\"\n            [(ngModel)]=\"lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"lastName\">\n          <div [hidden]=\"!lnf.errors?.required\" class=\"invalid-feedback\">\n            Last name is required\n          </div>\n          <div [hidden]=\"!lnf.errors?.minlength\" class=\"invalid-feedback\">\n            Last name minlength must be 2 chars\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"customerEmail\"><span class=\"text-danger\">*</span> Email</label>\n          <input type=\"email\" id=\"customerEmail\" class=\"form-control\" name=\"email\" #ef=\"ngModel\" [(ngModel)]=\"email\"\n            [ngClass]=\"{'is-invalid':ef.errors && ef.touched}\" required email>\n          <div [hidden]=\"!ef.errors?.required\" class=\"invalid-feedback\">\n            Valid email is required\n          </div>\n          <div [hidden]=\"!ef.errors?.email\" class=\"invalid-feedback\">\n            Valid email is required\n          </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"customerPhone\"><span class=\"text-danger\">*</span> Phone</label>\n          <input type=\"tel\" id=\"customerPhone\" class=\"form-control\" name=\"phone\" #pf=\"ngModel\" [(ngModel)]=\"phone\"\n            [ngClass]=\"{'is-invalid':pf.errors && pf.touched}\" required pattern=\"^0[2-9]\\d{7,8}$\">\n          <div [hidden]=\"!pf.errors?.required\" class=\"invalid-feedback\">\n            Phone is required\n          </div>\n          <div [hidden]=\"!pf.errors?.pattern\" class=\"invalid-feedback\">\n            A valid phone number is required\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8 mb-3\">\n          <label for=\"customerAddress\">Address</label>\n          <textarea id=\"customerAddress\" class=\"form-control\" name=\"address\" #search [(ngModel)]=\"address\" cols=\"30\"\n            rows=\"1\"></textarea>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8 mb-3\">\n          <label for=\"customerNotes\">Notes</label>\n          <textarea class=\"form-control\" name=\"notes\" id=\"customerNotes\" #nf=\"ngModel\" [(ngModel)]=\"notes\" cols=\"30\"\n            rows=\"10\"></textarea>\n        </div>\n      </div>\n      <br>\n      <br>\n      <br>\n      <div class=\"fixed-bottom bg-light p-3 text-center\">\n        <a class=\"btn btn-secondary\" href=\"\" routerLink=\"/customers\">Cancel</a>\n        <input [disabled]=\"!customerForm.form.valid\" class=\"btn btn-primary ml-3\" name=\"submit\" type=\"submit\"\n          value=\"Save\">\n      </div>\n    </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-customer/add-customer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-customer/add-customer.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return AddCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");

/// <reference types="@types/googlemaps" />






var AddCustomerComponent = /** @class */ (function () {
    function AddCustomerComponent(titleService, customersService, router, mapsAPILoader, ngZone) {
        this.titleService = titleService;
        this.customersService = customersService;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.pageTitle = 'Add Customer';
        this.headerIcon = 'fas fa-plus-circle';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
        this.address = '';
        this.notes = '';
    }
    AddCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Comp CRM | Add Customer Form');
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ["address"] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    AddCustomerComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.customersService.addCustomer(value);
            this.router.navigate(['/customers']);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddCustomerComponent.prototype, "searchElement", void 0);
    AddCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-customer',
            template: __webpack_require__(/*! ./add-customer.component.html */ "./src/app/components/add-customer/add-customer.component.html"),
            styles: [__webpack_require__(/*! ./add-customer.component.css */ "./src/app/components/add-customer/add-customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], AddCustomerComponent);
    return AddCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/albums/albums.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/albums/albums.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxidW1zL2FsYnVtcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/albums/albums.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/albums/albums.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [pageTitle]=\"pageTitle\" [headerIcon]=\"headerIcon\"></app-page-header>\n<h5 class=\"pl-5 ml-3\">This is a working example for rest API (not a part of the crm...)</h5>\n<div *ngIf=\"albums.length > 0; else noAlbums\" class=\"pl-5\">\n  <div *ngFor=\"let album of albums\" class=\"col-12 my-3\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        {{album.title}}\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #noAlbums>\n  <div class=\"row\">\n    <div class=\"col-12 pl-5\">\n      <p><i>No Albums Available Right Now...</i></p>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/albums/albums.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/albums/albums.component.ts ***!
  \*******************************************************/
/*! exports provided: AlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function() { return AlbumsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_albums_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/albums.service */ "./src/app/services/albums.service.ts");




var AlbumsComponent = /** @class */ (function () {
    function AlbumsComponent(albumService, titleService) {
        this.albumService = albumService;
        this.titleService = titleService;
        this.albums = [];
        this.pageTitle = 'Albums';
        this.headerIcon = 'fas fa-images';
    }
    AlbumsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Comp CRM | Albums');
        this.albumService.getAlbums().subscribe(function (albums) {
            _this.albums = albums;
        });
    };
    AlbumsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-albums',
            template: __webpack_require__(/*! ./albums.component.html */ "./src/app/components/albums/albums.component.html"),
            styles: [__webpack_require__(/*! ./albums.component.css */ "./src/app/components/albums/albums.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_albums_service__WEBPACK_IMPORTED_MODULE_3__["AlbumsService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], AlbumsComponent);
    return AlbumsComponent;
}());



/***/ }),

/***/ "./src/app/components/contacts/contacts.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contactsTable {\r\n  border: 3px solid #d8d8d800;\r\n  border-radius: 10px;\r\n}\r\n\r\n.seperator {\r\n  margin-left: 60px;\r\n  margin-right: 60px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdHNUYWJsZSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2Q4ZDhkODAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5zZXBlcmF0b3Ige1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [pageTitle]=\"pageTitle\" [headerIcon]=\"headerIcon\"></app-page-header>\n<div class=\"seperator\">\n  <table *ngIf=\"contacts.length > 0; else noContacts\" class=\"table table-striped table-dark contactsTable\">\n    <thead>\n      <tr>\n        <th>No.</th>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Birthday</th>\n        <th>Phones</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let contact of contacts; let key = index\">\n        <td>{{ key + 1 }}</td>\n        <td>{{contact.name | cleanName}} <img width=\"30\" class=\"ml-3\" src=\"assets/images/{{ contact.avatar }}\"\n            alt=\"avatar\"></td>\n        <td>{{contact.email | lowercase}}</td>\n        <td>{{contact.birthday | date:'dd/MM/yyyy' }}</td>\n        <td>\n          <ul>\n            <li *ngFor=\"let phone of contact.phones\">{{phone}}</li>\n          </ul>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<ng-template #noContacts>\n  <p><i>No Contacts Available...</i></p>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(titleService, contactsService, fms) {
        this.titleService = titleService;
        this.contactsService = contactsService;
        this.fms = fms;
        this.contacts = [];
        this.pageTitle = 'Contacts';
        this.headerIcon = 'far fa-envelope';
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactsService.getContacts().subscribe(function (contacts) {
            _this.contacts = contacts;
        });
        this.titleService.setTitle('Comp CRM | Contacts');
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/components/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/components/contacts/contacts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _services_contacts_service__WEBPACK_IMPORTED_MODULE_3__["ContactsService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/components/customer/customer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/customer/customer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/customer/customer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/customer/customer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [pageTitle]=\"pageTitle\" [headerIcon]=\"headerIcon\"></app-page-header>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"row\">\n      <div class=\"col-md-4 mb-3\">\n        <label for=\"firstName\">First name</label>\n        <input disabled value=\"{{ customer.firstName }}\" name=\"firstName\" type=\"text\" class=\"form-control\"\n          id=\"firstName\">\n      </div>\n      <div class=\"col-md-4 mb-3\">\n        <label for=\"lastName\">Last name</label>\n        <input disabled value=\"{{ customer.lastName }}\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"lastName\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 mb-3\">\n        <label for=\"customerEmail\">Email</label>\n        <input disabled value=\"{{ customer.email }}\" type=\"email\" id=\"customerEmail\" class=\"form-control\" name=\"email\">\n      </div>\n      <div class=\"col-md-4 mb-3\">\n        <label for=\"customerPhone\">Phone</label>\n        <input disabled value=\"{{ customer.phone }}\" type=\"tel\" id=\"customerPhone\" class=\"form-control\" name=\"phone\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-8 mb-3\">\n        <label for=\"customerAddress\">Address</label>\n        <input disabled value=\"{{ customer.address }}\" type=\"text\" id=\"customerAddress\" class=\"form-control\"\n          name=\"address\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-8 mb-3\">\n        <label for=\"customerNotes\">Notes</label>\n        <textarea disabled class=\"form-control\" name=\"notes\" id=\"customerNotes\" cols=\"30\"\n          rows=\"10\">{{ customer.notes }}</textarea>\n      </div>\n    </div>\n    <div class=\"fixed-bottom bg-light p-3 text-center\">\n      <a class=\"btn btn-secondary\" href=\"\" routerLink=\"/customers\">Back</a>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/customer/customer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/customer/customer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(customersService, activatedRoute, titleService) {
        this.customersService = customersService;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.pageTitle = 'Customer Details';
        this.headerIcon = 'fas fa-user';
        this.customer = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            notes: ''
        };
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Comp CRM | Customer Details');
        var id = this.activatedRoute.snapshot.params['id'];
        this.customersService.getCustomer(id).subscribe(function (customer) { return _this.customer = customer; });
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/components/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/components/customer/customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/customers/customers.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/customers/customers.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/customers/customers.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/customers/customers.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [pageTitle]=\"pageTitle\" [headerIcon]=\"headerIcon\"></app-page-header>\n\n<div class=\"row\">\n  <div class=\"col-10\">\n    <input (keyup)=\"onKeyupPhoneSearch()\" [(ngModel)]=\"phone\" type=\"text\" class=\"form-control\" name=\"phone\" id=\"phone\"\n      placeholder=\"Search by Phone\">\n  </div>\n  <div class=\"col-2\">\n    <a class=\"btn btn-primary float-right\" href=\"\" routerLink=\"/customers/add\"><i class=\"fas fa-plus-circle\"></i>\n      Add Customer</a>\n  </div>\n</div>\n\n<div class=\"row mt-3\">\n  <div class=\"col-12\">\n    <table *ngIf=\"customers; else noCustomers\" class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th>NO.</th>\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Email</th>\n          <th>Phone</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr (mouseenter)=\"showTools($event)\" (mouseleave)=\"hideTools($event)\"\n          *ngFor=\"let customer of customers; let i = index\">\n          <td>\n            {{ i + 1 }}\n            <span class=\"ml-3 invisible\">\n              <a href=\"\" class=\"text-secondary\" routerLink=\"/customer/{{customer.id}}\"><i class=\"far fa-eye\"></i></a>\n              <a href=\"\" class=\"text-secondary ml-3\" routerLink=\"/customer/{{customer.id}}/edit\"><i\n                  class=\"fas fa-pen\"></i></a>\n              <a (click)=\"onClickDeleteCustomer(customer.id,$event,customer.firstName)\" href=\"\"\n                class=\"text-secondary ml-3\"><i class=\"fas fa-trash-alt\"></i></a>\n            </span>\n          </td>\n          <td>{{ customer.firstName }}</td>\n          <td>{{ customer.lastName }}</td>\n          <td>{{ customer.email }}</td>\n          <td>{{ customer.phone }}</td>\n        </tr>\n      </tbody>\n    </table>\n    <ng-template #noCustomers>\n      <p><i>No Customers...</i></p>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/customers/customers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/customers/customers.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(titleService, customersService) {
        this.titleService = titleService;
        this.customersService = customersService;
        this.pageTitle = 'Customers';
        this.headerIcon = 'fas fa-users';
        this.phone = '';
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Comp CRM | Customers');
        this.customersService.getCustomers().subscribe(function (customers) { return _this.customers = _this.customersOrigin = customers; });
    };
    CustomersComponent.prototype.showTools = function (event) {
        event.target.children[0].children[0].style.cssText = 'visibility: visible !important';
    };
    CustomersComponent.prototype.hideTools = function (event) {
        event.target.children[0].children[0].style.cssText = 'visibility: hidden !important';
    };
    CustomersComponent.prototype.onClickDeleteCustomer = function (customerId, event, firstName) {
        event.preventDefault();
        if (confirm("Are You Sure You Want To Delete " + firstName + "?")) {
            this.customersService.deleteCustomer(customerId);
        }
    };
    CustomersComponent.prototype.onKeyupPhoneSearch = function () {
        var phone = this.phone.trim();
        this.customers = (phone.length > 0)
            ? this.customers = this.customersOrigin.filter(function (customer) { return lodash__WEBPACK_IMPORTED_MODULE_4__["includes"](customer.phone, phone); })
            : this.customers = this.customersOrigin;
    };
    CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/components/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/components/customers/customers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-customer/edit-customer.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/edit-customer/edit-customer.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1jdXN0b21lci9lZGl0LWN1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit-customer/edit-customer.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/edit-customer/edit-customer.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [pageTitle]=\"pageTitle\" [headerIcon]=\"headerIcon\"></app-page-header>\n\n<div class=\"row\">\n\n  <div class=\"col-12\">\n    <form #customerForm=\"ngForm\" (ngSubmit)=\"onSubmit(customerForm)\" novalidate=\"novalidate\" autocomplete=\"off\">\n\n      <div class=\"row\">\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"firstName\"><span class=\"text-danger\">*</span> First name</label>\n          <input [ngClass]=\"{'is-invalid':fnf.errors && fnf.touched}\" required minlength=\"2\" #fnf=\"ngModel\"\n            [(ngModel)]=\"customer.firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"firstName\">\n          <div [hidden]=\"!fnf.errors?.required\" class=\"invalid-feedback\">\n            First name is required\n          </div>\n          <div [hidden]=\"!fnf.errors?.minlength\" class=\"invalid-feedback\">\n            First name minlength must be 2 chars\n          </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"lastName\"><span class=\"text-danger\">*</span> Last name</label>\n          <input [ngClass]=\"{'is-invalid':lnf.errors && lnf.touched}\" required minlength=\"2\" #lnf=\"ngModel\"\n            [(ngModel)]=\"customer.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"lastName\">\n          <div [hidden]=\"!lnf.errors?.required\" class=\"invalid-feedback\">\n            Last name is required\n          </div>\n          <div [hidden]=\"!lnf.errors?.minlength\" class=\"invalid-feedback\">\n            Last name minlength must be 2 chars\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"customerEmail\"><span class=\"text-danger\">*</span> Email</label>\n          <input type=\"email\" id=\"customerEmail\" class=\"form-control\" name=\"email\" #ef=\"ngModel\"\n            [(ngModel)]=\"customer.email\" [ngClass]=\"{'is-invalid':ef.errors && ef.touched}\" required email>\n          <div [hidden]=\"!ef.errors?.required\" class=\"invalid-feedback\">\n            Valid email is required\n          </div>\n          <div [hidden]=\"!ef.errors?.email\" class=\"invalid-feedback\">\n            Valid email is required\n          </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"customerPhone\"><span class=\"text-danger\">*</span> Phone</label>\n          <input type=\"tel\" id=\"customerPhone\" class=\"form-control\" name=\"phone\" #pf=\"ngModel\"\n            [(ngModel)]=\"customer.phone\" [ngClass]=\"{'is-invalid':pf.errors && pf.touched}\" required\n            pattern=\"^0[2-9]\\d{7,8}$\">\n          <div [hidden]=\"!pf.errors?.required\" class=\"invalid-feedback\">\n            Phone is required\n          </div>\n          <div [hidden]=\"!pf.errors?.pattern\" class=\"invalid-feedback\">\n            A valid phone number is required\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8 mb-3\">\n          <label for=\"customerAddress\">Address</label>\n          <textarea id=\"customerAddress\" class=\"form-control\" name=\"address\" #search [(ngModel)]=\"address\" cols=\"30\"\n            rows=\"1\"></textarea>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8 mb-3\">\n          <label for=\"customerNotes\">Notes</label>\n          <textarea class=\"form-control\" name=\"notes\" id=\"customerNotes\" #nf=\"ngModel\" [(ngModel)]=\"customer.notes\"\n            cols=\"30\" rows=\"10\"></textarea>\n        </div>\n      </div>\n      <div class=\"fixed-bottom bg-light p-3 text-center\">\n        <a class=\"btn btn-secondary\" href=\"\" routerLink=\"/customers\">Cancel</a>\n        <input [disabled]=\"!customerForm.form.valid\" class=\"btn btn-primary ml-3\" name=\"submit\" type=\"submit\"\n          value=\"Update\">\n      </div>\n    </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/edit-customer/edit-customer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-customer/edit-customer.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCustomerComponent", function() { return EditCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");

/// <reference types="@types/googlemaps" />






var EditCustomerComponent = /** @class */ (function () {
    function EditCustomerComponent(customersService, router, activatedRoute, titleService, mapsAPILoader, ngZone) {
        this.customersService = customersService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.pageTitle = 'Edit Customer';
        this.headerIcon = 'fas fa-user';
        this.customer = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            notes: ''
        };
        this.address = '';
    }
    EditCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Comp CRM | Edit Customer');
        this.customer.id = this.activatedRoute.snapshot.params['id'];
        this.customersService.getCustomer(this.customer.id).subscribe(function (customer) { return _this.customer = customer; });
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ["address"] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    EditCustomerComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            value.id = this.customer.id;
            this.customersService.updateCustomer(value);
            this.router.navigate(['/customers']);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditCustomerComponent.prototype, "searchElement", void 0);
    EditCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-customer',
            template: __webpack_require__(/*! ./edit-customer.component.html */ "./src/app/components/edit-customer/edit-customer.component.html"),
            styles: [__webpack_require__(/*! ./edit-customer.component.css */ "./src/app/components/edit-customer/edit-customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], EditCustomerComponent);
    return EditCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-2\"></div>\n  <div class=\"col-4 text-center\">\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\" novalidate=\"novalidate\" autocomplete=\"off\">\n      <div class=\"text-center mb-4\">\n        <h1 class=\"h3 mb-3 font-weight-normal\">Company <i class=\"fas fa-angle-double-up\"></i>\n          CRM</h1>\n        <p class=\"text-center\">Login With Your Account</p>\n      </div>\n      <div class=\"form-group mb-4\">\n        <input #le=\"ngModel\" [(ngModel)]=\"email\" [ngClass]=\"{'is-invalid': le.errors && le.touched}\" type=\"email\"\n          name=\"email\" id=\"email\" placeholder=\"Email\" class=\"form-control\" required email>\n        <div class=\"invalid-feedback\" [hidden]=\"!le.errors?.required\">A valid email is required</div>\n        <div class=\"invalid-feedback\" [hidden]=\"!le.errors?.email\">A valid email is required</div>\n      </div>\n      <div class=\"form-group mb-4\">\n        <input #lp=\"ngModel\" [(ngModel)]=\"password\" [ngClass]=\"{'is-invalid': lp.errors && lp.touched}\" type=\"password\"\n          name=\"password\" id=\"password\" placeholder=\"Password\" class=\"form-control\" required>\n        <div class=\"invalid-feedback\" [hidden]=\"!lp.errors?.required\">Password is required</div>\n      </div>\n      <button [disabled]=\"!loginForm.form.valid\" type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Sign In</button>\n      <p class=\"mt-5 mb-3 text-muted\">&copy; 2018-2019</p>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(as, fms, router) {
        this.as = as;
        this.fms = fms;
        this.router = router;
        this.email = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.as.getAuth().subscribe(function (auth) {
            if (auth)
                _this.router.navigate(['/']);
        });
    };
    LoginComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.as.login(value.email, value.password)
                .then(function (res) {
                _this.fms.show('Logged In Succesfully', {
                    cssClass: 'fixed-top m-auto bg-success w-50 text-white text-center',
                    timeout: 3000
                });
                _this.router.navigate(['/']);
            })
                .catch(function (err) {
                _this.fms.show(err.message, {
                    cssClass: 'fixed-top m-auto bg-danger w-50 text-white text-center',
                    timeout: 3000
                });
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/page-header/page-header.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/page-header/page-header.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-header/page-header.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/page-header/page-header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5\">\n  <div class=\"col-12\">\n    <div class=\"jumbotron pt-3 pb-3 text-center\">\n      <h3><i [ngClass]=\"headerIcon\"></i> {{ pageTitle }}</h3>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/page-header/page-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/page-header/page-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageHeaderComponent.prototype, "pageTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageHeaderComponent.prototype, "headerIcon", void 0);
    PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__(/*! ./page-header.component.html */ "./src/app/components/page-header/page-header.component.html"),
            styles: [__webpack_require__(/*! ./page-header.component.css */ "./src/app/components/page-header/page-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5\">\n  <div class=\"col-12\">\n    <div class=\"jumbotron pt-3 pb-3 text-center\">\n      <h3><i class=\"fas fa-exclamation-triangle\"></i> Page Not Found</h3>\n      <p class=\"lead\">The Page You Are Looking For Is Not Found.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(titleService) {
        this.titleService = titleService;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Comp CRM | Page Not Found');
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\r\n  z-index: 1;\r\n  position: fixed;\r\n  background: rgb(2, 0, 36);\r\n  background: linear-gradient(rgba(142, 129, 235, 0.8371428571428572) 33%, rgba(0, 212, 255, 1) 100%);\r\n}\r\n\r\nul>li {\r\n  transition: background-color 0.2s ease-in-out;\r\n}\r\n\r\nul>li:hover {\r\n  background-color: #fff;\r\n  transition: background-color 0.2s ease-in-out;\r\n}\r\n\r\nul>li>a {\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1HQUFtRztBQUNyRzs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYge1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyLCAwLCAzNik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTQyLCAxMjksIDIzNSwgMC44MzcxNDI4NTcxNDI4NTcyKSAzMyUsIHJnYmEoMCwgMjEyLCAyNTUsIDEpIDEwMCUpO1xyXG59XHJcblxyXG51bD5saSB7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG51bD5saTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbnVsPmxpPmEge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLogin\" class=\"sidenav\">\n  <ul style=\"position: fixed; height: 100%; width: 10em;\" class=\"nav flex-column pt-4 sidenav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"\" routerLink=\"/customers\">\n        <i class=\"fas fa-user\"></i>\n        <span class=\"ml-3\">Customers</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"\" routerLink=\"/contacts\">\n        <i class=\"fas fa-envelope\"></i>\n        <span class=\"ml-3\">Contacts</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">\n        <i class=\"fas fa-shopping-cart\"></i>\n        <span class=\"ml-3\">Leads</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">\n        <i class=\"fas fa-signal\"></i>\n        <span class=\"ml-3\">Reports</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">\n        <i class=\"fab fa-stack-exchange\"></i>\n        <span class=\"ml-3\">Integrations</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" href=\"#\">\n        <i class=\"fas fa-bell\"></i>\n        <span class=\"ml-3\">Year-end sale</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"\" routerLink=\"/albums\">\n        <i class=\"fas fa-images\"></i>\n        <span class=\"ml-3\">Albums</span>\n        <span class=\"badge badge-pill badge-light d-block\">rest API ex.</span>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SidenavComponent.prototype, "isLogin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SidenavComponent.prototype, "userEmail", void 0);
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/components/sidenav/sidenav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/components/topnav/topnav.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/topnav/topnav.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/topnav/topnav.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/topnav/topnav.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"isLogin\" class=\"navbar navbar-expand-md navbar-dark bg-white fixed-top shadow-sm\">\n  <a class=\"navbar-brand text-success\" href=\"\" routerLink=\"/\">COMPANY <i class=\"fas fa-angle-double-up\"></i> CRM</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n    aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon bg-success\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav m-auto\">\n      <li class=\"nav-item\">\n        <span class=\"badge badge-pill badge-primary\">3 New leads inbox</span>\n        <span class=\"badge badge-pill badge-danger ml-3\">1 Meating today</span>\n        <span class=\"badge badge-pill badge-warning ml-3\">10 Open issus</span>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle text-success\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ userEmail }}\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdown01\">\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-cog\"></i> My Preferences</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"onLoggedOut($event)\"><i class=\"fas fa-sign-out-alt\"></i> Sign\n            Out</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/topnav/topnav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/topnav/topnav.component.ts ***!
  \*******************************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TopnavComponent = /** @class */ (function () {
    function TopnavComponent(as, router) {
        this.as = as;
        this.router = router;
    }
    TopnavComponent.prototype.ngOnInit = function () {
    };
    TopnavComponent.prototype.onLoggedOut = function (event) {
        event.preventDefault();
        this.isLogin = false;
        this.as.logout();
        window.location.reload();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TopnavComponent.prototype, "isLogin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TopnavComponent.prototype, "userEmail", void 0);
    TopnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topnav',
            template: __webpack_require__(/*! ./topnav.component.html */ "./src/app/components/topnav/topnav.component.html"),
            styles: [__webpack_require__(/*! ./topnav.component.css */ "./src/app/components/topnav/topnav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/pipes/clean-name.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/clean-name.pipe.ts ***!
  \******************************************/
/*! exports provided: CleanNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanNamePipe", function() { return CleanNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CleanNamePipe = /** @class */ (function () {
    function CleanNamePipe() {
    }
    CleanNamePipe.prototype.transform = function (value) {
        return value.replace(/[^a-zA-Z\s]+/g, ' ').trim().toUpperCase();
    };
    CleanNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'cleanName'
        })
    ], CleanNamePipe);
    return CleanNamePipe;
}());



/***/ }),

/***/ "./src/app/services/albums.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/albums.service.ts ***!
  \********************************************/
/*! exports provided: AlbumsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsService", function() { return AlbumsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AlbumsService = /** @class */ (function () {
    function AlbumsService(httpClient) {
        this.httpClient = httpClient;
    }
    AlbumsService.prototype.getAlbums = function () {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/albums');
    };
    AlbumsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AlbumsService);
    return AlbumsService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) { return auth; }));
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/contacts.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/contacts.service.ts ***!
  \**********************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ContactsService = /** @class */ (function () {
    function ContactsService(httpClient) {
        this.httpClient = httpClient;
    }
    ContactsService.prototype.getContacts = function () {
        return this.httpClient.get('/assets/data/contacts.json');
    };
    ContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactsService);
    return ContactsService;
}());



/***/ }),

/***/ "./src/app/services/customers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/customers.service.ts ***!
  \***********************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CustomersService = /** @class */ (function () {
    function CustomersService(afs) {
        this.afs = afs;
        this.customersCollection = this.afs.collection('customers', function (ref) { return ref.orderBy('lastName', 'asc'); });
    }
    CustomersService.prototype.getCustomers = function () {
        this.customers = this.customersCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
        return this.customers;
    };
    CustomersService.prototype.addCustomer = function (customer) {
        this.customersCollection.add(customer);
    };
    CustomersService.prototype.getCustomer = function (id) {
        this.customerDoc = this.afs.doc("customers/" + id);
        this.customer = this.customerDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.customer;
    };
    CustomersService.prototype.updateCustomer = function (customer) {
        this.customerDoc = this.afs.doc("customers/" + customer.id);
        this.customerDoc.update(customer);
    };
    CustomersService.prototype.deleteCustomer = function (customerId) {
        this.customerDoc = this.afs.doc("customers/" + customerId);
        this.customerDoc.delete();
    };
    CustomersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], CustomersService);
    return CustomersService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAAtR3eManqW9EuWC-NbrghwC1lwabXcbc",
        authDomain: "comp-crm-835b1.firebaseapp.com",
        databaseURL: "https://comp-crm-835b1.firebaseio.com",
        projectId: "comp-crm-835b1",
        storageBucket: "comp-crm-835b1.appspot.com",
        messagingSenderId: "1069179723294",
        appId: "1:1069179723294:web:c9f0102f8459c74f"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\comp-crm\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map