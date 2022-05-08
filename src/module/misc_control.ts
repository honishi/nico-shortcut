import {clickSelector} from "./common_utility";
import {showNotification} from "./notification_utility";
import {fullscreenKeys, isKeyMatched, Options, reloadKeys, settingKeys} from "./option_management";
import {fullscreenTitle, reloadTitle, settingTitle} from "./shortcut_title";

export const checkMiscControlKey = (key: string, options: Options) => {
    if (isKeyMatched(key, fullscreenKeys, options)) {
        clickSelector("button[class^='___fullscreen-button___']")
        showNotification(fullscreenTitle)
    } else if (isKeyMatched(key, reloadKeys, options)) {
        clickSelector("button[class^='___reload-button___']")
        showNotification(reloadTitle)
    } else if (isKeyMatched(key, settingKeys, options)) {
        clickSelector("button[class*='___setting-button___']")
        showNotification(settingTitle)
    }
}