import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryManageComponent } from './category-manage/category-manage.component';



@NgModule({
  declarations: [CategoriesListComponent,
    CategoryManageComponent
  ],
  entryComponents:[
   CategoryManageComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CategoriesListComponent]
})
export class CityEventsCategoryModule { }
