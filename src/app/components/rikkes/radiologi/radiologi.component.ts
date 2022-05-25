import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-radiologi',
    templateUrl: './radiologi.component.html',
    styleUrls: ['./radiologi.component.css']
})
export class RadiologiComponent implements OnInit {

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
