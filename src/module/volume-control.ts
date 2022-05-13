import { buttonToggleState, clickElement, clickSelector } from "./common-utility";
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

export function checkVolumeControlKey(key: string, options: Options) {
  if (isKeyMatched(key, showVolumeKeys, options)) {
    showVolumeNotification();
  } else if (isKeyMatched(key, muteKeys, options)) {
    clickSelector("button[class^='___mute-button___']");
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

function clickPlayer() {
  const div = document.querySelector("div[class^='___player-controller___']");
  clickElement(div);
}

function dispatchKeyEventToPlayer(key: string, keyCode: number) {
  clickPlayer();

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

function isMute(): boolean {
  return buttonToggleState("___volume-setting___", "___mute-button___");
}

function volumeValue(): string {
  const div = document.querySelector("div[class^='___volume-size-control___']");
  const span = div?.querySelector("span[class^='___slider___']");
  return span?.getAttribute("data-value") ?? "";
}
