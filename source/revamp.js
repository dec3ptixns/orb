// Variables
const dec3ptions_blueprint = [
  
  { "id": "dec3ptions_1_specific", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_1_specific.js" },
  { "id": "dec3ptions_1_rapidSpecific", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/tree/main/functions/dec3ptions_1_rapidSpecific.js" },
  { "id": "dec3ptions_1_levelbased", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/tree/main/functions/dec3ptions_1_levelbased.js" },
  { "id": "dec3ptions_1_rapidLevelbased", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/tree/main/functions/dec3ptions_1_rapidLevelbased.js" },

  { "id": "dec3ptions_2_dagger", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/tree/main/functions/dec3ptions_2_dagger.js" },
  { "id": "dec3ptions_2_loadout", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/tree/main/functions/dec3ptions_2_loadout.js" },
  { "id": "dec3ptions_2_random", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/tree/main/functions/dec3ptions_2_random.js" },

  { "id": "dec3ptions_3_infinite", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/tree/main/functions/dec3ptions_3_infinite.js" },
  { "id": "dec3ptions_3_free", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/tree/main/functions/dec3ptions_3_free.js" },

  { "id": "dec3ptions_4_set", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/tree/main/functions/dec3ptions_4_set.js" },
  { "id": "dec3ptions_4_get", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/tree/main/functions/dec3ptions_4_get.js" },

  { "id": "dec3ptions_5_instant", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/tree/main/functions/dec3ptions_5_instant.js" },
  { "id": "dec3ptions_5_infinite", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/tree/main/functions/dec3ptions_5_infinite.js" },
  { "id": "dec3ptions_5_custom", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/tree/main/functions/dec3ptions_5_custom.js" },

  { "id": "dec3ptions_6_play", "link": "https://raw.githubusercontent.com/dec3ptixns/orb/tree/main/functions/dec3ptions_6_play.js" },

];

document.getElementById('screen_main_menu').insertAdjacentHTML('beforeend', '<div class="main_menu_row2"><div id="dec3ptions_btn" class="button">Dec3ptions</div></div>');
document.body.insertAdjacentHTML('beforeend', '<div id="screen_dec3ptions" class="screen" style="visibility: visible; display: none;"></div>')

state_blueprint.push({ id: 'dec3ptions', on_focus: function() { $("#screen_dec3ptions").show(); $("#dec3ptions_btn").hide() }, on_blur: function() { $("#screen_dec3ptions").hide(); $("#dec3ptions_btn").show() } });
$("#dec3ptions_btn").click(function() { state.set("dec3ptions") })

document.addEventListener('keydown', function(event) { if (event.key === 'q') { const mainMenuRow2 = document.querySelector('.main_menu_row2'); if (mainMenuRow2) { mainMenuRow2.style.display = mainMenuRow2.style.display === 'none' ? 'block' : 'none'; } } });

document.getElementById('screen_dec3ptions').insertAdjacentHTML('beforeEnd',
  '<h1>GET DAGGERS<h1>' +
    '<div class="button" id="dec3ptions_1_specific">Specific</div>' +
    '<div class="button" id="dec3ptions_1_rapidSpecific">{RAPID} Specific</div>' +
    '<div class="button" id="dec3ptions_1_levelbased">Level</div>' +
    '<div class="button" id="dec3ptions_1_rapidLevelbased">{RAPID} Level</div>' +

  '<h1>EQUIP DAGGERS<h1>' +
    '<div class="button" id="dec3ptions_2_dagger" >Dagger</div>' +
    '<div class="button" id="dec3ptions_2_loadout" >Loudout</div>' +
    '<div class="button" id="dec3ptions_2_random" >Random</div>' +

  '<h1>UPGRADES<h1>' +
    '<div class="button" id="dec3ptions_3_infinite" >Infinite</div>' +
    '<div class="button" id="dec3ptions_3_free" >Free</div>' +

  '<h1>XP<h1>' +
    '<div class="button" id="dec3ptions_4_set" >Set</div>' +
    '<div class="button" id="dec3ptions_4_get" >Get</div>' +

  '<h1>DAILY GIFTS<h1>' +
    '<div class="button" id="dec3ptions_5_instant" >Instant</div>' +
    '<div class="button" id="dec3ptions_5_infinite" >Infinite</div>' +
    '<div class="button" id="dec3ptions_5_custom" >Custom</div>' +

  '<h1>LEVELS<h1>' +
    '<div class="button" id="dec3ptions_6_play" >Play</div>' +

'</div>');

for (let i = 0; i < dec3ptions_blueprint.length; i++) {

  $('#'+dec3ptions_blueprint[i].id).click(function() {
    console.log(dec3ptions_blueprint[i].id)
  });

  console.log(dec3ptions_blueprint[i]);

};

/*
$('#'+dec3ptions_blueprint[0].id).click(function() {
  setInterval(function dailyRewards() {
      console.log("clicked")
  }, 20)
});
*/