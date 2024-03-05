import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://ludoserver.ct8.pl/'; // Zmień na rzeczywisty adres API
  constructor(private http: HttpClient) {}
  fetchData(nick: string, sid?: string) {
    const data = sid ? { nick, sid } : { nick };
    return this.http.post(this.apiUrl, JSON.stringify(data));
  }
  checkIfSessionExists(sid: string) {
    if (sid !== '') {
      const data = { sid };
      return this.http.post(this.apiUrl, JSON.stringify(data));
    } else {
      return this.http.post(this.apiUrl, JSON.stringify({}));
    }
  }
  pollData(sid: string) {
    return this.http.post(`${this.apiUrl}getData.php`, JSON.stringify({ sid }));
  }
}
export class CookiesTESTService {
  isConsented = false;

  constructor() {}

  /**
   * delete cookie
   * @param name
   */
  public deleteCookie(name: string) {
    this.setCookie(name, '', -1);
  }

  /**
   * get cookie
   * @param {string} name
   * @returns {string}
   */
  public getCookie(name: string) {
    const ca: Array<string> = decodeURIComponent(document.cookie).split(';');
    const caLen: number = ca.length;
    const cookieName = `${name}=`;
    let c: string;

    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) === 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  /**
   * set cookie
   * @param {string} name
   * @param {string} value
   * @param {number} expireMin
   * @param {string} path
   */
  public setCookie(
    name: string,
    value: string,
    expireMin: number,
    path: string = ''
  ) {
    const d: Date = new Date();
    d.setTime(d.getTime() + expireMin * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    const cpath = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}; SameSite=Lax`;
  }

  /**
   * consent
   * @param {boolean} isConsent
   * @param e
   * @param {string} COOKIE
   * @param {string} EXPIRE_DAYS
   * @returns {boolean}
   */
  public consent(
    isConsent: boolean,
    e: any,
    COOKIE: string,
    EXPIRE_MIN: number
  ) {
    if (!isConsent) {
      return this.isConsented;
    } else if (isConsent) {
      this.setCookie(COOKIE, '1', EXPIRE_MIN);
      this.isConsented = true;
      e.preventDefault();
    }
    return;
  }
}
