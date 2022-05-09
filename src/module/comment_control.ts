import {buttonToggleState, clickMenuButton, clickSelector} from "./common_utility";
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
    commentTransparencyNoneTitle,
    commentTransparencyStrongTitle,
    commentTransparencyWeakTitle
} from "./shortcut_title";

export function checkCommentControlKey(key: string, options: Options) {
    if (isKeyMatched(key, commentKeys, options)) {
        clickSelector("button[class^='___comment-button___']")
        showNotification(`💬 コメント${isCommentEnabled() ? "表示" : "非表示"}`)
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

function isCommentEnabled(): boolean {
    return buttonToggleState(
        "___addon-controller___",
        "___comment-button___")
}

function changeCommentTransparency(buttonIndex: number) {
    clickMenuButton(
        '___comment-transparency-menu-button-field___',
        '___comment-transparency-select-menu___',
        buttonIndex)
}