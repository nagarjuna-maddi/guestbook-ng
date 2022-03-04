import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();



  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.login);

    this.loginService.validateUser(this.login).subscribe(data => {
      console.log(data);

      this.login = data

//{userId: 1, userName: "nagarjunamaddi", password: "nagarjunamaddi123", emailId: "nagarjunam@gmail.com", userType: "guest"}
      if (data.userType == 'guest') {
        this.loadGuestEntryForm();
      } else if (data.userType == 'admin') {
        this.loadAdminPage();
      }

    }
      , error => console.log(error));

    // this.loginService.loginUser(this.login).subscribe(data => {
    //   console.log('data********* = ' + data);

    //   if (this.login.userType == 'Guest') {
    //     this.loadGuestEntryForm();
    //   } else if (this.login.userType == 'Administrator') {
    //     this.loadAdminPage();
    //   }

    // }
    //   , error => console.log(error));
  }

  loadGuestEntryForm() {
    console.log('navingating to guest entry form');
    this.router.navigate(['/guestEntryForm'],{queryParams: this.login});
    console.log('navingating to guest entry form......31');
  }

  loadAdminPage() {
    console.log('in Admin page....');
    this.router.navigate(['/adminPage']);
  }


}
