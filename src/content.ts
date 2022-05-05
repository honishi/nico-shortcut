import {checkCommentControlKey} from "./module/comment_control";
import {isInputActive} from "./module/common_utility";
import {checkHelpControlKey} from "./module/help_control";
import {checkMiscControlKey} from "./module/misc_control";
import {checkPageControlKey} from "./module/page_control";
import {checkPlaybackControlKey} from "./module/playback_control";
import {checkVolumeControlKey} from "./module/volume_control";

const handleKeyEvent = (event: KeyboardEvent) => {
    const key = event.key
    console.log(key)
    if (isInputActive()) return
    checkPlaybackControlKey(key)
    checkCommentControlKey(key)
    checkVolumeControlKey(key)
    checkMiscControlKey(key)
    checkPageControlKey(key)
    checkHelpControlKey(key)
}

// https://stackoverflow.com/a/71567874/13220031
window.addEventListener('keydown', handleKeyEvent)