import {clickSelector} from "./common_utility";
import {showNotification} from "./notification_utility";
import {fullscreenKeys, isKeyMatched, KeyMap} from "./option_management";

export const checkMiscControlKey = (keyMap: KeyMap, key: string) => {
    if (isKeyMatched(key, fullscreenKeys, keyMap)) {
        clickSelector("button[class^='___fullscreen-button___']")
        showNotification('📺️ フルスクリーン')
    }
    switch (key) {
        case 'R':
            clickSelector("button[class^='___reload-button___']")
            showNotification('🔁 更新')
            break
        case ',':
            clickSelector("button[class*='___setting-button___']")
            showNotification('⚙️ 設定')
            break
        default:
            break
    }
}