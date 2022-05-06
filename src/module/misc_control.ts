import {clickSelector} from "./common_utility";
import {showNotification} from "./notification_utility";
import {fullscreenKeys, isKeyMatched, KeyMap, reloadKeys, settingKeys} from "./option_management";
import {fullscreenTitle, reloadTitle, settingTitle} from "./shortcut_title";

export const checkMiscControlKey = (key: string, keyMap: KeyMap) => {
    if (isKeyMatched(key, fullscreenKeys, keyMap)) {
        clickSelector("button[class^='___fullscreen-button___']")
        showNotification(fullscreenTitle)
    } else if (isKeyMatched(key, reloadKeys, keyMap)) {
        clickSelector("button[class^='___reload-button___']")
        showNotification(reloadTitle)
    } else if (isKeyMatched(key, settingKeys, keyMap)) {
        clickSelector("button[class*='___setting-button___']")
        showNotification(settingTitle)
    }
}