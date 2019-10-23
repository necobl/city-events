import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { EventService } from 'src/app/event.service';
import { EventsCreateComponent } from '../events-create/events-create.component';
import { CloseEventsComponent } from '../close-events/close-events.component';
import { Event } from 'src/app/model/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'dueDate', 'time', 'active', 'close', 'delete'];
  dataSource = new MatTableDataSource<Event>();
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  

  constructor(private service: EventService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource.data = this.service.getEvents();
    this.dataSource.sort = this.sort;
  }

  addEvent() {
    this.dialog.open(EventsCreateComponent, {
      width: '600px'
    })
      .afterClosed()
      .subscribe(result => {
        this.dataSource.data = this.service.getEvents();
      });
  }

  

  

  closeEvent(element) {
    this.dialog.open(CloseEventsComponent, {
      width: '600px',
      data: {
        task: element
      }
    })
      .afterClosed()
      .subscribe(result => {
        this.dataSource.data = this.service.getEvents();
      });
  }

}