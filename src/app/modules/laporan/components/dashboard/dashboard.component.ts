import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    data: any;
    options: any;

    constructor() { }

    ngOnInit(): void {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Rawat Jalan',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    tension: .4,
                    borderColor: '#42A5F5',
                },
                {
                    label: 'Rawat Inap',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    tension: .4,
                    borderColor: '#FFA726',

                }
            ]
        }

        this.options = {
            title: {
                display: true,
                text: 'My Title',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
    }

}
