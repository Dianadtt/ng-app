import {Component} from '@angular/core'
import { EventService } from './shared/event.service'
import{OnInit} from '@angular/core'
import {ToastrService} from '../common/toastr.service'

declare let toastr

@Component({
    selector:'events-list',
    template:`
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
        <div *ngFor="let event of events" class="col-md-5">      
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
        </div>  
    </div>
    `
})
export class EventListComponent implements OnInit{
    events:any[]
    constructor(private eventService: EventService, private toastr:ToastrService){   
    }
  
    ngOnInit(){
        this.events=this.eventService.getEvents()
    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName)
    }
}