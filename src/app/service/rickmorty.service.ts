import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RickMortyService {
  constructor(private http: HttpClient) {}

  /**
   * 
   * @param url - rest api url
   * @description getAllCharactersDetails(url: string) - method takes url as a parameter and makes an http call and returns
   * the values back to the component from where it is being called
   */
  getAllCharactersDetails(url: string) {
    return this.http.get(url);
  }
}
