import Item from "./Item";

export default abstract class Weapon extends Item {
    public static MODIFIER_CHANGE_RATE: number = 0.05;

    protected baseDamage: number;
    protected damageModifier: number = 0;
    private baseDurability: number;
    protected durabilityModifier: number = 0;
    private effectiveDurability: number;

    public constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);

        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
        this.effectiveDurability = this.getEffectiveDurability();
    }

    public use(): string {
        let resStr = `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.`;
        let updatedDurabilityModifier = this.durabilityModifier - Weapon.MODIFIER_CHANGE_RATE;
        
        if (this.effectiveDurability <= 0) return `You can't use the ${this.name}, it is broken.`;
        
        this.durabilityModifier = updatedDurabilityModifier;
        this.effectiveDurability = this.getEffectiveDurability();

        if (this.effectiveDurability <= 0) {
            return resStr + '\n' + `The ${this.name} breaks.`;
        }

        return resStr;
    };

    private roundNumber(num) {
        return parseFloat(num).toFixed(2);
    }

    public abstract polish(): void;

    public toString(): string {
        return `${this.name} − Value: ${this.roundNumber(this.value)}, Weight: ${this.roundNumber(this.weight)}, Damage: ${this.roundNumber(this.getEffectiveDamage())}, Durability: ${this.roundNumber(this.getEffectiveDurability() * 100)}%`;
    };

    public getEffectiveDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    public getEffectiveDurability(durabilityModifier?: number): number {
        return this.baseDurability + (durabilityModifier ?? this.durabilityModifier);
    }
}