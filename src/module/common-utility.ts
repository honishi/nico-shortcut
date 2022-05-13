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

export function clickMenuButton(
  divClass: string,
  sectionClass: string,
  buttonIndex: number
) {
  const settingButtonSelector = "button[class*='___setting-button___']";
  const timeout = 300;

  // 1. Click setting button.
  const button = document.querySelector(settingButtonSelector);
  clickElement(button);

  setTimeout(() => {
    // 2. Click menu button.
    const div = document.querySelector(`div[class^=${divClass}]`);
    const button = div?.querySelector("button");
    clickElement(button);

    // Close setting if menu button not found.
    if (button == null) {
      const button = document.querySelector(settingButtonSelector);
      clickElement(button);
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
        const button = document.querySelector(settingButtonSelector);
        clickElement(button);
      }, timeout);
    }, timeout);
  }, timeout);
}

export function buttonToggleState(
  divClass: string,
  buttonClass: string
): boolean {
  const div = document.querySelector(`div[class^='${divClass}']`);
  const button = div?.querySelector(`button[class^='${buttonClass}']`);
  return button?.getAttribute("data-toggle-state") === "true";
}
