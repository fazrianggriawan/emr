import { Component, OnInit, OnDestroy } from '@angular/core';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';
import { MasterService } from '../../registrasi/services/master.service';
import { RuangRekamMedisService } from './ruang-rekam-medis.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-ruang-rekam-medis',
    templateUrl: './ruang-rekam-medis.component.html',
    styleUrls: ['./ruang-rekam-medis.component.css']
})
export class RuangRekamMedisComponent implements OnInit, OnDestroy {

    data: any[] = [];
    options: any[] = [];
    optFilterRuangan: any[] = [];
    selectedOption = 1;
    autoprint : boolean = false;
    ruangan: any[] = [];
    selectedRuangan: any[] = [];
    selectedFilterRuangan: any = 'all';

    interval: any;

    constructor(
        private masterService: MasterService,
        private ruangRekamMedisService: RuangRekamMedisService,
        public appService: AppService,
    ) { }

    ngOnInit(): void {
        this.options = [
            { id: 1, name: 'Auto Print' },
            { id: 2, name: 'Manual Print' }
        ]

        this.optFilterRuangan = [
            { id: 'all', name: 'Semua Ruangan' },
            { id: 'rj', name: 'Rawat Jalan' },
            { id: 'ri', name: 'Rawat Inap' }
        ]

        this.masterService.getRuangan('all');

        this.masterService.ruangan.subscribe(data => {
            this.ruangan = data;
            this.selectedRuangan = data;
            this.goInterval();
        });

        this.ruangRekamMedisService.dataRequestRm.subscribe(data => {
            if( data ){
                this.data = data;
                if( this.autoprint ){
                    if( this.data.length > 0 ){
                        window.clearInterval(this.interval);
                        this.interval = '';

                        let intrvl = 1500;

                        data.forEach((item: any, index: number) => {
                            setTimeout(() => {
                                this.printRequestRm(item.id);
                                if( data.length-1 == index ){
                                    this.goInterval();
                                }

                            }, index * intrvl);
                        });
                    }
                }
            }else{
                this.data = [];
            }
        });
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        window.clearInterval(this.interval);
    }

    goInterval(){
        if( !this.interval ){
            this.interval = window.setInterval(() => {
                this.getData();
            }, 2000);
        }
    }

    getData() {
        this.ruangRekamMedisService.getDataRequestRm(this.selectedRuangan);
    }

    filterChanged(val: any) {
        this.masterService.getRuangan(val);
    }

    public printRequestRm(id: number) {
        if( id ){
            (<HTMLIFrameElement>document.getElementById('printFrame')).src = config.api_url('print/requestRm/' + id);
        }
    }

}
