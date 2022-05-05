import {clickMenuButton, clickSelector} from "./element_utility";
import {showPopup} from "./notification_utility";

export const checkPlaybackControlKey = (key: string) => {
    switch (key) {
        case 'k':
            showPopup('⏯ 再生 / 停止')
            clickSelector("button[class^='___play-button___']")
            break
        case 'j':
            showPopup('⏪ 巻き戻し 10s')
            clickSelector("button[class^='___back-button___']")
            break
        case 'l':
            showPopup('⏩ 早送り 10s')
            clickSelector("button[class^='___forward-button___']")
            break
        case 'h':
            showPopup('⏮ 先頭')
            clickSelector("button[class^='___head-button___']")
            break
        case ';':
            showPopup('⏭ ライブ再生')
            clickSelector("button[class^='___live-button___']")
            break
        case 'd':
            showPopup('🐇 再生速度 x1.0')
            changePlaybackRate(5)
            break
        case 'r':
            showPopup('🐇 再生速度 x1.25')
            changePlaybackRate(4)
            break
        case 'f':
            showPopup('🐇 再生速度 x1.5')
            changePlaybackRate(3)
            break
        case 't':
            showPopup('🚀 再生速度  x1.75')
            changePlaybackRate(2)
            break
        case 'g':
            showPopup('🚀 再生速度 x2.0')
            changePlaybackRate(1)
            break
        case 's':
            showPopup('🐢 再生速度 x0.75')
            changePlaybackRate(6)
            break
        case 'w':
            showPopup('🐢 再生速度 x0.5')
            changePlaybackRate(7)
            break
        case 'a':
            showPopup('🐢 再生速度 x0.25')
            changePlaybackRate(8)
            break
        default:
            break
    }
}

const changePlaybackRate = (buttonIndex: number) => {
    clickMenuButton(
        '___video-playback-rate-menu-button-field___',
        '___video-playback-rate-select-menu___',
        buttonIndex)
}
