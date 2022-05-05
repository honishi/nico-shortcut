import {showPopup} from "./notification_utility";
import {clickElement, clickSelector} from "./element_utility";

export const checkVolumeControlKey = (key: string) => {
    switch (key) {
        case 'm':
            showPopup('🔈 ミュート On/Off')
            clickSelector("button[class^='___mute-button___']")
            break
        case 'u':
            dispatchKeyEventToPlayer("ArrowDown", 40)
            showPopup(`🔈 ボリューム小 (${volumeDataValue()})`)
            break
        case 'i':
            dispatchKeyEventToPlayer("ArrowUp", 38)
            showPopup(`🔈 ボリューム大 (${volumeDataValue()})`)
            break
        default:
            break
    }
}

const clickBody = () => {
    const div = document.querySelector("div[class^='___player-controller___']")
    clickElement(div)
}

const dispatchKeyEventToPlayer = (key: string, keyCode: number) => {
    clickBody()

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