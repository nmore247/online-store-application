import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./header/header/header.component";
import { FooterComponent } from "./footer/footer/footer.component";



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
        FooterComponent
    ]
})
export class AppComponent {
  title = 'mock-store';
}
