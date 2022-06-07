import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class SuratKontrolService {

    dataSuratKontrol = new BehaviorSubject<any>('');
    dialog = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) {}

    public getDataSuratKontrol(nomorKartu: string, bulan: Date, filter: string) {
        let filterBulan = this.appService.reformatDate(bulan);
        this.http.get<any>( config.api_vclaim('suratKontrol/byPeserta/nomorKartu/'+nomorKartu+'/bulan/'+filterBulan+'/filter/'+filter) )
            .subscribe( data => this.dataSuratKontrol.next(data.response) )
    }

    public openDialog(){
        this.dialog.next(true)
    }

    public closeDialog(){
        this.dialog.next(false)
    }

}
