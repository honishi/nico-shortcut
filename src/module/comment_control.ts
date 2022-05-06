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
import {
    commentTitle,
    commentTransparencyNoneTitle,
    commentTransparencyStrongTitle,
    commentTransparencyWeakTitle
} from "./shortcut_title";

export const checkCommentControlKey = (key: string, keyMap: KeyMap) => {
    if (isKeyMatched(key, commentKeys, keyMap)) {
        clickSelector("button[class^='___comment-button___']")
        showNotification(commentTitle)
    } else if (isKeyMatched(key, commentTransparencyNoneKeys, keyMap)) {
        changeCommentTransparency(1)
        showNotification(commentTransparencyNoneTitle)
    } else if (isKeyMatched(key, commentTransparencyWeakKeys, keyMap)) {
        changeCommentTransparency(2)
        showNotification(commentTransparencyWeakTitle)
    } else if (isKeyMatched(key, commentTransparencyStrongKeys, keyMap)) {
        changeCommentTransparency(3)
        showNotification(commentTransparencyStrongTitle)
    }
}

const changeCommentTransparency = (buttonIndex: number) => {
    clickMenuButton(
        '___comment-transparency-menu-button-field___',
        '___comment-transparency-select-menu___',
        buttonIndex)
}