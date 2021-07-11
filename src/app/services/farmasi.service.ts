import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { config } from "src/app/config";
import { ErrorHandlerService } from '../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class FarmasiService {

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService,
  ) { }

  saveTemplateSig(data:any){
    return this.http.post<any>(config.api_url('save_sig_template'), data).pipe(catchError(this.errorHandle.handleIt));
  }

}
