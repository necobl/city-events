import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CityEventsService} from 'src/app/city-events/services/city-events.service';
import {MatSnackBar, MatDialogRef} from '@angular/material';
import {CityEvent} from '../../core/models/city-event.model';

@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.css']
})
export class EventsCreateComponent implements OnInit {

  public form: FormGroup;
  public cityEvent: CityEvent = new CityEvent();


  constructor(public formBuilder: FormBuilder, // formBuilder sluzi za kreiranje forme
              private service: CityEventsService, // service koristimo za cuvanje podataka
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<EventsCreateComponent>) {
  } // snackBar za prikaz obavjestenja

  ngOnInit() {
    // prilikom ucitavanja stranice pravimo formu
    this.form = this.formBuilder.group({
      name: [this.cityEvent.name, Validators.required],
      description: [this.cityEvent.description, Validators.required],
      eventDate: [this.cityEvent.eventDate]
    });
  }

  save({value, valid}: { value: CityEvent, valid: boolean }) {
    if (valid) { // ako su OK
      this.service.addEvent(value); // koristimo nas servis da ih sacuvamo
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

