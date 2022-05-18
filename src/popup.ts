import { releaseNoteUrl } from "./module/constant";

const openOptionButtonId = "button_open_option";
const linkReleaseNoteId = "link_release_note";

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    const optionButton = document.getElementById(openOptionButtonId);
    optionButton?.addEventListener("click", () => {
      chrome.runtime.openOptionsPage(() => null);
    });
    const releaseNoteLink = document.getElementById(linkReleaseNoteId) as HTMLLinkElement;
    releaseNoteLink.href = releaseNoteUrl;
  });
}

addEventListeners();
