import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';
import { DataPasienService } from '../../registrasi/components/data-pasien/data-pasien.service';

@Injectable({
    providedIn: 'root'
})
export class VclaimService {

    peserta = new BehaviorSubject<any>('');
    dialog = new BehaviorSubject<boolean>(false);
    diagnosa = new BehaviorSubject<any>('');
    poliklinik = new BehaviorSubject<any>('');
    dokter = new BehaviorSubject<any>('');
    assessmentPelayanan = new BehaviorSubject<any>('');
    kelas = new BehaviorSubject<any>('');
    statusLaka = new BehaviorSubject<any>('');
    pembiayaanNaikKelas = new BehaviorSubject<any>('');
    jnsKunjungan = new BehaviorSubject<any>('');

    saveStatus = new BehaviorSubject<boolean>(false);

    dataPasien: any;

    constructor(
        private http: HttpClient,
        private dataPasienService: DataPasienService,
        private appService: AppService
    ) {
        this.dataPasienService.pasien.subscribe(data => this.dataPasien = data)
        this.getAssessmentPelayanan();
        this.getKelas();
        this.getPembiayanNaikKelas();
        this.getStatusLaka();
        this.getJnsKunjungan();
    }

    public save(data: any) {
        this.http.post<any>(config.api_vclaim('sep/save'), data)
            .subscribe(data => {
                if(data.metaData.code == '200'){
                    this.appService.setNotification('success', data.metaData.message)
                    this.saveStatus.next(true);
                    this.printSep(data.response.sep.noSep);
                }else{
                    this.appService.setNotification('error', data.metaData.message);
                    this.saveStatus.next(false);
                }
            })
    }

    public getPesertaByNomorKartu(key: string = '') {
        if (this.dataPasien.no_asuransi) key = this.dataPasien.no_asuransi;
        if (key != ''){
            this.http.get<any>(config.api_vclaim('peserta/nomorKartu/' + key))
                .subscribe(data => {
                    if( data.metaData.code == '200' ){
                        this.peserta.next(data.response)
                    }else{
                        this.peserta.next('');
                        this.appService.setNotification('error', data.metaData.message);
                    }
                })
        }
    }

    public getPesertaByNik(key: string = '') {
        if (this.dataPasien.nik) key = this.dataPasien.nik;
        if (key != '')
            this.http.get<any>(config.api_vclaim('peserta/nik/' + key)).subscribe(data => this.peserta.next(data.response))
    }

    public getDiagnosa(key: string) {
        this.http.get<any>(config.api_vclaim('referensi/diagnosa/' + key))
            .subscribe(data => {
                if (data.metaData.code == '200') {
                    this.diagnosa.next(data.response.diagnosa)
                }
            })
    }

    public getPoliklinik(key: string) {
        this.http.get<any>(config.api_vclaim('referensi/poliklinik/' + key))
            .subscribe(data => {
                if (data.metaData.code == '200') {
                    this.poliklinik.next(data.response.poli)
                }
            })
    }

    public getDpjp(kodePerawatan: string, kodePoli: string) {
        this.http.get<any>(config.api_vclaim('referensi/dokter/jnsPerawatan/' + kodePerawatan + '/poliklinik/' + kodePoli))
            .subscribe(data => {
                if (data.metaData.code == '200') {
                    this.dokter.next(data.response.list)
                }
            })
    }

    public getAssessmentPelayanan() {
        let data = [
            { kode: '1', nama: 'POLI SPESIALIS TIDAK TERSEDIA' },
            { kode: '2', nama: 'JAM POLI TELAH BERAKHIR' },
            { kode: '3', nama: 'DOKTER SPESIALIS YANG DIMAKSUD TIDAK PRAKTEK Dokter Spesialis' },
            { kode: '4', nama: 'ATAS INSTRUKSI RS' },
            { kode: '5', nama: 'TUJUAN KONTROL' },
        ]
        this.assessmentPelayanan.next(data);
    }

    public getKelas() {
        let data = [
            { kode: '', nama: 'TIDAK' },
            { kode: '1', nama: 'VVIP' },
            { kode: '2', nama: 'VIP' },
            { kode: '3', nama: 'KELAS I' },
            { kode: '4', nama: 'KELAS II' },
            { kode: '5', nama: 'KELAS III' },
            { kode: '6', nama: 'ICCU' },
            { kode: '7', nama: 'ICU' }
        ]
        this.kelas.next(data);
    }

    public getStatusLaka() {
        let data = [
            { kode: '0', nama: 'Bukan Kasus Kecelakaan' },
            { kode: '1', nama: 'KLL dan Bukan Kecelakaan Kerja (BKK)' },
            { kode: '2', nama: 'KLL dan Kecelakaan Kerja (KK)' },
            { kode: '3', nama: 'Kecelakaan Kerja (KK)' },
        ]
        this.statusLaka.next(data);
    }

    public getPembiayanNaikKelas() {
        let data = [
            { kode: '1', nama: 'Pribadi' },
            { kode: '2', nama: 'Pemberi Kerja' },
            { kode: '3', nama: 'Asuransi Kesehatan Tambahan' },
        ]
        this.pembiayaanNaikKelas.next(data);
    }

    public getJnsKunjungan() {
        let data = [
            { kode: 'rujukanBaru', nama: 'Rujukan Baru', jnsPelayanan: '2', tujuanKunjungan: '0' },
            { kode: 'kontrolKembali', nama: 'Kontrol Kembali', jnsPelayanan: '2', tujuanKunjungan: '2' },
            { kode: 'rawatInap', nama: 'Rawat Inap', jnsPelayanan: '1', tujuanKunjungan: '0' },
            { kode: 'igd', nama: 'IGD', jnsPelayanan: '2', tujuanKunjungan: '0' },
            { kode: 'antarPoli', nama: 'Rujukan Internal', jnsPelayanan: '2', tujuanKunjungan: '0' },
        ]
        this.jnsKunjungan.next(data);
    }

    public printSep(nomorSep: string) {
        let iframe = '<iframe src="' + config.api_vclaim('sep/print/'+nomorSep) + '" style="height:calc(100% - 4px);width:calc(100% - 4px)"></iframe>';
        let win: any = window.open("", "", "width=1024,height=510,toolbar=no,menubar=no,resizable=yes");
        win.document.write(iframe);
    }

    public openDialog() {
        this.dialog.next(true)
    }

    public closeDialog() {
        this.dialog.next(false)
    }

}
