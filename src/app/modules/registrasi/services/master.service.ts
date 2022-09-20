import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class MasterService {

    rs = new BehaviorSubject<any>('');
    awalanNama = new BehaviorSubject<any>('');
    negara = new BehaviorSubject<any>('');
    provinsi = new BehaviorSubject<any>('');
    kota = new BehaviorSubject<any>('');
    kecamatan = new BehaviorSubject<any>('');
    kelurahan = new BehaviorSubject<any>('');
    suku = new BehaviorSubject<any>('');
    statusNikah = new BehaviorSubject<any>('');
    agama = new BehaviorSubject<any>('');
    pekerjaan = new BehaviorSubject<any>('');
    pendidikan = new BehaviorSubject<any>('');
    angkatan = new BehaviorSubject<any>('');
    pangkat = new BehaviorSubject<any>('');
    groupPasien = new BehaviorSubject<any>('');
    golonganPasien = new BehaviorSubject<any>('');
    dokter = new BehaviorSubject<any>('');
    ruangan = new BehaviorSubject<any>('');
    jnsPerawatan = new BehaviorSubject<any>('');
    waktuPelayanan = new BehaviorSubject<any>('');
    kelasRuangan = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient
    ) {}

    public getRs() {
        this.http.get<any>( config.api_url('master/rs') ).subscribe( data => this.rs.next(data.data) )
    }

    public getAwalanNama() {
        this.http.get<any>( config.api_url('master/awalan_nama') ).subscribe( data => this.awalanNama.next(data.data) )
    }

    public getNegara() {
        this.http.get<any>( config.api_url('master/negara') ).subscribe( data => this.negara.next(data.data) )
    }

    public getProvinsi() {
        this.http.get<any>( config.api_url('master/provinsi') ).subscribe( data => this.provinsi.next(data.data) )
    }

    public getKota(idProvinsi: string) {
        this.http.get<any>( config.api_url('master/kota/id_provinsi/'+idProvinsi) ).subscribe( data => this.kota.next(data.data) )
    }

    public getKecamatan(idKota: string) {
        this.http.get<any>( config.api_url('master/kecamatan/id_kota/'+idKota) ).subscribe( data => this.kecamatan.next(data.data) )
    }

    public getKelurahan(idKecamatan: string) {
        this.http.get<any>( config.api_url('master/kelurahan/id_kecamatan/'+idKecamatan) ).subscribe( data => this.kelurahan.next(data.data) )
    }

    public getSuku() {
        this.http.get<any>( config.api_url('master/suku') ).subscribe( data => this.suku.next(data.data) )
    }

    public getStatusNikah() {
        this.http.get<any>( config.api_url('master/status_nikah') ).subscribe( data => this.statusNikah.next(data.data) )
    }

    public getAgama() {
        this.http.get<any>( config.api_url('master/agama') ).subscribe( data => this.agama.next(data.data) )
    }

    public getPekerjaan() {
        this.http.get<any>( config.api_url('master/pekerjaan') ).subscribe( data => this.pekerjaan.next(data.data) )
    }

    public getPendidikan() {
        this.http.get<any>( config.api_url('master/pendidikan') ).subscribe( data => this.pendidikan.next(data.data) )
    }

    public getAngkatan() {
        this.http.get<any>( config.api_url('master/angkatan') ).subscribe( data => this.angkatan.next(data.data) )
    }

    public getPangkat() {
        this.http.get<any>( config.api_url('master/pangkat') ).subscribe( data => this.pangkat.next(data.data) )
    }

    public getGroupPasien() {
        this.http.get<any>( config.api_url('master/group_pasien') ).subscribe( data => this.groupPasien.next(data.data) )
    }

    public getGolonganPasien(idGroupPasien: string) {
        this.http.get<any>( config.api_url('master/golongan_pasien/id_grouppasien/'+idGroupPasien) ).subscribe( data => this.golonganPasien.next(data.data) )
    }

    public getDokter() {
        this.http.get<any>( config.api_url('master/dokter') ).subscribe( data => this.dokter.next(data.data) )
    }

    public getPoli() {
        this.http.get<any>( config.api_url('master/poliklinik') ).subscribe( data => this.ruangan.next(data.data) )
    }

    public getJnsPerawatan() {
        this.http.get<any>( config.api_url('master/jnsPerawatan') ).subscribe( data => this.jnsPerawatan.next(data.data) )
    }

    public getDataWaktuPelayanan() {
        this.http.get<any>( config.api_url('master/waktuPelayanan') ).subscribe( data => this.waktuPelayanan.next(data.data) )
    }

    public getDokterByPoli(idPoli: string){
        this.http.get<any>( config.api_url('master/dokterByPoli/'+idPoli) ).subscribe( data => this.dokter.next(data.data) )
    }

    public getGolPasienByGroup(idGroup: string){
        this.http.get<any>( config.api_url('master/golongan_pasien/id_grouppasien/'+idGroup) ).subscribe( data => this.golonganPasien.next(data.data) )
    }

    public getRuangan(){
        this.http.get<any>( config.api_url('master/ruangan') ).subscribe( data => this.ruangan.next(data.data) )
    }

    public getKelasRuangan(){
        this.http.get<any>( config.api_url('master/kelasRuangan') ).subscribe( data => this.kelasRuangan.next(data.data) )
    }


}
