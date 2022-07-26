import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-konsul',
    templateUrl: './konsul.component.html',
    styleUrls: ['./konsul.component.css']
})
export class KonsulComponent implements OnInit {

    dataKonsul: any;

    constructor() { }

    ngOnInit(): void {

        this.dataKonsul = [
            {
                tanggal: '12 Jan 2022',
                dari: 'dr. Bambang Budiarto Sp.B',
                kepada: 'dr. Ahmad Zumaroh Sp.d',
                keterangan: ''
            }
        ]
    }

}
