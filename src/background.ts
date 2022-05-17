import { SemVer } from "semver";
import { handleMessage } from "./module/handle-message";
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
  const needsClearOptions =
    // Any kinds of version up.
    current.compare(previous) === 1 &&
    // Any Updates from v0.2.x & v0.1.x.
    previous < new SemVer("0.3.0");

  if (needsClearOptions) {
    // TODO: Clear Options.
    console.log("// TODO: Clear Options.");
  } else {
    console.log("No need to clear options.");
  }
  if (isMajorOrMinorUpdate) {
    // TODO: Open Release Notes.
    console.log("// TODO: Open Release Notes.");
    chrome.tabs.create({ url: "https://example.com" }, () => null);
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
