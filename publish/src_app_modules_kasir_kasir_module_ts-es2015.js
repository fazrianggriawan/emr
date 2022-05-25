(self["webpackChunkiniapps"] = self["webpackChunkiniapps"] || []).push([["src_app_modules_kasir_kasir_module_ts"],{

/***/ 65861:
/*!***********************************************************************!*\
  !*** ./src/app/modules/kasir/components/billing/billing.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingComponent": function() { return /* binding */ BillingComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class BillingComponent {
    constructor() { }
    ngOnInit() {
    }
}
BillingComponent.ɵfac = function BillingComponent_Factory(t) { return new (t || BillingComponent)(); };
BillingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillingComponent, selectors: [["app-billing"]], decls: 2, vars: 0, template: function BillingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "billing works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWxsaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 81894:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/kasir/components/form-billing/form-billing.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormBillingComponent": function() { return /* binding */ FormBillingComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class FormBillingComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormBillingComponent.ɵfac = function FormBillingComponent_Factory(t) { return new (t || FormBillingComponent)(); };
FormBillingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormBillingComponent, selectors: [["app-form-billing"]], decls: 2, vars: 0, template: function FormBillingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Form Billing Works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWJpbGxpbmcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 78096:
/*!*******************************************************!*\
  !*** ./src/app/modules/kasir/kasir-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KasirRoutingModule": function() { return /* binding */ KasirRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _kasir_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kasir.component */ 18101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [{ path: '', component: _kasir_component__WEBPACK_IMPORTED_MODULE_0__.KasirComponent }];
class KasirRoutingModule {
}
KasirRoutingModule.ɵfac = function KasirRoutingModule_Factory(t) { return new (t || KasirRoutingModule)(); };
KasirRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: KasirRoutingModule });
KasirRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](KasirRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 18101:
/*!**************************************************!*\
  !*** ./src/app/modules/kasir/kasir.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KasirComponent": function() { return /* binding */ KasirComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class KasirComponent {
    constructor() { }
    ngOnInit() {
    }
}
KasirComponent.ɵfac = function KasirComponent_Factory(t) { return new (t || KasirComponent)(); };
KasirComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KasirComponent, selectors: [["app-kasir"]], decls: 2, vars: 0, template: function KasirComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "kasir works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrYXNpci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 86050:
/*!***********************************************!*\
  !*** ./src/app/modules/kasir/kasir.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KasirModule": function() { return /* binding */ KasirModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _kasir_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kasir-routing.module */ 78096);
/* harmony import */ var _kasir_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kasir.component */ 18101);
/* harmony import */ var _components_form_billing_form_billing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form-billing/form-billing.component */ 81894);
/* harmony import */ var _components_billing_billing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/billing/billing.component */ 65861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class KasirModule {
}
KasirModule.ɵfac = function KasirModule_Factory(t) { return new (t || KasirModule)(); };
KasirModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: KasirModule });
KasirModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _kasir_routing_module__WEBPACK_IMPORTED_MODULE_0__.KasirRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](KasirModule, { declarations: [_kasir_component__WEBPACK_IMPORTED_MODULE_1__.KasirComponent,
        _components_form_billing_form_billing_component__WEBPACK_IMPORTED_MODULE_2__.FormBillingComponent,
        _components_billing_billing_component__WEBPACK_IMPORTED_MODULE_3__.BillingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _kasir_routing_module__WEBPACK_IMPORTED_MODULE_0__.KasirRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_kasir_kasir_module_ts-es2015.js.map