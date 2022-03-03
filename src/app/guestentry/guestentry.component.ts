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

  public file: any;
  public fileName: string = "";

  textBoxDisabled = false;
  imageBoxDisabled = true;

  textClick() {
    this.guestEntry.image = [];
    this.textBoxDisabled = false;
    this.imageBoxDisabled = true;
  }

  imageClick() {
    this.guestEntry.comment = "";
    this.textBoxDisabled = true;
    this.imageBoxDisabled = false;
  }


  constructor(private guestEntryService: GuestEntryService,
    private router: Router) {
    console.log('GuestentryComponent constructor2');
  }

  ngOnInit(): void {
    console.log('GuestentryComponent ngOnInit2');
  }

  onSubmit() {


    this.guestEntry.status = "Pending";

    if (this.imageBoxDisabled) {
      console.log("onsubmit1 text");

      //this.guestEntry.image = this.files[0];
      this.guestEntryService.saveGuestEntry(this.guestEntry).subscribe(data => {
        this.router.navigate(['/guestPage/'+this.guestEntry.userId]);
      },
        error => console.log(error));
    } else if (this.textBoxDisabled) {
      console.log("onsubmit2 image");

      this.fileName = this.file.name;

      const formData = new FormData();

      formData.append("image", this.file);

      this.guestEntryService.saveGuestImage(formData).subscribe(data => {
        this.router.navigate(['/guestPage/'+this.guestEntry.userId]);
      },
        error => console.log(error));
    }


  }

  onFileChanged(event: any) {
    this.file = event.target.files[0];


  }



}
