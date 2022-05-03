// https://stackoverflow.com/a/71567874/13220031
window.addEventListener('keypress', function (key) {
    console.log(key.key)
    switch (key.key) {
        case 'o':
            clickSelector("button[class^='___comment-button___']")
            break
        case 'p':
            clickSelector("button[class^='___play-button___']")
            break
        case 'h':
            clickSelector("button[class^='___back-button___']")
            break
        case 'l':
            clickSelector("button[class^='___forward-button___']")
            break
        case 'f':
            clickSelector("button[class^='___fullscreen-button___']")
            break
        case 'r':
            clickSelector("button[class^='___reload-button___']")
            break
        case ',':
            clickSelector("button[class*='___setting-button___']")
            break
        case 'H':
            clickSelector("button[class^='___head-button___']")
            break
        case 'm':
            clickSelector("button[class^='___mute-button___']")
            break
        case 'j':
            inputKey("ArrowDown")
            break
        case 'k':
            inputKey("ArrowUp")
            break
        case '1':
            changePlaybackRate(5)
            break
        case '2':
            changePlaybackRate(4)
            break
        case '3':
            changePlaybackRate(3)
            break
        case '4':
            changePlaybackRate(2)
            break
        case '5':
            changePlaybackRate(1)
            break
        case '!':
            changePlaybackRate(5)
            break
        case '@':
            changePlaybackRate(6)
            break
        case '#':
            changePlaybackRate(7)
            break
        case '$':
            changePlaybackRate(8)
            break
        case 'z':
            changeCommentTransparency(1)
            break
        case 'x':
            changeCommentTransparency(2)
            break
        case 'c':
            changeCommentTransparency(3)
            break
        case 'a':
            toggleAd()
            break
        case 'g':
            toggleGift()
            break
        default:
            break
    }

    chrome.runtime.sendMessage(null, key.key, (response) => {
        console.log("Sent key value: " + response)
    })
})

const clickSelector = (selector) => {
    document.querySelector(selector).click()
}

const changeCommentTransparency = (buttonIndex) => {
    clickMenuButton(
        '___comment-transparency-menu-button-field___',
        '___comment-transparency-select-menu___',
        buttonIndex)
}

const changePlaybackRate = (buttonIndex) => {
    clickMenuButton(
        '___video-playback-rate-menu-button-field___',
        '___video-playback-rate-select-menu___',
        buttonIndex)
}

const clickMenuButton = (divClass, sectionClass, buttonIndex) => {
    const timeout = 500
    document.querySelector("button[class*='___setting-button___']").click()
    setTimeout(() => {
        const div = document.querySelector(`div[class^=${divClass}]`)
        const button = div.querySelector('button')
        button.click()

        setTimeout(() => {
            const section = document.querySelector(`section[class^=${sectionClass}]`)
            const buttons = section.querySelectorAll('button')
            buttons[buttonIndex].click()

            setTimeout(() => {
                document.querySelector("button[class*='___setting-button___']").click()
            }, timeout)
        }, timeout)
    }, timeout)
}

const inputKey = (key) => {
    document.dispatchEvent(new KeyboardEvent("keydown", {
        key: key,
        keyCode: 40, // example values.
        code: "ArrowDown", // put everything you need in this object.
        which: 40,
        shiftKey: false, // you don't need to include values
        ctrlKey: false,  // if you aren't going to use them.
        metaKey: false   // these are here for example's sake.
    }))

    // var keyboardEvent = document.createEvent('KeyboardEvent')
    // var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent'
    //
    // keyboardEvent[initMethod](
    //     'keydown', // event type: keydown, keyup, keypress
    //     true, // bubbles
    //     true, // cancelable
    //     window, // view: should be window
    //     false, // ctrlKey
    //     false, // altKey
    //     false, // shiftKey
    //     false, // metaKey
    //     code, // keyCode: unsigned long - the virtual key code, else 0
    //     0, // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
    // )
    // document.dispatchEvent(keyboardEvent)
}

const toggleAd = () => {
    toggleMenu('___nicoad-count-item___')
}

const toggleGift = () => {
    toggleMenu('___gift-count-item___')
}

const toggleMenu = (name) => {
    console.log(`li[class^='${name}']`)
    const li = document.querySelector(`li[class^='${name}']`)
    if (li == null) {
        const button = document.querySelector("button[class^='___close-button___']")
        button.click()
    } else {
        const button = li.querySelector("button")
        button.click()
    }
}