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

  getTemplateSig(){
    return this.http.get<any>(config.api_url('sig_template')).pipe(catchError(this.errorHandle.handleIt));
  }

  getDataFrekuensi(){
    return ['1x Sehari', '2x Sehari', '3x Sehari', '4x Sehari', '5x Sehari', 'Setiap 15 Menit', 'Setiap 1 Jam', 'Setiap 18 Jam', 'Setiap 36 Jam', 'Setiap 72 Jam', '1x Seminggu', '2x Seminggu', '3x Seminggu', '1x Sebulan', '2x Sebulan', '3x Sebulan']
  }

  getDataArahan(){
    return [ 'Sesudah makan', 'Sebelum makan', 'Jika diperlukan', 'Dengan makan', 'Waktu pagi hari', 'Waktu siang hari', 'Waktu sore hari', 'Waktu malam hari', 'Sebelum tidur']
  }

  getDataDurasi(){
    return ['1 hari', '2 hari', '3 hari', '7 hari', '10 hari', '1 minggu', '2 minggu', '3 minggu', '4 minggu', '6 minggu', '8 minggu', '12 minggu', '1 bulan', '2 bulan', '3 bulan', '6 bulan']
  }

  getDataDosis(){
      return [ '1','2','3','4','5','6','7','8','9','10','1-2','2-3','2-4','3-4','5-10','0.1','0.25','0.5']
    }

  getDataUnit(){
    return ['Tab', 'Sendok teh', 'Sendok makan', 'Drop', 'Miligram', 'Mililiter', 'Gram']
  }

  getDataRoute(){
    return ['Minum', 'Oles', 'Inject']
  }

  getDataHari(){
    var hari = [];
    for (let i = 1; i <= 200; i++) {
      var a = {id: i, name: i}
      hari.push(a);
    }
    return hari;
  }

  getDataSigna2(){
    var signa = [];
    for (let i = 3; i <= 100; i++) {
      var a = {id: i, name: i}
      signa.push(a);
    }
    return signa;
  }

}
