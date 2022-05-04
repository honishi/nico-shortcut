// https://stackoverflow.com/a/71567874/13220031
window.addEventListener('keydown', function (key) {
    // console.log(key)
    console.log(key.key)
    // console.log(isBodyActive())
    if (isInputActive()) {
        return
    }
    switch (key.key) {
        case 'c':
            popup('💬 Comment On / Off')
            clickSelector("button[class^='___comment-button___']")
            break
        case 'k':
            popup('Play / Stop')
            clickSelector("button[class^='___play-button___']")
            break
        case 'j':
            popup('Back')
            clickSelector("button[class^='___back-button___']")
            break
        case 'l':
            popup('Forward')
            clickSelector("button[class^='___forward-button___']")
            break
        case 'f':
            popup('Fullscreen')
            clickSelector("button[class^='___fullscreen-button___']")
            break
        case 'r':
            popup('Reload')
            clickSelector("button[class^='___reload-button___']")
            break
        case ',':
            popup('Setting')
            clickSelector("button[class*='___setting-button___']")
            break
        case '0':
            popup('Head')
            clickSelector("button[class^='___head-button___']")
            break
        case ')':
            popup('Live')
            clickSelector("button[class^='___live-button___']")
            break
        case 'm':
            popup('Toggle Mute')
            clickSelector("button[class^='___mute-button___']")
            break
        case 'u':
            popup('Volume Down')
            dispatchKeyEventToPlayer("ArrowDown", 40)
            break
        case 'i':
            popup('Volume Up')
            dispatchKeyEventToPlayer("ArrowUp", 38)
            break
        case '1':
            popup('Playback Rate x 1.0')
            changePlaybackRate(5)
            break
        case '2':
            popup('Playback Rate x 1.25')
            changePlaybackRate(4)
            break
        case '3':
            popup('Playback Rate x 1.5')
            changePlaybackRate(3)
            break
        case '4':
            popup('Playback Rate x 1.75')
            changePlaybackRate(2)
            break
        case '5':
            popup('Playback Rate x 2.0')
            changePlaybackRate(1)
            break
        case '!':
            popup('Playback Rate x 1.0')
            changePlaybackRate(5)
            break
        case '@':
            popup('Playback Rate x 0.75')
            changePlaybackRate(6)
            break
        case '#':
            popup('Playback Rate x 0.5')
            changePlaybackRate(7)
            break
        case '$':
            popup('Playback Rate x 0.25')
            changePlaybackRate(8)
            break
        case 'q':
            popup('コメント透過: なし')
            changeCommentTransparency(1)
            break
        case 'a':
            popup('コメント透過: 弱')
            changeCommentTransparency(2)
            break
        case 'z':
            popup('コメント透過: 強')
            changeCommentTransparency(3)
            break
        case 'A':
            popup('広告')
            toggleAd()
            break
        case 'g':
            popup('ギフト')
            toggleGift()
            break
        default:
            break
    }

    // chrome.runtime.sendMessage(null, key.key, (response) => {
    //     console.log("Sent key value: " + response)
    // })
})

const isInputActive = () => {
    // console.log(document.activeElement)
    return document.activeElement.tagName === "INPUT"
}

const clickBody = () => {
    const div = document.querySelector("div[class^='___player-controller___']")
    div.click()
}

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

const dispatchKeyEventToPlayer = (key, keyCode) => {
    clickBody()

    // https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent/keyCode
    window.dispatchEvent(new KeyboardEvent("keydown", {
        key: key,
        keyCode: keyCode,
        code: key,
        which: keyCode,
    }))
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

const popup = (text) => {
    // https://github.com/notiflix/Notiflix
    Notiflix.Notify.info(
        text,
        {
            width: '380px',
            position: 'center-center',
            zindex: 100000,
            distance: '50px',
            fontSize: '30px',
            // messageMaxLength: 300,
            showOnlyTheLastOne: true,
        },
    )
    // // https://github.com/molloeduardo/creativa-popup
    // CreativaPopup.closeAll()
    // CreativaPopup.create(
    //     null,
    //     text,
    //     null,
    //     {
    //         timer: 1,
    //         closeButton: false,
    //         background: false,
    //         animationDuration: 300,
    //     })
}

const showHelp = () => {
    CreativaPopup.create(
        null,
        text,
        null,
        {
            timer: 1,
            closeButton: false,
            background: false,
            animationDuration: 300,
        })
}
