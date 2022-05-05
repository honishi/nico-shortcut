import {showPopup} from "./notification_utility";
import {clickElement} from "./element_utility";

export const checkPageControlKey = (key: string) => {
    switch (key) {
        case 'A':
            showPopup('📣 広告')
            toggleAd()
            break
        case 'G':
            showPopup('🎁 ギフト Open/Close')
            toggleGift()
            break
        case 'U':
            showPopup('🙆‍♂️ ユーザーを開く')
            openUserPage()
            break
        case 'C':
            showPopup('🏠 コミュニティを開く')
            openCommunity()
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
    if (li == null) {
        const button = document.querySelector("button[class^='___close-button___']")
        clickElement(button)
    } else {
        const button = li.querySelector("button")
        clickElement(button)
    }
}

const openUserPage = () => {
    const url = document
        .querySelector("a[class^='___user-name___']")
        ?.getAttribute("href")
    if (url == null) return
    chrome.runtime.sendMessage(
        'open_url,' + url,
        (response) => {
            console.log("Sent key value: " + response)
        })
}

const openCommunity = () => {
    const url = document
        .querySelector("a[class^='___name-label___']")
        ?.getAttribute("href")
    if (url == null) return
    chrome.runtime.sendMessage(
        'open_url,' + url,
        (response) => {
            console.log("Sent key value: " + response)
        })
}