export function handleMessage(message: any) {
    if (!(typeof message === 'string')) return

    let command, parameter
    [command, parameter] = message.split(',')

    switch (command) {
        case 'open_url':
            openUrl(parameter)
            break
        default:
            break
    }
}

function openUrl(url: string) {
    chrome.tabs.create(
        {url: url},
        () => null)
}