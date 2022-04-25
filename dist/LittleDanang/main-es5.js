function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"dvImage\">\r\n  <div>\r\n    <h1> Quick Visa to Viet Nam </h1>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n<!-- <app-form-and-gallery></app-form-and-gallery> -->\r\n\r\n<!-- <router-outlet name=\"k\"></router-outlet> -->\r\n<!-- <app-gallery-modal></app-gallery-modal> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admins-controlling/admins-controlling.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admins-controlling/admins-controlling.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminsControllingAdminsControllingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>admins-controlling works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p>dashboard works!</p> -->\r\n<div class=\"dashboard\">\r\n\r\n  <div name=\"\" id=\"visas_provider\" routerLink=\"/visa\" routerLinkActive=\"active\" class=\"col-xs-12 btn btn-primary\"\r\n    role=\"button\">\r\n    <span>PROVIDING VISAS</span>\r\n  </div>\r\n  <div name=\"\" id=\"admins_controller\" class=\"col-md-6 col-xs-12 btn btn-primary\" role=\"button\">\r\n    <span>CONTROL ADMINS 'S ROLE</span>\r\n  </div>\r\n  <div name=\"\" id=\"histories_manager\" class=\"col-md-6 col-xs-12 btn btn-primary\" role=\"button\">\r\n    <span>MANAGE HISTORIES OF SESSIONS</span>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-and-gallery/form-and-gallery.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-and-gallery/form-and-gallery.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFormAndGalleryFormAndGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"info_box\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div class=\"info_box_container d-flex flex-row align-items-center justify-content-start\">\r\n          <div class=\"info_form_container\">\r\n            <!-- This button \"login link\" will navigate the to the admin login form -->\r\n            <div class=\"login_link btn-info\" (click)=\"goToLogin($event)\" >\r\n              <a >You are admin. Login here</a>\r\n            </div>\r\n\r\n            <h3>Easy Visa to Viet Nam</h3>\r\n            <h6 style=\"margin:0\">\r\n              Managed by Danang City Public Security Station\r\n            </h6>\r\n            <a routerLink=\"/term-and-condition\" routerLinkActive=\"active\">At First, Please read the TERMS AND\r\n              CONDITIONS</a>\r\n            <h6>Fill your info below</h6>\r\n            <div id=\"info_form\" class=\"info_form\">\r\n              <div class=\"d-flex  flex-column align-items-center justify-content-start\">\r\n                <ul class=\"info_form_list d-flex flex-row align-items-center justify-content-start flex-wrap\">\r\n                  <li class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\">\r\n                    <span id=\"agreeTerm\">Do you agree TERMS AND CONDITIONS?? *</span>\r\n                    <i class=\"fa fa-chevron-down ml-auto\" aria-hidden=\"true\"></i>\r\n                    <ul>\r\n                      <li>Do you agree TERMS AND CONDITIONS?? *</li>\r\n                      <li>Agree</li>\r\n                      <li>Disagree</li>\r\n                    </ul>\r\n                  </li>\r\n                  <li [style.visibility]=\"!invalidForm.agreeTerm? 'hidden' : 'visible'\"\r\n                    class=\"error_line only_for_mobile\">\r\n                    You MUST agree with TERM AND CONDITIONS\r\n                  </li>\r\n                  <li class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\">\r\n                    <span id=\"type_of_visa\">Type of visa: *</span>\r\n                    <i class=\"fa fa-chevron-down ml-auto\" aria-hidden=\"true\"></i>\r\n                    <ul>\r\n                      <li>Type of visa: *</li>\r\n                      <li>\r\n                        1 month single entry (for tourist) <i class=\"badge badge-primary float-right\"\r\n                          style=\"margin-right: 10px;\">$100\r\n                          &emsp;</i>\r\n                      </li>\r\n                      <li>\r\n                        1 month multiple entry (for tourist)<i class=\"badge badge-primary float-right\"\r\n                          style=\"margin-right: 10px;\">$100\r\n                          &emsp;</i>\r\n                      </li>\r\n                      <li>\r\n                        3 months single entry (for tourist)<i class=\"badge badge-primary float-right\"\r\n                          style=\"margin-right: 10px;\">$100\r\n                          &emsp;</i></li>\r\n                      <li>\r\n                        3 months multiple entry (for tourist)<i class=\"badge badge-primary float-right\"\r\n                          style=\"margin-right: 10px;\">$100\r\n                          &emsp;</i>\r\n                      </li>\r\n                      <li>\r\n                        1 year multiple entry visa (for tourist, only for US passport holders)<i\r\n                          class=\"badge badge-primary float-right\" style=\"margin-right: 10px;\">$100\r\n                          &emsp;</i>\r\n                      </li>\r\n                    </ul>\r\n                  </li>\r\n                  <li class=\"error_line\" style=\"\">\r\n                    <div class=\"only_for_lap\" [style.visibility]=\"!invalidForm.agreeTerm? 'hidden' : 'visible'\">You MUST\r\n                      agree with\r\n                      TERM AND\r\n                      CONDITIONS </div>\r\n                    <div style=\"\" *ngIf=\"invalidForm.type_of_visa\">Please CHOOSE type of visa </div>\r\n                  </li>\r\n\r\n                  <li>\r\n                    <input class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\" type=\"text\"\r\n                      onfocus=\"(this.type='date')\" onblur=\"this.type='text'\" name=\"\" id=\"dateOfArrivals\"\r\n                      placeholder=\"Date of arrivals *\">\r\n                  </li>\r\n\r\n                  <li [style.visibility]=\"!invalidForm.date_of_arrivals ? 'hidden' : 'visible'\"\r\n                    class=\"error_line only_for_mobile\">\r\n                    You MUST agree with TERM AND CONDITIONS\r\n                  </li>\r\n\r\n                  <li class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\">\r\n                    <span id=\"airport\">Arrival airport: *</span>\r\n                    <i class=\"fa fa-chevron-down ml-auto\" aria-hidden=\"true\"></i>\r\n                    <ul>\r\n                      <li>Arrival airport: *</li>\r\n                      <li>Noi Bai International Airport (Ha Noi)</li>\r\n                      <li>Tan Son Nhat International Airport (Ho Chi Minh)</li>\r\n                      <li>Da Nang International Airport (Da Nang)</li>\r\n                      <li>Cam Ranh International Airport (Khanh Hoa)</li>\r\n                      <li>Phu Quoc International Airport (Kien Giang)</li>\r\n                      <li>Phu Bai International Airport (Hue City)</li>\r\n                    </ul>\r\n                  </li>\r\n\r\n                  <li class=\"error_line\" style=\"\">\r\n                    <div class=\"only_for_lap\" [style.visibility]=\"!invalidForm.date_of_arrivals ? 'hidden' : 'visible'\">\r\n                      Date of\r\n                      arrival must be given and after today\r\n                    </div>\r\n                    <div style=\"\" *ngIf=\"invalidForm.airport\">Please CHOOSE an airport </div>\r\n                  </li>\r\n\r\n                  <li data-toggle=\"tooltip\" data-placement=\"left\" title=\"INTENSION: Please DOUBLE CHECK to ensure the information is correct. We will send our Vietnam 's visa\r\n                    approval letter via mail\">\r\n                    <input class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\" type=\"email\"\r\n                      name=\"\" id=\"email\" placeholder=\"Your email *\">\r\n\r\n                  </li>\r\n\r\n                  <li [style.visibility]=\"!invalidForm.email ? 'hidden' : 'visible'\" class=\"error_line only_for_mobile\">\r\n                    You MUST agree with TERM AND CONDITIONS\r\n                  </li>\r\n\r\n                  <li class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\">\r\n                    <span id=\"passport_img_field\">Upload your passport image *</span>\r\n                    <i class=\"fa fa-chevron-down ml-auto\" aria-hidden=\"true\"></i>\r\n                    <ul>\r\n                      <li>Upload your passport image *</li>\r\n                      <li>\r\n                        <input type=\"file\" name=\"\" id=\"file\" value=\"\">\r\n                      </li>\r\n                    </ul>\r\n                    <!-- <input class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\" type=\"file\"\r\n                      name=\"\" id=\"file\" value=\"Upload your passport image *\"> -->\r\n                  </li>\r\n\r\n                  <li class=\"error_line\" style=\"\">\r\n                    <div class=\"only_for_lap\" [style.visibility]=\"!invalidForm.email ? 'hidden':'visible'\"> Email\r\n                      invalid !!\r\n                    </div>\r\n                    <div style=\"\" *ngIf=\"invalidForm.passport_img_field\">Please UPLOAD your PASSPORT image </div>\r\n                  </li>\r\n\r\n                  <li class=\"info_dropdown d-flex flex-row align-items-center justify-content-start\">\r\n                    <span id=\"payment_feedback\">Ready for payment? *</span>\r\n                    <i class=\"fa fa-chevron-down ml-auto\" aria-hidden=\"true\"></i>\r\n                    <ul>\r\n                      <li>Ready for payment? *</li>\r\n                      <li>Sure</li>\r\n                      <li>You don't agree\r\n                        <input type=\"text\" name=\"\" id=\"otherIdea\" placeholder=\"Other Opinions\">\r\n                      </li>\r\n                    </ul>\r\n                  </li>\r\n                  <li class=\"error_line\" style=\"\">\r\n                    <div style=\"\" *ngIf=\"invalidForm.payment_feedback\">Are you ready for payment </div>\r\n                  </li>\r\n\r\n                </ul>\r\n                <button class=\"info_button\" (click)=\"submittingHandle()\"><b><span style='font-size: 2em'>GET\r\n                      VISA</span></b></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- <a name=\"\" id=\"\" class=\"btn btn-primary\" routerLink=\"/login\" routerLinkActive=\"active\" role=\"button\">\r\n  LOGIN AS ADMIN\r\n</a> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery-modal/gallery-modal.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery-modal/gallery-modal.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGalleryModalGalleryModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Button trigger modal -->\r\n<img src=\"./assets/imgs/gallery/banco2.jpg\" data-toggle=\"modal\" data-target=\"#banco2\" />\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"banco2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <img src=\"./assets/imgs/gallery/banco2.jpg\" alt=\"\" srcset=\"\">\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/histories/histories.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/histories/histories.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHistoriesHistoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"history\">\r\n  <input type=\"text\" id=\"myInput\" (keyup)=\"filterTable()\" [(ngModel)]=\"search_info\"\r\n    placeholder=\"search session id, email, type of visa ...\">\r\n  <br>\r\n\r\n  Filter list by state....\r\n  <input type=\"radio\" name=\"is_done\" id=\"\" value=\"pending\" checked> pending\r\n  <input type=\"radio\" name=\"is_done\" id=\"\" value=\"done\"> done\r\n  <input type=\"radio\" name=\"is_done\" id=\"\" value=\"overided\"> overided\r\n  <button class=\"btn btn-info\" (click)=\"filterList()\">FILTER LIST</button>\r\n  <br>\r\n\r\n  <button class=\"btn btn-info\" (click)=\"makeAllDone()\">MAKE ALL ACTIONS DONE</button>\r\n  <button class=\"btn btn-warning\" (click)=\"deleteAllOverided()\">DELETE ALL OVERIDED</button>\r\n  <button class=\"btn btn-danger\" (click)=\"deleteAllDone()\">DELETE ALL DONE </button>\r\n  <table id=\"myTable\">\r\n    <tr class=\"header\">\r\n      <th style=\"width:20%;\">EMAIL</th>\r\n      <th style=\"width: 15%;\">TYPE OF VISA</th>\r\n      <th style=\"width:15%;\">DATE Of ARRIVALS</th>\r\n      <th style=\"width:20%;\">ACTION</th>\r\n      <th style=\"width:30%;\">AIRPORT</th>\r\n    </tr>\r\n    <tr *ngFor=\"let ses of listOfSessions\">\r\n      <td>{{ses.email}}</td>\r\n      <td>{{ses.type_of_visa}}</td>\r\n      <td>{{ses.date_of_arrivals}}</td>\r\n      <td>\r\n        <a [href]=\"backendDirectory + '/'+ ses.img_path\" target=\"_blank\">SEE IMAGE</a> <br>\r\n        <input type=\"checkbox\" [name]=\"ses.session_id\" [id]=\"ses.session_id+ '_delete'\" data-reference=\"delete\">\r\n        <label [for]=\"ses.session_id+ '_delete'\">DELETE</label> <br>\r\n        <input type=\"checkbox\" [name]=\"ses.session_id \" [id]=\"ses.session_id+ '_isDone'\" data-reference=\"mark_done\">\r\n        <label [for]=\"ses.session_id+ '_isDone'\">MARK DONE</label>\r\n      </td>\r\n      <td>{{ses.airport}}</td>\r\n    </tr>\r\n  </table>\r\n\r\n  <button class=\"btn btn-info\" (click)=\"makeAllDone()\">MAKE ALL ACTIONS DONE</button>\r\n  <button class=\"btn btn-warning\" (click)=\"deleteAllOverided()\">DELETE ALL OVERIDED</button>\r\n  <button class=\"btn btn-danger\" (click)=\"deleteAllDone()\">DELETE ALL DONE </button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form\">\r\n\r\n  <div class=\"admin-container\">\r\n    <h1>WELCOME OFFICER</h1>\r\n    <h2>Fill all the blanks to Login</h2>\r\n  </div>\r\n\r\n  <form id=\"loginForm\" class=\"container\">\r\n    <label for=\"officer_code\"><b>Officer_code</b></label>\r\n    <input type=\"text\" placeholder=\"Enter Username\" name=\"officer_code\" required>\r\n\r\n    <label for=\"password\"><b>Password</b></label>\r\n    <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\r\n    <p style=\"color: red; font-size: 13px\" *ngIf=\"loginInvalid\">Login failed <br> Check back your password or\r\n      officer_code</p>\r\n\r\n    <button (click)=\"submitLogin($event)\" [routerLink]=\"\" routerLinkActive=\"active\">Login</button>\r\n    <!-- <label>\r\n      <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\r\n    </label> -->\r\n  </form>\r\n\r\n  <div class=\"container\">\r\n    <button type=\"button\" routerLink=\"/form-and-gallery\" routerLinkActive=\"c\" class=\"cancelbtn\">Cancel</button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/term-and-condition/term-and-condition.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/term-and-condition/term-and-condition.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTermAndConditionTermAndConditionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"term\">\r\n  <h2>VIETNAM VISA ON ARRIVAL SERVICE</h2>\r\n  <h6>We are pleased to inform that Little Danang is the Service in Vietnam specializing in processing Vietnam visa. We\r\n    are not affiliated with the Government. We offering useful services for helping the Customer understanding visa\r\n    application, visa processing and visa requirements which is being related to Visa on arrival. <br>\r\n\r\n    Once you use our services, we have a mission to handle visa applications in Vietnam Immigration Department and\r\n    provide the legal services to you and on time. You can also obtain Vietnam visa by yourself at Vietnam Embassies in\r\n    your living country or visit the Service for a lower price. - by Little Danang.\r\n  </h6>\r\n  <h2>TERM AND CONDITION !</h2>\r\n  <h5>\r\n    <a routerLink=\"/form-and-gallery\" routerLinkActive=\"active\"> Submit Info</a>\r\n  </h5>\r\n  <p>\r\n    <strong>1.</strong> Vietnam Visa on arrival or Vietnam landing visa or E-visa is the same type of visa that you will\r\n    be picked visa stamp\r\n    and visa sticker at the Vietnam international airports (Ha Noi Capital, Da Nang City or Ho Chi Minh City...) <br>\r\n\r\n    This is the best way to get your Vietnam entry visa for normal passport holder with purpose of tourist. No need send\r\n    your passport to anywhere, no document needed, and it is so fast, easy, reliable,…. You just need to fill in our\r\n    \"Online\r\n    Application Form\", pay the service fee, get your \"Visa approval letter\" within 2-3 working days and pick up your\r\n    visa at\r\n    your destination international airport in Vietnam. <br>\r\n\r\n    Noted: Only travelers by air to Vietnam international airports. Your passport must be valid for at least 6 months\r\n    beyond\r\n    your planned stay in Vietnam. You are unable to enter Vietnam earlier than the date which state on your Vietnam visa\r\n    approval letter. <br>\r\n\r\n    <strong>2.</strong> Vietnam Visa Fee Instructions: In order to get your Vietnam visa, you should pay two kinds of\r\n    fees: Service fee and\r\n    Stamping fee <br>\r\n\r\n    • Service fee is the fee you pay to us for doing all the paper work for you to submit your visa application to the\r\n    Vietnam Immigration Department for processing their visa approval letters. <br>\r\n    • Stamping fee (Gratis for Russian) is the fee you pay directly to Immigration Officers in cash (in USD or VND) (at\r\n    Immigration Desk/Counter) at your arrival airport in Vietnam to have visa stamped onto your passport. The fee is\r\n    collected by the Immigration Officers and compulsory for all those who use visa on arrival method. ($25/single entry\r\n    visa, $50/multiple entry visa, $135/one year visa with mutiple entry). <br>\r\n\r\n    <strong>3.</strong> After you submit your application and payment, we will start processing your visa. After 2-3\r\n    working days, we will\r\n    send an approval letter (pre-approved visa letter) to you by email. Then you just need to print the images file\r\n    (color\r\n    preferred, but not required) and prepare at least 2 passport sized photos (4cm x 6cm). <br>\r\n\r\n    Upon arrival at Vietnam international airports, expect to fill in a simple form, present the your approval letter,\r\n    passport, photos, and pay for the stamping fee. Without hassle or trouble. <br>\r\n\r\n    <strong>4.</strong> At the moment, visa on arrival and evisa is not applicable for Nigeria, Cameroon, Mozambique,\r\n    Congo, Ghana, Sierra\r\n    Leone, Pakistan, Iran, Iraq, Yemen, Syria, Afghanistan, Lybia, Bangladesh, Lebanon, Sri Lanka, Sudan, Turkey\r\n    passport\r\n    holders. Kindly contact the nearest Vietnam Embassy/Consulate to apply for a visa. <br>\r\n\r\n    <strong>5.</strong> Money back guarantee: <br>\r\n    We pride ourselves on getting things right. That doesn’t mean we’re perfect, but when we make mistakes we fix them.\r\n    <br>\r\n\r\n    Beside of offering the best services regarding to Vietnam visa processing, we also guarantee to offer a full refund\r\n    in\r\n    the following cases. <br>\r\n    • The services were not served as your request. <br>\r\n    • The customer visa application was denied by Vietnam Immigration Department. <br>\r\n\r\n    We – Little DaNang – would like to thank you so much for your attention in Little DaNang!\r\n  </p>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/visa-providing/visa-providing.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/visa-providing/visa-providing.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsVisaProvidingVisaProvidingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>visa-providing works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/api-routes/api-route/api-route.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/api-routes/api-route/api-route.module.ts ***!
    \**********************************************************/

  /*! exports provided: ApiRouteModule */

  /***/
  function srcAppApiRoutesApiRouteApiRouteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiRouteModule", function () {
      return ApiRouteModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../routes */
    "./src/app/api-routes/routes.ts");

    var ApiRouteModule = function ApiRouteModule() {
      _classCallCheck(this, ApiRouteModule);
    };

    ApiRouteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_4__["route"], {
        useHash: true
      } // <-- debugging purposes only
      )],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], ApiRouteModule);
    /***/
  },

  /***/
  "./src/app/api-routes/backendURL.ts":
  /*!******************************************!*\
    !*** ./src/app/api-routes/backendURL.ts ***!
    \******************************************/

  /*! exports provided: hostDIR, backendDirectory, backendURL, deleteOverdatedSessionURL */

  /***/
  function srcAppApiRoutesBackendURLTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hostDIR", function () {
      return hostDIR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "backendDirectory", function () {
      return backendDirectory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "backendURL", function () {
      return backendURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteOverdatedSessionURL", function () {
      return deleteOverdatedSessionURL;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); //** THis is the host path that contain frontend and backend directories */


    var hostDIR = window.location.host; // the app structure were set "backend directory inside frontend directory"
    //** This is the path link to backend directory */

    var backendDirectory =
    /*"http://localhost:8888/LittleDanangServerSide"; //*/
    '/LittleDanangServerSide'; // export const backendDirectory = "http://localhost:8888/LittleDanangServerSide"; //;

    var backendURL = backendDirectory + "/addsession.php";
    var deleteOverdatedSessionURL = backendDirectory + '/deleteOverdatedSession.php';
    /***/
  },

  /***/
  "./src/app/api-routes/login-route.ts":
  /*!*******************************************!*\
    !*** ./src/app/api-routes/login-route.ts ***!
    \*******************************************/

  /*! exports provided: backendURL_login, backendURL_check_login */

  /***/
  function srcAppApiRoutesLoginRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "backendURL_login", function () {
      return backendURL_login;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "backendURL_check_login", function () {
      return backendURL_check_login;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _backendURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./backendURL */
    "./src/app/api-routes/backendURL.ts");

    var backendURL_login = _backendURL__WEBPACK_IMPORTED_MODULE_1__["backendDirectory"] + "/login/login.php";
    var backendURL_check_login = _backendURL__WEBPACK_IMPORTED_MODULE_1__["backendDirectory"] + "/login/checkLogin.php";
    /***/
  },

  /***/
  "./src/app/api-routes/routes.ts":
  /*!**************************************!*\
    !*** ./src/app/api-routes/routes.ts ***!
    \**************************************/

  /*! exports provided: route */

  /***/
  function srcAppApiRoutesRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "route", function () {
      return route;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_form_and_gallery_form_and_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/form-and-gallery/form-and-gallery.component */
    "./src/app/components/form-and-gallery/form-and-gallery.component.ts");
    /* harmony import */


    var _components_term_and_condition_term_and_condition_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components/term-and-condition/term-and-condition.component */
    "./src/app/components/term-and-condition/term-and-condition.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_visa_providing_visa_providing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/visa-providing/visa-providing.component */
    "./src/app/components/visa-providing/visa-providing.component.ts");
    /* harmony import */


    var _components_histories_histories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/histories/histories.component */
    "./src/app/components/histories/histories.component.ts");
    /* harmony import */


    var _components_admins_controlling_admins_controlling_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/admins-controlling/admins-controlling.component */
    "./src/app/components/admins-controlling/admins-controlling.component.ts");

    var route = [{
      path: '',
      component: _components_form_and_gallery_form_and_gallery_component__WEBPACK_IMPORTED_MODULE_1__["FormAndGalleryComponent"]
    }, {
      path: 'term-and-condition',
      component: _components_term_and_condition_term_and_condition_component__WEBPACK_IMPORTED_MODULE_2__["TermAndConditionComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'dashboard',
      component: _components_histories_histories_component__WEBPACK_IMPORTED_MODULE_5__["HistoriesComponent"]
    }, {
      path: 'visa',
      component: _components_visa_providing_visa_providing_component__WEBPACK_IMPORTED_MODULE_4__["VisaProvidingComponent"]
    }, {
      path: 'admin',
      component: _components_admins_controlling_admins_controlling_component__WEBPACK_IMPORTED_MODULE_6__["AdminsControllingComponent"]
    }, {
      path: 'history',
      component: _components_histories_histories_component__WEBPACK_IMPORTED_MODULE_5__["HistoriesComponent"]
    }, {
      path: 'form-and-gallery',
      redirectTo: '/',
      pathMatch: 'full'
    }];
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#dvImage {\r\n  /* min-height: 75vh; */\r\n  min-height: 100vh;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n#dvImage>div {\r\n  font-family: \"Kaushan script\";\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  padding-top: 40vh;\r\n  margin: auto 15vw;\r\n  color: rgb(255, 255, 255);\r\n  text-align: center;\r\n}\r\n\r\n#dvImage>div>h1 {\r\n  background-color: rgba(0, 0, 255, 0.555);\r\n  padding: 20px;\r\n}\r\n\r\n@media only screen and (min-width: 576px) {\r\n  #dvImage>div {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* #dvImage app-form-and-gallery {\r\n  position: absolute;\r\n  top: 7.5vh;\r\n  left: 19vw;\r\n  width: 60vw;\r\n  height: 500px;\r\n  background-color: rgba(0, 0, 255, 0.534);\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsYUFBYTtBQUNmOztBQUlBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTs7Ozs7OztHQU9HIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZHZJbWFnZSB7XHJcbiAgLyogbWluLWhlaWdodDogNzV2aDsgKi9cclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4jZHZJbWFnZT5kaXYge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkthdXNoYW4gc2NyaXB0XCI7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmctdG9wOiA0MHZoO1xyXG4gIG1hcmdpbjogYXV0byAxNXZ3O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZHZJbWFnZT5kaXY+aDEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjU1NSk7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgI2R2SW1hZ2U+ZGl2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAjZHZJbWFnZSBhcHAtZm9ybS1hbmQtZ2FsbGVyeSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNy41dmg7XHJcbiAgbGVmdDogMTl2dztcclxuICB3aWR0aDogNjB2dztcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjUzNCk7XHJcbn0gKi9cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_set_interval_bg_imgs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/set-interval-bg-imgs.service */
    "./src/app/services/set-interval-bg-imgs.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      // constructor(private setIntervalBgImg: SetIntervalBgImgsService) { }
      function AppComponent(setIntervalBgImg, route, router) {
        _classCallCheck(this, AppComponent);

        this.setIntervalBgImg = setIntervalBgImg;
        this.route = route;
        this.router = router;
        this.title = 'LittleDanang';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
          //Add 'implements OnInit' to the class.
          this.setIntervalBgImg.setIntervalBgImgs();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_set_interval_bg_imgs_service__WEBPACK_IMPORTED_MODULE_2__["SetIntervalBgImgsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_form_and_gallery_form_and_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/form-and-gallery/form-and-gallery.component */
    "./src/app/components/form-and-gallery/form-and-gallery.component.ts");
    /* harmony import */


    var _components_term_and_condition_term_and_condition_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/term-and-condition/term-and-condition.component */
    "./src/app/components/term-and-condition/term-and-condition.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _api_routes_api_route_api_route_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./api-routes/api-route/api-route.module */
    "./src/app/api-routes/api-route/api-route.module.ts");
    /* harmony import */


    var _components_gallery_modal_gallery_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/gallery-modal/gallery-modal.component */
    "./src/app/components/gallery-modal/gallery-modal.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_visa_providing_visa_providing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/visa-providing/visa-providing.component */
    "./src/app/components/visa-providing/visa-providing.component.ts");
    /* harmony import */


    var _components_admins_controlling_admins_controlling_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/admins-controlling/admins-controlling.component */
    "./src/app/components/admins-controlling/admins-controlling.component.ts");
    /* harmony import */


    var _components_histories_histories_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/histories/histories.component */
    "./src/app/components/histories/histories.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_form_and_gallery_form_and_gallery_component__WEBPACK_IMPORTED_MODULE_6__["FormAndGalleryComponent"], _components_term_and_condition_term_and_condition_component__WEBPACK_IMPORTED_MODULE_7__["TermAndConditionComponent"], _components_gallery_modal_gallery_modal_component__WEBPACK_IMPORTED_MODULE_10__["GalleryModalComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], _components_visa_providing_visa_providing_component__WEBPACK_IMPORTED_MODULE_13__["VisaProvidingComponent"], _components_admins_controlling_admins_controlling_component__WEBPACK_IMPORTED_MODULE_14__["AdminsControllingComponent"], _components_histories_histories_component__WEBPACK_IMPORTED_MODULE_15__["HistoriesComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _api_routes_api_route_api_route_module__WEBPACK_IMPORTED_MODULE_9__["ApiRouteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/admins-controlling/admins-controlling.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/components/admins-controlling/admins-controlling.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminsControllingAdminsControllingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5zLWNvbnRyb2xsaW5nL2FkbWlucy1jb250cm9sbGluZy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/admins-controlling/admins-controlling.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/admins-controlling/admins-controlling.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AdminsControllingComponent */

  /***/
  function srcAppComponentsAdminsControllingAdminsControllingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminsControllingComponent", function () {
      return AdminsControllingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminsControllingComponent =
    /*#__PURE__*/
    function () {
      function AdminsControllingComponent() {
        _classCallCheck(this, AdminsControllingComponent);
      }

      _createClass(AdminsControllingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminsControllingComponent;
    }();

    AdminsControllingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admins-controlling',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admins-controlling.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admins-controlling/admins-controlling.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admins-controlling.component.css */
      "./src/app/components/admins-controlling/admins-controlling.component.css")).default]
    })], AdminsControllingComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* SET POSITION OF CLASS .dashboard */\r\n.dashboard {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 5vw;\r\n  width: 90%;\r\n}\r\n/* SET VISA_PROVIDER FULL WIDTH */\r\n#visas_provider {\r\n  display: block;\r\n}\r\n#admins_controller,\r\n#visas_provider,\r\n#histories_manager {\r\n  height: 48vh;\r\n  margin: 1vh 1%;\r\n  background-color: #00ffff6e;\r\n  border: 3px solid red;\r\n  font-weight: 800;\r\n  font-size: 1.5em;\r\n  /* width: 200px; */\r\n  overflow: hidden;\r\n}\r\n#visas_provider {\r\n  background-color: #a6ff006c;\r\n}\r\n#admins_controller:hover,\r\n#histories_manager:hover {\r\n  background-color: #00ffffb6;\r\n}\r\n#visas_provider:hover {\r\n  background-color: #a6ff00af;\r\n}\r\n#admins_controller span,\r\n#histories_manager span {\r\n  display: inline-block;\r\n  white-space: normal;\r\n  margin-top: 35%;\r\n}\r\n#visas_provider span {\r\n  position: relative;\r\n  top: 40%;\r\n}\r\n@media (min-width: 768px) {\r\n\r\n  #admins_controller,\r\n  #histories_manager {\r\n    width: 48%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDO0FBQ3JDO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsY0FBYztBQUNoQjtBQUVBOzs7RUFHRSxZQUFZO0VBQ1osY0FBYztFQUNkLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFFQTs7RUFFRSwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjtBQUVBOztFQUVFOztJQUVFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTRVQgUE9TSVRJT04gT0YgQ0xBU1MgLmRhc2hib2FyZCAqL1xyXG4uZGFzaGJvYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDV2dztcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4vKiBTRVQgVklTQV9QUk9WSURFUiBGVUxMIFdJRFRIICovXHJcbiN2aXNhc19wcm92aWRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNhZG1pbnNfY29udHJvbGxlcixcclxuI3Zpc2FzX3Byb3ZpZGVyLFxyXG4jaGlzdG9yaWVzX21hbmFnZXIge1xyXG4gIGhlaWdodDogNDh2aDtcclxuICBtYXJnaW46IDF2aCAxJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmZmNmU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICAvKiB3aWR0aDogMjAwcHg7ICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI3Zpc2FzX3Byb3ZpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZmZjAwNmM7XHJcbn1cclxuXHJcbiNhZG1pbnNfY29udHJvbGxlcjpob3ZlcixcclxuI2hpc3Rvcmllc19tYW5hZ2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmZmYjY7XHJcbn1cclxuXHJcbiN2aXNhc19wcm92aWRlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E2ZmYwMGFmO1xyXG59XHJcblxyXG4jYWRtaW5zX2NvbnRyb2xsZXIgc3BhbixcclxuI2hpc3Rvcmllc19tYW5hZ2VyIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIG1hcmdpbi10b3A6IDM1JTtcclxufVxyXG5cclxuI3Zpc2FzX3Byb3ZpZGVyIHNwYW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDQwJTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICNhZG1pbnNfY29udHJvbGxlcixcclxuICAjaGlzdG9yaWVzX21hbmFnZXIge1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/components/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/components/form-and-gallery/form-and-gallery.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/components/form-and-gallery/form-and-gallery.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFormAndGalleryFormAndGalleryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".info_box {\r\n  background: transparent;\r\n  margin-bottom: 45px;\r\n  position: absolute;\r\n  top: 1em;\r\n}\r\n\r\n.info_box .container {\r\n  margin: 0;\r\n}\r\n\r\n.info_box .container .login_link{\r\n  font-family: 'Kaushan script';\r\n  font-weight: 900;\r\n  color: red;\r\n  word-spacing: 0.2em;\r\n  position: absolute;\r\n  left: 70vw;\r\n}\r\n\r\n/* .info_box .container .login_link a {\r\n  background: #2e3f61c9;\r\n  display: inline-block;\r\n} */\r\n\r\n.info_box_container {\r\n  /* position: absolute; */\r\n  width: calc(100% + 117px);\r\n  left: 2.5vw;\r\n  height: auto;\r\n  background: #2e3f6183;\r\n  margin: auto 3vw;\r\n  /* top: 2vh; */\r\n  width: 88.5vw;\r\n  box-shadow: 0px 3px 57px rgba(0, 0, 0, 0.35);\r\n  z-index: 1;\r\n  padding-left: 83px;\r\n  padding-right: 66px;\r\n  padding-top: 0px;\r\n  padding-bottom: 45px;\r\n}\r\n\r\n.info_form_container {\r\n  width: 100%;\r\n}\r\n\r\n.info_form_container h3,\r\n.info_form_container h6,\r\n.info_form_container a {\r\n  font-family: \"Kaushan script\";\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\n.info_form_container a {\r\n  text-decoration: underline;\r\n  color: red;\r\n}\r\n\r\n.info_form_container h3 {\r\n  display: block;\r\n}\r\n\r\n.info_form {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.info_form>div {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.info_form_list {\r\n  width: calc(100% - 172px);\r\n  height: 100%;\r\n  padding: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.info_form_list>li {\r\n  position: relative;\r\n  width: 49%;\r\n  height: 55px;\r\n  cursor: pointer;\r\n  padding-left: 28px;\r\n  padding-right: 16px;\r\n  background: #FFFFFF;\r\n  margin: 12px 0.5% 0 0.5%;\r\n  list-style: none;\r\n}\r\n\r\n.info_form_list>li>span {\r\n  width: 100%;\r\n}\r\n\r\n.info_form_list>li>ul>li>i,\r\n.info_form_list #type_of_visa>i {\r\n  color: yellow;\r\n}\r\n\r\n.info_form_list .error_line {\r\n  max-height: 1em;\r\n  color: rgb(224, 180, 0);\r\n  font-weight: 600;\r\n  font-size: 0.75em;\r\n  width: 100%;\r\n  background-color: transparent;\r\n  margin: 0 auto;\r\n  border-right: none;\r\n  padding-left: 3px;\r\n  padding-right: 0;\r\n}\r\n\r\n.info_form_list>.error_line.only_for_mobile {\r\n  display: none;\r\n}\r\n\r\n.info_form_list .error_line>div {\r\n  width: 49%;\r\n  background-color: rgba(44, 55, 58, 0.795);\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  position: relative;\r\n  /* padding-right: 1.6% */\r\n}\r\n\r\n.info_form_list .error_line>div:first-child {\r\n  left: 0;\r\n}\r\n\r\n/* .info_form_list .error_line>div:last-child {\r\n  left: 50%;\r\n} */\r\n\r\n.info_form_list .error_line>div:first-child {\r\n  margin-right: 1.5%\r\n}\r\n\r\n/* .info_form_list>li abbr:hover::after {\r\n  color: red;\r\n  content: attr(title);\r\n} */\r\n\r\n.info_form_list>.info_dropdown:not(:last-child) {\r\n  border-right: solid 2px #d1d1d1;\r\n}\r\n\r\n.info_form_list>.info_dropdown::after {\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 4px;\r\n  background: #da8661;\r\n  content: '';\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 200ms ease;\r\n}\r\n\r\n.info_form_list>li:hover::after {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.info_form_list>li>input,\r\n.info_form_list>li>abbr>input {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.info_form_list>li span {\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  color: #6b6b6b;\r\n}\r\n\r\n.info_form_list>li i {\r\n  font-size: 10px;\r\n  font-weight: 500;\r\n  color: #a3a3a3;\r\n}\r\n\r\n.info_form_list>li>ul {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 100%;\r\n  width: 100%;\r\n  background: #FFFFFF;\r\n  padding-left: 28px;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n}\r\n\r\n.info_form_list>li.active>ul {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.info_form_list>li>ul>li:not(:last-of-type) {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.info_form_list>li>ul>li {\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  color: #a3a3a3;\r\n  transition: all 200ms ease;\r\n}\r\n\r\n.info_form_list>li>ul>li:hover {\r\n  color: #6b6b6b;\r\n}\r\n\r\n.info_button {\r\n  width: 172px;\r\n  height: 73px;\r\n  background: #637496;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: #FFFFFF;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n  margin-top: 0px;\r\n}\r\n\r\n/*RESPONSIVE*/\r\n\r\n/* CSS Document */\r\n\r\n/******************************\r\n\r\n[Table of Contents]\r\n\r\n1. 1600px\r\n2. 1440px\r\n3. 1280px\r\n4. 1199px\r\n5. 1024px\r\n6. 991px\r\n7. 959px\r\n8. 880px\r\n9. 768px\r\n10. 767px\r\n11. 539px\r\n12. 479px\r\n13. 400px\r\n\r\n******************************/\r\n\r\n/************\r\n1. 1600px\r\n************/\r\n\r\n@media only screen and (max-width: 1600px) {}\r\n\r\n/************\r\n2. 1440px\r\n************/\r\n\r\n@media only screen and (max-width: 1440px) {}\r\n\r\n/************\r\n3. 1380px\r\n************/\r\n\r\n@media only screen and (max-width: 1380px) {}\r\n\r\n/************\r\n3. 1280px\r\n************/\r\n\r\n@media only screen and (max-width: 1280px) {}\r\n\r\n/************\r\n4. 1199px\r\n************/\r\n\r\n@media only screen and (max-width: 1199px) {\r\n  .info_box_container {\r\n    padding-left: 45px;\r\n    padding-right: 40px;\r\n  }\r\n\r\n}\r\n\r\n/************\r\n4. 1100px\r\n************/\r\n\r\n@media only screen and (max-width: 1100px) {}\r\n\r\n/************\r\n5. 1024px\r\n************/\r\n\r\n@media only screen and (max-width: 1024px) {}\r\n\r\n/************\r\n6. 991px\r\n************/\r\n\r\n@media only screen and (max-width: 991px) {\r\n\r\n  .info_form_list {\r\n    width: 100%;\r\n  }\r\n\r\n  .info_form_list>li {\r\n    /* width: 50%; */\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .info_form_list>.info_dropdown:not(:last-child) {\r\n    border-right: none;\r\n  }\r\n\r\n  .info_form_list>.info_dropdown:nth-child(odd) {\r\n    border-right: solid 2px #d1d1d1;\r\n  }\r\n\r\n  .info_form_list>.error_line {\r\n    border-right: none;\r\n  }\r\n\r\n}\r\n\r\n/************\r\n7. 959px\r\n************/\r\n\r\n@media only screen and (max-width: 959px) {\r\n  .info_form_list>.error_line {\r\n    margin-bottom: 0.4em;\r\n    line-height: 1.2em;\r\n  }\r\n\r\n  /* .info_form_list>li {\r\n    margin-top: 0;\r\n  } */\r\n}\r\n\r\n/************\r\n8. 880px\r\n************/\r\n\r\n@media only screen and (max-width: 880px) {}\r\n\r\n/************\r\n9. 768px\r\n************/\r\n\r\n@media only screen and (max-width: 768px) {}\r\n\r\n/************\r\n10. 767px\r\n************/\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .info_box_container {\r\n    width: calc(100% + 117px);\r\n    position: absolute;\r\n    left: -69px;\r\n    height: auto;\r\n    background: #2e3f6183;\r\n    margin: auto 3vw;\r\n    width: 88.5vw;\r\n    box-shadow: 0px 3px 57px rgba(0, 0, 0, 0.35);\r\n    z-index: 1;\r\n    padding-left: 83px;\r\n    padding-right: 66px;\r\n    padding-top: 0;\r\n    padding-bottom: 45px;\r\n  }\r\n}\r\n\r\n/************\r\n11. 575px\r\n************/\r\n\r\n@media only screen and (max-width: 575px) {\r\n\r\n  .info_box_container {\r\n    /* width: calc(100% - 30px); */\r\n    left: 2.5vw;\r\n    top: 82vh;\r\n    /* padding-top: 50px; */\r\n    background-color: #2e3f61;\r\n  }\r\n\r\n  .info_form_container h3 {\r\n    display: none;\r\n  }\r\n\r\n  .info_form_list>li {\r\n    width: 100%;\r\n    height: 53px;\r\n  }\r\n\r\n  .info_form_list .error_line>div {\r\n    width: 100%;\r\n  }\r\n\r\n  .info_form_list>.error_line>.only_for_lap {\r\n    display: none;\r\n  }\r\n\r\n  .info_form_list>.error_line.only_for_mobile {\r\n    display: block;\r\n    background-color: rgba(44, 55, 58, 0.795);\r\n  }\r\n\r\n  .info_form_list>li:nth-child(odd) {\r\n    border-right: none;\r\n  }\r\n\r\n  .info_button {\r\n    width: 152px;\r\n    height: 53px;\r\n    font-size: 12px;\r\n    margin-top: 6px;\r\n  }\r\n}\r\n\r\n/************\r\n11. 539px\r\n************/\r\n\r\n@media only screen and (max-width: 539px) {}\r\n\r\n/************\r\n12. 480px\r\n************/\r\n\r\n@media only screen and (max-width: 480px) {}\r\n\r\n/************\r\n13. 479px\r\n************/\r\n\r\n@media only screen and (max-width: 479px) {}\r\n\r\n/************\r\n14. 400px\r\n************/\r\n\r\n@media only screen and (max-width: 400px) {}\r\n\r\n/* LOGIN AS ADMIN BUTTON */\r\n\r\na.btn {\r\n  position: fixed;\r\n  bottom: 0.25em;\r\n  right: 0.5em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWFuZC1nYWxsZXJ5L2Zvcm0tYW5kLWdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOzs7R0FHRzs7QUFFSDtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlDQUF5QztFQUN6QyxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7O0dBRUc7O0FBR0g7RUFDRTtBQUNGOztBQUdBOzs7R0FHRzs7QUFFSDtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFLViwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUtkLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUEsYUFBYTs7QUFDYixpQkFBaUI7O0FBRWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBa0I4Qjs7QUFFOUI7O1lBRVk7O0FBRVosNENBQTRDOztBQUU1Qzs7WUFFWTs7QUFFWiw0Q0FBNEM7O0FBRTVDOztZQUVZOztBQUVaLDRDQUE0Qzs7QUFFNUM7O1lBRVk7O0FBRVosNENBQTRDOztBQUU1Qzs7WUFFWTs7QUFFWjtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7QUFFRjs7QUFFQTs7WUFFWTs7QUFFWiw0Q0FBNEM7O0FBRTVDOztZQUVZOztBQUVaLDRDQUE0Qzs7QUFFNUM7O1lBRVk7O0FBRVo7O0VBRUU7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVGOztBQUVBOztZQUVZOztBQUVaO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0VBQ3BCOztFQUVBOztLQUVHO0FBQ0w7O0FBRUE7O1lBRVk7O0FBRVosMkNBQTJDOztBQUUzQzs7WUFFWTs7QUFFWiwyQ0FBMkM7O0FBRTNDOztZQUVZOztBQUVaO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQTs7WUFFWTs7QUFFWjs7RUFFRTtJQUNFLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsU0FBUztJQUNULHVCQUF1QjtJQUN2Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztJQUNkLHlDQUF5QztFQUMzQzs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7RUFDakI7QUFDRjs7QUFFQTs7WUFFWTs7QUFFWiwyQ0FBMkM7O0FBRTNDOztZQUVZOztBQUVaLDJDQUEyQzs7QUFFM0M7O1lBRVk7O0FBRVosMkNBQTJDOztBQUUzQzs7WUFFWTs7QUFFWiwyQ0FBMkM7O0FBRzNDLDBCQUEwQjs7QUFDMUI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1hbmQtZ2FsbGVyeS9mb3JtLWFuZC1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb19ib3gge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMWVtO1xyXG59XHJcblxyXG4uaW5mb19ib3ggLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaW5mb19ib3ggLmNvbnRhaW5lciAubG9naW5fbGlua3tcclxuICBmb250LWZhbWlseTogJ0thdXNoYW4gc2NyaXB0JztcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgd29yZC1zcGFjaW5nOiAwLjJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNzB2dztcclxufVxyXG5cclxuLyogLmluZm9fYm94IC5jb250YWluZXIgLmxvZ2luX2xpbmsgYSB7XHJcbiAgYmFja2dyb3VuZDogIzJlM2Y2MWM5O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSAqL1xyXG5cclxuLmluZm9fYm94X2NvbnRhaW5lciB7XHJcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAxMTdweCk7XHJcbiAgbGVmdDogMi41dnc7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICMyZTNmNjE4MztcclxuICBtYXJnaW46IGF1dG8gM3Z3O1xyXG4gIC8qIHRvcDogMnZoOyAqL1xyXG4gIHdpZHRoOiA4OC41dnc7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1N3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nLWxlZnQ6IDgzcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNjZweDtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xyXG59XHJcblxyXG4uaW5mb19mb3JtX2NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fY29udGFpbmVyIGgzLFxyXG4uaW5mb19mb3JtX2NvbnRhaW5lciBoNixcclxuLmluZm9fZm9ybV9jb250YWluZXIgYSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiS2F1c2hhbiBzY3JpcHRcIjtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4uaW5mb19mb3JtX2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaW5mb19mb3JtX2NvbnRhaW5lciBoMyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5mb19mb3JtPmRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaW5mb19mb3JtX2xpc3Qge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNzJweCk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmluZm9fZm9ybV9saXN0PmxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQ5JTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMjhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgbWFyZ2luOiAxMnB4IDAuNSUgMCAwLjUlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fbGlzdD5saT5zcGFuIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmluZm9fZm9ybV9saXN0PmxpPnVsPmxpPmksXHJcbi5pbmZvX2Zvcm1fbGlzdCAjdHlwZV9vZl92aXNhPmkge1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fbGlzdCAuZXJyb3JfbGluZSB7XHJcbiAgbWF4LWhlaWdodDogMWVtO1xyXG4gIGNvbG9yOiByZ2IoMjI0LCAxODAsIDApO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fbGlzdD4uZXJyb3JfbGluZS5vbmx5X2Zvcl9tb2JpbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fbGlzdCAuZXJyb3JfbGluZT5kaXYge1xyXG4gIHdpZHRoOiA0OSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NCwgNTUsIDU4LCAwLjc5NSk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIHBhZGRpbmctcmlnaHQ6IDEuNiUgKi9cclxufVxyXG5cclxuLmluZm9fZm9ybV9saXN0IC5lcnJvcl9saW5lPmRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLyogLmluZm9fZm9ybV9saXN0IC5lcnJvcl9saW5lPmRpdjpsYXN0LWNoaWxkIHtcclxuICBsZWZ0OiA1MCU7XHJcbn0gKi9cclxuXHJcblxyXG4uaW5mb19mb3JtX2xpc3QgLmVycm9yX2xpbmU+ZGl2OmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNSVcclxufVxyXG5cclxuXHJcbi8qIC5pbmZvX2Zvcm1fbGlzdD5saSBhYmJyOmhvdmVyOjphZnRlciB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBjb250ZW50OiBhdHRyKHRpdGxlKTtcclxufSAqL1xyXG5cclxuLmluZm9fZm9ybV9saXN0Pi5pbmZvX2Ryb3Bkb3duOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4ICNkMWQxZDE7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fbGlzdD4uaW5mb19kcm9wZG93bjo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZGE4NjYxO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fbGlzdD5saTpob3Zlcjo6YWZ0ZXIge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmluZm9fZm9ybV9saXN0PmxpPmlucHV0LFxyXG4uaW5mb19mb3JtX2xpc3Q+bGk+YWJicj5pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uaW5mb19mb3JtX2xpc3Q+bGkgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM2YjZiNmI7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fbGlzdD5saSBpIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogI2EzYTNhMztcclxufVxyXG5cclxuLmluZm9fZm9ybV9saXN0PmxpPnVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmluZm9fZm9ybV9saXN0PmxpLmFjdGl2ZT51bCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaW5mb19mb3JtX2xpc3Q+bGk+dWw+bGk6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaW5mb19mb3JtX2xpc3Q+bGk+dWw+bGkge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjYTNhM2EzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5pbmZvX2Zvcm1fbGlzdD5saT51bD5saTpob3ZlciB7XHJcbiAgY29sb3I6ICM2YjZiNmI7XHJcbn1cclxuXHJcbi5pbmZvX2J1dHRvbiB7XHJcbiAgd2lkdGg6IDE3MnB4O1xyXG4gIGhlaWdodDogNzNweDtcclxuICBiYWNrZ3JvdW5kOiAjNjM3NDk2O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLypSRVNQT05TSVZFKi9cclxuLyogQ1NTIERvY3VtZW50ICovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5bVGFibGUgb2YgQ29udGVudHNdXHJcblxyXG4xLiAxNjAwcHhcclxuMi4gMTQ0MHB4XHJcbjMuIDEyODBweFxyXG40LiAxMTk5cHhcclxuNS4gMTAyNHB4XHJcbjYuIDk5MXB4XHJcbjcuIDk1OXB4XHJcbjguIDg4MHB4XHJcbjkuIDc2OHB4XHJcbjEwLiA3NjdweFxyXG4xMS4gNTM5cHhcclxuMTIuIDQ3OXB4XHJcbjEzLiA0MDBweFxyXG5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKlxyXG4xLiAxNjAwcHhcclxuKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHt9XHJcblxyXG4vKioqKioqKioqKioqXHJcbjIuIDE0NDBweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge31cclxuXHJcbi8qKioqKioqKioqKipcclxuMy4gMTM4MHB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM4MHB4KSB7fVxyXG5cclxuLyoqKioqKioqKioqKlxyXG4zLiAxMjgwcHhcclxuKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHt9XHJcblxyXG4vKioqKioqKioqKioqXHJcbjQuIDExOTlweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC5pbmZvX2JveF9jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKioqKioqKioqKioqXHJcbjQuIDExMDBweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge31cclxuXHJcbi8qKioqKioqKioqKipcclxuNS4gMTAyNHB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7fVxyXG5cclxuLyoqKioqKioqKioqKlxyXG42LiA5OTFweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblxyXG4gIC5pbmZvX2Zvcm1fbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5pbmZvX2Zvcm1fbGlzdD5saSB7XHJcbiAgICAvKiB3aWR0aDogNTAlOyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmluZm9fZm9ybV9saXN0Pi5pbmZvX2Ryb3Bkb3duOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmluZm9fZm9ybV9saXN0Pi5pbmZvX2Ryb3Bkb3duOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgMnB4ICNkMWQxZDE7XHJcbiAgfVxyXG5cclxuICAuaW5mb19mb3JtX2xpc3Q+LmVycm9yX2xpbmUge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKioqKioqKioqKipcclxuNy4gOTU5cHhcclxuKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gIC5pbmZvX2Zvcm1fbGlzdD4uZXJyb3JfbGluZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICB9XHJcblxyXG4gIC8qIC5pbmZvX2Zvcm1fbGlzdD5saSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH0gKi9cclxufVxyXG5cclxuLyoqKioqKioqKioqKlxyXG44LiA4ODBweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7fVxyXG5cclxuLyoqKioqKioqKioqKlxyXG45LiA3NjhweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7fVxyXG5cclxuLyoqKioqKioqKioqKlxyXG4xMC4gNzY3cHhcclxuKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5pbmZvX2JveF9jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDExN3B4KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC02OXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogIzJlM2Y2MTgzO1xyXG4gICAgbWFyZ2luOiBhdXRvIDN2dztcclxuICAgIHdpZHRoOiA4OC41dnc7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDU3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDgzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2NnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDVweDtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKipcclxuMTEuIDU3NXB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuXHJcbiAgLmluZm9fYm94X2NvbnRhaW5lciB7XHJcbiAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7ICovXHJcbiAgICBsZWZ0OiAyLjV2dztcclxuICAgIHRvcDogODJ2aDtcclxuICAgIC8qIHBhZGRpbmctdG9wOiA1MHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlM2Y2MTtcclxuICB9XHJcblxyXG4gIC5pbmZvX2Zvcm1fY29udGFpbmVyIGgzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaW5mb19mb3JtX2xpc3Q+bGkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUzcHg7XHJcbiAgfVxyXG5cclxuICAuaW5mb19mb3JtX2xpc3QgLmVycm9yX2xpbmU+ZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmluZm9fZm9ybV9saXN0Pi5lcnJvcl9saW5lPi5vbmx5X2Zvcl9sYXAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5pbmZvX2Zvcm1fbGlzdD4uZXJyb3JfbGluZS5vbmx5X2Zvcl9tb2JpbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ0LCA1NSwgNTgsIDAuNzk1KTtcclxuICB9XHJcblxyXG4gIC5pbmZvX2Zvcm1fbGlzdD5saTpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaW5mb19idXR0b24ge1xyXG4gICAgd2lkdGg6IDE1MnB4O1xyXG4gICAgaGVpZ2h0OiA1M3B4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKlxyXG4xMS4gNTM5cHhcclxuKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzlweCkge31cclxuXHJcbi8qKioqKioqKioqKipcclxuMTIuIDQ4MHB4XHJcbioqKioqKioqKioqKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHt9XHJcblxyXG4vKioqKioqKioqKioqXHJcbjEzLiA0NzlweFxyXG4qKioqKioqKioqKiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7fVxyXG5cclxuLyoqKioqKioqKioqKlxyXG4xNC4gNDAwcHhcclxuKioqKioqKioqKioqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge31cclxuXHJcblxyXG4vKiBMT0dJTiBBUyBBRE1JTiBCVVRUT04gKi9cclxuYS5idG4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDAuMjVlbTtcclxuICByaWdodDogMC41ZW07XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/form-and-gallery/form-and-gallery.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/form-and-gallery/form-and-gallery.component.ts ***!
    \***************************************************************************/

  /*! exports provided: FormAndGalleryComponent */

  /***/
  function srcAppComponentsFormAndGalleryFormAndGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormAndGalleryComponent", function () {
      return FormAndGalleryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_initinfo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/initinfo.service */
    "./src/app/services/initinfo.service.ts");
    /* harmony import */


    var _services_backend_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/backend-apis.service */
    "./src/app/services/backend-apis.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FormAndGalleryComponent =
    /*#__PURE__*/
    function () {
      function FormAndGalleryComponent(initinfo, router, backend_api) {
        _classCallCheck(this, FormAndGalleryComponent);

        this.initinfo = initinfo;
        this.router = router;
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

      _createClass(FormAndGalleryComponent, [{
        key: "ngDoCheck",
        value: function ngDoCheck() {
          //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
          //Add 'implements DoCheck' to the class.
          this.view_width = window.innerWidth;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initinfo.initinfo();
          this.backend_api.deleteOverdatedSession();
          $(function () {
            $('li[data-toggle="tooltip"]').tooltip();
          }); // console.log(window.location.host);
        }
      }, {
        key: "submittingHandle",
        value: function submittingHandle() {
          // console.log(document.getElementById("file").files);
          //** get value of each field. */
          var agreeTerm = document.getElementById("agreeTerm").innerHTML,
              type_of_visa = document.getElementById("type_of_visa").innerText.replace(/[\r\n]+/gm, ', price: '),
              // passport_code = (<HTMLInputElement>document.getElementById("numOfIDs")).value,
          date_of_arrivals = document.getElementById("dateOfArrivals").value,
              airport = document.getElementById("airport").innerHTML,
              email = document.getElementById("email").value,
              passport_img_field = document.getElementById("passport_img_field").innerHTML,
              payment_feedback = document.getElementById("payment_feedback").innerHTML; // console.log(type_of_visa);
          //** render value (Object<boolean>) for invalidForm */

          if (agreeTerm != "Agree") {
            this.invalidForm.agreeTerm = true;
          } else {
            this.invalidForm.agreeTerm = false;
          }

          if (type_of_visa == "Type of visa: *") {
            this.invalidForm.type_of_visa = true;
          } else {
            this.invalidForm.type_of_visa = false;
          }

          if (date_of_arrivals.length == 0 || new Date(date_of_arrivals).getTime() <= new Date().getTime()) {
            this.invalidForm.date_of_arrivals = true;
          } else {
            this.invalidForm.date_of_arrivals = false;
          }

          if (airport == "Arrival airport: *") {
            this.invalidForm.airport = true;
          } else {
            this.invalidForm.airport = false;
          }

          if (email.length == 0 || !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
            this.invalidForm.email = true;
          } else {
            this.invalidForm.email = false;
          }

          if (passport_img_field != "file choosen") {
            this.invalidForm.passport_img_field = true;
          } else {
            this.invalidForm.passport_img_field = false;
          }

          if (payment_feedback == "Ready for payment? *") {
            this.invalidForm.payment_feedback = true;
          } else {
            this.invalidForm.payment_feedback = false;
          } // console.log(date_of_arrivals.length);
          //**  render value (boolean) if the form is submitable*/


          var submitable = true;

          for (var attr in this.invalidForm) {
            // console.log(attr);
            if (this.invalidForm[attr]) {
              submitable = false;
            }
          } //** if the form is submitable call service backend_apis */


          if (submitable) {
            // if (true) { //delete this line when complete
            var form_datas = new FormData();
            form_datas.append("type_of_visa", type_of_visa); // form_datas.append("passport_code", passport_code);

            form_datas.append("date_of_arrivals", date_of_arrivals);
            form_datas.append("airport", airport);
            form_datas.append("email", email);
            form_datas.append("passport_img", document.getElementById("file").files[0]);
            form_datas.append("payment_feedback", payment_feedback);
            form_datas.append("method_to_DB", "create"); // console.log(form_datas.get("passport_img"));

            this.backend_api.add(form_datas).then(function (resolve) {
              alert("Your infos were sent ");
            });
          }
        }
      }, {
        key: "goToLogin",
        value: function goToLogin(event) {
          event.stopPropagation();
          this.router.navigate(["login"]);
        }
      }]);

      return FormAndGalleryComponent;
    }();

    FormAndGalleryComponent.ctorParameters = function () {
      return [{
        type: _services_initinfo_service__WEBPACK_IMPORTED_MODULE_2__["InitinfoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_backend_apis_service__WEBPACK_IMPORTED_MODULE_3__["BackendApisService"]
      }];
    };

    FormAndGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-and-gallery',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-and-gallery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-and-gallery/form-and-gallery.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-and-gallery.component.css */
      "./src/app/components/form-and-gallery/form-and-gallery.component.css")).default]
    })], FormAndGalleryComponent);
    /***/
  },

  /***/
  "./src/app/components/gallery-modal/gallery-modal.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/gallery-modal/gallery-modal.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGalleryModalGalleryModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS1tb2RhbC9nYWxsZXJ5LW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/gallery-modal/gallery-modal.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/gallery-modal/gallery-modal.component.ts ***!
    \*********************************************************************/

  /*! exports provided: GalleryModalComponent */

  /***/
  function srcAppComponentsGalleryModalGalleryModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryModalComponent", function () {
      return GalleryModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GalleryModalComponent =
    /*#__PURE__*/
    function () {
      function GalleryModalComponent() {
        _classCallCheck(this, GalleryModalComponent);
      }

      _createClass(GalleryModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalleryModalComponent;
    }();

    GalleryModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gallery-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gallery-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gallery-modal/gallery-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gallery-modal.component.css */
      "./src/app/components/gallery-modal/gallery-modal.component.css")).default]
    })], GalleryModalComponent);
    /***/
  },

  /***/
  "./src/app/components/histories/histories.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/histories/histories.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHistoriesHistoriesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".history {\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  position: absolute;\r\n  top: 0;\r\n  background-color: rgb(0, 204, 255);\r\n  text-align: center;\r\n}\r\n\r\n/* .history input[type='text'] {\r\n  width: 80vw;\r\n  line-height: 3em;\r\n  margin: 1em auto;\r\n} */\r\n\r\n.history input[type=\"radio\"] {\r\n  margin-left: 0.5em;\r\n}\r\n\r\n#myInput {\r\n  width: 80%;\r\n  /* increase-width */\r\n  font-size: 16px;\r\n  /* Increase font-size */\r\n  padding: 12px 20px 12px 40px;\r\n  /* Add some padding */\r\n  border: 1px solid #ddd;\r\n  /* Add a grey border */\r\n  margin-bottom: 1em;\r\n  /* Add some space below the input */\r\n}\r\n\r\n#myTable {\r\n  border-collapse: collapse;\r\n  /* Collapse borders */\r\n  width: 100%;\r\n  /* Full-width */\r\n  border: 1px solid #ddd;\r\n  /* Add a grey border */\r\n  font-size: 18px;\r\n  /* Increase font-size */\r\n  margin-bottom: 0.75em;\r\n  /* margin distance bottom */\r\n}\r\n\r\n#myTable th,\r\n#myTable td {\r\n  text-align: left;\r\n  /* Left-align text */\r\n  padding: 12px;\r\n  /* Add padding */\r\n  overflow: hidden;\r\n  word-break: break-word;\r\n}\r\n\r\n#myTable tr {\r\n  /* Add a bottom border to all table rows */\r\n  border-bottom: 1px solid #ddd;\r\n  font-size: 16px;\r\n}\r\n\r\n#myTable tr.header,\r\n#myTable tr:hover {\r\n  /* Add a grey background color to the table header and on hover */\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oaXN0b3JpZXMvaGlzdG9yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTs7OztHQUlHOztBQUVIO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGlFQUFpRTtFQUNqRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hpc3Rvcmllcy9oaXN0b3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXN0b3J5IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjA0LCAyNTUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogLmhpc3RvcnkgaW5wdXRbdHlwZT0ndGV4dCddIHtcclxuICB3aWR0aDogODB2dztcclxuICBsaW5lLWhlaWdodDogM2VtO1xyXG4gIG1hcmdpbjogMWVtIGF1dG87XHJcbn0gKi9cclxuXHJcbi5oaXN0b3J5IGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG59XHJcblxyXG4jbXlJbnB1dCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICAvKiBpbmNyZWFzZS13aWR0aCAqL1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICAvKiBJbmNyZWFzZSBmb250LXNpemUgKi9cclxuICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCA0MHB4O1xyXG4gIC8qIEFkZCBzb21lIHBhZGRpbmcgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIC8qIEFkZCBhIGdyZXkgYm9yZGVyICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIC8qIEFkZCBzb21lIHNwYWNlIGJlbG93IHRoZSBpbnB1dCAqL1xyXG59XHJcblxyXG4jbXlUYWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAvKiBDb2xsYXBzZSBib3JkZXJzICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogRnVsbC13aWR0aCAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgLyogQWRkIGEgZ3JleSBib3JkZXIgKi9cclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgLyogSW5jcmVhc2UgZm9udC1zaXplICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xyXG4gIC8qIG1hcmdpbiBkaXN0YW5jZSBib3R0b20gKi9cclxufVxyXG5cclxuI215VGFibGUgdGgsXHJcbiNteVRhYmxlIHRkIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC8qIExlZnQtYWxpZ24gdGV4dCAqL1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgLyogQWRkIHBhZGRpbmcgKi9cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbiNteVRhYmxlIHRyIHtcclxuICAvKiBBZGQgYSBib3R0b20gYm9yZGVyIHRvIGFsbCB0YWJsZSByb3dzICovXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4jbXlUYWJsZSB0ci5oZWFkZXIsXHJcbiNteVRhYmxlIHRyOmhvdmVyIHtcclxuICAvKiBBZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRhYmxlIGhlYWRlciBhbmQgb24gaG92ZXIgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/histories/histories.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/histories/histories.component.ts ***!
    \*************************************************************/

  /*! exports provided: HistoriesComponent */

  /***/
  function srcAppComponentsHistoriesHistoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoriesComponent", function () {
      return HistoriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_lookup_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/lookup-session.service */
    "./src/app/services/lookup-session.service.ts");
    /* harmony import */


    var _api_routes_backendURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api-routes/backendURL */
    "./src/app/api-routes/backendURL.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_api_routes_login_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api-routes/login-route */
    "./src/app/api-routes/login-route.ts");

    var HistoriesComponent =
    /*#__PURE__*/
    function () {
      function HistoriesComponent(lookup, router) {
        _classCallCheck(this, HistoriesComponent);

        this.lookup = lookup;
        this.router = router;
      }

      _createClass(HistoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var check_login_formdatas, officer_code_true;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.backendDirectory = _api_routes_backendURL__WEBPACK_IMPORTED_MODULE_3__["backendDirectory"]; // To remove session in backend about admin login informations

                    window.onbeforeunload = function (ev) {
                      _this.removeSessionOnServer();
                    }; // To check if admin login valid or invalid and the behaviors after that


                    check_login_formdatas = new FormData(), officer_code_true = false;
                    check_login_formdatas.append('official_code', localStorage.getItem('official_code'));
                    check_login_formdatas.append('password', localStorage.getItem('password'));
                    check_login_formdatas.append('loading', 'loading'); // console.log(check_login_formdatas.get('password'));

                    _context.next = 8;
                    return fetch(src_app_api_routes_login_route__WEBPACK_IMPORTED_MODULE_5__["backendURL_check_login"], {
                      method: 'POST',
                      body: check_login_formdatas
                    }).then(function (response) {
                      return response.text();
                    }).then(function (res) {
                      console.log(res);
                      if (res == "1") officer_code_true = true;
                      localStorage.clear();

                      if (officer_code_true) {
                        _this.readByState("pending");
                      } else {
                        _this.router.navigate(['form-and-gallery']);
                      }
                    });

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "removeSessionOnServer",
        value: function removeSessionOnServer() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var formdatas;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    formdatas = new FormData();
                    formdatas.append('loading', 'unloading');
                    _context2.next = 4;
                    return fetch(src_app_api_routes_login_route__WEBPACK_IMPORTED_MODULE_5__["backendURL_check_login"], {
                      method: 'POST',
                      body: formdatas
                    });

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        } // READ

      }, {
        key: "readByState",
        value: function readByState(is_done) {
          var _this2 = this;

          // console.log(!localStorage.getItem('officer_code'));
          var form_datas = new FormData(); // console.log(is_done);

          form_datas.append("method_to_DB", "read_by_state");
          form_datas.append("is_done", is_done);
          this.lookup.lookupSession(form_datas).then(function (resolve) {
            var resolveDemo = resolve; //(typeof resolve == 'string') ? resolve : "";

            var result = JSON.parse(resolveDemo);
            _this2.listOfSessions = result; // console.log(result);
          });
        } // DELETE

      }, {
        key: "deleteByIDs",
        value: function deleteByIDs(IDs) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = IDs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var id = _step.value;
              var form_datas = new FormData();
              form_datas.append("method_to_DB", "delete");
              form_datas.append("session_id", id);
              this.lookup.lookupSession(form_datas);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "deleteByState",
        value: function deleteByState(is_done) {
          var form_datas = new FormData();
          form_datas.append("method_to_DB", "delete_by_state");
          form_datas.append("is_done", is_done);
          this.lookup.lookupSession(form_datas);
        } // MARK DONE

      }, {
        key: "markDoneByIDs",
        value: function markDoneByIDs(IDs) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = IDs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var id = _step2.value;
              var form_datas = new FormData();
              form_datas.append("method_to_DB", "mark_done");
              form_datas.append("session_id", id);
              this.lookup.lookupSession(form_datas);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        } // EVENT

      }, {
        key: "makeAllDone",
        value: function makeAllDone() {
          var allDeletedCheckers = document.querySelectorAll("input[data-reference='delete'");
          var allMarkedDoneCheckers = document.querySelectorAll("input[data-reference='mark_done'");
          var arrayOfDeletedIDs = [],
              arrayOfMarkedDoneIDs = [];

          for (var i in allDeletedCheckers) {
            if (allDeletedCheckers[i].checked) arrayOfDeletedIDs.push(allDeletedCheckers[i].name);
          } // console.log(arrayOfDeletedIDs);


          this.deleteByIDs(arrayOfDeletedIDs);

          for (var _i in allMarkedDoneCheckers) {
            if (allMarkedDoneCheckers[_i].checked) arrayOfMarkedDoneIDs.push(allMarkedDoneCheckers[_i].name);
          }

          this.markDoneByIDs(arrayOfMarkedDoneIDs);
        }
      }, {
        key: "filterList",
        value: function filterList() {
          var valueFromRadioBtns = document.querySelector("input[name='is_done']:checked").value;
          this.readByState(valueFromRadioBtns);
        }
      }, {
        key: "filterTable",
        value: function filterTable() {
          // Declare variables
          var input, filter, table, tr, tds;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr"); // Loop through all table rows, and hide those who don't match the search query

          for (var i = 0; i < tr.length; i++) {
            tds = tr[i].getElementsByTagName("td");
            var txtValues = [];

            for (var j = 0; j < tds.length; j++) {
              txtValues.push(tds[j].textContent || tds[j].innerText);
            }

            for (var _j = 0; _j < tds.length; _j++) {
              if (txtValues[_j].toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = ""; // console.log(txtValues[j]);
                // console.log(filter);

                break;
              } else {
                tr[i].style.display = "none";
              }
            }
          }
        }
      }, {
        key: "deleteAllOverided",
        value: function deleteAllOverided() {
          var form_datas = new FormData();
          form_datas.append("method_to_DB", "delete_by_state");
          form_datas.append("is_done", "overided");
          this.lookup.lookupSession(form_datas);
        }
      }, {
        key: "deleteAllDone",
        value: function deleteAllDone() {
          var form_datas = new FormData();
          form_datas.append("method_to_DB", "delete_by_state");
          form_datas.append("is_done", "done");
          this.lookup.lookupSession(form_datas);
        }
      }]);

      return HistoriesComponent;
    }();

    HistoriesComponent.ctorParameters = function () {
      return [{
        type: _services_lookup_session_service__WEBPACK_IMPORTED_MODULE_2__["LookupSessionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    HistoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-histories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./histories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/histories/histories.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./histories.component.css */
      "./src/app/components/histories/histories.component.css")).default]
    })], HistoriesComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Bordered form */\r\n.form {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  border: 3px solid #f1f1f1;\r\n  position: absolute;\r\n  top: 0;\r\n  background-color: rgb(0, 204, 255);\r\n}\r\n/* Full-width inputs */\r\ninput[type=text],\r\ninput[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n/* Set a style for all buttons */\r\nbutton {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n/* Add a hover effect for buttons */\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n/* Extra style for the cancel button (red) */\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n/* Center the avatar image inside this container */\r\n.admin-container {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n}\r\n/* Add padding to containers */\r\n.container {\r\n  padding: 16px;\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n    display: block;\r\n    float: none;\r\n  }\r\n\r\n  .cancelbtn {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sa0NBQWtDO0FBQ3BDO0FBRUEsc0JBQXNCO0FBQ3RCOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCO0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsWUFBWTtBQUNkO0FBRUEsNENBQTRDO0FBQzVDO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFFQSxrREFBa0Q7QUFDbEQ7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBSUEsOEJBQThCO0FBQzlCO0VBQ0UsYUFBYTtBQUNmO0FBR0Esb0VBQW9FO0FBQ3BFO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCb3JkZXJlZCBmb3JtICovXHJcbi5mb3JtIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIwNCwgMjU1KTtcclxufVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSxcclxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGUgZm9yIHRoZSBjYW5jZWwgYnV0dG9uIChyZWQpICovXHJcbi5jYW5jZWxidG4ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBDZW50ZXIgdGhlIGF2YXRhciBpbWFnZSBpbnNpZGUgdGhpcyBjb250YWluZXIgKi9cclxuLmFkbWluLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjRweCAwIDEycHggMDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBzcGFuIGFuZCBjYW5jZWwgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICBzcGFuLnBzdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNhbmNlbGJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_routes_login_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api-routes/login-route */
    "./src/app/api-routes/login-route.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.loginInvalid = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.getElementById("loginForm").addEventListener("click", function (e) {
            e.preventDefault();
          });
        }
      }, {
        key: "submitLogin",
        value: function submitLogin(event) {
          var _this3 = this;

          var form_datas = new FormData(document.getElementById("loginForm"));
          console.log(form_datas.get("password"));
          fetch(_api_routes_login_route__WEBPACK_IMPORTED_MODULE_2__["backendURL_login"], {
            method: "POST",
            body: form_datas
          }).then(function (resolved) {
            return resolved.text();
          }).then(function (resolved) {
            console.log(resolved);

            if (!resolved) {
              // alert("Login failed \n Check back your password of officer_code");
              _this3.loginInvalid = true;
            } else {
              // localStorage.setItem('officer_code_true', resolved);
              localStorage.setItem('official_code', form_datas.get('officer_code').toString());
              localStorage.setItem('password', form_datas.get('password').toString());
              _this3.loginInvalid = false;

              _this3.router.navigate(['/dashboard']);
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/term-and-condition/term-and-condition.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/components/term-and-condition/term-and-condition.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTermAndConditionTermAndConditionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".term {\r\n  position: absolute;\r\n  top: 1em;\r\n  width: calc(100% + 117px);\r\n  left: 2vw;\r\n  height: auto;\r\n  background: #2e3f61;\r\n  margin: auto 3vw;\r\n  width: 88.5vw;\r\n  box-shadow: 0px 3px 57px rgba(0, 0, 0, 0.35);\r\n  z-index: 1;\r\n  padding-left: 83px;\r\n  padding-right: 66px;\r\n  padding-top: 0px;\r\n  padding-bottom: 45px;\r\n  color: rgb(119, 238, 51);\r\n  text-align: justify;\r\n}\r\n\r\n.term h2,\r\n.term a {\r\n  font-family: 'Kaushan script';\r\n}\r\n\r\n.term a {\r\n  text-decoration: underline;\r\n  color: yellow;\r\n}\r\n\r\n.term>p>strong {\r\n  font-size: 1.2em;\r\n  font-family: 'Kaushan script';\r\n  color: rgb(228, 228, 228)\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXJtLWFuZC1jb25kaXRpb24vdGVybS1hbmQtY29uZGl0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsNkJBQTZCO0FBQy9COztBQUlBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVybS1hbmQtY29uZGl0aW9uL3Rlcm0tYW5kLWNvbmRpdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlcm0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDFlbTtcclxuICB3aWR0aDogY2FsYygxMDAlICsgMTE3cHgpO1xyXG4gIGxlZnQ6IDJ2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogIzJlM2Y2MTtcclxuICBtYXJnaW46IGF1dG8gM3Z3O1xyXG4gIHdpZHRoOiA4OC41dnc7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1N3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nLWxlZnQ6IDgzcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNjZweDtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xyXG4gIGNvbG9yOiByZ2IoMTE5LCAyMzgsIDUxKTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4udGVybSBoMixcclxuLnRlcm0gYSB7XHJcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIHNjcmlwdCc7XHJcbn1cclxuXHJcblxyXG5cclxuLnRlcm0gYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLnRlcm0+cD5zdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIHNjcmlwdCc7XHJcbiAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/term-and-condition/term-and-condition.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/term-and-condition/term-and-condition.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: TermAndConditionComponent */

  /***/
  function srcAppComponentsTermAndConditionTermAndConditionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermAndConditionComponent", function () {
      return TermAndConditionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TermAndConditionComponent =
    /*#__PURE__*/
    function () {
      function TermAndConditionComponent() {
        _classCallCheck(this, TermAndConditionComponent);
      }

      _createClass(TermAndConditionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TermAndConditionComponent;
    }();

    TermAndConditionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-term-and-condition',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./term-and-condition.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/term-and-condition/term-and-condition.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./term-and-condition.component.css */
      "./src/app/components/term-and-condition/term-and-condition.component.css")).default]
    })], TermAndConditionComponent);
    /***/
  },

  /***/
  "./src/app/components/visa-providing/visa-providing.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/visa-providing/visa-providing.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsVisaProvidingVisaProvidingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlzYS1wcm92aWRpbmcvdmlzYS1wcm92aWRpbmcuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/visa-providing/visa-providing.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/visa-providing/visa-providing.component.ts ***!
    \***********************************************************************/

  /*! exports provided: VisaProvidingComponent */

  /***/
  function srcAppComponentsVisaProvidingVisaProvidingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisaProvidingComponent", function () {
      return VisaProvidingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VisaProvidingComponent =
    /*#__PURE__*/
    function () {
      function VisaProvidingComponent() {
        _classCallCheck(this, VisaProvidingComponent);
      }

      _createClass(VisaProvidingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VisaProvidingComponent;
    }();

    VisaProvidingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-visa-providing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./visa-providing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/visa-providing/visa-providing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./visa-providing.component.css */
      "./src/app/components/visa-providing/visa-providing.component.css")).default]
    })], VisaProvidingComponent);
    /***/
  },

  /***/
  "./src/app/services/backend-apis.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/backend-apis.service.ts ***!
    \**************************************************/

  /*! exports provided: BackendApisService */

  /***/
  function srcAppServicesBackendApisServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendApisService", function () {
      return BackendApisService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api-routes/backendURL */
    "./src/app/api-routes/backendURL.ts");

    var BackendApisService =
    /*#__PURE__*/
    function () {
      function BackendApisService() {
        _classCallCheck(this, BackendApisService);
      }

      _createClass(BackendApisService, [{
        key: "add",
        value: function add(form_datas) {
          // backendURL = "http://localhost:8888/LittleDanangServerSide/index.php";
          var request = new Request(_api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__["backendURL"], {
            method: 'POST',
            body: form_datas
          });
          console.log(_api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__["backendURL"]);
          return fetch(request).then(function (resolved) {
            // console.log(resolved instanceof Response);
            return resolved.text();
          }, function (reject) {
            return console.log(reject);
          }).then(function (resolved) {
            return console.log(resolved);
          });
        }
      }, {
        key: "deleteOverdatedSession",
        value: function deleteOverdatedSession() {
          // let fDatas = new FormData();
          fetch(_api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__["deleteOverdatedSessionURL"]);
        }
      }]);

      return BackendApisService;
    }();

    BackendApisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BackendApisService);
    /***/
  },

  /***/
  "./src/app/services/initinfo.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/initinfo.service.ts ***!
    \**********************************************/

  /*! exports provided: InitinfoService */

  /***/
  function srcAppServicesInitinfoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitinfoService", function () {
      return InitinfoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InitinfoService =
    /*#__PURE__*/
    function () {
      function InitinfoService() {
        _classCallCheck(this, InitinfoService);
      }

      _createClass(InitinfoService, [{
        key: "initinfo",
        value: function initinfo() {
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
                  }); // if (ddItem.prop('tagName') != "INPUT") {
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
                    dd.toggleClass('active'); // console.log(event.target.tagName != "INPUT");
                  } else {
                    if (event.target.type != 'file') {
                      $(event.target).on('focusout', function () {
                        dd.find('span').text(event.target.value);
                        console.log(event.target);
                        dd.toggleClass('active');
                      });
                    } else {
                      $(event.target).on('change', function () {
                        if (event.target.value) dd.find('span').text('file choosen');
                        console.log(event.target);
                        dd.toggleClass('active');
                      });
                    } // console.log(event.target.value);

                  }
                });
              }
            });
          }
        }
      }]);

      return InitinfoService;
    }();

    InitinfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InitinfoService);
    /***/
  },

  /***/
  "./src/app/services/lookup-session.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/lookup-session.service.ts ***!
    \****************************************************/

  /*! exports provided: LookupSessionService */

  /***/
  function srcAppServicesLookupSessionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LookupSessionService", function () {
      return LookupSessionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api-routes/backendURL */
    "./src/app/api-routes/backendURL.ts");

    var LookupSessionService =
    /*#__PURE__*/
    function () {
      function LookupSessionService() {
        _classCallCheck(this, LookupSessionService);
      } // read(form_datas) {
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


      _createClass(LookupSessionService, [{
        key: "lookupSession",
        value: function lookupSession(form_datas) {
          var request = new Request(_api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__["backendURL"], {
            method: 'POST',
            body: form_datas
          });
          return fetch(request).then(function (resolved) {
            console.log(_api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__["backendURL"]); // console.log(resolved instanceof Response);

            return resolved.text();
          }).catch(function (reject) {
            console.log(reject);
          });
        }
      }]);

      return LookupSessionService;
    }();

    LookupSessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LookupSessionService);
    /***/
  },

  /***/
  "./src/app/services/set-interval-bg-imgs.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/set-interval-bg-imgs.service.ts ***!
    \**********************************************************/

  /*! exports provided: SetIntervalBgImgsService */

  /***/
  function srcAppServicesSetIntervalBgImgsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetIntervalBgImgsService", function () {
      return SetIntervalBgImgsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api-routes/backendURL */
    "./src/app/api-routes/backendURL.ts");

    var SetIntervalBgImgsService =
    /*#__PURE__*/
    function () {
      function SetIntervalBgImgsService() {
        _classCallCheck(this, SetIntervalBgImgsService);
      }

      _createClass(SetIntervalBgImgsService, [{
        key: "setIntervalBgImgs",
        value: function setIntervalBgImgs() {
          var images = ["danang2.jpg", "danang3.jpg", "danang4.jpg", "danang5.jpg", "danang6.jpg"];
          $(function () {
            var i = 0;
            $("#dvImage").css({
              "background-image": "url(" // + "http://localhost:4200"
              // + hostDIR
              + "/assets/imgs/" + images[i] + ")",
              "background-repeat": "no-repeat",
              "background-size": "100% 100vh" // "background-position" : ""

            });
            console.log(_api_routes_backendURL__WEBPACK_IMPORTED_MODULE_2__["hostDIR"]);
            setInterval(function () {
              i++;

              if (i == images.length) {
                i = 0;
              }

              jQuery("#dvImage").fadeOut(5, function () {
                $(this).css({
                  "background-image": "url(" // + "http://localhost:4200"
                  // + hostDIR
                  + "/assets/imgs/" + images[i] + ")",
                  "background-size": "100% 100vh" // "background-position" : ""

                });
                jQuery(this).fadeIn("fast"); // console.log("ok");
              });
            }, 60000);
          });
        }
      }]);

      return SetIntervalBgImgsService;
    }();

    SetIntervalBgImgsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SetIntervalBgImgsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\LUU TRU PROJECT\LittleDanang_cloned\Little_danang\LittleDanang\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map