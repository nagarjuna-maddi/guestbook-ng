import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GuestEntry } from '../model/guest-entry';

@Injectable({
  providedIn: 'root'
})
export class GuestEntryService {

  private baseURL = "http://localhost:8080/api/guestbookapp/guest/";




  constructor(private httpClient: HttpClient) { }

  saveGuestEntry(guestEntry: GuestEntry): Observable<Object> {
    console.log("In GuestEntryService .." + this.baseURL + 'saveGuestEntry');
    console.log(guestEntry);
    guestEntry

    return this.httpClient.post(this.baseURL + 'saveGuestEntry', guestEntry);
  }

 


}





