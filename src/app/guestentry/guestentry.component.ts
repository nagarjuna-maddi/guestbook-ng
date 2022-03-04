import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestEntry } from '../model/guest-entry';
import { Login } from '../model/login';
import { GuestEntryService } from '../service/guest-entry.service';

@Component({
  selector: 'app-guestentry',
  templateUrl: './guestentry.component.html',
  styleUrls: ['./guestentry.component.css']
})
export class GuestentryComponent implements OnInit {

  guestEntry: GuestEntry = new GuestEntry();
  login : Login = new Login();

  userId : number = 0;

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
    private route: ActivatedRoute,
    private router: Router) {
    console.log('GuestentryComponent constructor2');
  }

  ngOnInit(): void {
    console.log('GuestentryComponent ngOnInit2');
    // this.userId = this.route.snapshot.params['userId'];
    // console.log('guestentry init : '+this.userId);

    this.login.userId =  this.route.snapshot.queryParams['userId'];
    this.login.userName =  this.route.snapshot.queryParams['userName'];
    this.login.userType =  this.route.snapshot.queryParams['userType'];
    this.login.emailId =  this.route.snapshot.queryParams['emailId'];

    console.log('login info in guest entry2');
    console.log(this.login);


  }

  onSubmit() {
    this.guestEntry.status = "Pending";

    this.guestEntry.userId = this.login.userId;

    if (this.imageBoxDisabled) {
      console.log("onsubmit1 text");

      //this.guestEntry.image = this.files[0];
      this.guestEntryService.saveGuestEntry(this.guestEntry).subscribe(data => {
        this.router.navigate(['/guestPage'],{queryParams: this.login});
      },
        error => console.log(error));
    } else if (this.textBoxDisabled) {
      console.log("onsubmit2 image");

      this.fileName = this.file.name;

      const formData = new FormData();

      formData.append("image", this.file);
      formData.append("userId", this.login.userId.toString());

      this.guestEntryService.saveGuestImage(formData).subscribe(data => {
        this.router.navigate(['/guestPage'],{queryParams: this.login});
      },
        error => console.log(error));
    }


  }

  viewMyComments(){
    console.log('viewMyComments.....');
    this.router.navigate(['/guestPage'],{queryParams: this.login});
  }

  onFileChanged(event: any) {
    this.file = event.target.files[0];


  }



}
