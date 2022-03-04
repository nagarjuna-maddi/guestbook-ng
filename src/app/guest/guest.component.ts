import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestEntry } from '../model/guest-entry';
import { Login } from '../model/login';
import { AdminService } from '../service/admin.service';
import { GuestEntryService } from '../service/guest-entry.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  login : Login = new Login();

  guestEntryList: GuestEntry[] = [];

  constructor(private guestEntryService: GuestEntryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.login.userId =  this.route.snapshot.queryParams['userId'];
    this.login.userName =  this.route.snapshot.queryParams['userName'];
    this.login.userType =  this.route.snapshot.queryParams['userType'];
    this.login.emailId =  this.route.snapshot.queryParams['emailId'];

    console.log('login info in GuestComponent');
    console.log(this.login);


    this.getGuestEntryList();
  }

  private getGuestEntryList() {
    this.guestEntryService.viewAllApprovedGuestEntries(this.login.userId).subscribe(data => {
      console.log('viewAllApprovedGuestEntries..component');
      this.guestEntryList = data;
    });
  }

  addNewComment() {
    this.router.navigate(['/guestEntryForm'],{queryParams: this.login});
  }



}
