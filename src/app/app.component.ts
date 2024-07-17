import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './toolbar/header/header.component';
import { SideBarService } from './toolbar/header/sidebar.service';


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
    RouterModule,
  ], 
  providers: [SideBarService]
})
export class AppComponent {
  title = 'mock-store';
}
