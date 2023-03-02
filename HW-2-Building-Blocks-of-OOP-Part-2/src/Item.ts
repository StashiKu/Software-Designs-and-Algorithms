import { Comparable } from "./Comparable";

export default abstract class Item implements Comparable<Item> {
    public value: number;
    public weight: number;

    public readonly name: string;
    private readonly id: number;

    static idCounter = 0

    public constructor(name: string, value: number, weight: number) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        this.id = ++Item.idCounter;
    }

    public static resetIdCounter(): void {
        Item.idCounter = 0;
    };

    abstract use(): void;

    public compareTo(other: Item): number {
        if (this.value > other.value) {
            return 1;
        } else if (this.value < other.value) {
            return -1;
        }

        return this.name.toLowerCase().localeCompare(other.name.toLowerCase());
    };

    private formatNumber(num: number): string {
        return num.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 2});
    }

    public toString(): string {
        return `${this.name} − Value: ${this.formatNumber(this.value)}, Weight: ${this.formatNumber(this.weight)}`;
    };

    public getId(): number {
        return this.id;
    };
}
