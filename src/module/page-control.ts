import {
  getAdButton,
  getCommonHeader,
  getCommunityPageUrl,
  getGiftButton,
  getNicosapoGadgets,
  getPlayerDisplay,
  getProgramsButton,
  getUserPageUrl,
  setWindowOffset,
} from "./dom-utility";
import { showNotification } from "./notification-utility";
import {
  advertiseKeys,
  giftKeys,
  isKeyMatched,
  openCommunityKeys,
  openUserKeys,
  Options,
  programsKeys,
} from "./option-management";
import {
  advertiseTitle,
  giftTitle,
  openCommunityTitle,
  openUserTitle,
  programsTitle,
} from "./shortcut-title";

export function checkPageControlKey(key: string, options: Options) {
  if (isKeyMatched(key, programsKeys, options)) {
    getProgramsButton()?.click();
    showNotification(programsTitle);
  } else if (isKeyMatched(key, advertiseKeys, options)) {
    getAdButton()?.click();
    showNotification(advertiseTitle);
  } else if (isKeyMatched(key, giftKeys, options)) {
    getGiftButton()?.click();
    showNotification(giftTitle);
  } else if (isKeyMatched(key, openUserKeys, options)) {
    sendOpenUrlMessage(getUserPageUrl());
    showNotification(openUserTitle);
  } else if (isKeyMatched(key, openCommunityKeys, options)) {
    sendOpenUrlMessage(getCommunityPageUrl());
    showNotification(openCommunityTitle);
  }
}

export function adjustPlayerPositionIfEnabled() {
  const headerRect = getCommonHeader()?.getBoundingClientRect();
  const nicosapoHeight = getNicosapoGadgets()?.getBoundingClientRect().height ?? 0;
  const playerRect = getPlayerDisplay()?.getBoundingClientRect();
  if (headerRect == null || playerRect == null) return;
  setWindowOffset(playerRect.x, playerRect.y - headerRect.height - nicosapoHeight);
}

function sendOpenUrlMessage(url: string | null | undefined) {
  if (url == null) return;
  chrome.runtime.sendMessage(["open_url", url].join(","), (response) => console.log(response));
}
