const openOptionButtonId = "button_open_option"

const addEventListeners = () => {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById(openOptionButtonId)?.addEventListener('click', () => {
            chrome.runtime.openOptionsPage(() => null)
        })
    })
}

addEventListeners()