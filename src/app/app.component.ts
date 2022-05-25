import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { LoadingService } from './services/loading.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'iniapps';

    loading: boolean = false;

    constructor(
        private primeNgConfig: PrimeNGConfig,
        private router: Router,
        public loadingService: LoadingService
    ) { }

    ngOnInit() {
        this.primeNgConfig.ripple = true;

        this.loadingService.status.subscribe(data => this.loading = data)

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // Hide progress spinner or progress bar
                // console.log(event.url);
            }
        })
    }
}
