function Hitbox(damage, angle, baseKnockback, knockbackGrowth, fixedKnockback, effect, willHitGrounded, willHitAerial, shieldDamage, willClang, soundEffect, reflectable, absorbable, blockable, willRebound, sound) {
	this.damage = damage;
	this.angle = angle;
	this.baseKnockback = baseKnockback;
	this.knockbackGrowth = knockbackGrowth;
	this.fixedKnockback = fixedKnockback;
	this.effect = effect;
	this.willHitGrounded = willHitGrounded;
	this.willHitAerial = willHitAerial;
	this.shieldDamage = shieldDamage;
	this.willClang = willClang;
	this.soundEffect = soundEffect;
	this.reflectable = reflectable;
	this.absorbable = absorbable;
	this.blockable = blockable;
	this.willRebound = willRebound;
	this.sound = sound;
	
	this.hasPriorityOver = function(hitbox) {
		if (hitbox.willClang = false) {
			return false;
		} else {
			if (this.willClang) {
				return true;
			} else if (this.damage - hitbox.damage > 9) {
				return true;
			} else {
				return false;
			}
		}
	}
}