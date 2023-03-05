import Item from "./Item";
import { ItemComparator } from "./ItemComparator";

export default class Inventory implements ItemComparator{
    private items: Item[] = [];

    constructor() {}

    addItem(item: Item): void {
        this.items.push(item);
    }
    sort()
    sort(comparator: ItemComparator)
    sort(comparator?: ItemComparator): void {
        if (comparator) {
            this.items.sort(comparator.compare);
        } else {
            this.items.sort(this.compare);
        }
    }

    toString(): string {
        return this.items.map(item => item.toString()).join(', ');
    }

    compare(first: Item, second: Item): number {
        return first.value - second.value;
    }
}