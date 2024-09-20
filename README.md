![](https://img.shields.io/badge/Foundry-v11-informational)
![](https://img.shields.io/badge/Foundry-v10-informational)

# Fox's 4e Aesthetics for Foundry VTT (BETA)
Foundry VTT module for D&amp;D 4e, which attempts to style sheets, journals, item cards and other elements to match the official 4e books as closely as possible.

<a href="https://github.com/user-attachments/assets/27b66dfe-2661-4fe1-b616-a96460b5d0f5"><img src="https://github.com/user-attachments/assets/27b66dfe-2661-4fe1-b616-a96460b5d0f5" height=300></a>
* **Author**: [FoxLee](https://github.com/FoxLee)
* **Contributors**: Built on the work of everybody contributing to the [D&D4e System implementation for Foundry VTT](https://github.com/EndlesNights/dnd4eBeta). French translation provided by [Gilphe](https://github.com/Gilphe)
* **Foundry VTT Compatibility**: v11.x (last FVTT 10.x compatible release is v0.9.47) (no v12 compatibility yet)
* **4e System Compatibility**: v0.4.0—0.4.58 (or v0.3.17—0.4.0 for FVTT 10.x)
* **Languages**: [en-AU](https://github.com/FoxLee/fvtt-locale-en-au), fr, en-US
* **Example Images**: **Assets used in these examples are used for demonstration only and are not included with the module.** Non-core tokens are by [Yuikami](https://yuikami.tumblr.com), battlemaps are by [Cze & Peku](https://www.patreon.com/czepeku), additional character portraits are my own art.

## Features
### Core style NPC sheet
A new NPC sheet based on the official, deliciously compact 4e monster stat blocks we know and love!

<a href="https://user-images.githubusercontent.com/10067730/198204209-5d21178e-aeef-49b8-be31-c0d1efbf8aca.png"><img src="https://user-images.githubusercontent.com/10067730/198204209-5d21178e-aeef-49b8-be31-c0d1efbf8aca.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198204269-a4d36624-5f91-43ae-9244-c6d022bbb26a.png"><img src="https://user-images.githubusercontent.com/10067730/198204269-a4d36624-5f91-43ae-9244-c6d022bbb26a.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198204366-475327c6-fd29-4019-8e9e-f20d8270bfbf.png"><img src="https://user-images.githubusercontent.com/10067730/198204366-475327c6-fd29-4019-8e9e-f20d8270bfbf.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198204382-763aa610-a799-4a8f-b9d2-ce15224e3b74.png"><img src="https://user-images.githubusercontent.com/10067730/198204382-763aa610-a799-4a8f-b9d2-ce15224e3b74.png" width=150></a>
* Specifically based on the MM3 style stat block, with action-based subheadings. (Note that the sheet uses its own power sorting mode, including sending powers with triggers to their own group.)
* Doesn't override the existing NPC sheet, so you can choose it per-monster or set it as the default, as you see fit.
* Retains the functionality of the existing sheet in almost all cases (some items have to be managed on a separate tab).
* Should work near-seamlessly with Draconas' [Foundry 4e Tools](https://github.com/draconas1/foundry-4e-tools)/[Masterplan exporter](https://github.com/draconas1/masterplan-json-export)
* Makes heavy use of "tooltip" messages to assist in editing.
* Every piece of visible text (aside from user entry of course) should be translation-ready.
* Auto-generated MM3 style power summary. No need to write your own summary, add extra info to headers or target lines, or any of that stuff. Just get the data right, and your summary should look perfect!

**Tips for Use**
* Power icons are not included because of dubious legality; the icon displayed is the image you set for the power. But if you use a light-coloured SVG for the power icon (recommended because it looks better on the chat card), it will turn black in the sheet summary. This only works for SVG files—other files will be unchanged.
* Skills entry on the Main tab lists any skill which has a "base" value set, has any bonuses active, or has a total bonus higher than the corresponding raw ability check (configured on the "Manage" tab). **Exception:** Perception will never appear here since it's always in the header.
* Resistances/Immunities/Vulnerabilities entries in the header will show any damage type with a final value not equal to 0, or with "immunity" checked (configured on the "Manage" tab).
* Elite and Solo monsters will display Action Points and Saving Throws in the header. For everybody else, you can find them in the "Manage" tab if you need them.
* If "Advanced Math" is turned on, Ability Scores will appear for editing in the "Manage" tab, to avoid cluttering up the header.
* In the absence of a monster trait object in the current system build, the sheet collapses *almost* all Feats and Class/Race/Etc Features down into a single "Traits" section. The sole exception is Epic Destiny Features; to maintain continuity with Drac's import code, we're currently using the "destinyFeats" object to store monster lore in a chat-card-friendly format. Features of this type will appear on the Lore tab instead.
### Journal Styling
Makes your Journals look just like official 4e books!

<a href="https://github.com/user-attachments/assets/cf79b163-f741-41e3-93ec-a1ffbf3d47d2"><img src="https://github.com/user-attachments/assets/cf79b163-f741-41e3-93ec-a1ffbf3d47d2" height=217 width="750" style="height:auto;max-width:100%;width:750px"></a>
* Offers new journal sheets for player book (royal blue theme), GM book (maroon/wine theme) and monster book (olive green theme). Default journals also use the player theme for now, until I can work out a better way to add them into the editor.
* Propagates to all ProseMirror-based rich text areas (based mainly on the need to style the editor—hopefully this can be improved in the future). If you want to prevent this, you'll have to deactivate all journal styling for now.
* I haven't worked out how to add custom blocks to the editor, but you can use the HTML source editor to take advantage of built-in classes.
  * Check the included "Styling Manual" compendium for how to markup game stuff in journals. Currently supports generic table, "power" (table), "item" (table), "ritual" (div) and "rules-block" (div). (Other styles will be forthcoming, and hopefully I can eventually work out how to make them front-end selectable.)
* Includes a selector so you can choose between book-accurate serif font, or the sans-serif version that's more easily readable on many screens.
### Chat Styles
Styles chat messages, in particular item cards, to match the core 4e books.

<a href="https://github.com/user-attachments/assets/8961e226-2b68-4cf9-893f-915b9c483a3f"><img src="https://github.com/user-attachments/assets/8961e226-2b68-4cf9-893f-915b9c483a3f" height=217 style="height:auto;width:100%;max-width:830px"></a>
* Turn it on/off in the module settings.
* Add text to the automatic tooltips for calculated values on chat cards, so you can (for example) check which attributes they include. For instructions on usage see the included "Styling Manual" compendium.
* Chat cards for "destinyFeats" sent by NPC actors are styled after monster stat blocks, as per the workaround in use on the NPC character sheet.
* Recharge powers have monster header colour, since they almost always come from NPCs.
* I gave rituals a purple header cus, I dunno, I like it.
* If you're using auto-generated power cards, NPC power cards will have their flavour text automatically be toggled "hidden" in chat. Reasoning: unlike PC powers, using the chat flavour field to judge whether or not we need the full description is unreliable (because NPC powers almost never have flavour text).
* If you're not using auto-generated power cards, I've enabled two classes you can use with the source code editor to make the appropriate parts of your text pick up some basic styling.
  * `power-basics` for text that should look like the source/type/usage/keywords section
  * `flavour` for text that should look like flavour text. 
  * To use them, enter "source code" mode using the toolbar button in the text editor. Then just add the desired class name to the `p` or `div` element wrapping your text, like so: `<p class="flavour">`. You won't see any difference while editing your item (at least for now) but you should see it in chat next time you use the power.
  * They will probably look okay with some elements other than p or div too, but consider these "unsupported".
  * Alternatively, if you know what you're doing you can inspect the markup output for the auto-generated chat cards and copy the class names as required. This should work more or less seamlessly.
* As of 1.0, Chat Styles incorporates the styles formerly called "Extra" that don't relate to the speech bubble effect.
* Includes compatibility tweaks for: [Chat Portrait](https://foundryvtt.com/packages/chat-portrait), [Narrator Tools](https://foundryvtt.com/packages/narrator-tools), [DragonFlagon Chat Enhancements](https://foundryvtt.com/packages/df-chat-enhance), [Active Effects to Chat](https://github.com/BadIdeasBureau/ae-to-chat), [Condition Lab & Triggler](https://foundryvtt.com/packages/condition-lab-triggler) and [Simply Portraits](https://foundryvtt.com/packages/simply-portraits). Feel free to request others if you want them—I'll do what I can!

<a href="https://github.com/user-attachments/assets/0f8bf77b-8368-45aa-b71f-ad19757c803f"><img src="https://github.com/user-attachments/assets/0f8bf77b-8368-45aa-b71f-ad19757c803f" height=200></a>


### Token Action HUD Styling
Enhances 4e styling for [Token Action HUD](https://foundryvtt.com/packages/token-action-hud-core) (requires [Drac's Foundry 4e Tools](https://github.com/draconas1/foundry-4e-tools)).

<a href="https://github.com/user-attachments/assets/b1360fd9-8559-4ec4-8153-bd601ab9c1d9"><img src="https://github.com/user-attachments/assets/b1360fd9-8559-4ec4-8153-bd601ab9c1d9" height=300></a>
* If you have "Colour Powers By Use Type" turned on, tweaks the colours to be book-accurate (matching chat cards and PC sheet).
* Tooltips with item cards will are styled similarly to chat cards. Unfortunately card styling is more generic than for chat, as there is less information available about what type of card is being displayed (for example, equipment and NPC powers lose their unique colour schemes).
* Turn it on/off from the module settings.

### Visual Active Effects Styling
Adds 4e styling for [Visual Active Effects](https://foundryvtt.com/packages/visual-active-effects) effects panel.

<a href="https://github.com/user-attachments/assets/4923fc64-c627-45fd-9872-ae73c413c2dc"><img src="https://github.com/user-attachments/assets/4923fc64-c627-45fd-9872-ae73c413c2dc" height=200></a>
* Styles effect info much like chat cards, using the 4e gradient BG and text styles as in journals.
* Uses the maroon accent colour from GM books as a header colour.

### Extra chat styling
Extra chat styles have been moved into a new system-agnostic module, [Burble](https://github.com/FoxLee/Burble)!

<a href="https://github.com/user-attachments/assets/7bdb0cd8-4bfc-4238-b07a-c26a88c4db85"><img src="https://github.com/user-attachments/assets/7bdb0cd8-4bfc-4238-b07a-c26a88c4db85" height=250 style="height:auto;width:100%;max-width:830px"></a>

In Fox's opinion, the best visuals come from using Burble + Chat Portrait + DF Chat Enhancement's combined messages.


### To-Do/In Progress
* New Player Character sheet. (This was actually *almost* complete when I finally worked out how to create a new sheet, so I'm in the process of redoing it.)
  * <strike>Won't be a drastic overhaul like the NPC sheet, but more of a core-book-themed reskin</strike>. Will be a drastic overhaul, because I saw the Pathfinder 2e sheet and I'm in love.
* New Sheets for all system "items" (powers, feats, gear, etc)
* Fix the new NPC sheet's power sorting method, for Token Action HUD. For now, load a layout preset from the "extras" folder.
* Work out a way to separate journal styling from journal-like rich text areas in other sheets. Ideally I would like to have the journal styling based entirely on sheet sleection, and have rich text on other sheets be its own toggle. But at the moment I don't know how to make the pop-out journal editor aware of the selected sheet, which means I have to target the editor itself, which means all instances of the editor :\

## Installation
* From the Foundry VTT config/setup interface, click **"Install Module"** in the **"Add-on Modules"** tab.
* In the **"Manifest URL"** field, paste the following: `https://github.com/FoxLee/fox-4e-styling/releases/latest/download/module.json`
* Click "Install".
