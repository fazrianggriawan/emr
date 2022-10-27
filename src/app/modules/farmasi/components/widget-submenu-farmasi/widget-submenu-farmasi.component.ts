import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MainPanelService } from 'src/app/template/main-panel/main-panel.service';
import { WidgetSubmenuFarmasiService } from './widget-submenu-farmasi.service';

@Component({
    selector: 'app-widget-submenu-farmasi',
    templateUrl: './widget-submenu-farmasi.component.html',
    styleUrls: ['./widget-submenu-farmasi.component.css']
})
export class WidgetSubmenuFarmasiComponent implements OnInit {

    showWidget: boolean = false;
    menus!: MenuItem[]

    constructor(
        private widgetSubmenuFarmasiService: WidgetSubmenuFarmasiService,
        private mainPanelService: MainPanelService
    ) { }

    ngOnInit(): void {
        this.widgetSubmenuFarmasiService.showWidget(true);
        this.widgetSubmenuFarmasiService.widget.subscribe(data => this.showWidget = data)
        this.mainPanelService.showMargin(false);

        this.menus = [
            {label: 'Transaksi', routerLink: '/farmasi'},
            {label: 'Master Obat', routerLink: '/farmasi/master-obat'},
            {label: 'Stok Obat', routerLink: '/farmasi/stok-obat'},
            {label: 'Pembelian', routerLink: '/farmasi/pembelian'},
            {label: 'Penerimaan Barang', routerLink: '/farmasi/setting'},
            {label: 'Mutasi Stok', routerLink: '/farmasi/setting'},
            {label: 'Stok Opname', routerLink: '/farmasi/stock-opname'},
            {label: 'Data Supplier', routerLink: '/farmasi/supplier'},
            {label: 'Laporan', routerLink: '/farmasi/setting'},
        ];
    }

}
