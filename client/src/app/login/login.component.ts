import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}
  vavulencelogo: string = "assets/projectlogo.png";
  googlelogo: string = "assets/icons8-google-48.png";
  applelogo: string = "assets/icons8-apple-logo-30.png";

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }



  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log(error)
    })
  }

  logout() {
    this.accountService.logout();
  }

}
