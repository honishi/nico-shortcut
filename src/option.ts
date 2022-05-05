const alertMessageKey = 'keyAlertMessage'
const messageInputId = "input_message"
const saveButtonId = "save_button"

const save = () => {
    const input = document.getElementById(messageInputId) as HTMLInputElement
    const value = input.value
    chrome.storage.local.set({keyAlertMessage: value}, () => null)
}

const load = () => {
    const input = document.getElementById(messageInputId) as HTMLInputElement
    chrome.storage.local.get(
        alertMessageKey,
        (items) => {
            input.value = items[alertMessageKey] ?? "Not set"
        });
}

const addEventListeners = () => {
    document.addEventListener('DOMContentLoaded', () => {
        load()
        document.getElementById(saveButtonId)?.addEventListener('click', save)
    })
}

addEventListeners()