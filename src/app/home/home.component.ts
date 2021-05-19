import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //We inject Router class so that we can navigate to a url when we want to go some page from this page
  constructor(private route:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  onLoadServers(id:number){
    this.route.navigate(['/servers',id,'edit'],{queryParams:{allowEdit:"1"},fragment:"nav"});
  }
  onLogin(){
    this.authService.login();
  }
  onLogout(){
    this.authService.logout();
  }
}
