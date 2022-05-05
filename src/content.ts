import {checkCommentControlKey} from "./module/comment_control";
import {isInputActive} from "./module/common_utility";
import {checkHelpControlKey} from "./module/help_control";
import {checkMiscControlKey} from "./module/misc_control";
import {loadKeyMap} from "./module/option_management";
import {checkPageControlKey} from "./module/page_control";
import {checkPlaybackControlKey} from "./module/playback_control";
import {checkVolumeControlKey} from "./module/volume_control";

const listenKeyEvent = (event: KeyboardEvent) => {
    const key = event.key
    console.log(key)
    if (isInputActive()) return
    loadKeyMap((keyMap) => {
        checkPlaybackControlKey(key)
        checkCommentControlKey(key)
        checkVolumeControlKey(key)
        checkMiscControlKey(keyMap, key)
        checkPageControlKey(key)
        checkHelpControlKey(key)
    })
}

// https://stackoverflow.com/a/71567874/13220031
window.addEventListener('keydown', listenKeyEvent)