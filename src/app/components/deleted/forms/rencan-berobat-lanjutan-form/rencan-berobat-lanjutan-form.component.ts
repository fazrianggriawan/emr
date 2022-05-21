import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { SaveStatusService } from 'src/app/services/save-status.service';
import { CpptService } from "src/app/services/cppt.service";

@Component({
  selector: 'app-form-rencana-berobat',
  templateUrl: './rencan-berobat-lanjutan-form.component.html',
  styleUrls: ['./rencan-berobat-lanjutan-form.component.css']
})
export class RencanBerobatLanjutanFormComponent implements OnInit {

  tglBerobatLanjutan: any;
  tglSuratRujukan: any;

  formRencanaBerobat = this.formData.group({
    terapi: [],
    tglSuratRujukan: [null],
    alasanBelumDikembalikan: [null],
    rencanaTindakan: [null],
    tglBerobatLanjutan: [null],
    noAntrian: ['2']
  })

  doSave(){
    this.cpptService.saveKeluhan(this.formRencanaBerobat.value).subscribe(data => {
      console.log(data);
    })
  }

  constructor(
    private SaveStatusService: SaveStatusService,
    private formData: FormBuilder,
    private cpptService: CpptService
  ) { }

  ngOnInit(): void {
    this.SaveStatusService.getSaveStatus().subscribe(data=>{this.doSave()});
  }

}

@NgModule({
  declarations: [RencanBerobatLanjutanFormComponent],
  imports: [FormsModule, CalendarModule, ReactiveFormsModule]
})
class RencanBerobatLanjutanFormComponentModule {}
