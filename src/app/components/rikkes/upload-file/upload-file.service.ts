import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class UploadFileService {

    dialog = new BehaviorSubject<boolean>(false)
    filesUplaoded = new BehaviorSubject<any>('');
    loading = new BehaviorSubject<boolean>(false);
    deleteStatus = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient
    ) { }

    public getFilesUploaded(idPeserta: Number) {
        this.loading.next(true);
        this.http.get<any>( config.api_url('upload/getFiles/idPeserta/'+idPeserta) )
            .subscribe(data => {
                this.filesUplaoded.next(data.data);
                this.loading.next(false);
            })
    }

    public deleteImage(item: any){
        this.loading
        this.http.post<any>( config.api_url('upload/delete/image'), item )
            .subscribe(data => this.deleteStatus.next(true))
    }

    public openDialog() {
        this.dialog.next(true)
    }

    public closeDialog() {
        this.dialog.next(false)
    }
}
