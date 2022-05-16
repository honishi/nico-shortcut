export function isInputActive() {
  // console.log(document.activeElement)
  return document.activeElement?.tagName === "INPUT";
}

export function clickSelector(selector: any) {
  document.querySelector(selector).click();
}

export function clickElement(element: Element | null | undefined) {
  if (!(element instanceof HTMLElement)) return;
  element.click();
}

export function buttonToggleState(divClass: string, buttonClass: string): boolean {
  const div = document.querySelector(`div[class^='${divClass}']`);
  const button = div?.querySelector(`button[class^='${buttonClass}']`);
  return button?.getAttribute("data-toggle-state") === "true";
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
// Internal Methods
//
function queryButton(selector: string): HTMLButtonElement | null {
  return document.querySelector(selector) as HTMLButtonElement;
}

function clickMenuButton(divClass: string, sectionClass: string, buttonIndex: number) {
  const timeout = 300;

  // 1. Click setting button.
  getSettingButton()?.click();

  setTimeout(() => {
    // 2. Click menu button.
    const div = document.querySelector(`div[class^=${divClass}]`);
    const button = div?.querySelector("button");
    clickElement(button);

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
      clickElement(buttons[buttonIndex]);

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
