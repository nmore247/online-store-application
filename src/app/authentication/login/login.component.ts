import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../auth-service/authentication.service';
import { Router, RouterModule } from '@angular/router';
import { UserInterface } from '../User';
import { materialModules } from '../../material-module';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, materialModules, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  public form = this.formBuilder.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    this.http.post<{ user: UserInterface }>(environment.loginUrl,
      {
        user: this.form.getRawValue(),
      }
    )
      .subscribe((response) => {
        localStorage.setItem('token', response.user.token);
        this.authService.currentUserSig.set(response.user);
        this.router.navigateByUrl('/');
      });
  }
}
