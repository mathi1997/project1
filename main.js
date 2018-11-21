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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n   */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form></app-form>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'form';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  .BrowserAnimationsModule {\r\n}\r\n  .example-container1 .mat-radio-button {\r\n  margin: 0 5px;\r\n  }\r\n  .bto{\r\n    padding-top: 16px;\r\n   \r\n  }\r\n  .bto1{\r\n    padding-top: 25px;\r\n  }\r\n  .txtclr{\r\n    color: #969393;\r\n  }\r\n  input.example-right-align::-webkit-outer-spin-button,\r\ninput.example-right-align::-webkit-inner-spin-button {\r\n  display: none;\r\n}\r\n  input.example-right-align {\r\n  -moz-appearance: textfield;\r\n}"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   \n    <h5 class=\"text-center\">CYC</h5>\n    <h6 class=\"text-center\">2018-2019</h6>\n    <h6 class=\"text-center\">Basketball Registration Form</h6>\n    \n    <div class=\" border border-secondary container\">\n        <div class=\"container\">\n                <form  (ngSubmit)=\"onSubmit()\">\n          <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4 col-4 col-lg-4 col-xl-4 \" >\n                \n                  \n                        <mat-form-field class=\"example-full-width\" hintLabel=\"Max 20 characters\">\n                          <input matInput #input maxlength=\"20\" placeholder=\"Child's Name\" [formControl]=\"name\" required  >\n                           <mat-error *ngIf=\"name.invalid\">{{childmessage()}}</mat-error>\n                        \n                          <mat-hint >{{input.value?.length || 0}}/20</mat-hint>\n                        </mat-form-field>\n            </div>\n                \n                  \n            \n            <div class=\"col-sm-4 col-md-4 col-4 col-lg-4 col-xl-4 bto txtclr\" >\n                    <mat-radio-group  class=\"example-container1 \"  [formControl]=\"gender\" required >\n                            <span>Gender:</span><mat-radio-button value=\"1\">Male</mat-radio-button>\n                            <mat-radio-button value=\"2\">Female</mat-radio-button>\n                            <mat-radio-button value=\"3\">Other</mat-radio-button>\n                            <mat-error *ngIf=\"gender.invalid\">{{gendererror()}}</mat-error>\n                     </mat-radio-group>\n                           \n               </div>\n            <div class=\"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2\" >\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Grade\"[formControl]=\"grade\" required>\n                    <mat-error *ngIf=\"grade.invalid\">{{setErrorMessage()}}</mat-error>\n                    <mat-hint>required.</mat-hint>\n                  </mat-form-field> \n                                \n              </div>\n              <div class=\"col-sm-2 col-md-2\" >\n                    <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Age\" type=\"number\" [formControl]=\"age\" required>\n                            <mat-error *ngIf=\"age.invalid\">{{ageerrormessage()}}</mat-error>                              \n                          </mat-form-field>             \n                </div>\n          </div>\n          <div class=\"row\">\n                <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\n\n             <mat-form-field class=\"example-full-width\">\n                <textarea matInput placeholder=\"Address\" [formControl]=\"address1\" required></textarea>\n                <mat-error *ngIf=\"address1.invalid\">{{addresserror1()}}</mat-error>          \n              </mat-form-field>\n              </div>\n              </div>\n          <div class=\"row\">\n              <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9\">\n                  <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"City\" [formControl]=\"city1\" required>\n                      <mat-error *ngIf=\"city1.invalid\">{{cityerror1()}}</mat-error>\n                    </mat-form-field> \n        </div>\n        <div class=\"col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\n                <mat-form-field class=\"example-full-width\">\n                        <input matInput #postalCode maxlength=\"6\" placeholder=\"Zip\" [formControl]=\"zip1\" required >\n                        <mat-error *ngIf=\"zip1.invalid\">{{ziperror()}}</mat-error>\n                        <mat-hint >{{postalCode.value.length}} / 6</mat-hint>\n                      </mat-form-field>\n        </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\">\n                    <mat-form-field class=\"example-full-width\" hintLabel=\"Max 10 number's\">\n                            <span matPrefix>+91 &nbsp;</span>\n                            <input type=\"tel\" matInput placeholder=\"Phone\" minlength=\"10\" maxlength=\"10\"[formControl]=\"phone1\" required >\n                            <mat-error *ngIf=\"phone1.invalid\">{{phoneerror1()}}</mat-error>\n                           \n                     </mat-form-field>\n                  </div>\n                  <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\">\n                        <mat-form-field class=\"example-full-width\"  hintLabel=\"Max 10 number's\" >\n                                <span matPrefix>+91 &nbsp;</span>\n                                <input type=\"tel\" matInput placeholder=\"Cell\" minlength=\"10\" maxlength=\"10\" [formControl]=\"phone2\" required >\n                                <mat-error *ngIf=\"phone2.invalid\">{{phoneerror2()}}</mat-error>\n                         </mat-form-field>\n                        </div>\n                        <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\">\n                            <mat-form-field class=\"example-full-width\"  >\n                                <input matInput placeholder=\"School\" [formControl]=\"school\" required>\n                                <mat-error *ngIf=\"school.invalid\">{{schoolerror()}}</mat-error>\n                              </mat-form-field>\n                              </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\n                            <mat-form-field class=\"example-full-width\" hintLabel=\"Max 15 characters\">\n                                    <input matInput #input maxlength=\"15\" placeholder=\"Parent/Guardian's Name\" [formControl]=\"parent\" required >\n                                    <mat-error *ngIf=\"parent.invalid\">{{ parentnameerror()}}</mat-error>\n                                    \n                                    <mat-hint>{{input.value?.length || 0}}/15</mat-hint>\n                                  </mat-form-field>\n                       \n                    </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\n                           \n                             \n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Email-Address\" [formControl]=\"email\" required>\n                                      <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n                                    </mat-form-field>\n                                  \n                            \n                          </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9\">\n                          <mat-form-field class=\"example-full-width\">\n                              <input matInput placeholder=\"EmergencyContact\" [formControl]=\"emergency\" required >\n                              <mat-error *ngIf=\"emergency.invalid\">{{ emergencyerror()}}</mat-error>\n                            </mat-form-field> \n                      </div>\n                      <div class=\"col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3\">\n                                                      <mat-form-field class=\"example-full-width\" hintLabel=\"Max 10 number's\">\n                                    <span matPrefix>+91 &nbsp;</span>\n                                    <input type=\"tel\" matInput minlength=\"10\" placeholder=\"Phone\" maxlength=\"10\" [formControl]=\"phone3\" required >\n                                    <mat-error *ngIf=\"phone3.invalid\">{{phoneerror3()}}</mat-error>\n                                    \n                             </mat-form-field>\n                      </div>\n                      </div>\n                      <div class=\"row\">\n                          <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6\">\n                              <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Family Doctor\" [formControl]=\"family\" required >\n                                  <mat-error *ngIf=\"family.invalid\">{{ familyerror()}}</mat-error>\n                                </mat-form-field>\n                                </div>\n                                <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Hospital in case of emergency\" [formControl]=\"hospital\" required >\n                                        <mat-error *ngIf=\"hospital.invalid\">{{hospitalerror()}}</mat-error>\n                                      </mat-form-field>\n                                      </div>\n                                </div>\n                                \n                                \n                                <div class=\"row\">   \n                                <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 bto txtclr\">\n                                  \n                                    <mat-radio-group  class=\"example-container1\" [formControl]=\"young\" required><span>Shirt size for youth:</span>\n                                    <mat-radio-button value=\"1\">S</mat-radio-button>\n                                    <mat-radio-button value=\"2\">M</mat-radio-button>\n                                    <mat-radio-button value=\"3\">L</mat-radio-button>\n                                    <mat-error *ngIf=\"young.invalid\">{{youngerror()}}</mat-error>\n                                    </mat-radio-group>\n                                   \n                                    </div>\n                                    <div class=\"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6  bto txtclr\">\n\n                                        \n                                    <mat-radio-group class=\"example-container1\" [formControl]=\"adult\" required><span>Shirt size for Adult:</span>\n                                    <mat-radio-button value=\"1\">S</mat-radio-button>\n                                    <mat-radio-button value=\"2\">M</mat-radio-button>\n                                    <mat-radio-button value=\"3\">L</mat-radio-button>\n                                    <mat-radio-button value=\"4\">XL</mat-radio-button>\n                                    <mat-error *ngIf=\"adult.invalid\">{{adulterror()}}</mat-error>\n                                    </mat-radio-group>\n                                    </div>\n                                 </div>\n       \n\n                                 <div class=\"row\">\n                                    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\n\n                                 <mat-form-field class=\"example-full-width\">\n                                    <textarea matInput placeholder=\"Special Request\"></textarea>\n                                  </mat-form-field>\n                                  </div>\n                                  </div>\n                                  <div class=\"row\">\n                                      <div class=\"col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8\">\n                                         \n                                      \n                                            <mat-form-field class=\"example-full-width\" hintLabel=\"Max 20 characters\">\n                                                    <label class=\"txtclr\">Interested in coaching? Name:</label><input matInput [formControl]=\"coach\" required >\n                                                    <mat-error *ngIf=\"coach.invalid\">{{coacherror()}}</mat-error>\n                                                    <mat-hint >{{input.value?.length || 0}}/20</mat-hint>\n                                            \n                                                </mat-form-field>\n\n                                      </div>\n                                      <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 bto1\">\n                                            <mat-form-field class=\"example-full-width\"  hintLabel=\"Max 10 number's\">                                                    \n                                                    <span matPrefix>+91 &nbsp;</span>\n                                                    <input type=\"tel\" matInput minlength=10 maxlength=10 placeholder=\"Phone\"  [formControl]=\"phone4\" required>\n                                                    <mat-error *ngIf=\"phone4.invalid\">{{phoneerror4()}}</mat-error>\n                                                   \n                                             </mat-form-field>\n                                      </div>\n                                      </div>\n                                      <div class=\"row\">\n                                      <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                    <textarea matInput placeholder=\"Address\"  [formControl]=\"address2\" required></textarea>\n                                                    <mat-error *ngIf=\"address2.invalid\">{{addresserror2()}}</mat-error>\n                                                  </mat-form-field>\n\n                                      </div>\n                                      <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4  bto\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                    <mat-select placeholder=\"City\" [formControl]=\"city2\" required>\n                                                    <mat-option *ngFor=\"let c of cities\" [value]=\"c.value\">\n                                                    {{c.viewValue}}\n                                                        </mat-option>\n                                                    </mat-select>\n                                                    <mat-error *ngIf=\"city2.invalid\">{{cityerror2()}}</mat-error>\n                                                    </mat-form-field>\n                                                   </div>\n\n                                      \n                                      <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 bto\">\n           \n                                         <mat-form-field class=\"example-full-width\">\n                                         <mat-select placeholder=\"State\"  [formControl]=\"state\" required >\n                                         <mat-option *ngFor=\"let s of states\" [value]=\"s.value\">\n                                         {{s.viewValue}}\n                                             </mat-option>\n                                         </mat-select>\n                                         <mat-error *ngIf=\"state.invalid\">{{stateerror()}}</mat-error>\n                                         </mat-form-field>\n                                        </div>\n                                      </div>\n                                      <h5 class=\"text-center txtclr\"><ins>Waiver</ins></h5>\n                                      <div class=\"row\">\n                                          <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 txtclr \">\n                                               <label>I  <mat-form-field class=\"\">\n                                                        <input matInput placeholder=\"\"[formControl]=\"waiver\" required >\n                                                        <mat-error *ngIf=\"waiver.invalid\">{{waivererror()}}</mat-error>\n                                                      </mat-form-field>  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n                                                           The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, \n                                                           content here', making it look like readable English.It is a long established fact that a reader will be distracted by the readable\n                                                            content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of \n                                                            letters, as opposed to using 'Content here, content here', making it look like readable English.</label>\n                                            \n                                            </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 txtclr\">\n                                                        <mat-form-field class=\"example-full-width\">\n                                                            <input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\" [formControl]=\"amount\" required>\n                                                            <span matPrefix>RS&nbsp;</span>\n                                                            <span matSuffix>.00</span>\n                                                            <mat-error *ngIf=\"amount.invalid\">{{amounterror()}}</mat-error>\n                                                          </mat-form-field>\n                                                </div>\n                                                <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\">\n                                                        <mat-form-field class=\"example-full-width\">\n                                                            <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" [formControl]=\"amount\" required>\n                                                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                                            <mat-datepicker #picker></mat-datepicker>\n                                                            <mat-error *ngIf=\"date.invalid\">{{dateerror()}}</mat-error>\n                                                          </mat-form-field>\n                                              \n                                                </div>\n                                                <div class=\"col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4\">\n                                                  \n                                       <mat-form-field class=\"example-full-width\">\n                                          <input matInput placeholder=\"Staff\" [formControl]=\"staff\" required>\n                                          <mat-error *ngIf=\"staff.invalid\">{{stafferror()}}</mat-error>\n                                        </mat-form-field>\n          \n                                                </div>\n                                             \n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-12 col-sm-12 col-md-12  col-lg-12 col-xl-12\">\n                                                        <div class=\"form-group\">\n                                                                <button  class=\"btn btn-primary\">Register</button>\n                                                            </div>\n                                                </div>\n                                                \n                                            </div>\n                                            \n                                         </form>\n                                      </div> \n                                  </div>\n\n\n\n\n\n                                "

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.states = [
            { value: '0', viewValue: 'Tamil Nadu' },
            { value: '1', viewValue: 'Telangana' },
            { value: '2', viewValue: 'Uttar Pradesh' },
            { value: '3', viewValue: 'Goa' }
        ];
        this.cities = [
            { value: '1', viewValue: 'Mumbai' },
            { value: '2', viewValue: 'Delhi' },
            { value: '3', viewValue: 'Chennai' },
            { value: '4', viewValue: 'Jaipur' },
            { value: '5', viewValue: 'Kolkata' },
            { value: '6', viewValue: 'Bangalore' }
        ];
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
        /*validator*/
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[A-Za-z]+')]);
        this.grade = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.age = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.address1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.city1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.zip1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.school = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.parent = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[A-Za-z]+')]);
        this.emergency = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.family = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[A-Za-z]+')]);
        this.hospital = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.coach = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[A-Za-z]+')]);
        this.address2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.city2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.state = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.waiver = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.staff = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[A-Za-z]+')]);
        this.phone1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+')]);
        this.phone2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+')]);
        this.phone3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+')]);
        this.phone4 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+')]);
        this.gender = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.young = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.adult = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(FormComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        else {
            alert('SUCCESS!! :-)');
            return;
        }
    };
    FormComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter the value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    FormComponent.prototype.setErrorMessage = function () {
        return this.grade.hasError('required') ? 'you must enter the grade' :
            '';
    };
    FormComponent.prototype.childmessage = function () {
        return this.name.hasError('required') ? 'you must enter the name' :
            this.name.hasError('pattern') ? 'only enter the alphabet' :
                '';
    };
    FormComponent.prototype.ageerrormessage = function () {
        return this.age.hasError('required') ? 'you must enter the age' :
            '';
    };
    FormComponent.prototype.addresserror1 = function () {
        return this.address1.hasError('required') ? 'you must enter the address' :
            '';
    };
    FormComponent.prototype.cityerror1 = function () {
        return this.city1.hasError('required') ? 'required this field' :
            '';
    };
    FormComponent.prototype.ziperror = function () {
        return this.zip1.hasError('required') ? 'enter the value' :
            '';
    };
    FormComponent.prototype.schoolerror = function () {
        return this.school.hasError('required') ? 'enter the school name' :
            '';
    };
    FormComponent.prototype.parentnameerror = function () {
        return this.parent.hasError('required') ? 'must enter your parent name' :
            this.parent.hasError('pattern') ? 'only enter the alphabet' :
                '';
    };
    FormComponent.prototype.emergencyerror = function () {
        return this.emergency.hasError('required') ? 'required this field' :
            '';
    };
    FormComponent.prototype.familyerror = function () {
        return this.family.hasError('required') ? 'enter your doctor name' :
            this.family.hasError('pattern') ? 'only enter the alphabet' :
                '';
    };
    FormComponent.prototype.hospitalerror = function () {
        return this.hospital.hasError('required') ? 'provide this details' :
            '';
    };
    FormComponent.prototype.coacherror = function () {
        return this.coach.hasError('required') ? 'must enter the name' :
            this.coach.hasError('pattern') ? 'only enter the alphabet' :
                '';
    };
    FormComponent.prototype.addresserror2 = function () {
        return this.address2.hasError('required') ? 'you must enter the address' :
            '';
    };
    FormComponent.prototype.cityerror2 = function () {
        return this.city2.hasError('required') ? 'required this field' :
            '';
    };
    FormComponent.prototype.stateerror = function () {
        return this.state.hasError('required') ? 'required this field' :
            '';
    };
    FormComponent.prototype.waivererror = function () {
        return this.waiver.hasError('required') ? 'enter this details' :
            '';
    };
    FormComponent.prototype.amounterror = function () {
        return this.amount.hasError('required') ? 'must enter the amount you pay' :
            '';
    };
    FormComponent.prototype.dateerror = function () {
        return this.date.hasError('required') ? 'fill this field' :
            '';
    };
    FormComponent.prototype.stafferror = function () {
        return this.staff.hasError('required') ? 'fill this field' :
            this.staff.hasError('pattern') ? 'only enter the alphabet' :
                '';
    };
    FormComponent.prototype.phoneerror1 = function () {
        return this.phone1.hasError('required') ? 'You must enter the valid mobile number' :
            this.phone1.hasError('pattern') ? 'only enter the number' :
                '';
    };
    FormComponent.prototype.phoneerror2 = function () {
        return this.phone2.hasError('required') ? 'You must enter the valid mobile number' :
            this.phone2.hasError('pattern') ? 'only enter the number' :
                '';
    };
    FormComponent.prototype.phoneerror3 = function () {
        return this.phone3.hasError('required') ? 'You must enter the valid mobile number' :
            this.phone3.hasError('pattern') ? 'only enter the number' :
                '';
    };
    FormComponent.prototype.phoneerror4 = function () {
        return this.phone4.hasError('required') ? 'You must enter the valid mobile number' :
            this.phone4.hasError('pattern') ? 'please only enter the number' :
                '';
    };
    FormComponent.prototype.gendererror = function () {
        return this.gender.hasError('required') ? 'fill this field' :
            '';
    };
    FormComponent.prototype.youngerror = function () {
        return this.young.hasError('required') ? 'fill this field' :
            '';
    };
    FormComponent.prototype.adulterror = function () {
        return this.adult.hasError('required') ? 'fill this field' :
            '';
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormComponent);
    return FormComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Admin\form\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map