import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataPesertaService } from 'src/app/components/rikkes/data-peserta/data-peserta.service';
import { UploadFileService } from 'src/app/components/rikkes/upload-file/upload-file.service';
import { FormGroup } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { config } from 'src/app/config';
import { FileUploadService } from './file-upload.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

    @Input() autoUpload: boolean = false;

    uploadedFiles: any[] = [];
    peserta: any;
    loading: boolean = false;

    uploadForm!: FormGroup;

    constructor(
        private http: HttpClient,
        private dataPesertaService: DataPesertaService,
        private uploadFileService: UploadFileService,
        private fileUploadService: FileUploadService,
        public sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
        this.dataPesertaService.peserta.subscribe(data => this.handleGetPeserta(data))
        this.uploadFileService.filesUplaoded.subscribe(data => this.uploadedFiles = data)
        this.uploadFileService.loading.subscribe(data => this.loading = data)
        this.uploadFileService.deleteStatus.subscribe(data => {
            if (data) this.uploadFileService.getFilesUploaded(this.peserta.id);
        })
    }

    @ViewChild('fileInput') fileInput!: FileUpload;

    public handleGetPeserta(data: any) {
        if (data) {
            this.peserta = data;
            this.uploadFileService.getFilesUploaded(this.peserta.id);
        } else {
            this.uploadedFiles = [];
        }
    }

    public onUpload(event: any, uploader: FileUpload) {
        event.files.forEach((file: any) => {
            const formData: FormData = new FormData();
            formData.append('file', file);
            this.http.post<any>('http://192.168.101.1:8080/upload', formData).subscribe(data => {
                this.removeFile(event, file, uploader);
            })
        });
    }

    public selectedFile(e: any) {
        e.currentFiles.forEach((element: any) => {
            console.log(element.objectURL.changingThisBreaksApplicationSecurity);
        });
    }

    public removeFile(e: Event, file: File, uploader: FileUpload){
        const index = uploader.files.indexOf(file);
        uploader.remove(e, index);
    }

    public remove(e: any){}

    public getImage(image: string) {
        return config.host + '/' + image;
    }

    public deleteImage(item: any) {
        this.uploadFileService.deleteImage(item);
    }

    public view(e: any) {
        console.log(e)
    }

    public openFile(filelocation: string) {
        let link = config.host + '/' + filelocation;
        let iframe = '<iframe src="' + link + '" style="height:calc(100% - 4px);width:calc(100% - 4px)"></iframe>';
        let win: any = window.open("", "", "width=1024,height=510,toolbar=no,menubar=no,resizable=yes");
        win.document.write(iframe);
    }

}
