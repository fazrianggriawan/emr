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

    public subMenu : MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {

        this.subMenu = [
            { label: 'Subjective', routerLink: 'medical_record/subjective' },
            { label: 'Pemeriksaan', routerLink: 'medical_record/pemeriksaan' },
            { label: 'Diagnosa & Prosedur', routerLink: 'medical_record/diagnosa_prosedur' },
            { label: 'E-Resep', routerLink: 'medical_record/farmasi' },
            {
                label: 'Penunjang',
                items: [
                    {label: 'Laboratorium'},
                    {label: 'Radiologi'},
                ]
            },
            { label: 'Planning', routerLink: 'medical_record/planning' },
            { label: 'Summary Review', routerLink: 'medical_record' },
        ];

        this.items = [{
            label: 'Menu',
            items: [
                { label: 'SOAP', link: '/cppt' },
                { label: 'Pengkajian Awal Medis', link: '/pengkajian_awal_medis' },
                { label: 'Laporan Pembedahaan Dengan Anestesi Lokal', link: '/lap_bedah_anest_lokal' },
                { label: 'Surat Masuk Perawatan', link: '/surat_masuk_perawatan' },
                { label: 'Pengajuan Pembedahaan', link: '/pengajuan_pembedahaan' },
                // {label: 'Catatan Edukasi dan Informasi Terintegrasi Pasien / Keluarga'},
                // {label: 'Persetujuan Tindakan Medis'},
                // {label: 'DPJP dan PPJA'},
                // {label: 'Catatan Pemindahan Pasien Antar Ruangan'},
                // {label: 'Penandaaan Lokasi Operasi'},
                // {label: 'Daftar Tilik Catatan Keperawatan Perioperatif'},
            ]
        }, {
            label: 'Penunjang',
            items: [
                { label: 'Laboratorium', link: '/laboratorium' },
                { label: 'Radiologi', link: '/radiologi' },
                { label: 'Farmasi', link: '/e_resep' },
            ]
        }]
    }

    public setActiveMenu(e: any){
        let childs = document.getElementsByClassName('nav-link');

        Array.prototype.forEach.call(childs, function(el){
            el.classList.remove('active');
        })

        e.target.classList.add('active');
    }

}
