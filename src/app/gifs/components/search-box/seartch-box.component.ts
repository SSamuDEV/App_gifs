import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input type="text" class="form-control" placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()" #txtTagInput
    >`
})

export class SearchBoxComponent {

  // View Child para hacer referencia a un input del html.
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  // Para añadir la inyección de depenedencia, se hace desde el constructor.
  constructor(private gifsService: GifsService ) {

  }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}
