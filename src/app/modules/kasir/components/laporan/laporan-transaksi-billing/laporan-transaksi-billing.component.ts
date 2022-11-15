import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { config } from 'src/app/config';
import { MasterService } from 'src/app/modules/registrasi/services/master.service';
import { AppService } from 'src/app/services/app.service';
import { LaporanTransaksiBillingService } from './laporan-transaksi-billing.service';

@Component({
    selector: 'app-laporan-transaksi-billing',
    templateUrl: './laporan-transaksi-billing.component.html',
    styleUrls: ['./laporan-transaksi-billing.component.css']
})
export class LaporanTransaksiBillingComponent implements OnInit {

    dialog: boolean = false;
    optionsJnsPerawatan: any[] = [];
    optionsJnsPembayaran: any[] = [];

    form!: FormGroup;

    constructor(
        public lapTransaksiBillService: LaporanTransaksiBillingService,
        private masterService: MasterService,
        private fb: FormBuilder,
        private appService: AppService
    ) { }

    ngOnInit(): void {
        this.lapTransaksiBillService.dialog.subscribe(data => this.handleDialog(data))
        this.masterService.jnsPembayaran.subscribe(data => this.optionsJnsPembayaran = data)
        this.masterService.jnsPerawatan.subscribe(data => this.optionsJnsPerawatan = data)
    }

    initForm(){
        this.form = this.fb.group({
            from: [new Date(), [Validators.required]],
            to: [new Date(), [Validators.required]],
            jnsPerawatan: [null, [Validators.required]],
            jnsPembayaran: [null, [Validators.required]],
            timeFrom: [null],
            timeTo: [null],
            username: [null],
        });
    }

    handleDialog(data: boolean){
         this.dialog = data;
         if(data){
            this.initForm();
            this.getMasterData();
         }
    }

    getMasterData(){
        this.masterService.getJnsPembayaran();
        this.masterService.getJnsPerawatan();
    }

    proses(){
        let login = this.appService.getSessionStorage('login');
        let form = this.form.getRawValue();
        form.timeFrom = form.from.getHours()+':'+form.from.getMinutes();
        form.timeTo = form.to.getHours()+':'+form.to.getMinutes();
        form.from = this.appService.reformatDate(form.from);
        form.to = this.appService.reformatDate(form.to);
        form.username = login.username;

        let data : string = JSON.stringify(form);

        this.appService.print(config.api_url('laporan/transaksiBilling/'+btoa(data)));
    }

}
