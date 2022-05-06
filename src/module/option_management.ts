export const playStopKeys = "playStopKeys"
export const rewindKeys = "rewindKeys"
export const fastForwardKeys = "fastForwardKeys"
export const playHeadKeys = "playHeadKeys"
export const playLiveKeys = "playLiveKeys"
export const playRate200Keys = "playRate200Keys"
export const playRate175Keys = "playRate175Keys"
export const playRate150Keys = "playRate150Keys"
export const playRate125Keys = "playRate125Keys"
export const playRate100Keys = "playRate100Keys"
export const playRate075Keys = "playRate075Keys"
export const playRate050Keys = "playRate050Keys"
export const playRate025Keys = "playRate025Keys"
export const muteKeys = "muteKeys"
export const volumeDownKeys = "volumeDownKeys"
export const volumeUpKeys = "volumeUpKeys"
export const commentKeys = "commentKeys"
export const commentTransparencyNoneKeys = "commentTransparencyNoneKeys"
export const commentTransparencyWeakKeys = "commentTransparencyWeakKeys"
export const commentTransparencyStrongKeys = "commentTransparencyStrongKeys"
export const fullscreenKeys = "fullscreenKeys"
export const reloadKeys = "reloadKeys"
export const settingKeys = "settingKeys"
export const programsKeys = "programsKeys"
export const advertiseKeys = "advertiseKeys"
export const giftKeys = "giftKeys"
export const openUserKeys = "openUserKeys"
export const openCommunityKeys = "openCommunityKeys"
export const helpKeys = "helpKeys"

const allKeys = [
    playStopKeys,
    rewindKeys,
    fastForwardKeys,
    playHeadKeys,
    playLiveKeys,
    playRate200Keys,
    playRate175Keys,
    playRate150Keys,
    playRate125Keys,
    playRate100Keys,
    playRate075Keys,
    playRate050Keys,
    playRate025Keys,
    muteKeys,
    volumeDownKeys,
    volumeUpKeys,
    commentKeys,
    commentTransparencyNoneKeys,
    commentTransparencyWeakKeys,
    commentTransparencyStrongKeys,
    fullscreenKeys,
    reloadKeys,
    settingKeys,
    programsKeys,
    advertiseKeys,
    giftKeys,
    openUserKeys,
    openCommunityKeys,
    helpKeys
]

export type KeyMap = { [key: string]: string }

export const loadKeyMap = (callback: (keyMap: KeyMap) => void) => {
    chrome.storage.local.get(
        allKeys,
        (items) => {
            const keyMap = {
                playStopKeys: items[playStopKeys] ?? 'k',
                rewindKeys: items[rewindKeys] ?? 'j',
                fastForwardKeys: items[fastForwardKeys] ?? 'l',
                playHeadKeys: items[playHeadKeys] ?? 'h',
                playLiveKeys: items[playLiveKeys] ?? ';',
                playRate200Keys: items[playRate200Keys] ?? 'g',
                playRate175Keys: items[playRate175Keys] ?? 't',
                playRate150Keys: items[playRate150Keys] ?? 'f',
                playRate125Keys: items[playRate125Keys] ?? 'r',
                playRate100Keys: items[playRate100Keys] ?? 'd',
                playRate075Keys: items[playRate075Keys] ?? 's',
                playRate050Keys: items[playRate050Keys] ?? 'w',
                playRate025Keys: items[playRate025Keys] ?? 'a',
                muteKeys: items[muteKeys] ?? 'm',
                volumeDownKeys: items[volumeDownKeys] ?? 'u',
                volumeUpKeys: items[volumeUpKeys] ?? 'i',
                commentKeys: items[commentKeys] ?? 'c',
                commentTransparencyNoneKeys: items[commentTransparencyNoneKeys] ?? 'v',
                commentTransparencyWeakKeys: items[commentTransparencyWeakKeys] ?? 'x',
                commentTransparencyStrongKeys: items[commentTransparencyStrongKeys] ?? 'z',
                fullscreenKeys: items[fullscreenKeys] ?? 'F',
                reloadKeys: items[reloadKeys] ?? 'R',
                settingKeys: items[settingKeys] ?? ',',
                programsKeys: items[programsKeys] ?? 'p',
                advertiseKeys: items[advertiseKeys] ?? 'A',
                giftKeys: items[giftKeys] ?? 'G',
                openUserKeys: items[openUserKeys] ?? 'U',
                openCommunityKeys: items[openCommunityKeys] ?? 'C',
                helpKeys: items[helpKeys] ?? '?',
            }
            callback(keyMap)
        });
}

export const saveKeyMap = (keyMap: KeyMap) => {
    chrome.storage.local.set(keyMap, () => null)
}

export const clearKeyMap = (callback: () => void) => {
    chrome.storage.local.clear(callback)
}

export const isKeyMatched = (
    inputKey: string,
    mapKey: string,
    keyMap: KeyMap,
): boolean => [...keyMap[mapKey]].includes(inputKey)