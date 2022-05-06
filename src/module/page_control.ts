import {clickElement} from "./common_utility";
import {showNotification} from "./notification_utility";
import {
    advertiseKeys,
    giftKeys,
    isKeyMatched,
    KeyMap,
    openCommunityKeys,
    openUserKeys,
    programsKeys
} from "./option_management";

export const checkPageControlKey = (key: string, keyMap: KeyMap) => {
    if (isKeyMatched(key, programsKeys, keyMap)) {
        clickPrograms()
        showNotification('👨‍👩‍👦 フォロー中の番組')
    } else if (isKeyMatched(key, advertiseKeys, keyMap)) {
        toggleAd()
        showNotification('📣 広告')
    } else if (isKeyMatched(key, giftKeys, keyMap)) {
        toggleGift()
        showNotification('🎁 ギフト Open/Close')
    } else if (isKeyMatched(key, openUserKeys, keyMap)) {
        openUserPage()
        showNotification('🙆‍♂️ ユーザーを開く')
    } else if (isKeyMatched(key, openCommunityKeys, keyMap)) {
        openCommunity()
        showNotification('🏠 コミュニティを開く')
    }
}

const clickPrograms = () => {
    const div = document.querySelector("div[class^='___popup-control___']")
    const button = div?.querySelector("button")
    clickElement(button)
}

const toggleAd = () => {
    toggleMenu('___nicoad-count-item___')
}

const toggleGift = () => {
    toggleMenu('___gift-count-item___')
}

const toggleMenu = (name: string) => {
    console.log(`li[class^='${name}']`)
    const li = document.querySelector(`li[class^='${name}']`)
    const button = ((): Element | null => li == null ?
            document.querySelector("button[class^='___close-button___']") :
            li.querySelector("button")
    )()
    clickElement(button)
}

const openUserPage = () => {
    const url = document
        .querySelector("a[class^='___user-name___']")
        ?.getAttribute("href")
    sendOpenUrlMessage(url)
}

const openCommunity = () => {
    const url = document
        .querySelector("a[class^='___name-label___']")
        ?.getAttribute("href")
    sendOpenUrlMessage(url)
}

const sendOpenUrlMessage = (url: string | null | undefined) => {
    if (url == null) return
    chrome.runtime.sendMessage(
        ['open_url', url].join(','),
        (response) => console.log(response)
    )
}