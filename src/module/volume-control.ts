import { showNotification } from "./notification-utility";
import {
  extraVolumeDownKeys,
  extraVolumeUpKeys,
  isKeyMatched,
  maximizeVolumeWhenPageLoaded,
  muteKeys,
  Options,
  showVolumeKeys,
  showVolumeWhenPageLoaded,
  volumeDownKeys,
  volumeUpKeys,
} from "./option-management";
import { getMuteButton, getPlayer, isMute, volumeValue } from "./page-controller";

const arrowUpButtonMaximizeClickCount = 20; // 20 * 5% = 100%
const arrowUpDownButtonMultiClickCount = 4;

export function checkVolumeControlKey(key: string, options: Options) {
  if (isKeyMatched(key, showVolumeKeys, options)) {
    showVolumeNotification();
  } else if (isKeyMatched(key, muteKeys, options)) {
    getMuteButton()?.click();
    showNotification(`${isMute() ? "🔇 ミュート" : "🔈 ミュート解除"}`);
  } else if (isKeyMatched(key, volumeDownKeys, options)) {
    clickArrowDown();
    showVolumeUpDownNotification();
  } else if (isKeyMatched(key, volumeUpKeys, options)) {
    clickArrowUp();
    showVolumeUpDownNotification();
  } else if (isKeyMatched(key, extraVolumeDownKeys, options)) {
    clickArrowDownMultipleTimes(arrowUpDownButtonMultiClickCount, showVolumeUpDownNotification);
  } else if (isKeyMatched(key, extraVolumeUpKeys, options)) {
    clickArrowUpMultipleTimes(arrowUpDownButtonMultiClickCount, showVolumeUpDownNotification);
  }
}

export function maximizeVolumeIfEnabled(options: Options, callback: () => void) {
  if (options[maximizeVolumeWhenPageLoaded] === true) {
    clickArrowUpMultipleTimes(arrowUpButtonMaximizeClickCount, callback);
  } else {
    callback();
  }
}

export function showVolumeIfEnabled(options: Options) {
  if (!(options[showVolumeWhenPageLoaded] === true)) return;
  showVolumeNotification();
}

function showVolumeNotification() {
  showNotification(`${isMute() ? "🔇" : "🔈"} ボリューム: ${volumeValue()}`, 2000);
}

function showVolumeUpDownNotification() {
  showNotification(`🔈 ボリューム: ${volumeValue()}`);
}

function clickArrowDown() {
  dispatchKeyEventToPlayer("ArrowDown", 40);
}

function clickArrowUp() {
  dispatchKeyEventToPlayer("ArrowUp", 38);
}

function dispatchKeyEventToPlayer(key: string, keyCode: number) {
  getPlayer()?.click();

  // https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent/keyCode
  window.dispatchEvent(
    new KeyboardEvent("keydown", {
      key,
      keyCode,
      code: key,
      which: keyCode,
    })
  );
}

function clickArrowDownMultipleTimes(count: number, callback: () => void) {
  clickArrowMultipleTimes(clickArrowDown, count, callback);
}

function clickArrowUpMultipleTimes(count: number, callback: () => void) {
  clickArrowMultipleTimes(clickArrowUp, count, callback);
}

function clickArrowMultipleTimes(clickMethod: () => void, count: number, callback: () => void) {
  clickMethod();
  if (count <= 1) {
    callback();
    return;
  }
  setTimeout(() => clickArrowMultipleTimes(clickMethod, count - 1, callback), 20);
}
