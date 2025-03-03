import ActorSheet4eNPC from "../../systems/dnd4e/module/actor/npc-sheet.js";

export default class Fox4eNPCSheet extends ActorSheet4eNPC{
	get template(){		
		return "modules/fox-4e-styling/templates/npc-sheet.html";
	}

	static get defaultOptions(){
		return mergeObject(super.defaultOptions, {
			classes: ["sheet", "actor", "npc", "fox4e"],
			width:420,
			height:650
		});
	}
	
   static unsupportedItemTypes = new Set('ritual');
	
	/** @override */
	setPosition(options={}) {
		return super.setPosition(options);
	}
}

/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const Fox_LoadNPCTemplates = async function() {
	// Define template paths to load
	const templatePaths = [
	"modules/fox-4e-styling/templates/parts/npc-traits.html",
	"modules/fox-4e-styling/templates/parts/npc-powers.html",
	"modules/fox-4e-styling/templates/parts/npc-effects.html"
	];

  // Load the template parts
  return loadTemplates(templatePaths);
};

Hooks.once( "init", function() {
	Fox_LoadNPCTemplates();
	Actors.registerSheet("dnd4e", Fox4eNPCSheet, {
		types: ["NPC"],
		label: game.i18n.localize('Fox4e.defs.sheet.NPC')
	});
});