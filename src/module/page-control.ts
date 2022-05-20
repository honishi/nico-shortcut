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
  adjustPlayerPositionKeys,
  advertiseKeys,
  giftKeys,
  isKeyMatched,
  openCommunityKeys,
  openUserKeys,
  Options,
  programsKeys,
} from "./option-management";
import {
  adjustPlayerPositionTitle,
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
  } else if (isKeyMatched(key, adjustPlayerPositionKeys, options)) {
    adjustPlayerPosition();
    showNotification(adjustPlayerPositionTitle);
  }
}

export function adjustPlayerPosition() {
  const headerRect = getCommonHeader()?.getBoundingClientRect();
  const nicosapoHeight = getNicosapoGadgets()?.getBoundingClientRect().height ?? 0;
  const playerRect = getPlayerDisplay()?.getBoundingClientRect();
  if (headerRect == null || playerRect == null) return;
  const x = playerRect.x + window.scrollX;
  const y = playerRect.top - headerRect.height - nicosapoHeight + window.scrollY;
  console.log(`x: ${x} playerRect.x: ${playerRect.x} window.scrollX: ${window.scrollX}`);
  console.log(
    `y: ${y} headerRect.height: ${headerRect.height} nicosapoHeight: ${nicosapoHeight} window.scrollY: ${window.scrollY}`
  );
  setWindowOffset(x, y);
}

function sendOpenUrlMessage(url: string | null | undefined) {
  if (url == null) return;
  chrome.runtime.sendMessage(["open_url", url].join(","), (response) => console.log(response));
}
