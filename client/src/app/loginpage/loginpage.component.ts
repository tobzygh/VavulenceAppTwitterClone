import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  loginMode = false;
  vavulenceimage: string = "assets/E4q2OA6VcAgDHJX.jpg";
  vavulencelogo: string = "assets/projectlogo.png";

  constructor() { }

  ngOnInit(): void {
  }

  loginToggle() {
    this.loginMode = !this.loginMode;
  }



}
