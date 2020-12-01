import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user:string;
  constructor(
    public authService:AuthService,
    public router: Router,
    ) { }

  ngOnInit(): void {
    let user = this.authService.getUser();
    if (user){
      this.user = user.email
    }
  }

  signOut(){
    this.authService.SignOut().then((res)=>{
      console.log("response = ",res)
        localStorage.removeItem('user');
        // this.router.navigate(['sign-in']);
    })
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