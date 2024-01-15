import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost/chinczyk/server/server.php'; // Zmień na rzeczywisty adres API

  fetchData(): Promise<any> {
    return fetch(this.apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  }
}
