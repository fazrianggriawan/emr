(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkiniapps"] = self["webpackChunkiniapps"] || []).push([["common"], {
    /***/
    54667: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MasterService": function MasterService() {
          return (
            /* binding */
            _MasterService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var src_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/config */
      39698);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _MasterService = /*#__PURE__*/function () {
        function _MasterService(http) {
          _classCallCheck(this, _MasterService);

          this.http = http;
          this.rs = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.awalanNama = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.negara = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.provinsi = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.kota = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.kecamatan = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.kelurahan = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.suku = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.statusNikah = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.agama = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.pekerjaan = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.pendidikan = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.angkatan = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.pangkat = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.groupPasien = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.golonganPasien = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.getRs();
          this.getAwalanNama();
          this.getNegara();
          this.getProvinsi();
          this.getSuku();
          this.getStatusNikah();
          this.getAgama();
          this.getPekerjaan();
          this.getPendidikan();
          this.getAngkatan();
          this.getPangkat();
          this.getGroupPasien();
        }

        _createClass(_MasterService, [{
          key: "getRs",
          value: function getRs() {
            var _this = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/rs')).subscribe(function (data) {
              return _this.rs.next(data.data);
            });
          }
        }, {
          key: "getAwalanNama",
          value: function getAwalanNama() {
            var _this2 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/awalan_nama')).subscribe(function (data) {
              return _this2.awalanNama.next(data.data);
            });
          }
        }, {
          key: "getNegara",
          value: function getNegara() {
            var _this3 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/negara')).subscribe(function (data) {
              return _this3.negara.next(data.data);
            });
          }
        }, {
          key: "getProvinsi",
          value: function getProvinsi() {
            var _this4 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/provinsi')).subscribe(function (data) {
              return _this4.provinsi.next(data.data);
            });
          }
        }, {
          key: "getKota",
          value: function getKota(idProvinsi) {
            var _this5 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/kota/id_provinsi/' + idProvinsi)).subscribe(function (data) {
              return _this5.kota.next(data.data);
            });
          }
        }, {
          key: "getKecamatan",
          value: function getKecamatan(idKota) {
            var _this6 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/kecamatan/id_kota/' + idKota)).subscribe(function (data) {
              return _this6.kecamatan.next(data.data);
            });
          }
        }, {
          key: "getKelurahan",
          value: function getKelurahan(idKecamatan) {
            var _this7 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/kelurahan/id_kecamatan/' + idKecamatan)).subscribe(function (data) {
              return _this7.kelurahan.next(data.data);
            });
          }
        }, {
          key: "getSuku",
          value: function getSuku() {
            var _this8 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/suku')).subscribe(function (data) {
              return _this8.suku.next(data.data);
            });
          }
        }, {
          key: "getStatusNikah",
          value: function getStatusNikah() {
            var _this9 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/status_nikah')).subscribe(function (data) {
              return _this9.statusNikah.next(data.data);
            });
          }
        }, {
          key: "getAgama",
          value: function getAgama() {
            var _this10 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/agama')).subscribe(function (data) {
              return _this10.agama.next(data.data);
            });
          }
        }, {
          key: "getPekerjaan",
          value: function getPekerjaan() {
            var _this11 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/pekerjaan')).subscribe(function (data) {
              return _this11.pekerjaan.next(data.data);
            });
          }
        }, {
          key: "getPendidikan",
          value: function getPendidikan() {
            var _this12 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/pendidikan')).subscribe(function (data) {
              return _this12.pendidikan.next(data.data);
            });
          }
        }, {
          key: "getAngkatan",
          value: function getAngkatan() {
            var _this13 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/angkatan')).subscribe(function (data) {
              return _this13.angkatan.next(data.data);
            });
          }
        }, {
          key: "getPangkat",
          value: function getPangkat() {
            var _this14 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/pangkat')).subscribe(function (data) {
              return _this14.pangkat.next(data.data);
            });
          }
        }, {
          key: "getGroupPasien",
          value: function getGroupPasien() {
            var _this15 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/group_pasien')).subscribe(function (data) {
              return _this15.groupPasien.next(data.data);
            });
          }
        }, {
          key: "getGolonganPasien",
          value: function getGolonganPasien(idGroupPasien) {
            var _this16 = this;

            this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/golongan_pasien/id_grouppasien/' + idGroupPasien)).subscribe(function (data) {
              return _this16.golonganPasien.next(data.data);
            });
          }
        }]);

        return _MasterService;
      }();

      _MasterService.ɵfac = function MasterService_Factory(t) {
        return new (t || _MasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _MasterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _MasterService,
        factory: _MasterService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    92881: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrasiService": function RegistrasiService() {
          return (
            /* binding */
            _RegistrasiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/config */
      39698);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _RegistrasiService = /*#__PURE__*/function () {
        function _RegistrasiService(http) {
          _classCallCheck(this, _RegistrasiService);

          this.http = http;
        }

        _createClass(_RegistrasiService, [{
          key: "updatePasien",
          value: function updatePasien(data) {
            this.http.post(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('pasien/update'), data).subscribe(function (data) {
              return console.log(data);
            });
          }
        }]);

        return _RegistrasiService;
      }();

      _RegistrasiService.ɵfac = function RegistrasiService_Factory(t) {
        return new (t || _RegistrasiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _RegistrasiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _RegistrasiService,
        factory: _RegistrasiService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map