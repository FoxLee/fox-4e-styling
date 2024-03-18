Handlebars.registerHelper("laden", function(lunchbox){	
	return Object.keys(lunchbox).length;
});

Handlebars.registerHelper("empty", function(lunchbox){
	return Object.keys(lunchbox).length === 0;
});

Handlebars.registerHelper("form", function(formula, actorData, powerInnerData){
	let value = game.helper.commonReplace(formula,actorData,powerInnerData);
	try{
		value = eval(value);
	}
	catch (e) {
		value = powerInnerData.name + ': Error evaluating formula.'
		console.log(value);
	}
	return value;
});

Handlebars.registerHelper("commfy", function(lunch){
	return lunch.toLocaleString("en-US");
});

Handlebars.registerHelper("stripsq", function(lunch){
	return lunch.replace(' sq', '');
});

Handlebars.registerHelper("hasTraits", function(lunchbox){
	var snacking = false;
	
	Object.entries(lunchbox).forEach(([key, featGroup]) => {
		if(!["ritual", "destinyFeats"].includes(featGroup.dataset.type)){
			if(Object.keys(featGroup.items).length > 0){
				snacking = true;
			}
		}
	});

	return snacking;
});

Handlebars.registerHelper("hasLore", function(lunchbox){
	var snacking = false;
	
	Object.entries(lunchbox).forEach(([key, featGroup]) => {
		if(featGroup.dataset.type == "destinyFeats"){
			if(Object.keys(featGroup.items).length > 0){
				snacking = true;
			}
		}
	});

	return snacking;
});

Handlebars.registerHelper("skillWanted", function(skill,level,addLvHalf,baseline){
	var wanted = false;
	var avgMod = 0;
	if(baseline){
		avgMod += skill.mod;
		if(!addLvHalf){
			avgMod += Math.floor(level/2);
		}
	}
	
	if(skill.base != 0 || Object.keys(skill.bonus[0]).length > 0){
		wanted = true;
	}else if(skill.total > avgMod){
		wanted = true;
	}

	return wanted;
});