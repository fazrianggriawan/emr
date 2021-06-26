import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hasil-usg-urologi',
  templateUrl: './hasil-usg-urologi.component.html',
  styleUrls: ['./hasil-usg-urologi.component.css']
})
export class HasilUsgUrologiComponent implements OnInit {

  constructor(
    private formData: FormBuilder
  ) { }

  formHasilUsg = this.formData.group({
    hasil: [null]
  })

  ngOnInit(): void {
  }

}
