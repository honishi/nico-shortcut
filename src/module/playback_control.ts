import {clickMenuButton, clickSelector} from "./common_utility";
import {showNotification} from "./notification_utility";

export const checkPlaybackControlKey = (key: string) => {
    switch (key) {
        case 'k':
            clickSelector("button[class^='___play-button___']")
            showNotification('⏯ 再生 / 停止')
            break
        case 'j':
            clickSelector("button[class^='___back-button___']")
            showNotification('⏪ 巻き戻し 10s')
            break
        case 'l':
            clickSelector("button[class^='___forward-button___']")
            showNotification('⏩ 早送り 10s')
            break
        case 'h':
            clickSelector("button[class^='___head-button___']")
            showNotification('⏮ 先頭')
            break
        case ';':
            clickSelector("button[class^='___live-button___']")
            showNotification('⏭ ライブ再生')
            break
        case 'd':
            changePlaybackRate(5)
            showNotification('🐇 再生速度 x1.0')
            break
        case 'r':
            changePlaybackRate(4)
            showNotification('🐇 再生速度 x1.25')
            break
        case 'f':
            changePlaybackRate(3)
            showNotification('🐇 再生速度 x1.5')
            break
        case 't':
            changePlaybackRate(2)
            showNotification('🚀 再生速度  x1.75')
            break
        case 'g':
            changePlaybackRate(1)
            showNotification('🚀 再生速度 x2.0')
            break
        case 's':
            changePlaybackRate(6)
            showNotification('🐢 再生速度 x0.75')
            break
        case 'w':
            changePlaybackRate(7)
            showNotification('🐢 再生速度 x0.5')
            break
        case 'a':
            changePlaybackRate(8)
            showNotification('🐢 再生速度 x0.25')
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
