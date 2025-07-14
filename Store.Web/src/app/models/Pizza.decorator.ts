import { IPizza } from "./IPizza";

export abstract class PizzaDecorator implements IPizza {
    protected pizza: IPizza;

    constructor(public inputPizza: IPizza) {
        this.pizza = inputPizza;
    }

    GetIngredients(): string {
        return this.pizza.GetIngredients();
    }

    GetCost(): number {
        return this.pizza.GetCost();
    }

    GetImageUrl(): string {
        return this.pizza.GetImageUrl();
    }

}