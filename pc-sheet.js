import ActorSheet4e from "../../systems/dnd4e/module/actor/actor-sheet.js";

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export default class Fox4eSheet extends ActorSheet4e{

	constructor(...args) {
		super(...args);

		// Add rituals to item filters
		this._filters = {
			inventory: new Set(),
			powers: new Set(),
			features: new Set(),
			rituals: new Set()
		};
	}

	/** @override */
	async getData(options) {
		const coreData = await super.getData();
		let foxData = {};
		let ritualsData = [coreData.features[5]];
		this._sortRituals(ritualsData);
		foxData.rituals = ritualsData;
		foxData.showResources = ( coreData.system.resources.primary?.show || coreData.system.resources.secondary?.show || coreData.system.resources.tertiary?.show ? true : false );
		let combinedData = {...coreData,...foxData};
		return combinedData;
	}

	get template(){
		return "modules/fox-4e-styling/templates/pc-sheet.html";
	}

	static get defaultOptions(){
		return mergeObject(super.defaultOptions, {
			classes: ["sheet", "actor", "pc", "fox4e"],
			width: 760,
			height: 714
		});
	}

	_sortRituals(rituals){
		const sort = this.object.system.ritualSortTypes;
		if(sort === "none" || sort == '') return;
		//console.debug(rituals);
		for(const [keyy, group] of Object.entries(rituals)){
			group.items.sort(this._compareValues(sort));
		}
	}
}

/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const Fox_LoadPCTemplates = async function() {
	// Define template paths to load
	const templatePaths = [
	"modules/fox-4e-styling/templates/parts/pc-vitals.html",
	"modules/fox-4e-styling/templates/parts/pc-basics.html",
	"modules/fox-4e-styling/templates/parts/pc-powers.html",
	"modules/fox-4e-styling/templates/parts/pc-inventory.html",
	"modules/fox-4e-styling/templates/parts/pc-features.html",
	"modules/fox-4e-styling/templates/parts/pc-status.html",
	"modules/fox-4e-styling/templates/parts/pc-rituals.html",
	"modules/fox-4e-styling/templates/parts/pc-fluff.html",
	"modules/fox-4e-styling/templates/parts/pc-effects.html"
	];

  // Load the template parts
  return loadTemplates(templatePaths);
};

Hooks.once( "init", function() {
	Fox_LoadPCTemplates();
	Actors.registerSheet("dnd4e", Fox4eSheet, {
		types: ["Player Character"],
		label: game.i18n.localize('Fox4e.defs.sheet.PC')
	});
});