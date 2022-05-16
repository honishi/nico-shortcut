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

export function clickMenuButton(divClass: string, sectionClass: string, buttonIndex: number) {
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

export function buttonToggleState(divClass: string, buttonClass: string): boolean {
  const div = document.querySelector(`div[class^='${divClass}']`);
  const button = div?.querySelector(`button[class^='${buttonClass}']`);
  return button?.getAttribute("data-toggle-state") === "true";
}

//
// Playback Control
//
export function getPlayButton(): HTMLButtonElement | null {
  const button = document.querySelector("button[class^='___play-button___']");
  return button as HTMLButtonElement;
}

export function getBackButton(): HTMLButtonElement | null {
  const button = document.querySelector("button[class^='___back-button___']");
  return button as HTMLButtonElement;
}

export function getForwardButton(): HTMLButtonElement | null {
  const button = document.querySelector("button[class^='___forward-button___']");
  return button as HTMLButtonElement;
}

export function getHeadButton(): HTMLButtonElement | null {
  const button = document.querySelector("button[class^='___head-button___']");
  return button as HTMLButtonElement;
}

export function getLiveButton(): HTMLButtonElement | null {
  const button = document.querySelector("button[class^='___live-button___']");
  return button as HTMLButtonElement;
}

export function isPlaying(): boolean {
  const playButton = getPlayButton();
  return playButton?.getAttribute("data-toggle-state") === "true";
}

//
// Menu Control
//
export function changePlaybackRate(buttonIndex: number) {
  clickMenuButton(
    "___video-playback-rate-menu-button-field___",
    "___video-playback-rate-select-menu___",
    buttonIndex
  );
}

//
// Internal Methods
//
function getSettingButton(): HTMLButtonElement | null {
  const button = document.querySelector("button[class*='___setting-button___']");
  return button as HTMLButtonElement;
}
