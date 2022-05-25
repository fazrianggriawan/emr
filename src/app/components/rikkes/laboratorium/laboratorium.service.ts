import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LaboratoriumService {

    dialog = new BehaviorSubject<boolean>(false)

    constructor() { }

    public openDialog() {
        this.dialog.next(true)
    }

    public closeDialog() {
        this.dialog.next(false)
    }

    public dataTest() {
        let data = [
            {nama: 'hemoglobin', nilaiRujukan: 'W(12.0-16.0 GR/DL)'},
            {nama: 'hematokrit', nilaiRujukan: 'W(37-43G%)'},
            {nama: 'eritrosit', nilaiRujukan: 'DWS (4.0-5.9 JUTA/UL'},
            {nama: 'lekosit', nilaiRujukan: 'AN (9-12 RIBU/UL)'},
            {nama: 'led I', nilaiRujukan: 'W (0-20 MM/JAM)'},
            {nama: 'trombosit', nilaiRujukan: 'DWS (150-440 RIBU/UL)'},
            {nama: 'golongan darah', nilaiRujukan: ''},
            {nama: 'rh', nilaiRujukan: ''},
            {nama: 'gula darah sewaktu', nilaiRujukan: '(< 140 MG/DL)'},
            {nama: 'ureum', nilaiRujukan: '(20-50 MG/DL)'},
            {nama: 'kreatinin', nilaiRujukan: '(20-50 MG/DL)'},
            {nama: 'sgot', nilaiRujukan: '(< 41 U/I)'},
        ]
    }


}
