import {clickSelector} from "./common_utility";
import {showNotification} from "./notification_utility";
import {fullscreenKeys, isKeyMatched, KeyMap, reloadKeys, settingKeys} from "./option_management";

export const checkMiscControlKey = (key: string, keyMap: KeyMap) => {
    if (isKeyMatched(key, fullscreenKeys, keyMap)) {
        clickSelector("button[class^='___fullscreen-button___']")
        showNotification('📺️ フルスクリーン')
    } else if (isKeyMatched(key, reloadKeys, keyMap)) {
        clickSelector("button[class^='___reload-button___']")
        showNotification('🔁 更新')
    } else if (isKeyMatched(key, settingKeys, keyMap)) {
        clickSelector("button[class*='___setting-button___']")
        showNotification('⚙️ 設定')
    }
}