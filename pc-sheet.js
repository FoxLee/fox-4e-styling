import ActorSheet4e from "../../systems/dnd4e/module/actor/actor-sheet.js";

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export default class Fox4eSheet extends ActorSheet4e{

	get template(){
		// adding the #equals and #unequals handlebars helper
		/*Handlebars.registerHelper('equals', function (arg1, arg2, options) {
			return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
		});

		Handlebars.registerHelper('unequals', function (arg1, arg2, options){
			return (arg1 != arg2) ? options.fn(this) : options.inverse(this);
		});*/

		return "modules/fox-4e-styling/templates/actor-sheet.html";
	}

	static get defaultOptions(){
		return mergeObject(super.defaultOptions, {
			classes: ["sheet", "actor", "pc", "fox4e"],
		});
	}

}

Actors.registerSheet("dnd4e", Fox4eSheet, {
	types: ["Player Character"],
	label: "(NOT READY YET) Core book inspired"
});