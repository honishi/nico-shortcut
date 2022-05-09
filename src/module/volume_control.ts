import {buttonToggleState, clickElement, clickSelector} from "./common_utility";
import {showNotification} from "./notification_utility";
import {
    isKeyMatched,
    muteKeys,
    Options,
    showVolumeWhenPageLoaded,
    volumeDownKeys,
    volumeUpKeys
} from "./option_management";
import {volumeDownTitle, volumeUpTitle} from "./shortcut_title";

export const checkVolumeControlKey = (key: string, options: Options) => {
    if (isKeyMatched(key, muteKeys, options)) {
        clickSelector("button[class^='___mute-button___']")
        showNotification(`${isMute() ? "🔇 ミュート" : "🔈 ミュート解除"}`)
    } else if (isKeyMatched(key, volumeDownKeys, options)) {
        dispatchKeyEventToPlayer("ArrowDown", 40)
        showNotification(`${volumeDownTitle}: ${volumeValue()}`)
    } else if (isKeyMatched(key, volumeUpKeys, options)) {
        dispatchKeyEventToPlayer("ArrowUp", 38)
        showNotification(`${volumeUpTitle}: ${volumeValue()}`)
    }
}

export const showVolume = (options: Options) => {
    if (!(options[showVolumeWhenPageLoaded] == true)) return
    showNotification(
        `${isMute() ? "🔇 ミュート," : "🔈"} ボリューム: ${volumeValue()}`,
        500,
        2000)
}

const clickPlayer = () => {
    const div = document.querySelector("div[class^='___player-controller___']")
    clickElement(div)
}

const dispatchKeyEventToPlayer = (key: string, keyCode: number) => {
    clickPlayer()

    // https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent/keyCode
    window.dispatchEvent(new KeyboardEvent("keydown", {
        key: key,
        keyCode: keyCode,
        code: key,
        which: keyCode,
    }))
}

const isMute = (): boolean =>
    buttonToggleState(
        "___volume-setting___",
        "___mute-button___")

const volumeValue = (): string => {
    const div = document.querySelector("div[class^='___volume-size-control___']")
    const span = div?.querySelector("span[class^='___slider___']")
    return span?.getAttribute("data-value") ?? ""
}