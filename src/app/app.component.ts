import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
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

    constructor(
        private primeNgConfig: PrimeNGConfig,
        private router: Router,
        public loadingService: LoadingService,
        private appService: AppService,
        private messageService: MessageService
    ) { }

    ngOnInit() {
        this.primeNgConfig.ripple = true;

        this.loadingService.status.subscribe(data => this.loading = data)
        this.appService.notification.subscribe(data => {
            if( data.type == 'error' ) this.messageService.add({severity:'error', summary:'Error', detail:data.message});
            if( data.type == 'success' ) this.messageService.add({severity:'success', summary:'Sukses', detail:data.message});
        })

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // Hide progress spinner or progress bar
                this.currentRoute = event.url;
            }
        })
    }
}
