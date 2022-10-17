import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'app-main-panel',
    templateUrl: './main-panel.component.html',
    styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

    currentRoute: string = '';

    constructor(
        private appService: AppService
    ) { }

    ngOnInit(): void {
        this.appService.currentRoute.subscribe(data => this.currentRoute = data)
    }

}
