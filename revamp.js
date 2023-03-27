const screenMainMenu = document.getElementById('screen_main_menu');
if (screenMainMenu) {
  const mainMenuRow2 = document.createElement('div');
  mainMenuRow2.classList.add('main_menu_row2');
  screenMainMenu.appendChild(mainMenuRow2);

  const dec3ptionsBtn = document.createElement('div');
  dec3ptionsBtn.id = 'dec3ptions_btn';
  dec3ptionsBtn.classList.add('button');
  dec3ptionsBtn.textContent = 'Dec3ptions';
  mainMenuRow2.appendChild(dec3ptionsBtn);

  console.log('The element with ID "screen_main_menu" was found and a new element with class "main_menu_row2" was created, and a new element with class "button main_menu_btn" was created and added to "main_menu_row2".');
} else {
  console.log('The element with ID "screen_main_menu" was not found.');
}












/*const screenDec3ptions = document.createElement('div');
screenDec3ptions.id = 'screen_dec3ptions';
screenDec3ptions.classList.add('screen');
document.body.appendChild(screenDec3ptions);
*/
document.body.insertAdjacentHTML('beforeEnd',
    //'<div class="screen" id="screen_exploits" style="visibility: visible;"><div class="main_menu_row"><div class="button main_menu_btn" id="exploits_btn" style="color:#7600ff; background:#000000">DEC3PTIXNS HXB</div></div></div>' +
    '<div class="screen" id="screen_dec3ptions" style="visibility: visible; display: none;"> <h1 style="color:#7600ff">DEC3PTIXNS HXB</h1>' +

    '<h1 style="color: rgb(118 0 255); font-size: 18px">GET DAGGERS<h1>' +
    '<div class="button" id="exploits_getDaggers_specific_btn" style="color:#7600ff; background:#000000; font-size:15px" padding="30px 15px">SPECIFIC</div>' +
    '<div class="button" id="exploits_getDaggers_rapidSpecific_btn" style="color:#7600ff; background:#000000; font-size:15px">{RAPID} SPECIFIC</div>' +
    '<div class="button" id="exploits_getDaggers_instaLevel_btn" style="color:#7600ff; background:#000000; font-size:15px">LEVEL</div>' +
    '<div class="button" id="exploits_getDaggers_rapidLevel_btn" style="color:#7600ff; background:#000000; font-size:15px">{RAPID} LEVEL</div>' +

    '<h1 style="color: rgb(118 0 255); font-size: 18px">EQUIP DAGGERS<h1>' +
    '<div class="button" id="exploits_equipDaggers_equipDagger_btn" style="color:#7600ff; background:#000000; font-size:15px">DAGGER</div>' +
    '<div class="button" id="exploits_equipDaggers_equipLoadout_btn" style="color:#7600ff; background:#000000; font-size:15px">LOADOUT</div>' +
    '<div class="button" id="exploits_equipDaggers_equipRandom_btn" style="color:#7600ff; background:#000000; font-size:15px">RANDOM</div>' +
    '<div class="button" id="exploits_equipDaggers_equipUnobtainable_btn" style="color:#7600ff; background:#000000; font-size:15px">UNOBTAINABLE</div>' +

    '<h1 style="color: rgb(118 0 255); font-size: 18px">UPGRADES<h1>' +
    '<div class="button" id="exploits_upgrades_infUpgrades_btn" style="color:#7600ff; background:#000000; font-size:15px">INFINITE</div>' +
    '<div class="button" id="exploits_upgrades_freeUpgrades_btn" style="color:#7600ff; background:#000000; font-size:15px">FREE</div>' +

    '<h1 style="color: rgb(118 0 255); font-size: 18px">XP<h1>' +
    '<div class="button" id="exploits_xp_set_btn" style="color:#7600ff; background:#000000; font-size:15px">SET</div>' +

    '<h1 style="color: rgb(118 0 255); font-size: 18px">DAILY GIFTS<h1>' +
    '<div class="button" id="exploits_dailyGift_instaGift_btn" style="color:#7600ff; background:#000000; font-size:15px">INSTANT</div>' +
    '<div class="button" id="exploits_dailyGift_rapidGift_btn" style="color:#7600ff; background:#000000; font-size:15px">RAPID</div>' +

    '<h1 style="color: rgb(118 0 255); font-size: 18px">LEVELS<h1>' +
    '<div class="button" id="exploits_levels_play_btn" style="color:#7600ff; background:#000000; font-size:15px">PLAY</div>' +
    '<div class="button" id="exploits_levels_complete_btn" style="color:#7600ff; background:#000000; font-size:15px">COMPLETE</div>' +
    '<div class="button" id="exploits_levels_unlock_btn" style="color:#7600ff; background:#000000; font-size:15px">UNLOCK</div>' +

    '</div>');






// Create an object with the specified properties
const dec3ptionsBlueprint = {
    id: 'dec3ptions',
    on_focus: function() {
      $("#screen_dec3ptions").show();
      $("#dec3ptions_btn").hide()
    },
    on_blur: function() {
      $("#screen_dec3ptions").hide();
    $("#dec3ptions_btn").show()
    }
  };
  
  // Push the object to the 'state_blueprint' array
state_blueprint.push(dec3ptionsBlueprint);
  
  console.log('The object was created and pushed to the "state_blueprint" array.'); 

  















  document.addEventListener('keydown', function(event) {
    if (event.key === '3') {
      const mainMenuRow2 = document.querySelector('.main_menu_row2');
      if (mainMenuRow2) {
        mainMenuRow2.style.display = mainMenuRow2.style.display === 'none' ? 'block' : 'none';
      }
    }
  });
  






$("#dec3ptions_btn").click(function() {
    state.set("dec3ptions")
})