import {clickElement} from "./common_utility";
import {showNotification} from "./notification_utility";
import {
    advertiseKeys,
    giftKeys,
    isKeyMatched,
    Options,
    openCommunityKeys,
    openUserKeys,
    programsKeys
} from "./option_management";
import {advertiseTitle, giftTitle, openCommunityTitle, openUserTitle, programsTitle} from "./shortcut_title";

export const checkPageControlKey = (key: string, options: Options) => {
    if (isKeyMatched(key, programsKeys, options)) {
        clickPrograms()
        showNotification(programsTitle)
    } else if (isKeyMatched(key, advertiseKeys, options)) {
        toggleAd()
        showNotification(advertiseTitle)
    } else if (isKeyMatched(key, giftKeys, options)) {
        toggleGift()
        showNotification(giftTitle)
    } else if (isKeyMatched(key, openUserKeys, options)) {
        openUserPage()
        showNotification(openUserTitle)
    } else if (isKeyMatched(key, openCommunityKeys, options)) {
        openCommunity()
        showNotification(openCommunityTitle)
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