import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,

    RouterModule,
    HomeComponent,
  ],
  providers: []
})
export class AppComponent {
  title = 'e-store';
}
