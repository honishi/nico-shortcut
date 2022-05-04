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
            showPopup('💬 コメント On/Off')
            clickSelector("button[class^='___comment-button___']")
            break
        case 'k':
            showPopup('⏯ 再生 / 停止')
            clickSelector("button[class^='___play-button___']")
            break
        case 'j':
            showPopup('⏩ 巻き戻し 10s')
            clickSelector("button[class^='___back-button___']")
            break
        case 'l':
            showPopup('⏪ 早送り 10s')
            clickSelector("button[class^='___forward-button___']")
            break
        case 'f':
            showPopup('📺️ フルスクリーン')
            clickSelector("button[class^='___fullscreen-button___']")
            break
        case 'r':
            showPopup('🔁 更新')
            clickSelector("button[class^='___reload-button___']")
            break
        case ',':
            showPopup('⚙️ 設定')
            clickSelector("button[class*='___setting-button___']")
            break
        case '0':
            showPopup('⏮ 先頭')
            clickSelector("button[class^='___head-button___']")
            break
        case ')':
            showPopup('⏭ ライブ再生')
            clickSelector("button[class^='___live-button___']")
            break
        case 'm':
            showPopup('🔈 ミュート On/Off')
            clickSelector("button[class^='___mute-button___']")
            break
        case 'u':
            showPopup('🔈 ボリューム小')
            dispatchKeyEventToPlayer("ArrowDown", 40)
            break
        case 'i':
            showPopup('🔈 ボリューム大')
            dispatchKeyEventToPlayer("ArrowUp", 38)
            break
        case '1':
            showPopup('🐇 再生速度 x1.0')
            changePlaybackRate(5)
            break
        case '2':
            showPopup('🐇 再生速度 x1.25')
            changePlaybackRate(4)
            break
        case '3':
            showPopup('🐇 再生速度 x1.5')
            changePlaybackRate(3)
            break
        case '4':
            showPopup('🐇 再生速度  x1.75')
            changePlaybackRate(2)
            break
        case '5':
            showPopup('🐇 再生速度 x2.0')
            changePlaybackRate(1)
            break
        case '!':
            showPopup('🐢 再生速度 x1.0')
            changePlaybackRate(5)
            break
        case '@':
            showPopup('🐢 再生速度 x0.75')
            changePlaybackRate(6)
            break
        case '#':
            showPopup('🐢 再生速度 x0.5')
            changePlaybackRate(7)
            break
        case '$':
            showPopup('🐢 再生速度 x0.25')
            changePlaybackRate(8)
            break
        case 'q':
            showPopup('💬 コメント透過: なし')
            changeCommentTransparency(1)
            break
        case 'a':
            showPopup('💬 コメント透過: 弱')
            changeCommentTransparency(2)
            break
        case 'z':
            showPopup('💬 コメント透過: 強')
            changeCommentTransparency(3)
            break
        case 'A':
            showPopup('📣 広告')
            toggleAd()
            break
        case 'g':
            showPopup('🎁 ギフト Open/Close')
            toggleGift()
            break
        case '?':
            showHelp()
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

const showPopup = (text) => {
    // https://github.com/notiflix/Notiflix
    Notiflix.Notify.info(
        text,
        {
            width: '380px',
            position: 'center-center',
            zindex: 100000,
            useIcon: false,
            distance: '50px',
            fontSize: '30px',
            // messageMaxLength: 300,
            showOnlyTheLastOne: true,
        },
    )
}

const showHelp = () => {
    Swal.fire({
        title: 'Nico shortcut',
        html: '<table style="margin-left:auto; margin-right:auto; border-collapse: collapse; border-spacing: 0;">\n' +
            '<tr><th style="padding: 0 50px;">キー</th><th style="padding: 0 100px;">機能</th></tr>\n' +
            '<tr style="background: #ddd;"><td>c</td><td style="text-align: left;">💬 コメント On/Off</td></tr>\n' +
            '<tr style="background: #fff;"><td>k</td><td style="text-align: left;">⏯ 再生 / 停止</td></tr>\n' +
            '<tr style="background: #ddd;"><td>j</td><td style="text-align: left;">⏩ 巻き戻し 10s</td></tr>\n' +
            '<tr style="background: #fff;"><td>l</td><td style="text-align: left;">⏪ 早送り 10s</td></tr>\n' +
            '<tr style="background: #ddd;"><td>f</td><td style="text-align: left;">📺️ フルスクリーン</td></tr>\n' +
            '<tr style="background: #fff;"><td>r</td><td style="text-align: left;">🔁 更新</td></tr>\n' +
            '<tr style="background: #ddd;"><td>,</td><td style="text-align: left;">⚙️ 設定</td></tr>\n' +
            '<tr style="background: #fff;"><td>0</td><td style="text-align: left;">⏮ 先頭</td></tr>\n' +
            '<tr style="background: #ddd;"><td>)</td><td style="text-align: left;">⏭ ライブ再生</td></tr>\n' +
            '<tr style="background: #fff;"><td>m</td><td style="text-align: left;">🔈 ミュート On/Off</td></tr>\n' +
            '<tr style="background: #ddd;"><td>u</td><td style="text-align: left;">🔈 ボリューム小</td></tr>\n' +
            '<tr style="background: #fff;"><td>i</td><td style="text-align: left;">🔈 ボリューム大</td></tr>\n' +
            '<tr style="background: #ddd;"><td>1</td><td style="text-align: left;">🐇 再生速度 x1.0</td></tr>\n' +
            '<tr style="background: #fff;"><td>2</td><td style="text-align: left;">🐇 再生速度 x1.25</td></tr>\n' +
            '<tr style="background: #ddd;"><td>3</td><td style="text-align: left;">🐇 再生速度 x1.5</td></tr>\n' +
            '<tr style="background: #fff;"><td>4</td><td style="text-align: left;">🐇 再生速度  x1.75</td></tr>\n' +
            '<tr style="background: #ddd;"><td>5</td><td style="text-align: left;">🐇 再生速度 x2.0</td></tr>\n' +
            '<tr style="background: #fff;"><td>@</td><td style="text-align: left;">🐢 再生速度 x0.75</td></tr>\n' +
            '<tr style="background: #ddd;"><td>#</td><td style="text-align: left;">🐢 再生速度 x0.5</td></tr>\n' +
            '<tr style="background: #fff;"><td>$</td><td style="text-align: left;">🐢 再生速度 x0.25</td></tr>\n' +
            '<tr style="background: #ddd;"><td>q</td><td style="text-align: left;">💬 コメント透過: なし</td></tr>\n' +
            '<tr style="background: #fff;"><td>a</td><td style="text-align: left;">💬 コメント透過: 弱</td></tr>\n' +
            '<tr style="background: #ddd;"><td>z</td><td style="text-align: left;">💬 コメント透過: 強</td></tr>\n' +
            '<tr style="background: #fff;"><td>A</td><td style="text-align: left;">📣 広告</td></tr>\n' +
            '<tr style="background: #ddd;"><td>g</td><td style="text-align: left;">🎁 ギフト Open/Close</td></tr>\n' +
            '<tr style="background: #fff;"><td>?</td><td style="text-align: left;">❓ ヘルプ (この画面)</td></tr>\n' +
            '</table>',
        confirmButtonText: '閉じる'
    })
}
