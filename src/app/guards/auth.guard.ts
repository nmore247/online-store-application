import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot,state: RouterStateSnapshot) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  if (!authService.isLoggedIn()) {
    router.navigate(['/login']);
  }
  return true;
};
