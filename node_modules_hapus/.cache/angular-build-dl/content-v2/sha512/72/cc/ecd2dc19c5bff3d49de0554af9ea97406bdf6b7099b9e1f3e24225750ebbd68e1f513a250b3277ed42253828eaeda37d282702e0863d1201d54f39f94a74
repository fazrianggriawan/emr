(self["webpackChunkiniapps"] = self["webpackChunkiniapps"] || []).push([["src_app_components_forms_rencan-berobat-lanjutan-form_rencan-berobat-lanjutan-form_component_ts"],{

/***/ 9506:
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/forms/rencan-berobat-lanjutan-form/rencan-berobat-lanjutan-form.component.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RencanBerobatLanjutanFormComponent": function() { return /* binding */ RencanBerobatLanjutanFormComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/calendar */ 8638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_save_status_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/save-status.service */ 9349);
/* harmony import */ var src_app_services_cppt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cppt.service */ 2398);







class RencanBerobatLanjutanFormComponent {
    constructor(SaveStatusService, formData, cpptService) {
        this.SaveStatusService = SaveStatusService;
        this.formData = formData;
        this.cpptService = cpptService;
        this.formRencanaBerobat = this.formData.group({
            terapi: [],
            tglSuratRujukan: [null],
            alasanBelumDikembalikan: [null],
            rencanaTindakan: [null],
            tglBerobatLanjutan: [null],
            noAntrian: ['2']
        });
    }
    doSave() {
        this.cpptService.saveKeluhan(this.formRencanaBerobat.value).subscribe(data => {
            console.log(data);
        });
    }
    ngOnInit() {
        this.SaveStatusService.getSaveStatus().subscribe(data => { this.doSave(); });
    }
}
RencanBerobatLanjutanFormComponent.ɵfac = function RencanBerobatLanjutanFormComponent_Factory(t) { return new (t || RencanBerobatLanjutanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_save_status_service__WEBPACK_IMPORTED_MODULE_0__.SaveStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_cppt_service__WEBPACK_IMPORTED_MODULE_1__.CpptService)); };
RencanBerobatLanjutanFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RencanBerobatLanjutanFormComponent, selectors: [["app-form-rencana-berobat"]], decls: 34, vars: 3, consts: [[1, "p-mt-2", 3, "formGroup"], [1, "form-fieldset"], [1, "form-group", "row", "bd-b", "p-mb-2", "p-pb-2"], ["for", "inputEmail3", 1, "col-3", "col-form-label"], [1, "col-3"], ["pInputText", "", "formControlName", "terapi", 1, "form-control"], ["placeholder", "Pilih Tanggal", "dateFormat", "dd-mm-yy", "formControlName", "tglSuratRujukan", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["for", "formGroupExampleInput", 1, "d-block"], ["pInputText", "", "formControlName", "alasanBelumDikembalikan", 1, "form-control"], [1, "form-group", "p-mt-2"], ["pInputText", "", "formControlName", "rencanaTindakan", 1, "form-control"], ["for", "formGroupExampleInput", 1, "d-block", "p-mt-2"], ["placeholder", "Pilih Tanggal", "dateFormat", "dd-mm-yy", "formControlName", "tglBerobatLanjutan", 3, "ngModel", "ngModelChange"], ["pInputText", "", "readonly", "", "formControlName", "noAntrian", 1, "form-control"]], template: function RencanBerobatLanjutanFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "fieldset", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Surat Keterangan Berobat Lanjutan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Terapi");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Tgl. Surat Rujukan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p-calendar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RencanBerobatLanjutanFormComponent_Template_p_calendar_ngModelChange_13_listener($event) { return ctx.tglSuratRujukan = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Belum dapat dikembalikan ke Fasilitas Perujuk dengan alasan :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Rencana tindakan lanjut yang akan dilakukan pada kunjungan selanjutnya :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Surat keterangan ini digunakan untuk 1(satu) kali kunjungan dengan diagnosa di atas pada :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Tanggal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p-calendar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RencanBerobatLanjutanFormComponent_Template_p_calendar_ngModelChange_28_listener($event) { return ctx.tglBerobatLanjutan = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "No. Antrian");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formRencanaBerobat);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.tglSuratRujukan);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.tglBerobatLanjutan);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_calendar__WEBPACK_IMPORTED_MODULE_4__.Calendar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW5jYW4tYmVyb2JhdC1sYW5qdXRhbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
class RencanBerobatLanjutanFormComponentModule {
}
RencanBerobatLanjutanFormComponentModule.ɵfac = function RencanBerobatLanjutanFormComponentModule_Factory(t) { return new (t || RencanBerobatLanjutanFormComponentModule)(); };
RencanBerobatLanjutanFormComponentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RencanBerobatLanjutanFormComponentModule });
RencanBerobatLanjutanFormComponentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_4__.CalendarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RencanBerobatLanjutanFormComponentModule, { declarations: [RencanBerobatLanjutanFormComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_4__.CalendarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_forms_rencan-berobat-lanjutan-form_rencan-berobat-lanjutan-form_component_ts-es2015.js.map