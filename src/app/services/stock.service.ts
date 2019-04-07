import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stocks } from '../interfaces/stocks';

// Return Observable of mock data
import { Observable, of } from 'rxjs';

// Mock data for use with service
import { STOCKS } from '../mock-stocks';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  // // URL FOR DATA
  // private stocksUrl = '';

  constructor(private http: HttpClient) { }

  getStocks(): Observable<Stocks[]> {
    return of(STOCKS);
  }
}
