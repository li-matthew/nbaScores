import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// import teamData from '../assets/teamData.json';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})

export class ScoreService {
  // now = new Date();
  // format = formatDate(this.now, 'yyyy-MM-dd', 'en_US')
  // format2 = formatDate(this.now, 'fullDate', 'en_US')
  
  games: any[] = [];
  teamData: any[] = [];
  private teamDataURL = 'assets/teamData.json';
  constructor(private http: HttpClient) {
   }

  getScores(date: Date) {
    var url = 'https://www.balldontlie.io/api/v1/games?start_date=' + formatDate(date, 'yyyy-MM-dd', 'en_US') + '&end_date=' + formatDate(date, 'yyyy-MM-dd', 'en_US');
    this.http.get(url).subscribe(
      data => {
        var temp = JSON.parse(JSON.stringify(data)).data;
        console.log(temp)
        if (this.games.length > 0) {
          this.games = [];
        }
        for (let game in temp) {
          this.games.push(temp[game])
        }
      }
    )
    return this.games
  }
}
