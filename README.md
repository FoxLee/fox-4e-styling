![](https://img.shields.io/badge/Foundry-v11-informational)
![](https://img.shields.io/badge/Foundry-v10-informational)

# Fox's 4e Aesthetics for Foundry VTT (BETA)
Foundry VTT module for D&amp;D 4e, which attempts to style sheets, journals, item cards and other elements to match the official 4e books as closely as possible.
* **Author**: [FoxLee](https://github.com/FoxLee)
* **Contributors**: Built on the work of everybody contributing to the [D&D4e System implementation for Foundry VTT](https://github.com/EndlesNights/dnd4eBeta). French translation provided by [Gilphe](https://github.com/Gilphe)
* **Foundry VTT Compatibility**: v11+ (last FVTT 10.x compatible release is v0.9.47)
* **4e System Compatibility**: v0.4+ (last FVTT 10.x compatible release requires dnd4e0.3.17+)
* **Languages**: [en-AU](https://github.com/FoxLee/fvtt-locale-en-au), fr, en-US
* **Other Credits**: The Monster token in the screenshots is by [Yuikami](https://yuikami.tumblr.com), who makes the cutest token packs ever.

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
* Power icons are not included because of dubious legality; the icon displayed is the image you set for the power. But if you use a light-coloured SVG for the power icon (recommended because it looks better on the chat card), it will turn black in the sheet summary. This only works for SVG files—oher files will be unchanged.
* Skills entry on the Main tab lists any skill which has a "base" value set, has any bonuses active, or has a total bonus higher than the corresponding raw ability check (configured on the "Manage" tab). **Exception:** Perception will never appear here since it's always in the header.
* Resistances/Immunities/Vulnerabilities entries in the header will show any damage type with a final value not equal to 0, or with "immunity" checked (configured on the "Manage" tab).
* Elite and Solo monsters will display Action Points and Saving Throws in the header. For everybody else, you can find them in the "Manage" tab if you need them.
* If "Advanced Math" is turned on, Ability Scores will appear for editing in the "Manage" tab, to avoid cluttering up the header.
* In the absence of a monster trait object in the current system build, the sheet collapses *almost* all Feats and Class/Race/Etc Features down into a single "Traits" section. The sole exception is Epic Destiny Features; to maintain continuity with Drac's import code, we're currently using the "destinyFeats" object to store monster lore in a chat-card-friendly format. Features of this type will appear on the Lore tab instead.
### Journal Styling
Makes your Journals look just like official 4e books!

<a href="https://user-images.githubusercontent.com/10067730/198205657-7e8f3463-8add-4b76-9fc1-ca126761af6c.png"><img src="https://user-images.githubusercontent.com/10067730/198205657-7e8f3463-8add-4b76-9fc1-ca126761af6c.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198205690-6199634a-23aa-4cfa-bbaf-c3749a1404bd.png"><img src="https://user-images.githubusercontent.com/10067730/198205690-6199634a-23aa-4cfa-bbaf-c3749a1404bd.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198205715-4e35984f-77b4-4478-b04c-90f5ca55bd76.png"><img src="https://user-images.githubusercontent.com/10067730/198205715-4e35984f-77b4-4478-b04c-90f5ca55bd76.png" width=150></a>
* Should work for all ProseMirror-based rich text areas.
* Includes body text, headings, lists, tables, and whatever else I can manage.
* I haven't worked out how to include selectable styles yet, but you can use the HTML source editor to take advantage of built-in classes.
  * Check the included "Example Styling" compendium for how to markup game stuff in journals. Currently supports generic table, "power" (table), "item" (table), "ritual" (div) and "rules-block" (div). (Other styles will be forthcoming, and hopefully I can eventually work out how to make them front-end selectable.)
* I dunno how to add journal sheets, but you can toggle the styling package on/off from the module settings.
* Includes a selector so you can choose between book-accurate serif font, or the sans-serif version that's more easily readable on many screens.
### Chat Card Styling
Styles chat item cards to match the core 4e books.

<a href="https://user-images.githubusercontent.com/10067730/198873614-a70582b0-70c8-44ca-b9d3-f6a2a8c4f786.png"><img src="https://user-images.githubusercontent.com/10067730/198873614-a70582b0-70c8-44ca-b9d3-f6a2a8c4f786.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198209252-45e3e2a4-f31e-420c-999b-65196650d3e4.png"><img src="https://user-images.githubusercontent.com/10067730/198209252-45e3e2a4-f31e-420c-999b-65196650d3e4.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198209275-159bdd5f-371e-4b42-baff-e72e2064627b.png"><img src="https://user-images.githubusercontent.com/10067730/198209275-159bdd5f-371e-4b42-baff-e72e2064627b.png" width=150></a>
<a href="https://github.com/FoxLee/fox-4e-styling/assets/10067730/c8d6a955-5753-47fc-a08c-479bd5695667"><img src="https://github.com/FoxLee/fox-4e-styling/assets/10067730/c8d6a955-5753-47fc-a08c-479bd5695667" width=150></a>
<a href="https://github.com/FoxLee/fox-4e-styling/assets/10067730/bf331086-85d6-4901-a178-490944ed546a"><img src="https://github.com/FoxLee/fox-4e-styling/assets/10067730/bf331086-85d6-4901-a178-490944ed546a" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198873808-7245deea-cb90-44b5-a818-672cd74b6506.png"><img src="https://user-images.githubusercontent.com/10067730/198873808-7245deea-cb90-44b5-a818-672cd74b6506.png" width=150></a>
<a href="https://github.com/FoxLee/fox-4e-styling/assets/10067730/177a18e6-4d3e-4d92-a9a0-2408871a3806"><img src="https://github.com/FoxLee/fox-4e-styling/assets/10067730/177a18e6-4d3e-4d92-a9a0-2408871a3806" width=150></a>

* Turn it on/off in the module settings.
* **NEW:** Add text to the automatic tooltips for calculated values on chat cards, so you can check which attributes they include. For instructions on usage see the "New Features" in the included "Text Styling Examples" compendium.
* Chat cards for "destinyFeats" sent by NPC actors are styled after monster stat blocks, as per the workaround in use on the NPC character sheet.
* Recharge powers have monster header colour, since they almost always come from NPCs.
* I gave rituals a purple header cus, I dunno, I like it.
* If you're using auto-generated power cards, NPC power cards will have their flavour text automatically be toggled "hidden" in chat. Reasoning: unlike PC powers, using the chat flavour field to judge whether or not we need the full description is unreliable (because NPC powers almost never have flavour text).
* If you're not using auto-generated power cards, I've enabled two classes you can use with the source code editor to make the appropriate parts of your text pick up some basic styling.
  * `power-basics` for text that should look like the source/type/usage/keywords section
  * `flavour` for text that should look like flavour text. 
  * To use them, enter "source code" mode using the toolbar button in the text editor. Then just add the desired class name to the `p` or `div` element wrapping your text, like so: `<p class="flavour">`. You won't see any difference while editing your item (at least for now) but you should see it in chat next time you use the power.
  * They will probably look okay with some elements other than p or div too, but consider these "unsupported".
* Includes compatibility tweaks for: [Chat Portrait](https://foundryvtt.com/packages/chat-portrait), [Narrator Tools](https://foundryvtt.com/packages/narrator-tools), [DragonFlagon Chat Enhancements](https://foundryvtt.com/packages/df-chat-enhance), [Active Effects to Chat](https://github.com/BadIdeasBureau/ae-to-chat). Feel free to request others if you want them—I'll do what I can!
### Token Action HUD Styling
Tweaks the styling of [Token Action HUD Classic](https://foundryvtt.com/packages/token-action-hud) just a little (if you're using Drac's integration).

<a href="https://user-images.githubusercontent.com/10067730/198206272-96f3e1fd-7980-432b-8d8b-15c98d007aa8.png"><img src="https://user-images.githubusercontent.com/10067730/198206272-96f3e1fd-7980-432b-8d8b-15c98d007aa8.png" width=150></a>

* If you have "Colour Powers By Use Type" turned on, tweaks the colours to be book-accurate (matching chat cards and PC sheet).
* Turn it on/off from the module settings.
### Extra chat styling
It's got nothing to do with book accuracy. I just think it's cute!

<a href="https://user-images.githubusercontent.com/10067730/198873864-6dd16cd4-69dc-4afd-abb0-0214eda9045e.png"><img src="https://user-images.githubusercontent.com/10067730/198873864-6dd16cd4-69dc-4afd-abb0-0214eda9045e.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198873449-7a145209-4e76-4068-8f90-3f5445024990.png"><img src="https://user-images.githubusercontent.com/10067730/198873449-7a145209-4e76-4068-8f90-3f5445024990.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/204185140-c38c4f43-55f9-445e-9f74-a3eaf5ffbdbf.png"><img src="https://user-images.githubusercontent.com/10067730/204185140-c38c4f43-55f9-445e-9f74-a3eaf5ffbdbf.png" width=150></a>

* Turn it on/off in the module settings.
* Basically makes your chat cards and dialogue stand out more than system messages.
* Substantially cuter with the [Chat Portrait](https://foundryvtt.com/packages/chat-portrait) module
* Includes tweaks for compatibility with Narrator Tools module.
* Please feel free to ask for tweaks if it causes problems with any modules you use. It's super hard to keep it out of everybody's way by default, but usually trivially easy to fix any given conflict!

### To-Do/In Progress
* New Player Character sheet. (This was actually *almost* complete when I finally worked out how to create a new sheet, so I'm in the process of redoing it.)
  * <strike>Won't be a drastic overhaul like the NPC sheet, but more of a core-book-themed reskin</strike>. Will be a drastic overhaul, because I saw the Pathfinder 2e sheet and I'm in love.
* New Sheets for all system "items" (powers, feats, gear, etc)
* <strike>Each set of styling optional (either as settings or as separate sheets)</strike> Done! :D
* Fix the new NPC sheet's power sorting method, for Token Action HUD. Power sorting is not "set" even though the sheet forces its unique sorting, so TAH retains the last selected value for the actor (for now, swap back to the default sheet and choose "action" sorting to fix).
  * TAH also doesn't inherit the specific MM3 action groups. Default action sorting is sufficient, but it would be nice for it to be exactly right.
* <strike>Make condition/special immunities editable on the sheet. Since this was a new addition to support this sheet, I didn't have a built-in edit dialogue to piggyback on, so I had to leave it in the "too hard" basket for now.</strike> Done! :D

## Installation
* From the Foundry VTT config/setup interface, click **"Install Module"** in the **"Add-on Modules"** tab.
* In the **"Manifest URL"** field, paste the following: `https://github.com/FoxLee/fox-4e-styling/releases/latest/download/module.json`
* Click "Install".
