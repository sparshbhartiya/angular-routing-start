import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy{
  user: {id: number, name: string};
  paramsSubscription : Subscription;
  //We can fetch the metadata from url using ActivatedRoute class methods
  constructor(private route:ActivatedRoute) { }
  //This snapshot property gives us the data passed from url to use this snapshot for
  //the first initialization but to be able to react to subsequent changes,
  //ie if we want data on this same page to get updated when some event is 
  // triggered we need a different approach.
  ngOnInit(): void {
    this.user={
      id:this.route.snapshot.params["id"],
      name:this.route.snapshot.params["name"]
    }
    /*
    This parmas is an observable. Observables are used to work with asynchronous tasks. Here the params of 
    users/:id/:name route can change any time in future u don't know so to handle such tasks observables 
    are useful. So using this params observable we subscribe to an event in future. The subscribe method
    takes three functions as args. First one is important which takes updated params of url as args and
    will update the user data.
    */
    this.paramsSubscription = this.route.params.subscribe(
      (params:Params) => {
        this.user.id = params["id"];
        this.user.name = params["name"];
      }
    )
    
  }
  //The subscription is loosely attached to the components so when component is destroyed the subscription
  //might not be destroyed hence it's good to detroy it ourselves.
  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

}
