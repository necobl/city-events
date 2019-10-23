import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CityEventsService} from 'src/app/city-events/services/city-events.service';
import {MatSnackBar, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CityEvent} from '../../core/models/city-event.model';

@Component({
  selector: 'app-events-create',
  templateUrl: './event-manage.component.html',
  styleUrls: ['./event-manage.component.css']
})
export class EventManageComponent implements OnInit {

  public form: FormGroup;
  public pageTitle: string;
  private cityEvent: CityEvent;
  private isEdit: boolean;

  constructor(public formBuilder: FormBuilder, // formBuilder sluzi za kreiranje forme
              private service: CityEventsService, // service koristimo za cuvanje podataka
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<EventManageComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
  } // snackBar za prikaz obavjestenja

  ngOnInit() {
    this.cityEvent = (this.data && this.data.cityEvent) ? this.data.cityEvent : new CityEvent();
    this.pageTitle = this.cityEvent.name ? 'Izmjeni dogadjaj' : 'Dodaj dogadjaj';
    if (this.cityEvent.name) {
      this.isEdit = true;
    }

    // prilikom ucitavanja stranice pravimo formu
    this.form = this.formBuilder.group({
      name: [this.cityEvent.name, Validators.required],
      description: [this.cityEvent.description, Validators.required],
      eventDate: [this.cityEvent.eventDate]
    });
  }

  save({value, valid}: { value: CityEvent, valid: boolean }) {
    if (valid) { // ako su OK

      if (this.isEdit) {
        this.service.editEvent(value);
      } else {
        this.service.addEvent(value); // koristimo nas servis da ih sacuvamo
      }

      this.form.reset(); // ponistimo prethodno unesene podatke
      this.snackBar.open('Podaci su sacuvani', null, { // i prikazemo poruku koja nestaje nakon 2s
        duration: 2000,
      });
      this.close();
    }
  }

  close() {
    this.dialogRef.close();
  }

}

