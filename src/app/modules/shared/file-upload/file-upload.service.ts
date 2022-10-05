import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUpload } from 'primeng/fileupload';

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {
    private baseUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    upload(file: File, fileIinput: FileUpload): Observable<HttpEvent<any>> {
        console.log('upload')
        const formData: FormData = new FormData();

        formData.append('file', file);

        this.http.post<any>(`${this.baseUrl}/upload`, formData).subscribe(data => {
            console.log(data);
        })

        const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData);

        return this.http.request(req);
    }

    getFiles(): Observable<any> {
        return this.http.get(`${this.baseUrl}/files`);
    }
}
