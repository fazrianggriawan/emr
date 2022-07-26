import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { config } from '../../../../config';
import { ErrorHandlerService } from '../../../../error-handler.service';

@Injectable({
    providedIn: 'root'
})
export class SubjectiveService {

    keluhan = new BehaviorSubject<any>([]);
    asalKunjungan = new BehaviorSubject<any>([]);

    constructor(
        private http: HttpClient,
        private errorHandle: ErrorHandlerService
    ) {
        this.getKeluhan();
        this.getAsalKunjungan();
    }

    getKeluhan() {
        let data = [
            { id: 1, name: 'Pusing' },
            { id: 2, name: 'Diare' },
            { id: 3, name: 'Nyeri Dada' },
            { id: 4, name: 'Cemas' },
            { id: 5, name: 'Lemas / Lelah' },
            { id: 6, name: 'Pandangan Kabur' },
            { id: 7, name: 'Gemetar' },
            { id: 8, name: 'Nyeri Pinggang' }
        ]
        this.keluhan.next(data);
        // this.http.get<any>(config.api_url('master_keluhan')).subscribe(data => this.keluhan.next(data));
    }

    getAsalKunjungan() {
        let data = [
            { id: 1, name: 'Atas Keinginan Pasien' },
            { id: 2, name: 'Kontrol Kembali' },
            { id: 3, name: 'Rujukan Rumah Sakit Lain' },
            { id: 4, name: 'Rujukan dari Internal Antar Departemen' },
            { id: 5, name: 'Dari Medical Checkup' }
        ]
        this.asalKunjungan.next(data);
    }

    save(data: any): Observable<any> {
        return this.http.post<any>(config.api_url('save_assessment_umum'), data).pipe(catchError(this.errorHandle.handleIt));
    }

    getData(noreg: string): Observable<any> {
        return this.http.get<any>(config.api_url('get_assessment_umum?noreg=' + noreg)).pipe(catchError(this.errorHandle.handleIt));
    }

}
