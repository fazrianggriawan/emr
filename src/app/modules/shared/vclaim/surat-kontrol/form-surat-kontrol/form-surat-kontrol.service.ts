import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class FormSuratKontrolService {

    dialog = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient
    ) {}

    public save() {
    }

    public openDialog() {
        this.dialog.next(true)
    }

    public closeDialog() {
        this.dialog.next(false)
    }

}
