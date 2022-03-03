import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestEntry } from '../model/guest-entry';
import { GuestEntryService } from '../service/guest-entry.service';

@Component({
  selector: 'app-guestentry',
  templateUrl: './guestentry.component.html',
  styleUrls: ['./guestentry.component.css']
})
export class GuestentryComponent implements OnInit {

  guestEntry: GuestEntry = new GuestEntry();


  constructor(private guestEntryService: GuestEntryService,
    private router: Router) {

      console.log('GuestentryComponent constructor2');
     }

  ngOnInit(): void {
    console.log('GuestentryComponent ngOnInit2');
  }

  onSubmit() {
    console.log("onsubmit");

    this.guestEntryService.saveGuestEntry(this.guestEntry).subscribe( data =>{
      console.log("save data : "+data);
    },
    error => console.log(error));

  }

}
