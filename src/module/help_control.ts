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

export const checkHelpControlKey = (key: string, keyMap: KeyMap) => {
    if (isKeyMatched(key, helpKeys, keyMap)) {
        showHelp(keyMap)
    }
}

const showHelp = (keyMap: KeyMap) => {
    Swal.fire({
        title: 'Nico Shortcut',
        html: '<div class="nico-shortcut-help">\n' +
            makeTable([
                [keyMap[playStopKeys], '⏯ 再生 / 停止'],
                [keyMap[rewindKeys], '⏪ 巻き戻し 10s'],
                [keyMap[fastForwardKeys], '⏩ 早送り 10s'],
                [keyMap[playHeadKeys], '⏮ 先頭'],
                [keyMap[playLiveKeys], '⏭ ライブ再生'],
                [keyMap[playRate200Keys], '🚀 再生速度 x2.0'],
                [keyMap[playRate175Keys], '🚀 再生速度 x1.75'],
                [keyMap[playRate150Keys], '🐇 再生速度 x1.5'],
                [keyMap[playRate125Keys], '🐇 再生速度 x1.25'],
                [keyMap[playRate100Keys], '🐇 再生速度 x1.0'],
                [keyMap[playRate075Keys], '🐢 再生速度 x0.75'],
                [keyMap[playRate050Keys], '🐢 再生速度 x0.5'],
                [keyMap[playRate025Keys], '🐢 再生速度 x0.25'],
                [keyMap[muteKeys], '🔈 ミュート On/Off'],
                [keyMap[volumeDownKeys], '🔈 ボリューム小'],
                [keyMap[volumeUpKeys], '🔈 ボリューム大'],
            ], true) +
            makeTable([
                [keyMap[commentKeys], '💬 コメント On/Off'],
                [keyMap[commentTransparencyNoneKeys], '💬 コメント透過: なし'],
                [keyMap[commentTransparencyWeakKeys], '💬 コメント透過: 弱'],
                [keyMap[commentTransparencyStrongKeys], '💬 コメント透過: 強'],
                [keyMap[fullscreenKeys], '📺️ フルスクリーン'],
                [keyMap[reloadKeys], '🔁 更新'],
                [keyMap[settingKeys], '⚙️ 設定'],
                [keyMap[programsKeys], '👨‍👩‍👦 フォロー中の番組'],
                [keyMap[advertiseKeys], '📣 広告'],
                [keyMap[giftKeys], '🎁 ギフト Open/Close'],
                [keyMap[openUserKeys], '🙆‍♂️ ユーザーを開く'],
                [keyMap[openCommunityKeys], '🏠 コミュニティを開く'],
                [keyMap[helpKeys], '❓ ヘルプ (この画面)'],
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