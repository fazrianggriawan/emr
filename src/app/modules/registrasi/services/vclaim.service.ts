import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { LoadingService } from 'src/app/services/loading.service';

@Injectable({
    providedIn: 'root'
})
export class VclaimService {

    peserta = new BehaviorSubject<any>('');
    sendToForm = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private loadingService: LoadingService
    ) { }

    public getPesertaByNomorKartu(nomorKartu: string) {
        this.loadingService.status.next(true);
        this.http.get<any>( config.api_vclaim('peserta/nomorKartu/'+nomorKartu) )
            .subscribe( data => this.peserta.next(data) )
    }

    public getPesertaByNik(nik: string) {
        this.loadingService.status.next(true);
        this.http.get<any>( config.api_vclaim('peserta/nik/'+nik) )
            .subscribe( data => this.peserta.next(data) )
    }
}
