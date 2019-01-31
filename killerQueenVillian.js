"use strict";

//		javascript code
//		script_name: Killer Queen Theme
//
//		author: Alex Kennedy
//		description: Theme song for the anime supervillian - Killer Queen
//

init();
setTempo(120);

////Selected Tracks
var hauntingDrum = RD_CINEMATIC_SCORE_DRUMPART_6;
var burstDrum = RD_CINEMATIC_SCORE_DRUMPART_13;
var rumbleDrum = RD_CINEMATIC_SCORE_DRUMPART_4;
var cinematicDrums = [hauntingDrum, burstDrum, rumbleDrum];

var buildUpString = RD_CINEMATIC_SCORE_STRINGS_15;
var dootDootString = RD_CINEMATIC_SCORE_STRINGS_7;
var cinematicStrings = [buildUpString, dootDootString];

var techLoopA = TECHNO_LOOP_PART_006;
var techLoopB = TECHNO_LOOP_PART_008;
var techLoops = [techLoopA, techLoopB];

var tickingElectro = ELECTRO_ANALOGUE_LEAD_005;
var tickPattern = "0--0--000--00-0-";

var randomFinale = [RD_ROCK_POPELECTRICBASS_12, RD_ROCK_POPELECTRICBASS_19,
RD_ROCK_POPELECTRICBASS_20, RD_ROCK_POPELECTRICBASS_21, RD_ROCK_POPELECTRICLEAD_2,
RD_ROCK_POPELECTRICLEAD_7];

//This method will take in 2 tracks and play them for the same duration of time
function dualTracks(track1, track1Num, track2, track2Num, startMeasure, endMeasure) {
  fitMedia(track1, track1Num, startMeasure, endMeasure);
  fitMedia(track2, track2Num, startMeasure, endMeasure);
}

//Provides a somewhat sinister build-up and outro
fitMedia(cinematicDrums[0], 1, 1, 29.5);

//Provides a "booming" build up that gradually gets louder (effect) for a smooth transition
fitMedia(cinematicDrums[1], 2, 5, 25);
setEffect(2, VOLUME, GAIN, -60, 5, 8, 13);

// Provides a "rumble-like" build up to the harmony
fitMedia(cinematicDrums[2], 3, 9, 25);

// Begins a String harmony with "dooting" backdrop
dualTracks(cinematicStrings[0], 4, cinematicStrings[1], 5, 13, 25);

// The ticking pattern adds tension and is symbolic of Killer Queen's bomb ability
for (var measure=17; measure < 27; measure++) {
   makeBeat(tickingElectro, 6, measure, tickPattern);
   setEffect(6, VOLUME, GAIN, -10)
}

// Adds a dualing, techno-based intensity for the climax
for (var measure = 17; measure < 26; measure = measure + 1) {
  fitMedia(techLoops[0], 7, measure, measure + 0.5);
  fitMedia(techLoops[1], 7, measure + 0.5 , measure + 1);
  setEffect(7, VOLUME, GAIN, -10)
}

// Provides a random 4-measure for a sense of "novelty" in the finale/climax
for (var measure=21; measure < 25; measure++) {
  var index = Math.floor(Math.random() * randomFinale.length);
  fitMedia(randomFinale[index], 8, measure, measure + 2);
  setEffect(8, VOLUME, GAIN, 0);
}

finish();
