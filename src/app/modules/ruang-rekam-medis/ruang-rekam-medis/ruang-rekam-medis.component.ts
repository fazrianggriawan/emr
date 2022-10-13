import { Component, OnInit, OnDestroy } from '@angular/core';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';
import { MasterService } from '../../registrasi/services/master.service';
import { RuangRekamMedisService } from './ruang-rekam-medis.service';

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
    autoprint : boolean = true;
    ruangan: any[] = [];
    selectedRuangan: any[] = [];
    selectedFilterRuangan: any = 'all';

    interval: any;

    constructor(
        private masterService: MasterService,
        private ruangRekamMedisService: RuangRekamMedisService,
        public appService: AppService
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
            this.getData();
        });

        this.ruangRekamMedisService.dataRequestRm.subscribe(data => {
            if( data ){
                this.data = data;
                if( this.autoprint ){
                    if( this.data.length > 0 ){
                        window.clearInterval(this.interval);
                        this.data.reduce((p, val) => {
                            return p.then(() => {
                                // this.printRequestRm(val.id);
                                console.log('print '+val.id);
                            });
                        }, Promise.resolve()).then((finalResult: any) => {
                            // done here
                            this.goInterval();
                        }, function(err: any) {
                            // error here
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
        this.interval = setInterval(() => {
            this.getData();
        }, 2000);
    }

    getData() {
        this.ruangRekamMedisService.getDataRequestRm(this.selectedRuangan);
    }

    changeAutoPrint(val: boolean){
        if(val){
            this.goInterval();
        }else{
            window.clearInterval(this.interval);
        }
    }

    filterChanged(val: any) {
        this.masterService.getRuangan(val);
    }

    public printRequestRm(id: number) {
        if( id ){
            this.appService.print(config.api_url('print/requestRm/' + id));
        }
    }

}
