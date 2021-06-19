import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';
import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  games: Array<any> = [];
  now = new Date()
  date: Date = this.now;
  formatDate = '';
  teamData: Array<any> = [];
  colors: Array<any> = [];
  constructor(private scoreService: ScoreService, private httpClient: HttpClient ) {
    
   }

  ngOnInit(): void {
    // console.log(this.now)
    this.games = this.scoreService.getScores(this.now);
    // this.colors = this.scoreService.getScores(this.now)[1];
    this.formatDate = formatDate(this.now, 'fullDate', 'en_US')
    for (let game of this.teamData) {
      console.log(game)
    }
    console.log(this.games)
    
  }

  nextDay() {
    
    this.now.setDate(this.now.getDate() + 1)
    console.log(this.now)
    this.ngOnInit()
  }

  prevDay() {
    this.now.setDate(this.now.getDate() - 1)
    console.log(this.now)
    this.ngOnInit()
  }

  
}
