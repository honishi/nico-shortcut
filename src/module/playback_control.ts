import {clickMenuButton, clickSelector} from "./common_utility";
import {showNotification} from "./notification_utility";
import {
    fastForwardKeys,
    isKeyMatched,
    KeyMap,
    playHeadKeys,
    playLiveKeys,
    playRate025Keys,
    playRate050Keys,
    playRate075Keys,
    playRate100Keys,
    playRate125Keys,
    playRate150Keys,
    playRate175Keys,
    playRate200Keys,
    playStopKeys,
    rewindKeys
} from "./option_management";

export const checkPlaybackControlKey = (key: string, keyMap: KeyMap) => {
    if (isKeyMatched(key, playStopKeys, keyMap)) {
        clickSelector("button[class^='___play-button___']")
        showNotification('⏯ 再生 / 停止')
    } else if (isKeyMatched(key, rewindKeys, keyMap)) {
        clickSelector("button[class^='___back-button___']")
        showNotification('⏪ 巻き戻し 10s')
    } else if (isKeyMatched(key, fastForwardKeys, keyMap)) {
        clickSelector("button[class^='___forward-button___']")
        showNotification('⏩ 早送り 10s')
    } else if (isKeyMatched(key, playHeadKeys, keyMap)) {
        clickSelector("button[class^='___head-button___']")
        showNotification('⏮ 先頭')
    } else if (isKeyMatched(key, playLiveKeys, keyMap)) {
        clickSelector("button[class^='___live-button___']")
        showNotification('⏭ ライブ再生')
    } else if (isKeyMatched(key, playRate200Keys, keyMap)) {
        changePlaybackRate(1)
        showNotification('🚀 再生速度 x2.0')
    } else if (isKeyMatched(key, playRate175Keys, keyMap)) {
        changePlaybackRate(2)
        showNotification('🚀 再生速度  x1.75')
    } else if (isKeyMatched(key, playRate150Keys, keyMap)) {
        changePlaybackRate(3)
        showNotification('🐇 再生速度 x1.5')
    } else if (isKeyMatched(key, playRate125Keys, keyMap)) {
        changePlaybackRate(4)
        showNotification('🐇 再生速度 x1.25')
    } else if (isKeyMatched(key, playRate100Keys, keyMap)) {
        changePlaybackRate(5)
        showNotification('🐇 再生速度 x1.0')
    } else if (isKeyMatched(key, playRate075Keys, keyMap)) {
        changePlaybackRate(6)
        showNotification('🐢 再生速度 x0.75')
    } else if (isKeyMatched(key, playRate050Keys, keyMap)) {
        changePlaybackRate(7)
        showNotification('🐢 再生速度 x0.5')
    } else if (isKeyMatched(key, playRate025Keys, keyMap)) {
        changePlaybackRate(8)
        showNotification('🐢 再生速度 x0.25')
    }
}

const changePlaybackRate = (buttonIndex: number) => {
    clickMenuButton(
        '___video-playback-rate-menu-button-field___',
        '___video-playback-rate-select-menu___',
        buttonIndex)
}
