(self["webpackChunkiniapps"] = self["webpackChunkiniapps"] || []).push([["src_app_modules_farmasi_farmasi_module_ts"],{

/***/ 53314:
/*!***********************************************************!*\
  !*** ./src/app/modules/farmasi/farmasi-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FarmasiRoutingModule": function() { return /* binding */ FarmasiRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _farmasi_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./farmasi.component */ 80229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [{ path: '', component: _farmasi_component__WEBPACK_IMPORTED_MODULE_0__.FarmasiComponent }];
class FarmasiRoutingModule {
}
FarmasiRoutingModule.ɵfac = function FarmasiRoutingModule_Factory(t) { return new (t || FarmasiRoutingModule)(); };
FarmasiRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FarmasiRoutingModule });
FarmasiRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FarmasiRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 80229:
/*!******************************************************!*\
  !*** ./src/app/modules/farmasi/farmasi.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FarmasiComponent": function() { return /* binding */ FarmasiComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class FarmasiComponent {
    constructor() { }
    ngOnInit() {
    }
}
FarmasiComponent.ɵfac = function FarmasiComponent_Factory(t) { return new (t || FarmasiComponent)(); };
FarmasiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FarmasiComponent, selectors: [["app-farmasi"]], decls: 2, vars: 0, template: function FarmasiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "farmasi works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXJtYXNpLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 26701:
/*!***************************************************!*\
  !*** ./src/app/modules/farmasi/farmasi.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FarmasiModule": function() { return /* binding */ FarmasiModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _farmasi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./farmasi-routing.module */ 53314);
/* harmony import */ var _farmasi_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./farmasi.component */ 80229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




class FarmasiModule {
}
FarmasiModule.ɵfac = function FarmasiModule_Factory(t) { return new (t || FarmasiModule)(); };
FarmasiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FarmasiModule });
FarmasiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _farmasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.FarmasiRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FarmasiModule, { declarations: [_farmasi_component__WEBPACK_IMPORTED_MODULE_1__.FarmasiComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _farmasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.FarmasiRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_farmasi_farmasi_module_ts-es2015.js.map