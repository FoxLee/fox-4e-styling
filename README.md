![](https://img.shields.io/badge/Foundry-v10-informational)

# Fox's 4e Styling for Foundry VTT (BETA)
Foundry VTT module for D&amp;D 4e, which attempts to style sheets, journals, item cards and other elements to match the official 4e books as closely as possible.
* **Author**: [FoxLee](https://github.com/FoxLee)
* **Contributors**: Built on the work of everybody contributing to the [D&D4e System implementation for Foundry VTT](https://github.com/EndlesNights/dnd4eBeta)
* **Foundry VTT Compatibility**: v10

## Features
### Core style NPC sheet
A new NPC sheet based on the official, deliciously compact 4e monster stat blocks we know and love!

<a href="https://user-images.githubusercontent.com/10067730/198204209-5d21178e-aeef-49b8-be31-c0d1efbf8aca.png"><img src="https://user-images.githubusercontent.com/10067730/198204209-5d21178e-aeef-49b8-be31-c0d1efbf8aca.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198204269-a4d36624-5f91-43ae-9244-c6d022bbb26a.png"><img src="https://user-images.githubusercontent.com/10067730/198204269-a4d36624-5f91-43ae-9244-c6d022bbb26a.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198204366-475327c6-fd29-4019-8e9e-f20d8270bfbf.png"><img src="https://user-images.githubusercontent.com/10067730/198204366-475327c6-fd29-4019-8e9e-f20d8270bfbf.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198204382-763aa610-a799-4a8f-b9d2-ce15224e3b74.png"><img src="https://user-images.githubusercontent.com/10067730/198204382-763aa610-a799-4a8f-b9d2-ce15224e3b74.png" width=150></a>
* Specifically based on the MM3 style stat block, with action-based subheadings. (Note that the sheet uses its own power sorting mode, including sending powers with triggers to their own group.)
* Doesn't override the existing NPC sheet, so you can choose it per-monster or set it as the default, as you see fit.
* Retains the functionality of the existing sheet in almost all cases (some items have to managed on a separate tab).
* Should work near-seamlessly with Draconas [Foundry 4e Tools](https://github.com/draconas1/foundry-4e-tools)/[Masterplan exporter](https://github.com/draconas1/masterplan-json-export)
* Makes heavy use of "tooltip" messages to assist in editing.
* Every piece of visible text (aside from user entry of course) should be translation-ready.
* Auto-generated MM3 style power summary. No need to write your own summary, add extra info to headers or target lines, or any of that stuff. Just get the data right, and your summary should look perfect.
* Skills entry on the Main tab displays any skills which has a "base" value set, has any bonuses set, or has a total bonus higher than the correspondingn raw ability check.
* In the absence of a monster trait object in the current system build, the sheet collapses *almost* all Feats and Class/Race/Etc Features down into a single "Traits" section. The sole exception is Epic Destiny Features; to maintain continuity with Drac's import code, we're currently using the "destinyFeats" object to store monster lore in a chat-card-friendly format, so they appear on the Lore tab instead.
### Journal Styling
Makes your Journals look just like official 4e books!

<a href="https://user-images.githubusercontent.com/10067730/198205657-7e8f3463-8add-4b76-9fc1-ca126761af6c.png"><img src="https://user-images.githubusercontent.com/10067730/198205657-7e8f3463-8add-4b76-9fc1-ca126761af6c.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198205690-6199634a-23aa-4cfa-bbaf-c3749a1404bd.png"><img src="https://user-images.githubusercontent.com/10067730/198205690-6199634a-23aa-4cfa-bbaf-c3749a1404bd.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198205715-4e35984f-77b4-4478-b04c-90f5ca55bd76.png"><img src="https://user-images.githubusercontent.com/10067730/198205715-4e35984f-77b4-4478-b04c-90f5ca55bd76.png" width=150></a>
* Should work for all ProseMirror-based rich text areas.
* Includes body text, headings, lists, tables, and whatever else I can manage.
* I haven't worked out how to include selectable styles yet, but you can access the boxed text style by switching to the code editor and wrapping the target content in a div with the "rules-block" class. (Other styles will be forthcoming if I can work out how to make them front-end selectable.)
* Not currently optional. I want to put this in a new journal sheet or make it a toggle-able setting, but I haven't worked that out yet!
### Chat Card Styling
Styles chat item cards to match the core 4e books.

<a href="https://user-images.githubusercontent.com/10067730/198209338-8242894a-335a-4dee-ae5d-c8eebabe8cf2.png"><img src="https://user-images.githubusercontent.com/10067730/198209338-8242894a-335a-4dee-ae5d-c8eebabe8cf2.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198209252-45e3e2a4-f31e-420c-999b-65196650d3e4.png"><img src="https://user-images.githubusercontent.com/10067730/198209252-45e3e2a4-f31e-420c-999b-65196650d3e4.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198209275-159bdd5f-371e-4b42-baff-e72e2064627b.png"><img src="https://user-images.githubusercontent.com/10067730/198209275-159bdd5f-371e-4b42-baff-e72e2064627b.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198209867-1e4277d7-a741-4440-9b25-5befdfb0099c.png"><img src="https://user-images.githubusercontent.com/10067730/198209867-1e4277d7-a741-4440-9b25-5befdfb0099c.png" width=150></a>
<a href="https://user-images.githubusercontent.com/10067730/198209996-b95ac613-0a29-4be2-b509-62bfcb34627a.png"><img src="https://user-images.githubusercontent.com/10067730/198209996-b95ac613-0a29-4be2-b509-62bfcb34627a.png" width=150></a>
* Not yet perfect for all item types; I've focused on getting powers right for now.
* Not currently optional. I want to make this a toggle-able setting, but I haven't worked that out yet!
### Token Action HUD Styling
Tweaks the styling of [Token Action HUD](https://github.com/Drental/fvtt-tokenactionhud) just a little.

<a href="https://user-images.githubusercontent.com/10067730/198206272-96f3e1fd-7980-432b-8d8b-15c98d007aa8.png"><img src="https://user-images.githubusercontent.com/10067730/198206272-96f3e1fd-7980-432b-8d8b-15c98d007aa8.png" width=150></a>

* If you have "Colour Powers By Use Type" turned on, tweaks the colours to be a bit more book-accurate (matching chat cards and PC sheet).
* Not currently optional. I want to put this in a new journal sheet or make it a toggle-able setting, but I haven't worked that out yet!
### To-Do/In Progress
* New Player Character sheet. (This was actually *almost* complete when I finally worked out how to create a new sheet, so I'm in the process of redoing it.)
  * Won't be a drastic overhaul like the NPC sheet, but more of a core-book-themed reskin.
* New Sheets for all system "items" (powers, feats, gear, etc)
* Each set of styling optional (either as settings or as separate sheets)
* Fix the new NPC sheet's power sorting method, for Token Action HUD. Power sorting is not "set" even though the sheet forces its unique sorting, so TAH retains the last selected value for the actor (for now, swap back to the default sheet and choose "action" sorting to fix).
  * TAH also doesn't inherit the specific MM3 action groups. Default action sorting is sufficient, but it would be nice for it to be exactly right.

## Installation
* From the Foundry VTT config/setup interface, click **"Install Module"** in the **"Add-on Modules"** tab.
* In the **"Manifest URL"** field, paste the following: https://raw.githubusercontent.com/FoxLee/fox-4e-styling/main/module.json
* Click "Install".
### I only want the NPC sheet
I hope to eventually have all components be loaded separately, either as separate sheets or based on settings. In the mean time, if you don't want to style journals/chat cards/TAH, do one of the following:
* Remove the corresponding CSS file from the "styles" list in the module.json file
* Edit the corresponding CSS file to be empty (don't delete the file or you'll get an error).

Yes, this will be undone next time the module updates. Sorry. I'll get optional loading done as soon as I can!
