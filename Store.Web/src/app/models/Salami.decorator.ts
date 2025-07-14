import { IPizza } from "./IPizza";
import { PizzaDecorator } from "./Pizza.decorator";

export class SalamiDecorator extends PizzaDecorator {
    private salamiImageUrl: string;

    constructor(override inputPizza: IPizza) {
        super(inputPizza);
        this.salamiImageUrl = 'assets/Images/salami.png'; // URL for the salami image
    }

    override GetIngredients(): string {
        return super.GetIngredients() + ' salami';   
    }

    override GetCost(): number {
        return super.GetCost() + 15;
    }

    override GetImageUrl(): string {
        return super.GetImageUrl() + ',' + this.salamiImageUrl; // Concatenate image URLs
    }
}
