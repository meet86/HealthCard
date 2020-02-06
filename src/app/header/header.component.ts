import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogged

  constructor(private registerService:RegisterService) { 
    this.registerService.isLoggedCast.subscribe(stat=> this.isLogged=stat)
  }
  
  ngOnInit() {
  }
  logout()
  {
    this.registerService.logout()
  }
}
