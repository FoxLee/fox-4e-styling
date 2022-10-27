import ActorSheet4eNPC from "../../systems/dnd4e/module/actor/npc-sheet.js";

export default class Fox4eNPCSheet extends ActorSheet4eNPC{
	get template(){		
		return "modules/fox-4e-styling/templates/npc-sheet.html";
	}

	static get defaultOptions(){
		return mergeObject(super.defaultOptions, {
			classes: ["dnd4e", "sheet", "actor", "npc", "fox4e"],
		});
	}
	
   static unsupportedItemTypes = new Set('ritual');
		
	_generatePowerGroups() {
		const actorData = this.object.system;
		
		return {
			standard: { 
				name: "standard-actions",
				label: "Fox4e.GroupStandard", 
				items: [], 
				dataset: {
					type: "standard"
				} 
			},
			move: {
				name: "move-actions",
				label: "Fox4e.GroupMove", 
				items: [], 
				dataset: {
					type: "move"
				} 
			},
			minor: {
				name: "minor-actions",
				label: "Fox4e.GroupMinor", 
				items: [], 
				dataset: {
					type: "minor"
				} 
			},
			triggered: { 
				name: "triggered-actions",
				label: "Fox4e.GroupTriggered", 
				items: [], 
				dataset: {
					type: "triggered"
				} 
			},
			other: { 
				name: "other-actions",
				label: "Fox4e.GroupOther", 
				items: [], 
				dataset: {
					type: "other"
				} 
			}
		};

	}
	
	_groupPowers(power, powerGroups) {
		if(power.system.trigger){
			return "triggered";
		}
		else if(Object.keys(powerGroups).includes(power.system.actionType)){
			return power.system.actionType;
		}	
		return "other";
	}
	
}

Actors.registerSheet("dnd4eBeta", Fox4eNPCSheet, {
	types: ["NPC"],
	label: "Core book style"
});

/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const Fox_LoadHandlebarTemplates = async function() {
	
	// Define template paths to load
	const templatePaths = [	
	"modules/fox-4e-styling/templates/parts/npc-traits.html",
	"modules/fox-4e-styling/templates/parts/npc-powers.html",
	"modules/fox-4e-styling/templates/parts/npc-effects.html",
	];

  // Load the template parts
  return loadTemplates(templatePaths);
};

Hooks.once( "init", function() {
  Fox_LoadHandlebarTemplates();
});