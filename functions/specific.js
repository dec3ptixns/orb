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