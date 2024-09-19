export class Fox4eJournalSheetPlayer extends JournalSheet{
	static get defaultOptions(){
        const options = super.defaultOptions;
        options.classes.push('player-book', 'fox4e');
        return options;
	}
}

export class Fox4eJournalSheetGM extends JournalSheet{
	static get defaultOptions(){
        const options = super.defaultOptions;
        options.classes.push('gm-book', 'fox4e');
        return options;
	}
}

export class Fox4eJournalSheetMonster extends JournalSheet{
	static get defaultOptions(){
        const options = super.defaultOptions;
        options.classes.push('monster-book', 'fox4e');
        return options;
	}
}

Hooks.once( "init", function() {
	Journal.registerSheet('dnd4e', Fox4eJournalSheetGM, {label: game.i18n.localize('Fox4e.defs.sheet.JournalGM')});
	Journal.registerSheet('dnd4e', Fox4eJournalSheetPlayer, {label: game.i18n.localize('Fox4e.defs.sheet.JournalPlayer')});
	Journal.registerSheet('dnd4e', Fox4eJournalSheetMonster, {label: game.i18n.localize('Fox4e.defs.sheet.JournalMonster')});
});