import Item from "./Item";

export default abstract class Consumable extends Item {
    public isConsumed: boolean = false;
    private isSpoiled: boolean;
  
    public constructor(name: string, value: number, weight: number, isSpoiled?: boolean) {
        super(name, value, weight);

        this.isSpoiled = isSpoiled ?? false;
    }

    public use(): string {
        let resStr;
        if (this.isConsumed) {
            resStr = "There's nothing left of the bread to consume."
        } else {
            resStr = "You consumed the bread."
        }

        if (this.isSpoiled && !this.isConsumed) resStr += '\n' + 'You feel sick.'

        this.isConsumed = true;

        return resStr;
    };
}