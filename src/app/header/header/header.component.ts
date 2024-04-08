import { Component } from '@angular/core';
import { materialModules } from '../../material-module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [materialModules, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  appTitle: string = "Mock Store"
}
