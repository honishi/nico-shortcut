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
  getAdButton,
  getCommunityPageUrl,
  getGiftButton,
  getProgramsButton,
  getUserPageUrl,
} from "./page-controller";
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

function sendOpenUrlMessage(url: string | null | undefined) {
  if (url == null) return;
  chrome.runtime.sendMessage(["open_url", url].join(","), (response) => console.log(response));
}
