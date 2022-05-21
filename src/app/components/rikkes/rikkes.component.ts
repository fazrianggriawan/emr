import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-rikkes',
    templateUrl: './rikkes.component.html',
    styleUrls: ['./rikkes.component.css']
})
export class RikkesComponent implements OnInit {

    selectedHasil: any;

    hasil: any = [{id: 1, name: 'LULUS'},{id: 0, name: 'TIDAK LULUS'}]

    form!: FormGroup

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    public initForm() {
        this.form = this.fb.group({
            tinggi: [''],
            berat: [''],
            tekananDarah: [''],
            nadi: [''],
            tubuhBentuk: [''],
            tubuhGerak: [''],
            kepala: [''],
            muka: [''],
            leher: [''],
            odVisusAwal: [''],
            odLensaKoreksi: [''],
            odVisusKoreksi: [''],
            osVisusAwal: [''],
            osLensaKoreksi: [''],
            osVisusKoreksi: [''],
            campus: [''],
            kenalWarna: [''],
            lainLain: [''],
            ad: [''],
            as: [''],
            tajamPend: [''],
            membranTymp: [''],
            penyTel: [''],
            d: [''],
            m: [''],
            f: [''],
            karang: [''],
            protesa: [''],
            penyMulut: [''],
            hidung: [''],
            tenggorokan: [''],
            thoraxPernafasan: [''],
            thoraxBentuk: [''],
            cor: [''],
            pulmo: [''],
            abdomen: [''],
            lien: [''],
            hepar: [''],
            regioInguinalis: [''],
            genitalia: [''],
            perineum: [''],
            angGerakAtas: [''],
            angGerakBawah: [''],
            kulit: [''],
            refleks: [''],
            hymen: [''],
            palpasi: [''],
            kesimpulan: [''],
            rumusLahirU: [''],
            rumusLahirA: [''],
            rumusLahirB: [''],
            rumusLahirD: [''],
            rumusLahirL: [''],
            rumusLahirG: [''],
            rumusLahirJ: [''],
            stakes: [''],
            hasil: ['']
        })
    }

    public save() {
        console.log(this.form.value)
    }

    public update() {

    }

}
