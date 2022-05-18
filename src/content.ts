import { checkCommentControlKey } from "./module/comment-control";
import { isInputFieldActive } from "./module/dom-utility";
import { checkHelpControlKey } from "./module/help-control";
import { checkMiscControlKey } from "./module/misc-control";
import { loadOptions } from "./module/option-management";
import { checkPageControlKey } from "./module/page-control";
import { checkPlaybackControlKey } from "./module/playback-control";
import {
  checkVolumeControlKey,
  maximizeVolumeIfEnabled,
  showVolumeIfEnabled,
} from "./module/volume-control";

function listenLoadEvent() {
  loadOptions((options) => {
    maximizeVolumeIfEnabled(options, () => {
      showVolumeIfEnabled(options);
    });
  });
}

function listenFocusEvent() {
  loadOptions((options) => {
    showVolumeIfEnabled(options);
  });
}

function listenKeyEvent(event: KeyboardEvent) {
  const key = event.key;
  console.log(key);
  if (isInputFieldActive()) return;
  loadOptions((options) => {
    checkPlaybackControlKey(key, options);
    checkCommentControlKey(key, options);
    checkVolumeControlKey(key, options);
    checkMiscControlKey(key, options);
    checkPageControlKey(key, options);
    checkHelpControlKey(key, options);
  });
}

window.addEventListener("load", listenLoadEvent);
window.addEventListener("focus", listenFocusEvent);
window.addEventListener("keydown", listenKeyEvent);
