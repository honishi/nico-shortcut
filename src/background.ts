import { SemVer } from "semver";
import { releaseNoteUrl } from "./module/constant";
import { handleMessage } from "./module/handle-message";
import { clearOptions } from "./module/option-management";
/* eslint-disable no-undef */
import InstalledDetails = chrome.runtime.InstalledDetails;
import OnInstalledReason = chrome.runtime.OnInstalledReason;

/* eslint-enable no-undef */

function listenOnInstalled(details: InstalledDetails) {
  console.log(`Got onInstalled event. (${new Date()})`);
  console.log(details);
  if (details.reason === OnInstalledReason.INSTALL) {
    handleFirstInstall();
  } else if (details.reason === OnInstalledReason.UPDATE) {
    handleUpdateInstall(details);
  }
}

function handleFirstInstall() {
  // No-op.
  const _current = chrome.runtime.getManifest().version;
  const current = new SemVer(_current);
  console.log(`This is a first [${current}] install!`);
}

function handleUpdateInstall(details: InstalledDetails) {
  const _previous = details.previousVersion;
  const _current = chrome.runtime.getManifest().version;
  if (_previous === null) return;

  const previous = new SemVer(_previous!);
  const current = new SemVer(_current);
  console.log(`Updated from [${previous}] to [${current}]!`);

  const isMajorOrMinorUpdate = current.major > previous.major || current.minor > previous.minor;
  /* eslint-disable camelcase */
  const v0_3_0 = new SemVer("0.3.0");
  const needsClearOptions =
    // Any Updates from [v0.2.x or earlier] to [v0.3.0 or later].
    previous < v0_3_0 && current >= v0_3_0;
  /* eslint-enable camelcase */

  if (needsClearOptions) {
    console.log("Need to clear options...");
    clearOptions(() => console.log("Completed to clear options."));
  } else {
    console.log("No need to clear options.");
  }
  if (isMajorOrMinorUpdate) {
    // TODO: Open Release Notes.
    console.log("// TODO: Open Release Notes.");
    chrome.tabs.create({ url: releaseNoteUrl }, () => null);
  } else {
    console.log("No need to open release notes.");
  }
}

function listenOnMessage(message: any, sender: any, sendResponse: any) {
  console.log(message);
  handleMessage(message);
  sendResponse("response from background.");
}

chrome.runtime.onInstalled.addListener(listenOnInstalled);
chrome.runtime.onMessage.addListener(listenOnMessage);
