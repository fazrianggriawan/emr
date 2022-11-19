import { Component, OnInit } from '@angular/core';
import { SuratKontrolService } from './surat-kontrol.service';

@Component({
    selector: 'app-surat-kontrol',
    templateUrl: './surat-kontrol.component.html',
    styleUrls: ['./surat-kontrol.component.css']
})
export class SuratKontrolComponent implements OnInit {

    dialog: boolean = false;

    constructor(
        public suratKontrolService: SuratKontrolService
    ) { }

    ngOnInit(): void {
        this.suratKontrolService.dialog.subscribe(data => this.dialog = data)
    }

}
