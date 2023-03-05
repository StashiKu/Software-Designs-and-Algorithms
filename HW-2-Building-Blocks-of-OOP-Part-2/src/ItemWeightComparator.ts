import Item from "./Item";
import { ItemComparator } from "./ItemComparator";

export default class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        if (first.weight > second.weight) {
            return 1;
        } else if (first.weight < second.weight) {
            return -1;
        } else {
            return first.compareTo(second);
        }
    }
}