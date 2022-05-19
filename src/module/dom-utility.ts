//
// Document Control
//
export function isInputFieldActive() {
  // console.log(document.activeElement)
  return document.activeElement?.tagName === "INPUT";
}

export function setWindowOffset(x: number, y: number) {
  window.scrollTo(x, y);
}

export function getCommonHeader(): HTMLElement | null {
  return document.querySelector("div[class^='___common-header___']") as HTMLElement;
}

export function getNicosapoGadgets(): HTMLElement | null {
  return document.getElementById("nicosapo_gadgets");
}

//
// Player Control
//
export function getPlayerDisplay(): HTMLElement | null {
  return document.querySelector("div[class^='___player-display___']") as HTMLElement;
}

export function getPlayerController(): HTMLElement | null {
  return document.querySelector("div[class^='___player-controller___']") as HTMLElement;
}

//
// Playback Control
//
export function getPlayButton(): HTMLButtonElement | null {
  return queryButton("button[class^='___play-button___']");
}

export function getBackButton(): HTMLButtonElement | null {
  return queryButton("button[class^='___back-button___']");
}

export function getForwardButton(): HTMLButtonElement | null {
  return queryButton("button[class^='___forward-button___']");
}

export function getHeadButton(): HTMLButtonElement | null {
  return queryButton("button[class^='___head-button___']");
}

export function getLiveButton(): HTMLButtonElement | null {
  return queryButton("button[class^='___live-button___']");
}

export function isPlaying(): boolean {
  return getPlayButton()?.isDataToggleStateTrue() ?? false;
}

//
// Multi-Click Back/Forward Button
//
export function clickButtonMultipleTimes(
  button: HTMLButtonElement | null,
  count: number,
  callback: () => void
) {
  button?.click();
  if (count <= 1) {
    callback();
    return;
  }
  setTimeout(() => clickButtonMultipleTimes(button, count - 1, callback), 30);
}

//
// Volume Control
//
export function getMuteButton(): HTMLButtonElement | null {
  return queryButton("button[class^='___mute-button___']");
}

export function isMute(): boolean {
  return getMuteButton()?.isDataToggleStateTrue() ?? false;
}

export function volumeValue(): string {
  const div = document.querySelector("div[class^='___volume-size-control___']");
  const span = div?.querySelector("span[class^='___slider___']");
  return span?.getAttribute("data-value") ?? "";
}

//
// Comment Control
//
export function getCommentButton(): HTMLButtonElement | null {
  return queryButton("button[class^='___comment-button___']");
}

export function isCommentEnabled(): boolean {
  return getCommentButton()?.isDataToggleStateTrue() ?? false;
}

//
// Misc Control
//
export function getFullscreenButton(): HTMLButtonElement | null {
  return queryButton("button[class^='___fullscreen-button___']");
}

export function getReloadButton(): HTMLButtonElement | null {
  return queryButton("button[class^='___reload-button___']");
}

export function isFullscreenEnabled(): boolean {
  return getFullscreenButton()?.isDataToggleStateTrue() ?? false;
}

//
// Menu Control
//
export function getSettingButton(): HTMLButtonElement | null {
  return queryButton("button[class*='___setting-button___']");
}

export function changePlaybackRate(buttonIndex: number) {
  clickMenuButton(
    "___video-playback-rate-menu-button-field___",
    "___video-playback-rate-select-menu___",
    buttonIndex
  );
}

export function changeCommentTransparency(buttonIndex: number) {
  clickMenuButton(
    "___comment-transparency-menu-button-field___",
    "___comment-transparency-select-menu___",
    buttonIndex
  );
}

//
// Other Page Components
//
export function getProgramsButton(): HTMLButtonElement | null {
  const div = document.querySelector("div[class^='___popup-control___']");
  const button = div?.querySelector("button");
  return button as HTMLButtonElement;
}

export function getAdButton(): HTMLButtonElement | null {
  return getToggleButton("___nicoad-count-item___");
}

export function getGiftButton(): HTMLButtonElement | null {
  return getToggleButton("___gift-count-item___");
}

function getToggleButton(name: string): HTMLButtonElement | null {
  console.log(`li[class^='${name}']`);
  const li = document.querySelector(`li[class^='${name}']`);
  const button = ((): Element | null =>
    li == null
      ? document.querySelector("button[class^='___close-button___']")
      : li.querySelector("button"))();
  return button as HTMLButtonElement;
}

//
// URL Pick Methods
//
export function getUserPageUrl(): string | null | undefined {
  return document.querySelector("a[class^='___user-name___']")?.getAttribute("href");
}

export function getCommunityPageUrl(): string | null | undefined {
  return document.querySelector("a[class^='___name-label___']")?.getAttribute("href");
}

//
// Internal Methods
//
function queryButton(selector: string): HTMLButtonElement | null {
  return document.querySelector(selector) as HTMLButtonElement;
}

function clickMenuButton(divClass: string, sectionClass: string, buttonIndex: number) {
  const timeout = 350;

  // 1. Click setting button.
  getSettingButton()?.click();

  setTimeout(() => {
    // 2. Click menu button.
    const div = document.querySelector(`div[class^=${divClass}]`);
    const button = div?.querySelector("button") as HTMLButtonElement;
    button.click();

    // Close setting if menu button not found.
    if (button == null) {
      getSettingButton()?.click();
      return;
    }

    setTimeout(() => {
      // 3. Click item button.
      const section = document.querySelector(`section[class^=${sectionClass}]`);
      const buttons = section?.querySelectorAll("button");
      if (buttons == null) return;
      const button = buttons[buttonIndex] as HTMLButtonElement;
      button.click();

      setTimeout(() => {
        // 4. Click setting button to close.
        getSettingButton()?.click();
      }, timeout);
    }, timeout);
  }, timeout);
}

//
// Utility Extension
//
/* eslint-disable no-unused-vars */
declare global {
  interface HTMLButtonElement {
    isDataToggleStateTrue(): boolean;
  }
}
/* eslint-enable no-unused-vars */

HTMLButtonElement.prototype.isDataToggleStateTrue = function () {
  return this.getAttribute("data-toggle-state") === "true";
};
