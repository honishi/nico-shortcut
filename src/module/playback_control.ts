import {buttonToggleState, clickMenuButton, clickSelector} from "./common_utility";
import {showNotification} from "./notification_utility";
import {
    fastForwardKeys,
    isKeyMatched,
    Options,
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
    rewindTitle
} from "./shortcut_title";

export function checkPlaybackControlKey(key: string, options: Options) {
    if (isKeyMatched(key, playStopKeys, options)) {
        clickSelector("button[class^='___play-button___']")
        // Seems slight delay is needed to pick up proper play/stop state.
        setTimeout(
            () => showNotification(`${isPlaying() ? "▶ 再生" : "⏸ 停止"}`),
            300)
    } else if (isKeyMatched(key, rewindKeys, options)) {
        clickSelector("button[class^='___back-button___']")
        showNotification(rewindTitle)
    } else if (isKeyMatched(key, fastForwardKeys, options)) {
        clickSelector("button[class^='___forward-button___']")
        showNotification(fastForwardTitle)
    } else if (isKeyMatched(key, playHeadKeys, options)) {
        clickSelector("button[class^='___head-button___']")
        showNotification(playHeadTitle)
    } else if (isKeyMatched(key, playLiveKeys, options)) {
        clickSelector("button[class^='___live-button___']")
        showNotification(playLiveTitle)
    } else if (isKeyMatched(key, playRate200Keys, options)) {
        changePlaybackRate(1)
        showNotification(playRate200Title)
    } else if (isKeyMatched(key, playRate175Keys, options)) {
        changePlaybackRate(2)
        showNotification(playRate175Title)
    } else if (isKeyMatched(key, playRate150Keys, options)) {
        changePlaybackRate(3)
        showNotification(playRate150Title)
    } else if (isKeyMatched(key, playRate125Keys, options)) {
        changePlaybackRate(4)
        showNotification(playRate125Title)
    } else if (isKeyMatched(key, playRate100Keys, options)) {
        changePlaybackRate(5)
        showNotification(playRate100Title)
    } else if (isKeyMatched(key, playRate075Keys, options)) {
        changePlaybackRate(6)
        showNotification(playRate075Title)
    } else if (isKeyMatched(key, playRate050Keys, options)) {
        changePlaybackRate(7)
        showNotification(playRate050Title)
    } else if (isKeyMatched(key, playRate025Keys, options)) {
        changePlaybackRate(8)
        showNotification(playRate025Title)
    }
}

function isPlaying(): boolean {
    return buttonToggleState(
        "___control-area___",
        "___play-button___")
}

function changePlaybackRate(buttonIndex: number) {
    clickMenuButton(
        '___video-playback-rate-menu-button-field___',
        '___video-playback-rate-select-menu___',
        buttonIndex)
}
