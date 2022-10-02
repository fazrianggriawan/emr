import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu-laporan',
    templateUrl: './menu-laporan.component.html',
    styleUrls: ['./menu-laporan.component.css']
})
export class MenuLaporanComponent implements OnInit {

    items!: MenuItem[];

    constructor() { }

    ngOnInit(): void {
        this.items = [
            { label: 'Dashboard' },
            {
                label: 'Kasir', items: [
                    { label: 'Cara Pembayaran' },
                    { label: 'Piutang' },
                ]
            },
            {
                label: 'Administrasi Pasien', items: [
                    { label: 'Pengunjung' },
                    { label: 'Kunjungan' },
                    { label: '10 Besar Penyakit' },
                    { label: 'Indikator Pelayanan' },
                    { label: 'BOR' },
                    { label: 'Pasien Baru & Lama' },
                ]
            },
            {
                label: 'Rawat Jalan', items: [
                    { label: 'Pengunjung' },
                    { label: 'Kunjungan' },
                    { label: '10 Besar Penyakit' },
                ]
            },
            {
                label: 'Rawat Inap', items: [
                    { label: 'Pengunjung' },
                    { label: 'Kunjungan' },
                    { label: '10 Besar Penyakit' },
                ]
            },
            {
                label: 'Laboratorium', items: [
                    { label: 'Pengunjung' },
                    { label: 'Kunjungan' },
                    { label: '10 Besar Penyakit' },
                ]
            },
            {
                label: 'Radiologi', items: [
                    { label: 'Pengunjung' },
                    { label: 'Kunjungan' },
                    { label: '10 Besar Penyakit' },
                ]
            },
            {
                label: 'Kamar Operasi', items: [
                    { label: 'Pengunjung' },
                    { label: 'Kunjungan' },
                    { label: '10 Besar Penyakit' },
                ]
            },
            {
                label: 'IGD', items: [
                    { label: 'Pengunjung' },
                    { label: 'Kunjungan' },
                    { label: '10 Besar Penyakit' },
                ]
            },
            {
                label: 'BPJS', items: [
                    { label: 'Pengajuan Klaim' },
                    { label: 'Realisasi Klaim' },
                ]
            },
        ];
    }

}
