import { Component, OnInit, Inject } from '@angular/core';
import { Event } from 'src/app/model/event.model';
import { EventService } from 'src/app/event.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-close-events',
  templateUrl: './close-events.component.html',
  styleUrls: ['./close-events.component.css']
})
export class CloseEventsComponent implements OnInit {

  public event: Event = new Event();

  constructor(private service: EventService,
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
