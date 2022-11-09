import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class TambahTindakanService {

    tindakanOptions = new BehaviorSubject<any[]>([]);
    dialog = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient
    ) { }

    cariPemeriksaan(key: string){
        this.http.get<any>( config.api_url('radiologi/cariTindakan/'+key) )
            .subscribe(data => {
                this.tindakanOptions.next(data.data);
            })
    }

    openDialog(status: boolean){
        this.dialog.next(status);
    }
}
