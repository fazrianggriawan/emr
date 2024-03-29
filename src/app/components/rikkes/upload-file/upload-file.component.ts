import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { config } from 'src/app/config';
import { DataPesertaService } from '../data-peserta/data-peserta.service';
import { UploadFileService } from './upload-file.service';

@Component({
    selector: 'app-upload-file',
    templateUrl: './upload-file.component.html',
    styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

    uploadedFiles: any[] = [];
    peserta: any;
    loading: boolean = false;

    uploadForm!: FormGroup;

    constructor(
        private http: HttpClient,
        private dataPesertaService: DataPesertaService,
        private uploadFileService: UploadFileService
    ) { }

    ngOnInit(): void {
        this.dataPesertaService.peserta.subscribe(data => this.handleGetPeserta(data))
        this.uploadFileService.filesUplaoded.subscribe(data => this.uploadedFiles = data)
        this.uploadFileService.loading.subscribe(data => this.loading = data)
        this.uploadFileService.deleteStatus.subscribe(data => {
            if( data ) this.uploadFileService.getFilesUploaded(this.peserta.id);
        })
    }

    @ViewChild('fileInput') fileInput!: FileUpload;

    public handleGetPeserta(data: any) {
        if( data ) {
            this.peserta = data;
            this.uploadFileService.getFilesUploaded(this.peserta.id);
        }else{
            this.uploadedFiles = [];
        }
    }

    public onUpload(event: any) {
        const formData = new FormData();
        event.files.forEach((element: any) => {
            this.uploadFileService.loading.next(true);
            formData.append('file', element);
            formData.append('idPeserta', this.peserta.id);
            this.http.post<any>( config.api_url('upload'), formData )
                .subscribe(data => {
                    this.uploadedFiles.push(data.data);
                    let i = event.files.length--;
                    this.fileInput.remove(event, i);
                    this.uploadFileService.loading.next(false);
                })
        });
    }

    public getImage(image: string) {
        return config.host + '/' + image;
    }

    public deleteImage(item: any) {
        this.uploadFileService.deleteImage(item);
    }

    public view(e: any) {
        console.log(e)
    }

    public openFile(filelocation:string) {
        let link = config.host + '/' + filelocation;
        let iframe = '<iframe src="' + link + '" style="height:calc(100% - 4px);width:calc(100% - 4px)"></iframe>';
        let win: any = window.open("", "", "width=1024,height=510,toolbar=no,menubar=no,resizable=yes");
        win.document.write(iframe);
    }

}
