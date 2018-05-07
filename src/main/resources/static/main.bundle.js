webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Interceptors/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_localStorage_service__ = __webpack_require__("./src/app/services/localStorage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(localStorageService) {
        this.localStorageService = localStorageService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        //  this.token = '?access_token=' + this.localStorageService.getValueFromLocalStorage().access_token;
        //  req.url = req.url + this.token;
        var authreq = req.clone();
        return next.handle(authreq);
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_localStorage_service__["a" /* LocalStorageService */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about',
            template: __webpack_require__("./src/app/about/about.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])(':enter, :leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('200ms ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/about.html":
/***/ (function(module, exports) {

module.exports = "   <h3>Development & Ownership Team</h3>\n   <div class=\" tos-button-right\" style=\"height: 35px\">\n\n   </div><br>\n   <div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\" @fade>\n      <div fxFlex=\"30%\">\n         <mat-card class=\"example-card\" >\n            <mat-card-header>\n              <mat-card-title><h3><span class=\"tos-cust-heading\"> Soumyendu Banerjee</span></h3></mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n              Strategy and High level Flow\n            </mat-card-content>\n            <mat-card-actions>\n            </mat-card-actions>\n         </mat-card>\n      </div>\n      <div fxFlex=\"30%\">\n         <mat-card class=\"example-card\" >\n            <mat-card-header>\n              <mat-card-title><h3><span class=\"tos-cust-heading\"> Abhinav Gupta</span></h3></mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n              Strategy and Development\n            </mat-card-content>\n            <mat-card-actions>\n            </mat-card-actions>\n         </mat-card>\n      </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_employee_main_component__ = __webpack_require__("./src/app/employee/employee-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_main_component__ = __webpack_require__("./src/app/customer/customer-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_customer_view_component__ = __webpack_require__("./src/app/customer/customer-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_team_team_view_component__ = __webpack_require__("./src/app/customer/team/team-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employee_employee_view_component__ = __webpack_require__("./src/app/employee/employee-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__content_content_component__ = __webpack_require__("./src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: 'view/login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'contentDashboard', component: __WEBPACK_IMPORTED_MODULE_9__content_content_component__["a" /* ContentComponent */] },
    { path: 'view/about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'view/profile', component: __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'view/customers', component: __WEBPACK_IMPORTED_MODULE_4__customer_customer_main_component__["a" /* CustomerMainComponent */] },
    { path: 'view/customer/:id', component: __WEBPACK_IMPORTED_MODULE_5__customer_customer_view_component__["a" /* CustomerViewComponent */] },
    { path: 'view/employees', component: __WEBPACK_IMPORTED_MODULE_2__employee_employee_main_component__["a" /* EmployeeMainComponent */] },
    { path: 'view/employee/:id', component: __WEBPACK_IMPORTED_MODULE_7__employee_employee_view_component__["a" /* EmployeeViewComponent */] },
    { path: 'view/team/:id', component: __WEBPACK_IMPORTED_MODULE_6__customer_team_team_view_component__["a" /* TeamViewComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body > app-root > div > h2\n {\n  font-family: sans-serif;\n  background: red !important;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--This is app component template.-->\n<div fxFlex=\"15%\" fxHide.lt-md=\"true\"></div>\n<div fxFlex=\"100%\" >\n\n  <!--  <login> </login> -->\n  <content> </content>\n  <!--<footer></footer> -->\n</div>\n<div fxFlex=\"15%\" fxHide.lt-md=\"true\"></div>\n<!--\n<button mat-mini-fab> <mat-icon ><i class=\"material-icons\">home</i></mat-icon> </button>\n-->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_svg_icon__ = __webpack_require__("./node_modules/angular-svg-icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__prime_module__ = __webpack_require__("./src/app/prime.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__custom_material_module__ = __webpack_require__("./src/app/custom-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__content_content_component__ = __webpack_require__("./src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__menu_menu_component__ = __webpack_require__("./src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__menu_breadcrumb_component__ = __webpack_require__("./src/app/menu/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__employee_employee_main_component__ = __webpack_require__("./src/app/employee/employee-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__employee_employee_view_component__ = __webpack_require__("./src/app/employee/employee-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__employee_employee_dialog_component__ = __webpack_require__("./src/app/employee/employee-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__customer_customer_main_component__ = __webpack_require__("./src/app/customer/customer-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__customer_customer_view_component__ = __webpack_require__("./src/app/customer/customer-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__customer_customer_dialog_component__ = __webpack_require__("./src/app/customer/customer-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__customer_goal_goal_dialog_component__ = __webpack_require__("./src/app/customer/goal/goal-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__customer_team_team_dialog_component__ = __webpack_require__("./src/app/customer/team/team-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__customer_stakeholder_stakeholder_dialog_component__ = __webpack_require__("./src/app/customer/stakeholder/stakeholder-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__customer_team_team_view_component__ = __webpack_require__("./src/app/customer/team/team-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__customer_team_projectrythm_projectrythm_dialog_component__ = __webpack_require__("./src/app/customer/team/projectrythm/projectrythm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__customer_team_teammember_teammember_dialog_component__ = __webpack_require__("./src/app/customer/team/teammember/teammember-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__customer_travel_travel_dialog_component__ = __webpack_require__("./src/app/customer/travel/travel-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__employee_skill_skill_dialog_component__ = __webpack_require__("./src/app/employee/skill/skill-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__employee_certification_certification_dialog_component__ = __webpack_require__("./src/app/employee/certification/certification-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__employee_improvementarea_improvementarea_dialog_component__ = __webpack_require__("./src/app/employee/improvementarea/improvementarea-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__employee_feedback_feedback_dialog_component__ = __webpack_require__("./src/app/employee/feedback/feedback-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__employee_training_training_dialog_component__ = __webpack_require__("./src/app/employee/training/training-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__customer_team_action_action_dialog_component__ = __webpack_require__("./src/app/customer/team/action/action-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_utility_service__ = __webpack_require__("./src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_localStorage_service__ = __webpack_require__("./src/app/services/localStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_url_service__ = __webpack_require__("./src/app/services/url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__Interceptors_auth_interceptor__ = __webpack_require__("./src/app/Interceptors/auth.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__employee_employee_main_component__["a" /* EmployeeMainComponent */],
                __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_23__customer_customer_main_component__["a" /* CustomerMainComponent */],
                __WEBPACK_IMPORTED_MODULE_21__employee_employee_view_component__["a" /* EmployeeViewComponent */],
                __WEBPACK_IMPORTED_MODULE_24__customer_customer_view_component__["a" /* CustomerViewComponent */],
                __WEBPACK_IMPORTED_MODULE_29__customer_team_team_view_component__["a" /* TeamViewComponent */],
                __WEBPACK_IMPORTED_MODULE_22__employee_employee_dialog_component__["a" /* EmployeeDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_25__customer_customer_dialog_component__["a" /* CustomerDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_28__customer_stakeholder_stakeholder_dialog_component__["a" /* StakeholderDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_26__customer_goal_goal_dialog_component__["a" /* GoalDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_27__customer_team_team_dialog_component__["a" /* TeamDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_30__customer_team_projectrythm_projectrythm_dialog_component__["a" /* ProjectRythmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_38__customer_team_action_action_dialog_component__["a" /* ActionDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_31__customer_team_teammember_teammember_dialog_component__["a" /* TeamMemberDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_32__customer_travel_travel_dialog_component__["a" /* TravelDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_33__employee_skill_skill_dialog_component__["a" /* SkillDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_34__employee_certification_certification_dialog_component__["a" /* CertificationDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_37__employee_training_training_dialog_component__["a" /* TrainingDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_35__employee_improvementarea_improvementarea_dialog_component__["a" /* ImprovementAreaDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_36__employee_feedback_feedback_dialog_component__["a" /* FeedbackDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_17__menu_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_19__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__prime_module__["a" /* PrimeModule */],
                __WEBPACK_IMPORTED_MODULE_10__custom_material_module__["a" /* CustomMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_svg_icon__["a" /* AngularSvgIconModule */]
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_39__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_40__services_utility_service__["a" /* UtilityService */], __WEBPACK_IMPORTED_MODULE_41__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_42__services_localStorage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_43__services_url_service__["a" /* UrlService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_44__Interceptors_auth_interceptor__["a" /* AuthInterceptor */],
                    multi: true
                }
                /*{ provide: LocationStrategy, useClass: HashLocationStrategy },*/
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_22__employee_employee_dialog_component__["a" /* EmployeeDialogComponent */], __WEBPACK_IMPORTED_MODULE_25__customer_customer_dialog_component__["a" /* CustomerDialogComponent */], __WEBPACK_IMPORTED_MODULE_28__customer_stakeholder_stakeholder_dialog_component__["a" /* StakeholderDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_26__customer_goal_goal_dialog_component__["a" /* GoalDialogComponent */], __WEBPACK_IMPORTED_MODULE_27__customer_team_team_dialog_component__["a" /* TeamDialogComponent */], __WEBPACK_IMPORTED_MODULE_30__customer_team_projectrythm_projectrythm_dialog_component__["a" /* ProjectRythmDialogComponent */], __WEBPACK_IMPORTED_MODULE_38__customer_team_action_action_dialog_component__["a" /* ActionDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_31__customer_team_teammember_teammember_dialog_component__["a" /* TeamMemberDialogComponent */], __WEBPACK_IMPORTED_MODULE_32__customer_travel_travel_dialog_component__["a" /* TravelDialogComponent */], __WEBPACK_IMPORTED_MODULE_33__employee_skill_skill_dialog_component__["a" /* SkillDialogComponent */], __WEBPACK_IMPORTED_MODULE_34__employee_certification_certification_dialog_component__["a" /* CertificationDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_37__employee_training_training_dialog_component__["a" /* TrainingDialogComponent */], __WEBPACK_IMPORTED_MODULE_35__employee_improvementarea_improvementarea_dialog_component__["a" /* ImprovementAreaDialogComponent */], __WEBPACK_IMPORTED_MODULE_36__employee_feedback_feedback_dialog_component__["a" /* FeedbackDialogComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_localStorage_service__ = __webpack_require__("./src/app/services/localStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility_service__ = __webpack_require__("./src/app/services/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentComponent = /** @class */ (function () {
    function ContentComponent(router, route, localStorageService, utilityService) {
        this.router = router;
        this.route = route;
        this.localStorageService = localStorageService;
        this.utilityService = utilityService;
        this.title = 'Team Operations System';
        this.tokenSub = undefined;
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilityService.currenttokenSubject.subscribe(function (tokenSubject) {
            _this.tokenSub = tokenSubject;
        });
        var local = this.localStorageService.getValueFromLocalStorage();
        if (local !== null)
            this.tokenSub = local.access_token;
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'content',
            template: __webpack_require__("./src/app/content/content.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__services_localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/content/content.html":
/***/ (function(module, exports) {

module.exports = "<div><menu *ngIf=\"tokenSub.length > 0 \"></menu>\r\n</div>\r\n<div id=\"content\" class=\"tos-router-container\">\r\n  <router-outlet ></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/custom-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_autocomplete__ = __webpack_require__("./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm5/checkbox.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_menu__["a" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["a" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_autocomplete__["a" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_datepicker__["a" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_tabs__["a" /* MatTabsModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_menu__["a" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["a" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_autocomplete__["a" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_datepicker__["a" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_tabs__["a" /* MatTabsModule */]]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/customer/customer-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CustomerDialogComponent = /** @class */ (function () {
    function CustomerDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CustomerDialogComponent.prototype.ngOnInit = function () {
    };
    CustomerDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'customer-dialog',
            template: __webpack_require__("./src/app/customer/customer-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], CustomerDialogComponent);
    return CustomerDialogComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"  data.customer!==undefined\" >\r\n   <h2 *ngIf=\"data.customer.id === ''\" mat-dialog-title>Add Customer</h2>\r\n   <h2   *ngIf=\"data.customer.id !== ''\" mat-dialog-title>Update Customer</h2>\r\n   <mat-dialog-content>\r\n      <form id=\"formNewEmployee2\" name=\"formNewEmployeeUpdate\"  #customerDataUpdate=\"ngForm\">\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Name\" name=\"name\" [value]=\"data.customer.name\" [(ngModel)]=\"data.customer.name\" ngModel><br>\r\n         </mat-form-field>\r\n         <br>\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Contact No.\" name=\"contact\" [value]=\"data.customer.contact\" [(ngModel)]=\"data.customer.contact\" ngModel>\r\n         </mat-form-field>\r\n         <br>\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Domain\" name=\"domain\" [value]=\"data.customer.domain\" [(ngModel)]=\"data.customer.domain\" ngModel>\r\n         </mat-form-field>\r\n         <br>\r\n         <mat-form-field >\r\n            <textarea matInput placeholder=\"Address\" rows=\"3\" name=\"address\" [value]=\"data.customer.address\" [(ngModel)]=\"data.customer.address\" ngModel>\r\n            </textarea>\r\n         </mat-form-field>\r\n         <br>\r\n         <mat-form-field >\r\n            <input type=\"text\"  name=\"country\"  placeholder=\"Country\" aria-label=\"country\" matInput [formControl]=\"data.myControl\"\r\n            [(ngModel)]=\"data.customer.country\"\r\n            [matAutocomplete]=\"auto\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\">\r\n               <mat-option *ngFor=\"let country of data.filteredCountries | async\" [value]=\"country\">\r\n               {{ country }}\r\n               </mat-option>\r\n            </mat-autocomplete>\r\n         </mat-form-field>\r\n         <br>\r\n      </form>\r\n   </mat-dialog-content>\r\n   <mat-dialog-actions>\r\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customer *ngIf=\"data.customer.id !== ''\">Update</button>\r\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customer *ngIf=\"data.customer.id === ''\">Add</button>\r\n      <button mat-button mat-dialog-close=\"dialogDismissed\" disableRipple=\"true\" class=\"tos-button\">Cancel</button>\r\n   </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customer/customer-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility_service__ = __webpack_require__("./src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_dialog_component__ = __webpack_require__("./src/app/customer/customer-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer__ = __webpack_require__("./src/app/customer/customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CustomerMainComponent = /** @class */ (function () {
    function CustomerMainComponent(dataService, router, route, dialog, utilityService) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.utilityService = utilityService;
        this.customers = [];
        this.customer = new __WEBPACK_IMPORTED_MODULE_6__customer__["a" /* Customer */]();
        this.myControl = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormControl"]();
        this.countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda",
            "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
            "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina",
            "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
            "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands",
            "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark",
            "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
            "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia",
            "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland",
            "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras",
            "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel",
            "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos",
            "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia",
            "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco",
            "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles",
            "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama",
            "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion",
            "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia",
            "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa",
            "South Korea", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan",
            "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
            "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos",
            "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam",
            "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
    }
    CustomerMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilityService.currentBreadCrumb.subscribe(function (bread) { return _this.bread = bread; });
        this.dataService.getEntityAllData('customers')
            .then(function (resCustomerData) {
            resCustomerData.forEach(function (e) { return _this.customers.push(e); });
        }, function (err) { return console.log("customers could not be fetched :" + err); });
        this.filteredCountries = this.myControl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter(val); }));
    };
    CustomerMainComponent.prototype.filter = function (val) {
        return this.countries.filter(function (country) {
            return country.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    CustomerMainComponent.prototype.openDialog = function () {
        var _this = this;
        this.customer = new __WEBPACK_IMPORTED_MODULE_6__customer__["a" /* Customer */]();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__customer_dialog_component__["a" /* CustomerDialogComponent */], {
            data: this
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'dialogDismissed' && result !== undefined) {
                _this.addNewEntity('customers', result, _this.customers);
            }
        });
    };
    CustomerMainComponent.prototype.addNewEntity = function (entityName, entity, entityArray) {
        this.dataService.postEntity(entityName, entity)
            .then(function (resEmployeeData) {
            entityArray.push(resEmployeeData);
        }, function (err) { return console.log(entityName + " could not be added :" + err); });
    };
    CustomerMainComponent.prototype.openUpdateDialog = function (id) {
        var _this = this;
        var index = this.customers.findIndex(function (c) { return c.id === id; });
        this.customer = this.customers[index];
        var customerCopy = Object.assign({}, this.customer);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__customer_dialog_component__["a" /* CustomerDialogComponent */], {
            data: this
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'dialogDismissed' && result !== undefined) {
                _this.updateEntity('customers', id, result, _this.customers);
            }
            else {
                _this.customers[index] = customerCopy;
            }
        });
    };
    CustomerMainComponent.prototype.updateEntity = function (entityName, id, entity, entityArray) {
        this.dataService.updateEntity(entityName, id, entity)
            .then(function (resEmployeeData) {
            var index = entityArray.findIndex(function (e) { return e.id === entity.id; });
            entityArray[index] = entity;
        }, function (err) { return console.log(entityName + " could not be updated :" + err); });
    };
    CustomerMainComponent.prototype.deleteCustomer = function (id) {
        var _this = this;
        this.dataService.delelteEntity('customers', id)
            .then(function (resCustomerData) {
            _this.customers.splice(_this.customers.findIndex(function (i) {
                return i.id === id;
            }), 1);
        }, function (err) { return console.log("Customer could not be deleted :" + err); });
    };
    CustomerMainComponent.prototype.navigateViewCustomer = function (id) {
        var entity = this.customers[this.customers.findIndex(function (c) { return c.id === id; })];
        this.utilityService.addBreadCrumb(2, 'Customer', 'view/customer', id, 'entity', entity.name);
        this.router.navigate(['view/customer', id], { skipLocationChange: false });
    };
    CustomerMainComponent.prototype.checkEntity = function (entity) {
        return this.utilityService.checkEntity(entity);
    };
    CustomerMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'customer-main',
            template: __webpack_require__("./src/app/customer/customer-main.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["trigger"])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["style"])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["transition"])(':enter, :leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["animate"])('200ms ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */]])
    ], CustomerMainComponent);
    return CustomerMainComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-main.html":
/***/ (function(module, exports) {

module.exports = "<h3>All Customers</h3>\n<div class=\" tos-button-right\">\n   <!--   <button mat-button color=\"primary\" mat-mini-fab (click)=\"openDialog()\"> <mat-icon ><i class=\"material-icons tos-material-button\">+</i></mat-icon> </button>\n      -->\n   <span  (click)=\"openDialog()\" class=\"tos-add-button\">+</span>\n</div>\n<div class=\"container\" fxlayout=\"column\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutAlign=\"flex-start\" @fade>\n   <div fxFlex=\"100%\" *ngFor = \"let cust of customers\">\n      <mat-card  class=\"example-card\">\n         <mat-card-header>\n            <mat-card-title>\n               <h3 class=\"shake-hover-style\"><span (click)=\"navigateViewCustomer(cust.id)\" class=\"tos-cust-heading\">{{cust.name}} </span></h3>\n            </mat-card-title>\n         </mat-card-header>\n         <mat-card-content>\n            <table style=\"width: 100%;\">\n               <th > <span *ngIf=\"cust.domain != null\">Domain </span></th>\n               <th > <span *ngIf=\"cust.contactPerson != null\">Contact Person </span></th>\n               <th > <span  *ngIf=\"cust.addresses !==null\">Contact Address </span> </th>\n               <th >Contact Number</th>\n               <tr class=\"tos-table\" style=\"text-align: center;\">\n                  <td> <span *ngIf=\"cust.domain != null\" >{{cust.domain}} </span> </td>\n                  <td> <span *ngIf=\"cust.contactPerson != null\" >{{cust.contactPerson}} </span> </td>\n                  <td ><span *ngIf=\"cust.addresses !== null\" >{{cust.address}}  {{cust.country}} </span>\n                  </td>\n                  <td >{{cust.contact}}</td>\n               </tr>\n            </table>\n         </mat-card-content>\n         <mat-card-actions>\n            <!--    <button mat-mini-fab (click)=\"openUpdateDialog(cust.id)\" > <mat-icon >create</mat-icon> </button>\n               <button mat-mini-fab (click)=\"deleteCustomer(cust.id)\"> <mat-icon >delete</mat-icon> </button> -->\n            <br>\n            <span (click)=\"openUpdateDialog(cust.id)\" style=\"cursor:pointer;color:grey\">\n               <mat-icon  >create</mat-icon>\n            </span>\n            &emsp;\n            <span (click)=\"deleteCustomer(cust.id)\" style=\"cursor:pointer; color:grey\">\n               <mat-icon  >delete</mat-icon>\n            </span>\n         </mat-card-actions>\n      </mat-card>\n   </div>\n   <div *ngIf=\"checkEntity(customers)\" class=\"tos-content-color\">No Customers Present </div>\n</div>\n"

/***/ }),

/***/ "./src/app/customer/customer-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utility_service__ = __webpack_require__("./src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stakeholder_stakeholder_dialog_component__ = __webpack_require__("./src/app/customer/stakeholder/stakeholder-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__goal_goal_dialog_component__ = __webpack_require__("./src/app/customer/goal/goal-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__team_team_dialog_component__ = __webpack_require__("./src/app/customer/team/team-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__travel_travel_dialog_component__ = __webpack_require__("./src/app/customer/travel/travel-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__team_team__ = __webpack_require__("./src/app/customer/team/team.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__goal_goal__ = __webpack_require__("./src/app/customer/goal/goal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stakeholder_stakeholder__ = __webpack_require__("./src/app/customer/stakeholder/stakeholder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__travel_travel__ = __webpack_require__("./src/app/customer/travel/travel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var CustomerViewComponent = /** @class */ (function () {
    function CustomerViewComponent(dataService, router, route, dialog, utilityService, matIconRegistry, domSanitizer) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.utilityService = utilityService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.customerAddresses = [];
        this.customerTeams = [];
        this.customerGoals = [];
        this.customerStakeholders = [];
        this.customerTravels = [];
        this.customerStakeholder = new __WEBPACK_IMPORTED_MODULE_13__stakeholder_stakeholder__["a" /* Stakeholder */]();
        this.customerGoal = new __WEBPACK_IMPORTED_MODULE_12__goal_goal__["a" /* Goal */]();
        this.customerTravel = new __WEBPACK_IMPORTED_MODULE_14__travel_travel__["a" /* Travel */]();
        this.customerTeam = new __WEBPACK_IMPORTED_MODULE_11__team_team__["a" /* Team */]();
        this.goalTenures = ['Weekly', 'Monthly', 'Yearly'];
        this.matIconRegistry.addSvgIcon("phone", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/phone.svg"));
        this.matIconRegistry.addSvgIcon("human-greeting", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/human-greeting.svg"));
    }
    CustomerViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilityService.currentBreadCrumb.subscribe(function (bread) { return _this.bread = bread; });
        this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            if (!isNaN(_this.id)) {
                _this.dataService.getEntityData('customers', _this.id)
                    .then(function (resCustomerData) {
                    _this.customer = resCustomerData;
                    _this.customer.goals.forEach(function (e) { return _this.customerGoals.push(e); });
                    _this.customer.teams.forEach(function (e) { return _this.customerTeams.push(e); });
                    _this.customer.stakeHolders.forEach(function (e) { return _this.customerStakeholders.push(e); });
                    _this.customer.travels.forEach(function (e) { return _this.customerTravels.push(e); });
                });
            }
        });
    };
    CustomerViewComponent.prototype.openDialog = function (entityName) {
        if (entityName === 'teams') {
            this.customerTeam = new __WEBPACK_IMPORTED_MODULE_11__team_team__["a" /* Team */]();
            this.openEntityDialog(__WEBPACK_IMPORTED_MODULE_9__team_team_dialog_component__["a" /* TeamDialogComponent */], entityName, this.customerTeams);
        }
        else if (entityName === 'goals') {
            this.customerGoal = new __WEBPACK_IMPORTED_MODULE_12__goal_goal__["a" /* Goal */]();
            this.openEntityDialog(__WEBPACK_IMPORTED_MODULE_8__goal_goal_dialog_component__["a" /* GoalDialogComponent */], entityName, this.customerGoals);
        }
        else if (entityName === 'stakeholders') {
            this.customerStakeholder = new __WEBPACK_IMPORTED_MODULE_13__stakeholder_stakeholder__["a" /* Stakeholder */]();
            this.openEntityDialog(__WEBPACK_IMPORTED_MODULE_7__stakeholder_stakeholder_dialog_component__["a" /* StakeholderDialogComponent */], entityName, this.customerStakeholders);
        }
        else if (entityName === 'travels') {
            this.customerTravel = new __WEBPACK_IMPORTED_MODULE_14__travel_travel__["a" /* Travel */]();
            this.openEntityDialog(__WEBPACK_IMPORTED_MODULE_10__travel_travel_dialog_component__["a" /* TravelDialogComponent */], entityName, this.customerTravels);
        }
        else {
            console.log(entityName + " not found");
        }
    };
    CustomerViewComponent.prototype.openEntityDialog = function (dialogComponent, entityName, entityArray) {
        var _this = this;
        var dialogRef = this.dialog.open(dialogComponent, {
            data: this
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'dialogDismissed' && result !== undefined) {
                _this.addNewEntity(entityName, result, entityArray);
            }
        });
    };
    CustomerViewComponent.prototype.addNewEntity = function (entityName, entity, entityArray) {
        entity.customerId = this.id;
        this.dataService.postEntity(entityName, entity)
            .then(function (resCustomerData) {
            entityArray.push(resCustomerData);
        }, function (err) { return console.log(entityName + " could not be added :" + err); });
    };
    CustomerViewComponent.prototype.openUpdateDialog = function (entityName, id) {
        if (entityName === 'teams') {
            this.customerTeam = this.customerTeams[this.customerTeams.findIndex(function (e) { return e.id === id; })];
            this.openEntityUpdateDialog(entityName, __WEBPACK_IMPORTED_MODULE_9__team_team_dialog_component__["a" /* TeamDialogComponent */], id, this.customerTeams);
        }
        else if (entityName === 'goals') {
            this.customerGoal = this.customerGoals[this.customerGoals.findIndex(function (e) { return e.id === id; })];
            this.openEntityUpdateDialog(entityName, __WEBPACK_IMPORTED_MODULE_8__goal_goal_dialog_component__["a" /* GoalDialogComponent */], id, this.customerGoals);
        }
        else if (entityName === 'stakeholders') {
            this.customerStakeholder = this.customerStakeholders[this.customerStakeholders.findIndex(function (e) { return e.id === id; })];
            this.openEntityUpdateDialog(entityName, __WEBPACK_IMPORTED_MODULE_7__stakeholder_stakeholder_dialog_component__["a" /* StakeholderDialogComponent */], id, this.customerStakeholders);
        }
        else if (entityName === 'travels') {
            this.customerTravel = this.customerTravels[this.customerTravels.findIndex(function (e) { return e.id === id; })];
            this.openEntityUpdateDialog(entityName, __WEBPACK_IMPORTED_MODULE_10__travel_travel_dialog_component__["a" /* TravelDialogComponent */], id, this.customerTravels);
        }
        else {
            console.log(entityName + " not found");
        }
    };
    CustomerViewComponent.prototype.openEntityUpdateDialog = function (entityName, dialogComponent, id, entityArray) {
        var _this = this;
        var index = entityArray.findIndex(function (e) { return e.id === id; });
        var entity = entityArray[index];
        var entityCopy = Object.assign({}, entity);
        var dialogRef = this.dialog.open(dialogComponent, {
            data: this
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'dialogDismissed' && result !== undefined) {
                _this.updateEntity(entityName, id, result, entityArray);
            }
            else {
                entityArray[index] = entityCopy;
            }
        });
    };
    CustomerViewComponent.prototype.updateEntity = function (entityName, id, entity, entityArray) {
        this.dataService.updateEntity(entityName, id, entity)
            .then(function (resCustomerData) {
            var index = entityArray.findIndex(function (e) { return e.id === entity.id; });
            entityArray[index] = entity;
        }, function (err) { return console.log(entityName + " could not be updated :" + err); });
    };
    CustomerViewComponent.prototype.navigateViewTeam = function (teamId) {
        var entity = this.customerTeams[this.customerTeams.findIndex(function (t) { return t.id === teamId; })];
        this.utilityService.addBreadCrumb(3, 'Team', 'view/team', teamId, 'entity', entity.name);
        this.router.navigate(['view/team', teamId], { skipLocationChange: false });
    };
    CustomerViewComponent.prototype.delelteEntity = function (entityName, id, entityArray) {
        this.dataService.delelteEntity(entityName, id)
            .then(function (resCustomerData) {
            entityArray.splice(entityArray.findIndex(function (i) {
                return i.id === id;
            }), 1);
        }, function (err) { return console.log(entityName + " could not be deleted :" + err); });
    };
    CustomerViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'customer-view',
            template: __webpack_require__("./src/app/customer/customer-view.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_15__angular_animations__["trigger"])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_15__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_15__angular_animations__["style"])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_15__angular_animations__["transition"])(':enter, :leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_15__angular_animations__["animate"])('200ms ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6__services_utility_service__["a" /* UtilityService */], __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__["b" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"]])
    ], CustomerViewComponent);
    return CustomerViewComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-view.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"customer != undefined\">\n   <h2 >{{customer.name}}</h2>\n   <span class=\"tos-entity-top-content\">\n      <mat-icon svgIcon=\"phone\" title=\"Contact\"></mat-icon>\n      <a class=\"tos-text\"> {{customer.contact}} &emsp;&emsp;&emsp;</a>\n      <mat-icon svgIcon=\"human-greeting\"  title=\"Contact Person\"></mat-icon>\n      <a class=\"tos-text\"> {{customer.contactPerson}} &emsp;&emsp;&emsp;</a>\n      <mat-icon  title=\"Domain\">domain</mat-icon>\n      <a class=\"tos-text\"> {{customer.domain}} </a>\n   </span>\n</div>\n<mat-accordion [multi]=\"true\" @fade>\n   <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" [expanded]=\"true\" >\n   <mat-expansion-panel-header>\n      <mat-panel-title>\n         <h3>Customer Goals</h3>\n      </mat-panel-title>\n      <mat-panel-description>\n         <!--Currently I am {{panelOpenState ? 'open' : 'closed'}}-->\n      </mat-panel-description>\n   </mat-expansion-panel-header>\n   <div class=\" tos-button-right\">\n      <span  (click)=\"openDialog('goals')\" class=\"tos-add-button\">+</span>\n   </div>\n   <div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\">\n      <div fxFlex=\"30%\" *ngFor = \"let goal of customerGoals\">\n         <mat-card class=\"example-card\" >\n            <mat-card-header>\n               <mat-card-title>\n                  <h3><span >{{goal.description}}</span></h3>\n               </mat-card-title>\n               <mat-card-subtitle></mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n               Tenure: {{goal.tenure}} <br>\n               Status: {{goal.status}}<br>\n               Details: {{goal.details}}<br>\n               Signed By: {{goal.signedBy}}\n            </mat-card-content>\n            <mat-card-actions>\n               <span (click)=\"openUpdateDialog('goals',goal.id)\" style=\"cursor:pointer;color:grey\">\n                  <mat-icon  >create</mat-icon>\n               </span>\n               &emsp;\n               <span (click)=\"delelteEntity('goals',goal.id,customerGoals)\" style=\"cursor:pointer; color:grey\">\n                  <mat-icon  >delete</mat-icon>\n               </span>\n            </mat-card-actions>\n         </mat-card>\n      </div>\n      <div *ngIf=\"customerGoals.length===0\" class=\"tos-content-color\">No Goals Defined </div>\n   </div>\n   </mat-expansion-panel>\n   <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" [expanded]=\"true\">\n   <mat-expansion-panel-header>\n      <mat-panel-title>\n         <h3>Customer Teams</h3>\n      </mat-panel-title>\n      <mat-panel-description>\n         <!--Currently I am {{panelOpenState ? 'open' : 'closed'}}-->\n      </mat-panel-description>\n   </mat-expansion-panel-header>\n   <div class=\" tos-button-right\">\n      <span  (click)=\"openDialog('teams')\" class=\"tos-add-button\">+</span>\n   </div>\n   <div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\">\n      <div fxFlex=\"30%\" *ngFor = \"let team of customerTeams\">\n         <mat-card class=\"example-card\" >\n            <mat-card-header>\n               <mat-card-title>\n                  <h3 class=\"shake-hover-style\"><span class=\"tos-cust-heading\" (click)=\"navigateViewTeam(team.id)\">{{team.name}}</span></h3>\n               </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n               Specialization:  {{team.specialization}}\n            </mat-card-content>\n            <mat-card-actions>\n               <span (click)=\"openUpdateDialog('teams',team.id)\" style=\"cursor:pointer;color:grey\">\n                  <mat-icon  >create</mat-icon>\n               </span>\n               &emsp;\n               <span (click)=\"delelteEntity('teams',team.id,customerTeams)\" style=\"cursor:pointer; color:grey\">\n                  <mat-icon  >delete</mat-icon>\n               </span>\n            </mat-card-actions>\n         </mat-card>\n      </div>\n      <div *ngIf=\"customerTeams.length===0\" class=\"tos-content-color\">No Teams Assigned </div>\n   </div>\n   </mat-expansion-panel>\n   <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" [expanded]=\"true\">\n   <mat-expansion-panel-header>\n      <mat-panel-title>\n         <h3>StakeHolders</h3>\n      </mat-panel-title>\n      <mat-panel-description>\n         <!--Currently I am {{panelOpenState ? 'open' : 'closed'}}-->\n      </mat-panel-description>\n   </mat-expansion-panel-header>\n   <div class=\" tos-button-right\">\n      <span  (click)=\"openDialog('stakeholders')\" class=\"tos-add-button\">+</span>\n   </div>\n   <div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\">\n      <div fxFlex=\"30%\" *ngFor = \"let sholder of customerStakeholders\">\n         <mat-card class=\"example-card\" >\n            <mat-card-header>\n               <mat-card-title>\n                  <h3><span>{{sholder.name}}</span>\n                    <span class=\"tos-subtitle\" *ngIf=\"sholder.contactPerson === true\"> (Contact Person) </span></h3>\n               </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n               Role: {{sholder.role}} <br>\n               EMail: {{sholder.email}}<br>\n               Contact: {{sholder.phoneNo}}<br>\n            </mat-card-content>\n            <mat-card-actions>\n               <span (click)=\"openUpdateDialog('stakeholders',sholder.id)\" style=\"cursor:pointer;color:grey\">\n                  <mat-icon  >create</mat-icon>\n               </span>\n               &emsp;\n               <span (click)=\"delelteEntity('stakeholders',sholder.id,customerStakeholders)\" style=\"cursor:pointer; color:grey\">\n                  <mat-icon  >delete</mat-icon>\n               </span>\n            </mat-card-actions>\n         </mat-card>\n      </div>\n      <div *ngIf=\"customerStakeholders.length===0\" class=\"tos-content-color\">No StakeHolders Present</div>\n   </div>\n   </mat-expansion-panel>\n   <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" [expanded]=\"true\">\n   <mat-expansion-panel-header>\n      <mat-panel-title>\n         <h3>Travels</h3>\n      </mat-panel-title>\n      <mat-panel-description>\n         <!--Currently I am {{panelOpenState ? 'open' : 'closed'}}-->\n      </mat-panel-description>\n   </mat-expansion-panel-header>\n   <div class=\" tos-button-right\">\n      <span  (click)=\"openDialog('travels')\" class=\"tos-add-button\">+</span>\n   </div>\n   <div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\">\n      <div fxFlex=\"30%\" *ngFor = \"let travel of customerTravels\">\n         <mat-card class=\"example-card\" >\n            <mat-card-header>\n               <mat-card-title>\n                  <h3><span  >Travelling: {{travel.name}}</span></h3>\n               </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n               Travelling from: {{travel.travellingFrom}} To {{travel.travellingTo}}<br>\n               Date: {{travel.travellingFromDate | date : 'd-M-yy'}} To {{travel.travellingToDate | date : 'd-M-yy'}}<br>\n               Purpose: {{travel.purpose}}\n            </mat-card-content>\n            <mat-card-actions>\n               <span (click)=\"openUpdateDialog('travels',travel.id)\" style=\"cursor:pointer;color:grey\">\n                  <mat-icon  >create</mat-icon>\n               </span>\n               &emsp;\n               <span (click)=\"delelteEntity('travels',travel.id,customerTravels)\" style=\"cursor:pointer; color:grey\">\n                  <mat-icon  >delete</mat-icon>\n               </span>\n            </mat-card-actions>\n         </mat-card>\n      </div>\n      <div *ngIf=\"customerTravels.length===0\" class=\"tos-content-color\">No Travels Scheduled</div>\n   </div>\n   </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/customer/customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(values) {
        if (values === void 0) { values = {}; }
        this.id = '';
        this.name = '';
        this.contact = '';
        this.contactPerson = '';
        this.domain = '';
        this.address = '';
        this.country = '';
        this.createdAt = '';
        this.goals = [];
        this.teams = [];
        this.stakeHolders = [];
        this.travels = [];
        Object.assign(this, values);
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/customer/goal/goal-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var GoalDialogComponent = /** @class */ (function () {
    function GoalDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    GoalDialogComponent.prototype.ngOnInit = function () {
    };
    GoalDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'goal-dialog',
            template: __webpack_require__("./src/app/customer/goal/goal-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], GoalDialogComponent);
    return GoalDialogComponent;
}());



/***/ }),

/***/ "./src/app/customer/goal/goal-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data.customerGoal !== undefined\" >\n   <h2 *ngIf=\"data.customerGoal.id === ''\" mat-dialog-title>Create Goal</h2>\n   <h2   *ngIf=\"data.customerGoal.id !== ''\" mat-dialog-title>Update Goal</h2>\n   <mat-dialog-content>\n      <form id=\"formNewGoalUpdate\" name=\"formNewGoalUpdate\"  #goalDataUpdate=\"ngForm\">\n         <mat-form-field >\n            <input matInput placeholder=\"Description\" name=\"description\" [value]=\"data.customerGoal.description\" [(ngModel)]=\"data.customerGoal.description\" ><br>\n         </mat-form-field>\n         <br>\n         <mat-form-field>\n           <mat-select [(value)]=\"selected\" [(ngModel)]=\"data.customerGoal.tenure\" placeholder=\"Tenure\" name=\"tenure\">\n             <mat-option *ngFor=\"let option of data.goalTenures\" [value]=\"option\">\n               {{ option }}\n             </mat-option>\n           </mat-select>\n         </mat-form-field>\n         <br>\n         <mat-form-field >\n            <input matInput placeholder=\"Status\" name=\"status\" [value]=\"data.customerGoal.status\" [(ngModel)]=\"data.customerGoal.status\" >\n         </mat-form-field>\n         <br>\n         <mat-form-field >\n            <input matInput placeholder=\"Signed By\" name=\"signedBy\" [value]=\"data.customerGoal.signedBy\" [(ngModel)]=\"data.customerGoal.signedBy\" >\n         </mat-form-field>\n         <br>\n         <mat-form-field >\n            <textarea matInput placeholder=\"Details\" name=\"details\" [value]=\"data.customerGoal.details\" [(ngModel)]=\"data.customerGoal.details\" ngModel></textarea>\n         </mat-form-field>\n      </form>\n   </mat-dialog-content>\n   <mat-dialog-actions>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customerGoal *ngIf=\"data.customerGoal.id !== ''\">Update</button>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customerGoal *ngIf=\"data.customerGoal.id === ''\">Add</button>\n      <button mat-button mat-dialog-close=\"dialogDismissed\" disableRipple=\"true\" class=\"tos-button\">Cancel</button>\n   </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/customer/goal/goal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Goal; });
var Goal = /** @class */ (function () {
    function Goal(values) {
        if (values === void 0) { values = {}; }
        this.id = '';
        this.description = '';
        this.customerId = '';
        this.tenure = '';
        this.status = '';
        this.notes = '';
        this.signedBy = '';
        this.createdAt = '';
        Object.assign(this, values);
    }
    return Goal;
}());



/***/ }),

/***/ "./src/app/customer/stakeholder/stakeholder-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StakeholderDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var StakeholderDialogComponent = /** @class */ (function () {
    function StakeholderDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    StakeholderDialogComponent.prototype.ngOnInit = function () {
    };
    StakeholderDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'stakeholder-dialog',
            template: __webpack_require__("./src/app/customer/stakeholder/stakeholder-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], StakeholderDialogComponent);
    return StakeholderDialogComponent;
}());



/***/ }),

/***/ "./src/app/customer/stakeholder/stakeholder-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"  data.customerStakeholder!==undefined\" >\r\n   <h2 *ngIf=\"data.customerStakeholder.id === ''\" mat-dialog-title>Create StakeHolder</h2>\r\n   <h2   *ngIf=\"data.customerStakeholder.id !== ''\" mat-dialog-title>Update StakeHolder</h2>\r\n   <mat-dialog-content>\r\n      <form id=\"formNewStakeholderUpdate\" name=\"formNewStakeholderUpdate\"  #stakeholderDataUpdate=\"ngForm\" >\r\n          <mat-checkbox [value]=\"data.customerStakeholder.contactPerson\" name=\"contactPerson\"\r\n           [(ngModel)]=\"data.customerStakeholder.contactPerson\" disableRipple=\"true\">Contact Person</mat-checkbox>\r\n        <br><br>\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Name\" name=\"name\" [value]=\"data.name\" [(ngModel)]=\"data.customerStakeholder.name\" ngModel>\r\n         </mat-form-field><br>\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Role\" name=\"role\" [value]=\"data.customerStakeholder.role\" [(ngModel)]=\"data.customerStakeholder.role\" ngModel>\r\n         </mat-form-field><br>\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Email\" name=\"email\" [value]=\"data.customerStakeholder.email\" [(ngModel)]=\"data.customerStakeholder.email\" ngModel>\r\n         </mat-form-field><br>\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Phone No\" name=\"phoneNo\" [value]=\"data.customerStakeholder.phoneNo\" [(ngModel)]=\"data.customerStakeholder.phoneNo\" ngModel>\r\n         </mat-form-field>\r\n      </form>\r\n   </mat-dialog-content>\r\n   <mat-dialog-actions>\r\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customerStakeholder *ngIf=\"data.customerStakeholder.id !== ''\">Update</button>\r\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customerStakeholder *ngIf=\"data.customerStakeholder.id === ''\">Add</button>\r\n      <button mat-button mat-dialog-close=\"dialogDismissed\" disableRipple=\"true\" class=\"tos-button\">Cancel</button>\r\n   </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customer/stakeholder/stakeholder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stakeholder; });
var Stakeholder = /** @class */ (function () {
    function Stakeholder(values) {
        if (values === void 0) { values = {}; }
        this.id = '';
        this.name = '';
        this.customerId = '';
        this.role = '';
        this.email = '';
        this.phoneNo = '';
        this.contactPerson = false;
        this.createdAt = '';
        Object.assign(this, values);
    }
    return Stakeholder;
}());



/***/ }),

/***/ "./src/app/customer/team/action/action-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ActionDialogComponent = /** @class */ (function () {
    function ActionDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ActionDialogComponent.prototype.ngOnInit = function () {
    };
    ActionDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'action-dialog',
            template: __webpack_require__("./src/app/customer/team/action/action-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], ActionDialogComponent);
    return ActionDialogComponent;
}());



/***/ }),

/***/ "./src/app/customer/team/action/action-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"  data.customerAction!==undefined\" >\n   <h2 *ngIf=\"data.customerAction.id === ''\" mat-dialog-title>Create Action</h2>\n   <h2   *ngIf=\"data.customerAction.id !== ''\" mat-dialog-title>Update Action</h2>\n   <mat-dialog-content>\n      <form id=\"formNewActionUpdate\" name=\"formNewActionUpdate\"  #actionUpdate=\"ngForm\">\n         <mat-form-field >\n            <input matInput placeholder=\"Details\" name=\"details\" [value]=\"data.customerAction.details\" [(ngModel)]=\"data.customerAction.details\" ngModel><br>\n         </mat-form-field><br>\n         <mat-form-field >\n            <input matInput placeholder=\"Cause\" name=\"cause\" [value]=\"data.customerAction.cause\" [(ngModel)]=\"data.customerAction.cause\" ngModel>\n         </mat-form-field><br>\n         <mat-form-field >\n            <input matInput placeholder=\"Platform\" name=\"platform\" [value]=\"data.customerAction.platform\" [(ngModel)]=\"data.customerAction.platform\" ngModel><br>\n         </mat-form-field><br>\n         <mat-form-field >\n            <input matInput placeholder=\"Status\" name=\"status\" [value]=\"data.customerAction.status\" [(ngModel)]=\"data.customerAction.status\" ngModel>\n         </mat-form-field>\n      </form>\n   </mat-dialog-content>\n   <mat-dialog-actions>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customerAction *ngIf=\"data.customerAction.id !== ''\">Update</button>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customerAction *ngIf=\"data.customerAction.id === ''\">Add</button>\n      <button mat-button mat-dialog-close=\"dialogDismissed\" disableRipple=\"true\" class=\"tos-button\">Cancel</button>\n   </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/customer/team/action/action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
var Action = /** @class */ (function () {
    function Action(values) {
        if (values === void 0) { values = {}; }
        this.id = '';
        this.details = '';
        this.teamId = '';
        this.cause = '';
        this.platform = '';
        this.status = '';
        this.createdAt = '';
        Object.assign(this, values);
    }
    return Action;
}());



/***/ }),

/***/ "./src/app/customer/team/projectrythm/projectrythm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectRythmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProjectRythmDialogComponent = /** @class */ (function () {
    function ProjectRythmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ProjectRythmDialogComponent.prototype.ngOnInit = function () {
    };
    ProjectRythmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'projectrythm-dialog',
            template: __webpack_require__("./src/app/customer/team/projectrythm/projectrythm-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], ProjectRythmDialogComponent);
    return ProjectRythmDialogComponent;
}());



/***/ }),

/***/ "./src/app/customer/team/projectrythm/projectrythm-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"  data.customerProjectRythm!==undefined\" >\n   <h2 *ngIf=\"data.customerProjectRythm.id === ''\" mat-dialog-title>Create Project Rythm</h2>\n   <h2   *ngIf=\"data.customerProjectRythm.id !== ''\" mat-dialog-title>Update Project Rythm</h2>\n   <mat-dialog-content>\n      <form id=\"formNewProjectRythmUpdate\" name=\"formNewProjectRythmUpdate\"  #projectRythmUpdate=\"ngForm\">\n         <mat-form-field >\n            <input matInput placeholder=\"Event\" name=\"event\" [value]=\"data.customerProjectRythm.event\" [(ngModel)]=\"data.customerProjectRythm.event\" ngModel><br>\n         </mat-form-field>\n         <br>\n         <mat-form-field>\n           <mat-select [(value)]=\"selected\" [(ngModel)]=\"data.customerProjectRythm.frequency\" placeholder=\"Frequency\" name=\"frequency\">\n             <mat-option *ngFor=\"let option of data.rythmFrequency\" [value]=\"option\">\n               {{ option }}\n             </mat-option>\n           </mat-select>\n         </mat-form-field>\n         <br>\n         <mat-form-field >\n            <input matInput placeholder=\"Who\" name=\"whoRythm\" [value]=\"data.customerProjectRythm.whoRythm\" [(ngModel)]=\"data.customerProjectRythm.whoRythm\" ngModel><br>\n         </mat-form-field>\n         <br>\n         <mat-form-field >\n            <input matInput placeholder=\"Where\" name=\"whereRythm\" [value]=\"data.customerProjectRythm.whereRythm\" [(ngModel)]=\"data.customerProjectRythm.whereRythm\" ngModel>\n         </mat-form-field>\n      </form>\n   </mat-dialog-content>\n   <mat-dialog-actions>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customerProjectRythm *ngIf=\"data.customerProjectRythm.id !== ''\">Update</button>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customerProjectRythm *ngIf=\"data.customerProjectRythm.id === ''\">Add</button>\n      <button mat-button mat-dialog-close=\"dialogDismissed\" disableRipple=\"true\" class=\"tos-button\">Cancel</button>\n   </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/customer/team/projectrythm/projectrythm.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectRythm; });
var ProjectRythm = /** @class */ (function () {
    function ProjectRythm(values) {
        if (values === void 0) { values = {}; }
        this.id = '';
        this.event = '';
        this.teamId = '';
        this.frequency = '';
        this.whoRythm = '';
        this.whereRythm = '';
        this.createdAt = '';
        Object.assign(this, values);
    }
    return ProjectRythm;
}());



/***/ }),

/***/ "./src/app/customer/team/team-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TeamDialogComponent = /** @class */ (function () {
    function TeamDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TeamDialogComponent.prototype.ngOnInit = function () {
    };
    TeamDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'team-dialog',
            template: __webpack_require__("./src/app/customer/team/team-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], TeamDialogComponent);
    return TeamDialogComponent;
}());



/***/ }),

/***/ "./src/app/customer/team/team-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"  data.customerTeam!==undefined\" >\n   <h2 *ngIf=\"data.customerTeam.id === ''\" mat-dialog-title>Create Team</h2>\n   <h2   *ngIf=\"data.customerTeam.id !== ''\" mat-dialog-title>Update Team</h2>\n   <mat-dialog-content>\n      <form id=\"formNewteamrUpdate\" name=\"formNewteamrUpdate\"  #teamDataUpdate=\"ngForm\">\n         <mat-form-field >\n            <input matInput placeholder=\"Name\" name=\"name\" [value]=\"data.customerTeam.name\" [(ngModel)]=\"data.customerTeam.name\" ngModel><br>\n         </mat-form-field><br>\n         <mat-form-field >\n            <input matInput placeholder=\"Specialization\" name=\"specialization\" [value]=\"data.customerTeam.specialization\" [(ngModel)]=\"data.customerTeam.specialization\" ngModel>\n         </mat-form-field>\n      </form>\n   </mat-dialog-content>\n   <mat-dialog-actions>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customerTeam *ngIf=\"data.customerTeam.id !== ''\">Update</button>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customerTeam *ngIf=\"data.customerTeam.id === ''\">Add</button>\n      <button mat-button mat-dialog-close=\"dialogDismissed\" disableRipple=\"true\" class=\"tos-button\">Cancel</button>\n   </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/customer/team/team-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projectrythm_projectrythm_dialog_component__ = __webpack_require__("./src/app/customer/team/projectrythm/projectrythm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__action_action_dialog_component__ = __webpack_require__("./src/app/customer/team/action/action-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teammember_teammember_dialog_component__ = __webpack_require__("./src/app/customer/team/teammember/teammember-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__teammember_teammember__ = __webpack_require__("./src/app/customer/team/teammember/teammember.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__action_action__ = __webpack_require__("./src/app/customer/team/action/action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__projectrythm_projectrythm__ = __webpack_require__("./src/app/customer/team/projectrythm/projectrythm.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TeamViewComponent = /** @class */ (function () {
    function TeamViewComponent(dataService, router, route, dialog, matIconRegistry, domSanitizer) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.employee = [];
        this.employees = [];
        this.customerTeamMembers = [];
        this.customerActions = [];
        this.customerProjectRythms = [];
        this.customerAction = new __WEBPACK_IMPORTED_MODULE_11__action_action__["a" /* Action */]();
        this.customerProjectRythm = new __WEBPACK_IMPORTED_MODULE_12__projectrythm_projectrythm__["a" /* ProjectRythm */]();
        this.customerTeamMember = new __WEBPACK_IMPORTED_MODULE_10__teammember_teammember__["a" /* TeamMember */]();
        this.rythmFrequency = ['Daily', 'Weekly', 'Monthly', 'Quaterly', 'Yearly'];
        this.matIconRegistry.addSvgIcon("bullseye-arrow", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/bullseye-arrow.svg"));
    }
    TeamViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            if (!isNaN(_this.id)) {
                _this.dataService.getEntityData('teams', _this.id)
                    .then(function (resCustomerData) {
                    _this.team = resCustomerData;
                    _this.team.teamMembers.forEach(function (e) { return _this.customerTeamMembers.push(e); });
                    _this.team.actions.forEach(function (e) { return _this.customerActions.push(e); });
                    _this.team.projectRythms.forEach(function (e) { return _this.customerProjectRythms.push(e); });
                }).then(function () {
                    var _loop_1 = function (i) {
                        _this.dataService.getEntityData('employees', _this.customerTeamMembers[i].employeeId)
                            .then(function (resCustomerData) {
                            _this.customerTeamMembers[i].name = resCustomerData.name;
                        });
                    };
                    for (var i = 0; i < _this.customerTeamMembers.length; i++) {
                        _loop_1(i);
                    }
                });
                _this.dataService.getEntityAllData('employees')
                    .then(function (resEmployeeData) {
                    resEmployeeData.forEach(function (e) { return _this.employees.push(e); });
                });
            }
        });
    };
    TeamViewComponent.prototype.openDialog = function (entityName) {
        if (entityName === 'teammembers') {
            this.customerTeamMember = new __WEBPACK_IMPORTED_MODULE_10__teammember_teammember__["a" /* TeamMember */]();
            this.openEntityDialog(__WEBPACK_IMPORTED_MODULE_7__teammember_teammember_dialog_component__["a" /* TeamMemberDialogComponent */], entityName, this.customerTeamMembers);
        }
        else if (entityName === 'actions') {
            this.customerAction = new __WEBPACK_IMPORTED_MODULE_11__action_action__["a" /* Action */]();
            this.openEntityDialog(__WEBPACK_IMPORTED_MODULE_6__action_action_dialog_component__["a" /* ActionDialogComponent */], entityName, this.customerActions);
        }
        else if (entityName === 'projectrythms') {
            this.customerProjectRythm = new __WEBPACK_IMPORTED_MODULE_12__projectrythm_projectrythm__["a" /* ProjectRythm */]();
            this.openEntityDialog(__WEBPACK_IMPORTED_MODULE_5__projectrythm_projectrythm_dialog_component__["a" /* ProjectRythmDialogComponent */], entityName, this.customerProjectRythms);
        }
        else {
            console.log(entityName + " not found");
        }
    };
    TeamViewComponent.prototype.openEntityDialog = function (dialogComponent, entityName, entityArray) {
        var _this = this;
        var dialogRef = this.dialog.open(dialogComponent, {
            data: this
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'dialogDismissed' && result !== undefined) {
                if (entityName === 'teammembers') {
                    _this.addNewTeamMember(entityName, result, entityArray);
                }
                else {
                    _this.addNewEntity(entityName, result, entityArray);
                }
            }
        });
    };
    TeamViewComponent.prototype.addNewEntity = function (entityName, entity, entityArray) {
        entity.teamId = this.id;
        this.dataService.postEntity(entityName, entity)
            .then(function (resCustomerData) {
            entityArray.push(resCustomerData);
        }, function (err) { return console.log("address could not be added :" + err); });
    };
    TeamViewComponent.prototype.addNewTeamMember = function (entityName, entity, entityArray) {
        var _this = this;
        entity.team_Id = this.id;
        this.dataService.postEntity(entityName, entity)
            .then(function (resCustomerData) {
            var tempEntity = resCustomerData;
            _this.dataService.getEntityData('employees', tempEntity.employeeId)
                .then(function (resData) {
                tempEntity.name = resData.name;
            }, function (err) { return console.log("Emplyee name could not be fetched :" + err); });
            entityArray.push(tempEntity);
        }, function (err) { return console.log(entityName + " could not be added :" + err); });
    };
    TeamViewComponent.prototype.openUpdateDialog = function (entityName, id) {
        if (entityName === 'teammembers') {
            this.customerTeamMember = this.customerTeamMembers[this.customerTeamMembers.findIndex(function (e) { return e.id === id; })];
            this.openEntityUpdateDialog(entityName, __WEBPACK_IMPORTED_MODULE_7__teammember_teammember_dialog_component__["a" /* TeamMemberDialogComponent */], id, this.customerTeamMembers);
        }
        else if (entityName === 'actions') {
            this.customerAction = this.customerActions[this.customerActions.findIndex(function (e) { return e.id === id; })];
            this.openEntityUpdateDialog(entityName, __WEBPACK_IMPORTED_MODULE_6__action_action_dialog_component__["a" /* ActionDialogComponent */], id, this.customerActions);
        }
        else if (entityName === 'projectrythms') {
            this.customerProjectRythm = this.customerProjectRythms[this.customerProjectRythms.findIndex(function (e) { return e.id === id; })];
            this.openEntityUpdateDialog(entityName, __WEBPACK_IMPORTED_MODULE_5__projectrythm_projectrythm_dialog_component__["a" /* ProjectRythmDialogComponent */], id, this.customerProjectRythms);
        }
        else {
            console.log(entityName + " not found");
        }
    };
    TeamViewComponent.prototype.openEntityUpdateDialog = function (entityName, dialogComponent, id, entityArray) {
        var _this = this;
        var index = entityArray.findIndex(function (e) { return e.id === id; });
        var entity = entityArray[index];
        var entityCopy = Object.assign({}, entity);
        var dialogRef = this.dialog.open(dialogComponent, {
            data: this
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'dialogDismissed' && result !== undefined) {
                if (entityName === 'teammembers')
                    _this.updateTeamMember(entityName, id, result, entityArray);
                else
                    _this.updateEntity(entityName, id, result, entityArray);
            }
            else {
                entityArray[index] = entityCopy;
            }
        });
    };
    TeamViewComponent.prototype.updateEntity = function (entityName, id, entity, entityArray) {
        this.dataService.updateEntity(entityName, id, entity)
            .then(function (resCustomerData) {
            var index = entityArray.findIndex(function (e) { return e.id === entity.id; });
            entityArray[index] = entity;
        }, function (err) { return console.log(entityName + " could not be updated :" + err); });
    };
    TeamViewComponent.prototype.updateTeamMember = function (entityName, id, entity, entityArray) {
        var _this = this;
        this.dataService.getEntityData('employees', entity.employeeId)
            .then(function (resData) {
            var empName = resData.name;
            _this.dataService.updateEntity(entityName, id, entity)
                .then(function (resCustomerData) {
                var index = entityArray.findIndex(function (e) { return e.id === entity.id; });
                entity.name = empName;
                entityArray[index] = entity;
            }, function (err) { return console.log(entityName + " could not be updated :" + err); });
        }, function (err) { return console.log("employee name could not be fetched :" + err); });
    };
    TeamViewComponent.prototype.navigateViewEmployee = function (id) {
        this.router.navigate(['view/employee', id], { skipLocationChange: false });
    };
    TeamViewComponent.prototype.delelteEntity = function (entityName, id, entityArray) {
        this.dataService.delelteEntity(entityName, id)
            .then(function (resCustomerData) {
            entityArray.splice(entityArray.findIndex(function (i) {
                return i.id === id;
            }), 1);
        }, function (err) { return console.log(entityName + " could not be deleted :" + err); });
    };
    TeamViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'team-view',
            template: __webpack_require__("./src/app/customer/team/team-view.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["trigger"])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["style"])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["transition"])(':enter, :leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["animate"])('200ms ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__["b" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"]])
    ], TeamViewComponent);
    return TeamViewComponent;
}());



/***/ }),

/***/ "./src/app/customer/team/team-view.html":
/***/ (function(module, exports) {

module.exports = "   <div *ngIf=\"team != undefined\">\n      <h2>{{team.name}}</h2>\n    <span class=\"tos-entity-top-content\">\n       <mat-icon svgIcon=\"bullseye-arrow\" title=\"Team Specialization\">bullseye-arrow</mat-icon>\n       <a class=\"tos-text\">{{team.specialization}} &emsp;&emsp;&emsp;</a>\n    </span>\n   </div>\n   <mat-accordion [multi]=\"true\" @fade>\n\n   <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" [expanded]=\"true\">\n     <mat-expansion-panel-header>\n       <mat-panel-title>\n     <h3>Team Members</h3>\n       </mat-panel-title>\n       <mat-panel-description>\n           <!--Currently I am {{panelOpenState ? 'open' : 'closed'}}-->\n       </mat-panel-description>\n     </mat-expansion-panel-header>\n     <div class=\" tos-button-right\">\n       <span  (click)=\"openDialog('teammembers')\" class=\"tos-add-button\">+</span>\n     </div>\n     <div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\">\n        <div fxFlex=\"30%\" *ngFor = \"let member of customerTeamMembers\">\n           <mat-card class=\"example-card\" >\n              <mat-card-header>\n                 <mat-card-title>\n                    <h3 class=\"shake-hover-style\"><span  (click)=\"navigateViewEmployee(member.employeeId)\" class=\"tos-cust-heading\">{{member.name}} </span></h3>\n                </mat-card-title>\n              </mat-card-header>\n              <mat-card-content>\n                 Role :{{member.role}} <br>\n                 Velocity : {{ member.velocity}}\n              </mat-card-content>\n              <mat-card-actions>\n                 <span (click)=\"openUpdateDialog('teammembers',member.id)\" style=\"cursor:pointer;color:grey\"><mat-icon  >create</mat-icon></span>&emsp;\n                 <span (click)=\"delelteEntity('teammembers',member.id,customerTeamMembers )\" style=\"cursor:pointer; color:grey\"><mat-icon  >delete</mat-icon></span>\n              </mat-card-actions>\n           </mat-card>\n        </div>\n        <div *ngIf=\"customerTeamMembers.length===0\" class=\"tos-content-color\">No Team Members</div>\n     </div>\n   </mat-expansion-panel>\n\n   <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" [expanded]=\"true\">\n     <mat-expansion-panel-header>\n       <mat-panel-title>\n     <h3>Actions</h3>\n       </mat-panel-title>\n       <mat-panel-description>\n           <!--Currently I am {{panelOpenState ? 'open' : 'closed'}}-->\n       </mat-panel-description>\n     </mat-expansion-panel-header>\n     <div class=\" tos-button-right\">\n       <span  (click)=\"openDialog('actions')\" class=\"tos-add-button\">+</span>\n     </div>\n     <div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\">\n        <div fxFlex=\"30%\" *ngFor = \"let action of customerActions\">\n           <mat-card class=\"example-card\" >\n              <mat-card-header>\n                 <mat-card-title> <h3><span class=\"tos-cust-heading\"> {{action.details}}</span></h3></mat-card-title>\n        <!--         <mat-card-subtitle> </mat-card-subtitle> -->\n              </mat-card-header>\n              <mat-card-content>\n                 Cause: {{action.cause}}<br>\n                 PLatform: {{action.platform}}<br> Status: {{action.status}}\n              </mat-card-content>\n              <mat-card-actions>\n                <span (click)=\"openUpdateDialog('actions',action.id)\" style=\"cursor:pointer;color:grey\"><mat-icon  >create</mat-icon></span>&emsp;\n                <span (click)=\"delelteEntity('actions',action.id,customerActions)\" style=\"cursor:pointer; color:grey\"><mat-icon  >delete</mat-icon></span>\n              </mat-card-actions>\n           </mat-card>\n        </div>\n        <div *ngIf=\"customerActions.length===0\" class=\"tos-content-color\">No Customer Actions Defined</div>\n     </div>\n   </mat-expansion-panel>\n\n      <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n              <h3>Rythm</h3>\n          </mat-panel-title>\n          <mat-panel-description>\n              <!--Currently I am {{panelOpenState ? 'open' : 'closed'}}-->\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <div class=\" tos-button-right\">\n          <span  (click)=\"openDialog('projectrythms')\" class=\"tos-add-button\">+</span>\n        </div>\n        <div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\">\n           <div fxFlex=\"30%\" *ngFor = \"let projectRythm of customerProjectRythms\">\n              <mat-card class=\"example-card\" >\n                 <mat-card-header>\n                    <mat-card-title><h3><span class=\"tos-cust-heading\">{{projectRythm.event}}</span></h3></mat-card-title>\n                 </mat-card-header>\n                 <mat-card-content>\n                    Frequency: {{projectRythm.frequency}} <br>Who: {{projectRythm.whoRythm}} <br>Where: {{projectRythm.whereRythm}}\n                 </mat-card-content>\n                 <mat-card-actions>\n                   <span (click)=\"openUpdateDialog('projectrythms',projectRythm.id)\" style=\"cursor:pointer;color:grey\"><mat-icon  >create</mat-icon></span>&emsp;\n                   <span (click)=\"delelteEntity('projectrythms',projectRythm.id,customerProjectRythms)\" style=\"cursor:pointer; color:grey\"><mat-icon  >delete</mat-icon></span>\n                 </mat-card-actions>\n              </mat-card>\n           </div>\n           <div *ngIf=\"customerProjectRythms.length===0\" class=\"tos-content-color\">No Project Rythm Available</div>\n        </div>\n      </mat-expansion-panel>\n\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/customer/team/team.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Team; });
var Team = /** @class */ (function () {
    function Team(values) {
        if (values === void 0) { values = {}; }
        this.id = '';
        this.specialization = '';
        this.customerId = '';
        this.name = '';
        this.createdAt = '';
        this.teamMembers = [];
        this.actions = [];
        this.projectRythms = [];
        Object.assign(this, values);
    }
    return Team;
}());



/***/ }),

/***/ "./src/app/customer/team/teammember/teammember-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamMemberDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TeamMemberDialogComponent = /** @class */ (function () {
    function TeamMemberDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TeamMemberDialogComponent.prototype.ngOnInit = function () {
    };
    TeamMemberDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'teammember-dialog',
            template: __webpack_require__("./src/app/customer/team/teammember/teammember-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], TeamMemberDialogComponent);
    return TeamMemberDialogComponent;
}());



/***/ }),

/***/ "./src/app/customer/team/teammember/teammember-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"  data.customerTeamMember!==undefined\" >\n   <h2 *ngIf=\"data.customerTeamMember.id === ''\" mat-dialog-title>Create TeamMember</h2>\n   <h2   *ngIf=\"data.customerTeamMember.id !== ''\" mat-dialog-title>Update TeamMember</h2>\n   <mat-dialog-content>\n      <form id=\"formNewTeamMemberUpdate\" name=\"formNewTeamMemberUpdate\"  #teamMemberUpdate=\"ngForm\">\n        <mat-form-field>\n          <mat-select [(value)]=\"selected\" [(ngModel)]=\"data.customerTeamMember.employeeId\" placeholder=\"Employee\" name=\"employeeId\" >\n            <mat-option *ngFor=\"let employee of data.employees\" [value]=\"employee.id\">\n              {{ employee.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field><br>\n         <mat-form-field >\n            <input matInput placeholder=\"Role\" name=\"role\" [value]=\"data.customerTeamMember.role\" [(ngModel)]=\"data.customerTeamMember.role\" ngModel><br>\n         </mat-form-field><br>\n         <mat-form-field >\n            <input matInput placeholder=\"Velocity (Ave. Story Points/Sprint)\" name=\"velocity\" [value]=\"data.customerTeamMember.velocity\" [(ngModel)]=\"data.customerTeamMember.velocity\" ngModel>\n         </mat-form-field>\n      </form>\n   </mat-dialog-content>\n   <mat-dialog-actions>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customerTeamMember *ngIf=\"data.customerTeamMember.id !== ''\">Update</button>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customerTeamMember *ngIf=\"data.customerTeamMember.id === ''\">Add</button>\n      <button mat-button mat-dialog-close=\"dialogDismissed\" disableRipple=\"true\" class=\"tos-button\">Cancel</button>\n   </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/customer/team/teammember/teammember.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamMember; });
var TeamMember = /** @class */ (function () {
    function TeamMember(values) {
        if (values === void 0) { values = {}; }
        this.id = '';
        this.teamId = '';
        this.role = '';
        this.velocity = '';
        this.employeeId = '';
        this.createdAt = '';
        Object.assign(this, values);
    }
    return TeamMember;
}());



/***/ }),

/***/ "./src/app/customer/travel/travel-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TravelDialogComponent = /** @class */ (function () {
    function TravelDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TravelDialogComponent.prototype.ngOnInit = function () {
    };
    TravelDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'travel-dialog',
            template: __webpack_require__("./src/app/customer/travel/travel-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], TravelDialogComponent);
    return TravelDialogComponent;
}());



/***/ }),

/***/ "./src/app/customer/travel/travel-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"  data.customerTravel!==undefined\" >\n   <h2 *ngIf=\"data.customerTravel.id === ''\" mat-dialog-title>Create Travel</h2>\n   <h2   *ngIf=\"data.customerTravel.id !== ''\" mat-dialog-title>Update Travel</h2>\n   <mat-dialog-content>\n      <form id=\"formNewTravelUpdate\" name=\"formNewTravelUpdate\"  #travelDataUpdate=\"ngForm\">\n         <mat-form-field >\n            <input matInput placeholder=\"Person name\" name=\"name\" [value]=\"data.customerTravel.name\" [(ngModel)]=\"data.customerTravel.name\" ngModel><br>\n         </mat-form-field><br>\n         <mat-form-field >\n            <input matInput placeholder=\"Travel From\" name=\"travellingFrom\" [value]=\"data.customerTravel.travellingFrom\" [(ngModel)]=\"data.customerTravel.travellingFrom\" ngModel>\n         </mat-form-field><br>\n         <mat-form-field >\n            <input matInput placeholder=\"Travel To\" name=\"travellingTo\" [value]=\"data.customerTravel.travellingTo\" [(ngModel)]=\"data.customerTravel.travellingTo\" ngModel>\n         </mat-form-field><br>\n         <mat-form-field>\n            <input matInput name=\"travellingFromDate\" [matDatepicker]=\"picker\" placeholder=\"Travel from Date\"\n            [value]=\"data.customerTravel.travellingFromDate\"\n            [(ngModel)]=\"data.customerTravel.travellingFromDate\" ngModel>\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker  #picker></mat-datepicker>\n         </mat-form-field><br>\n         <mat-form-field>\n            <input matInput name=\"travellingToDate\" [matDatepicker]=\"pickers\" placeholder=\"Travel to Date\"\n            [value]=\"data.customerTravel.travellingToDate\"\n            [(ngModel)]=\"data.customerTravel.travellingToDate\" ngModel>\n            <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\n            <mat-datepicker #pickers></mat-datepicker>\n         </mat-form-field><br>\n         <mat-form-field >\n            <input matInput placeholder=\"Purpose\" name=\"purpose\" [value]=\"data.customerTravel.purpose\" [(ngModel)]=\"data.customerTravel.purpose\" ngModel>\n         </mat-form-field>\n      </form>\n   </mat-dialog-content>\n   <mat-dialog-actions>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customerTravel *ngIf=\"data.customerTravel.id !== ''\">Update</button>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.customerTravel *ngIf=\"data.customerTravel.id === ''\">Add</button>\n      <button mat-button mat-dialog-close=\"dialogDismissed\" disableRipple=\"true\" class=\"tos-button\">Cancel</button>\n   </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/customer/travel/travel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Travel; });
var Travel = /** @class */ (function () {
    function Travel(values) {
        if (values === void 0) { values = {}; }
        this.id = '';
        this.name = '';
        this.customerId = '';
        this.travellingFrom = '';
        this.travellingTo = '';
        this.travellingFromDate = '';
        this.travellingToDate = '';
        this.purpose = '';
        this.createdAt = '';
        Object.assign(this, values);
    }
    return Travel;
}());



/***/ }),

/***/ "./src/app/employee/certification/certification-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificationDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CertificationDialogComponent = /** @class */ (function () {
    function CertificationDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CertificationDialogComponent.prototype.ngOnInit = function () {
    };
    CertificationDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'certification-dialog',
            template: __webpack_require__("./src/app/employee/certification/certification-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], CertificationDialogComponent);
    return CertificationDialogComponent;
}());



/***/ }),

/***/ "./src/app/employee/certification/certification-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"  data.employeeCertification!==undefined\" >\r\n   <h2 *ngIf=\"data.employeeCertification.id === ''\" mat-dialog-title>Add Certification</h2>\r\n   <h2   *ngIf=\"data.employeeCertification.id !== ''\" mat-dialog-title>Update Certification</h2>\r\n   <mat-dialog-content>\r\n      <form id=\"formNewCertificationUpdate\" name=\"formNewCertificationUpdate\"  #certificationDataUpdate=\"ngForm\">\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Name\" name=\"name\" [value]=\"data.employeeCertification.name\" [(ngModel)]=\"data.employeeCertification.name\" ngModel><br>\r\n         </mat-form-field>\r\n         <br>\r\n         <mat-form-field>\r\n            <mat-select [(value)]=\"selected\" [(ngModel)]=\"data.employeeCertification.yearOfCertification\" placeholder=\"Year of Certification\" name=\"yearOfCertification\" >\r\n            <mat-option *ngFor=\"let yearCerti of data.certificationYearOfCertification\" [value]=\"yearCerti\">\r\n            {{ yearCerti }}\r\n            </mat-option>\r\n            </mat-select>\r\n         </mat-form-field>\r\n      </form>\r\n   </mat-dialog-content>\r\n   <mat-dialog-actions>\r\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.employeeCertification *ngIf=\"data.employeeCertification.id !== ''\">Update</button>\r\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.employeeCertification  *ngIf=\"data.employeeCertification.id === ''\">Add</button>\r\n      <button mat-button mat-dialog-close=\"dialogDismissed\" disableRipple=\"true\" class=\"tos-button\">Cancel</button>\r\n   </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/employee/certification/certification.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Certification; });
var Certification = /** @class */ (function () {
    function Certification(values) {
        if (values === void 0) { values = {}; }
        this.id = '';
        this.name = '';
        this.employeeId = '';
        this.yearOfCertification = '';
        this.createdAt = '';
        Object.assign(this, values);
    }
    return Certification;
}());



/***/ }),

/***/ "./src/app/employee/employee-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EmployeeDialogComponent = /** @class */ (function () {
    function EmployeeDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EmployeeDialogComponent.prototype.ngOnInit = function () {
    };
    EmployeeDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'employee-dialog',
            template: __webpack_require__("./src/app/employee/employee-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], EmployeeDialogComponent);
    return EmployeeDialogComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"  data.employee!==undefined \" >\r\n   <h2 *ngIf=\"data.employee.id === ''\" mat-dialog-title>Add Employee</h2>\r\n   <h2   *ngIf=\"data.employee.id !== ''\" mat-dialog-title>Update Employee</h2>\r\n   <mat-dialog-content>\r\n      <form id=\"formNewEmployee2\" name=\"formNewEmployeeUpdate\"  #employeeDataUpdate=\"ngForm\">\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Name\" name=\"name\" [value]=\"data.employee.name\" [(ngModel)]=\"data.employee.name\" ngModel><br>\r\n         </mat-form-field>\r\n         <br>\r\n         <mat-form-field>\r\n            <input matInput name=\"joiningDate\" [matDatepicker]=\"picker\" placeholder=\"Joining Date\"\r\n            [value]=\"data.employee.joiningDate\"\r\n            [(ngModel)]=\"data.employee.joiningDate\" ngModel>\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker  #picker></mat-datepicker>\r\n         </mat-form-field>\r\n         <br>\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Experience (in years)\" name=\"yearsOfExperience\" [value]=\"data.employee.yearsOfExperience\" [(ngModel)]=\"data.employee.yearsOfExperience\" ngModel>\r\n         </mat-form-field>\r\n         <br>\r\n         <mat-form-field >\r\n            <textarea matInput placeholder=\"Responsibilities (Current Project)\" name=\"responsibilities\" [value]=\"data.employee.responsibilities\"\r\n            [(ngModel)]=\"data.employee.responsibilities\" ngModel></textarea>\r\n         </mat-form-field>\r\n      </form>\r\n   </mat-dialog-content>\r\n   <mat-dialog-actions>\r\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.employee *ngIf=\"data.employee.id !== ''\">Update</button>\r\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.employee  *ngIf=\"data.employee.id === ''\">Add</button>\r\n      <button mat-button mat-dialog-close=\"dialogDismissed\" disableRipple=\"true\" class=\"tos-button\">Cancel</button>\r\n   </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/employee/employee-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility_service__ = __webpack_require__("./src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_dialog_component__ = __webpack_require__("./src/app/employee/employee-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employee__ = __webpack_require__("./src/app/employee/employee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EmployeeMainComponent = /** @class */ (function () {
    function EmployeeMainComponent(dataService, router, route, dialog, utilityService) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.utilityService = utilityService;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.employees = [];
        this.employee = new __WEBPACK_IMPORTED_MODULE_6__employee__["a" /* Employee */]();
    }
    EmployeeMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilityService.currentBreadCrumb.subscribe(function (bread) { return _this.bread = bread; });
        this.dataService.getEntityAllData('employees')
            .then(function (resEmployeeData) {
            resEmployeeData.forEach(function (e) { return _this.employees.push(e); });
        }, function (err) { return console.log("employees could not be fetched :" + err); });
    };
    EmployeeMainComponent.prototype.openDialog = function () {
        var _this = this;
        this.employee = new __WEBPACK_IMPORTED_MODULE_6__employee__["a" /* Employee */]();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__employee_dialog_component__["a" /* EmployeeDialogComponent */], {
            data: this
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'dialogDismissed' && result !== undefined) {
                _this.addNewEntity('employees', result, _this.employees);
            }
        });
    };
    EmployeeMainComponent.prototype.addNewEntity = function (entityName, entity, entityArray) {
        this.dataService.postEntity(entityName, entity)
            .then(function (resEmployeeData) {
            entityArray.push(resEmployeeData);
        }, function (err) { return console.log(entityName + " could not be added :" + err); });
    };
    EmployeeMainComponent.prototype.openUpdateDialog = function (id) {
        var _this = this;
        var index = this.employees.findIndex(function (e) { return e.id === id; });
        this.employee = this.employees[index];
        var employeeCopy = Object.assign({}, this.employee);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__employee_dialog_component__["a" /* EmployeeDialogComponent */], {
            data: this
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'dialogDismissed' && result !== undefined) {
                _this.updateEntity('employees', id, result, _this.employees);
            }
            else {
                _this.employees[index] = employeeCopy;
            }
        });
    };
    EmployeeMainComponent.prototype.updateEntity = function (entityName, id, entity, entityArray) {
        this.dataService.updateEntity(entityName, id, entity)
            .then(function (resEmployeeData) {
            var index = entityArray.findIndex(function (e) { return e.id === entity.id; });
            entityArray[index] = entity;
        }, function (err) { return console.log(entityName + " could not be updated :" + err); });
    };
    EmployeeMainComponent.prototype.delelteEmployee = function (id) {
        var _this = this;
        var entity = this.employees[this.employees.findIndex(function (e) { return e.id === id; })];
        if (entity.teamMembers.length > 0) {
            alert("Please unassign employee from all teams before deleting");
        }
        else {
            this.dataService.delelteEntity('employees', id)
                .then(function (resEmployeeData) {
                _this.employees.splice(_this.employees.findIndex(function (i) {
                    return i.id === id;
                }), 1);
            }, function (err) { return console.log("Employee could not be deleted :" + err); });
        }
    };
    EmployeeMainComponent.prototype.navigateViewEmployee = function (id) {
        var entity = this.employees[this.employees.findIndex(function (e) { return e.id === id; })];
        this.utilityService.addBreadCrumb(2, 'Employee', 'view/employee', id, 'entity', entity.name);
        this.router.navigate(['view/employee', id], { skipLocationChange: false });
    };
    EmployeeMainComponent.prototype.checkEntity = function (entity) {
        return this.utilityService.checkEntity(entity);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EmployeeMainComponent.prototype, "notify", void 0);
    EmployeeMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'employee-main',
            template: __webpack_require__("./src/app/employee/employee-main.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["trigger"])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["style"])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["transition"])(':enter, :leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["animate"])('200ms ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */]])
    ], EmployeeMainComponent);
    return EmployeeMainComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee-main.html":
/***/ (function(module, exports) {

module.exports = "   <h3>All Employees</h3>\n   <div class=\" tos-button-right\">\n      <span  (click)=\"openDialog()\" class=\"tos-add-button\">+</span>\n   </div>\n   <div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\"  @fade>\n        <div fxFlex=\"30%\"  *ngFor = \"let emp of employees\">\n         <mat-card class=\"example-card\"  >\n            <mat-card-header>\n               <mat-card-title>\n                  <h3 class=\"shake-hover-style\">\n                    <span (click)=\"navigateViewEmployee(emp.id)\" class=\"tos-cust-heading\"> {{emp.name}}</span>\n                  </h3></mat-card-title>\n          <!--     <mat-card-subtitle><span (click)=\"navigateViewEmployee(emp.id)\" class=\"tos-cust-heading\">Employee Id : {{emp.id}} </span></mat-card-subtitle> -->\n            </mat-card-header>\n            <mat-card-content>\n    <div>\n            <span>   Joining Date: {{emp.joiningDate | date : 'd-M-yy'}} </span><br>\n          <!--  <span> {{emp.responsibilities}}</span><br> -->\n                <span>Experience: {{emp.yearsOfExperience}} years</span>\n             </div>\n            </mat-card-content>\n            <mat-card-actions>\n               <span (click)=\"delelteEmployee(emp.id)\" style=\"cursor:pointer; color:grey\"><mat-icon  >delete</mat-icon></span>&emsp;\n               <span (click)=\"openUpdateDialog(emp.id)\" style=\"cursor:pointer;color:grey\"><mat-icon  >create</mat-icon></span>\n            </mat-card-actions>\n         </mat-card>\n      </div>\n      <div *ngIf=\"checkEntity(employees)\" class=\"tos-content-color\">No employees Present </div>\n   </div>\n"

/***/ }),

/***/ "./src/app/employee/employee-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skill_skill_dialog_component__ = __webpack_require__("./src/app/employee/skill/skill-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__certification_certification_dialog_component__ = __webpack_require__("./src/app/employee/certification/certification-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__training_training_dialog_component__ = __webpack_require__("./src/app/employee/training/training-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feedback_feedback_dialog_component__ = __webpack_require__("./src/app/employee/feedback/feedback-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__improvementarea_improvementarea_dialog_component__ = __webpack_require__("./src/app/employee/improvementarea/improvementarea-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__skill_skill__ = __webpack_require__("./src/app/employee/skill/skill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__improvementarea_improvementarea__ = __webpack_require__("./src/app/employee/improvementarea/improvementarea.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__feedback_feedback__ = __webpack_require__("./src/app/employee/feedback/feedback.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__certification_certification__ = __webpack_require__("./src/app/employee/certification/certification.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__training_training__ = __webpack_require__("./src/app/employee/training/training.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var EmployeeViewComponent = /** @class */ (function () {
    function EmployeeViewComponent(dataService, router, route, dialog) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.employeeSkills = [];
        this.employeeCertifications = [];
        this.employeeTrainings = [];
        this.employeeFeedbacks = [];
        this.employeeImprovementAreas = [];
        this.employeeTeamMembers = [];
        this.employeeSkill = new __WEBPACK_IMPORTED_MODULE_9__skill_skill__["a" /* Skill */]();
        this.employeeCertification = new __WEBPACK_IMPORTED_MODULE_12__certification_certification__["a" /* Certification */]();
        this.employeeTraining = new __WEBPACK_IMPORTED_MODULE_13__training_training__["a" /* Training */]();
        this.employeeFeedback = new __WEBPACK_IMPORTED_MODULE_11__feedback_feedback__["a" /* Feedback */]();
        this.employeeImprovementArea = new __WEBPACK_IMPORTED_MODULE_10__improvementarea_improvementarea__["a" /* ImprovementArea */]();
        this.skillRatings = ['1', '2', '3', '4', '5'];
        this.trainingModes = ['online', 'On-site', 'Live On-Line', 'On Demand', 'Classroom'];
        this.certificationYearOfCertification = [];
        this.teams = [];
        this.Arr = Array; //Array type captured in a variable
    }
    EmployeeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var date = new Date();
        this.certificationCurrentYear = date.getFullYear();
        var startYear = this.certificationCurrentYear - 25;
        for (var i = this.certificationCurrentYear; i >= startYear; i--) {
            this.certificationYearOfCertification.push(i.toString());
        }
        this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            if (!isNaN(_this.id)) {
                _this.dataService.getEntityData('employees', _this.id)
                    .then(function (resemployeeData) {
                    _this.employee = resemployeeData;
                    _this.employee.skills.forEach(function (e) { return _this.employeeSkills.push(e); });
                    _this.employee.certifications.forEach(function (e) { return _this.employeeCertifications.push(e); });
                    _this.employee.trainings.forEach(function (e) { return _this.employeeTrainings.push(e); });
                    _this.employee.feedbacks.forEach(function (e) { return _this.employeeFeedbacks.push(e); });
                    _this.employee.improvementAreas.forEach(function (e) { return _this.employeeImprovementAreas.push(e); });
                    _this.employee.teamMembers.forEach(function (e) { return _this.employeeTeamMembers.push(e); });
                })
                    .then(function () {
                    var _loop_1 = function (i) {
                        _this.dataService.getEntityData('teams', _this.employeeTeamMembers[i].team_Id)
                            .then(function (resCustomerData) {
                            _this.teams[i] = resCustomerData;
                        });
                    };
                    for (var i = 0; i < _this.employeeTeamMembers.length; i++) {
                        _loop_1(i);
                    }
                });
            }
        });
    };
    EmployeeViewComponent.prototype.openDialog = function (entityName) {
        if (entityName === 'skills') {
            this.employeeSkill = new __WEBPACK_IMPORTED_MODULE_9__skill_skill__["a" /* Skill */]();
            this.openEntityDialog(__WEBPACK_IMPORTED_MODULE_4__skill_skill_dialog_component__["a" /* SkillDialogComponent */], entityName, this.employeeSkills);
        }
        else if (entityName === 'certifications') {
            this.employeeCertification = new __WEBPACK_IMPORTED_MODULE_12__certification_certification__["a" /* Certification */]();
            this.openEntityDialog(__WEBPACK_IMPORTED_MODULE_5__certification_certification_dialog_component__["a" /* CertificationDialogComponent */], entityName, this.employeeCertifications);
        }
        else if (entityName === 'trainings') {
            this.employeeTraining = new __WEBPACK_IMPORTED_MODULE_13__training_training__["a" /* Training */]();
            this.openEntityDialog(__WEBPACK_IMPORTED_MODULE_6__training_training_dialog_component__["a" /* TrainingDialogComponent */], entityName, this.employeeTrainings);
        }
        else if (entityName === 'feedbacks') {
            this.employeeFeedback = new __WEBPACK_IMPORTED_MODULE_11__feedback_feedback__["a" /* Feedback */]();
            this.openEntityDialog(__WEBPACK_IMPORTED_MODULE_7__feedback_feedback_dialog_component__["a" /* FeedbackDialogComponent */], entityName, this.employeeFeedbacks);
        }
        else if (entityName === 'improvementareas') {
            this.employeeImprovementArea = new __WEBPACK_IMPORTED_MODULE_10__improvementarea_improvementarea__["a" /* ImprovementArea */]();
            this.openEntityDialog(__WEBPACK_IMPORTED_MODULE_8__improvementarea_improvementarea_dialog_component__["a" /* ImprovementAreaDialogComponent */], entityName, this.employeeImprovementAreas);
        }
        else {
            console.log(entityName + " not found");
        }
    };
    EmployeeViewComponent.prototype.openEntityDialog = function (dialogComponent, entityName, entityArray) {
        var _this = this;
        var dialogRef = this.dialog.open(dialogComponent, {
            data: this
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'dialogDismissed' && result !== undefined) {
                _this.addNewEntity(entityName, result, entityArray);
            }
        });
    };
    EmployeeViewComponent.prototype.addNewEntity = function (entityName, entity, entityArray) {
        entity.employeeId = this.id;
        this.dataService.postEntity(entityName, entity)
            .then(function (resCustomerData) {
            entityArray.push(resCustomerData);
        }, function (err) { return console.log(entityName + " could not be added :" + err); });
    };
    EmployeeViewComponent.prototype.openUpdateDialog = function (entityName, id) {
        if (entityName === 'skills') {
            this.employeeSkill = this.employeeSkills[this.employeeSkills.findIndex(function (e) { return e.id === id; })];
            this.openEntityUpdateDialog(entityName, __WEBPACK_IMPORTED_MODULE_4__skill_skill_dialog_component__["a" /* SkillDialogComponent */], id, this.employeeSkills);
        }
        else if (entityName === 'certifications') {
            this.employeeCertification = this.employeeCertifications[this.employeeCertifications.findIndex(function (e) { return e.id === id; })];
            this.openEntityUpdateDialog(entityName, __WEBPACK_IMPORTED_MODULE_5__certification_certification_dialog_component__["a" /* CertificationDialogComponent */], id, this.employeeCertifications);
        }
        else if (entityName === 'trainings') {
            this.employeeTraining = this.employeeTrainings[this.employeeTrainings.findIndex(function (e) { return e.id === id; })];
            this.openEntityUpdateDialog(entityName, __WEBPACK_IMPORTED_MODULE_6__training_training_dialog_component__["a" /* TrainingDialogComponent */], id, this.employeeTrainings);
        }
        else if (entityName === 'feedbacks') {
            this.employeeFeedback = this.employeeFeedbacks[this.employeeFeedbacks.findIndex(function (e) { return e.id === id; })];
            this.openEntityUpdateDialog(entityName, __WEBPACK_IMPORTED_MODULE_7__feedback_feedback_dialog_component__["a" /* FeedbackDialogComponent */], id, this.employeeFeedbacks);
        }
        else if (entityName === 'improvementareas') {
            this.employeeImprovementArea = this.employeeImprovementAreas[this.employeeImprovementAreas.findIndex(function (e) { return e.id === id; })];
            this.openEntityUpdateDialog(entityName, __WEBPACK_IMPORTED_MODULE_8__improvementarea_improvementarea_dialog_component__["a" /* ImprovementAreaDialogComponent */], id, this.employeeImprovementAreas);
        }
        else {
            console.log(entityName + " not found");
        }
    };
    EmployeeViewComponent.prototype.openEntityUpdateDialog = function (entityName, dialogComponent, id, entityArray) {
        var _this = this;
        var index = entityArray.findIndex(function (e) { return e.id === id; });
        var entity = entityArray[index];
        var entityCopy = Object.assign({}, entity);
        var dialogRef = this.dialog.open(dialogComponent, {
            data: this
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'dialogDismissed' && result !== undefined) {
                _this.updateEntity(entityName, id, result, entityArray);
            }
            else {
                entityArray[index] = entityCopy;
            }
        });
    };
    EmployeeViewComponent.prototype.updateEntity = function (entityName, id, entity, entityArray) {
        this.dataService.updateEntity(entityName, id, entity)
            .then(function (resCustomerData) {
            var index = entityArray.findIndex(function (e) { return e.id === entity.id; });
            entityArray[index] = entity;
        }, function (err) { return console.log(entityName + " could not be updated :" + err); });
    };
    EmployeeViewComponent.prototype.navigateViewTeam = function (teamId) {
        this.router.navigate(['view/team', teamId], { skipLocationChange: false });
    };
    EmployeeViewComponent.prototype.delelteEntity = function (entityName, id, entityArray) {
        this.dataService.delelteEntity(entityName, id)
            .then(function (resCustomerData) {
            entityArray.splice(entityArray.findIndex(function (i) {
                return i.id === id;
            }), 1);
        }, function (err) { return console.log(entityName + " could not be deleted :" + err); });
    };
    EmployeeViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'employee-view',
            template: __webpack_require__("./src/app/employee/employee-view.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_14__angular_animations__["trigger"])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_14__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_14__angular_animations__["style"])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_14__angular_animations__["transition"])(':enter, :leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_14__angular_animations__["animate"])('200ms ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialog */]])
    ], EmployeeViewComponent);
    return EmployeeViewComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee-view.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"employee != undefined\">\n   <h2>{{employee.name}} </h2>\n   <span class=\"tos-entity-top-content\">\n   <a class=\"tos-text\"> <b> Joining Date : </b> {{employee.joiningDate | date : 'd-M-yy'}}  &emsp;&emsp;&emsp;</a>\n   <a class=\"tos-text\"><b> Responsibilities : </b> {{employee.responsibilities}} &emsp;&emsp;&emsp;</a>\n   <a class=\"tos-text\"> <b> Total years of Experience : </b> {{employee.yearsOfExperience}}  </a>\n   </span>\n</div>\n<mat-accordion [multi]=\"true\" @fade>\n<mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" [expanded]=\"true\">\n<mat-expansion-panel-header>\n   <mat-panel-title>\n      <h3>Skills</h3>\n   </mat-panel-title>\n   <mat-panel-description>\n      <!--Currently I am {{panelOpenState ? 'open' : 'closed'}}-->\n   </mat-panel-description>\n</mat-expansion-panel-header>\n<div class=\" tos-button-right\">\n   <span  (click)=\"openDialog('skills')\" class=\"tos-add-button\">+</span>\n</div>\n<div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\">\n   <div fxFlex=\"30%\" *ngFor = \"let skill of employeeSkills\" >\n      <mat-card class=\"example-card\" >\n         <mat-card-header>\n            <mat-card-title>\n               <h3><span class=\"tos-cust-heading\"> {{skill.name}}</span></h3>\n               <span *ngIf=\"skill.rating !== ''\" class=\"tos-stars\">\n                  <a class=\"tos-rating\" *ngFor=\"let i of Arr(+skill.rating).fill(1)\">\n                     <mat-icon >star rate</mat-icon>\n                  </a>\n               </span>\n            </mat-card-title>\n         </mat-card-header>\n         <mat-card-content>\n            Worked for: {{skill.duration}} months<br>Last Used: {{skill.lastUsed}}<br>\n         </mat-card-content>\n         <mat-card-actions>\n            <span (click)=\"openUpdateDialog('skills',skill.id)\" style=\"cursor:pointer;color:grey\">\n               <mat-icon>create</mat-icon>\n            </span>\n            &emsp;\n            <span (click)=\"delelteEntity('skills', skill.id, employeeSkills )\" style=\"cursor:pointer; color:grey\">\n               <mat-icon>delete</mat-icon>\n            </span>\n         </mat-card-actions>\n      </mat-card>\n   </div>\n   <div *ngIf=\"employeeSkills.length===0\"  class=\"tos-content-color\">No Skills Updated </div>\n</div>\n</mat-expansion-panel>\n<mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" [expanded]=\"true\">\n<mat-expansion-panel-header>\n   <mat-panel-title>\n      <h3>Certifications</h3>\n   </mat-panel-title>\n   <mat-panel-description>\n      <!--Currently I am {{panelOpenState ? 'open' : 'closed'}}-->\n   </mat-panel-description>\n</mat-expansion-panel-header>\n<div class=\" tos-button-right\">\n   <span  (click)=\"openDialog('certifications')\" class=\"tos-add-button\">+</span>\n</div>\n<div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\">\n   <div fxFlex=\"30%\" *ngFor = \"let certification of employeeCertifications\">\n      <mat-card class=\"example-card\" >\n         <mat-card-header>\n            <mat-card-title>\n               <h3><span class=\"tos-cust-heading\"> {{certification.name}}</span></h3>\n            </mat-card-title>\n         </mat-card-header>\n         <mat-card-content>\n            Certification Year : {{certification.yearOfCertification}}\n         </mat-card-content>\n         <mat-card-actions>\n            <span (click)=\"openUpdateDialog('certifications',certification.id)\" style=\"cursor:pointer;color:grey\">\n               <mat-icon  >create</mat-icon>\n            </span>\n            &emsp;\n            <span (click)=\"delelteEntity('certifications', certification.id, employeeCertifications)\" style=\"cursor:pointer; color:grey\">\n               <mat-icon  >delete</mat-icon>\n            </span>\n         </mat-card-actions>\n      </mat-card>\n   </div>\n   <div *ngIf=\"employeeCertifications.length===0\"  class=\"tos-content-color\">No Certifications </div>\n</div>\n</mat-expansion-panel>\n<mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" [expanded]=\"true\">\n<mat-expansion-panel-header>\n   <mat-panel-title>\n      <h3>Trainings</h3>\n   </mat-panel-title>\n   <mat-panel-description>\n      <!--Currently I am {{panelOpenState ? 'open' : 'closed'}}-->\n   </mat-panel-description>\n</mat-expansion-panel-header>\n<div class=\" tos-button-right\">\n   <span  (click)=\"openDialog('trainings')\" class=\"tos-add-button\">+</span>\n</div>\n<div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\">\n   <div fxFlex=\"30%\" *ngFor = \"let training of employeeTrainings\">\n      <mat-card class=\"example-card\" >\n         <mat-card-header>\n            <mat-card-title>\n               <h3><span class=\"tos-cust-heading\"> {{training.name}}</span></h3>\n            </mat-card-title>\n            <!--     <mat-card-subtitle>Trainings</mat-card-subtitle> -->\n         </mat-card-header>\n         <mat-card-content>\n            Mode : {{ training.mode}}<br>Training proposed Date : {{ training.proposedDate | date : 'd-M-yy'}}\n            <br>Reason: {{ training.reason}}\n         </mat-card-content>\n         <mat-card-actions>\n            <span (click)=\"openUpdateDialog('trainings',training.id)\" style=\"cursor:pointer;color:grey\">\n               <mat-icon  >create</mat-icon>\n            </span>\n            &emsp;\n            <span (click)=\"delelteEntity('trainings', training.id, employeeTrainings )\" style=\"cursor:pointer; color:grey\">\n               <mat-icon  >delete</mat-icon>\n            </span>\n         </mat-card-actions>\n      </mat-card>\n   </div>\n   <div *ngIf=\"employeeTrainings.length===0\" class=\"tos-content-color\">No Trainings scheduled </div>\n</div>\n</mat-expansion-panel>\n<mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" [expanded]=\"true\">\n<mat-expansion-panel-header>\n   <mat-panel-title>\n      <h3>Feedbacks</h3>\n   </mat-panel-title>\n   <mat-panel-description>\n      <!--Currently I am {{panelOpenState ? 'open' : 'closed'}}-->\n   </mat-panel-description>\n</mat-expansion-panel-header>\n<div class=\" tos-button-right\">\n   <span  (click)=\"openDialog('feedbacks')\" class=\"tos-add-button\">+</span>\n</div>\n<div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\">\n   <div fxFlex=\"30%\" *ngFor = \"let feedback of employeeFeedbacks\">\n      <mat-card class=\"example-card\" >\n         <mat-card-header>\n            <mat-card-title>\n               <h3><span class=\"tos-cust-heading\">{{feedback.feedback}}</span></h3>\n            </mat-card-title>\n         </mat-card-header>\n         <mat-card-content>\n            Recieved From: {{feedback.receivedFrom}} <br>Action Taken: {{feedback.actionsTaken}}<br>\n         </mat-card-content>\n         <mat-card-actions>\n            <span (click)=\"openUpdateDialog('feedbacks',feedback.id)\" style=\"cursor:pointer;color:grey\">\n               <mat-icon  >create</mat-icon>\n            </span>\n            &emsp;\n            <span (click)=\"delelteEntity('feedbacks', feedback.id, employeeFeedbacks)\" style=\"cursor:pointer; color:grey\">\n               <mat-icon  >delete</mat-icon>\n            </span>\n         </mat-card-actions>\n      </mat-card>\n   </div>\n   <div *ngIf=\"employeeFeedbacks.length===0\"  class=\"tos-content-color\">No Feedbacks</div>\n</div>\n</mat-expansion-panel>\n<mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" [expanded]=\"true\">\n<mat-expansion-panel-header>\n   <mat-panel-title>\n      <h3>Improvement Areas</h3>\n   </mat-panel-title>\n   <mat-panel-description>\n      <!--Currently I am {{panelOpenState ? 'open' : 'closed'}}-->\n   </mat-panel-description>\n</mat-expansion-panel-header>\n<div class=\" tos-button-right\">\n   <span  (click)=\"openDialog('improvementareas')\" class=\"tos-add-button\">+</span>\n</div>\n<div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\">\n   <div fxFlex=\"30%\" *ngFor = \"let improvementArea of employeeImprovementAreas\">\n      <mat-card class=\"example-card\" >\n         <mat-card-header>\n            <mat-card-title>\n               <h3><span class=\"tos-cust-heading\">{{improvementArea.areasOfImprovement}}</span></h3>\n            </mat-card-title>\n         </mat-card-header>\n         <mat-card-content>\n            Plan : {{improvementArea.improvementPlan}} <br>\n            Proposed Date: {{improvementArea.proposedDate | date : 'd-M-yy'}}<br>\n         </mat-card-content>\n         <mat-card-actions>\n            <span (click)=\"openUpdateDialog('improvementareas', improvementArea.id)\" style=\"cursor:pointer;color:grey\">\n               <mat-icon  >create</mat-icon>\n            </span>\n            &emsp;\n            <span (click)=\"delelteEntity('improvementareas', improvementArea.id, employeeImprovementAreas )\" style=\"cursor:pointer; color:grey\">\n               <mat-icon  >delete</mat-icon>\n            </span>\n         </mat-card-actions>\n      </mat-card>\n   </div>\n   <div *ngIf=\"employeeImprovementAreas.length===0\"  class=\"tos-content-color\">No improvement Areas Defined </div>\n</div>\n</mat-expansion-panel>\n<mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\" [expanded]=\"true\">\n<mat-expansion-panel-header>\n   <mat-panel-title>\n      <h3>Teams</h3>\n   </mat-panel-title>\n   <mat-panel-description>\n      <!--Currently I am {{panelOpenState ? 'open' : 'closed'}}-->\n   </mat-panel-description>\n</mat-expansion-panel-header>\n<div class=\"container\" fxlayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"flex-start\">\n   <div fxFlex=\"30%\" *ngFor = \"let team of teams\">\n      <mat-card class=\"example-card\" >\n         <mat-card-header>\n            <mat-card-title>\n              <h3 class=\"shake-hover-style\"><span (click)=\"navigateViewTeam(team.id)\" class=\"tos-cust-heading\">{{team.name}} </span></h3>\n            </mat-card-title>\n         </mat-card-header>\n         <mat-card-content><span (click)=\"navigateViewTeam(team.id)\" class=\"tos-cust-heading\"> {{team.specialization}} <br></span>\n         </mat-card-content>\n         <mat-card-actions>\n         </mat-card-actions>\n      </mat-card>\n   </div>\n   <div *ngIf=\"teams.length===0\"  class=\"tos-content-color\">No Teams Present </div>\n</div>\n</mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/employee/employee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee(values) {
        if (values === void 0) { values = {}; }
        this.id = '';
        this.name = '';
        this.joiningDate = '';
        this.yearsOfExperience = '';
        this.responsibilities = '';
        this.createdAt = '';
        this.skills = [];
        this.certifications = [];
        this.trainings = [];
        this.feedbacks = [];
        this.improvementAreas = [];
        this.teamMembers = [];
        Object.assign(this, values);
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/employee/feedback/feedback-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FeedbackDialogComponent = /** @class */ (function () {
    function FeedbackDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FeedbackDialogComponent.prototype.ngOnInit = function () {
    };
    FeedbackDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'feedback-dialog',
            template: __webpack_require__("./src/app/employee/feedback/feedback-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], FeedbackDialogComponent);
    return FeedbackDialogComponent;
}());



/***/ }),

/***/ "./src/app/employee/feedback/feedback-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"  data.employeeFeedback!==undefined \" >\n   <h2 *ngIf=\"data.employeeFeedback.id === ''\" mat-dialog-title>Add Feedback</h2>\n   <h2   *ngIf=\"data.employeeFeedback.id !== ''\" mat-dialog-title>Update Feedback</h2>\n   <mat-dialog-content>\n      <form id=\"formNewFeedbackUpdate\" name=\"formNewFeedbackUpdate\"  #feedbackDataUpdate=\"ngForm\">\n         <mat-form-field >\n            <input matInput placeholder=\"Feedback\" name=\"feedback\" [value]=\"data.employeeFeedback.feedback\" [(ngModel)]=\"data.employeeFeedback.feedback\" ngModel><br>\n         </mat-form-field>\n         <br>\n         <mat-form-field >\n            <input matInput placeholder=\"Received From\" name=\"receivedFrom\" [value]=\"data.employeeFeedback.receivedFrom\" [(ngModel)]=\"data.employeeFeedback.receivedFrom\" ngModel>\n         </mat-form-field>\n         <br>\n         <mat-form-field >\n            <input matInput placeholder=\"Actions Taken\" name=\"actionsTaken\" [value]=\"data.employeeFeedback.actionsTaken\" [(ngModel)]=\"data.employeeFeedback.actionsTaken\" ngModel><br>\n         </mat-form-field>\n         <br>\n      </form>\n   </mat-dialog-content>\n   <mat-dialog-actions>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.employeeFeedback *ngIf=\"data.employeeFeedback.id !== ''\">Update</button>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.employeeFeedback  *ngIf=\"data.employeeFeedback.id === ''\">Add</button>\n      <button mat-button mat-dialog-close=\"dialogDismissed\" disableRipple=\"true\" class=\"tos-button\">Cancel</button>\n   </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/employee/feedback/feedback.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feedback; });
var Feedback = /** @class */ (function () {
    function Feedback(values) {
        if (values === void 0) { values = {}; }
        this.id = '';
        this.feedback = '';
        this.employeeId = '';
        this.receivedFrom = '';
        this.actionsTaken = '';
        this.createdAt = '';
        Object.assign(this, values);
    }
    return Feedback;
}());



/***/ }),

/***/ "./src/app/employee/improvementarea/improvementarea-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImprovementAreaDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ImprovementAreaDialogComponent = /** @class */ (function () {
    function ImprovementAreaDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ImprovementAreaDialogComponent.prototype.ngOnInit = function () {
    };
    ImprovementAreaDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'improvementarea-dialog',
            template: __webpack_require__("./src/app/employee/improvementarea/improvementarea-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], ImprovementAreaDialogComponent);
    return ImprovementAreaDialogComponent;
}());



/***/ }),

/***/ "./src/app/employee/improvementarea/improvementarea-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"  data.employeeImprovementArea!==undefined\" >\n   <h2 *ngIf=\"data.employeeImprovementArea.id === ''\" mat-dialog-title>Add ImprovementArea</h2>\n   <h2   *ngIf=\"data.employeeImprovementArea.id !== ''\" mat-dialog-title>Update Improvements</h2>\n   <mat-dialog-content>\n      <form id=\"formNewImprovementAreaUpdate\" name=\"formNewImprovementAreaUpdate\"  #improvementAreaDataUpdate=\"ngForm\">\n         <mat-form-field >\n            <input matInput placeholder=\"Areas of Improvement\" name=\"areasOfImprovement\" [value]=\"data.employeeImprovementArea.areasOfImprovement\" [(ngModel)]=\"data.employeeImprovementArea.areasOfImprovement\" ngModel><br>\n         </mat-form-field>\n         <br>\n         <mat-form-field >\n            <input matInput placeholder=\"Improvement Plan\" name=\"improvementPlan\" [value]=\"data.employeeImprovementArea.improvementPlan\" [(ngModel)]=\"data.employeeImprovementArea.improvementPlan\" ngModel>\n         </mat-form-field>\n         <br>\n         <mat-form-field>\n            <input matInput name=\"proposedDate\" [matDatepicker]=\"picker\" placeholder=\"Proposed Date\"\n            [value]=\"data.employeeImprovementArea.proposedDate\"\n            [(ngModel)]=\"data.employeeImprovementArea.proposedDate\" ngModel>\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker  #picker></mat-datepicker>\n         </mat-form-field>\n      </form>\n   </mat-dialog-content>\n   <mat-dialog-actions>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.employeeImprovementArea *ngIf=\"data.employeeImprovementArea.id !== ''\">Update</button>\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.employeeImprovementArea  *ngIf=\"data.employeeImprovementArea.id === ''\">Add</button>\n      <button mat-button mat-dialog-close=\"dialogDismissed\" disableRipple=\"true\" class=\"tos-button\">Cancel</button>\n   </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/employee/improvementarea/improvementarea.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImprovementArea; });
var ImprovementArea = /** @class */ (function () {
    function ImprovementArea(values) {
        if (values === void 0) { values = {}; }
        this.id = '';
        this.areasOfImprovement = '';
        this.employeeId = '';
        this.improvementPlan = '';
        this.proposedDate = '';
        this.createdAt = '';
        Object.assign(this, values);
    }
    return ImprovementArea;
}());



/***/ }),

/***/ "./src/app/employee/skill/skill-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SkillDialogComponent = /** @class */ (function () {
    function SkillDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    SkillDialogComponent.prototype.ngOnInit = function () {
    };
    SkillDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'skill-dialog',
            template: __webpack_require__("./src/app/employee/skill/skill-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], SkillDialogComponent);
    return SkillDialogComponent;
}());



/***/ }),

/***/ "./src/app/employee/skill/skill-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"  data.employeeSkill!==undefined \" >\r\n   <h2 *ngIf=\"data.employeeSkill.id === ''\" mat-dialog-title>Add Skill</h2>\r\n   <h2   *ngIf=\"data.employeeSkill.id !== ''\" mat-dialog-title>Update Skill</h2>\r\n   <mat-dialog-content>\r\n      <form id=\"formNewSkillUpdate\" name=\"formNewSkillUpdate\"  #skillDataUpdate=\"ngForm\">\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Name\" name=\"name\" [value]=\"data.employeeSkill.name\" [(ngModel)]=\"data.employeeSkill.name\" ngModel><br>\r\n         </mat-form-field><br>\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Duration( in months)\" name=\"duration\" [value]=\"data.employeeSkill.duration\" [(ngModel)]=\"data.employeeSkill.duration\" ngModel>\r\n         </mat-form-field><br>\r\n          <mat-form-field>\r\n            <mat-select [(value)]=\"selected\" [(ngModel)]=\"data.employeeSkill.rating\" placeholder=\"Rating\" name=\"rating\">\r\n              <mat-option *ngFor=\"let rating of data.skillRatings\" [value]=\"rating\">\r\n                {{ rating }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field><br>\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Last Worked on\" name=\"lastUsed\" [value]=\"data.employeeSkill.lastUsed\" [(ngModel)]=\"data.employeeSkill.lastUsed\" ngModel>\r\n         </mat-form-field>\r\n      </form>\r\n   </mat-dialog-content>\r\n   <mat-dialog-actions>\r\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.employeeSkill *ngIf=\"data.employeeSkill.id !== ''\">Update</button>\r\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.employeeSkill  *ngIf=\"data.employeeSkill.id === ''\">Add</button>\r\n      <button mat-button mat-dialog-close=\"dialogDismissed\" disableRipple=\"true\" class=\"tos-button\">Cancel</button>\r\n   </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/employee/skill/skill.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skill; });
var Skill = /** @class */ (function () {
    function Skill(values) {
        if (values === void 0) { values = {}; }
        this.id = '';
        this.name = '';
        this.employeeId = '';
        this.duration = '';
        this.rating = '';
        this.lastUsed = '';
        this.createdAt = '';
        Object.assign(this, values);
    }
    return Skill;
}());



/***/ }),

/***/ "./src/app/employee/training/training-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TrainingDialogComponent = /** @class */ (function () {
    function TrainingDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TrainingDialogComponent.prototype.ngOnInit = function () {
    };
    TrainingDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'training-dialog',
            template: __webpack_require__("./src/app/employee/training/training-dialog.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], TrainingDialogComponent);
    return TrainingDialogComponent;
}());



/***/ }),

/***/ "./src/app/employee/training/training-dialog.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"  data.employeeTraining!==undefined\" >\r\n   <h2 *ngIf=\"data.employeeTraining.id === ''\" mat-dialog-title>Add Training</h2>\r\n   <h2   *ngIf=\"data.employeeTraining.id !== ''\" mat-dialog-title>Update Training</h2>\r\n   <mat-dialog-content>\r\n      <form id=\"formNewTrainingUpdate\" name=\"formNewTrainingUpdate\"  #trainingDataUpdate=\"ngForm\">\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Name\" name=\"name\" [value]=\"data.employeeTraining.name\" [(ngModel)]=\"data.employeeTraining.name\" ngModel><br>\r\n         </mat-form-field>\r\n         <br>\r\n         <mat-form-field>\r\n            <mat-select [(value)]=\"selected\" [(ngModel)]=\"data.employeeTraining.mode\" placeholder=\"Mode\" name=\"mode\" >\r\n            <mat-option *ngFor=\"let mode of data.trainingModes\" [value]=\"mode\">\r\n            {{ mode }}\r\n            </mat-option>\r\n            </mat-select>\r\n         </mat-form-field>\r\n         <br>\r\n         <mat-form-field>\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Proposed Date\" name=\"proposedDate\"\r\n            [value]=\"data.employeeTraining.proposedDate\"\r\n            [(ngModel)]=\"data.employeeTraining.proposedDate\" ngModel>\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker  #picker></mat-datepicker>\r\n         </mat-form-field>\r\n         <br>\r\n         <mat-form-field >\r\n            <input matInput placeholder=\"Reason\" name=\"reason\" [value]=\"data.employeeTraining.reason\" [(ngModel)]=\"data.employeeTraining.reason\" ngModel>\r\n         </mat-form-field>\r\n      </form>\r\n   </mat-dialog-content>\r\n   <mat-dialog-actions>\r\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.employeeTraining *ngIf=\"data.employeeTraining.id !== ''\">Update</button>\r\n      <button mat-raised-button class=\"tos-primary-button\" [mat-dialog-close]=data.employeeTraining  *ngIf=\"data.employeeTraining.id === ''\">Add</button>\r\n      <button mat-button mat-dialog-close=\"dialogDismissed\" disableRipple=\"true\" class=\"tos-button\">Cancel</button>\r\n   </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/employee/training/training.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Training; });
var Training = /** @class */ (function () {
    function Training(values) {
        if (values === void 0) { values = {}; }
        this.id = '';
        this.name = '';
        this.employeeId = '';
        this.mode = '';
        this.proposedDate = '';
        this.reason = '';
        this.createdAt = '';
        Object.assign(this, values);
    }
    return Training;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(router, route) {
        this.router = router;
        this.route = route;
        this.title = 'Team Operations System';
    }
    FooterComponent.prototype.ngOnInit = function () {
        /*
          this.items = [
              {
                  label: 'Home',
                  icon: 'fa-home',
                  command: (onclick)=> {this.navigateHome()}
              },
              {
                  label: 'Employee',
                  icon: 'fa-users',
                  command: (onclick)=> {this.navigateEmployeeHome()}
              },
              {
                  label: 'Customer',
                  icon: 'fa-briefcase',
                  command: (onclick)=> {this.navigateCustomers()}
              }
          ];
          */
    };
    FooterComponent.prototype.navigateHome = function () {
        this.router.navigate(['/']);
    };
    FooterComponent.prototype.navigateCustomers = function () {
        this.router.navigate(['/customer-home'], { skipLocationChange: false });
    };
    FooterComponent.prototype.navigateEmployeeHome = function () {
        this.router.navigate(['/employee-home'], { skipLocationChange: false });
    };
    FooterComponent.prototype.navigateAbout = function () {
        this.router.navigate(['/about'], { skipLocationChange: false });
    };
    FooterComponent.prototype.navigateProfile = function () {
        this.router.navigate(['/profile'], { skipLocationChange: false });
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',
            template: __webpack_require__("./src/app/footer/footer.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"100%\" >\n\n<p>    © 2018 . All rights reserved </p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_localStorage_service__ = __webpack_require__("./src/app/services/localStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, route, localStorageService, dataService) {
        this.router = router;
        this.route = route;
        this.localStorageService = localStorageService;
        this.dataService = dataService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.localStorageService.getValueFromLocalStorage() == null)
            this.router.navigate(['view/login']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("./src/app/home/home.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])(':enter, :leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('200ms ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__services_localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.html":
/***/ (function(module, exports) {

module.exports = "<h3>Welcome !!!</h3>\n<br><br>\nThis Application is to help Managers, employess to run project/client related operations smoothly.\n<br><br><br>\n<span style=\"color: #505050;\"><b>For Managers: </b></span>\n<ul>\n  <li>Can keep track of Clients.</li>\n  <li>Can keep track of employees.</li>\n</ul>\n<span style=\"color: #505050;\"><b>For Employees: </b></span>\n<br>\n<ul>\n  <li>Can keep track of their teams, trainings, goals.</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility_service__ = __webpack_require__("./src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_localStorage_service__ = __webpack_require__("./src/app/services/localStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService, localStorageService, utilityService, dataService) {
        this.router = router;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.utilityService = utilityService;
        this.dataService = dataService;
        this.hide = true;
        this.user = {
            username: '',
            password: '',
            role: ''
        };
        this.newUser = {
            username: '',
            password: ''
        };
        this.wrongCreds = undefined;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userRoles = ['admin', 'manager', 'employee'];
    };
    LoginComponent.prototype.login = function (usercreds) {
        var _this = this;
        this.authService.login(usercreds)
            .then(function (data) {
            _this.localStorageService.setAuthorizationData(data);
            _this.utilityService.addTokenSubject(data.access_token);
            _this.router.navigate(['/home']);
        }, function (err) {
            _this.wrongCreds = "Invalid Credentials";
        });
    };
    LoginComponent.prototype.register = function (usercreds) {
        var _this = this;
        this.dataService.postUserEntity('users', usercreds)
            .then(function (resCustomerData) {
            console.log("abhinab");
            console.log(_this.dataService.PropUris);
            if (location.origin === 'http://localhost:4200') {
                location.href = location.origin;
            }
            else {
                var PropertyUris = JSON.parse(localStorage.getItem("PropertyUris"));
                console.log("Popr" + PropertyUris);
                console.log(_this.dataService.PropUris);
                if (PropertyUris !== null) {
                    location.href = PropertyUris.appBaseUrl;
                }
            }
        }, function (err) { return console.log("users could not be updated :" + err); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__("./src/app/login/login.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_localStorage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_2__services_utility_service__["a" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.html":
/***/ (function(module, exports) {

module.exports = "<mat-card flex=\"flex\" style=\"width: 260px\">\n   <mat-tab-group  disableRipple=\"true\">\n      <mat-tab label=\"Login\">\n         <!--\n            <mat-toolbar>\n             <div class=\"mat-toolbar-tools\">\n                  <h2><span>Login</span></h2>\n               </div>\n            </mat-toolbar>  -->\n         <mat-card-content>\n            <br>\n            <mat-form-field>\n               <input matInput placeholder=\"Username\"  [(ngModel)]=\"user.username\" required >\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n               <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\"  [(ngModel)]=\"user.password\" required>\n               <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n            <!--\n               <mat-form-field>\n                 <mat-select [(value)]=\"selected\" [(ngModel)]=\"user.role\" placeholder=\"Logging in As\" name=\"role\" >\n                   <mat-option *ngFor=\"let role of userRoles\" [value]=\"role\">\n                     {{ role }}\n                   </mat-option>\n                 </mat-select>\n               </mat-form-field>\n               -->\n            <br><br>\n            <button mat-raised-button class=\"tos-primary-button\" (click)=\"login(user)\">Login</button>\n            <br><br>\n            <a *ngIf = \"wrongCreds !== undefined\" style=\"padding-left: 16px; color: red; font-size: 12px\"> {{wrongCreds}} </a>\n         </mat-card-content>\n      </mat-tab>\n      <mat-tab label=\"Register\">\n         <br>\n         <mat-card-content>\n            <mat-form-field>\n               <input matInput placeholder=\"Username\"  [(ngModel)]=\"newUser.username\" required >\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n               <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\"  [(ngModel)]=\"newUser.password\" required>\n               <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n            <br><br>\n            <button mat-raised-button class=\"tos-primary-button\" (click)=\"register(newUser)\">Register</button>\n            <br><br>\n         </mat-card-content>\n      </mat-tab>\n   </mat-tab-group>\n</mat-card>\n<!--\n   -->\n"

/***/ }),

/***/ "./src/app/menu/breadCrumb.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadCrumb; });
var BreadCrumb = /** @class */ (function () {
    function BreadCrumb(values) {
        if (values === void 0) { values = {}; }
        this.depth = '';
        this.label = '';
        this.url = '';
        this.entityId = -1;
        this.state = ''; /* Crumb state could be [entity, entities, single, none] */
        this.message = '';
        Object.assign(this, values);
    }
    return BreadCrumb;
}());

;


/***/ }),

/***/ "./src/app/menu/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility_service__ = __webpack_require__("./src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(utilityService, router, route) {
        this.utilityService = utilityService;
        this.router = router;
        this.route = route;
        this.crumbs = Array();
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilityService.currentBreadCrumb.subscribe(function (breadCrumb) {
            if (breadCrumb.state === 'entity') {
                _this.crumbs.push(breadCrumb);
            }
            else {
                _this.crumbs = [];
                if (breadCrumb.state !== 'none') {
                    _this.crumbs.push(breadCrumb);
                }
            }
        });
    };
    BreadcrumbComponent.prototype.navigate = function (crumb) {
        if (crumb.state === 'entity') {
            var tempCrumbs_1 = [];
            this.crumbs.forEach(function (c) {
                if (c.depth <= crumb.depth)
                    tempCrumbs_1.push(c);
            });
            this.crumbs = [];
            this.crumbs = tempCrumbs_1;
            this.router.navigate([crumb.url, crumb.entityId], { skipLocationChange: false });
        }
        else if (crumb.state === 'entities') {
            this.crumbs = [];
            this.crumbs.push(crumb);
            this.router.navigate([crumb.url], { skipLocationChange: false });
        }
    };
    BreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'breadcrumb',
            template: __webpack_require__("./src/app/menu/breadcrumb.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_utility_service__["a" /* UtilityService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/menu/breadcrumb.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tos-breads\">\r\n   <a *ngFor=\"let crumb of crumbs\" class=\"tos-crumbs-a\">\r\n   <span (click)=\"navigate(crumb)\"  >\r\n   {{crumb.label}}   <a *ngIf=\"crumb.message !== ''\"> {{crumb.message}}  </a> <a  class=\"tos-arrow\" *ngIf=\"crumbs.length > 1\"> &#9658; </a>\r\n   </span>\r\n   </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility_service__ = __webpack_require__("./src/app/services/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(utilityService, router, route) {
        this.utilityService = utilityService;
        this.router = router;
        this.route = route;
        this.title = 'Team Operations System';
        this.titleXS = 'TOS';
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilityService.currentBreadCrumb.subscribe(function (bread) { return _this.bread = bread; });
        /*
          this.items = [
              {
                  label: 'Home',
                  icon: 'fa-home',
                  command: (onclick)=> {this.navigateHome()}
              }
          ];
          */
    };
    MenuComponent.prototype.navigateHome = function () {
        this.utilityService.addBreadCrumb(0, 'None', '/', -1, 'none', '');
        this.router.navigate(['/']);
    };
    MenuComponent.prototype.navigateCustomers = function () {
        this.utilityService.addBreadCrumb(1, 'Customers', 'view/customers', 0, 'entities', '');
        this.router.navigate(['view/customers'], { skipLocationChange: false });
    };
    MenuComponent.prototype.navigateEmployeeHome = function () {
        this.utilityService.addBreadCrumb(1, 'Employees', 'view/employees', 0, 'entities', '');
        this.router.navigate(['view/employees'], { skipLocationChange: false });
    };
    MenuComponent.prototype.navigateAbout = function () {
        this.utilityService.addBreadCrumb(1, 'About', 'view/about', 0, 'single', '');
        this.router.navigate(['view/about'], { skipLocationChange: false });
    };
    MenuComponent.prototype.navigateProfile = function () {
        this.utilityService.addBreadCrumb(1, 'Profile', 'view/profile', 0, 'single', '');
        this.router.navigate(['view/profile'], { skipLocationChange: false });
    };
    MenuComponent.prototype.logout = function () {
        localStorage.clear();
        this.utilityService.addTokenSubject('');
        this.router.navigate(['view/login']);
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'menu',
            template: __webpack_require__("./src/app/menu/menu.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_utility_service__["a" /* UtilityService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar >\n   <a href=\"./index.html\" class=\"tos-title-style\">\n      <h2 fxShow=\"true\" fxHide.gt-md=\"true\">{{titleXS}}</h2>\n      <h2 fxShow=\"true\" fxHide.lt-md=\"true\">{{title}}</h2>\n   </a>\n   <span class=\"example-spacer\"></span>\n   <div fxShow=\"true\" fxHide.lt-md=\"true\" class=\"tos-menu-buttons\">\n     <a (click)=\"navigateHome()\">Home</a>\n    <a (click)=\"navigateCustomers()\">Customer</a>\n     <a (click)=\"navigateEmployeeHome()\">Employee</a>\n     <a (click)=\"navigateAbout()\">About</a>\n     <a (click)=\"logout()\">Logout</a>\n    <!--  <button mat-button (click)=\"navigateHome()\"  disableRipple=\"true\">Home</button>\n      <button mat-button (click)=\"navigateEmployeeHome()\">Employee</button>\n      <button mat-button (click)=\"navigateCustomers()\">Customer</button>\n     <button mat-button (click)=\"navigateProfile()\">DashBoard</button>\n      <button mat-button (click)=\"navigateAbout()\">About</button>\n      <button mat-button (click)=\"logout()\">Logout</button> -->\n   </div>\n   <div fxShow=\"false\" fxShow.lt-md=\"true\" fxLayout=\"column\">\n      <mat-menu #appMenu=\"matMenu\" [overlapTrigger]=\"false\">\n    <!--    <button mat-button (click)=\"navigateHome()\">Home</button>\n      <button mat-button (click)=\"navigateEmployeeHome()\">Employee</button>\n      <button mat-button (click)=\"navigateCustomers()\">Customer</button>\n       <button mat-button (click)=\"navigateProfile()\">DashBoard</button>\n      <button mat-button (click)=\"navigateAbout()\">About</button>\n      <button mat-button (click)=\"logout()\">Logout</button>-->\n      <a (click)=\"navigateHome()\">Home</a>\n      <a (click)=\"navigateCustomers()\">Customer</a>\n      <a (click)=\"navigateEmployeeHome()\">Employee</a>\n      <a (click)=\"navigateAbout()\">About</a>\n      <a (click)=\"logout()\">Logout</a>\n      </mat-menu>\n      <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n         <mat-icon>more_vert</mat-icon>\n      </button>\n   </div>\n</mat-toolbar>\n<breadcrumb> </breadcrumb>\n"

/***/ }),

/***/ "./src/app/prime.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_menubar__ = __webpack_require__("./node_modules/primeng/menubar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_menubar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_menubar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_datalist__ = __webpack_require__("./node_modules/primeng/datalist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_datalist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_datalist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_datatable__ = __webpack_require__("./node_modules/primeng/datatable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_inplace__ = __webpack_require__("./node_modules/primeng/inplace.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_inplace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_inplace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_card__ = __webpack_require__("./node_modules/primeng/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_card__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PrimeModule = /** @class */ (function () {
    function PrimeModule() {
    }
    PrimeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["MenuModule"], __WEBPACK_IMPORTED_MODULE_2_primeng_button__["ButtonModule"], __WEBPACK_IMPORTED_MODULE_3_primeng_menubar__["MenubarModule"], __WEBPACK_IMPORTED_MODULE_4_primeng_datalist__["DataListModule"], __WEBPACK_IMPORTED_MODULE_5_primeng_datatable__["DataTableModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_inplace__["InplaceModule"], __WEBPACK_IMPORTED_MODULE_7_primeng_card__["CardModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["MenuModule"], __WEBPACK_IMPORTED_MODULE_2_primeng_button__["ButtonModule"], __WEBPACK_IMPORTED_MODULE_3_primeng_menubar__["MenubarModule"], __WEBPACK_IMPORTED_MODULE_4_primeng_datalist__["DataListModule"], __WEBPACK_IMPORTED_MODULE_5_primeng_datatable__["DataTableModule"], __WEBPACK_IMPORTED_MODULE_6_primeng_inplace__["InplaceModule"], __WEBPACK_IMPORTED_MODULE_7_primeng_card__["CardModule"]]
        })
    ], PrimeModule);
    return PrimeModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile',
            template: __webpack_require__("./src/app/profile/profile.html")
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.html":
/***/ (function(module, exports) {

module.exports = "<h3>Profile Operations</h3>\n<br>\n<br>\n"

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.AccessToken = "";
        this.isAuthenticated = false;
        this.propertyUris = JSON.parse(localStorage.getItem("PropertyUris"));
    }
    AuthService.prototype.login = function (usercreds) {
        var _this = this;
        this.propertyUris = JSON.parse(localStorage.getItem("PropertyUris"));
        if (this.propertyUris !== null) {
            this.tokenApiURL = this.propertyUris.tokenApiUrl;
        }
        // Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0
        var headersForTokenAPI = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headersForTokenAPI.append("Content-Type", "application/x-www-form-urlencoded");
        headersForTokenAPI.append("Authorization", "Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0");
        var data = "?grant_type=password&username=" + usercreds.username + "&password=" + usercreds.password;
        return this.http.post(this.tokenApiURL + data, null, { headers: headersForTokenAPI })
            .map(function (res) {
            _this.AccessToken = res.json().access_token;
            return res.json();
        }).toPromise();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility_service__ = __webpack_require__("./src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localStorage_service__ = __webpack_require__("./src/app/services/localStorage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(httpClient, localStorageService, utilityService) {
        this.httpClient = httpClient;
        this.localStorageService = localStorageService;
        this.utilityService = utilityService;
        this.PropUris = undefined;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        this.getPropertyUris();
        var PropertyUris = JSON.parse(localStorage.getItem("PropertyUris"));
        if (PropertyUris !== null) {
            this.baseResourceURL = PropertyUris.baseResourceUrl;
        }
    }
    DataService.prototype.getToken = function () {
        if (this.localStorageService.getValueFromLocalStorage() !== null)
            return this.token = '?access_token=' + this.localStorageService.getValueFromLocalStorage().access_token;
    };
    DataService.prototype.getPropertyUris = function () {
        var _this = this;
        var propertyUriUrl;
        if (location.origin === 'http://localhost:4200') {
            propertyUriUrl = 'http://localhost:8080';
        }
        else {
            propertyUriUrl = location.origin;
        }
        return this.httpClient.get(propertyUriUrl + '/tos-app/properties/uri').toPromise()
            .then(function (response) {
            localStorage.setItem("PropertyUris", JSON.stringify(response));
            _this.PropUris = JSON.stringify(response);
        });
    };
    DataService.prototype.getEntityData = function (entityName, id) {
        return this.httpClient.get(this.baseResourceURL + entityName + "/" + id + this.getToken()).toPromise()
            .then(function (response) { return response; });
    };
    DataService.prototype.getEntityAllData = function (entityName) {
        return this.httpClient.get(this.baseResourceURL + entityName + "/" + this.getToken()).toPromise()
            .then(function (response) { return response; });
    };
    DataService.prototype.postEntity = function (entityName, entity) {
        return this.httpClient.post(this.baseResourceURL + entityName + "/" + this.getToken(), entity).toPromise()
            .then(function (response) { return response; });
    };
    DataService.prototype.updateEntity = function (entityName, id, entity) {
        return this.httpClient.put(this.baseResourceURL + entityName + "/" + id + this.getToken(), entity).toPromise()
            .then(function (response) { return response; });
    };
    DataService.prototype.delelteEntity = function (entityName, id) {
        return this.httpClient.delete(this.baseResourceURL + entityName + "/" + id + this.getToken()).toPromise()
            .then(function (response) { return response; });
    };
    DataService.prototype.postUserEntity = function (entityName, entity) {
        var PropertyUris = JSON.parse(localStorage.getItem("PropertyUris"));
        return this.httpClient.post(PropertyUris.baseResourceUserUrl + entityName + "/", entity).toPromise()
            .then(function (response) { return console.log(response); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_2__utility_service__["a" /* UtilityService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/localStorage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setAuthorizationData = function (auth) {
        localStorage.setItem("Authorization", JSON.stringify(auth));
    };
    LocalStorageService.prototype.getValueFromLocalStorage = function () {
        var tokendate = JSON.parse(localStorage.getItem("Authorization"));
        return tokendate == null ? null : tokendate;
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/url.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UrlService = /** @class */ (function () {
    function UrlService() {
    }
    UrlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], UrlService);
    return UrlService;
}());



/***/ }),

/***/ "./src/app/services/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_breadCrumb__ = __webpack_require__("./src/app/menu/breadCrumb.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UtilityService = /** @class */ (function () {
    function UtilityService() {
        /* BehaviorSubject logic for breadCrumb */
        this.breadCrumbSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_1__menu_breadCrumb__["a" /* BreadCrumb */]());
        this.currentBreadCrumb = this.breadCrumbSource.asObservable();
        this.tokenSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new Object);
        this.currenttokenSubject = this.tokenSubject.asObservable();
    }
    UtilityService.prototype.addBreadCrumb = function (depth, label, url, entityId, state, message) {
        var breadCrumb = new __WEBPACK_IMPORTED_MODULE_1__menu_breadCrumb__["a" /* BreadCrumb */]();
        breadCrumb.depth = depth;
        breadCrumb.label = label;
        breadCrumb.url = url;
        breadCrumb.entityId = entityId;
        breadCrumb.state = state;
        breadCrumb.message = message;
        this.changeBreadCrumb(breadCrumb);
    };
    UtilityService.prototype.changeBreadCrumb = function (breadcrumb) {
        this.breadCrumbSource.next(breadcrumb);
    };
    UtilityService.prototype.addTokenSubject = function (token) {
        this.changeTokenSubject(token);
    };
    UtilityService.prototype.changeTokenSubject = function (token) {
        this.tokenSubject.next(token);
    };
    UtilityService.prototype.checkEntity = function (entity) {
        if (entity.length === 0)
            return true;
        else
            return false;
    };
    UtilityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map