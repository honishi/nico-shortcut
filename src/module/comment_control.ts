import {showPopup} from "./notification_utility";
import {clickMenuButton, clickSelector} from "./element_utility";

export const checkCommentControlKey = (key: string) => {
    switch (key) {
        case 'c':
            showPopup('💬 コメント On/Off')
            clickSelector("button[class^='___comment-button___']")
            break
        case 'z':
            showPopup('💬 コメント透過: なし')
            changeCommentTransparency(1)
            break
        case 'x':
            showPopup('💬 コメント透過: 弱')
            changeCommentTransparency(2)
            break
        case 'v':
            showPopup('💬 コメント透過: 強')
            changeCommentTransparency(3)
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