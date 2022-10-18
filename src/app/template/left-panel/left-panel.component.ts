import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-left-panel',
    templateUrl: './left-panel.component.html',
    styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

    data: any;

    constructor() { }

    ngOnInit(): void {
        this.data = {
            datasets: [
                {
                    data: [300, 50],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ]
                }
            ]
        };
    }

}
