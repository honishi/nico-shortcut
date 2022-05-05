import {clickSelector} from "./common_utility";
import {showNotification} from "./notification_utility";
import {defaultFullscreenKey, fullscreenKeys} from "./option_management";

export const checkMiscControlKey = (keyMap: { [key: string]: string }, key: string) => {
    if (checkKey(keyMap, fullscreenKeys, defaultFullscreenKey, key)) {
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

const checkKey = (
    keyMap: { [key: string]: string },
    mapKey: string,
    defaultKey: string,
    key: string
): boolean => [...(keyMap[mapKey] ?? defaultKey)].includes(key)