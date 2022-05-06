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
import {
    fastForwardTitle,
    playHeadTitle,
    playLiveTitle,
    playRate025Title,
    playRate050Title,
    playRate075Title,
    playRate100Title,
    playRate125Title,
    playRate150Title,
    playRate175Title,
    playRate200Title,
    playStopTitle,
    rewindTitle
} from "./shortcut_title";

export const checkPlaybackControlKey = (key: string, keyMap: KeyMap) => {
    if (isKeyMatched(key, playStopKeys, keyMap)) {
        clickSelector("button[class^='___play-button___']")
        showNotification(playStopTitle)
    } else if (isKeyMatched(key, rewindKeys, keyMap)) {
        clickSelector("button[class^='___back-button___']")
        showNotification(rewindTitle)
    } else if (isKeyMatched(key, fastForwardKeys, keyMap)) {
        clickSelector("button[class^='___forward-button___']")
        showNotification(fastForwardTitle)
    } else if (isKeyMatched(key, playHeadKeys, keyMap)) {
        clickSelector("button[class^='___head-button___']")
        showNotification(playHeadTitle)
    } else if (isKeyMatched(key, playLiveKeys, keyMap)) {
        clickSelector("button[class^='___live-button___']")
        showNotification(playLiveTitle)
    } else if (isKeyMatched(key, playRate200Keys, keyMap)) {
        changePlaybackRate(1)
        showNotification(playRate200Title)
    } else if (isKeyMatched(key, playRate175Keys, keyMap)) {
        changePlaybackRate(2)
        showNotification(playRate175Title)
    } else if (isKeyMatched(key, playRate150Keys, keyMap)) {
        changePlaybackRate(3)
        showNotification(playRate150Title)
    } else if (isKeyMatched(key, playRate125Keys, keyMap)) {
        changePlaybackRate(4)
        showNotification(playRate125Title)
    } else if (isKeyMatched(key, playRate100Keys, keyMap)) {
        changePlaybackRate(5)
        showNotification(playRate100Title)
    } else if (isKeyMatched(key, playRate075Keys, keyMap)) {
        changePlaybackRate(6)
        showNotification(playRate075Title)
    } else if (isKeyMatched(key, playRate050Keys, keyMap)) {
        changePlaybackRate(7)
        showNotification(playRate050Title)
    } else if (isKeyMatched(key, playRate025Keys, keyMap)) {
        changePlaybackRate(8)
        showNotification(playRate025Title)
    }
}

const changePlaybackRate = (buttonIndex: number) => {
    clickMenuButton(
        '___video-playback-rate-menu-button-field___',
        '___video-playback-rate-select-menu___',
        buttonIndex)
}
