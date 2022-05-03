chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    console.log(sender)
    if (message === 'q') {
        moveToTab()
    } else {
        sendResponse("Received message in background!!")
    }
})

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
            }, () => {})
        })
    })
}