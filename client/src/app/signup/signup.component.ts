import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  vavulencelogo: string = "assets/projectlogo.png";
  model: any = {}

  constructor(private accountService: AccountService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl('/members')
      },
      error: error => {
        this.toastr.error(error.error);
        console.log(error);
      }
    })
  }

}
