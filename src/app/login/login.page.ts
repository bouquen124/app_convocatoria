import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit() {
  }


  async onLogin(email, password) {
    try {
      const user = await this.auth.login(email.value, password.value);
      if (user) {
        const isVerified = this.auth.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async onLoginGoogle() {
    try {
      const user = await this.auth.loginGoogle();
      if (user) {
        const isVerified = this.auth.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

private redirectUser(isVerified: boolean): void {
  if (isVerified) {
    this.router.navigate(['casos']);
  } else {
   window.alert('verifica tu correo');
   this.router.navigate(['casos']);
  }
}

}
