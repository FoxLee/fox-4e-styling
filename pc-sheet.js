import ActorSheet4e from "../../systems/dnd4e/module/actor/actor-sheet.js";

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export default class Fox4eSheet extends ActorSheet4e{

	get template(){
		return "modules/fox-4e-styling/templates/actor-sheet.html";
	}

	static get defaultOptions(){
		return mergeObject(super.defaultOptions, {
			classes: ["sheet", "actor", "pc", "fox4e"],
		});
	}

}

Hooks.once( "init", function() {
	Actors.registerSheet("dnd4e", Fox4eSheet, {
		types: ["Player Character"],
		label: game.i18n.localize('Fox4e.defs.sheet.PC')
	});
});