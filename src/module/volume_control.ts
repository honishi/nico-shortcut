import {showNotification} from "./notification_utility";
import {clickElement, clickSelector} from "./common_utility";

export const checkVolumeControlKey = (key: string) => {
    switch (key) {
        case 'm':
            clickSelector("button[class^='___mute-button___']")
            showNotification('🔈 ミュート On/Off')
            break
        case 'u':
            dispatchKeyEventToPlayer("ArrowDown", 40)
            showNotification(`🔈 ボリューム小 (${volumeDataValue()})`)
            break
        case 'i':
            dispatchKeyEventToPlayer("ArrowUp", 38)
            showNotification(`🔈 ボリューム大 (${volumeDataValue()})`)
            break
        default:
            break
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