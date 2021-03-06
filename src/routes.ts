import {Routes} from '@angular/router'

import { CreateEventComponent } from './app/events/create-event.component';
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import {EventListComponent} from "./app/events/events-list.component"
import { Error404Component } from './app/errors/404.component';
import { EventRouteActivator } from './app/events/event-details/event-route-activator.component';
import { EventListResolver } from './app/events/shared/event-list-resolver.service';

export const appRoutes:Routes=[
    {path:'events/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path:'events', component:EventListComponent, resolve:{events:EventListResolver}},
    {path:'events/:id', component:EventDetailsComponent, canActivate:[EventRouteActivator]}, 
    {path:'404', component: Error404Component}, 
    {path:'', redirectTo:'/events', pathMatch:'full'},
    {path:'user', loadChildren:'./user/user.module#UserModule'}
    
]