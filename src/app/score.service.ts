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
  games: Array<any> = [];
  teams: Array<any> = [];
  teamData: Array<any> = [
    {
      "team": "Atlanta Hawks",
      "primary": "#E03A3E",
      "secondary": "#C1D32F",
      "tertiary": "#26282A"
    },
    {
      "team": "Boston Celtics",
      "primary": "#007A33",
      "secondary": "#BA9653",
      "tertiary": "#963821"
    },
    {
      "team": "Brooklyn Nets",
      "primary": "#000000",
      "secondary": "#FFFFFF",
    },
    {
      "team": "Charlotte Hornets",
      "primary": "#1D1160",
      "secondary": "#00788C",
      "tertiary": "#A1A1A4"
    },
    {
      "team": "Chicago Bulls",
      "primary": "#CE1141",
      "secondary": "#000000",
    },
    {
      "team": "Cleveland Cavaliers",
      "primary": "#860038",
      "secondary": "#041E42",
      "tertiary": "#FDBB30"
    },
    {
      "team": "Dallas Mavericks",
      "primary": "#00538C",
      "secondary": "#002B5E",
      "tertiary": "#B8C4CA"
    },
    {
      "team": "Denver Nuggets",
      "primary": "#0E2240",
      "secondary": "#FEC524",
      "tertiary": "#8B2131"
    },
    {
      "team": "Detroit Pistons",
      "primary": "#C8102E",
      "secondary": "#1D42BA",
      "tertiary": "#BEC0C2"
    },
    {
      "team": "Golden State Warriors",
      "primary": "#1D428A",
      "secondary": "#FFC72C",
    },
    {
      "team": "Houston Rockets",
      "primary": "#CE1141",
      "secondary": "#000000",
      "tertiary": "#C4CED4"
    },
    {
      "team": "Indiana Pacers",
      "primary": "#002D62",
      "secondary": "#FDBB30",
      "tertiary": "#BEC0C2"
    },
    {
      "team": "LA Clippers",
      "primary": "#C8102E",
      "secondary": "#1D428A",
      "tertiary": "#BEC0C2",
    },
    {
      "team": "LA Lakers",
      "primary": "#552583",
      "secondary": "#FDB927",
      "tertiary": "#000000",
    },
    {
      "team": "Memphis Grizzlies",
      "primary": "#5D76A9",
      "secondary": "#12173F",
      "tertiary": "#F5B112",
    },
    {
      "team": "Miami Heat",
      "primary": "#98002E",
      "secondary": "#F9A01B",
      "tertiary": "#000000",
    },
    {
      "team": "Milwaukee Bucks",
      "primary": "#00471B",
      "secondary": "#EEE1C6",
      "tertiary": "#0077C0",
    },
    {
      "team": "Minnesota Timberwolves",
      "primary": "#0C2340",
      "secondary": "#236192",
      "tertiary": "#9EA2A2",
    },
    {
      "team": "New Orleans Pelicans",
      "primary": "#0C2340",
      "secondary": "#C8102E",
      "tertiary": "#85714D",
    },
    {
      "team": "New York Knicks",
      "primary": "#006BB6",
      "secondary": "#F58426",
      "tertiary": "#BEC0C2",
    },
    {
      "team": "Oklahoma City Thunder",
      "primary": "#007AC1",
      "secondary": "#EF3B24",
      "tertiary": "#002D62",
    },
    {
      "team": "Orlando Magic",
      "primary": "#0077C0",
      "secondary": "#C4CED4",
      "tertiary": "#000000",
    },
    {
      "team": "Philadelphia 76ers",
      "primary": "#006BB6",
      "secondary": "#ED174C",
      "tertiary": "#002B5C",
    },
    {
      "team": "Phoenix Suns",
      "primary": "#1D1160",
      "secondary": "#E56020",
      "tertiary": "#000000",
    },
    {
      "team": "Portland Trailblazers",
      "primary": "#E03A3E",
      "secondary": "#000000",
    },
    {
      "team": "Sacramento Kings",
      "primary": "#5A2D81",
      "secondary": "#63727A",
      "tertiary": "#000000",
    },
    {
      "team": "San Antonio Spurs",
      "primary": "#C4CED4",
      "secondary": "#000000",
    },
    {
      "team": "Toronto Raptors",
      "primary": "#CE1141",
      "secondary": "#000000",
      "tertiary": "#A1A1A4",
    },
    {
      "team": "Utah Jazz",
      "primary": "#002B5C",
      "secondary": "#00471B",
      "tertiary": "#F9A01B",
    },
    {
      "team": "Washington Wizards",
      "primary": "#002B5C",
      "secondary": "#E31837",
      "tertiary": "#C4CED4",
    },
  ]
  colors: Array<any> = [];
  private teamDataURL = 'assets/teamData.json';
  constructor(private httpClient: HttpClient) {

  }

  getScores(date: Date) {
    this.games = [];
    this.teams = [];
    this.colors = [];
    var url = 'https://www.balldontlie.io/api/v1/games?start_date=' + formatDate(date, 'yyyy-MM-dd', 'en_US') + '&end_date=' + formatDate(date, 'yyyy-MM-dd', 'en_US');
    this.httpClient.get<any>(url).subscribe(
      data => {
        console.log(data)
        var temp = JSON.parse(JSON.stringify(data)).data;
        console.log(temp)
        // if (this.games.length > 0) {
        //   this.games = [];
        //   this.teams = [];
        //   this.colors = [];
        // }
        for (let game in temp) {
          temp[game].homeColor = this.teamData.find(x => x.team === temp[game].home_team.full_name).primary;
          temp[game].visitorColor = this.teamData.find(x => x.team === temp[game].visitor_team.full_name).primary
          this.games.push(temp[game])
        }
      }
    )
      console.log(this.games)
    return this.games
  }
}
