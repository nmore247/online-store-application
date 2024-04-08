import { Component } from '@angular/core';
import { materialModules } from '../../material-module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [materialModules],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public items = [
    { id: 1, title: 'Card 1', subtitle: 'Subtitle 1', description: 'Description for card 1' },
    { id: 2, title: 'Card 2', subtitle: 'Subtitle 2', description: 'Description for card 2' },
    { id: 3, title: 'Card 3', subtitle: 'Subtitle 3', description: 'Description for card 3' }
  ];
}
