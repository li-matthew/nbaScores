import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url = 'https://www.balldontlie.io/api/v1/players';
  players: Array<any> = [];

  constructor(private http: HttpClient) { }

  getPlayers() {
    this.players = [];
    this.http.get(this.url).subscribe(
      data => {
        var temp = JSON.parse(JSON.stringify(data)).data;
        console.log(temp)
        // this.players = temp
        for (let player in temp) {
          this.players.push(temp[player])
        }
      }
    )
    return this.players;
  }
}
