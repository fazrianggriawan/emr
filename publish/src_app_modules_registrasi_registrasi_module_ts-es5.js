(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkiniapps"] = self["webpackChunkiniapps"] || []).push([["src_app_modules_registrasi_registrasi_module_ts"], {
    /***/
    81016: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataPasienComponent": function DataPasienComponent() {
          return (
            /* binding */
            _DataPasienComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _data_pasien_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./data-pasien.service */
      95819);
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/table */
      23490);
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/api */
      33013);
      /* harmony import */


      var primeng_inputmask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/inputmask */
      46352);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function DataPasienComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No.RM");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Nama");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Tgl. Lahir");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Alamat");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "No. Telp");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "No. Asuransi / BPJS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DataPasienComponent_ng_template_2_Template_input_keyup_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.sorting($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DataPasienComponent_ng_template_2_Template_input_keyup_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.sorting($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p-inputMask", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DataPasienComponent_ng_template_2_Template_p_inputMask_keyup_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.sorting($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DataPasienComponent_ng_template_2_Template_input_keyup_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.sorting($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DataPasienComponent_ng_template_2_Template_input_keyup_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.sorting($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DataPasienComponent_ng_template_2_Template_input_keyup_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.sorting($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DataPasienComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pSelectableRow", item_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.norm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.nama);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.tgl_lahir);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.alamat);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.tlp);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.no_asuransi);
        }
      }

      function DataPasienComponent_ng_template_4_tr_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Silahkan Melakukan Pencarian.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DataPasienComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataPasienComponent_ng_template_4_tr_0_Template, 4, 0, "tr", 12);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.dataPasien.length == 0);
        }
      }

      var _c0 = function _c0() {
        return {
          height: "500px"
        };
      };

      var _DataPasienComponent = /*#__PURE__*/function () {
        function _DataPasienComponent(fb, dataPasienService) {
          _classCallCheck(this, _DataPasienComponent);

          this.fb = fb;
          this.dataPasienService = dataPasienService;
          this.showDialog = true;
          this.dataPasien = [];
        }

        _createClass(_DataPasienComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.initForm();
            this.dataPasienService.dataPasien.subscribe(function (data) {
              return _this.dataPasien = data;
            });
            this.dataPasienService.showDialog.subscribe(function (data) {
              return _this.showDialog = data;
            });
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.form = this.fb.group({
              norm: [''],
              nama: [''],
              tglLahir: [''],
              alamat: [''],
              tlp: [''],
              noAsuransi: ['']
            });
          }
        }, {
          key: "sorting",
          value: function sorting(e) {
            var _a, _b;

            if (e.code == 'Enter') {
              var tglLahir = this.form.value.tglLahir;

              if (tglLahir) {
                var lahir = tglLahir.substr(6, 4) + '-' + tglLahir.substr(3, 2) + '-' + tglLahir.substr(0, 2);
                (_a = this.form.get('tglLahir')) === null || _a === void 0 ? void 0 : _a.patchValue(lahir);
              }

              this.dataPasienService.getDataPasien(this.form.value);
              (_b = this.form.get('tglLahir')) === null || _b === void 0 ? void 0 : _b.patchValue(tglLahir);
            }
          }
        }, {
          key: "onSelectPasien",
          value: function onSelectPasien() {
            this.dataPasienService.pasien.next(this.selectedPasien);
            this.closeDialog();
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dataPasienService.dataPasien.next([]);
            this.dataPasienService.showDialog.next(false);
            this.form.reset();
          }
        }]);

        return _DataPasienComponent;
      }();

      _DataPasienComponent.ɵfac = function DataPasienComponent_Factory(t) {
        return new (t || _DataPasienComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_pasien_service__WEBPACK_IMPORTED_MODULE_0__.DataPasienService));
      };

      _DataPasienComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _DataPasienComponent,
        selectors: [["app-data-pasien"]],
        decls: 5,
        vars: 6,
        consts: [[3, "formGroup"], ["responsiveLayout", "scroll", "selectionMode", "single", 3, "value", "selection", "selectionChange", "onRowSelect"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "footer"], ["type", "text", "placeholder", "Cari No. RM", "formControlName", "norm", 1, "form-control", 3, "keyup"], ["type", "text", "placeholder", "Cari Nama", "formControlName", "nama", 1, "form-control", 3, "keyup"], ["formControlName", "tglLahir", "mask", "99-99-9999", "placeholder", "Cari Tgl. Lahir", "styleClass", "form-control", 3, "keyup"], ["type", "text", "placeholder", "Cari Alamat", "formControlName", "alamat", 1, "form-control", 3, "keyup"], ["type", "text", "placeholder", "Cari No. Telp", "formControlName", "tlp", 1, "form-control", 3, "keyup"], ["type", "text", "placeholder", "Cari No. Asuransi / BPJS", "formControlName", "noAsuransi", 1, "form-control", 3, "keyup"], [3, "pSelectableRow"], [4, "ngIf"], ["colspan", "6", 1, "tx-light", 2, "text-align", "center"], [1, "bi", "bi-search", "mr-2"]],
        template: function DataPasienComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function DataPasienComponent_Template_p_table_selectionChange_1_listener($event) {
              return ctx.selectedPasien = $event;
            })("onRowSelect", function DataPasienComponent_Template_p_table_onRowSelect_1_listener() {
              return ctx.onSelectPasien();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataPasienComponent_ng_template_2_Template, 26, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataPasienComponent_ng_template_3_Template, 13, 7, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataPasienComponent_ng_template_4_Template, 1, 1, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.dataPasien)("selection", ctx.selectedPasien);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, primeng_table__WEBPACK_IMPORTED_MODULE_3__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_inputmask__WEBPACK_IMPORTED_MODULE_5__.InputMask, primeng_table__WEBPACK_IMPORTED_MODULE_3__.SelectableRow, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLXBhc2llbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    95819: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataPasienService": function DataPasienService() {
          return (
            /* binding */
            _DataPasienService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var src_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/config */
      39698);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/loading.service */
      4471);

      var _DataPasienService = /*#__PURE__*/function () {
        function _DataPasienService(http, loadingService) {
          _classCallCheck(this, _DataPasienService);

          this.http = http;
          this.loadingService = loadingService;
          this.dataPasien = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
          this.sendToForm = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
          this.pasien = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
          this.showDialog = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        }

        _createClass(_DataPasienService, [{
          key: "getDataPasien",
          value: function getDataPasien(data) {
            var _this2 = this;

            this.loadingService.status.next(true);
            this.http.post(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('pasien/filtering'), data).subscribe(function (data) {
              return _this2.dataPasien.next(data.data);
            });
          }
        }]);

        return _DataPasienService;
      }();

      _DataPasienService.ɵfac = function DataPasienService_Factory(t) {
        return new (t || _DataPasienService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService));
      };

      _DataPasienService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _DataPasienService,
        factory: _DataPasienService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    48457: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FormRawatJalanComponent": function FormRawatJalanComponent() {
          return (
            /* binding */
            _FormRawatJalanComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../services/master.service */
      54667);
      /* harmony import */


      var _data_pasien_data_pasien_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data-pasien/data-pasien.service */
      95819);
      /* harmony import */


      var src_app_modules_shared_vclaim_vclaim_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modules/shared/vclaim/vclaim.service */
      82398);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var primeng_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/calendar */
      88598);
      /* harmony import */


      var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/dropdown */
      50103);

      function FormRawatJalanComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 27);
        }
      }

      function FormRawatJalanComponent_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 27);
        }
      }

      function FormRawatJalanComponent_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 27);
        }
      }

      function FormRawatJalanComponent_span_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 27);
        }
      }

      function FormRawatJalanComponent_span_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 27);
        }
      }

      function FormRawatJalanComponent_span_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 27);
        }
      }

      function FormRawatJalanComponent_span_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 27);
        }
      }

      function FormRawatJalanComponent_span_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 27);
        }
      }

      function FormRawatJalanComponent_span_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 27);
        }
      }

      var _c0 = function _c0() {
        return {
          width: "100%"
        };
      };

      var _FormRawatJalanComponent = /*#__PURE__*/function () {
        function _FormRawatJalanComponent(fb, masterService, dataPasienService, vclaimService) {
          _classCallCheck(this, _FormRawatJalanComponent);

          this.fb = fb;
          this.masterService = masterService;
          this.dataPasienService = dataPasienService;
          this.vclaimService = vclaimService;
          this.rs = [];
          this.results = [];
          this.dialogVclaim = false;
          this.pasien = {};
        }

        _createClass(_FormRawatJalanComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.initForm();
            this.masterService.rs.subscribe(function (data) {
              return _this3.rs = data;
            });
            this.dataPasienService.pasien.subscribe(function (data) {
              return _this3.setToForm(data);
            });
          }
        }, {
          key: "setToForm",
          value: function setToForm(pasien) {
            var _a, _b, _c, _d, _e, _f, _g;

            if (pasien) {
              var tanggal = new Date();
              (_a = this.formRawatJalan.get('tanggal')) === null || _a === void 0 ? void 0 : _a.patchValue(tanggal);
              (_b = this.formRawatJalan.get('nama')) === null || _b === void 0 ? void 0 : _b.patchValue(pasien.nama);
              (_c = this.formRawatJalan.get('norm')) === null || _c === void 0 ? void 0 : _c.patchValue(pasien.norm);
              (_d = this.formRawatJalan.get('rs')) === null || _d === void 0 ? void 0 : _d.patchValue(pasien.rs);
              (_e = this.formRawatJalan.get('noAsuransi')) === null || _e === void 0 ? void 0 : _e.patchValue(pasien.no_asuransi);
              (_f = this.formRawatJalan.get('nik')) === null || _f === void 0 ? void 0 : _f.patchValue(pasien.nik);
              (_g = this.formRawatJalan.get('tglLahir')) === null || _g === void 0 ? void 0 : _g.patchValue(pasien.tgl_lahir);
            }
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.formRawatJalan = this.fb.group({
              tanggal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              rs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              norm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              id_pasien: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              noAsuransi: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              nik: [''],
              nama: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              tglLahir: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              noSep: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              poliklinik: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              dokter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              jnsPembayaran: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              catatan: [''],
              noreg: [''],
              status: ['']
            });
          }
        }]);

        return _FormRawatJalanComponent;
      }();

      _FormRawatJalanComponent.ɵfac = function FormRawatJalanComponent_Factory(t) {
        return new (t || _FormRawatJalanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_data_pasien_data_pasien_service__WEBPACK_IMPORTED_MODULE_1__.DataPasienService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_modules_shared_vclaim_vclaim_service__WEBPACK_IMPORTED_MODULE_2__.VclaimService));
      };

      _FormRawatJalanComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _FormRawatJalanComponent,
        selectors: [["app-form-rawat-jalan"]],
        decls: 97,
        vars: 29,
        consts: [[1, "row"], [1, "col"], [3, "formGroup"], [1, "row", "mb-2"], [1, "col-5", "col-form-label"], ["class", "bi bi-exclamation-circle-fill tx-danger ml-1 tx-13", 4, "ngIf"], ["appendTo", "body", "formControlName", "tanggal", 3, "showIcon"], ["optionLabel", "name", "optionValue", "id", "formControlName", "rs", 3, "options", "autoDisplayFirst"], ["type", "text", "formControlName", "nama", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "tglLahir", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "norm", 1, "form-control"], ["type", "text", "formControlName", "noAsuransi", 1, "form-control"], ["type", "text", "formControlName", "nik", 1, "form-control"], [1, "input-group"], ["type", "text", "formControlName", "noSep", 1, "form-control"], [1, "input-group-append"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "bi", "bi-credit-card", "mr-1"], ["optionLabel", "name", "formControlName", "poliklinik", 3, "options"], ["optionLabel", "name", "formControlName", "dokter", 3, "options"], ["optionLabel", "name", "formControlName", "jnsPembayaran", 3, "options"], ["type", "text", "formControlName", "catatan", "formControlName", "catatan", 1, "form-control"], ["type", "text", "formControlName", "noreg", "formControlName", "noreg", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "status", "formControlName", "status", "readonly", "", 1, "form-control"], [1, "col", "bg-gray-500", "p-3", "mt-3", "tx-right"], [1, "btn", "btn-sm", "btn-primary", "mr-1"], [1, "bi", "bi-save", "mr-1"], [1, "bi", "bi-exclamation-circle-fill", "tx-danger", "ml-1", "tx-13"]],
        template: function FormRawatJalanComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Tanggal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FormRawatJalanComponent_span_6_Template, 1, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "p-calendar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " RS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, FormRawatJalanComponent_span_12_Template, 1, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "p-dropdown", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Nama ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, FormRawatJalanComponent_span_18_Template, 1, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Tgl. Lahir & Usia ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " No. RM ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, FormRawatJalanComponent_span_29_Template, 1, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " No. Kartu BPJS / Asuransi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, FormRawatJalanComponent_span_35_Template, 1, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " NIK ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " No. SEP ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, FormRawatJalanComponent_span_48_Template, 1, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormRawatJalanComponent_Template_button_click_53_listener() {
              return ctx.vclaimService.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, " Vclaim BPJS");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, " Poliklinik ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, FormRawatJalanComponent_span_59_Template, 1, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "p-dropdown", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Dokter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, FormRawatJalanComponent_span_65_Template, 1, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "p-dropdown", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " Jenis Pembayaran ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, FormRawatJalanComponent_span_71_Template, 1, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "p-dropdown", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " Catatan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " No. Registrasi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, " Status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, " Simpan");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_1_0;
            var tmp_3_0;
            var tmp_7_0;
            var tmp_8_0;
            var tmp_9_0;
            var tmp_11_0;
            var tmp_12_0;
            var tmp_15_0;
            var tmp_18_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formRawatJalan);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.formRawatJalan.get("tanggal")) == null ? null : tmp_1_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showIcon", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.formRawatJalan.get("rs")) == null ? null : tmp_3_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](25, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.rs)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.formRawatJalan.get("nama")) == null ? null : tmp_7_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.formRawatJalan.get("norm")) == null ? null : tmp_8_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.formRawatJalan.get("noAsuransi")) == null ? null : tmp_9_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formRawatJalan);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.formRawatJalan.get("nama")) == null ? null : tmp_11_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx.formRawatJalan.get("poliklinik")) == null ? null : tmp_12_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](26, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.results);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx.formRawatJalan.get("dokter")) == null ? null : tmp_15_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](27, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.results);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_18_0 = ctx.formRawatJalan.get("jnsPembayaran")) == null ? null : tmp_18_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](28, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.results);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_calendar__WEBPACK_IMPORTED_MODULE_6__.Calendar, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXJhd2F0LWphbGFuLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    35487: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrasiRoutingModule": function RegistrasiRoutingModule() {
          return (
            /* binding */
            _RegistrasiRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _registrasi_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./registrasi.component */
      7317);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _registrasi_component__WEBPACK_IMPORTED_MODULE_0__.RegistrasiComponent
      }];

      var _RegistrasiRoutingModule = function _RegistrasiRoutingModule() {
        _classCallCheck(this, _RegistrasiRoutingModule);
      };

      _RegistrasiRoutingModule.ɵfac = function RegistrasiRoutingModule_Factory(t) {
        return new (t || _RegistrasiRoutingModule)();
      };

      _RegistrasiRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _RegistrasiRoutingModule
      });
      _RegistrasiRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_RegistrasiRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    7317: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrasiComponent": function RegistrasiComponent() {
          return (
            /* binding */
            _RegistrasiComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/master.service */
      54667);
      /* harmony import */


      var _components_data_pasien_data_pasien_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/data-pasien/data-pasien.service */
      95819);
      /* harmony import */


      var _services_registrasi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/registrasi.service */
      92881);
      /* harmony import */


      var _shared_vclaim_vclaim_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/vclaim/vclaim.service */
      82398);
      /* harmony import */


      var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/dialog */
      12404);
      /* harmony import */


      var _shared_vclaim_vclaim_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/vclaim/vclaim.component */
      90107);
      /* harmony import */


      var _components_data_pasien_data_pasien_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/data-pasien/data-pasien.component */
      81016);
      /* harmony import */


      var _components_form_rawat_jalan_form_rawat_jalan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/form-rawat-jalan/form-rawat-jalan.component */
      48457);
      /* harmony import */


      var primeng_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/menu */
      57791);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/dropdown */
      50103);
      /* harmony import */


      var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! primeng/calendar */
      88598);
      /* harmony import */


      var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! primeng/radiobutton */
      25498);
      /* harmony import */


      var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! primeng/inputtextarea */
      46543);

      function RegistrasiComponent_button_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegistrasiComponent_button_30_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r20.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Simpan Pasien Baru");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.form.invalid);
        }
      }

      function RegistrasiComponent_button_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegistrasiComponent_button_31_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r22.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r2.form.invalid);
        }
      }

      function RegistrasiComponent_span_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_112_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_143_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_149_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_155_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_161_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_167_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_188_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_209_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      function RegistrasiComponent_span_215_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 95);
        }
      }

      var _c0 = function _c0() {
        return {
          width: "85%"
        };
      };

      var _c1 = function _c1() {
        return {
          width: "75%"
        };
      };

      var _c2 = function _c2() {
        return {
          width: "100%"
        };
      };

      var _RegistrasiComponent = /*#__PURE__*/function () {
        function _RegistrasiComponent(masterService, fb, dataPasienService, registrasiService, vclaimService) {
          _classCallCheck(this, _RegistrasiComponent);

          this.masterService = masterService;
          this.fb = fb;
          this.dataPasienService = dataPasienService;
          this.registrasiService = registrasiService;
          this.vclaimService = vclaimService;
          this.rs = [];
          this.awalanNama = [];
          this.negara = [];
          this.provinsi = [];
          this.kota = [];
          this.kecamatan = [];
          this.kelurahan = [];
          this.suku = [];
          this.statusNikah = [];
          this.agama = [];
          this.pekerjaan = [];
          this.pendidikan = [];
          this.angkatan = [];
          this.pangkat = [];
          this.groupPasien = [];
          this.golonganPasien = [];
          this.dialogVclaim = false;
          this.dialogDataPasien = false;
          this.dialogFormRawatJalan = false;
        }

        _createClass(_RegistrasiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.initForm();
            this.masterService.rs.subscribe(function (data) {
              return _this4.rs = data;
            });
            this.masterService.awalanNama.subscribe(function (data) {
              return _this4.awalanNama = data;
            });
            this.masterService.negara.subscribe(function (data) {
              return _this4.negara = data;
            });
            this.masterService.provinsi.subscribe(function (data) {
              return _this4.provinsi = data;
            });
            this.masterService.kota.subscribe(function (data) {
              return _this4.kota = data;
            });
            this.masterService.kecamatan.subscribe(function (data) {
              return _this4.kecamatan = data;
            });
            this.masterService.kelurahan.subscribe(function (data) {
              return _this4.kelurahan = data;
            });
            this.masterService.suku.subscribe(function (data) {
              return _this4.suku = data;
            });
            this.masterService.statusNikah.subscribe(function (data) {
              return _this4.statusNikah = data;
            });
            this.masterService.agama.subscribe(function (data) {
              return _this4.agama = data;
            });
            this.masterService.pekerjaan.subscribe(function (data) {
              return _this4.pekerjaan = data;
            });
            this.masterService.pendidikan.subscribe(function (data) {
              return _this4.pendidikan = data;
            });
            this.masterService.angkatan.subscribe(function (data) {
              return _this4.angkatan = data;
            });
            this.masterService.pangkat.subscribe(function (data) {
              return _this4.pangkat = data;
            });
            this.masterService.groupPasien.subscribe(function (data) {
              return _this4.groupPasien = data;
            });
            this.masterService.golonganPasien.subscribe(function (data) {
              return _this4.golonganPasien = data;
            });
            this.dataPasienService.pasien.subscribe(function (data) {
              return _this4.setToForm(data);
            });
            this.dataPasienService.showDialog.subscribe(function (data) {
              return _this4.dialogDataPasien = data;
            });
            this.vclaimService.dialog.subscribe(function (data) {
              return _this4.dialogVclaim = data;
            });
            this.menuPendaftaran = [{
              label: 'Rawat Jalan',
              icon: 'bi bi-clipboard-pulse',
              command: function command() {
                _this4.openFormRawatJalan();
              }
            }, {
              label: 'Rawat Inap',
              icon: 'bi bi-hospital'
            }];
          }
        }, {
          key: "openFormRawatJalan",
          value: function openFormRawatJalan() {
            this.dialogFormRawatJalan = true;
          }
        }, {
          key: "getPesertaBpjs",
          value: function getPesertaBpjs() {
            var _a, _b, _c, _d;

            if ((_a = this.form.get('nomorAsuransi')) === null || _a === void 0 ? void 0 : _a.value) {
              this.vclaimService.getPesertaByNomorKartu((_b = this.form.get('nomorAsuransi')) === null || _b === void 0 ? void 0 : _b.value);
            } else {
              if ((_c = this.form.get('nik')) === null || _c === void 0 ? void 0 : _c.value) {
                this.vclaimService.getPesertaByNik((_d = this.form.get('nik')) === null || _d === void 0 ? void 0 : _d.value);
              }
            }
          }
        }, {
          key: "handleDataPasien",
          value: function handleDataPasien(data) {
            if (data) {
              this.setToForm(data);
            }
          }
        }, {
          key: "setToForm",
          value: function setToForm(data) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6;

            if (data) {
              (_a = this.form.get('id')) === null || _a === void 0 ? void 0 : _a.patchValue(data.id);
              (_b = this.form.get('nomorRm')) === null || _b === void 0 ? void 0 : _b.patchValue(data.norm);
              (_c = this.form.get('rs')) === null || _c === void 0 ? void 0 : _c.patchValue(data.rs);
              (_d = this.form.get('awalanNama')) === null || _d === void 0 ? void 0 : _d.patchValue(data.awalan);
              (_e = this.form.get('nama')) === null || _e === void 0 ? void 0 : _e.patchValue(data.nama);
              (_f = this.form.get('tempatLahir')) === null || _f === void 0 ? void 0 : _f.patchValue(data.tmpt_lahir);
              (_g = this.form.get('jnsKelamin')) === null || _g === void 0 ? void 0 : _g.patchValue(data.jns_kelamin);
              (_h = this.form.get('alamat')) === null || _h === void 0 ? void 0 : _h.patchValue(data.alamat);
              (_j = this.form.get('negara')) === null || _j === void 0 ? void 0 : _j.patchValue(data.negara);
              (_k = this.form.get('provinsi')) === null || _k === void 0 ? void 0 : _k.patchValue(data.provinsi);
              (_l = this.form.get('kota')) === null || _l === void 0 ? void 0 : _l.patchValue(data.kota);
              (_m = this.form.get('kecamatan')) === null || _m === void 0 ? void 0 : _m.patchValue(data.kecamatan);
              (_o = this.form.get('kelurahan')) === null || _o === void 0 ? void 0 : _o.patchValue(data.kelurahan);
              (_p = this.form.get('suku')) === null || _p === void 0 ? void 0 : _p.patchValue(data.suku);
              (_q = this.form.get('statusNikah')) === null || _q === void 0 ? void 0 : _q.patchValue(data.status_nikah);
              (_r = this.form.get('agama')) === null || _r === void 0 ? void 0 : _r.patchValue(data.agama);
              (_s = this.form.get('tlpPasien')) === null || _s === void 0 ? void 0 : _s.patchValue(data.tlp);
              (_t = this.form.get('tlpKeluarga')) === null || _t === void 0 ? void 0 : _t.patchValue(data.tlp_keluarga);
              (_u = this.form.get('pekerjaan')) === null || _u === void 0 ? void 0 : _u.patchValue(data.pekerjaan);
              (_v = this.form.get('pendidikan')) === null || _v === void 0 ? void 0 : _v.patchValue(data.pendidikan);
              (_w = this.form.get('golonganDarah')) === null || _w === void 0 ? void 0 : _w.patchValue(data.gol_darah);
              (_x = this.form.get('nik')) === null || _x === void 0 ? void 0 : _x.patchValue(data.nik);
              (_y = this.form.get('nrpNip')) === null || _y === void 0 ? void 0 : _y.patchValue(data.nrp_nip);
              (_z = this.form.get('angkatan')) === null || _z === void 0 ? void 0 : _z.patchValue(data.angkatan);
              (_0 = this.form.get('pangkat')) === null || _0 === void 0 ? void 0 : _0.patchValue(data.pangkat);
              (_1 = this.form.get('kesatuan')) === null || _1 === void 0 ? void 0 : _1.patchValue(data.kesatuan);
              (_2 = this.form.get('jabatan')) === null || _2 === void 0 ? void 0 : _2.patchValue(data.jabatan);
              (_3 = this.form.get('groupPasien')) === null || _3 === void 0 ? void 0 : _3.patchValue(data.group_pasien);
              (_4 = this.form.get('golonganPasien')) === null || _4 === void 0 ? void 0 : _4.patchValue(data.gol_pasien);
              (_5 = this.form.get('nomorAsuransi')) === null || _5 === void 0 ? void 0 : _5.patchValue(data.no_asuransi);

              if (data.tgl_lahir) {
                var tglLahir = new Date(data.tgl_lahir);
                (_6 = this.form.get('tglLahir')) === null || _6 === void 0 ? void 0 : _6.patchValue(tglLahir);
              }
            }
          }
        }, {
          key: "handleDataPeserta",
          value: function handleDataPeserta(data) {
            var _a, _b, _c, _d, _e, _f;

            if (data) {
              var peserta = this.dataPesertaBpjs.response.peserta;
              (_a = this.form.get('nama')) === null || _a === void 0 ? void 0 : _a.patchValue(peserta.nama);
              (_b = this.form.get('nomorAsuransi')) === null || _b === void 0 ? void 0 : _b.patchValue(peserta.noKartu);
              (_c = this.form.get('nik')) === null || _c === void 0 ? void 0 : _c.patchValue(peserta.nik);
              (_d = this.form.get('jnsKelamin')) === null || _d === void 0 ? void 0 : _d.patchValue(peserta.sex);
              if (peserta.sex == 'L') (_e = this.form.get('awalanNama')) === null || _e === void 0 ? void 0 : _e.patchValue(1);
              if (peserta.sex == 'P') (_f = this.form.get('awalanNama')) === null || _f === void 0 ? void 0 : _f.patchValue(2);
            }
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.form = this.fb.group({
              id: [''],
              nomorRm: [''],
              rs: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              awalanNama: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              nama: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              tempatLahir: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              tglLahir: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              jnsKelamin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              alamat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              negara: [101, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              provinsi: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              kota: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              kecamatan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              kelurahan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              suku: [''],
              statusNikah: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              agama: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              tlpPasien: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              tlpKeluarga: [''],
              pekerjaan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              pendidikan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              golonganDarah: [''],
              nik: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              nrpNip: [''],
              angkatan: [''],
              pangkat: [''],
              kesatuan: [''],
              jabatan: [''],
              groupPasien: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              golonganPasien: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              nomorAsuransi: ['']
            });
          }
        }, {
          key: "getKota",
          value: function getKota(provinsi) {
            this.masterService.getKota(provinsi);
          }
        }, {
          key: "getKecamatan",
          value: function getKecamatan(kota) {
            this.masterService.getKecamatan(kota);
          }
        }, {
          key: "getKelurahan",
          value: function getKelurahan(kecamatan) {
            this.masterService.getKelurahan(kecamatan);
          }
        }, {
          key: "getGolonganPasien",
          value: function getGolonganPasien(groupPasien) {
            this.masterService.getGolonganPasien(groupPasien);
          }
        }, {
          key: "save",
          value: function save() {}
        }, {
          key: "update",
          value: function update() {
            var _a;

            var tglLahir = this.reformatDate((_a = this.form.get('tglLahir')) === null || _a === void 0 ? void 0 : _a.value); // this.form.get('tglLahir')?.patchValue(tglLahir);

            this.form.value.tglLahir = tglLahir;
            this.registrasiService.updatePasien(this.form.value);
          }
        }, {
          key: "reformatDate",
          value: function reformatDate(date) {
            return date.toISOString().substr(0, 10);
          }
        }]);

        return _RegistrasiComponent;
      }();

      _RegistrasiComponent.ɵfac = function RegistrasiComponent_Factory(t) {
        return new (t || _RegistrasiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_components_data_pasien_data_pasien_service__WEBPACK_IMPORTED_MODULE_1__.DataPasienService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_registrasi_service__WEBPACK_IMPORTED_MODULE_2__.RegistrasiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_vclaim_vclaim_service__WEBPACK_IMPORTED_MODULE_3__.VclaimService));
      };

      _RegistrasiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _RegistrasiComponent,
        selectors: [["app-registrasi"]],
        decls: 218,
        vars: 129,
        consts: [["header", "Bridging VClaim BPJS", 3, "visible", "modal", "draggable", "visibleChange", "onShow"], ["header", "Data Pasien", 3, "visible", "modal", "draggable", "visibleChange"], ["header", "Form Rawat Jalan", 3, "visible", "modal", "draggable", "visibleChange"], [1, "row", "pl-3", "pr-3", 2, "margin-left", "-14px", "margin-right", "-14px"], [1, "col", "p-3", "bg-gray-500", "mb-3"], [1, "row"], [1, "col-auto", "border-right", "border-light"], [1, "btn", "btn-sm", "btn-secondary", "mr-1", 3, "click"], [1, "bi", "bi-search", "mr-1"], [1, "bi", "bi-plus-lg", "mr-1"], [1, "bi", "bi-chevron-down", "ml-2"], ["appendTo", "body", 3, "popup", "model"], ["submenuPendaftaran", ""], [1, "btn", "btn-sm", "btn-secondary", "mr-1"], [1, "bi", "bi-printer", "mr-1"], [1, "bi", "bi-credit-card", "mr-1"], [1, "bi", "bi-arrow-repeat", "mr-1"], [1, "col-auto"], ["class", "btn btn-sm btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "col", "tx-right"], [1, "bi", "bi-trash", "mr-1"], [1, "w-100"], [1, "col"], ["name", "form", 3, "formGroup"], [1, "row", "mb-2", 2, "display", "none"], [1, "col-4", "col-form-label"], ["type", "text", "formControlName", "id", "readonly", "readonly"], [1, "row", "mb-2"], ["class", "bi bi-exclamation-circle-fill tx-danger ml-1 tx-13", 4, "ngIf"], ["formControlName", "rs", "optionValue", "id", "optionLabel", "name", 3, "options", "autoDisplayFirst"], ["type", "text", "formControlName", "nomorRm", 1, "form-control"], ["for", "noAsuransi", 1, "col-4", "col-form-label"], ["type", "text", "formControlName", "nomorAsuransi", 1, "form-control"], ["for", "nik", 1, "col-4", "col-form-label"], ["type", "text", "formControlName", "nik", 1, "form-control"], ["for", "nama", 1, "col-4", "col-form-label"], [1, "input-group"], [1, "input-group-prepend"], ["formControlName", "awalanNama", "optionValue", "id", "optionLabel", "ket", 3, "options", "autoDisplayFirst"], ["type", "text", "formControlName", "nama", 1, "form-control"], ["for", "tmptLahir", 1, "col-4", "col-form-label"], ["type", "text", "formControlName", "tempatLahir", 1, "form-control"], ["for", "tglLahir", 1, "col-4", "col-form-label"], ["formControlName", "tglLahir", "dateFormat", "dd-mm-yy", 3, "showIcon"], ["for", "jnsKelamin", 1, "col-4", "col-form-label"], [1, "col", "pt-2"], ["name", "jnsKelamin", "value", "L", "formControlName", "jnsKelamin"], ["name", "jnsKelamin", "value", "P", "formControlName", "jnsKelamin", 1, "ml-3"], ["for", "alamat", 1, "col-4", "col-form-label"], ["pInputTextarea", "", "formControlName", "alamat", 3, "autoResize"], ["for", "provinsi", 1, "col-4", "col-form-label"], ["formControlName", "negara", "optionValue", "id", "optionLabel", "name", 3, "options", "filter", "autoDisplayFirst"], [1, "col-8"], ["formControlName", "provinsi", "optionValue", "id", "optionLabel", "name", 3, "options", "filter", "autoDisplayFirst", "ngModelChange"], ["for", "kota", 1, "col-4", "col-form-label"], ["ng-show", "form1.kota.$error.required", 1, "fontello-icon-attention-circle", "error"], ["formControlName", "kota", "optionValue", "id", "optionLabel", "name", 3, "options", "filter", "autoDisplayFirst", "ngModelChange"], ["for", "kecamatan", 1, "col-4", "col-form-label"], ["ng-show", "form1.kecamatan.$error.required", 1, "fontello-icon-attention-circle", "error"], ["formControlName", "kecamatan", "optionValue", "id", "optionLabel", "name", 3, "options", "filter", "autoDisplayFirst", "ngModelChange"], ["for", "kelurahan", 1, "col-4", "col-form-label"], ["ng-show", "form1.kelurahan.$error.required", 1, "fontello-icon-attention-circle", "error"], ["formControlName", "kelurahan", "optionValue", "id", "optionLabel", "name", 3, "options", "filter", "autoDisplayFirst"], [3, "formGroup"], ["for", "suku", 1, "col-4", "col-form-label"], ["formControlName", "suku", "optionValue", "id", "optionLabel", "name", 3, "options", "filter", "autoDisplayFirst"], ["for", "statusKawin", 1, "col-4", "col-form-label"], ["formControlName", "statusNikah", "optionValue", "statusNikahID", "optionLabel", "name", 3, "options", "autoDisplayFirst"], ["for", "agama", 1, "col-4", "col-form-label"], ["formControlName", "agama", "optionValue", "agamaID", "optionLabel", "name", 3, "options", "autoDisplayFirst"], ["for", "pekerjaan", 1, "col-4", "col-form-label"], ["formControlName", "pekerjaan", "optionValue", "pekerjaanid", "optionLabel", "name", 3, "options", "autoDisplayFirst"], ["for", "pendidikan", 1, "col-4", "col-form-label"], ["formControlName", "pendidikan", "optionValue", "pendidikanID", "optionLabel", "name", 3, "options", "autoDisplayFirst"], ["for", "notlp", 1, "col-4", "col-form-label"], ["type", "text", "formControlName", "tlpPasien", 1, "form-control"], ["for", "notlpklg", 1, "col-4", "col-form-label"], ["type", "text", "formControlName", "tlpKeluarga", 1, "form-control"], ["for", "goldar", 1, "col-4", "col-form-label"], ["type", "text", "formControlName", "golonganDarah", "maxlength", "3", 1, "form-control"], ["for", "nrp", 1, "col-4", "col-form-label"], ["type", "text", "formControlName", "nrpNip", 1, "form-control"], ["for", "angkatan", 1, "col-4", "col-form-label"], ["formControlName", "angkatan", "optionValue", "angkatanID", "optionLabel", "name", 3, "options", "autoDisplayFirst"], ["for", "pangkat", 1, "col-4", "col-form-label"], ["formControlName", "pangkat", "optionValue", "pangkatID", "optionLabel", "name", 3, "options", "autoDisplayFirst"], ["for", "kesatuan", 1, "col-4", "col-form-label"], ["type", "text", "formControlName", "kesatuan", 1, "form-control"], ["for", "jabatan", 1, "col-4", "col-form-label"], ["type", "text", "formControlName", "jabatan", 1, "form-control"], ["for", "golpas", 1, "col-4", "col-form-label"], ["formControlName", "groupPasien", "optionValue", "id", "optionLabel", "name", 3, "options", "autoDisplayFirst", "ngModelChange"], ["formControlName", "golonganPasien", "optionValue", "golpasID", "optionLabel", "golpasName", 3, "options", "autoDisplayFirst"], [1, "btn", "btn-sm", "btn-primary", 3, "disabled", "click"], [1, "bi", "bi-save", "mr-1"], [1, "bi", "bi-exclamation-circle-fill", "tx-danger", "ml-1", "tx-13"]],
        template: function RegistrasiComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-dialog", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function RegistrasiComponent_Template_p_dialog_visibleChange_0_listener($event) {
              return ctx.dialogVclaim = $event;
            })("onShow", function RegistrasiComponent_Template_p_dialog_onShow_0_listener() {
              return ctx.getPesertaBpjs();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-vclaim");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p-dialog", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function RegistrasiComponent_Template_p_dialog_visibleChange_2_listener($event) {
              return ctx.dialogDataPasien = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-data-pasien");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p-dialog", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function RegistrasiComponent_Template_p_dialog_visibleChange_4_listener($event) {
              return ctx.dialogFormRawatJalan = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-form-rawat-jalan");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegistrasiComponent_Template_button_click_10_listener() {
              return ctx.dialogDataPasien = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Cari Pasien");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegistrasiComponent_Template_button_click_13_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](18);

              return _r0.toggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Pendaftaran ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "p-menu", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Print ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegistrasiComponent_Template_button_click_23_listener() {
              return ctx.vclaimService.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " VClaim BPJS");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegistrasiComponent_Template_button_click_26_listener() {
              return ctx.form.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Refresh");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, RegistrasiComponent_button_30_Template, 3, 1, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, RegistrasiComponent_button_31_Template, 3, 1, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, " Batal");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "form", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " ID Pasien ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, " RS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, RegistrasiComponent_span_47_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "p-dropdown", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, " No. RM ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, " No. BPJS / Asuransi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "label", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, " NIK ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, RegistrasiComponent_span_63_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "label", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, " Nama ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, RegistrasiComponent_span_69_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "p-dropdown", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](74, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, " Tempat Lahir ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, RegistrasiComponent_span_78_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](80, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, " Tanggal Lahir ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](84, RegistrasiComponent_span_84_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](86, "p-calendar", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "label", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, " Jenis Kelamin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](90, RegistrasiComponent_span_90_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](92, "p-radioButton", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, " LAKI-LAKI ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](94, "p-radioButton", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "PEREMPUAN");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "label", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, " Alamat ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](100, RegistrasiComponent_span_100_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](102, "textarea", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, " Warga Negara ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](106, RegistrasiComponent_span_106_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](108, "p-dropdown", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, " Provinsi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](112, RegistrasiComponent_span_112_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "p-dropdown", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegistrasiComponent_Template_p_dropdown_ngModelChange_114_listener() {
              var tmp_b_0;
              return ctx.getKota((tmp_b_0 = ctx.form.get("provinsi")) == null ? null : tmp_b_0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](115, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, " Kota ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](118, "span", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "p-dropdown", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegistrasiComponent_Template_p_dropdown_ngModelChange_120_listener() {
              var tmp_b_0;
              return ctx.getKecamatan((tmp_b_0 = ctx.form.get("kota")) == null ? null : tmp_b_0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "label", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](123, " Kecamatan");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](124, "span", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](125, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "p-dropdown", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegistrasiComponent_Template_p_dropdown_ngModelChange_126_listener() {
              var tmp_b_0;
              return ctx.getKelurahan((tmp_b_0 = ctx.form.get("kecamatan")) == null ? null : tmp_b_0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "label", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](129, " Kelurahan");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](130, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](132, "p-dropdown", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](133, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "form", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](136, "label", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, " Suku ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](139, "p-dropdown", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](140, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](141, "label", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](142, " Status Perkawinan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](143, RegistrasiComponent_span_143_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](145, "p-dropdown", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](146, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](148, " Agama ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](149, RegistrasiComponent_span_149_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](151, "p-dropdown", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](153, "label", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](154, " Pekerjaan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](155, RegistrasiComponent_span_155_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](157, "p-dropdown", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](158, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](159, "label", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](160, " Pendidikan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](161, RegistrasiComponent_span_161_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](163, "p-dropdown", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](165, "label", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](166, " Telepon Pasien ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](167, RegistrasiComponent_span_167_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](168, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](169, "input", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](170, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](171, "label", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](172, " Telepon Keluarga ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](174, "input", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](175, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](176, "label", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](177, " Golongan Darah ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](178, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](179, "input", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](180, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](181, "label", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](182, " NRP / NIP ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](183, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](184, "input", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](185, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](186, "label", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](187, " Angkatan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](188, RegistrasiComponent_span_188_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](189, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](190, "p-dropdown", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](191, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](192, "label", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](193, " Pangkat / Golongan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](194, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](195, "p-dropdown", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](196, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](197, "label", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](198, " Kesatuan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](199, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](200, "input", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](201, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](202, "label", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](203, " Jabatan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](204, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](205, "input", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](206, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](207, "label", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](208, " Group Pasien ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](209, RegistrasiComponent_span_209_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](210, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](211, "p-dropdown", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegistrasiComponent_Template_p_dropdown_ngModelChange_211_listener() {
              var tmp_b_0;
              return ctx.getGolonganPasien((tmp_b_0 = ctx.form.get("groupPasien")) == null ? null : tmp_b_0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](212, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](213, "label", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](214, " Golongan Pasien ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](215, RegistrasiComponent_span_215_Template, 1, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](216, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](217, "p-dropdown", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_14_0;
            var tmp_15_0;
            var tmp_17_0;
            var tmp_21_0;
            var tmp_22_0;
            var tmp_25_0;
            var tmp_26_0;
            var tmp_28_0;
            var tmp_29_0;
            var tmp_32_0;
            var tmp_37_0;
            var tmp_59_0;
            var tmp_63_0;
            var tmp_67_0;
            var tmp_71_0;
            var tmp_75_0;
            var tmp_76_0;
            var tmp_83_0;
            var tmp_87_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](110, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx.dialogVclaim)("modal", true)("draggable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](111, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx.dialogDataPasien)("modal", true)("draggable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](112, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx.dialogFormRawatJalan)("modal", true)("draggable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("popup", true)("model", ctx.menuPendaftaran);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !((tmp_14_0 = ctx.form.get("id")) == null ? null : tmp_14_0.value));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx.form.get("id")) == null ? null : tmp_15_0.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx.form.get("rs")) == null ? null : tmp_17_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](113, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.rs)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_21_0 = ctx.form.get("nik")) == null ? null : tmp_21_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_22_0 = ctx.form.get("nama")) == null ? null : tmp_22_0.errors) || ((tmp_22_0 = ctx.form.get("awalanNama")) == null ? null : tmp_22_0.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.awalanNama)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_25_0 = ctx.form.get("tempatLahir")) == null ? null : tmp_25_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_26_0 = ctx.form.get("tglLahir")) == null ? null : tmp_26_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showIcon", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_28_0 = ctx.form.get("jnsKelamin")) == null ? null : tmp_28_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_29_0 = ctx.form.get("alamat")) == null ? null : tmp_29_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](114, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("autoResize", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_32_0 = ctx.form.get("negara")) == null ? null : tmp_32_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](115, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.negara)("filter", true)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_37_0 = ctx.form.get("provinsi")) == null ? null : tmp_37_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](116, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.provinsi)("filter", true)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](117, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.kota)("filter", true)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](118, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.kecamatan)("filter", true)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](119, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.kelurahan)("filter", true)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](120, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.suku)("filter", true)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_59_0 = ctx.form.get("statusNikah")) == null ? null : tmp_59_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](121, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.statusNikah)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_63_0 = ctx.form.get("agama")) == null ? null : tmp_63_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](122, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.agama)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_67_0 = ctx.form.get("pekerjaan")) == null ? null : tmp_67_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](123, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.pekerjaan)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_71_0 = ctx.form.get("pendidikan")) == null ? null : tmp_71_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](124, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.pendidikan)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_75_0 = ctx.form.get("tlpPasien")) == null ? null : tmp_75_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_76_0 = ctx.form.get("angkatan")) == null ? null : tmp_76_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](125, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.angkatan)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](126, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.pangkat)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_83_0 = ctx.form.get("groupPasien")) == null ? null : tmp_83_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](127, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.groupPasien)("autoDisplayFirst", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_87_0 = ctx.form.get("golonganPasien")) == null ? null : tmp_87_0.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](128, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.golonganPasien)("autoDisplayFirst", false);
          }
        },
        directives: [primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.Dialog, _shared_vclaim_vclaim_component__WEBPACK_IMPORTED_MODULE_4__.VclaimComponent, _components_data_pasien_data_pasien_component__WEBPACK_IMPORTED_MODULE_5__.DataPasienComponent, _components_form_rawat_jalan_form_rawat_jalan_component__WEBPACK_IMPORTED_MODULE_6__.FormRawatJalanComponent, primeng_menu__WEBPACK_IMPORTED_MODULE_10__.Menu, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, primeng_calendar__WEBPACK_IMPORTED_MODULE_13__.Calendar, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_14__.RadioButton, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__.InputTextarea, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXNpLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    23757: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrasiModule": function RegistrasiModule() {
          return (
            /* binding */
            _RegistrasiModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _registrasi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./registrasi-routing.module */
      35487);
      /* harmony import */


      var _registrasi_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./registrasi.component */
      7317);
      /* harmony import */


      var _components_data_pasien_data_pasien_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/data-pasien/data-pasien.component */
      81016);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      72271);
      /* harmony import */


      var _components_form_rawat_jalan_form_rawat_jalan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/form-rawat-jalan/form-rawat-jalan.component */
      48457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _RegistrasiModule = function _RegistrasiModule() {
        _classCallCheck(this, _RegistrasiModule);
      };

      _RegistrasiModule.ɵfac = function RegistrasiModule_Factory(t) {
        return new (t || _RegistrasiModule)();
      };

      _RegistrasiModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _RegistrasiModule
      });
      _RegistrasiModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _registrasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrasiRoutingModule], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_RegistrasiModule, {
          declarations: [_registrasi_component__WEBPACK_IMPORTED_MODULE_1__.RegistrasiComponent, _components_data_pasien_data_pasien_component__WEBPACK_IMPORTED_MODULE_2__.DataPasienComponent, _components_form_rawat_jalan_form_rawat_jalan_component__WEBPACK_IMPORTED_MODULE_4__.FormRawatJalanComponent],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _registrasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrasiRoutingModule],
          exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_modules_registrasi_registrasi_module_ts-es5.js.map