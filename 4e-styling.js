import {registerConfigs} from "./config.js";

export default class Fox4eStyles{
	static ID = 'fox-4e-styling';
	static NAME = '4e-styles';

	static SETTINGS = {
		JOURNAL_STYLES: 'style-journal',
		CHAT_STYLES: 'style-chat',
		TAH_STYLES: 'style-tah',
		VAE_STYLES: 'style-vae',
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
	if(game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.CHAT_OLD)){
		html[0].classList.remove('dnd4eBeta');
		html[0].classList.add('dnd4e');
		//html[0].innerHTML = html[0].innerHTML.replace('dnd4eBeta','dnd4e');
	}
	if(html){
		const newHTML = html[0].innerHTML.replace(/<span class=\"tooltip-add\" data-tooltip=\"([^"]*)\"><a class=\"inline-roll inline-result\" data-tooltip=\"([^"]*)\"/g,'<span class="tooltip-add" data-tooltip="$1 ($2)"><a class="inline-roll inline-result" data-tooltip="$1 ($2)"');
		html[0].innerHTML = newHTML;
	}
});
