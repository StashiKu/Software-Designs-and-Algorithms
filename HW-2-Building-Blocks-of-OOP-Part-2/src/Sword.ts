import Weapon from "./Weapon";

export default class Sword extends Weapon {
    public name: string = 'sword';

    public constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(undefined, baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
        const maxEffectiveDamage = this.baseDamage * 0.25 + this.baseDamage;

        if (this.getEffectiveDamage() > maxEffectiveDamage) {
            this.damageModifier = (maxEffectiveDamage - this.baseDamage);
        }
    }   
}