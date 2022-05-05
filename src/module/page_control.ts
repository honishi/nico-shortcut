import {showNotification} from "./notification_utility";
import {clickElement} from "./common_utility";

export const checkPageControlKey = (key: string) => {
    switch (key) {
        case 'A':
            toggleAd()
            showNotification('📣 広告')
            break
        case 'G':
            toggleGift()
            showNotification('🎁 ギフト Open/Close')
            break
        case 'U':
            openUserPage()
            showNotification('🙆‍♂️ ユーザーを開く')
            break
        case 'C':
            openCommunity()
            showNotification('🏠 コミュニティを開く')
            break
        default:
            break
    }
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
    const selector = li == null ? "button[class^='___close-button___']" : "button"
    const button = document.querySelector(selector)
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