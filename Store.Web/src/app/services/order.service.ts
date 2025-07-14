import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'https://localhost:5001/api/cart';

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pizzas`);
  }
  
  addPizza(pizza: any): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/add`, pizza);
  }

  removePizza(index: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/pizzas/${index}`);
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/clear`);
  }
}
