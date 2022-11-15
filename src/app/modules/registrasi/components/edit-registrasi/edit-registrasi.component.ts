import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { MasterService } from '../../services/master.service';
import { RegistrasiService } from '../../services/registrasi.service';
import { EditRegistrasiService } from './edit-registrasi.service';

@Component({
    selector: 'app-edit-registrasi',
    templateUrl: './edit-registrasi.component.html',
    styleUrls: ['./edit-registrasi.component.css']
})
export class EditRegistrasiComponent implements OnInit {

    dialog: boolean = false;
    registrasi: any;
    form!: FormGroup;
    optionsRuangan: any[] = [];
    optionsDokter: any[] = [];

    subs: Subscription[] = [];

    constructor(
        public editRegistrasiService: EditRegistrasiService,
        private registrasiService: RegistrasiService,
        private fb: FormBuilder,
        private masterService: MasterService,
        private appService: AppService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.subs.push(this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data)))
        this.subs.push(this.editRegistrasiService.dialog.subscribe(data => this.handleDialog(data)))
        this.masterService.ruangan.subscribe(data => this.optionsRuangan = data)
        this.masterService.dokter.subscribe(data => this.optionsDokter = data)
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubs();
    }

    unsubs(){
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    initForm(){
        this.form = this.fb.group({
            tanggal: [null, [Validators.required]],
            noreg: [null, [Validators.required]],
            ruangan: [null, [Validators.required]],
            dokter: [null, [Validators.required]],
            username: [null, [Validators.required]],
        })
    }

    handleRegistrasi(data: any){
        this.registrasi = data;
        this.getMasterData();
        this.setForm(data);
    }

    setForm(registrasi: any){
        let tglLahir = new Date(registrasi.tglReg);
        this.form.get('tanggal')?.patchValue(tglLahir);
        this.form.get('noreg')?.patchValue(registrasi.noreg);
        this.form.get('ruangan')?.patchValue(registrasi.ruangan);
        this.form.get('dokter')?.patchValue(registrasi.dpjp_pelaksana);
    }

    getMasterData(){
        this.masterService.getRuangan(this.registrasi.id_jns_perawatan);
        if( this.registrasi.id_jns_perawatan == 'rj' ){
            this.masterService.getDokterByPoli(this.registrasi.ruangan);
        }else{
            this.masterService.getDokter();
        }
    }

    cancel(){
        let login = this.appService.getSessionStorage('login');
        let data = { noreg: this.registrasi.noreg, username: login.username };
        this.editRegistrasiService.cancelRegistrasi(data);
    }

    update(){
        let login = this.appService.getSessionStorage('login');
        let data = this.form.getRawValue();
        data.tanggal = this.appService.reformatDate(data.tanggal);
        data.username = login.username;
        this.editRegistrasiService.updateRegistrasi(data);
    }

    handleDialog(data: boolean){
        this.dialog = data;
        if( data ){
            // this.getMasterData();
        }else{
            // this.unsubs();
        }
    }

}
