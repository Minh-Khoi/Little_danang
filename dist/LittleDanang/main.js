(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"dvImage\">\n  <div>\n    <h1> Quick Visa to Viet Nam </h1>\n  </div>\n</div>\n<router-outlet></router-outlet>\n<!-- <app-form-and-gallery></app-form-and-gallery> -->\n\n<!-- <router-outlet name=\"k\"></router-outlet> -->\n<!-- <app-gallery-modal></app-gallery-modal> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admins-controlling/admins-controlling.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admins-controlling/admins-controlling.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>admins-controlling works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>dashboard works!</p> -->\n<div class=\"dashboard\">\n\n  <div name=\"\" id=\"visas_provider\" routerLink=\"/visa\" routerLinkActive=\"active\" class=\"col-xs-12 btn btn-primary\"\n    role=\"button\">\n    <span>PROVIDING VISAS</span>\n  </div>\n  <div name=\"\" id=\"admins_controller\" class=\"col-md-6 col-xs-12 btn btn-primary\" role=\"button\">\n    <span>CONTROL ADMINS 'S ROLE</span>\n  </div>\n  <div name=\"\" id=\"histories_manager\" class=\"col-md-6 col-xs-12 btn btn-primary\" role=\"button\">\n    <span>MANAGE HISTORIES OF SESSIONS</span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-and-gallery/form-and-gallery.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-and-gallery/form-and-gallery.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"info_box\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"info_box_container d-flex flex-row align-items-center justify-content-start\">\n          <div class=\"info_form_container\">\n            <h3>Easy Visa to Viet Nam</h3>\n            <h6 style=\"margin:0\">\n              Managed by Danang City Public Security Station\n            </h6>\n            <a routerLink=\"/term-and-condition\" routerLinkActive=\"active\">At First, Please read the TERMS AND\n              CONDITIONS</a>\n            <h6>Fill your info below</h6>\n            <div id=\"info_form\" class=\"info_form\">\n              <div class=\"d-flex  flex-column align-items-center justify-content-start\">\n                <ul class=\"info_form_list d-flex flex-row align-items-center justify-content-start flex-wrap\">\n                  <li class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\">\n                    <span id=\"agreeTerm\">Do you agree TERMS AND CONDITIONS?? *</span>\n                    <i class=\"fa fa-chevron-down ml-auto\" aria-hidden=\"true\"></i>\n                    <ul>\n                      <li>Do you agree TERMS AND CONDITIONS?? *</li>\n                      <li>Agree</li>\n                      <li>Disagree</li>\n                    </ul>\n                  </li>\n                  <li [style.visibility]=\"!invalidForm.agreeTerm? 'hidden' : 'visible'\"\n                    class=\"error_line only_for_mobile\">\n                    You MUST agree with TERM AND CONDITIONS\n                  </li>\n                  <li class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\">\n                    <span id=\"type_of_visa\">Type of visa: *</span>\n                    <i class=\"fa fa-chevron-down ml-auto\" aria-hidden=\"true\"></i>\n                    <ul>\n                      <li>Type of visa: *</li>\n                      <li>\n                        Check out item 1 <i class=\"badge badge-primary float-right\" style=\"margin-right: 10px;\">$100\n                          &emsp;</i>\n                      </li>\n                      <li>\n                        Check out item 2<i class=\"badge badge-primary float-right\" style=\"margin-right: 10px;\">$100\n                          &emsp;</i>\n                      </li>\n                      <li>\n                        Check out item 3<i class=\"badge badge-primary float-right\" style=\"margin-right: 10px;\">$100\n                          &emsp;</i></li>\n                      <li>\n                        Check out item 4<i class=\"badge badge-primary float-right\" style=\"margin-right: 10px;\">$100\n                          &emsp;</i>\n                      </li>\n                      <li>\n                        Check out item 5<i class=\"badge badge-primary float-right\" style=\"margin-right: 10px;\">$100\n                          &emsp;</i>\n                      </li>\n                    </ul>\n                  </li>\n                  <li class=\"error_line\" style=\"\">\n                    <div class=\"only_for_lap\" [style.visibility]=\"!invalidForm.agreeTerm? 'hidden' : 'visible'\">You MUST\n                      agree with\n                      TERM AND\n                      CONDITIONS </div>\n                    <div style=\"\" *ngIf=\"invalidForm.type_of_visa\">Please CHOOSE type of visa </div>\n                  </li>\n\n                  <li>\n                    <input class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\" type=\"text\"\n                      onfocus=\"(this.type='date')\" onblur=\"this.type='text'\" name=\"\" id=\"dateOfArrivals\"\n                      placeholder=\"Date of arrivals *\">\n                  </li>\n\n                  <li [style.visibility]=\"!invalidForm.date_of_arrivals ? 'hidden' : 'visible'\"\n                    class=\"error_line only_for_mobile\">\n                    You MUST agree with TERM AND CONDITIONS\n                  </li>\n\n                  <li class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\">\n                    <span id=\"airport\">Arrival airport: *</span>\n                    <i class=\"fa fa-chevron-down ml-auto\" aria-hidden=\"true\"></i>\n                    <ul>\n                      <li>Arrival airport: *</li>\n                      <li>Noi Bai International Airport (Ha Noi)</li>\n                      <li>Tan Son Nhat International Airport (Ho Chi Minh)</li>\n                      <li>Airport 3</li>\n                      <li>Airport 4</li>\n                      <li>Airport 5</li>\n                    </ul>\n                  </li>\n\n                  <li class=\"error_line\" style=\"\">\n                    <div class=\"only_for_lap\" [style.visibility]=\"!invalidForm.date_of_arrivals ? 'hidden' : 'visible'\">\n                      Date of\n                      arrival must be given and after today\n                    </div>\n                    <div style=\"\" *ngIf=\"invalidForm.airport\">Please CHOOSE an airport </div>\n                  </li>\n\n                  <li data-toggle=\"tooltip\" data-placement=\"left\"\n                    title=\"INTENSION: Please text your email here and CHECK IT TWO TIMES, in order to guarantee your email is correct\">\n                    <input class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\" type=\"email\"\n                      name=\"\" id=\"email\" placeholder=\"Your email *\">\n\n                  </li>\n\n                  <li [style.visibility]=\"!invalidForm.email ? 'hidden' : 'visible'\" class=\"error_line only_for_mobile\">\n                    You MUST agree with TERM AND CONDITIONS\n                  </li>\n\n                  <li class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\">\n                    <span id=\"passport_img_field\">Upload your passport image *</span>\n                    <i class=\"fa fa-chevron-down ml-auto\" aria-hidden=\"true\"></i>\n                    <ul>\n                      <li>Upload your passport image *</li>\n                      <li>\n                        <input type=\"file\" name=\"\" id=\"file\" value=\"\">\n                      </li>\n                    </ul>\n                    <!-- <input class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\" type=\"file\"\n                      name=\"\" id=\"file\" value=\"Upload your passport image *\"> -->\n                  </li>\n\n                  <li class=\"error_line\" style=\"\">\n                    <div class=\"only_for_lap\" [style.visibility]=\"!invalidForm.email ? 'hidden':'visible'\"> Email\n                      invalid !!\n                    </div>\n                    <div style=\"\" *ngIf=\"invalidForm.passport_img_field\">Please UPLOAD your PASSPORT image </div>\n                  </li>\n\n                  <li class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\">\n                    <span id=\"payment_feedback\">Ready for payment? *</span>\n                    <i class=\"fa fa-chevron-down ml-auto\" aria-hidden=\"true\"></i>\n                    <ul>\n                      <li>Ready for payment? *</li>\n                      <li>Sure</li>\n                      <li>You don't agree\n                        <input type=\"text\" name=\"\" id=\"otherIdea\" placeholder=\"Other Opinions\">\n                      </li>\n                    </ul>\n                  </li>\n                  <li class=\"error_line\" style=\"\">\n                    <div style=\"\" *ngIf=\"invalidForm.payment_feedback\">Are you ready for payment </div>\n                  </li>\n\n                </ul>\n                <button class=\"info_button\" (click)=\"submittingHandle()\">Send info</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<!-- <a name=\"\" id=\"\" class=\"btn btn-primary\" routerLink=\"/login\" routerLinkActive=\"active\" role=\"button\">\n  LOGIN AS ADMIN\n</a> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery-modal/gallery-modal.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery-modal/gallery-modal.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Button trigger modal -->\n<img src=\"./assets/imgs/gallery/banco2.jpg\" data-toggle=\"modal\" data-target=\"#banco2\" />\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"banco2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <img src=\"./assets/imgs/gallery/banco2.jpg\" alt=\"\" srcset=\"\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/histories/histories.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/histories/histories.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"history\">\n  <input type=\"text\" id=\"myInput\" (keyup)=\"filterTable()\" [(ngModel)]=\"search_info\"\n    placeholder=\"search session id, email, type of visa ...\">\n  <br>\n\n  Filter list by state....\n  <input type=\"radio\" name=\"is_done\" id=\"\" value=\"pending\" checked> pending\n  <input type=\"radio\" name=\"is_done\" id=\"\" value=\"done\"> done\n  <input type=\"radio\" name=\"is_done\" id=\"\" value=\"overided\"> overided\n  <button class=\"btn btn-info\" (click)=\"filterList()\">FILTER LIST</button>\n  <br>\n\n  <button class=\"btn btn-info\" (click)=\"makeAllDone()\">MAKE ALL ACTIONS DONE</button>\n  <button class=\"btn btn-warning\" (click)=\"deleteAllOverided()\">DELETE ALL OVERIDED</button>\n  <button class=\"btn btn-danger\" (click)=\"deleteAllDone()\">DELETE ALL DONE </button>\n  <table id=\"myTable\">\n    <tr class=\"header\">\n      <th style=\"width:20%;\">EMAIL</th>\n      <th style=\"width: 15%;\">TYPE OF VISA</th>\n      <th style=\"width:15%;\">DATE Of ARRIVALS</th>\n      <th style=\"width:20%;\">ACTION</th>\n      <th style=\"width:30%;\">AIRPORT</th>\n    </tr>\n    <tr *ngFor=\"let ses of listOfSessions\">\n      <td>{{ses.email}}</td>\n      <td>{{ses.type_of_visa}}</td>\n      <td>{{ses.date_of_arrivals}}</td>\n      <td>\n        <a [href]=\"backendDirectory + '/'+ ses.img_path\" target=\"_blank\">SEE IMAGE</a> <br>\n        <input type=\"checkbox\" [name]=\"ses.session_id\" [id]=\"ses.session_id+ '_delete'\" data-reference=\"delete\">\n        <label [for]=\"ses.session_id+ '_delete'\">DELETE</label> <br>\n        <input type=\"checkbox\" [name]=\"ses.session_id \" [id]=\"ses.session_id+ '_isDone'\" data-reference=\"mark_done\">\n        <label [for]=\"ses.session_id+ '_isDone'\">MARK DONE</label>\n      </td>\n      <td>{{ses.airport}}</td>\n    </tr>\n  </table>\n\n  <button class=\"btn btn-info\" (click)=\"makeAllDone()\">MAKE ALL ACTIONS DONE</button>\n  <button class=\"btn btn-warning\" (click)=\"deleteAllOverided()\">DELETE ALL OVERIDED</button>\n  <button class=\"btn btn-danger\" (click)=\"deleteAllDone()\">DELETE ALL DONE </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form\">\n\n  <div class=\"admin-container\">\n    <h1>WELCOME OFFICER</h1>\n    <h2>Fill all the blanks to Login</h2>\n  </div>\n\n  <form id=\"loginForm\" class=\"container\">\n    <label for=\"officer_code\"><b>Officer_code</b></label>\n    <input type=\"text\" placeholder=\"Enter Username\" name=\"officer_code\" required>\n\n    <label for=\"password\"><b>Password</b></label>\n    <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\n    <p style=\"color: red; font-size: 13px\" *ngIf=\"loginInvalid\">Login failed <br> Check back your password or\n      officer_code</p>\n\n    <button (click)=\"submitLogin($event)\" [routerLink]=\"\" routerLinkActive=\"active\">Login</button>\n    <!-- <label>\n      <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\n    </label> -->\n  </form>\n\n  <div class=\"container\">\n    <button type=\"button\" routerLink=\"/form-and-gallery\" routerLinkActive=\"c\" class=\"cancelbtn\">Cancel</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/term-and-condition/term-and-condition.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/term-and-condition/term-and-condition.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"term\">\n  <h2>TERM AND CONDITION !</h2>\n  <h5>\n    <a routerLink=\"/form-and-gallery\" routerLinkActive=\"active\"> Submit Info</a>\n  </h5>\n  <p>\n    <strong>1.</strong> Vietnam Visa on arrival or Vietnam landing visa or E-visa is the same type of visa that you will\n    be picked\n    visa stamp and visa sticker at the Vietnam international airports (Ha Noi Capital, Da Nang City or Ho Chi Minh\n    City...) <br>\n\n    This is the best way to get your Vietnam entry visa for normal passport holder with purpose of tourist. No\n    need\n    send your passport to anywhere, no document needed, and it is so fast, easy, reliable,…. You just need to fill\n    in our \"Online Application Form\", pay the service fee, get your \"Visa approval letter\" within 2 working days\n    and\n    pick up your visa at your destination international airport in Vietnam. <br>\n\n    Noted: Only travelers by air to Vietnam international airports. Your passport must be valid for at least 6\n    months beyond your planned stay in Vietnam. You are unable to enter Vietnam earlier than the date which state\n    on\n    your Vietnam visa approval letter. <br>\n\n    <strong>2.</strong> Vietnam Visa Fee Instructions: In order to get your Vietnam visa, you should pay two kinds of\n    fees: Service\n    fee and Stamping fee <br>\n\n    • Service fee is the fee you pay to us for doing all the paper work for you to submit your visa application to\n    the Vietnam Immigration Department for processing their visa approval letters. <br>\n    • Stamping fee (Gratis for Russian) is the fee you pay directly to Immigration Officers in cash (in USD or\n    VND)\n    (at Immigration Desk/Counter) at your arrival airport in Vietnam to have visa stamped onto your passport. The\n    fee is collected by the Immigration Officers and compulsory for all those who use visa on arrival method.\n    ($25/single entry visa, $50/multiple entry visa, $135/one year visa with mutilple entry). <br>\n\n    <strong>3.</strong> After you submit your application and payment, we will start processing your visa. After 2\n    working days, we\n    will send an approval letter (pre-approved visa letter) to you by email. Then you just need to print the\n    images\n    file (color preferred, but not required) and prepare at least 2 passport sized photos (4cm x 6cm). <br>\n\n    Upon arrival at Vietnam international airports, expect to fill in a simple form, present the your approval\n    letter, passport, photos, and pay for the stamping fee. Without hassle or trouble. <br>\n\n    <strong>4.</strong> At the moment, visa on arrival and evisa is not applicable for Nigeria, Cameroon, Mozambique,\n    Congo, Ghana,\n    Sierra Leone, Pakistan, Iran, Iraq, Yemen, Syria, Afghanistan, Lybia, Bangladesh, Lebanon, Sri Lanka, Sudan,\n    Turkey passport holders. Kindly contact the nearest Vietnam Embassy/Consulate to apply for a visa. <br>\n\n    <strong>5.</strong> Money back guarantee: <br>\n    We pride ourselves on getting things right. That doesn’t mean we’re perfect, but when we make mistakes we fix\n    them. <br>\n\n    Beside of offering the best services regarding to Vietnam visa processing, we also guarantee to offer a full\n    refund in the following cases. <br>\n    • The services were not served as your request. <br>\n    • The customer visa application was denied by Vietnam Immigration Department. <br>\n\n    We – Little DaNang – would like to thank you so much for your attention in Little DaNang! <br>\n  </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/visa-providing/visa-providing.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/visa-providing/visa-providing.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>visa-providing works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/api-routes/api-route/api-route.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/api-routes/api-route/api-route.module.ts ***!
  \**********************************************************/
/*! exports provided: ApiRouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRouteModule", function() { return ApiRouteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./src/app/api-routes/routes.ts");





let ApiRouteModule = class ApiRouteModule {
};
ApiRouteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_4__["route"], { enableTracing: true } // <-- debugging purposes only
            )
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ApiRouteModule);



/***/ }),

/***/ "./src/app/api-routes/backendURL.ts":
/*!******************************************!*\
  !*** ./src/app/api-routes/backendURL.ts ***!
  \******************************************/
/*! exports provided: hostDIR, backendDirectory, backendURL, deleteOverdatedSessionURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostDIR", function() { return hostDIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backendDirectory", function() { return backendDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backendURL", function() { return backendURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOverdatedSessionURL", function() { return deleteOverdatedSessionURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
//** THis is the host path that contain frontend and backend directories */

const hostDIR = window.location.host;
// the app structure were set "backend directory inside frontend directory"
//** This is the path link to backend directory */
const backendDirectory = /*"http://localhost:8888/LittleDanangServerSide"; //*/ '/LittleDanangServerSide';
const backendURL = backendDirectory + "/addsession.php";
const deleteOverdatedSessionURL = backendDirectory + '/deleteOverdatedSession.php';


/***/ }),

/***/ "./src/app/api-routes/login-route.ts":
/*!*******************************************!*\
  !*** ./src/app/api-routes/login-route.ts ***!
  \*******************************************/
/*! exports provided: backendURL_login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backendURL_login", function() { return backendURL_login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _backendURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backendURL */ "./src/app/api-routes/backendURL.ts");


const backendURL_login = _backendURL__WEBPACK_IMPORTED_MODULE_1__["backendDirectory"] + "/login/login.php";


/***/ }),

/***/ "./src/app/api-routes/routes.ts":
/*!**************************************!*\
  !*** ./src/app/api-routes/routes.ts ***!
  \**************************************/
/*! exports provided: route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_form_and_gallery_form_and_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form-and-gallery/form-and-gallery.component */ "./src/app/components/form-and-gallery/form-and-gallery.component.ts");
/* harmony import */ var _components_term_and_condition_term_and_condition_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/term-and-condition/term-and-condition.component */ "./src/app/components/term-and-condition/term-and-condition.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_visa_providing_visa_providing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/visa-providing/visa-providing.component */ "./src/app/components/visa-providing/visa-providing.component.ts");
/* harmony import */ var _components_histories_histories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/histories/histories.component */ "./src/app/components/histories/histories.component.ts");
/* harmony import */ var _components_admins_controlling_admins_controlling_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/admins-controlling/admins-controlling.component */ "./src/app/components/admins-controlling/admins-controlling.component.ts");







const route = [
    { path: 'form-and-gallery', component: _components_form_and_gallery_form_and_gallery_component__WEBPACK_IMPORTED_MODULE_1__["FormAndGalleryComponent"] },
    { path: 'term-and-condition', component: _components_term_and_condition_term_and_condition_component__WEBPACK_IMPORTED_MODULE_2__["TermAndConditionComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _components_histories_histories_component__WEBPACK_IMPORTED_MODULE_5__["HistoriesComponent"] },
    { path: 'visa', component: _components_visa_providing_visa_providing_component__WEBPACK_IMPORTED_MODULE_4__["VisaProvidingComponent"] },
    { path: 'admin', component: _components_admins_controlling_admins_controlling_component__WEBPACK_IMPORTED_MODULE_6__["AdminsControllingComponent"] },
    { path: 'history', component: _components_histories_histories_component__WEBPACK_IMPORTED_MODULE_5__["HistoriesComponent"] },
    { path: '', redirectTo: '/form-and-gallery', pathMatch: 'full' },
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#dvImage {\r\n  /* min-height: 75vh; */\r\n  min-height: 100vh;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n#dvImage>div {\r\n  font-family: \"Kaushan script\";\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  padding-top: 40vh;\r\n  margin: auto 15vw;\r\n  color: rgb(119, 238, 51);\r\n  text-align: center;\r\n}\r\n\r\n#dvImage>div>h1 {\r\n  background-color: rgba(0, 0, 255, 0.555);\r\n  padding: 20px;\r\n}\r\n\r\n@media only screen and (min-width: 576px) {\r\n  #dvImage>div {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* #dvImage app-form-and-gallery {\r\n  position: absolute;\r\n  top: 7.5vh;\r\n  left: 19vw;\r\n  width: 60vw;\r\n  height: 500px;\r\n  background-color: rgba(0, 0, 255, 0.534);\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsYUFBYTtBQUNmOztBQUlBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTs7Ozs7OztHQU9HIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZHZJbWFnZSB7XHJcbiAgLyogbWluLWhlaWdodDogNzV2aDsgKi9cclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4jZHZJbWFnZT5kaXYge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkthdXNoYW4gc2NyaXB0XCI7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmctdG9wOiA0MHZoO1xyXG4gIG1hcmdpbjogYXV0byAxNXZ3O1xyXG4gIGNvbG9yOiByZ2IoMTE5LCAyMzgsIDUxKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNkdkltYWdlPmRpdj5oMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNTU1KTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAjZHZJbWFnZT5kaXYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8qICNkdkltYWdlIGFwcC1mb3JtLWFuZC1nYWxsZXJ5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3LjV2aDtcclxuICBsZWZ0OiAxOXZ3O1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNTM0KTtcclxufSAqL1xyXG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_set_interval_bg_imgs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/set-interval-bg-imgs.service */ "./src/app/services/set-interval-bg-imgs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    // constructor(private setIntervalBgImg: SetIntervalBgImgsService) { }
    constructor(setIntervalBgImg, route, router) {
        this.setIntervalBgImg = setIntervalBgImg;
        this.route = route;
        this.router = router;
        this.title = 'LittleDanang';
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.setIntervalBgImg.setIntervalBgImgs();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_set_interval_bg_imgs_service__WEBPACK_IMPORTED_MODULE_2__["SetIntervalBgImgsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_form_and_gallery_form_and_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/form-and-gallery/form-and-gallery.component */ "./src/app/components/form-and-gallery/form-and-gallery.component.ts");
/* harmony import */ var _components_term_and_condition_term_and_condition_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/term-and-condition/term-and-condition.component */ "./src/app/components/term-and-condition/term-and-condition.component.ts");
/* harmony import */ var _api_routes_api_route_api_route_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api-routes/api-route/api-route.module */ "./src/app/api-routes/api-route/api-route.module.ts");
/* harmony import */ var _components_gallery_modal_gallery_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/gallery-modal/gallery-modal.component */ "./src/app/components/gallery-modal/gallery-modal.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_visa_providing_visa_providing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/visa-providing/visa-providing.component */ "./src/app/components/visa-providing/visa-providing.component.ts");
/* harmony import */ var _components_admins_controlling_admins_controlling_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admins-controlling/admins-controlling.component */ "./src/app/components/admins-controlling/admins-controlling.component.ts");
/* harmony import */ var _components_histories_histories_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/histories/histories.component */ "./src/app/components/histories/histories.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_form_and_gallery_form_and_gallery_component__WEBPACK_IMPORTED_MODULE_6__["FormAndGalleryComponent"],
            _components_term_and_condition_term_and_condition_component__WEBPACK_IMPORTED_MODULE_7__["TermAndConditionComponent"],
            _components_gallery_modal_gallery_modal_component__WEBPACK_IMPORTED_MODULE_9__["GalleryModalComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
            _components_visa_providing_visa_providing_component__WEBPACK_IMPORTED_MODULE_12__["VisaProvidingComponent"],
            _components_admins_controlling_admins_controlling_component__WEBPACK_IMPORTED_MODULE_13__["AdminsControllingComponent"],
            _components_histories_histories_component__WEBPACK_IMPORTED_MODULE_14__["HistoriesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _api_routes_api_route_api_route_module__WEBPACK_IMPORTED_MODULE_8__["ApiRouteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/admins-controlling/admins-controlling.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/admins-controlling/admins-controlling.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5zLWNvbnRyb2xsaW5nL2FkbWlucy1jb250cm9sbGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/admins-controlling/admins-controlling.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admins-controlling/admins-controlling.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminsControllingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsControllingComponent", function() { return AdminsControllingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminsControllingComponent = class AdminsControllingComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminsControllingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admins-controlling',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admins-controlling.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admins-controlling/admins-controlling.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admins-controlling.component.css */ "./src/app/components/admins-controlling/admins-controlling.component.css")).default]
    })
], AdminsControllingComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* SET POSITION OF CLASS .dashboard */\r\n.dashboard {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 5vw;\r\n  width: 90%;\r\n}\r\n/* SET VISA_PROVIDER FULL WIDTH */\r\n#visas_provider {\r\n  display: block;\r\n}\r\n#admins_controller,\r\n#visas_provider,\r\n#histories_manager {\r\n  height: 48vh;\r\n  margin: 1vh 1%;\r\n  background-color: #00ffff6e;\r\n  border: 3px solid red;\r\n  font-weight: 800;\r\n  font-size: 1.5em;\r\n  /* width: 200px; */\r\n  overflow: hidden;\r\n}\r\n#visas_provider {\r\n  background-color: #a6ff006c;\r\n}\r\n#admins_controller:hover,\r\n#histories_manager:hover {\r\n  background-color: #00ffffb6;\r\n}\r\n#visas_provider:hover {\r\n  background-color: #a6ff00af;\r\n}\r\n#admins_controller span,\r\n#histories_manager span {\r\n  display: inline-block;\r\n  white-space: normal;\r\n  margin-top: 35%;\r\n}\r\n#visas_provider span {\r\n  position: relative;\r\n  top: 40%;\r\n}\r\n@media (min-width: 768px) {\r\n\r\n  #admins_controller,\r\n  #histories_manager {\r\n    width: 48%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDO0FBQ3JDO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsY0FBYztBQUNoQjtBQUVBOzs7RUFHRSxZQUFZO0VBQ1osY0FBYztFQUNkLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFFQTs7RUFFRSwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjtBQUVBOztFQUVFOztJQUVFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTRVQgUE9TSVRJT04gT0YgQ0xBU1MgLmRhc2hib2FyZCAqL1xyXG4uZGFzaGJvYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDV2dztcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4vKiBTRVQgVklTQV9QUk9WSURFUiBGVUxMIFdJRFRIICovXHJcbiN2aXNhc19wcm92aWRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNhZG1pbnNfY29udHJvbGxlcixcclxuI3Zpc2FzX3Byb3ZpZGVyLFxyXG4jaGlzdG9yaWVzX21hbmFnZXIge1xyXG4gIGhlaWdodDogNDh2aDtcclxuICBtYXJnaW46IDF2aCAxJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmZmNmU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICAvKiB3aWR0aDogMjAwcHg7ICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI3Zpc2FzX3Byb3ZpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZmZjAwNmM7XHJcbn1cclxuXHJcbiNhZG1pbnNfY29udHJvbGxlcjpob3ZlcixcclxuI2hpc3Rvcmllc19tYW5hZ2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmZmYjY7XHJcbn1cclxuXHJcbiN2aXNhc19wcm92aWRlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2ZmYwMGFmO1xyXG59XHJcblxyXG4jYWRtaW5zX2NvbnRyb2xsZXIgc3BhbixcclxuI2hpc3Rvcmllc19tYW5hZ2VyIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIG1hcmdpbi10b3A6IDM1JTtcclxufVxyXG5cclxuI3Zpc2FzX3Byb3ZpZGVyIHNwYW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDQwJTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICNhZG1pbnNfY29udHJvbGxlcixcclxuICAjaGlzdG9yaWVzX21hbmFnZXIge1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/form-and-gallery/form-and-gallery.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/form-and-gallery/form-and-gallery.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".info_box {\r\n  background: transparent;\r\n  margin-bottom: 45px;\r\n  position: absolute;\r\n  top: 1em;\r\n}\r\n\r\n.info_box .container {\r\n  margin: 0;\r\n}\r\n\r\n.info_box_container {\r\n  /* position: absolute; */\r\n  width: calc(100% + 117px);\r\n  left: 2.5vw;\r\n  height: auto;\r\n  background: #2e3f6183;\r\n  margin: auto 3vw;\r\n  /* top: 2vh; */\r\n  width: 88.5vw;\r\n  box-shadow: 0px 3px 57px rgba(0, 0, 0, 0.35);\r\n  z-index: 1;\r\n  padding-left: 83px;\r\n  padding-right: 66px;\r\n  padding-top: 0px;\r\n  padding-bottom: 45px;\r\n}\r\n\r\n.info_form_container {\r\n  width: 100%;\r\n}\r\n\r\n.info_form_container h3,\r\n.info_form_container h6,\r\n.info_form_container a {\r\n  font-family: \"Kaushan script\";\r\n  color: rgb(119, 238, 51);\r\n}\r\n\r\n.info_form_container a {\r\n  text-decoration: underline;\r\n  color: red;\r\n}\r\n\r\n.info_form_container h3 {\r\n  display: block;\r\n}\r\n\r\n.info_form {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.info_form>div {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.info_form_list {\r\n  width: calc(100% - 172px);\r\n  height: 100%;\r\n  padding: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.info_form_list>li {\r\n  position: relative;\r\n  width: 49%;\r\n  height: 55px;\r\n  cursor: pointer;\r\n  padding-left: 28px;\r\n  padding-right: 16px;\r\n  background: #FFFFFF;\r\n  margin: 12px 0.5% 0 0.5%;\r\n  list-style: none;\r\n}\r\n\r\n.info_form_list>li>span {\r\n  width: 100%;\r\n}\r\n\r\n.info_form_list>li>ul>li>i,\r\n.info_form_list #type_of_visa>i {\r\n  color: yellow;\r\n}\r\n\r\n.info_form_list .error_line {\r\n  max-height: 1em;\r\n  color: rgb(224, 0, 0);\r\n  font-weight: 600;\r\n  font-size: 0.75em;\r\n  width: 100%;\r\n  background-color: transparent;\r\n  margin: 0 auto;\r\n  border-right: none;\r\n  padding-left: 3px;\r\n  padding-right: 0;\r\n}\r\n\r\n.info_form_list>.error_line.only_for_mobile {\r\n  display: none;\r\n}\r\n\r\n.info_form_list .error_line>div {\r\n  width: 49%;\r\n  background-color: rgba(44, 55, 58, 0.795);\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  position: relative;\r\n  /* padding-right: 1.6% */\r\n}\r\n\r\n.info_form_list .error_line>div:first-child {\r\n  left: 0;\r\n}\r\n\r\n/* .info_form_list .error_line>div:last-child {\r\n  left: 50%;\r\n} */\r\n\r\n.info_form_list .error_line>div:first-child {\r\n  margin-right: 1.5%\r\n}\r\n\r\n/* .info_form_list>li abbr:hover::after {\r\n  color: red;\r\n  content: attr(title);\r\n} */\r\n\r\n.info_form_list>.info_dropdown:not(:last-child) {\r\n  border-right: solid 2px #d1d1d1;\r\n}\r\n\r\n.info_form_list>.info_dropdown::after {\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 4px;\r\n  background: #da8661;\r\n  content: '';\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 200ms ease;\r\n}\r\n\r\n.info_form_list>li:hover::after {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.info_form_list>li>input,\r\n.info_form_list>li>abbr>input {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.info_form_list>li span {\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  color: #6b6b6b;\r\n}\r\n\r\n.info_form_list>li i {\r\n  font-size: 10px;\r\n  font-weight: 500;\r\n  color: #a3a3a3;\r\n}\r\n\r\n.info_form_list>li>ul {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 100%;\r\n  width: 100%;\r\n  background: #FFFFFF;\r\n  padding-left: 28px;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n}\r\n\r\n.info_form_list>li.active>ul {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.info_form_list>li>ul>li:not(:last-of-type) {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.info_form_list>li>ul>li {\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  color: #a3a3a3;\r\n  transition: all 200ms ease;\r\n}\r\n\r\n.info_form_list>li>ul>li:hover {\r\n  color: #6b6b6b;\r\n}\r\n\r\n.info_button {\r\n  width: 172px;\r\n  height: 73px;\r\n  background: #637496;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: #FFFFFF;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n  margin-top: 0px;\r\n}\r\n\r\n/*RESPONSIVE*/\r\n\r\n/* CSS Document */\r\n\r\n/******************************\r\n\r\n[Table of Contents]\r\n\r\n1. 1600px\r\n2. 1440px\r\n3. 1280px\r\n4. 1199px\r\n5. 1024px\r\n6. 991px\r\n7. 959px\r\n8. 880px\r\n9. 768px\r\n10. 767px\r\n11. 539px\r\n12. 479px\r\n13. 400px\r\n\r\n******************************/\r\n\r\n/************\r\n1. 1600px\r\n************/\r\n\r\n@media only screen and (max-width: 1600px) {}\r\n\r\n/************\r\n2. 1440px\r\n************/\r\n\r\n@media only screen and (max-width: 1440px) {}\r\n\r\n/************\r\n3. 1380px\r\n************/\r\n\r\n@media only screen and (max-width: 1380px) {}\r\n\r\n/************\r\n3. 1280px\r\n************/\r\n\r\n@media only screen and (max-width: 1280px) {}\r\n\r\n/************\r\n4. 1199px\r\n************/\r\n\r\n@media only screen and (max-width: 1199px) {\r\n  .info_box_container {\r\n    padding-left: 45px;\r\n    padding-right: 40px;\r\n  }\r\n\r\n}\r\n\r\n/************\r\n4. 1100px\r\n************/\r\n\r\n@media only screen and (max-width: 1100px) {}\r\n\r\n/************\r\n5. 1024px\r\n************/\r\n\r\n@media only screen and (max-width: 1024px) {}\r\n\r\n/************\r\n6. 991px\r\n************/\r\n\r\n@media only screen and (max-width: 991px) {\r\n\r\n  .info_form_list {\r\n    width: 100%;\r\n  }\r\n\r\n  .info_form_list>li {\r\n    /* width: 50%; */\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .info_form_list>.info_dropdown:not(:last-child) {\r\n    border-right: none;\r\n  }\r\n\r\n  .info_form_list>.info_dropdown:nth-child(odd) {\r\n    border-right: solid 2px #d1d1d1;\r\n  }\r\n\r\n  .info_form_list>.error_line {\r\n    border-right: none;\r\n  }\r\n\r\n}\r\n\r\n/************\r\n7. 959px\r\n************/\r\n\r\n@media only screen and (max-width: 959px) {\r\n  .info_form_list>.error_line {\r\n    margin-bottom: 0.4em;\r\n    line-height: 1.2em;\r\n  }\r\n\r\n  /* .info_form_list>li {\r\n    margin-top: 0;\r\n  } */\r\n}\r\n\r\n/************\r\n8. 880px\r\n************/\r\n\r\n@media only screen and (max-width: 880px) {}\r\n\r\n/************\r\n9. 768px\r\n************/\r\n\r\n@media only screen and (max-width: 768px) {}\r\n\r\n/************\r\n10. 767px\r\n************/\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .info_box_container {\r\n    width: calc(100% + 117px);\r\n    position: absolute;\r\n    left: -69px;\r\n    height: auto;\r\n    background: #2e3f6183;\r\n    margin: auto 3vw;\r\n    width: 88.5vw;\r\n    box-shadow: 0px 3px 57px rgba(0, 0, 0, 0.35);\r\n    z-index: 1;\r\n    padding-left: 83px;\r\n    padding-right: 66px;\r\n    padding-top: 0;\r\n    padding-bottom: 45px;\r\n  }\r\n}\r\n\r\n/************\r\n11. 575px\r\n************/\r\n\r\n@media only screen and (max-width: 575px) {\r\n\r\n  .info_box_container {\r\n    /* width: calc(100% - 30px); */\r\n    left: 2.5vw;\r\n    top: 82vh;\r\n    /* padding-top: 50px; */\r\n    background-color: #2e3f61;\r\n  }\r\n\r\n  .info_form_container h3 {\r\n    display: none;\r\n  }\r\n\r\n  .info_form_list>li {\r\n    width: 100%;\r\n    height: 53px;\r\n  }\r\n\r\n  .info_form_list .error_line>div {\r\n    width: 100%;\r\n  }\r\n\r\n  .info_form_list>.error_line>.only_for_lap {\r\n    display: none;\r\n  }\r\n\r\n  .info_form_list>.error_line.only_for_mobile {\r\n    display: block;\r\n    background-color: rgba(44, 55, 58, 0.795);\r\n  }\r\n\r\n  .info_form_list>li:nth-child(odd) {\r\n    border-right: none;\r\n  }\r\n\r\n  .info_button {\r\n    width: 152px;\r\n    height: 53px;\r\n    font-size: 12px;\r\n    margin-top: 6px;\r\n  }\r\n}\r\n\r\n/************\r\n11. 539px\r\n************/\r\n\r\n@media only screen and (max-width: 539px) {}\r\n\r\n/************\r\n12. 480px\r\n************/\r\n\r\n@media only screen and (max-width: 480px) {}\r\n\r\n/************\r\n13. 479px\r\n************/\r\n\r\n@media only screen and (max-width: 479px) {}\r\n\r\n/************\r\n14. 400px\r\n************/\r\n\r\n@media only screen and (max-width: 400px) {}\r\n\r\n/* LOGIN AS ADMIN BUTTON */\r\n\r\na.btn {\r\n  position: fixed;\r\n  bottom: 0.25em;\r\n  right: 0.5em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWFuZC1nYWxsZXJ5L2Zvcm0tYW5kLWdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLDZCQUE2QjtFQUM3Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlDQUF5QztFQUN6QyxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7O0dBRUc7O0FBR0g7RUFDRTtBQUNGOztBQUdBOzs7R0FHRzs7QUFFSDtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFLViwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUtkLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUEsYUFBYTs7QUFDYixpQkFBaUI7O0FBRWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBa0I4Qjs7QUFFOUI7O1lBRVk7O0FBRVosNENBQTRDOztBQUU1Qzs7WUFFWTs7QUFFWiw0Q0FBNEM7O0FBRTVDOztZQUVZOztBQUVaLDRDQUE0Qzs7QUFFNUM7O1lBRVk7O0FBRVosNENBQTRDOztBQUU1Qzs7WUFFWTs7QUFFWjtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7QUFFRjs7QUFFQTs7WUFFWTs7QUFFWiw0Q0FBNEM7O0FBRTVDOztZQUVZOztBQUVaLDRDQUE0Qzs7QUFFNUM7O1lBRVk7O0FBRVo7O0VBRUU7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVGOztBQUVBOztZQUVZOztBQUVaO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0VBQ3BCOztFQUVBOztLQUVHO0FBQ0w7O0FBRUE7O1lBRVk7O0FBRVosMkNBQTJDOztBQUUzQzs7WUFFWTs7QUFFWiwyQ0FBMkM7O0FBRTNDOztZQUVZOztBQUVaO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQTs7WUFFWTs7QUFFWjs7RUFFRTtJQUNFLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsU0FBUztJQUNULHVCQUF1QjtJQUN2Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztJQUNkLHlDQUF5QztFQUMzQzs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7RUFDakI7QUFDRjs7QUFFQTs7WUFFWTs7QUFFWiwyQ0FBMkM7O0FBRTNDOztZQUVZOztBQUVaLDJDQUEyQzs7QUFFM0M7O1lBRVk7O0FBRVosMkNBQTJDOztBQUUzQzs7WUFFWTs7QUFFWiwyQ0FBMkM7O0FBRzNDLDBCQUEwQjs7QUFDMUI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1hbmQtZ2FsbGVyeS9mb3JtLWFuZC1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb19ib3gge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMWVtO1xyXG59XHJcblxyXG4uaW5mb19ib3ggLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaW5mb19ib3hfY29udGFpbmVyIHtcclxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDExN3B4KTtcclxuICBsZWZ0OiAyLjV2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogIzJlM2Y2MTgzO1xyXG4gIG1hcmdpbjogYXV0byAzdnc7XHJcbiAgLyogdG9wOiAydmg7ICovXHJcbiAgd2lkdGg6IDg4LjV2dztcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDU3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBhZGRpbmctbGVmdDogODNweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA2NnB4O1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQ1cHg7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmluZm9fZm9ybV9jb250YWluZXIgaDMsXHJcbi5pbmZvX2Zvcm1fY29udGFpbmVyIGg2LFxyXG4uaW5mb19mb3JtX2NvbnRhaW5lciBhIHtcclxuICBmb250LWZhbWlseTogXCJLYXVzaGFuIHNjcmlwdFwiO1xyXG4gIGNvbG9yOiByZ2IoMTE5LCAyMzgsIDUxKTtcclxufVxyXG5cclxuLmluZm9fZm9ybV9jb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmluZm9fZm9ybV9jb250YWluZXIgaDMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaW5mb19mb3JtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmluZm9fZm9ybT5kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmluZm9fZm9ybV9saXN0IHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMTcycHgpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fbGlzdD5saSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0OSU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIG1hcmdpbjogMTJweCAwLjUlIDAgMC41JTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uaW5mb19mb3JtX2xpc3Q+bGk+c3BhbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fbGlzdD5saT51bD5saT5pLFxyXG4uaW5mb19mb3JtX2xpc3QgI3R5cGVfb2ZfdmlzYT5pIHtcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4uaW5mb19mb3JtX2xpc3QgLmVycm9yX2xpbmUge1xyXG4gIG1heC1oZWlnaHQ6IDFlbTtcclxuICBjb2xvcjogcmdiKDIyNCwgMCwgMCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuLmluZm9fZm9ybV9saXN0Pi5lcnJvcl9saW5lLm9ubHlfZm9yX21vYmlsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmluZm9fZm9ybV9saXN0IC5lcnJvcl9saW5lPmRpdiB7XHJcbiAgd2lkdGg6IDQ5JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ0LCA1NSwgNTgsIDAuNzk1KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogcGFkZGluZy1yaWdodDogMS42JSAqL1xyXG59XHJcblxyXG4uaW5mb19mb3JtX2xpc3QgLmVycm9yX2xpbmU+ZGl2OmZpcnN0LWNoaWxkIHtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiAuaW5mb19mb3JtX2xpc3QgLmVycm9yX2xpbmU+ZGl2Omxhc3QtY2hpbGQge1xyXG4gIGxlZnQ6IDUwJTtcclxufSAqL1xyXG5cclxuXHJcbi5pbmZvX2Zvcm1fbGlzdCAuZXJyb3JfbGluZT5kaXY6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1yaWdodDogMS41JVxyXG59XHJcblxyXG5cclxuLyogLmluZm9fZm9ybV9saXN0PmxpIGFiYnI6aG92ZXI6OmFmdGVyIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGNvbnRlbnQ6IGF0dHIodGl0bGUpO1xyXG59ICovXHJcblxyXG4uaW5mb19mb3JtX2xpc3Q+LmluZm9fZHJvcGRvd246bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggI2QxZDFkMTtcclxufVxyXG5cclxuLmluZm9fZm9ybV9saXN0Pi5pbmZvX2Ryb3Bkb3duOjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNkYTg2NjE7XHJcbiAgY29udGVudDogJyc7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxufVxyXG5cclxuLmluZm9fZm9ybV9saXN0PmxpOmhvdmVyOjphZnRlciB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaW5mb19mb3JtX2xpc3Q+bGk+aW5wdXQsXHJcbi5pbmZvX2Zvcm1fbGlzdD5saT5hYmJyPmlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fbGlzdD5saSBzcGFuIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzZiNmI2YjtcclxufVxyXG5cclxuLmluZm9fZm9ybV9saXN0PmxpIGkge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjYTNhM2EzO1xyXG59XHJcblxyXG4uaW5mb19mb3JtX2xpc3Q+bGk+dWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIHBhZGRpbmctbGVmdDogMjhweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaW5mb19mb3JtX2xpc3Q+bGkuYWN0aXZlPnVsIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fbGlzdD5saT51bD5saTpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fbGlzdD5saT51bD5saSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNhM2EzYTM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxufVxyXG5cclxuLmluZm9fZm9ybV9saXN0PmxpPnVsPmxpOmhvdmVyIHtcclxuICBjb2xvcjogIzZiNmI2YjtcclxufVxyXG5cclxuLmluZm9fYnV0dG9uIHtcclxuICB3aWR0aDogMTcycHg7XHJcbiAgaGVpZ2h0OiA3M3B4O1xyXG4gIGJhY2tncm91bmQ6ICM2Mzc0OTY7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4vKlJFU1BPTlNJVkUqL1xyXG4vKiBDU1MgRG9jdW1lbnQgKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbltUYWJsZSBvZiBDb250ZW50c11cclxuXHJcbjEuIDE2MDBweFxyXG4yLiAxNDQwcHhcclxuMy4gMTI4MHB4XHJcbjQuIDExOTlweFxyXG41LiAxMDI0cHhcclxuNi4gOTkxcHhcclxuNy4gOTU5cHhcclxuOC4gODgwcHhcclxuOS4gNzY4cHhcclxuMTAuIDc2N3B4XHJcbjExLiA1MzlweFxyXG4xMi4gNDc5cHhcclxuMTMuIDQwMHB4XHJcblxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqXHJcbjEuIDE2MDBweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge31cclxuXHJcbi8qKioqKioqKioqKipcclxuMi4gMTQ0MHB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7fVxyXG5cclxuLyoqKioqKioqKioqKlxyXG4zLiAxMzgwcHhcclxuKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzgwcHgpIHt9XHJcblxyXG4vKioqKioqKioqKioqXHJcbjMuIDEyODBweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge31cclxuXHJcbi8qKioqKioqKioqKipcclxuNC4gMTE5OXB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgLmluZm9fYm94X2NvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKioqKioqKioqKipcclxuNC4gMTEwMHB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7fVxyXG5cclxuLyoqKioqKioqKioqKlxyXG41LiAxMDI0cHhcclxuKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHt9XHJcblxyXG4vKioqKioqKioqKioqXHJcbjYuIDk5MXB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuXHJcbiAgLmluZm9fZm9ybV9saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmluZm9fZm9ybV9saXN0PmxpIHtcclxuICAgIC8qIHdpZHRoOiA1MCU7ICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5mb19mb3JtX2xpc3Q+LmluZm9fZHJvcGRvd246bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaW5mb19mb3JtX2xpc3Q+LmluZm9fZHJvcGRvd246bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggI2QxZDFkMTtcclxuICB9XHJcblxyXG4gIC5pbmZvX2Zvcm1fbGlzdD4uZXJyb3JfbGluZSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqKioqKioqKioqKlxyXG43LiA5NTlweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgLmluZm9fZm9ybV9saXN0Pi5lcnJvcl9saW5lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNGVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gIH1cclxuXHJcbiAgLyogLmluZm9fZm9ybV9saXN0PmxpIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfSAqL1xyXG59XHJcblxyXG4vKioqKioqKioqKioqXHJcbjguIDg4MHB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHt9XHJcblxyXG4vKioqKioqKioqKioqXHJcbjkuIDc2OHB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHt9XHJcblxyXG4vKioqKioqKioqKioqXHJcbjEwLiA3NjdweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmluZm9fYm94X2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMTE3cHgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTY5cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmUzZjYxODM7XHJcbiAgICBtYXJnaW46IGF1dG8gM3Z3O1xyXG4gICAgd2lkdGg6IDg4LjV2dztcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmctbGVmdDogODNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDY2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKlxyXG4xMS4gNTc1cHhcclxuKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG5cclxuICAuaW5mb19ib3hfY29udGFpbmVyIHtcclxuICAgIC8qIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTsgKi9cclxuICAgIGxlZnQ6IDIuNXZ3O1xyXG4gICAgdG9wOiA4MnZoO1xyXG4gICAgLyogcGFkZGluZy10b3A6IDUwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzZjYxO1xyXG4gIH1cclxuXHJcbiAgLmluZm9fZm9ybV9jb250YWluZXIgaDMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5pbmZvX2Zvcm1fbGlzdD5saSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTNweDtcclxuICB9XHJcblxyXG4gIC5pbmZvX2Zvcm1fbGlzdCAuZXJyb3JfbGluZT5kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaW5mb19mb3JtX2xpc3Q+LmVycm9yX2xpbmU+Lm9ubHlfZm9yX2xhcCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmluZm9fZm9ybV9saXN0Pi5lcnJvcl9saW5lLm9ubHlfZm9yX21vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDQsIDU1LCA1OCwgMC43OTUpO1xyXG4gIH1cclxuXHJcbiAgLmluZm9fZm9ybV9saXN0PmxpOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcblxyXG4gIC5pbmZvX2J1dHRvbiB7XHJcbiAgICB3aWR0aDogMTUycHg7XHJcbiAgICBoZWlnaHQ6IDUzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqXHJcbjExLiA1MzlweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzOXB4KSB7fVxyXG5cclxuLyoqKioqKioqKioqKlxyXG4xMi4gNDgwcHhcclxuKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge31cclxuXHJcbi8qKioqKioqKioqKipcclxuMTMuIDQ3OXB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHt9XHJcblxyXG4vKioqKioqKioqKioqXHJcbjE0LiA0MDBweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7fVxyXG5cclxuXHJcbi8qIExPR0lOIEFTIEFETUlOIEJVVFRPTiAqL1xyXG5hLmJ0biB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMC4yNWVtO1xyXG4gIHJpZ2h0OiAwLjVlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/form-and-gallery/form-and-gallery.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/form-and-gallery/form-and-gallery.component.ts ***!
  \***************************************************************************/
/*! exports provided: FormAndGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAndGalleryComponent", function() { return FormAndGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_initinfo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/initinfo.service */ "./src/app/services/initinfo.service.ts");
/* harmony import */ var _services_backend_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/backend-apis.service */ "./src/app/services/backend-apis.service.ts");




let FormAndGalleryComponent = class FormAndGalleryComponent {
    constructor(initinfo, backend_api) {
        this.initinfo = initinfo;
        this.backend_api = backend_api;
        this.invalidForm = {
            agreeTerm: false,
            type_of_visa: false,
            passport_code: false,
            date_of_arrivals: false,
            airport: false,
            email: false,
            passport_img_field: false,
            payment_feedback: false
        };
    }
    ngDoCheck() {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        this.view_width = window.innerWidth;
    }
    ngOnInit() {
        this.initinfo.initinfo();
        this.backend_api.deleteOverdatedSession();
        $(function () {
            $('li[data-toggle="tooltip"]').tooltip();
        });
        // console.log(window.location.host);
    }
    submittingHandle() {
        // console.log(document.getElementById("file").files);
        //** get value of each field. */
        let agreeTerm = document.getElementById("agreeTerm").innerHTML, type_of_visa = document.getElementById("type_of_visa").innerText.replace(/[\r\n]+/gm, ', price: '), 
        // passport_code = (<HTMLInputElement>document.getElementById("numOfIDs")).value,
        date_of_arrivals = document.getElementById("dateOfArrivals").value, airport = document.getElementById("airport").innerHTML, email = document.getElementById("email").value, passport_img_field = document.getElementById("passport_img_field").innerHTML, payment_feedback = document.getElementById("payment_feedback").innerHTML;
        // console.log(type_of_visa);
        //** render value (Object<boolean>) for invalidForm */
        if (agreeTerm != "Agree") {
            this.invalidForm.agreeTerm = true;
        }
        else {
            this.invalidForm.agreeTerm = false;
        }
        if (type_of_visa == "Type of visa: *") {
            this.invalidForm.type_of_visa = true;
        }
        else {
            this.invalidForm.type_of_visa = false;
        }
        if (date_of_arrivals.length == 0 || new Date(date_of_arrivals).getTime() <= new Date().getTime()) {
            this.invalidForm.date_of_arrivals = true;
        }
        else {
            this.invalidForm.date_of_arrivals = false;
        }
        if (airport == "Arrival airport: *") {
            this.invalidForm.airport = true;
        }
        else {
            this.invalidForm.airport = false;
        }
        if (email.length == 0 || !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
            this.invalidForm.email = true;
        }
        else {
            this.invalidForm.email = false;
        }
        if (passport_img_field != "file choosen") {
            this.invalidForm.passport_img_field = true;
        }
        else {
            this.invalidForm.passport_img_field = false;
        }
        if (payment_feedback == "Ready for payment? *") {
            this.invalidForm.payment_feedback = true;
        }
        else {
            this.invalidForm.payment_feedback = false;
        }
        // console.log(date_of_arrivals.length);
        //**  render value (boolean) if the form is submitable*/
        let submitable = true;
        for (let attr in this.invalidForm) {
            // console.log(attr);
            if (this.invalidForm[attr]) {
                submitable = false;
            }
        }
        //** if the form is submitable call service backend_apis */
        if (submitable) {
            // if (true) { //delete this line when complete
            let form_datas = new FormData();
            form_datas.append("type_of_visa", type_of_visa);
            // form_datas.append("passport_code", passport_code);
            form_datas.append("date_of_arrivals", date_of_arrivals);
            form_datas.append("airport", airport);
            form_datas.append("email", email);
            form_datas.append("passport_img", document.getElementById("file").files[0]);
            form_datas.append("payment_feedback", payment_feedback);
            form_datas.append("method_to_DB", "create");
            // console.log(form_datas.get("passport_img"));
            this.backend_api.add(form_datas).then((resolve) => {
                alert("Your infos were sent ");
            });
        }
    }
};
FormAndGalleryComponent.ctorParameters = () => [
    { type: _services_initinfo_service__WEBPACK_IMPORTED_MODULE_2__["InitinfoService"] },
    { type: _services_backend_apis_service__WEBPACK_IMPORTED_MODULE_3__["BackendApisService"] }
];
FormAndGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-and-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-and-gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-and-gallery/form-and-gallery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-and-gallery.component.css */ "./src/app/components/form-and-gallery/form-and-gallery.component.css")).default]
    })
], FormAndGalleryComponent);



/***/ }),

/***/ "./src/app/components/gallery-modal/gallery-modal.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/gallery-modal/gallery-modal.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS1tb2RhbC9nYWxsZXJ5LW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/gallery-modal/gallery-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/gallery-modal/gallery-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: GalleryModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModalComponent", function() { return GalleryModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GalleryModalComponent = class GalleryModalComponent {
    constructor() { }
    ngOnInit() {
    }
};
GalleryModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery-modal/gallery-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery-modal.component.css */ "./src/app/components/gallery-modal/gallery-modal.component.css")).default]
    })
], GalleryModalComponent);



/***/ }),

/***/ "./src/app/components/histories/histories.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/histories/histories.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".history {\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  position: absolute;\r\n  top: 0;\r\n  background-color: rgb(0, 204, 255);\r\n  text-align: center;\r\n}\r\n\r\n/* .history input[type='text'] {\r\n  width: 80vw;\r\n  line-height: 3em;\r\n  margin: 1em auto;\r\n} */\r\n\r\n.history input[type=\"radio\"] {\r\n  margin-left: 0.5em;\r\n}\r\n\r\n#myInput {\r\n  width: 80%;\r\n  /* increase-width */\r\n  font-size: 16px;\r\n  /* Increase font-size */\r\n  padding: 12px 20px 12px 40px;\r\n  /* Add some padding */\r\n  border: 1px solid #ddd;\r\n  /* Add a grey border */\r\n  margin-bottom: 1em;\r\n  /* Add some space below the input */\r\n}\r\n\r\n#myTable {\r\n  border-collapse: collapse;\r\n  /* Collapse borders */\r\n  width: 100%;\r\n  /* Full-width */\r\n  border: 1px solid #ddd;\r\n  /* Add a grey border */\r\n  font-size: 18px;\r\n  /* Increase font-size */\r\n  margin-bottom: 0.75em;\r\n  /* margin distance bottom */\r\n}\r\n\r\n#myTable th,\r\n#myTable td {\r\n  text-align: left;\r\n  /* Left-align text */\r\n  padding: 12px;\r\n  /* Add padding */\r\n  overflow: hidden;\r\n  word-break: break-word;\r\n}\r\n\r\n#myTable tr {\r\n  /* Add a bottom border to all table rows */\r\n  border-bottom: 1px solid #ddd;\r\n  font-size: 16px;\r\n}\r\n\r\n#myTable tr.header,\r\n#myTable tr:hover {\r\n  /* Add a grey background color to the table header and on hover */\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oaXN0b3JpZXMvaGlzdG9yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTs7OztHQUlHOztBQUVIO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGlFQUFpRTtFQUNqRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hpc3Rvcmllcy9oaXN0b3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXN0b3J5IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjA0LCAyNTUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogLmhpc3RvcnkgaW5wdXRbdHlwZT0ndGV4dCddIHtcclxuICB3aWR0aDogODB2dztcclxuICBsaW5lLWhlaWdodDogM2VtO1xyXG4gIG1hcmdpbjogMWVtIGF1dG87XHJcbn0gKi9cclxuXHJcbi5oaXN0b3J5IGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG59XHJcblxyXG4jbXlJbnB1dCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICAvKiBpbmNyZWFzZS13aWR0aCAqL1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICAvKiBJbmNyZWFzZSBmb250LXNpemUgKi9cclxuICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCA0MHB4O1xyXG4gIC8qIEFkZCBzb21lIHBhZGRpbmcgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIC8qIEFkZCBhIGdyZXkgYm9yZGVyICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIC8qIEFkZCBzb21lIHNwYWNlIGJlbG93IHRoZSBpbnB1dCAqL1xyXG59XHJcblxyXG4jbXlUYWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAvKiBDb2xsYXBzZSBib3JkZXJzICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogRnVsbC13aWR0aCAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgLyogQWRkIGEgZ3JleSBib3JkZXIgKi9cclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgLyogSW5jcmVhc2UgZm9udC1zaXplICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xyXG4gIC8qIG1hcmdpbiBkaXN0YW5jZSBib3R0b20gKi9cclxufVxyXG5cclxuI215VGFibGUgdGgsXHJcbiNteVRhYmxlIHRkIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC8qIExlZnQtYWxpZ24gdGV4dCAqL1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgLyogQWRkIHBhZGRpbmcgKi9cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbiNteVRhYmxlIHRyIHtcclxuICAvKiBBZGQgYSBib3R0b20gYm9yZGVyIHRvIGFsbCB0YWJsZSByb3dzICovXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4jbXlUYWJsZSB0ci5oZWFkZXIsXHJcbiNteVRhYmxlIHRyOmhvdmVyIHtcclxuICAvKiBBZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRhYmxlIGhlYWRlciBhbmQgb24gaG92ZXIgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/histories/histories.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/histories/histories.component.ts ***!
  \*************************************************************/
/*! exports provided: HistoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriesComponent", function() { return HistoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_lookup_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/lookup-session.service */ "./src/app/services/lookup-session.service.ts");
/* harmony import */ var _api_routes_backendURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api-routes/backendURL */ "./src/app/api-routes/backendURL.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HistoriesComponent = class HistoriesComponent {
    constructor(lookup, router) {
        this.lookup = lookup;
        this.router = router;
    }
    ngOnInit() {
        this.backendDirectory = _api_routes_backendURL__WEBPACK_IMPORTED_MODULE_3__["backendDirectory"];
        window.onbeforeunload = (ev) => {
            localStorage.removeItem('officer_code');
        };
        // console.log(localStorage.getItem("officer_code"));
        if (localStorage.getItem('officer_code')) {
            this.readByState("pending");
        }
        else {
            this.router.navigate(['form-and-gallery']);
        }
        // this.deleteByIDs([1, 2]);
    }
    // READ
    readByState(is_done) {
        // console.log(!localStorage.getItem('officer_code'));
        let form_datas = new FormData();
        // console.log(is_done);
        form_datas.append("method_to_DB", "read_by_state");
        form_datas.append("is_done", is_done);
        this.lookup.lookupSession(form_datas).then(resolve => {
            let resolveDemo = resolve; //(typeof resolve == 'string') ? resolve : "";
            let result = JSON.parse(resolveDemo);
            this.listOfSessions = result;
            // console.log(result);
        });
    }
    // DELETE
    deleteByIDs(IDs) {
        for (let id of IDs) {
            let form_datas = new FormData();
            form_datas.append("method_to_DB", "delete");
            form_datas.append("session_id", id);
            this.lookup.lookupSession(form_datas);
        }
    }
    deleteByState(is_done) {
        let form_datas = new FormData();
        form_datas.append("method_to_DB", "delete_by_state");
        form_datas.append("is_done", is_done);
        this.lookup.lookupSession(form_datas);
    }
    // MARK DONE
    markDoneByIDs(IDs) {
        for (let id of IDs) {
            let form_datas = new FormData();
            form_datas.append("method_to_DB", "mark_done");
            form_datas.append("session_id", id);
            this.lookup.lookupSession(form_datas);
        }
    }
    // EVENT
    makeAllDone() {
        let allDeletedCheckers = document.querySelectorAll("input[data-reference='delete'");
        let allMarkedDoneCheckers = document.querySelectorAll("input[data-reference='mark_done'");
        let arrayOfDeletedIDs = [], arrayOfMarkedDoneIDs = [];
        for (let i in allDeletedCheckers) {
            if (allDeletedCheckers[i].checked)
                arrayOfDeletedIDs.push(allDeletedCheckers[i].name);
        }
        // console.log(arrayOfDeletedIDs);
        this.deleteByIDs(arrayOfDeletedIDs);
        for (let i in allMarkedDoneCheckers) {
            if (allMarkedDoneCheckers[i].checked)
                arrayOfMarkedDoneIDs.push(allMarkedDoneCheckers[i].name);
        }
        this.markDoneByIDs(arrayOfMarkedDoneIDs);
    }
    filterList() {
        let valueFromRadioBtns = document.querySelector("input[name='is_done']:checked").value;
        this.readByState(valueFromRadioBtns);
    }
    filterTable() {
        // Declare variables
        let input, filter, table, tr, tds;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query
        for (let i = 0; i < tr.length; i++) {
            tds = tr[i].getElementsByTagName("td");
            let txtValues = [];
            for (let j = 0; j < tds.length; j++) {
                txtValues.push(tds[j].textContent || tds[j].innerText);
            }
            for (let j = 0; j < tds.length; j++) {
                if ((txtValues[j].toUpperCase().indexOf(filter) > -1)) {
                    tr[i].style.display = "";
                    // console.log(txtValues[j]);
                    // console.log(filter);
                    break;
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    deleteAllOverided() {
        let form_datas = new FormData();
        form_datas.append("method_to_DB", "delete_by_state");
        form_datas.append("is_done", "overided");
        this.lookup.lookupSession(form_datas);
    }
    deleteAllDone() {
        let form_datas = new FormData();
        form_datas.append("method_to_DB", "delete_by_state");
        form_datas.append("is_done", "done");
        this.lookup.lookupSession(form_datas);
    }
};
HistoriesComponent.ctorParameters = () => [
    { type: _services_lookup_session_service__WEBPACK_IMPORTED_MODULE_2__["LookupSessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HistoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-histories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./histories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/histories/histories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./histories.component.css */ "./src/app/components/histories/histories.component.css")).default]
    })
], HistoriesComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Bordered form */\r\n.form {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  border: 3px solid #f1f1f1;\r\n  position: absolute;\r\n  top: 0;\r\n  background-color: rgb(0, 204, 255);\r\n}\r\n/* Full-width inputs */\r\ninput[type=text],\r\ninput[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n/* Set a style for all buttons */\r\nbutton {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n/* Add a hover effect for buttons */\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n/* Extra style for the cancel button (red) */\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n/* Center the avatar image inside this container */\r\n.admin-container {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n}\r\n/* Add padding to containers */\r\n.container {\r\n  padding: 16px;\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n    display: block;\r\n    float: none;\r\n  }\r\n\r\n  .cancelbtn {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sa0NBQWtDO0FBQ3BDO0FBRUEsc0JBQXNCO0FBQ3RCOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCO0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsWUFBWTtBQUNkO0FBRUEsNENBQTRDO0FBQzVDO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFFQSxrREFBa0Q7QUFDbEQ7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBSUEsOEJBQThCO0FBQzlCO0VBQ0UsYUFBYTtBQUNmO0FBR0Esb0VBQW9FO0FBQ3BFO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCb3JkZXJlZCBmb3JtICovXHJcbi5mb3JtIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIwNCwgMjU1KTtcclxufVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSxcclxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGUgZm9yIHRoZSBjYW5jZWwgYnV0dG9uIChyZWQpICovXHJcbi5jYW5jZWxidG4ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBDZW50ZXIgdGhlIGF2YXRhciBpbWFnZSBpbnNpZGUgdGhpcyBjb250YWluZXIgKi9cclxuLmFkbWluLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjRweCAwIDEycHggMDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBzcGFuIGFuZCBjYW5jZWwgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICBzcGFuLnBzdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNhbmNlbGJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_routes_login_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-routes/login-route */ "./src/app/api-routes/login-route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
        this.loginInvalid = false;
    }
    ngOnInit() {
        document.getElementById("loginForm").addEventListener("click", (e) => {
            e.preventDefault();
        });
    }
    submitLogin(event) {
        let form_datas = new FormData(document.getElementById("loginForm"));
        console.log(form_datas.get("password"));
        fetch(_api_routes_login_route__WEBPACK_IMPORTED_MODULE_2__["backendURL_login"], {
            method: "POST",
            body: form_datas
        }).then(resolved => resolved.text())
            .then(resolved => {
            console.log(resolved);
            if (!resolved) {
                // alert("Login failed \n Check back your password of officer_code");
                this.loginInvalid = true;
            }
            else {
                localStorage.setItem('officer_code', resolved);
                this.loginInvalid = false;
                this.router.navigate(['/dashboard']);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/term-and-condition/term-and-condition.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/term-and-condition/term-and-condition.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".term {\r\n  position: absolute;\r\n  top: 1em;\r\n  width: calc(100% + 117px);\r\n  left: 2vw;\r\n  height: auto;\r\n  background: #2e3f61;\r\n  margin: auto 3vw;\r\n  width: 88.5vw;\r\n  box-shadow: 0px 3px 57px rgba(0, 0, 0, 0.35);\r\n  z-index: 1;\r\n  padding-left: 83px;\r\n  padding-right: 66px;\r\n  padding-top: 0px;\r\n  padding-bottom: 45px;\r\n  color: rgb(119, 238, 51);\r\n  text-align: justify;\r\n}\r\n\r\n.term h2,\r\n.term a {\r\n  font-family: 'Kaushan script';\r\n}\r\n\r\n.term a {\r\n  text-decoration: underline;\r\n  color: yellow;\r\n}\r\n\r\n.term>p>strong {\r\n  font-size: 1.2em;\r\n  font-family: 'Kaushan script';\r\n  color: rgb(228, 228, 228)\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXJtLWFuZC1jb25kaXRpb24vdGVybS1hbmQtY29uZGl0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsNkJBQTZCO0FBQy9COztBQUlBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVybS1hbmQtY29uZGl0aW9uL3Rlcm0tYW5kLWNvbmRpdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlcm0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDFlbTtcclxuICB3aWR0aDogY2FsYygxMDAlICsgMTE3cHgpO1xyXG4gIGxlZnQ6IDJ2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogIzJlM2Y2MTtcclxuICBtYXJnaW46IGF1dG8gM3Z3O1xyXG4gIHdpZHRoOiA4OC41dnc7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1N3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nLWxlZnQ6IDgzcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNjZweDtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xyXG4gIGNvbG9yOiByZ2IoMTE5LCAyMzgsIDUxKTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4udGVybSBoMixcclxuLnRlcm0gYSB7XHJcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIHNjcmlwdCc7XHJcbn1cclxuXHJcblxyXG5cclxuLnRlcm0gYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLnRlcm0+cD5zdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIHNjcmlwdCc7XHJcbiAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/term-and-condition/term-and-condition.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/term-and-condition/term-and-condition.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TermAndConditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermAndConditionComponent", function() { return TermAndConditionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TermAndConditionComponent = class TermAndConditionComponent {
    constructor() { }
    ngOnInit() {
    }
};
TermAndConditionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-term-and-condition',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./term-and-condition.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/term-and-condition/term-and-condition.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./term-and-condition.component.css */ "./src/app/components/term-and-condition/term-and-condition.component.css")).default]
    })
], TermAndConditionComponent);



/***/ }),

/***/ "./src/app/components/visa-providing/visa-providing.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/visa-providing/visa-providing.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlzYS1wcm92aWRpbmcvdmlzYS1wcm92aWRpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/visa-providing/visa-providing.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/visa-providing/visa-providing.component.ts ***!
  \***********************************************************************/
/*! exports provided: VisaProvidingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisaProvidingComponent", function() { return VisaProvidingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VisaProvidingComponent = class VisaProvidingComponent {
    constructor() { }
    ngOnInit() {
    }
};
VisaProvidingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visa-providing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./visa-providing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/visa-providing/visa-providing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./visa-providing.component.css */ "./src/app/components/visa-providing/visa-providing.component.css")).default]
    })
], VisaProvidingComponent);



/***/ }),

/***/ "./src/app/services/backend-apis.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/backend-apis.service.ts ***!
  \**************************************************/
/*! exports provided: BackendApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendApisService", function() { return BackendApisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-routes/backendURL */ "./src/app/api-routes/backendURL.ts");



let BackendApisService = class BackendApisService {
    constructor() { }
    add(form_datas) {
        // backendURL = "http://localhost:8888/LittleDanangServerSide/index.php";
        let request = new Request(_api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__["backendURL"], {
            method: 'POST',
            body: form_datas
        });
        console.log(_api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__["backendURL"]);
        return fetch(request).then((resolved) => {
            // console.log(resolved instanceof Response);
            return resolved.text();
        }, (reject) => console.log(reject)).then(resolved => console.log((resolved)));
    }
    deleteOverdatedSession() {
        // let fDatas = new FormData();
        fetch(_api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__["deleteOverdatedSessionURL"]);
    }
};
BackendApisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BackendApisService);



/***/ }),

/***/ "./src/app/services/initinfo.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/initinfo.service.ts ***!
  \**********************************************/
/*! exports provided: InitinfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitinfoService", function() { return InitinfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InitinfoService = class InitinfoService {
    constructor() { }
    initinfo() {
        if ($('.info_dropdown').length) {
            var dds = $('.info_dropdown');
            dds.each(function () {
                var dd = $(this);
                if (dd.find('ul > li').length) {
                    var ddItems = dd.find('ul > li');
                    ddItems.each(function () {
                        var ddItem = $(this);
                        ddItem.on('click', function () {
                            // console.log(ddItem.prop('tagName'));
                            dd.find('span').html(ddItem.html());
                        });
                        // if (ddItem.prop('tagName') != "INPUT") {
                        // 	ddItem.on('click', function () {
                        // 		dd.find('span').text(ddItem.text());
                        // 	});
                        // } else {
                        // 	ddItem.on('click', function (event) {
                        // 		// event.stopPropagation();
                        // 	});
                        // }
                    });
                    dd.on('click', function (event) {
                        if (event.target.tagName != "INPUT") {
                            dd.toggleClass('active');
                            // console.log(event.target.tagName != "INPUT");
                        }
                        else {
                            if (event.target.type != 'file') {
                                $(event.target).on('focusout', () => {
                                    dd.find('span').text(event.target.value);
                                    console.log(event.target);
                                    dd.toggleClass('active');
                                });
                            }
                            else {
                                $(event.target).on('change', () => {
                                    if (event.target.value)
                                        dd.find('span').text('file choosen');
                                    console.log(event.target);
                                    dd.toggleClass('active');
                                });
                            }
                            // console.log(event.target.value);
                        }
                    });
                }
            });
        }
    }
};
InitinfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InitinfoService);



/***/ }),

/***/ "./src/app/services/lookup-session.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/lookup-session.service.ts ***!
  \****************************************************/
/*! exports provided: LookupSessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupSessionService", function() { return LookupSessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-routes/backendURL */ "./src/app/api-routes/backendURL.ts");



let LookupSessionService = class LookupSessionService {
    constructor() { }
    // read(form_datas) {
    //   let request = new Request(backendURL, {
    //     method: 'POST',
    //     body: form_datas
    //   });
    //   return fetch(request).then(
    //     (resolved) => {
    //       console.log(resolved instanceof Response);
    //       return resolved.text();
    //     },
    //     (reject) => console.log(reject)
    //   );
    // }
    lookupSession(form_datas) {
        let request = new Request(_api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__["backendURL"], {
            method: 'POST',
            body: form_datas
        });
        return fetch(request).then((resolved) => {
            console.log(_api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__["backendURL"]);
            // console.log(resolved instanceof Response);
            return resolved.text();
        }).catch((reject) => {
            console.log(reject);
        });
    }
};
LookupSessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LookupSessionService);



/***/ }),

/***/ "./src/app/services/set-interval-bg-imgs.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/set-interval-bg-imgs.service.ts ***!
  \**********************************************************/
/*! exports provided: SetIntervalBgImgsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetIntervalBgImgsService", function() { return SetIntervalBgImgsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-routes/backendURL */ "./src/app/api-routes/backendURL.ts");



let SetIntervalBgImgsService = class SetIntervalBgImgsService {
    constructor() {
    }
    setIntervalBgImgs() {
        let images = ["danang2.jpg", "danang3.jpg", "danang4.jpg", "danang5.jpg", "danang6.jpg"];
        $(function () {
            let i = 0;
            $("#dvImage").css({
                "background-image": "url("
                    // + "http://localhost:4200"
                    // + hostDIR
                    + "/assets/imgs/" + images[i] + ")",
                "background-repeat": "no-repeat",
                "background-size": "100% 100vh"
                // "background-position" : ""
            });
            console.log(_api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__["hostDIR"]);
            setInterval(function () {
                i++;
                if (i == images.length) {
                    i = 0;
                }
                jQuery("#dvImage").fadeOut(5, function () {
                    $(this).css({
                        "background-image": "url("
                            // + "http://localhost:4200"
                            // + hostDIR
                            + "/assets/imgs/" + images[i] + ")",
                        "background-size": "100% 100vh"
                        // "background-position" : ""
                    });
                    jQuery(this).fadeIn("fast");
                    // console.log("ok");
                });
            }, 60000);
        });
    }
};
SetIntervalBgImgsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SetIntervalBgImgsService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\LittleDanang\LittleDanang\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map