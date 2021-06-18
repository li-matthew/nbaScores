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
  games: any[] = [];
  now = new Date()
  date: Date = this.now;
  formatDate = '';
  teamData: any[] = [];
  
  constructor(private scoreService: ScoreService) {
    
   }

  ngOnInit(): void {
    console.log(this.now)
    this.games = this.scoreService.getScores(this.now);
    this.formatDate = formatDate(this.now, 'fullDate', 'en_US')
    console.log(this.scoreService.getScores(this.now))
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
