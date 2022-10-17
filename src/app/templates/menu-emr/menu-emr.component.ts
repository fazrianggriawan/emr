import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu-emr',
    templateUrl: './menu-emr.component.html',
    styleUrls: ['./menu-emr.component.css']
})
export class MenuEmrComponent implements OnInit {

    items: any;
    term: string = '';

    public subMenu: MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {
        // this.items = [
        //     { label: 'Dashboard' },
        //     {
        //         label: 'Kasir', items: [
        //             { label: 'Cara Pembayaran' },
        //             { label: 'Piutang' },
        //         ]
        //     },
        //     {
        //         label: 'Administrasi Pasien', items: [
        //             { label: 'Pengunjung' },
        //             { label: 'Kunjungan' },
        //             { label: '10 Besar Penyakit' },
        //             { label: 'Indikator Pelayanan' },
        //             { label: 'BOR' },
        //             { label: 'Pasien Baru & Lama' },
        //         ]
        //     },
        //     {
        //         label: 'Rawat Jalan', items: [
        //             { label: 'Pengunjung' },
        //             { label: 'Kunjungan' },
        //             { label: '10 Besar Penyakit' },
        //         ]
        //     },
        //     {
        //         label: 'Rawat Inap', items: [
        //             { label: 'Pengunjung' },
        //             { label: 'Kunjungan' },
        //             { label: '10 Besar Penyakit' },
        //         ]
        //     },
        //     {
        //         label: 'Laboratorium', items: [
        //             { label: 'Pengunjung' },
        //             { label: 'Kunjungan' },
        //             { label: '10 Besar Penyakit' },
        //         ]
        //     },
        //     {
        //         label: 'Radiologi', items: [
        //             { label: 'Pengunjung' },
        //             { label: 'Kunjungan' },
        //             { label: '10 Besar Penyakit' },
        //         ]
        //     },
        //     {
        //         label: 'Kamar Operasi', items: [
        //             { label: 'Pengunjung' },
        //             { label: 'Kunjungan' },
        //             { label: '10 Besar Penyakit' },
        //         ]
        //     },
        //     {
        //         label: 'IGD', items: [
        //             { label: 'Pengunjung' },
        //             { label: 'Kunjungan' },
        //             { label: '10 Besar Penyakit' },
        //         ]
        //     },
        //     {
        //         label: 'BPJS', items: [
        //             { label: 'Pengajuan Klaim' },
        //             { label: 'Realisasi Klaim' },
        //         ]
        //     },
        // ];


        this.items = [
            { label: 'Data Pasien', routerLink: 'medicalRecord' },
            // {
            //     label: 'Form', items: [
            //         { label: 'Assessment Awal' },
            //         { label: 'Surat Masuk Perawatan' },
            //         { label: 'Laporan Operasi' },
            //     ]
            // },
            { label: 'CPPT', routerLink: 'medicalRecord/cppt' },
            { label: 'Radiologi', routerLink: 'medicalRecord/radiologi' },
            { label: 'Laboratorium', routerLink: 'medicalRecord/laboratorium' },
            { label: 'Diagnosa & Prosedur', routerLink: 'medicalRecord/diagnosa_prosedur' },
            { label: 'E-Resep', routerLink: 'medicalRecord/farmasi' },
            { label: 'Konsul', routerLink: 'medicalRecord/konsul' },
            { label: 'Summary Review', routerLink: 'medicalRecord/planning' },
            { label: 'Penanda Organ', routerLink: 'medicalRecord/konva' },
            { label: 'Resume Medis', routerLink: 'medicalRecord/resume_medis' },
        ];
    }

    public setActiveMenu(e: any) {
        let childs = document.getElementsByClassName('nav-link');

        Array.prototype.forEach.call(childs, function (el) {
            el.classList.remove('active');
        })

        e.target.classList.add('active');
    }

}
