import { Component, NgModule, OnInit } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { config } from 'src/app/config';
import { RadiologiService } from 'src/app/services/radiologi.service';

@Component({
  selector: 'app-radiologi',
  templateUrl: './radiologi.component.html',
  styleUrls: ['./radiologi.component.css']
})
export class RadiologiComponent implements OnInit {

  dataMasterRadiologi: any[] = [];
  selectedRad: any[] = [];
  dataKlinis: any;

  getMasterData(){
    this.radiologiService.getMasterData().subscribe(data=>{
      this.dataMasterRadiologi = data;
    })
  }

    sendToRadiologi(){
        window.open(config.api_url('print_rad'), '_blank');
    }



  constructor(
    private radiologiService: RadiologiService
  ) { }

  ngOnInit(): void {
    this.getMasterData();
  }

}

@NgModule({
  imports: [EditorModule]
})
class RadiologiComponentModule {}
