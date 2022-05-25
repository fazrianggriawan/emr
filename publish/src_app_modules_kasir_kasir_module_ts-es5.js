(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkiniapps"] = self["webpackChunkiniapps"] || []).push([["src_app_modules_kasir_kasir_module_ts"], {
    /***/
    65861: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BillingComponent": function BillingComponent() {
          return (
            /* binding */
            _BillingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BillingComponent = /*#__PURE__*/function () {
        function _BillingComponent() {
          _classCallCheck(this, _BillingComponent);
        }

        _createClass(_BillingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BillingComponent;
      }();

      _BillingComponent.ɵfac = function BillingComponent_Factory(t) {
        return new (t || _BillingComponent)();
      };

      _BillingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BillingComponent,
        selectors: [["app-billing"]],
        decls: 2,
        vars: 0,
        template: function BillingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "billing works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWxsaW5nLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    81894: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormBillingComponent": function FormBillingComponent() {
          return (
            /* binding */
            _FormBillingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FormBillingComponent = /*#__PURE__*/function () {
        function _FormBillingComponent() {
          _classCallCheck(this, _FormBillingComponent);
        }

        _createClass(_FormBillingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FormBillingComponent;
      }();

      _FormBillingComponent.ɵfac = function FormBillingComponent_Factory(t) {
        return new (t || _FormBillingComponent)();
      };

      _FormBillingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FormBillingComponent,
        selectors: [["app-form-billing"]],
        decls: 2,
        vars: 0,
        template: function FormBillingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Form Billing Works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWJpbGxpbmcuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    78096: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KasirRoutingModule": function KasirRoutingModule() {
          return (
            /* binding */
            _KasirRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _kasir_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./kasir.component */
      18101);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _kasir_component__WEBPACK_IMPORTED_MODULE_0__.KasirComponent
      }];

      var _KasirRoutingModule = function _KasirRoutingModule() {
        _classCallCheck(this, _KasirRoutingModule);
      };

      _KasirRoutingModule.ɵfac = function KasirRoutingModule_Factory(t) {
        return new (t || _KasirRoutingModule)();
      };

      _KasirRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _KasirRoutingModule
      });
      _KasirRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_KasirRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    18101: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KasirComponent": function KasirComponent() {
          return (
            /* binding */
            _KasirComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _KasirComponent = /*#__PURE__*/function () {
        function _KasirComponent() {
          _classCallCheck(this, _KasirComponent);
        }

        _createClass(_KasirComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _KasirComponent;
      }();

      _KasirComponent.ɵfac = function KasirComponent_Factory(t) {
        return new (t || _KasirComponent)();
      };

      _KasirComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _KasirComponent,
        selectors: [["app-kasir"]],
        decls: 2,
        vars: 0,
        template: function KasirComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "kasir works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrYXNpci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    86050: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KasirModule": function KasirModule() {
          return (
            /* binding */
            _KasirModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _kasir_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./kasir-routing.module */
      78096);
      /* harmony import */


      var _kasir_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./kasir.component */
      18101);
      /* harmony import */


      var _components_form_billing_form_billing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/form-billing/form-billing.component */
      81894);
      /* harmony import */


      var _components_billing_billing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/billing/billing.component */
      65861);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _KasirModule = function _KasirModule() {
        _classCallCheck(this, _KasirModule);
      };

      _KasirModule.ɵfac = function KasirModule_Factory(t) {
        return new (t || _KasirModule)();
      };

      _KasirModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _KasirModule
      });
      _KasirModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _kasir_routing_module__WEBPACK_IMPORTED_MODULE_0__.KasirRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_KasirModule, {
          declarations: [_kasir_component__WEBPACK_IMPORTED_MODULE_1__.KasirComponent, _components_form_billing_form_billing_component__WEBPACK_IMPORTED_MODULE_2__.FormBillingComponent, _components_billing_billing_component__WEBPACK_IMPORTED_MODULE_3__.BillingComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _kasir_routing_module__WEBPACK_IMPORTED_MODULE_0__.KasirRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_modules_kasir_kasir_module_ts-es5.js.map