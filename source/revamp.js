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

document.getElementById('screen_dec3ptions').insertAdjacentHTML('beforeEnd',
    //'<div class="screen" id="screen_exploits" style="visibility: visible;"><div class="main_menu_row"><div class="button main_menu_btn" id="exploits_btn" style="color:#7600ff; background:#000000">DEC3PTIXNS HXB</div></div></div>' +
    //'<div class="screen" id="screen_dec3ptions" style="visibility: visible; display: none;"> <h1 style="color:#7600ff">DEC3PTIXNS HXB</h1>' +

    '<h1>GET DAGGERS<h1>' +
    '<div class="button" id="exploits_getDaggers_specific_btn">SPECIFIC</div>' +
    '<div class="button" id="exploits_getDaggers_rapidSpecific_btn" >{RAPID} SPECIFIC</div>' +
    '<div class="button" id="exploits_getDaggers_instaLevel_btn" >LEVEL</div>' +
    '<div class="button" id="exploits_getDaggers_rapidLevel_btn" >{RAPID} LEVEL</div>' +

    '<h2>EQUIP DAGGERS<h2>' +
    '<div class="button" id="exploits_equipDaggers_equipDagger_btn" >DAGGER</div>' +
    '<div class="button" id="exploits_equipDaggers_equipLoadout_btn" >LOADOUT</div>' +
    '<div class="button" id="exploits_equipDaggers_equipRandom_btn" >RANDOM</div>' +
    '<div class="button" id="exploits_equipDaggers_equipUnobtainable_btn" >UNOBTAINABLE</div>' +

    '<h3>UPGRADES<h3>' +
    '<div class="button" id="exploits_upgrades_infUpgrades_btn" >INFINITE</div>' +
    '<div class="button" id="exploits_upgrades_freeUpgrades_btn" >FREE</div>' +

    '<h4>XP<h4>' +
    '<div class="button" id="exploits_xp_set_btn" >SET</div>' +

    '<h5>DAILY GIFTS<h5>' +
    '<div class="button" id="exploits_dailyGift_instaGift_btn" >INSTANT</div>' +
    '<div class="button" id="exploits_dailyGift_rapidGift_btn" >RAPID</div>' +

    '<h6>LEVELS<h6>' +
    '<div class="button" id="exploits_levels_play_btn" >PLAY</div>' +
    '<div class="button" id="exploits_levels_complete_btn" >COMPLETE</div>' +
    '<div class="button" id="exploits_levels_unlock_btn" >UNLOCK</div>' +

    '</div>');






// Create an object with the specified properties
  // Push the object to the 'state_blueprint' array
state_blueprint.push({ id: 'dec3ptions', on_focus: function() { $("#screen_dec3ptions").show(); $("#dec3ptions_btn").hide() }, on_blur: function() { $("#screen_dec3ptions").hide(); $("#dec3ptions_btn").show() } });

console.log('The object was created and pushed to the "state_blueprint" array.'); 


  document.addEventListener('keydown', function(event) {
    if (event.key === '3') {
      const mainMenuRow2 = document.querySelector('.main_menu_row2');
      if (mainMenuRow2) {
        mainMenuRow2.style.display = mainMenuRow2.style.display === 'none' ? 'block' : 'none';
      }
    }
  });
  