import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { config } from 'src/app/config';

@Component({
    selector: 'app-upload-file',
    templateUrl: './upload-file.component.html',
    styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

    uploadedFiles: any[] = [];
    currentFiles: any[] = [];
    uploadLink: string = config.api_url('upload');

    uploadForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private http: HttpClient
    ) { }

    ngOnInit(): void {
    }

    @ViewChild('fileInput') fileInput!: FileUpload;

    onUpload(event: any) {
        const formData = new FormData();
        event.files.forEach((element: any) => {
            formData.append('file', element);
            this.http.post<any>( config.api_url('upload'), formData )
                .subscribe(data => {
                    this.uploadedFiles.push(data.data);
                    let i = event.files.length--;
                    this.fileInput.remove(event, i);
                })
        });
    }

    public getImage(image: string) {
        return config.host + '/' + image;
    }

    public onRemove(e: any) {
        // console.log(e);
    }

    public view(e: any) {
        console.log(e)
    }

}
