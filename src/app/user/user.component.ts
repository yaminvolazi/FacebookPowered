import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = {fullName:'Yamin MEHQI', email:'yamin@gmail.com' ,password:'123'}

  constructor() { }

  ngOnInit() {
  }

}
