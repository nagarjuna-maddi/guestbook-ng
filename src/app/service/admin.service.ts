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
    return this.httpClient.get<GuestEntry[]>(this.baseURL+'viewAllGuestEntries');
  }

  deleteGuestEntry(id: number): Observable<Object> {
    console.log('deleteGuestEntry...');
    return this.httpClient.delete(this.baseURL+'/'+id);
  }
}
