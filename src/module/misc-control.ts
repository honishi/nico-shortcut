import { showNotification } from "./notification-utility";
import {
  fullscreenKeys,
  isKeyMatched,
  Options,
  reloadKeys,
  settingKeys,
} from "./option-management";
import {
  getFullscreenButton,
  getReloadButton,
  getSettingButton,
  isFullscreenEnabled,
} from "./dom-utility";
import { reloadTitle, settingTitle } from "./shortcut-title";

export function checkMiscControlKey(key: string, options: Options) {
  if (isKeyMatched(key, fullscreenKeys, options)) {
    const fullscreenButton = getFullscreenButton();
    if (fullscreenButton == null) return;
    const wasFullscreenEnabled = isFullscreenEnabled();
    const expectedIsFullscreenEnabled = !wasFullscreenEnabled;
    fullscreenButton.click();
    showNotification(`🖥 フルスクリーン${expectedIsFullscreenEnabled ? "" : "解除"}`);
  } else if (isKeyMatched(key, reloadKeys, options)) {
    getReloadButton()?.click();
    showNotification(reloadTitle);
  } else if (isKeyMatched(key, settingKeys, options)) {
    getSettingButton()?.click();
    showNotification(settingTitle);
  }
}
