import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CanvasWhiteboardComponent } from 'ng2-canvas-whiteboard';
import { ObjectiveService } from 'src/app/services/objective.service';
import { RegistrasiService } from 'src/app/services/registrasi.service';

@Component({
  selector: 'app-objective-note',
  templateUrl: './objective-note.component.html',
  viewProviders: [CanvasWhiteboardComponent],
  styleUrls: ['./objective-note.component.css']
})
export class ObjectiveNoteComponent implements OnInit {

  registrasi : any = this.registrasiService.getLocalStorageReg();

  form = this.fb.group({
    noreg: [this.registrasi.no_pendaftaran, Validators.required],
    notes: [null, Validators.required]
  })

  save(){
    this.objectiveService.save(this.form.value).subscribe(data=>{
      console.log(data);
    })
  }

  getData(){
    this.objectiveService.getData(this.registrasi.no_pendaftaran).subscribe(data => {
      this.form.patchValue({
        noreg: data[0].noreg,
        notes: data[0].notes
      });
    })
  }

  constructor(
    private fb: FormBuilder,
    private registrasiService: RegistrasiService,
    private objectiveService: ObjectiveService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

}
