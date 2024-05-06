import { Component } from '@angular/core';
import { materialModules } from '../../material-module';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../auth/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [materialModules, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  appTitle: string = 'Mock Store';
  public isLoggedIn = this.auth.isLoggedIn();
  constructor(private auth: AuthenticationService, private router : Router) {}
  public guardAlert() {
   return this.auth.isLoggedIn() ? this.router.navigate(['/home']) : alert("Please Login or Register !");
  }
}
