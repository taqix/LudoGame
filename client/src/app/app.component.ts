import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { DataService } from './app.service';
import { LudoBoardComponent } from './ludo-board/ludo-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LudoBoardComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // ngOnInit(): void {
  //   this.fetchData();
  // }
  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {}
  nick: string = '';
  data: any;
  showBoard: boolean = false;
  error: string = '';
  title = 'client';

  // private apiUrl = 'http://localhost/chinczyk/server/server.php'; // Zmień na rzeczywisty adres API

  fetchData() {
    this.dataService
      .fetchData(this.nick, Cookie.get('sid') ? Cookie.get('sid') : '')
      .subscribe((response) => {
        this.data = response;
        Cookie.set('sid', this.data.id);
        this.showBoard = true;
      });
  }
  setNick(event: Event) {
    this.nick = (event.target as HTMLInputElement).value;
  }
  startGame() {
    this.fetchData();
  }
}
