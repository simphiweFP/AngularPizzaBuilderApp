import { IPizza } from "./IPizza";

export class Pizza implements IPizza {
    private imageUrl: string;

    constructor() {
        this.imageUrl = 'assets/Images/base.png'; // Image for the base pizza
    }

    GetIngredients(): string {
        return "base"; // You can later update this method to return a list of ingredients as well
    }

    GetCost(): number {
        return 50; // Cost for the base pizza
    }

    GetImageUrl(): string {
        return this.imageUrl; // Method to get the image URL for the pizza
    }
}
