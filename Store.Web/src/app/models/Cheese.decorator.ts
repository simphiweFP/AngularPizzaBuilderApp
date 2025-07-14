import { IPizza } from "./IPizza";
import { PizzaDecorator } from "./Pizza.decorator";

export class CheeseDecorator extends PizzaDecorator {
    private cheeseImageUrl: string;

    constructor(override inputPizza: IPizza) {
        super(inputPizza);
        this.cheeseImageUrl = 'assets/Images/cheese.png'; // URL for the cheese image
    }

    override GetIngredients(): string {
        return super.GetIngredients() + ' cheese';   
    }

    override GetCost(): number {
        return super.GetCost() + 5;
    }
    
    override GetImageUrl(): string {
        return super.GetImageUrl() + ',' + this.cheeseImageUrl; // Concatenate image URLs
    }
}
