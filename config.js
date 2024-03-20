import Fox4eStyles from "./4e-styling.js";

export function registerConfigs() {
	game.settings.register(Fox4eStyles.ID, Fox4eStyles.SETTINGS.JOURNAL_STYLES, {
		name: `Fox4e.settings.${Fox4eStyles.SETTINGS.JOURNAL_STYLES}.Name`,
		default: true,
		type: Boolean,
		scope: 'client',
		config: true,
		hint: `Fox4e.settings.${Fox4eStyles.SETTINGS.JOURNAL_STYLES}.Hint`,
		onChange: debouncedReload
	});
	game.settings.register(Fox4eStyles.ID, Fox4eStyles.SETTINGS.JOURNAL_FONT, {
	name: `Fox4e.settings.${Fox4eStyles.SETTINGS.JOURNAL_FONT}.Name`,
		default: "DragonBodySerif",
		type: String,
		scope: 'client',
		config: true,
		choices: {
			"DragonBodySerif": `Fox4e.settings.${Fox4eStyles.SETTINGS.JOURNAL_FONT}.Serif`,
			"DragonBodySans": `Fox4e.settings.${Fox4eStyles.SETTINGS.JOURNAL_FONT}.Sans`
		},
		hint: `Fox4e.settings.${Fox4eStyles.SETTINGS.JOURNAL_FONT}.Hint`,
		onChange: debouncedReload
	});
	game.settings.register(Fox4eStyles.ID, Fox4eStyles.SETTINGS.CHAT_STYLES, {
		name: `Fox4e.settings.${Fox4eStyles.SETTINGS.CHAT_STYLES}.Name`,
		default: true,
		type: Boolean,
		scope: 'client',
		config: true,
		hint: `Fox4e.settings.${Fox4eStyles.SETTINGS.CHAT_STYLES}.Hint`,
		onChange: debouncedReload
	});
	game.settings.register(Fox4eStyles.ID, Fox4eStyles.SETTINGS.TAH_STYLES, {
		name: `Fox4e.settings.${Fox4eStyles.SETTINGS.TAH_STYLES}.Name`,
		default: true,
		type: Boolean,
		scope: 'client',
		config: true,
		hint: `Fox4e.settings.${Fox4eStyles.SETTINGS.TAH_STYLES}.Hint`,
		onChange: debouncedReload
	});
	game.settings.register(Fox4eStyles.ID, Fox4eStyles.SETTINGS.GLOBAL_STYLES, {
		name: `Fox4e.settings.${Fox4eStyles.SETTINGS.GLOBAL_STYLES}.Name`,
		default: true,
		type: Boolean,
		scope: 'client',
		config: true,
		hint: `Fox4e.settings.${Fox4eStyles.SETTINGS.GLOBAL_STYLES}.Hint`,
		onChange: debouncedReload
	});
	game.settings.register(Fox4eStyles.ID, Fox4eStyles.SETTINGS.CHAT_EX_STYLES, {
		name: `Fox4e.settings.${Fox4eStyles.SETTINGS.CHAT_EX_STYLES}.Name`,
		default: true,
		type: Boolean,
		scope: 'client',
		config: true,
		hint: `Fox4e.settings.${Fox4eStyles.SETTINGS.CHAT_EX_STYLES}.Hint`,
		onChange: debouncedReload
	});
	game.settings.register(Fox4eStyles.ID, Fox4eStyles.SETTINGS.CHAT_OLD, {
		name: `Fox4e.settings.${Fox4eStyles.SETTINGS.CHAT_OLD}.Name`,
		default: false,
		type: Boolean,
		scope: 'client',
		config: true,
		hint: `Fox4e.settings.${Fox4eStyles.SETTINGS.CHAT_OLD}.Hint`,
		onChange: debouncedReload
	});
}