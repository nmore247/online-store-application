import { Injectable, signal } from '@angular/core';
import { UserInterface } from '../User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  currentUserSig = signal<UserInterface | undefined | null>(undefined);
}
