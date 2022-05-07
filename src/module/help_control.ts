import Swal from "sweetalert2";
import {
    advertiseKeys,
    commentKeys,
    commentTransparencyNoneKeys,
    commentTransparencyStrongKeys,
    commentTransparencyWeakKeys,
    fastForwardKeys,
    fullscreenKeys,
    giftKeys,
    helpKeys,
    isKeyMatched,
    KeyMap,
    muteKeys,
    openCommunityKeys,
    openUserKeys,
    playHeadKeys,
    playLiveKeys,
    playRate025Keys,
    playRate050Keys,
    playRate075Keys,
    playRate100Keys,
    playRate125Keys,
    playRate150Keys,
    playRate175Keys,
    playRate200Keys,
    playStopKeys,
    programsKeys,
    reloadKeys,
    rewindKeys,
    settingKeys,
    volumeDownKeys,
    volumeUpKeys
} from "./option_management";
import {
    advertiseTitle,
    commentTitle,
    commentTransparencyNoneTitle,
    commentTransparencyStrongTitle,
    commentTransparencyWeakTitle,
    fastForwardTitle,
    fullscreenTitle,
    giftTitle,
    helpTitle,
    muteTitle,
    openCommunityTitle,
    openUserTitle,
    playHeadTitle,
    playLiveTitle,
    playRate025Title,
    playRate050Title,
    playRate075Title,
    playRate100Title,
    playRate125Title,
    playRate150Title,
    playRate175Title,
    playRate200Title,
    playStopTitle,
    programsTitle,
    reloadTitle,
    rewindTitle,
    settingTitle,
    volumeDownTitle,
    volumeUpTitle
} from "./shortcut_title";

export const checkHelpControlKey = (key: string, keyMap: KeyMap) => {
    if (isKeyMatched(key, helpKeys, keyMap)) {
        showHelp(keyMap)
    }
}

const showHelp = (keyMap: KeyMap) => {
    const manifest = chrome.runtime.getManifest();
    Swal.fire({
        title: `ニコ生ショートカット (v${manifest.version})`,
        html: '<div class="nico-shortcut-help">\n' +
            makeTable([
                [keyMap[playStopKeys], playStopTitle],
                [keyMap[rewindKeys], rewindTitle],
                [keyMap[fastForwardKeys], fastForwardTitle],
                [keyMap[playHeadKeys], playHeadTitle],
                [keyMap[playLiveKeys], playLiveTitle],
                [keyMap[playRate200Keys], playRate200Title],
                [keyMap[playRate175Keys], playRate175Title],
                [keyMap[playRate150Keys], playRate150Title],
                [keyMap[playRate125Keys], playRate125Title],
                [keyMap[playRate100Keys], playRate100Title],
                [keyMap[playRate075Keys], playRate075Title],
                [keyMap[playRate050Keys], playRate050Title],
                [keyMap[playRate025Keys], playRate025Title],
                [keyMap[muteKeys], muteTitle],
                [keyMap[volumeDownKeys], volumeDownTitle],
                [keyMap[volumeUpKeys], volumeUpTitle],
            ], true) +
            makeTable([
                [keyMap[commentKeys], commentTitle],
                [keyMap[commentTransparencyNoneKeys], commentTransparencyNoneTitle],
                [keyMap[commentTransparencyWeakKeys], commentTransparencyWeakTitle],
                [keyMap[commentTransparencyStrongKeys], commentTransparencyStrongTitle],
                [keyMap[fullscreenKeys], fullscreenTitle],
                [keyMap[reloadKeys], reloadTitle],
                [keyMap[settingKeys], settingTitle],
                [keyMap[programsKeys], programsTitle],
                [keyMap[advertiseKeys], advertiseTitle],
                [keyMap[giftKeys], giftTitle],
                [keyMap[openUserKeys], openUserTitle],
                [keyMap[openCommunityKeys], openCommunityTitle],
                [keyMap[helpKeys], `${helpTitle} (この画面)`],
            ], false) +
            '</div>',
        width: 900,
        confirmButtonText: '閉じる'
    }).then(r => null)
}

const makeTable = (shortcuts: [string, string][], isFloat: boolean): string => {
    return `<table ${isFloat ? 'style = "float: left;"' : ""}>\n` +
        '<tr><th class="left-column">キー</th><th class="right-column">機能</th></tr>\n' +
        (shortcuts.map((shortcut) =>
            `<tr><td>${shortcut[0]}</td><td style="text-align: left;">${shortcut[1]}</td></tr>\n`
        ).join('')) +
        '</table>';
}