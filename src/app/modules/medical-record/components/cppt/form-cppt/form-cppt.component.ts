import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-cppt',
    templateUrl: './form-cppt.component.html',
    styleUrls: ['./form-cppt.component.css']
})
export class FormCpptComponent implements OnInit {

    form!: FormGroup;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            tanggal: [new Date()],
            soap: ['<p><strong>S :</strong></p><p><br></p><p><br></p><p><strong>O :</strong></p><p><br></p><p><br></p><p><strong>A :</strong></p><p><br></p><p><br></p><p><strong>P :</strong></p><p><br></p><p><br></p>']
        })
    }

    save(){
        console.log(this.form.value);
    }

}
