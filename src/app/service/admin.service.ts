import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GuestEntry } from '../model/guest-entry';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:8080/api/guestapp/admin/";

  constructor(private httpClient: HttpClient) { }

  getGuestEntryList(): Observable<GuestEntry[]> {
    console.log('getGuestEntryList...admin');
    return this.httpClient.get<GuestEntry[]>(this.baseURL + 'viewAllGuestEntries');
  }

  getGuestEntryById(id: number): Observable<GuestEntry> {
    console.log('getGuestEntryById...admin --- ' + this.baseURL + 'getGuestEntryById/' + id);
    return this.httpClient.get<GuestEntry>(this.baseURL + 'getGuestEntryById/' + id);
  }

  approveGuestEntryById(id: number, status: string): Observable<Object> {
    return this.httpClient.put(this.baseURL + 'approveGuestEntryById/' + id, status);
  }

  rejectGuestEntryById(id: number, status: string): Observable<Object> {
    return this.httpClient.put(this.baseURL + 'rejectGuestEntryById/' + id, status);
  }


  updateGuestEntry(id: number, guestEntry: GuestEntry): Observable<Object> {
    return this.httpClient.put(this.baseURL + 'updateGuestEntry/' + id, guestEntry);
  }

  deleteGuestEntry(id: number): Observable<Object> {
    console.log('deleteGuestEntry...');
    return this.httpClient.delete(this.baseURL + 'deleteGuestEntry/' + id);
  }



  downloadImage(id: number): Observable<Object> {
    console.log('downloadImage...');
    return this.httpClient.get(this.baseURL + 'downloadImage/' + id);
  }


}
