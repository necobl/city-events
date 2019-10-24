import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CityEventCategory} from 'src/app/core/models/city-event-category.model';
import {CityEventsCategoryService} from 'src/app/core/services/city-events-category.service';
import {MatSnackBar, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-category-manage',
  templateUrl: './category-manage.component.html',
  styleUrls: ['./category-manage.component.css']
})
export class CategoryManageComponent implements OnInit {

  public form: FormGroup;
  public pageTitle: string;
  private cityEventCategory: CityEventCategory;
  private isEdit: boolean;

  constructor(public formBuilder: FormBuilder, // formBuilder sluzi za kreiranje forme
              private service: CityEventsCategoryService, // service koristimo za cuvanje podataka
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<CategoryManageComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit() {
    this.cityEventCategory = (this.data && this.data.cityEventCategory) ? this.data.cityEventCategory : new CityEventCategory();
    this.pageTitle = this.cityEventCategory.name ? 'Izmjeni dogadjaj' : 'Dodaj dogadjaj';
    if (this.cityEventCategory.name) {
      this.isEdit = true;
    }

    // prilikom ucitavanja stranice pravimo formu
    this.form = this.formBuilder.group({
      name: [this.cityEventCategory.name, Validators.required],

    });
  }

  save({value, valid}: { value: CityEventCategory, valid: boolean }) {
    if (valid) { // ako su OK
      Object.assign(this.cityEventCategory, value);
      if (this.isEdit) {
        this.service.editCategory(this.cityEventCategory);
      } else {
        this.service.addCategory(this.cityEventCategory); // koristimo nas servis da ih sacuvamo
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
