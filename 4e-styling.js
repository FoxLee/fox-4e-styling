import {registerConfigs} from "./config.js";

export default class Fox4eStyles{
	static ID = 'fox-4e-styling';
	static NAME = '4e-styles';

	static SETTINGS = {
		JOURNAL_STYLES: 'style-journal',
		CHAT_STYLES: 'style-chat',
		TAH_STYLES: 'style-tah',
		JOURNAL_FONT: 'journal-font',
		CHAT_EX_STYLES: 'style-chat-ex'
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
		
		if (game.settings.get(Fox4eStyles.ID,Fox4eStyles.SETTINGS.CHAT_EX_STYLES)){
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = './modules/fox-4e-styling/styles/chat-ex.css';
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
	if(!message.isRoll){
		if(message.content){
			if(!message.content.startsWith("<div")){
				html.prepend('<span class="speechmaker" style="display:none !important;">');
			}
		}
	}
});
