import {Component, OnInit, Inject} from '@angular/core';
import {CityEventsService} from 'src/app/city-events/services/city-events.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CityEvent} from '../../core/models/city-event.model';

@Component({
  selector: 'app-close-events',
  templateUrl: './close-events.component.html',
  styleUrls: ['./close-events.component.css']
})
export class CloseEventsComponent implements OnInit {

  public event: CityEvent = new CityEvent();

  constructor(private service: CityEventsService,
              @Inject(MAT_DIALOG_DATA) public data,
              private dialogRef: MatDialogRef<CloseEventsComponent>) {
    this.event = data.task;
  }


  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.service.completeEvents(this.event.name);
    this.close();
  }


}
