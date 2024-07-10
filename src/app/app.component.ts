import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
  ],
})
export class AppComponent {
  title = 'mock-store';
}
