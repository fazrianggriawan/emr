import { Component, OnInit } from '@angular/core';
import { LaboratoriumService } from './laboratorium.service';

@Component({
    selector: 'app-laboratorium',
    templateUrl: './laboratorium.component.html',
    styleUrls: ['./laboratorium.component.css']
})
export class LaboratoriumComponent implements OnInit {

    constructor(
        public laboratoriumService: LaboratoriumService
    ) { }

    ngOnInit(): void {
    }

}
