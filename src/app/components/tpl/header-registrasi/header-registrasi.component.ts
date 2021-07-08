import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { config } from 'src/app/config';
import { RegistrasiService } from 'src/app/services/registrasi.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-header-registrasi',
  templateUrl: './header-registrasi.component.html',
  styleUrls: ['./header-registrasi.component.css']
})

export class HeaderRegistrasiComponent implements OnInit {

  constructor(
    private registrasiService: RegistrasiService,
    private uploadService: UploadService,
    private formBuilder: FormBuilder
  ) { }

  registrasi: any = {
    nama_pasien: null,
    jns_kelamin: null,
    kunjungan_ke: null,
    no_rekam_medik: null,
    usia: null,
    tanggal_pendaftaran: null,
    carabayar_nama: null,
    rs: null,
  };

  uploadForm!: FormGroup;

  uploadUrl : string = config.api_url('upload');
  pasienImageUrl : string = '';
  @ViewChild('fileInput') fileInput!: FileUpload;

  onUpload(event:any){
    const formData = new FormData();
    this.uploadForm.get('profile')?.setValue(event.files[0]);
    formData.append('file', this.uploadForm.get('profile')?.value);
    this.uploadService.doUpload(formData).subscribe(data=>{
      this.pasienImageUrl = 'http://localhost/emr/api_emr/'+data.imageUrl;
      this.fileInput.clear();
    })
  }

  ngOnInit(): void {
    this.registrasiService.getDataRegistrasi().subscribe(data=>{
      this.registrasi = data;
    })
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

}
