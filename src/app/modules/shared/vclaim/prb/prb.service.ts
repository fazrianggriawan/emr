import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class PrbService {

    dataPrb = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    public getDataPrb(nomorKartu: string, from: Date, to: Date) {
        let dateStart = this.appService.reformatDate(from);
        let dateEnd = this.appService.reformatDate(to);

        this.http.get<any>( config.api_vclaim('prb/data/from/'+dateStart+'/to/'+dateEnd) )
            .subscribe( data => this.dataPrb.next(data.response) )
    }

}
