chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    console.log(sender)

    let command, param
    [command, param] = message.split(',')
    switch (command) {
        case 'open_url':
            openUserPage(param)
            break
        case 'xxx':
            // moveToTab()
            break
        default:
            break
    }
    sendResponse("response from background.")
})

const openUserPage = (url) => {
    chrome.tabs.create({
        url: url,
    }, () => {
    })
}

const moveToTab = () => {
    chrome.system.display.getInfo((results) => {
        console.log(results)
        const info = results[0]
        const height = info.bounds.height
        const width = info.bounds.width
        // https://github.com/hukurouo/popupWindow/blob/master/background.js
        chrome.tabs.query({active: true}, tab => { // getCurrent(tab => {
            // 現タブを閉じて、
            console.log(tab)
            console.log(tab[0].id)
            chrome.tabs.remove(tab[0].id)
            // 新たにポップアップウィンドウでURLを開く
            chrome.windows.create({
                url: tab[0].url,
                type: 'normal',
                width: width / 3, height: height / 2,
                focused: true
            }, () => {
            })
        })
    })
}