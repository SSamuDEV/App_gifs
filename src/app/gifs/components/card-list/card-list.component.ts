import { Component, Input} from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.components.html',
})

export class CardListComponents  {
  @Input()
  public gifs: Gif[] = [];
}
