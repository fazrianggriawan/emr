import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { config } from '../config';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    notification = new BehaviorSubject<any>('');
    currentRoute = new BehaviorSubject<string>('');
    loginData = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    public reformatDate(date: Date) {
        let parsingTanggal = date.toLocaleDateString('id-ID').toString().split('/');
        return parsingTanggal[2].toString() + '-' + parsingTanggal[1].toString().padStart(2, '0') + '-' + parsingTanggal[0].toString().padStart(2, '0')
    }

    public dateHuman(data: string) {
        let arrayTanggal = data.split('-');
        return arrayTanggal[2] + '-' + arrayTanggal[1] + '-' + arrayTanggal[0]
    }

    public setNotification(type: string, message: string){
        let data = {
            type: type,
            message: message
        }
        this.notification.next(data)
    }

    public setLocalStorage(key:string, value:string){
        localStorage.setItem(key, value);
    }

    public getLocalStorage(key:string){
        if( localStorage.getItem(key) ){
            let data:any = localStorage.getItem(key);
            return data;
        }
    }

    public print(url: string) {
        let width = screen.width / 1.5;
        let center = (screen.width / 2) - (width /2);
        let iframe = '<iframe src="' + url + '" style="height:calc(100% - 4px);width:calc(100% - 4px)"></iframe>';
        let win: any = window.open("", "", "width="+width+",height="+screen.height+",left="+center+",top=0,toolbar=no,menubar=no,resizable=yes");
        win.document.write(iframe);
    }

    public getLoginData(){
        if( localStorage.getItem('login') ){
            let data : any = localStorage.getItem('login');
            this.loginData.next(JSON.parse(data));
        }
    }

    public roleAccess(url: string){
        this.http.post<any>(config.api_url('role_access'), {url: url})
            .subscribe(data => {
                if( data.code != 200 ){
                    this.router.navigateByUrl('/login');
                }
            })
    }


}
