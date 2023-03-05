import Consumable from "./Consumable";

export default class Pizza extends Consumable {
    public readonly numberOfSlices: number;
    private numberOfEatenSlices: number = 0;

    public constructor(value: number, weight: number, numberOfSlices: number, isSpoiled?: boolean) {
        super('pizza', value, weight, isSpoiled);
        this.numberOfSlices = numberOfSlices;
    }

    public getNumberOfEatenSlices(): number {
        return this.numberOfEatenSlices;
    }

    public use(): string {
        if (this.numberOfSlices === 0) {
            return "There's nothing left of the pizza to consume.";
        }

        if (this.numberOfSlices === this.numberOfEatenSlices) {
            return "There's nothing left of the pizza to consume.";
        }

        this.numberOfEatenSlices += 1;

        return "You consumed a slice of the pizza.";
    }
}