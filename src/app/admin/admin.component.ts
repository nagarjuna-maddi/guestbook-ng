import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuestEntry } from '../model/guest-entry';
import { AdminService } from '../service/admin.service';
import { GuestEntryService } from '../service/guest-entry.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  guestEntryList: GuestEntry[] = [];

  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
    this.getGuestEntryList();
  }

  private getGuestEntryList(){
    this.adminService.getGuestEntryList().subscribe(data => {
      this.guestEntryList = data;
    });
  }

  updateGuestEntry(id: number){
    this.router.navigate(['update-guest-entry', id]);
  }

  deleteGuestEntry(id: number){
    this.adminService.deleteGuestEntry(id).subscribe( data => {
      console.log(data);
      this.getGuestEntryList();
    })
  }

}
