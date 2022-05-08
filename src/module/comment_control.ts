import {clickMenuButton, clickSelector} from "./common_utility";
import {showNotification} from "./notification_utility";
import {
    commentKeys,
    commentTransparencyNoneKeys,
    commentTransparencyStrongKeys,
    commentTransparencyWeakKeys,
    isKeyMatched,
    Options
} from "./option_management";
import {
    commentTitle,
    commentTransparencyNoneTitle,
    commentTransparencyStrongTitle,
    commentTransparencyWeakTitle
} from "./shortcut_title";

export const checkCommentControlKey = (key: string, options: Options) => {
    if (isKeyMatched(key, commentKeys, options)) {
        clickSelector("button[class^='___comment-button___']")
        showNotification(commentTitle)
    } else if (isKeyMatched(key, commentTransparencyNoneKeys, options)) {
        changeCommentTransparency(1)
        showNotification(commentTransparencyNoneTitle)
    } else if (isKeyMatched(key, commentTransparencyWeakKeys, options)) {
        changeCommentTransparency(2)
        showNotification(commentTransparencyWeakTitle)
    } else if (isKeyMatched(key, commentTransparencyStrongKeys, options)) {
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