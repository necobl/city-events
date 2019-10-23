import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Event } from 'src/app/model/event.model';
import { EventService } from 'src/app/event.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-events-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.css']
})
export class EventsCreateComponent implements OnInit {

  public form: FormGroup;
  public event: Event = new Event();


  constructor(public formBuilder: FormBuilder, //formBuilder sluzi za kreiranje forme
    private service: EventService, //service koristimo za cuvanje podataka
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EventsCreateComponent>) { } //snackBar za prikaz obavjestenja

  ngOnInit() {
    //prilikom ucitavanja stranice pravimo formu
    this.form = this.formBuilder.group({
      name: [this.event.name, Validators.required],
      description: [this.event.description, Validators.required],
      dueDate: [this.event.dueDate],
      time:[this.event.time, Validators.required],
      active: [this.event.active]
    });
  }

  save({ value, valid }: { value: Event, valid: boolean }) {
    if (valid) { //ako su OK
      this.service.addEvent(value);//koristimo nas servis da ih sacuvamo
      this.form.reset(); //ponistimo prethodno unesene podatke
      this.snackBar.open("Podaci su sacuvani", null, { //i prikazemo poruku koja nestaje nakon 2s
        duration: 2000,
      });
      this.close();
    }
  }

  close(){
    this.dialogRef.close();
  }

}

