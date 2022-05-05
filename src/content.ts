import {isInputActive} from "./module/element_utility";
import {checkPlaybackControlKey} from "./module/playback_control";
import {checkCommentControlKey} from "./module/comment_control";
import {checkVolumeControlKey} from "./module/volume_control";
import {checkPageControlKey} from "./module/page_control";
import {checkHelpControlKey} from "./module/help_control";

const handleKeyEvent = (event: KeyboardEvent) => {
    const key = event.key
    console.log(key)
    if (isInputActive()) return
    checkPlaybackControlKey(key)
    checkCommentControlKey(key)
    checkVolumeControlKey(key)
    checkPageControlKey(key)
    checkHelpControlKey(key)
}

// https://stackoverflow.com/a/71567874/13220031
window.addEventListener('keydown', handleKeyEvent)