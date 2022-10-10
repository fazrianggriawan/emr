import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { DataPasienService } from './modules/registrasi/components/data-pasien/data-pasien.service';
import { AppService } from './services/app.service';
import { LoadingService } from './services/loading.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MessageService]
})
export class AppComponent implements OnInit {
    title = 'iniapps';

    loading: boolean = false;
    currentRoute: string = '';
    pasien: any;

    constructor(
        public loadingService: LoadingService,
        private primeNgConfig: PrimeNGConfig,
        private router: Router,
        private appService: AppService,
        private messageService: MessageService,
        private dataPasienService: DataPasienService
    ) { }

    ngOnInit() {
        this.primeNgConfig.ripple = true;

        this.loadingService.status.subscribe(data => this.loading = data)
        this.appService.notification.subscribe(data => {
            if( data.type == 'error' ) this.messageService.add({severity:'error', summary:'Error', detail:data.message, life: 5000});
            if( data.type == 'success' ) this.messageService.add({severity:'success', summary:'Sukses', detail:data.message});
        })

        this.appService.currentRoute.subscribe(data => this.currentRoute = data)

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                let split = event.url.split('/');
                if( split[1] ){
                    this.appService.currentRoute.next(split[1]);
                }else{
                    this.appService.currentRoute.next(split[0]);
                }

            }
        })

        this.appService.getLoginData();

        this.dataPasienService.pasien.subscribe(data => this.pasien = data);

    }
}
