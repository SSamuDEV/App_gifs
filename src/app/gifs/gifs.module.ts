import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/seartch-box.component';
import { CardListComponents } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent, SearchBoxComponent, CardListComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
