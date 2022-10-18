import { Component, Input, OnInit } from '@angular/core';
import { GraficoModel } from './bar-chart.model';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

    @Input() List!: Array<GraficoModel>;

    public Total = 0;
    public MaxHeight = 400;

    constructor() { }

    ngOnInit(): void {
        this.List = [
            {Value: 250, Color:'#498B94', Size:'', Legend:'Monkeys'},
            {Value: 120, Color:'#F8C622', Size:'', Legend:'Giraffes'},
            {Value: 100, Color:'#747474', Size:'', Legend:'Lions'},
            {Value: 50, Color:'#EC972D', Size:'', Legend:'Tigers'},
            {Value: 235, Color:'#EC972D', Size:'', Legend:'Tigers'},
            {Value: 142, Color:'#EC972D', Size:'', Legend:'Tigers'},
            {Value: 312, Color:'#EC972D', Size:'', Legend:'Tigers'},
          ];
        this.MontarGrafico();
    }

    MontarGrafico() {
        this.List.forEach(element => {
            this.Total += element.Value;
        });

        this.List.forEach(element => {
            element.Size = Math.round((element.Value * this.MaxHeight) / this.Total) + '%';
        });
    }

}
