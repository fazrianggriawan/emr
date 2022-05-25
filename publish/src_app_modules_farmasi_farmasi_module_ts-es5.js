(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkiniapps"] = self["webpackChunkiniapps"] || []).push([["src_app_modules_farmasi_farmasi_module_ts"], {
    /***/
    53314: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FarmasiRoutingModule": function FarmasiRoutingModule() {
          return (
            /* binding */
            _FarmasiRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _farmasi_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./farmasi.component */
      80229);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _farmasi_component__WEBPACK_IMPORTED_MODULE_0__.FarmasiComponent
      }];

      var _FarmasiRoutingModule = function _FarmasiRoutingModule() {
        _classCallCheck(this, _FarmasiRoutingModule);
      };

      _FarmasiRoutingModule.ɵfac = function FarmasiRoutingModule_Factory(t) {
        return new (t || _FarmasiRoutingModule)();
      };

      _FarmasiRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _FarmasiRoutingModule
      });
      _FarmasiRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_FarmasiRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    80229: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FarmasiComponent": function FarmasiComponent() {
          return (
            /* binding */
            _FarmasiComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FarmasiComponent = /*#__PURE__*/function () {
        function _FarmasiComponent() {
          _classCallCheck(this, _FarmasiComponent);
        }

        _createClass(_FarmasiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FarmasiComponent;
      }();

      _FarmasiComponent.ɵfac = function FarmasiComponent_Factory(t) {
        return new (t || _FarmasiComponent)();
      };

      _FarmasiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FarmasiComponent,
        selectors: [["app-farmasi"]],
        decls: 2,
        vars: 0,
        template: function FarmasiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "farmasi works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXJtYXNpLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    26701: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FarmasiModule": function FarmasiModule() {
          return (
            /* binding */
            _FarmasiModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _farmasi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./farmasi-routing.module */
      53314);
      /* harmony import */


      var _farmasi_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./farmasi.component */
      80229);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FarmasiModule = function _FarmasiModule() {
        _classCallCheck(this, _FarmasiModule);
      };

      _FarmasiModule.ɵfac = function FarmasiModule_Factory(t) {
        return new (t || _FarmasiModule)();
      };

      _FarmasiModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _FarmasiModule
      });
      _FarmasiModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _farmasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.FarmasiRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_FarmasiModule, {
          declarations: [_farmasi_component__WEBPACK_IMPORTED_MODULE_1__.FarmasiComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _farmasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.FarmasiRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_modules_farmasi_farmasi_module_ts-es5.js.map