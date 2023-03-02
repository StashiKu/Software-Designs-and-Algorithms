import Weapon from "./Weapon";

export default class Bow extends Weapon {
    public name: string = 'bow';

    public constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(undefined, baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        const updatedDurabilityModifier = this.durabilityModifier + Weapon.MODIFIER_CHANGE_RATE;

        if (this.getEffectiveDurability(updatedDurabilityModifier) <= 1) {
            this.durabilityModifier = updatedDurabilityModifier;
        }
    }   
}