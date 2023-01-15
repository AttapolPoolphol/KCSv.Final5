import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthenticateService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanLoad {
  constructor(private authService:AuthenticateService,private router:Router){
    
  }

  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      filter(val => val != null),
      take(1),
      map(isAuthenticated =>{
        console.log('GUARD:',isAuthenticated);
        if(isAuthenticated){
          this.router.navigateByUrl('/center',{replaceUrl:true});
        }
        else{
          return true;
        }
      })
    )
  }
}
