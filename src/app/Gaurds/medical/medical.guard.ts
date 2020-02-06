import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as CryptoJs from "crypto-js";  

@Injectable({
  providedIn: 'root'
})
export class MedicalGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      var type = CryptoJs.AES.decrypt(sessionStorage.getItem("type"),"Hello!").toString(CryptoJs.enc.Utf8)
      console.log("type:",type)
     
      if(sessionStorage.getItem("isLogged") == 'true' && type.toLowerCase() == "lab")
        return true
      
      else{
        this.router.navigate(["/Login"])
        return false
      }
  }
  
}
