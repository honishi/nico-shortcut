import { showNotification } from "./notification-utility";
import {
  fastForwardKeys,
  isKeyMatched,
  Options,
  playHeadKeys,
  playLiveKeys,
  playRate025Keys,
  playRate050Keys,
  playRate075Keys,
  playRate100Keys,
  playRate125Keys,
  playRate150Keys,
  playRate175Keys,
  playRate200Keys,
  playStopKeys,
  rewindKeys,
} from "./option-management";
import {
  changePlaybackRate,
  getBackButton,
  getForwardButton,
  getHeadButton,
  getLiveButton,
  getPlayButton,
  isPlaying,
} from "./page-controller";
import {
  fastForwardTitle,
  playHeadTitle,
  playLiveTitle,
  playRate025Title,
  playRate050Title,
  playRate075Title,
  playRate100Title,
  playRate125Title,
  playRate150Title,
  playRate175Title,
  playRate200Title,
  rewindTitle,
} from "./shortcut-title";

export function checkPlaybackControlKey(key: string, options: Options) {
  if (isKeyMatched(key, playStopKeys, options)) {
    getPlayButton()?.click();
    // Seems slight delay is needed to pick up proper play/stop state.
    setTimeout(() => showNotification(`${isPlaying() ? "▶ 再生" : "⏸ 停止"}`), 300);
  } else if (isKeyMatched(key, rewindKeys, options)) {
    getBackButton()?.click();
    showNotification(rewindTitle);
  } else if (isKeyMatched(key, fastForwardKeys, options)) {
    getForwardButton()?.click();
    showNotification(fastForwardTitle);
  } else if (isKeyMatched(key, playHeadKeys, options)) {
    getHeadButton()?.click();
    showNotification(playHeadTitle);
  } else if (isKeyMatched(key, playLiveKeys, options)) {
    getLiveButton()?.click();
    showNotification(playLiveTitle);
  } else if (isKeyMatched(key, playRate200Keys, options)) {
    changePlaybackRate(1);
    showNotification(playRate200Title);
  } else if (isKeyMatched(key, playRate175Keys, options)) {
    changePlaybackRate(2);
    showNotification(playRate175Title);
  } else if (isKeyMatched(key, playRate150Keys, options)) {
    changePlaybackRate(3);
    showNotification(playRate150Title);
  } else if (isKeyMatched(key, playRate125Keys, options)) {
    changePlaybackRate(4);
    showNotification(playRate125Title);
  } else if (isKeyMatched(key, playRate100Keys, options)) {
    changePlaybackRate(5);
    showNotification(playRate100Title);
  } else if (isKeyMatched(key, playRate075Keys, options)) {
    changePlaybackRate(6);
    showNotification(playRate075Title);
  } else if (isKeyMatched(key, playRate050Keys, options)) {
    changePlaybackRate(7);
    showNotification(playRate050Title);
  } else if (isKeyMatched(key, playRate025Keys, options)) {
    changePlaybackRate(8);
    showNotification(playRate025Title);
  }
}
