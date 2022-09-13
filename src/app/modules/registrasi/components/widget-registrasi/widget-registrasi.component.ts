import { Component, OnInit } from '@angular/core';
import { RegistrasiService } from '../../services/registrasi.service';

@Component({
    selector: 'app-widget-registrasi',
    templateUrl: './widget-registrasi.component.html',
    styleUrls: ['./widget-registrasi.component.css']
})
export class WidgetRegistrasiComponent implements OnInit {

    registrasi: any;

    constructor(
        private registrasiService: RegistrasiService
    ) { }

    ngOnInit(): void {
        this.registrasiService.registrasi.subscribe(data => this.registrasi = data)
    }

}
