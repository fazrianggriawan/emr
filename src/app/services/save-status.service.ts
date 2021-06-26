import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveStatusService {

  saveStatus = new BehaviorSubject(false);

  getSaveStatus(){
    return this.saveStatus.asObservable();
  }

  setSaveStatus(status: boolean){
    this.saveStatus.next(status)
  }

  constructor() { }
}
