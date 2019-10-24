import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSort, } from '@angular/material';
import { CityEventCategory } from 'src/app/core/models/city-event-category.model';
import { CityEventsCategoryService } from '../../core/services/city-events-category.service';
import { CategoryManageComponent } from '../category-manage/category-manage.component';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'edit', 'delete'];
  dataSource = new MatTableDataSource<CityEventCategory>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private service: CityEventsCategoryService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  loadCityEventCategory() {
    this.dataSource.data = this.service.getCategories();
  }
  addCategory() {
    this.dialog.open(CategoryManageComponent, {
      width: '600px'
    })
      .afterClosed()
      .subscribe(result => {
        this.loadCityEventCategory();
      });
  }
  editCategory(cityEventCategory) {
    this.dialog.open(CategoryManageComponent, {
      width: '600px',
      data: {
        cityEventCategory: cityEventCategory
      }
    })
      .afterClosed()
      .subscribe(result => {
        this.loadCityEventCategory();
      });
  }




}

