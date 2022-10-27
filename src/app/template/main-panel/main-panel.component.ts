import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { MainPanelService } from './main-panel.service';

@Component({
    selector: 'app-main-panel',
    templateUrl: './main-panel.component.html',
    styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

    currentRoute: string = '';
    showMargin: boolean = true;

    constructor(
        private appService: AppService,
        private mainPanelService: MainPanelService
    ) { }

    ngOnInit(): void {
        this.appService.currentRoute.subscribe(data => this.currentRoute = data)

        this.mainPanelService.margin.subscribe(data => this.showMargin = data);
    }

}
