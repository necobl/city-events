import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort, MatDialog} from '@angular/material';
import {CityEventsService} from 'src/app/core/services/city-events.service';
import {EventManageComponent} from '../event-manage/event-manage.component';
import {CloseEventsComponent} from '../close-events/close-events.component';
import {CityEvent} from '../../core/models/city-event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'eventDate', 'time', 'edit', 'delete'];
  dataSource = new MatTableDataSource<CityEvent>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private service: CityEventsService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadCityEvents();
    this.dataSource.sort = this.sort;
  }

  loadCityEvents() {
    this.dataSource.data = this.service.getEvents();
  }

  addEvent() {
    this.dialog.open(EventManageComponent, {
      width: '600px'
    })
      .afterClosed()
      .subscribe(result => {
        this.loadCityEvents();
      });
  }

  editEvent(cityEvent) {
    this.dialog.open(EventManageComponent, {
      width: '600px',
      data: {
        cityEvent: cityEvent
      }
    })
      .afterClosed()
      .subscribe(result => {
        this.loadCityEvents();
      });
  }


  deleteEvent(element) {
    this.dialog.open(CloseEventsComponent, {
      width: '600px',
      data: {
        task: element
      }
    })
      .afterClosed()
      .subscribe(result => {
        this.loadCityEvents();
      });
  }

}
