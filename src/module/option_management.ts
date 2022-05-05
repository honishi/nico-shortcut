export const fullscreenKeys = "fullscreenKeys"
export const commentKeys = "commentKeys"

export const defaultFullscreenKey = "F"
export const defaultCommentKey = "c"

const allKeys = [
    fullscreenKeys,
    commentKeys,
]

export const loadKeyMap = (callback: (keyMap: { [key: string]: string }) => void) => {
    chrome.storage.local.get(
        allKeys,
        (items) => callback(items));
}

export const saveKeyMap = (keyMap: { [key: string]: string }) => {
    chrome.storage.local.set(keyMap, () => null)
}

export const clearKeyMap = (callback: () => void) => {
    chrome.storage.local.clear(callback)
}