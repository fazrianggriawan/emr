import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'app-top-panel',
    templateUrl: './top-panel.component.html',
    styleUrls: ['./top-panel.component.css']
})
export class TopPanelComponent implements OnInit {

    constructor(
        private appService: AppService
    ) { }

    ngOnInit(): void {
    }

    logout(){
        this.appService.doLogout();
    }

}
