Hooks.on("renderChatMessage", (app, html, data) => {
	// Collapse NPC power cards by default (because they almost never have flavour entries)
	html.find(".power-card.NPC.autogen .card-content").hide();
});