import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestEntry } from '../model/guest-entry';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-update-guest-entry',
  templateUrl: './update-guest-entry.component.html',
  styleUrls: ['./update-guest-entry.component.css']
})
export class UpdateGuestEntryComponent implements OnInit {

  id: number = 0;

  guestEntry: GuestEntry = new GuestEntry();
  constructor(private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    console.log('this.id = '+this.id);

    this.adminService.getGuestEntryById(this.id).subscribe(data => {
      console.log('UpdateGuestEntryComponent data = '+data);
      this.guestEntry = data;
    }, error => console.log(error));
  }

  onSubmit(){
    console.log('onSubmit.....');
    this.adminService.updateGuestEntry(this.id, this.guestEntry).subscribe( data =>{
      this.goToAdminPage();
    }
    , error => console.log(error));
  }

  goToAdminPage(){
    this.router.navigate(['/adminPage']);
  }

}
