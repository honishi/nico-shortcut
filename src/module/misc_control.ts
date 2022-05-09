import {buttonToggleState, clickSelector} from "./common_utility";
import {showNotification} from "./notification_utility";
import {fullscreenKeys, isKeyMatched, Options, reloadKeys, settingKeys} from "./option_management";
import {reloadTitle, settingTitle} from "./shortcut_title";

export function checkMiscControlKey(key: string, options: Options) {
    if (isKeyMatched(key, fullscreenKeys, options)) {
        clickSelector("button[class^='___fullscreen-button___']")
        showNotification(`🖥 フルスクリーン${isFullscreenEnabled() ? "" : "解除"}`)
    } else if (isKeyMatched(key, reloadKeys, options)) {
        clickSelector("button[class^='___reload-button___']")
        showNotification(reloadTitle)
    } else if (isKeyMatched(key, settingKeys, options)) {
        clickSelector("button[class*='___setting-button___']")
        showNotification(settingTitle)
    }
}

function isFullscreenEnabled(): boolean {
    return buttonToggleState(
        "___addon-controller___",
        "___fullscreen-button___")
}