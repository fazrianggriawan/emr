(self["webpackChunkiniapps"] = self["webpackChunkiniapps"] || []).push([["common"],{

/***/ 54667:
/*!***************************************************************!*\
  !*** ./src/app/modules/registrasi/services/master.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterService": function() { return /* binding */ MasterService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config */ 39698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);




class MasterService {
    constructor(http) {
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
    getRs() {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/rs')).subscribe(data => this.rs.next(data.data));
    }
    getAwalanNama() {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/awalan_nama')).subscribe(data => this.awalanNama.next(data.data));
    }
    getNegara() {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/negara')).subscribe(data => this.negara.next(data.data));
    }
    getProvinsi() {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/provinsi')).subscribe(data => this.provinsi.next(data.data));
    }
    getKota(idProvinsi) {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/kota/id_provinsi/' + idProvinsi)).subscribe(data => this.kota.next(data.data));
    }
    getKecamatan(idKota) {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/kecamatan/id_kota/' + idKota)).subscribe(data => this.kecamatan.next(data.data));
    }
    getKelurahan(idKecamatan) {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/kelurahan/id_kecamatan/' + idKecamatan)).subscribe(data => this.kelurahan.next(data.data));
    }
    getSuku() {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/suku')).subscribe(data => this.suku.next(data.data));
    }
    getStatusNikah() {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/status_nikah')).subscribe(data => this.statusNikah.next(data.data));
    }
    getAgama() {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/agama')).subscribe(data => this.agama.next(data.data));
    }
    getPekerjaan() {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/pekerjaan')).subscribe(data => this.pekerjaan.next(data.data));
    }
    getPendidikan() {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/pendidikan')).subscribe(data => this.pendidikan.next(data.data));
    }
    getAngkatan() {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/angkatan')).subscribe(data => this.angkatan.next(data.data));
    }
    getPangkat() {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/pangkat')).subscribe(data => this.pangkat.next(data.data));
    }
    getGroupPasien() {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/group_pasien')).subscribe(data => this.groupPasien.next(data.data));
    }
    getGolonganPasien(idGroupPasien) {
        this.http.get(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('master/golongan_pasien/id_grouppasien/' + idGroupPasien)).subscribe(data => this.golonganPasien.next(data.data));
    }
}
MasterService.ɵfac = function MasterService_Factory(t) { return new (t || MasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
MasterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MasterService, factory: MasterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92881:
/*!*******************************************************************!*\
  !*** ./src/app/modules/registrasi/services/registrasi.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrasiService": function() { return /* binding */ RegistrasiService; }
/* harmony export */ });
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config */ 39698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);



class RegistrasiService {
    constructor(http) {
        this.http = http;
    }
    updatePasien(data) {
        this.http.post(src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.api_url('pasien/update'), data).subscribe(data => console.log(data));
    }
}
RegistrasiService.ɵfac = function RegistrasiService_Factory(t) { return new (t || RegistrasiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RegistrasiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegistrasiService, factory: RegistrasiService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map