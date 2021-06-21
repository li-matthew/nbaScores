import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})

export class ScoreService {
  games: Array<any> = [];
  teams: Array<any> = [];
  teamData: Array<any> = []
  colors: Array<any> = [];
  private teamDataURL = 'assets/teamData.json';
  constructor(private httpClient: HttpClient) {
    httpClient.get(this.teamDataURL).subscribe(data => {
      this.teamData = JSON.parse(JSON.stringify(data))
    })
    // console.log(this.teamData)
  }

  getScores(date: Date) {
    this.games = [];
    this.teams = [];
    this.colors = [];
    var url = 'https://www.balldontlie.io/api/v1/games?start_date=' + formatDate(date, 'yyyy-MM-dd', 'en_US') + '&end_date=' + formatDate(date, 'yyyy-MM-dd', 'en_US');
    this.httpClient.get<any>(url).subscribe(
      data => {
        // console.log(data)
        var temp = JSON.parse(JSON.stringify(data)).data;
        for (let game in temp) {
          temp[game].homeColor = this.teamData.find(x => x.team === temp[game].home_team.full_name).primary;
          temp[game].visitorColor = this.teamData.find(x => x.team === temp[game].visitor_team.full_name).primary
          this.games.push(temp[game])
        }
      }
    )
    return this.games
  }
}
