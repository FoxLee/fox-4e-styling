import {registerConfigs} from "./config.js";

export default class Fox4eStyles{
	static ID = 'fox-4e-styling';
	static NAME = '4e-styles';

	static SETTINGS = {
		JOURNAL_STYLES: 'style-journal',
		CHAT_STYLES: 'style-chat',
		TAH_STYLES: 'style-tah',
		JOURNAL_FONT: 'journal-font',
		GLOBAL_STYLES: 'style-global',
		CHAT_EX_STYLES: 'style-chat-ex',
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
			//Append link element to HTML head
			head.appendChild(link);
		
			document.querySelector(':root').style.setProperty('--font-journal-body', game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.JOURNAL_FONT));
		}
		
		if (game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.CHAT_STYLES)){
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = './modules/fox-4e-styling/styles/chat.css';
			//Append link element to HTML head
			head.appendChild(link);
		}
		
		if (game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.TAH_STYLES)){
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = './modules/fox-4e-styling/styles/tah.css';
			//Append link element to HTML head
			head.appendChild(link);
		}
		
		if (game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.CHAT_STYLES) && game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.CHAT_EX_STYLES)){
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = './modules/fox-4e-styling/styles/chat-ex.css';
			//Append link element to HTML head
			head.appendChild(link);
		}
		
		if (game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.GLOBAL_STYLES)){
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = './modules/fox-4e-styling/styles/global.css';
			//Append link element to HTML head
			head.appendChild(link);
		}
		
		if (game.settings.get("dnd4e","darkMode")){
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = './modules/fox-4e-styling/styles/dark-mode.css';
			//Append link element to HTML head
			head.appendChild(link);
		}
		
	}
}

Hooks.once('init', () => {
	registerConfigs();
	Fox4eStyles.loadCSS();
});

Hooks.on('renderChatMessage', function(message, html, data){
	console.log(message);
	console.log(html);
	console.log(data);
	if(game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.CHAT_EX_STYLES)){
		if(!message.isRoll){
			let newHTML = html[0].innerHTML;
			if( data?.cssClass=="ic" || (!message.speaker?.actor && !message.content.startsWith("<"))){
				html[0].className += ' speech';
			}else if(!message.speaker?.actor){
				html[0].className += ' notice';
			}else if(!message.content.startsWith("<")){
				html[0].className += ' notice char-update';
			}
			html[0].innerHTML = newHTML;
		}
	}
	if(game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.CHAT_OLD)){
		if(html){
			html[0].innerHTML = html[0].innerHTML.replace('dnd4eBeta','dnd4e');
		}
	}
	if(html){
		const newHTML = html[0].innerHTML.replace(/<span class=\"tooltip-add\" data-tooltip=\"([^"]*)\"><a class=\"inline-roll inline-result\" data-tooltip=\"([^"]*)\"/g,'<span class="tooltip-add" data-tooltip="$1 ($2)"><a class="inline-roll inline-result" data-tooltip="$1 ($2)"');
		html[0].innerHTML = newHTML;
	}
});
