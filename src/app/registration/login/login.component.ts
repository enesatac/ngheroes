import { Component, OnInit } from '@angular/core';
import { faApple, faFacebook, faFacebookF, faGoogle, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faGoogle = faGoogle;
  faApple = faApple;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faLinkedinIn = faLinkedinIn;

  constructor() { }

  ngOnInit(): void {
  }


}
