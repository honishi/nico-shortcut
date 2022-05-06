import {clickMenuButton, clickSelector} from "./common_utility";
import {showNotification} from "./notification_utility";
import {
    commentKeys,
    commentTransparencyNoneKeys,
    commentTransparencyStrongKeys,
    commentTransparencyWeakKeys,
    isKeyMatched,
    KeyMap
} from "./option_management";

export const checkCommentControlKey = (key: string, keyMap: KeyMap) => {
    if (isKeyMatched(key, commentKeys, keyMap)) {
        clickSelector("button[class^='___comment-button___']")
        showNotification('💬 コメント On/Off')
    } else if (isKeyMatched(key, commentTransparencyNoneKeys, keyMap)) {
        changeCommentTransparency(1)
        showNotification('💬 コメント透過: なし')
    } else if (isKeyMatched(key, commentTransparencyWeakKeys, keyMap)) {
        changeCommentTransparency(2)
        showNotification('💬 コメント透過: 弱')
    } else if (isKeyMatched(key, commentTransparencyStrongKeys, keyMap)) {
        changeCommentTransparency(3)
        showNotification('💬 コメント透過: 強')
    }
}

const changeCommentTransparency = (buttonIndex: number) => {
    clickMenuButton(
        '___comment-transparency-menu-button-field___',
        '___comment-transparency-select-menu___',
        buttonIndex)
}