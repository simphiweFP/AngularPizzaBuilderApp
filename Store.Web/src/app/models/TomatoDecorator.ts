import { IPizza } from "./IPizza";
import { PizzaDecorator } from "./Pizza.decorator";

export class TomatoDecorator extends PizzaDecorator {
    private tomatoImageUrl: string;

    constructor(override inputPizza: IPizza) {
        super(inputPizza);
        this.tomatoImageUrl = 'assets/Images/Tomato.jpeg'; // URL for the tomato image
    }

    override GetIngredients(): string {
        return super.GetIngredients() + ' tomato';   
    }

    override GetCost(): number {
        return super.GetCost() + 7; 
    }

    override GetImageUrl(): string {
        return super.GetImageUrl() + ',' + this.tomatoImageUrl; // Concatenate image URLs
    }
}
