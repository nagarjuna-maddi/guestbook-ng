import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestEntry } from '../model/guest-entry';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  guestEntryList: GuestEntry[] = [];

  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
    this.getGuestEntryList();
  }

  private getGuestEntryList() {
    this.adminService.getGuestEntryList().subscribe(data => {
      this.guestEntryList = data;
    });
  }

  addNewComment() {
    this.router.navigate(['/guestEntryForm']);
  }



}
