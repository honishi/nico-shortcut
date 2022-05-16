import { showNotification } from "./notification-utility";
import {
  isKeyMatched,
  muteKeys,
  Options,
  showVolumeKeys,
  showVolumeWhenPageLoaded,
  volumeDownKeys,
  volumeUpKeys,
} from "./option-management";
import { getMuteButton, getPlayer, isMute, volumeValue } from "./page-controller";

export function checkVolumeControlKey(key: string, options: Options) {
  if (isKeyMatched(key, showVolumeKeys, options)) {
    showVolumeNotification();
  } else if (isKeyMatched(key, muteKeys, options)) {
    getMuteButton()?.click();
    showNotification(`${isMute() ? "🔇 ミュート" : "🔈 ミュート解除"}`);
  } else if (isKeyMatched(key, volumeDownKeys, options)) {
    dispatchKeyEventToPlayer("ArrowDown", 40);
    showVolumeUpDownNotification();
  } else if (isKeyMatched(key, volumeUpKeys, options)) {
    dispatchKeyEventToPlayer("ArrowUp", 38);
    showVolumeUpDownNotification();
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
