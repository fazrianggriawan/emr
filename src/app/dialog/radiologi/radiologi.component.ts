import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AutoComplete } from 'primeng/autocomplete';
import { RadiologiService } from 'src/app/services/radiologi.service';
import { TestOrderService } from 'src/app/services/test-order.service';

@Component({
  selector: 'app-radiologi',
  templateUrl: './radiologi.component.html',
  styleUrls: ['./radiologi.component.css']
})
export class RadiologiComponent implements OnInit {

  dataMasterRadiologi: any[] = [];
  selectedRad: any[] = [];
  dataKlinis: any;
  filteredMasterRad: any[] = [];
  dataPemeriksaan: any[] = [];
  selectedPemeriksaan: any[] = [];

  form = this.fb.group({
    tanggal: [null, Validators.required],
    tipe: ['nonCito', Validators.required],
    diagnosa: [null, Validators.required],
    physician: [null, Validators.required],
    remarks: [null],
    selectedLab: [null, Validators.required],
    data: [null, Validators.required],
    unit: ['lab', Validators.required],
  })

  save(){
    this.form.patchValue({data: this.dataPemeriksaan})
    this.testOrderService.save(this.form.value).subscribe(data=>{
      if( data.status ){
        alert(data.message);
      }
    })
  }


  getMasterData(){
    this.radiologiService.getMasterData().subscribe(data=>{
      this.dataMasterRadiologi = data;
    })
  }

  search(event:any){
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.dataMasterRadiologi.length; i++) {
        let data = this.dataMasterRadiologi[i];
        if (data.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(data);
        }
    }
    this.filteredMasterRad = filtered;
  }

  selectPemeriksaan(e:any, ac: AutoComplete){
    if(this.dataPemeriksaan.indexOf(e) < 0){
      this.dataPemeriksaan.push(e)
      setTimeout(()=>{
        ac.inputEL.nativeElement.value = null;
      }, 100)
    };
  }

  constructor(
    private radiologiService: RadiologiService,
    private fb: FormBuilder,
    private testOrderService: TestOrderService
  ) { }

  ngOnInit(): void {
    this.getMasterData();
  }

}

@NgModule({
  imports: [EditorModule]
})
class RadiologiComponentModule {}
