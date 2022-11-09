import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class HasilLaboratoriumService {

    dataNilaiRujukan = new BehaviorSubject<any[]>([]);
    dataHasil = new BehaviorSubject<any[]>([]);
    dialog = new BehaviorSubject<boolean>(false);
    selectedBilling = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    save(data: any){
        this.http.post<any>( config.api_url('lab/saveHasil'), data )
            .subscribe(data => {
                if(data.code == 200){
                    this.appService.setNotification('success', 'Hasil Lab berhasil disimpan');
                    // this.openDialog(false);
                }
            })
    }

    getNilaiRujukan(group: string, noreg: string){
        this.http.get<any>( config.api_url('lab/nilaiRujukan/'+group+'/'+noreg) )
            .subscribe(data => {
                this.dataNilaiRujukan.next(data.data)
            })
    }

    getHasil(billingHead: string){
        this.http.get<any>( config.api_url('lab/hasil/'+billingHead) )
            .subscribe(data => {
                this.dataHasil.next(data.data)
            })
    }

    openDialog(status: boolean){
        this.dialog.next(status)
    }

}
