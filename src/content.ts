import Swal from 'sweetalert2'
import Notiflix from "notiflix";

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
            showPopup('⏪ 巻き戻し 10s')
            clickSelector("button[class^='___back-button___']")
            break
        case 'l':
            showPopup('⏩ 早送り 10s')
            clickSelector("button[class^='___forward-button___']")
            break
        case 'h':
            showPopup('⏮ 先頭')
            clickSelector("button[class^='___head-button___']")
            break
        case ';':
            showPopup('⏭ ライブ再生')
            clickSelector("button[class^='___live-button___']")
            break
        case 'F':
            showPopup('📺️ フルスクリーン')
            clickSelector("button[class^='___fullscreen-button___']")
            break
        case 'R':
            showPopup('🔁 更新')
            clickSelector("button[class^='___reload-button___']")
            break
        case ',':
            showPopup('⚙️ 設定')
            clickSelector("button[class*='___setting-button___']")
            break
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
        case 'd':
            showPopup('🐇 再生速度 x1.0')
            changePlaybackRate(5)
            break
        case 'r':
            showPopup('🐇 再生速度 x1.25')
            changePlaybackRate(4)
            break
        case 'f':
            showPopup('🐇 再生速度 x1.5')
            changePlaybackRate(3)
            break
        case 't':
            showPopup('🚀 再生速度  x1.75')
            changePlaybackRate(2)
            break
        case 'g':
            showPopup('🚀 再生速度 x2.0')
            changePlaybackRate(1)
            break
        case 's':
            showPopup('🐢 再生速度 x0.75')
            changePlaybackRate(6)
            break
        case 'w':
            showPopup('🐢 再生速度 x0.5')
            changePlaybackRate(7)
            break
        case 'a':
            showPopup('🐢 再生速度 x0.25')
            changePlaybackRate(8)
            break
        case 'z':
            showPopup('💬 コメント透過: なし')
            changeCommentTransparency(1)
            break
        case 'x':
            showPopup('💬 コメント透過: 弱')
            changeCommentTransparency(2)
            break
        case 'v':
            showPopup('💬 コメント透過: 強')
            changeCommentTransparency(3)
            break
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
        case '?':
            showHelp()
            break
        default:
            break
    }
})

const isInputActive = () => {
    // console.log(document.activeElement)
    return document.activeElement?.tagName === "INPUT"
}

const clickBody = () => {
    const div = document.querySelector("div[class^='___player-controller___']")
    clickElement(div)
}

const clickSelector = (selector: any) => {
    document.querySelector(selector).click()
}

const changeCommentTransparency = (buttonIndex: number) => {
    clickMenuButton(
        '___comment-transparency-menu-button-field___',
        '___comment-transparency-select-menu___',
        buttonIndex)
}

const changePlaybackRate = (buttonIndex: number) => {
    clickMenuButton(
        '___video-playback-rate-menu-button-field___',
        '___video-playback-rate-select-menu___',
        buttonIndex)
}

const clickElement = (element: Element | null | undefined) => {
    if (!(element instanceof HTMLElement)) {
        return
    }
    element.click()
}

const clickMenuButton = (divClass: string, sectionClass: string, buttonIndex: number) => {
    const timeout = 300
    const button = document.querySelector("button[class*='___setting-button___']")
    clickElement(button)
    setTimeout(() => {
        const div = document.querySelector(`div[class^=${divClass}]`)
        const button = div?.querySelector('button')
        clickElement(button)

        setTimeout(() => {
            const section = document.querySelector(`section[class^=${sectionClass}]`)
            const buttons = section?.querySelectorAll('button')
            if (buttons == null) return
            clickElement(buttons[buttonIndex])

            setTimeout(() => {
                const button = document.querySelector("button[class*='___setting-button___']")
                clickElement(button)
            }, timeout)
        }, timeout)
    }, timeout)
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

const showPopup = (text: string) => {
    // https://github.com/notiflix/Notiflix
    Notiflix.Notify.info(
        text,
        {
            width: '380px',
            position: 'center-center',
            zindex: 100000,
            timeout: 500,
            useIcon: false,
            distance: '50px',
            fontSize: '36px',
            showOnlyTheLastOne: true,
            className: 'notiflix-nico-shortcut',
            info: {
                background: '#fff',
                textColor: '#333',
            }
        },
    )
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

const showHelp = () => {
    Swal.fire({
        title: 'Nico Shortcut',
        html: '<table style="margin-left:auto; margin-right:auto; border-collapse: collapse; border-spacing: 0;">\n' +
            '<tr><th style="padding: 0 50px;">キー</th><th style="padding: 0 130px;">機能</th></tr>\n' +
            '<tr style="background: #ddd;"><td>c</td><td style="text-align: left;">💬 コメント On/Off</td></tr>\n' +
            '<tr style="background: #fff;"><td>k</td><td style="text-align: left;">⏯ 再生 / 停止</td></tr>\n' +
            '<tr style="background: #ddd;"><td>j</td><td style="text-align: left;">⏪ 巻き戻し 10s</td></tr>\n' +
            '<tr style="background: #fff;"><td>l</td><td style="text-align: left;">⏩ 早送り 10s</td></tr>\n' +
            '<tr style="background: #ddd;"><td>h</td><td style="text-align: left;">⏮ 先頭</td></tr>\n' +
            '<tr style="background: #fff;"><td>;</td><td style="text-align: left;">⏭ ライブ再生</td></tr>\n' +
            '<tr style="background: #ddd;"><td>F</td><td style="text-align: left;">📺️ フルスクリーン</td></tr>\n' +
            '<tr style="background: #fff;"><td>R</td><td style="text-align: left;">🔁 更新</td></tr>\n' +
            '<tr style="background: #ddd;"><td>,</td><td style="text-align: left;">⚙️ 設定</td></tr>\n' +
            '<tr style="background: #fff;"><td>m</td><td style="text-align: left;">🔈 ミュート On/Off</td></tr>\n' +
            '<tr style="background: #ddd;"><td>u</td><td style="text-align: left;">🔈 ボリューム小</td></tr>\n' +
            '<tr style="background: #fff;"><td>i</td><td style="text-align: left;">🔈 ボリューム大</td></tr>\n' +
            '<tr style="background: #ddd;"><td>g</td><td style="text-align: left;">🚀 再生速度 x2.0</td></tr>\n' +
            '<tr style="background: #fff;"><td>t</td><td style="text-align: left;">🚀 再生速度 x1.75</td></tr>\n' +
            '<tr style="background: #ddd;"><td>f</td><td style="text-align: left;">🐇 再生速度 x1.5</td></tr>\n' +
            '<tr style="background: #fff;"><td>r</td><td style="text-align: left;">🐇 再生速度 x1.25</td></tr>\n' +
            '<tr style="background: #ddd;"><td>d</td><td style="text-align: left;">🐇 再生速度 x1.0</td></tr>\n' +
            '<tr style="background: #fff;"><td>s</td><td style="text-align: left;">🐢 再生速度 x0.75</td></tr>\n' +
            '<tr style="background: #ddd;"><td>w</td><td style="text-align: left;">🐢 再生速度 x0.5</td></tr>\n' +
            '<tr style="background: #fff;"><td>a</td><td style="text-align: left;">🐢 再生速度 x0.25</td></tr>\n' +
            '<tr style="background: #ddd;"><td>z</td><td style="text-align: left;">💬 コメント透過: なし</td></tr>\n' +
            '<tr style="background: #fff;"><td>x</td><td style="text-align: left;">💬 コメント透過: 弱</td></tr>\n' +
            '<tr style="background: #ddd;"><td>v</td><td style="text-align: left;">💬 コメント透過: 強</td></tr>\n' +
            '<tr style="background: #fff;"><td>A</td><td style="text-align: left;">📣 広告</td></tr>\n' +
            '<tr style="background: #ddd;"><td>G</td><td style="text-align: left;">🎁 ギフト Open/Close</td></tr>\n' +
            '<tr style="background: #fff;"><td>U</td><td style="text-align: left;">🙆‍♂️ ユーザーを開く</td></tr>\n' +
            '<tr style="background: #ddd;"><td>C</td><td style="text-align: left;">🏠 コミュニティを開く</td></tr>\n' +
            '<tr style="background: #fff;"><td>?</td><td style="text-align: left;">❓ ヘルプ (この画面)</td></tr>\n' +
            '</table>',
        confirmButtonText: '閉じる'
    })
}
