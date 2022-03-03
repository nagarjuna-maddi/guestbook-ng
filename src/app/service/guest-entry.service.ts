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
    return this.httpClient.post(this.baseURL + 'saveGuestEntry', guestEntry);
  }

  saveGuestImage(formData: FormData): Observable<Object> {
    console.log("In GuestEntryService .." + this.baseURL + 'saveGuestImage');
    console.log(formData);
    return this.httpClient.post(this.baseURL + 'saveGuestImage', formData);
  }


  viewAllApprovedGuestEntries(id: number): Observable<GuestEntry[]> {
    console.log('viewAllApprovedGuestEntries...guest'+ id);
    return this.httpClient.get<GuestEntry[]>(this.baseURL + 'viewAllApprovedGuestEntries/' + id);
  }


  

  

}





