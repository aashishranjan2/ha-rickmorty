import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../service/rickmorty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {
  public allCharacters: [];
  previous: string = '';
  next: string = '';
  public restURL = 'https://rickandmortyapi.com/api/character/?page=1';

  constructor(private rickMortyService: RickMortyService) {
    this.getRickMortyCharactersList(this.restURL);
  }

  /**
   * 
   * @param restURL - api url
   * @description getRickMortyCharactersList(restURL: string) - invokes rest call through rickMortyService service and stores the
   * values in allCharacter array and displayed on the page.
   * previous and next - varaibles hold the values for the subsequent calls by passing page number as query string 
   */
  getRickMortyCharactersList(restURL: string) {
    this.rickMortyService.getAllCharactersDetails(restURL).subscribe(data => {
      this.allCharacters = data['results'];
      this.previous = data['info'].prev;
      this.next = data['info'].next;
    });
  }
}
