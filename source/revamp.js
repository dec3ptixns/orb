const screenMainMenu = document.getElementById('screen_main_menu');
if (screenMainMenu) {
  const mainMenuRow2 = document.createElement('div');
  mainMenuRow2.classList.add('main_menu_row2');
  mainMenuRow2.display = 'flex';
  screenMainMenu.appendChild(mainMenuRow2);

  const dec3ptionsBtn = document.createElement('div');
  dec3ptionsBtn.id = 'dec3ptions_btn';
  dec3ptionsBtn.classList.add('button');
  dec3ptionsBtn.textContent = 'Dec3ptions';
  mainMenuRow2.appendChild(dec3ptionsBtn);
}

$("#dec3ptions_btn").click(function() { state.set("dec3ptions") })

const screenDec3ptions = document.createElement('div');
screenDec3ptions.id = 'screen_dec3ptions';
screenDec3ptions.style = 'visibility: visible; display: none;';
screenDec3ptions.classList.add('screen');
document.body.appendChild(screenDec3ptions);

state_blueprint.push({ id: 'dec3ptions', on_focus: function() { $("#screen_dec3ptions").show(); $("#dec3ptions_btn").hide() }, on_blur: function() { $("#screen_dec3ptions").hide(); $("#dec3ptions_btn").show() } });

document.addEventListener('keydown', function(event) {
  if (event.key === 'q') {
    const mainMenuRow2 = document.querySelector('.main_menu_row2');
    if (mainMenuRow2) {
      mainMenuRow2.style.display = mainMenuRow2.style.display === 'none' ? 'block' : 'none';
    }
  }
});

document.getElementById('screen_dec3ptions').insertAdjacentHTML('beforeEnd',
  '<h1>GET DAGGERS<h1>' +
    '<div class="button" id="dec3ptions_1_specific">Specific</div>' +
    '<div class="button" id="dec3ptions_1_rapidSpecific">{RAPID} Specific</div>' +
    '<div class="button" id="dec3ptions_1_levelbased">Level</div>' +
    '<div class="button" id="dec3ptions_1_rapidLevelbased">{RAPID} Level</div>' +

  '<h1>EQUIP DAGGERS<h1>' +
    '<div class="button" id="dec3ptions_2_dagger" >Dagger</div>' +
    '<div class="button" id="dec3ptions_2_loadout" >Loudout</div>' +
    '<div class="button" id="dec3ptions_2_loadout" >Random</div>' +

  '<h1>UPGRADES<h1>' +
    '<div class="button" id="dec3ptions_3_infinite" >Infinite</div>' +
    '<div class="button" id="dec3ptions_3_free" >Free</div>' +

  '<h1>XP<h1>' +
    '<div class="button" id="dec3ptions_4_set" >Set</div>' +
    '<div class="button" id="dec3ptions_4_get" >Get</div>' +

  '<h1>DAILY GIFTS<h1>' +
    '<div class="button" id="exploits_dailyGift_instaGift_btn" >INSTANT</div>' +
    '<div class="button" id="exploits_dailyGift_rapidGift_btn" >RAPID</div>' +

  '<h1>LEVELS<h1>' +
    '<div class="button" id="exploits_levels_play_btn" >PLAY</div>' +

'</div>');

$("#dec3ptions_1_specific").click(function() {
  fetch("https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_1_specific.js")
  .then(response => response.text())
  .then(code => {

    (function() {
      eval(code);
      run();
    })();
  })
  .catch(error => console.error(error));
});