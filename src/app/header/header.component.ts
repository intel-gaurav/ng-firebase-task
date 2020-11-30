import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  user:string;
  constructor(public authService:AuthService) { }

  ngOnInit(): void {
    let user = this.authService.getUser();
    if (user){
      this.user = user.email
    }
  }

  ngDoCheck(): void{
    let user = this.authService.getUser();
    if (user){
      this.user = user.email
    }
    else{
      this.user = null
    }
  }

}