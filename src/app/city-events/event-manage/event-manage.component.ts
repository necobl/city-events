import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CityEventsService} from 'src/app/core/services/city-events.service';
import {MatSnackBar, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CityEvent} from '../../core/models/city-event.model';
import { CityEventCategory } from 'src/app/core/models/city-event-category.model';
import { CityEventsCategoryService } from 'src/app/core/services/city-events-category.service';


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

  cityEventCategories: Array<CityEventCategory> = [];

  constructor(public formBuilder: FormBuilder, // formBuilder sluzi za kreiranje forme
              private service: CityEventsService, // service koristimo za cuvanje podataka
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<EventManageComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private cityEventCategoriesService: CityEventsCategoryService) {
  } // snackBar za prikaz obavjestenja

  ngOnInit() {
this.cityEventCategories = this.cityEventCategoriesService.getCategories();

    this.cityEvent = (this.data && this.data.cityEvent) ? this.data.cityEvent : new CityEvent();
    this.pageTitle = this.cityEvent.name ? 'Izmjeni dogadjaj' : 'Dodaj dogadjaj';
    if (this.cityEvent.name) {
      this.isEdit = true;
    }

    // prilikom ucitavanja stranice pravimo formu
    this.form = this.formBuilder.group({
      name: [this.cityEvent.name, Validators.required],
      description: [this.cityEvent.description, Validators.required],
      eventDate: [this.cityEvent.eventDate],
      categoryId: [this.cityEvent.categoryId,Validators.required]
      
    });
  }

  save({value, valid}: { value: CityEvent, valid: boolean }) {
    if (valid) { // ako su OK
      Object.assign(this.cityEvent, value);
      if (this.isEdit) {
        this.service.editEvent(this.cityEvent);
      } else {
        this.service.addEvent(this.cityEvent); // koristimo nas servis da ih sacuvamo
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

