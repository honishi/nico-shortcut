import {showNotification} from "./notification_utility";
import {clickSelector} from "./common_utility";

export const checkMiscControlKey = (key: string) => {
    switch (key) {
        case 'F':
            clickSelector("button[class^='___fullscreen-button___']")
            showNotification('📺️ フルスクリーン')
            break
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
