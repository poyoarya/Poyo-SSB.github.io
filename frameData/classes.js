function Hitbox(damage, angle, fixedKnockback, baseKnockback, knockbackScaling, radius, bone, boneOffset, transcendent, canRebound, specialEffect, willHit, sound) {
	this.damage = damage;
	this.angle = angle;
	this.fixedKnockback = fixedKnockback;
	this.baseKnockback = baseKnockback;
	this.knockbackScaling = knockbackScaling;
	this.radius = radius;
	this.bone = bone;
	this.boneOffset = boneOffset;
	this.transcendent = transcendent;
	this.canRebound = canRebound;
	this.specialEffect = specialEffect;
	this.willHit = willHit;
	this.sound = sound;
	
	this.hasPriorityOver = function(hitbox) {
		if (hitbox.transcendent) {
			return false;
		} else {
			if (this.transcendent) {
				return true;
			} else if (this.damage - hitbox.damage > 9) {
				return true;
			} else {
				return false;
			}
		}
	}
}

function Move() {
	//
}