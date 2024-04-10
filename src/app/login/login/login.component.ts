import { Component } from '@angular/core';
import { materialModules } from '../../material-module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [materialModules, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit(): void {
    // Implement login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
