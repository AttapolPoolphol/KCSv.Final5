import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthenticateService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService:AuthenticateService,private router:Router){
    
  }

  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter(val => val != null),
      take(1),
      map(isAuthenticated =>{
        console.log('GUARD:',isAuthenticated);
        if(isAuthenticated){
          return true;
        }
        else{
          this.router.navigateByUrl('/home');
          return false;
        }
      })
    )
  }
  
}
