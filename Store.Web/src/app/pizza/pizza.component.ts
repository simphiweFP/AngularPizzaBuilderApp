import { Component, OnInit } from '@angular/core';  
import { IPizza } from '../models/IPizza';
import { Pizza } from '../models/Pizza';
import { CheeseDecorator } from '../models/Cheese.decorator';
import { SalamiDecorator } from '../models/Salami.decorator';
import { ChangeDetectorRef } from '@angular/core'; // Import ChangeDetectorRef
import { TomatoDecorator } from '../models/TomatoDecorator';

interface CompletedOrder {
  pizza: IPizza;
  totalCost: number;
}

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],

})
export class PizzaComponent implements OnInit {
  currentPizza: IPizza | null = null;
  completedOrders: CompletedOrder[] = []; // Store completed orders
  cart: IPizza[] = []; // Define the cart property

  constructor(private cdr: ChangeDetectorRef) {} // Inject ChangeDetectorRef

  ngOnInit(): void {}

  startPizza() {
    this.currentPizza = new Pizza(); // Create a new Pizza instance
    this.cart.push(this.currentPizza); 
      setTimeout(() => {
        this.cdr.detectChanges(); 
    }, 0);
  }

  decorateCheese() {
    if (!this.currentPizza) return;

    // Create a new pizza instance with cheese decoration
    const newPizza = new CheeseDecorator(this.currentPizza);

    // Assign the new instance to currentPizza
    this.currentPizza = newPizza;

    // Use setTimeout to ensure change detection picks up the change
    setTimeout(() => {
        this.cdr.detectChanges(); 
    }, 0);
}


  decorateTomato() {
    if (!this.currentPizza) return;
    this.currentPizza = new TomatoDecorator(this.currentPizza);
    setTimeout(() => {
      this.cdr.detectChanges(); // Update view after checkout
  }, 0);
  }

  decorateSalami() {
    if (!this.currentPizza) return;
    this.currentPizza = new SalamiDecorator(this.currentPizza);
    setTimeout(() => {
      this.cdr.detectChanges(); // Update view after checkout
  }, 0);
  }

  completeOrder() {
    if (this.currentPizza) {
        const totalCost = this.currentPizza.GetCost();
        this.completedOrders.push({ pizza: this.currentPizza, totalCost });
        this.clearCart();
        setTimeout(() => {
          this.cdr.detectChanges();  // Update view after checkout
      }, 0); 
    }
}


  clearCart() {
    this.currentPizza = null;
    this.cart = []; 
  }


  removeCurrentPizza() {
    if (this.currentPizza) { 
      const index = this.cart.indexOf(this.currentPizza);
      if (index > -1) {
        this.cart.splice(index, 1); // Remove the current pizza from the cart
      }
      this.cdr.detectChanges(); 
    } else {
      console.warn('No current pizza to remove');
    }
  }
  
  
  getTotalCost(): number {
    return this.completedOrders.reduce((total, order) => total + order.totalCost, 0);
  }

  checkout() {
    alert('Order placed successfully!');
    this.completedOrders = [];
    this.cart = []; // Clear the cart on checkout
    setTimeout(() => {
      this.cdr.detectChanges(); // Update view after checkout
  }, 0); 
  }
}
