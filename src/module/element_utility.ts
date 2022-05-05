export const isInputActive = () => {
    // console.log(document.activeElement)
    return document.activeElement?.tagName === "INPUT"
}

export const clickSelector = (selector: any) => {
    document.querySelector(selector).click()
}

export const clickElement = (element: Element | null | undefined) => {
    if (!(element instanceof HTMLElement)) return
    element.click()
}

export const clickMenuButton = (divClass: string, sectionClass: string, buttonIndex: number) => {
    const timeout = 300
    const button = document.querySelector("button[class*='___setting-button___']")
    clickElement(button)
    setTimeout(() => {
        const div = document.querySelector(`div[class^=${divClass}]`)
        const button = div?.querySelector('button')
        clickElement(button)

        setTimeout(() => {
            const section = document.querySelector(`section[class^=${sectionClass}]`)
            const buttons = section?.querySelectorAll('button')
            if (buttons == null) return
            clickElement(buttons[buttonIndex])

            setTimeout(() => {
                const button = document.querySelector("button[class*='___setting-button___']")
                clickElement(button)
            }, timeout)
        }, timeout)
    }, timeout)
}