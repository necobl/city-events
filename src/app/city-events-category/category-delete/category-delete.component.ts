import { Component, OnInit, Inject } from '@angular/core';
import { CityEventCategory } from 'src/app/core/models/city-event-category.model';
import { CityEventsCategoryService } from 'src/app/core/services/city-events-category.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  public category: CityEventCategory = new CityEventCategory();

  constructor(private service: CityEventsCategoryService,
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<CategoryDeleteComponent>) {
this.category = data.task;
}


ngOnInit() {
}

close() {
this.dialogRef.close();
}

save() {
this.service.deleteCategory(this.category.id);
this.close();
}


}
