import { Component } from '@angular/core';
import { materialModules } from '../../material-module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [materialModules],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  appTitle: string = "Mock Store"
}
