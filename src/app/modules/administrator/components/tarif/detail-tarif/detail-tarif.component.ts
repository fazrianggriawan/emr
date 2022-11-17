import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TarifService } from '../tarif.service';
import { DetailTarifService } from './detail-tarif.service';

@Component({
    selector: 'app-detail-tarif',
    templateUrl: './detail-tarif.component.html',
    styleUrls: ['./detail-tarif.component.css']
})
export class DetailTarifComponent implements OnInit, OnDestroy {

    dialog: boolean = false
    subs: Subscription[] = [];
    tarif: any = {};
    detailTarif: any;
    form!: FormGroup;
    jasaTarif: any[] = [];
    harga: any = 0;

    optionsGroupTarif: any[] = [];
    optionsCategory: any[] = [];

    constructor(
        public detailTarifService: DetailTarifService,
        private tarifService: TarifService,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.detailTarifService.detailTarif.subscribe(data => this.handleDetailTarif(data))
        this.subs.push(this.detailTarifService.dialog.subscribe(data => this.handleDialog(data)))
        this.tarifService.dataGroupTarif.subscribe(data => this.optionsGroupTarif = data);
        this.tarifService.dataCategory.subscribe(data => this.optionsCategory = data)
        this.tarifService.jasa.subscribe(data => this.handleJasa(data));
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach(element => {
            element.unsubscribe();
        })
    }

    handleJasa(data: any){
        if(data){
            let jasa : any[] = [];
            data.forEach((element: any) => {
                let item = {
                    id_group_jasa: element.id,
                    jasa: 0
                }
                jasa.push(item);
            });
            this.jasaTarif = jasa;
        }
    }

    handleDialog(data: boolean){
        this.dialog = data;
        if( data ){
            this.initForm();
        }
    }

    handleDetailTarif(data: any){
        this.initForm();
        this.detailTarif = { r_tarif_harga: {} }
        if( data ){
            this.detailTarif = data;
            this.setToForm(data);
        }
    }

    setToForm(data: any){
        if(data){
            this.tarifService.getCategoryByGroup(data.r_tarif_category.r_group_tarif.id_mst_group_tarif);

            this.form.get('nama')?.patchValue(data.name);
            this.form.get('group')?.patchValue(data.r_tarif_category.r_group_tarif.id_mst_group_tarif)
            this.form.get('category')?.patchValue(data.r_tarif_category.id_category_tarif)

            data.r_tarif_harga.forEach((element: any) => {
                if(element.active == 1){
                    this.form.get('harga')?.patchValue(element.harga)
                    this.jasaTarif = element.r_tarif_harga_jasa
                    this.harga = element.harga;
                }
            });
        }
    }

    initForm(){
        this.form = this.fb.group({
            nama: [null, [Validators.required]],
            harga: [null],
            category: [null, [Validators.required]],
            group: [null, [Validators.required]],
            jasa: [null],
            tarif: [null],
        })
    }

    hitungHarga(){
        setTimeout(() => {
            let total : any = 0;
            this.jasaTarif.forEach(element => {
                total = parseInt(total) + parseInt(element.jasa);
            });
            this.harga = total;
        }, 0);
    }

    changeGroup(value: any){
        this.tarifService.getCategoryByGroup(value);
    }

    save(){
        let data = this.form.getRawValue();
        data.jasa = this.jasaTarif;
        data.harga = this.harga;

        if( this.detailTarif ){
            data.tarif = this.detailTarif;
        }

        this.detailTarifService.save(data);

    }

}
