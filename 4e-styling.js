import {registerConfigs} from "./config.js";

export default class Fox4eStyles{
	static ID = 'fox-4e-styling';
	static NAME = '4e-styles';

	static SETTINGS = {
		JOURNAL_STYLES: 'style-journal',
		CHAT_STYLES: 'style-chat',
		TAH_STYLES: 'style-tah',
		VAE_STYLES: 'style-vae',
		CCT_STYLES: 'style-cct',
		JOURNAL_FONT: 'journal-font',
		GLOBAL_STYLES: 'style-global',
		CHAT_OLD: 'style-chat-old'
	}

	static loadCSS() {
		// Get HTML head element
		var head = document.getElementsByTagName('HEAD')[0];
		
		if (game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.JOURNAL_STYLES)){
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = './modules/fox-4e-styling/styles/journal.css';
			head.appendChild(link);
		
			document.querySelector(':root').style.setProperty('--font-journal-body', game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.JOURNAL_FONT));
		}
		
		if (game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.CHAT_STYLES)){
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = './modules/fox-4e-styling/styles/chat.css';
			head.appendChild(link);
		}
		
		if (game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.TAH_STYLES)){
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = './modules/fox-4e-styling/styles/tah.css';
			head.appendChild(link);
		}
		
		if (game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.GLOBAL_STYLES)){
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = './modules/fox-4e-styling/styles/global.css';
			head.appendChild(link);
		}
		
		if (game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.VAE_STYLES)){
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = './modules/fox-4e-styling/styles/vae.css';
			head.appendChild(link);
		}
		
		if (game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.CCT_STYLES)){
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = './modules/fox-4e-styling/styles/cct.css';
			head.appendChild(link);
		}
		
		if (game.settings.get("dnd4e","darkMode")){
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = './modules/fox-4e-styling/styles/sheets-dark.css';
			head.appendChild(link);
		
			if (game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.CHAT_STYLES)){
				var link = document.createElement('link');
				link.rel = 'stylesheet';
				link.type = 'text/css';
				link.href = './modules/fox-4e-styling/styles/chat-dark.css';
				head.appendChild(link);
			}
			
			if (game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.JOURNAL_STYLES)){
				var link = document.createElement('link');
				link.rel = 'stylesheet';
				link.type = 'text/css';
				link.href = './modules/fox-4e-styling/styles/journal-dark.css';
				head.appendChild(link);
			}
		}
		
	}
}

Hooks.once('init', () => {
	registerConfigs();
	Fox4eStyles.loadCSS();
});

Hooks.on('renderSettingsConfig', () => {
	var target = document.querySelector(`[data-setting-id="fox-4e-styling\.style-journal"]`);
	var theString = `<p class="notes"><strong>${game.i18n.localize("Fox4e.settings.style-chat-ex.Moved")}</strong> ${game.i18n.localize("Fox4e.settings.style-chat-ex.MovedDetail")}</p>`;
	
	var extraInfo = document.createElement('div');
	extraInfo.className = 'notification';
	extraInfo.style.cssText = 'background:unset;text-shadow:unset;';
	extraInfo.innerHTML = theString;
	target.before(extraInfo);
});

Hooks.on('renderChatMessage', function(message, html, data){
	if(!html[0].classList.contains('fox')){
		html[0].classList.add('fox');			
		if(game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.CHAT_OLD)){
			html[0].classList.remove('dnd4eBeta');
			html[0].classList.add('dnd4e');
		}
		if(html){
			const newHTML = html[0].innerHTML.replace(/<span class=\"tooltip-add\" data-tooltip=\"([^"]*)\"><a class=\"inline-roll inline-result\" data-tooltip=\"([^"]*)\"/g,'<span class="tooltip-add" data-tooltip="$1 ($2)"><a class="inline-roll inline-result" data-tooltip="$1 ($2)"');
			if(newHTML != html[0].innerHTML){
				html[0].innerHTML = newHTML;
			}
		}
	}
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
	
			if(powerData.uses.per){
				snippet += `<span class="interval">${game.dnd4e.config.limitedUsePeriods[powerData.uses.per].label}</span>`;
			}
			
			snippet += `</span>`;
			return snippet;
		}
		
		return "<!-- Could not interpret usage settings for this power -->";
		
	} catch(err) {
		console.err("Usage helper spat up. Please check input data.");
		return;
	}
});