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
    muteKeys,
    openCommunityKeys,
    openUserKeys,
    Options,
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

export function checkHelpControlKey(key: string, options: Options) {
    if (isKeyMatched(key, helpKeys, options)) {
        showHelp(options)
    }
}

function showHelp(options: Options) {
    const manifest = chrome.runtime.getManifest();
    Swal.fire({
        title: `ニコ生ショートカット (v${manifest.version})`,
        html: '<div class="nico-shortcut-help">\n' +
            makeTable([
                [options[playStopKeys], playStopTitle],
                [options[rewindKeys], rewindTitle],
                [options[fastForwardKeys], fastForwardTitle],
                [options[playHeadKeys], playHeadTitle],
                [options[playLiveKeys], playLiveTitle],
                [options[playRate200Keys], playRate200Title],
                [options[playRate175Keys], playRate175Title],
                [options[playRate150Keys], playRate150Title],
                [options[playRate125Keys], playRate125Title],
                [options[playRate100Keys], playRate100Title],
                [options[playRate075Keys], playRate075Title],
                [options[playRate050Keys], playRate050Title],
                [options[playRate025Keys], playRate025Title],
                [options[muteKeys], muteTitle],
                [options[volumeDownKeys], volumeDownTitle],
                [options[volumeUpKeys], volumeUpTitle],
            ], true) +
            makeTable([
                [options[commentKeys], commentTitle],
                [options[commentTransparencyNoneKeys], commentTransparencyNoneTitle],
                [options[commentTransparencyWeakKeys], commentTransparencyWeakTitle],
                [options[commentTransparencyStrongKeys], commentTransparencyStrongTitle],
                [options[fullscreenKeys], fullscreenTitle],
                [options[reloadKeys], reloadTitle],
                [options[settingKeys], settingTitle],
                [options[programsKeys], programsTitle],
                [options[advertiseKeys], advertiseTitle],
                [options[giftKeys], giftTitle],
                [options[openUserKeys], openUserTitle],
                [options[openCommunityKeys], openCommunityTitle],
                [options[helpKeys], `${helpTitle} (この画面)`],
            ], false) +
            '</div>',
        width: 900,
        confirmButtonText: '閉じる'
    }).then(r => null)
}

function makeTable(shortcuts: [string, string][], isFloat: boolean): string {
    return `<table ${isFloat ? 'style = "float: left;"' : ""}>\n` +
        '<tr><th class="left-column">キー</th><th class="right-column">機能</th></tr>\n' +
        (shortcuts.map((shortcut) =>
            `<tr><td>${shortcut[0]}</td><td style="text-align: left;">${shortcut[1]}</td></tr>\n`
        ).join('')) +
        '</table>';
}