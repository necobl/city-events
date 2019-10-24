import { Component, OnInit } from '@angular/core';
import { MatTableDataSource,  } from '@angular/material';
import { CityEventCategory } from 'src/app/core/models/city-event-category.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  
  displayedColumns: string[] = ['categorie', 'edit' , 'delete'];
  dataSource = new MatTableDataSource<CityEventCategory>();

  constructor() { }

  ngOnInit() {
  }
  loadCityEventCategory() {
    this.dataSource.data = this.service.getEvents();
  }
}
