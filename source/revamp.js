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
    '<div class="button" id="exploits_levels_complete_btn" >COMPLETE</div>' +
    '<div class="button" id="exploits_levels_unlock_btn" >UNLOCK</div>' +

'</div>');

$("#exploits_upgrades_infUpgrades_btn").click(function() {
  setInterval(function infUpgrades() {
      upgrades.damage = 999;
      upgrades.health = 999;
      upgrades.speed = 99;
      upgrades.spin = 999
  }, 250)
});

$("#exploits_upgrades_freeUpgrades_btn").click(function() {
  upgrade_blueprint['damage'].costs = [0,0,0,0,0,0,0,0];
  upgrade_blueprint['health'].costs = [0,0,0,0,0,0,0,0];
  upgrade_blueprint['speed'].costs = [0,0,0,0,0,0,0,0];
  upgrade_blueprint['spin'].costs = [0,0,0,0,0,0,0,0];
});

$("#exploits_dailyGift_instaGift_btn").click(function() {
  daily_gift.open();
});

$("#exploits_dailyGift_rapidGift_btn").click(function() {
  setInterval(function dailyRewards() {
      daily_gift.open();
      console.clear();
      console.log('Opened!')
  }, 20)
});

var option_equipDaggers_equipDagger = ""
$("#exploits_equipDaggers_equipDagger_btn").click(function() {
  let choice_EQUIP_DAGGERS_DAGGER_weapon_id = prompt("Which weapon (in weaponList) to equip.", option_equipDaggers_equipDagger);
  if (choice_EQUIP_DAGGERS_DAGGER_weapon_id == null || choice_EQUIP_DAGGERS_DAGGER_weapon_id == "") {
      return
  } else {
      option_equipDaggers_equipDagger = choice_EQUIP_DAGGERS_DAGGER_weapon_id
  };

  function equip(weapon_id) {
      dagger_selection.equip_dagger(weapon_id)
  };
  equip(option_equipDaggers_equipDagger)
});

var option_equipDaggers_equipLoadout = ""
$("#exploits_equipDaggers_equipLoadout_btn").click(function() {
  let choice_EQUIP_DAGGERS_LOADOUT_weapon_id = prompt("Which weapon (in weaponList) to equip 4 times.", option_equipDaggers_equipLoadout);
  if (choice_EQUIP_DAGGERS_LOADOUT_weapon_id == null || choice_EQUIP_DAGGERS_LOADOUT_weapon_id == "") {
      return
  } else {
      option_equipDaggers_equipLoadout = choice_EQUIP_DAGGERS_LOADOUT_weapon_id
  };

  function loadout(weapon_id) {
      dagger_selection.equipped = [];
      dagger_selection.equip_dagger(weapon_id);
      dagger_selection.equip_dagger(weapon_id);
      dagger_selection.equip_dagger(weapon_id);
      dagger_selection.equip_dagger(weapon_id)
  };
  loadout(option_equipDaggers_equipLoadout)
});

$("#exploits_getDaggers_instaLevel_btn").click(function() {
  dagger_selection.reward_level_clear();
  console.clear();
  console.log('Opened!')
});

$("#exploits_getDaggers_rapidLevel_btn").click(function() {
  setInterval(function dailyRewards() {
      dagger_selection.reward_level_clear();
      console.clear();
      console.log('Opened!')
  }, 20)
});

var option_getDaggers_specific = ""
$("#exploits_getDaggers_specific_btn").click(async function() {
  let choice_GET_DAGGERS_specific_weapon_ids = prompt("Which weapon (in weaponList) to receive.", option_getDaggers_specific);
  if (choice_GET_DAGGERS_specific_weapon_ids == null || choice_GET_DAGGERS_specific_weapon_ids == "") {
      return
  } else {
      option_getDaggers_specific = [choice_GET_DAGGERS_specific_weapon_ids]
  };
  let w_index = Math.floor(Math.random() * option_getDaggers_specific.length);
  var weapon_id = option_getDaggers_specific[Math.floor(Math.random() * option_getDaggers_specific.length)];
  var n = await sync.async_get("w_" + weapon_id) || 0;
  var index = -1;
  var count = 0;
  for (let unlocked_dagger of dagger_selection.unlocked) {
      if (unlocked_dagger.id == weapon_id) {
          index = count;
          break;
      }
      count += 1
  };
  await sync.async_set("w_" + weapon_id, n + 1);
  dagger_selection.unlocked.push({
      id: weapon_id,
      n: n + 1
  });
  dagger_selection.init()
});

var option_getDaggers_rapidSpecific = ""
$("#exploits_getDaggers_rapidSpecific_btn").click(async function() {
  let choice_GET_DAGGERS_rapidSpecific_weapon_ids = prompt("Which weapon (in weaponList) do you want to receive?", option_getDaggers_rapidSpecific);
  if (choice_GET_DAGGERS_rapidSpecific_weapon_ids == null || choice_GET_DAGGERS_rapidSpecific_weapon_ids == "") {
      return
  } else {
      option_getDaggers_rapidSpecific = [choice_GET_DAGGERS_rapidSpecific_weapon_ids]
  };
  setInterval(async function specificRapid() {
      let w_index = Math.floor(Math.random() * option_getDaggers_rapidSpecific.length);
      var weapon_id = option_getDaggers_rapidSpecific[Math.floor(Math.random() * option_getDaggers_rapidSpecific.length)];
      var n = await sync.async_get("w_" + weapon_id) || 0;
      var index = -1;
      var count = 0;
      for (let unlocked_dagger of dagger_selection.unlocked) {
          if (unlocked_dagger.id == weapon_id) {
              index = count;
              break;
          }
          count += 1
      };
      await sync.async_set("w_" + weapon_id, n + 1);
      dagger_selection.unlocked.push({
          id: weapon_id,
          n: n + 1
      });
      dagger_selection.init()
  }, 20)
});

var option_xp_set = ""
$("#exploits_xp_set_btn").click(async function() {
  let choice_XP_SET_xp = prompt("What should your XP be set to?", option_xp_set);
  if (choice_XP_SET_xp == null || choice_XP_SET_xp == "") {
      return
  } else {
      option_xp_set = choice_XP_SET_xp
  };
  await sync.async_set("xp", choice_XP_SET_xp);
  upgrades.init()
});

var option_xp_get = ""
$("#exploits_xp_set_btn").click(async function() {
  let choice_XP_GET_xp = int(prompt("How much XP do you want to get?", option_xp_get));
  if (choice_XP_GET_xp == null || choice_XP_GET_xp == "") {
      return
  } else {
    option_xp_get = choice_XP_GET_xp
  };
  await sync.async_get("xp", upgrades.xp + choice_XP_GET_xp);
  upgrades.init()
});

var option_levels_play = ""
$("#exploits_levels_play_btn").click(async function() {
  let choice_LEVELS_play = prompt("Which level do you want to play?", option_levels_play);
  if (choice_LEVELS_play == null || choice_LEVELS_play == "") {
      return
  } else {
      option_levels_play = [choice_LEVELS_play]
  };
  state.set("playing", {
      map_id: map_info[option_levels_play - 1].id
  })
});

