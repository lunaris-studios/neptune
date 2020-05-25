import * as Polished from "polished";

enum Base {
	PRIMARY = "#4A006F",
	SECONDARY = "#F95738",
	DANGER = "#F95738",
	ALERT = "#F95738",
	SUCCESS = "#F95738",
	BLACK = "#10161A",
	WHITE = "#FFFFFF",
}

enum Drop {
	BASE = 0,
	ONE = 0.2,
	TWO = 0.4,
	THREE = 0.6,
	FOUR = 0.8,
}

export const Color = Object.freeze({
	PRIMARY_1: Polished.transparentize(Drop.BASE, Base.PRIMARY),
	PRIMARY_2: Polished.transparentize(Drop.ONE, Base.PRIMARY),
	PRIMARY_3: Polished.transparentize(Drop.TWO, Base.PRIMARY),
	PRIMARY_4: Polished.transparentize(Drop.THREE, Base.PRIMARY),
	PRIMARY_5: Polished.transparentize(Drop.FOUR, Base.PRIMARY),

	SECONDARY_1: Polished.transparentize(Drop.BASE, Base.SECONDARY),
	SECONDARY_2: Polished.transparentize(Drop.ONE, Base.SECONDARY),
	SECONDARY_3: Polished.transparentize(Drop.TWO, Base.SECONDARY),
	SECONDARY_4: Polished.transparentize(Drop.THREE, Base.SECONDARY),
	SECONDARY_5: Polished.transparentize(Drop.FOUR, Base.SECONDARY),

	DANGER_1: Polished.transparentize(Drop.BASE, Base.DANGER),
	DANGER_2: Polished.transparentize(Drop.ONE, Base.DANGER),
	DANGER_3: Polished.transparentize(Drop.TWO, Base.DANGER),
	DANGER_4: Polished.transparentize(Drop.THREE, Base.DANGER),
	DANGER_5: Polished.transparentize(Drop.FOUR, Base.DANGER),

	ALERT_1: Polished.transparentize(Drop.BASE, Base.ALERT),
	ALERT_2: Polished.transparentize(Drop.ONE, Base.ALERT),
	ALERT_3: Polished.transparentize(Drop.TWO, Base.ALERT),
	ALERT_4: Polished.transparentize(Drop.THREE, Base.ALERT),
	ALERT_5: Polished.transparentize(Drop.FOUR, Base.ALERT),

	SUCCESS_1: Polished.transparentize(Drop.BASE, Base.SUCCESS),
	SUCCESS_2: Polished.transparentize(Drop.ONE, Base.SUCCESS),
	SUCCESS_3: Polished.transparentize(Drop.TWO, Base.SUCCESS),
	SUCCESS_4: Polished.transparentize(Drop.THREE, Base.SUCCESS),
	SUCCESS_5: Polished.transparentize(Drop.FOUR, Base.SUCCESS),

	BLACK_1: Polished.transparentize(Drop.BASE, Base.BLACK),
	BLACK_2: Polished.transparentize(Drop.ONE, Base.BLACK),
	BLACK_3: Polished.transparentize(Drop.TWO, Base.BLACK),
	BLACK_4: Polished.transparentize(Drop.THREE, Base.BLACK),
	BLACK_5: Polished.transparentize(Drop.FOUR, Base.BLACK),

	WHITE_1: Polished.transparentize(Drop.BASE, Base.WHITE),
	WHITE_2: Polished.transparentize(Drop.ONE, Base.WHITE),
	WHITE_3: Polished.transparentize(Drop.TWO, Base.WHITE),
	WHITE_4: Polished.transparentize(Drop.THREE, Base.WHITE),
	WHITE_5: Polished.transparentize(Drop.FOUR, Base.WHITE),

	TRANSPARENT: Polished.transparentize(1, Base.BLACK),
});
