import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { DataService } from './app.service';
import { LudoBoardComponent } from './ludo-board/ludo-board.component';
import { gameData, StatusChangeI } from './types';

import { PlayerComponent } from './player/player.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LudoBoardComponent,
    HttpClientModule,
    PlayerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  async ngOnInit() {
    this.dataService
      .checkIfSessionExists(Cookie.get('sid') ? Cookie.get('sid') : '')
      .subscribe((response: any) => {
        this.gameStatus = response;
        if (this.gameStatus.actual) {
          this.data = response.game.game;

          this.nick = this.gameStatus.nick;
          Cookie.set('nick', this.nick, 0.06);
          Cookie.set('sid', this.gameStatus.id, 0.06);
          Cookie.set('color', this.gameStatus.color, 0.06);
          this.showBoard = true;
          this.pollData();
        } else {
          this.showBoard = false;
        }
      });
  }
  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {}
  gameStatus: any;
  nick: string = '';
  data!: gameData;
  showBoard: boolean = false;
  error: string = '';
  title = 'client';

  // private apiUrl = 'http://localhost/chinczyk/server/server.php'; // Zmień na rzeczywisty adres API

  fetchData() {
    this.dataService
      .fetchData(this.nick, Cookie.get('sid') ? Cookie.get('sid') : '')
      .subscribe((response: any) => {
        this.gameStatus = response;
        this.data = response.game.game;
        Cookie.set('nick', this.nick, 0.06);
        Cookie.set('sid', this.gameStatus.id, 0.06);
        Cookie.set('color', this.gameStatus.color, 0.06);
        this.showBoard = true;
        this.pollData();
      });
  }
  async pollData() {
    setInterval(() => {
      this.dataService
        .pollData(Cookie.get('sid'))
        .subscribe((response: any) => {
          this.data = response.game.game;
          console.log(this.data);
        });
    }, 10000);
  }
  setNick(event: Event) {
    this.nick = (event.target as HTMLInputElement).value;
  }
  startGame() {
    this.fetchData();
  }
  changeStatus(status: string) {
    console.log(status);
    const statusObj = { sid: Cookie.get('sid'), status: status };
    this.dataService.setStatus(statusObj).subscribe((response: any) => {
      this.data = response.game.game;
    });
  }
}
