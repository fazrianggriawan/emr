import { Component, OnInit } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { RadiologiService } from './radiologi.service';

@Component({
    selector: 'app-radiologi',
    templateUrl: './radiologi.component.html',
    styleUrls: ['./radiologi.component.css']
})
export class RadiologiComponent implements OnInit {

    dataRadiologi: any;
    dataOrder: any = [];
    hasil: any;

    results: any = [];

    search(event: any) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < this.dataRadiologi.length; i++) {
            let data = this.dataRadiologi[i];
            if (data.name.toLowerCase().indexOf(query.toLowerCase()) == 0 || data.category.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(data);
            }
        }
        this.results = filtered;
    }

    constructor(
        private radiologiService: RadiologiService
    ) { }

    ngOnInit(): void {
        this.radiologiService.dataRadiologi.subscribe(data => this.dataRadiologi = data)
        this.hasil = '';
    }

    selectPemeriksaan(e: any, ac: AutoComplete){
        this.dataOrder.push(e);
        ac.inputEL.nativeElement.value = null;
    }

    deleteOrder(i:number){
        this.dataOrder.splice(i, 1);
    }

}
