import {clickElement, clickSelector} from "./common_utility";
import {showNotification} from "./notification_utility";
import {isKeyMatched, KeyMap, muteKeys, volumeDownKeys, volumeUpKeys} from "./option_management";
import {muteTitle, volumeDownTitle, volumeUpTitle} from "./shortcut_title";

export const checkVolumeControlKey = (key: string, keyMap: KeyMap) => {
    if (isKeyMatched(key, muteKeys, keyMap)) {
        clickSelector("button[class^='___mute-button___']")
        showNotification(muteTitle)
    } else if (isKeyMatched(key, volumeDownKeys, keyMap)) {
        dispatchKeyEventToPlayer("ArrowDown", 40)
        showNotification(`${volumeDownTitle} (${volumeDataValue()})`)
    } else if (isKeyMatched(key, volumeUpKeys, keyMap)) {
        dispatchKeyEventToPlayer("ArrowUp", 38)
        showNotification(`${volumeUpTitle} (${volumeDataValue()})`)
    }
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

const volumeDataValue = () => {
    const div = document.querySelector("div[class^='___volume-size-control___']")
    const span = div?.querySelector("span[class^='___slider___']")
    return span?.getAttribute("data-value") ?? ""
}