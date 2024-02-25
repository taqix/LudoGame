import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { DataService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
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
  error: string = '';
  title = 'client';
  // private apiUrl = 'http://localhost/chinczyk/server/server.php'; // Zmień na rzeczywisty adres API

  fetchData() {
    this.dataService
      .fetchData(this.nick, Cookie.get('sid') ? Cookie.get('sid') : '')
      .then((data) => {
        this.data = data;
        Cookie.set('sid', this.data.id, 0.5);

        console.log(Cookie.get('sid'), Cookie.get('PHPSESSID'));
      })
      .catch((error) => {
        this.error = error.message || 'An error occurred';
      });
  }
  setNick(event: Event) {
    this.nick = (event.target as HTMLInputElement).value;
  }
  startGame() {
    this.fetchData();
  }
}
