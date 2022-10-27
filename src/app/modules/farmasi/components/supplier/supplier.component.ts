import { Component, OnInit } from '@angular/core';
import { WidgetRegistrasiService } from 'src/app/modules/registrasi/components/widget-registrasi/widget-registrasi.service';
import { FarmasiService } from '../farmasi/farmasi.service';

@Component({
    selector: 'app-supplier',
    templateUrl: './supplier.component.html',
    styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

    dataSupplier: any[] = [];

    constructor(
        private farmasiService: FarmasiService,
        private widgetRegistrasiService: WidgetRegistrasiService
    ) { }

    ngOnInit(): void {
        this.widgetRegistrasiService.showWidget(false);
        this.farmasiService.getDataSupplier();
        this.farmasiService.dataSupplier.subscribe(data => this.dataSupplier = data)
    }

}
