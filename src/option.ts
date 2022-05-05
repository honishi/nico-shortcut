import {
    clearKeyMap,
    commentKeys, defaultCommentKey,
    defaultFullscreenKey,
    fullscreenKeys,
    loadKeyMap,
    saveKeyMap
} from "./module/option_management";

const fullscreenKeysInputId = "input_fullscreen_keys"
const commentKeysInputId = "input_comment_keys"
const restoreDefaultButtonId = "button_restore_default"
const saveButtonId = "button_save"

const save = () => {
    const keyMap = {
        fullscreenKeys: getInputValue(fullscreenKeysInputId),
        commentKeys: getInputValue(commentKeysInputId),
    }
    saveKeyMap(keyMap)
}

const load = () => {
    loadKeyMap((keyMap) => {
        setInputValue(fullscreenKeysInputId, keyMap[fullscreenKeys] ?? defaultFullscreenKey)
        setInputValue(commentKeysInputId, keyMap[commentKeys] ?? defaultCommentKey)
    })
}

const clear = () => {
    clearKeyMap(() => load())
}

const setInputValue = (elementId: string, value: string) => {
    const input = document.getElementById(elementId) as HTMLInputElement
    input.value = value
}

const getInputValue = (elementId: string): string => {
    const input = document.getElementById(elementId) as HTMLInputElement
    return input.value
}

const addEventListeners = () => {
    document.addEventListener('DOMContentLoaded', () => {
        load()
        document.getElementById(restoreDefaultButtonId)?.addEventListener('click', clear)
        document.getElementById(saveButtonId)?.addEventListener('click', save)
    })
}

addEventListeners()