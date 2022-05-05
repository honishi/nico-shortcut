import {showNotification} from "./notification_utility";
import {clickMenuButton, clickSelector} from "./common_utility";

export const checkCommentControlKey = (key: string) => {
    switch (key) {
        case 'c':
            clickSelector("button[class^='___comment-button___']")
            showNotification('💬 コメント On/Off')
            break
        case 'z':
            changeCommentTransparency(1)
            showNotification('💬 コメント透過: なし')
            break
        case 'x':
            changeCommentTransparency(2)
            showNotification('💬 コメント透過: 弱')
            break
        case 'v':
            changeCommentTransparency(3)
            showNotification('💬 コメント透過: 強')
            break
        default:
            break
    }
}

const changeCommentTransparency = (buttonIndex: number) => {
    clickMenuButton(
        '___comment-transparency-menu-button-field___',
        '___comment-transparency-select-menu___',
        buttonIndex)
}