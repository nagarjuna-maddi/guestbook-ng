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

  approveGuestEntry(id: number){
    console.log('Approve Id : '+id);
    this.router.navigate(['approve-guest-entry', id]);
  }

  updateGuestEntry(id: number){
    console.log('Update Id : '+id);
    this.router.navigate(['update-guest-entry', id]);
  }

  deleteGuestEntry(id: number){
    this.adminService.deleteGuestEntry(id).subscribe( data => {
      console.log(data);
      this.getGuestEntryList();
    })
  }

}
