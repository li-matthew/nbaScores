import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service'
import { Sort } from '@angular/material/sort'

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Array<any> = []
  displayedColumns: string[] = ['name']
  sortedData: Array<any> = []
  constructor(private playerService: PlayerService) { 

  }

  ngOnInit(): void {
    
    this.players = this.playerService.getPlayers();
    console.log(this.players)
  }
  selectedPlayer?: any;
  onSelect(player:any): void {
    this.selectedPlayer = player;
  }
  // sortData(sort: Sort) {
  //   const data = this.players.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.sortedData = data;
  //     return;
  //   }

  //   this.sortedData = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'name': return compare(a.first_name, b.first_name, isAsc);
  //       case 'calories': return compare(a.calories, b.calories, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }
}

// function compare(a: number | string, b: number | string, isAsc: boolean) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
