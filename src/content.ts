import {checkCommentControlKey} from "./module/comment_control";
import {isInputActive} from "./module/common_utility";
import {checkHelpControlKey} from "./module/help_control";
import {checkMiscControlKey} from "./module/misc_control";
import {loadOptions} from "./module/option_management";
import {checkPageControlKey} from "./module/page_control";
import {checkPlaybackControlKey} from "./module/playback_control";
import {checkVolumeControlKey, showVolume} from "./module/volume_control";

const listenLoadAndFocusEvent = (event: Event) => {
    loadOptions((options) => {
        showVolume(options)
    })
}

const listenKeyEvent = (event: KeyboardEvent) => {
    const key = event.key
    console.log(key)
    if (isInputActive()) return
    loadOptions((options) => {
        checkPlaybackControlKey(key, options)
        checkCommentControlKey(key, options)
        checkVolumeControlKey(key, options)
        checkMiscControlKey(key, options)
        checkPageControlKey(key, options)
        checkHelpControlKey(key, options)
    })
}

['load', 'focus'].forEach(
    (type) => window.addEventListener(type, listenLoadAndFocusEvent)
)
// https://stackoverflow.com/a/71567874/13220031
window.addEventListener('keydown', listenKeyEvent)