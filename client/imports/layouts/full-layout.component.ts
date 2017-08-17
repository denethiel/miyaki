import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/filter';
import template from './full-layout.component.html';

@Component({
  selector:'app-dashboard',
  template
})
export class FullLayoutComponent implements OnInit {

  title: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit() : void {
       console.log(this.route.snapshot.params);
       this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
           //console.log(this.route.snapshot.data);
           let currentRoute = this.route.root;
           do{
            let childrenRoutes = currentRoute.children;
            currentRoute = null;
            childrenRoutes.forEach(route =>{
                if(route.outlet === 'primary'){
                    this.title = route.snapshot.data.title;
                }
                currentRoute = route
            })
           }while(currentRoute)
       })
    }

  logout(){
    Meteor.logout(() => {
      location.reload();
    });
  }
}
