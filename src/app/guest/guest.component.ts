import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestEntry } from '../model/guest-entry';
import { AdminService } from '../service/admin.service';
import { GuestEntryService } from '../service/guest-entry.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  id : number = 0;

  guestEntryList: GuestEntry[] = [];

  constructor(private guestEntryService: GuestEntryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];


    this.getGuestEntryList();
  }

  private getGuestEntryList() {
    this.guestEntryService.viewAllApprovedGuestEntries(this.id).subscribe(data => {
      console.log('viewAllApprovedGuestEntries..component');
      this.guestEntryList = data;
    });
  }

  addNewComment() {
    this.router.navigate(['/guestEntryForm']);
  }



}
