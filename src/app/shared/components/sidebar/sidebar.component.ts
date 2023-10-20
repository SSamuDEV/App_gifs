import { Component, Output } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  private redirectGif:Gif[] = [];

  constructor(private gifsService: GifsService) {}

  get tags() {
    return this.gifsService.tagsHistory
  }

  searchTag(tag: string):void {
    this.gifsService.gifsList;
  }
}
