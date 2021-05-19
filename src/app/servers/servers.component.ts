import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  //ActivatedRoute we are telling it now our currently active routes is this ActivatedRoute, so relative to 
  //this route you should navigate and then it will simply resolve all the relative paths you might have 
  //here relative to this route.
  constructor(private serversService: ServersService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReload(){
    //this.router.navigate(["servers"],{relativeTo:this.route});
  }

}
