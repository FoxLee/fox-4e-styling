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

/* "powerUse" Handlebars Helper: outputs usage HTML snippet
*
*  Should contain only the usage type (encounter/daily/etc) if
*    [available uses] or [max uses] = null, [max uses] = 0,
*    [uses per] = [null] or [""].
*  For recharge powers, should contain rollable recharge info in
*    the form of [Recharge x].
*  For uses-per-interval powers, should contain uses info in the
*    form of [x of y/interval].
*
*	@param {Object} powerData The "system" object of the power
*	@returns {string} html to be printed.
*
/*											*/
Handlebars.registerHelper('powerUse', function(powerData) {
	let snippet = game.dnd4e.config.powerUseType[powerData.useType];
	
	let useNormalised = powerData.uses.per||"";
	if(useNormalised == "enc"){
		useNormalised = "encounter";
	}else if(useNormalised == "day"){
		useNormalised = "daily";
	}
	
	try{
		
		// If there is no limited use interval selected, or data is conflicting, just return the usage type label.
		if(!powerData.uses.per || ( ["day","enc"].includes(powerData.uses.per) && powerData.preparedMaxUses == 1 && useNormalised == powerData.useType ) ){
			return `<span class="limited ${powerData.uses.per}">${snippet}</span>`;
		}
		
		// If it's a recharge power, generate HTML with rollable recharge info
		if(powerData.useType == "recharge"){
			snippet = `<span class="recharge">`;
			if(powerData.rechargeRoll){
				snippet += `<a class="item-recharge rollable numerical" data-tooltip="${game.i18n.localize( 'Fox4e.TipRechargeRoll')} ${powerData.rechargeRoll} ${game.i18n.localize('Fox4e.OrHigher')}"> ${game.i18n.localize('DND4E.PowerRecharge')} <span class="dice d6">${powerData.rechargeRoll}</span></a>`;
			}else if(powerData.rechargeCondition){
				snippet += `<a class="item-recharge rollable" data-tooltip="${game.i18n.localize('Fox4e.TipRecharge')} ${powerData.rechargeCondition}">${game.i18n.localize('DND4E.PowerRecharge')} ${powerData.rechargeCondition}</a>`;
			}
			snippet += `</span>`;
			return snippet;
		}
		
		if(powerData.preparedMaxUses != 0){
			snippet = `<span class="limited ${powerData.uses.per} uses-${powerData.preparedMaxUses}">`;
			
			snippet += `<span class="limit"><label class="uses autosize" for="powerData.uses.value"><input class="number" type="text" value="${powerData.uses.value}" name="powerData.uses.value" placeholder="0" /><span class="ruler">${powerData.uses.value}</span></label> of ${powerData.preparedMaxUses}</span><span class="sep">/</span>`;
	
			if(powerData.uses.per && powerData.uses.per != "none"){
				snippet += `<span class="interval">${game.dnd4e.config.limitedUsePeriods[powerData.uses.per]?.label}</span>`;
			}
			
			snippet += `</span>`;
			return snippet;
		}
		
		return "<!-- Could not interpret usage settings for this power -->";
		
	} catch(err) {
		console.error("Usage helper spat up. Please check input data.");
		return "<!-- Could not interpret usage settings for this power -->";
	}
});

/* "wepHand" Handlebars Helper: interprets weapon held status
*
*  Returns label based on equip state + weapon hand state
*
*	@param {Object} item The "system" object of the power
*	@returns {string} term to be printed.
*
/*											*/
Handlebars.registerHelper('wepHand', function(item) {
	if(item.toggleClass != 'active') return '';
	if(!item.system.weaponHand){
		console.error("No slot specified for this item. Please check item settings.");
		return '';
	}
	try{		
		switch(item.system.weaponHand){
			case 'hMain':
				return game.i18n.localize('Fox4e.HandMain');
			case 'hOff':
				return game.i18n.localize('Fox4e.HandOff');
			case 'hTwo':
				return game.i18n.localize('Fox4e.HandBoth');
			case 'hNone':
				return game.i18n.localize('Fox4e.HandNone');
			default:
				return '';
		}		
		console.warning("Could not interpret slot for this item. Please check input data.");
		return '';
		
	} catch(err) {
		console.error("Weapon hand helper spat up. Please check input data.");
		return '';
	}
});