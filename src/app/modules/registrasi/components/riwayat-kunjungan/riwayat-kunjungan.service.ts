import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class RiwayatKunjunganService {

    dialog = new BehaviorSubject<boolean>(false);
    dataRiwayatKunjungan = new BehaviorSubject<any[]>([]);

    constructor(
        private http: HttpClient
    ) { }

    showDialog(status: boolean){
        this.dialog.next(status)
    }

    getRiwayatKunjungan(idPasien: any, norm: string){
        this.http.get<any>(config.api_url('registrasi/riwayatKunjungan/'+idPasien+'/'+norm))
            .subscribe(data => {
                this.dataRiwayatKunjungan.next(data.data);
            })
    }

}
