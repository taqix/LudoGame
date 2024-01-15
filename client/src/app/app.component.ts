import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.fetchData();
  }
  constructor(private dataService: DataService) {}
  data: any;
  error: string = '';
  title = 'client';
  // private apiUrl = 'http://localhost/chinczyk/server/server.php'; // Zmień na rzeczywisty adres API

  fetchData() {
    this.dataService.fetchData()
      .then((data) => {
        this.data = data;
      })
      .catch((error) => {
        this.error = error.message || 'An error occurred';
      });
  }
}
