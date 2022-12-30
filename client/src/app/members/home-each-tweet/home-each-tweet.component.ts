import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-each-tweet',
  templateUrl: './home-each-tweet.component.html',
  styleUrls: ['./home-each-tweet.component.css']
})
export class HomeEachTweetComponent implements OnInit {
  profilepic: string = "assets/IMG-20221211-WA0000.jpg";
  profilepic2: string = "assets/image.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
