import { Component } from '@angular/core';
import { materialModules } from '../../material-module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../auth-service/authentication.service';
import { UserInterface } from '../User';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, materialModules, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  public form = this.formBuilder.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    this.http.post<{ user: UserInterface }>(environment.registerURL, {
        user: this.form.getRawValue(),
      })
      .subscribe((response) => {
        console.log('response', response);
        localStorage.setItem('token', response.user.token);
        this.authService.currentUserSig.set(response.user);
        this.router.navigateByUrl('/home');
      });
  }
}
