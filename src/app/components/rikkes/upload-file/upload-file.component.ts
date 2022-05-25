import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-upload-file',
    templateUrl: './upload-file.component.html',
    styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

    uploadedFiles: any[] = [];
    currentFiles: any[] = [];

    constructor() { }

    ngOnInit(): void {
    }

    public onUpload(e: any) {

    }

    public onSelect(e: any) {
        this.currentFiles = e.currentFiles;
    }

    public view(e: any) {
        console.log(e)
    }

}
