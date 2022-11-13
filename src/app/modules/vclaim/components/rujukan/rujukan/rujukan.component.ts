import { Component, OnInit } from '@angular/core';
import { RujukanService } from './rujukan.service';

@Component({
    selector: 'app-rujukan',
    templateUrl: './rujukan.component.html',
    styleUrls: ['./rujukan.component.css']
})
export class RujukanComponent implements OnInit {

    dialog: boolean = false;
    peserta: any;

    constructor(
        public rujukanService: RujukanService
    ) { }

    ngOnInit(): void {
        this.rujukanService.dialog.subscribe(data => this.dialog = data)
    }

}
