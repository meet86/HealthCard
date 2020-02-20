import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loginInfo

  constructor(private registerService:RegisterService) { }
  
  ngOnInit() {
    this.registerService.loginStatCaster.subscribe(info=>this.loginInfo=info)
    if(sessionStorage.getItem("isLogged") != null)
    {
      var userId = sessionStorage.getItem("userId")
      this.registerService.updateLoginStat(userId)
    }
    console.log('loginInfo:',this.loginInfo)
  }
  logout()
  {
    this.registerService.logout()
  }
}
