import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(usr:String , pass:String): void {
    this.authService.SignIn(usr, pass)
    .then((result) => {
        console.log('test',result);
        if(result.user) {
          localStorage.setItem('user', JSON.stringify(result.user));
        }
        this.authService.SetUserData(result.user);
        this.router.navigate(['/dashboard']);
    }).catch((error) => {
      window.alert(error.message)
      this.router.navigate(['sign-in']);
    })
  }

}
