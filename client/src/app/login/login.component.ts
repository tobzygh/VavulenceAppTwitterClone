import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }



  login() {
    this.accountService.login(this.model).subscribe({
      next: () => this.router.navigateByUrl('/members'),
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/'); 
  }

}
