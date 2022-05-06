import Swal from "sweetalert2";
import {helpKeys, isKeyMatched, KeyMap} from "./option_management";

export const checkHelpControlKey = (key: string, keyMap: KeyMap) => {
    if (isKeyMatched(key, helpKeys, keyMap)) {
        showHelp()
    }
}

const showHelp = () => {
    Swal.fire({
        title: 'Nico Shortcut',
        html: '<table style="margin-left:auto; margin-right:auto; border-collapse: collapse; border-spacing: 0;">\n' +
            '<tr><th style="padding: 0 50px;">キー</th><th style="padding: 0 130px;">機能</th></tr>\n' +
            '<tr style="background: #ddd;"><td>k</td><td style="text-align: left;">⏯ 再生 / 停止</td></tr>\n' +
            '<tr style="background: #fff;"><td>j</td><td style="text-align: left;">⏪ 巻き戻し 10s</td></tr>\n' +
            '<tr style="background: #ddd;"><td>l</td><td style="text-align: left;">⏩ 早送り 10s</td></tr>\n' +
            '<tr style="background: #fff;"><td>h</td><td style="text-align: left;">⏮ 先頭</td></tr>\n' +
            '<tr style="background: #ddd;"><td>;</td><td style="text-align: left;">⏭ ライブ再生</td></tr>\n' +
            '<tr style="background: #fff;"><td>g</td><td style="text-align: left;">🚀 再生速度 x2.0</td></tr>\n' +
            '<tr style="background: #ddd;"><td>t</td><td style="text-align: left;">🚀 再生速度 x1.75</td></tr>\n' +
            '<tr style="background: #fff;"><td>f</td><td style="text-align: left;">🐇 再生速度 x1.5</td></tr>\n' +
            '<tr style="background: #ddd;"><td>r</td><td style="text-align: left;">🐇 再生速度 x1.25</td></tr>\n' +
            '<tr style="background: #fff;"><td>d</td><td style="text-align: left;">🐇 再生速度 x1.0</td></tr>\n' +
            '<tr style="background: #ddd;"><td>s</td><td style="text-align: left;">🐢 再生速度 x0.75</td></tr>\n' +
            '<tr style="background: #fff;"><td>w</td><td style="text-align: left;">🐢 再生速度 x0.5</td></tr>\n' +
            '<tr style="background: #ddd;"><td>a</td><td style="text-align: left;">🐢 再生速度 x0.25</td></tr>\n' +
            '<tr style="background: #fff;"><td>m</td><td style="text-align: left;">🔈 ミュート On/Off</td></tr>\n' +
            '<tr style="background: #ddd;"><td>u</td><td style="text-align: left;">🔈 ボリューム小</td></tr>\n' +
            '<tr style="background: #fff;"><td>i</td><td style="text-align: left;">🔈 ボリューム大</td></tr>\n' +
            '<tr style="background: #ddd;"><td>c</td><td style="text-align: left;">💬 コメント On/Off</td></tr>\n' +
            '<tr style="background: #fff;"><td>z</td><td style="text-align: left;">💬 コメント透過: なし</td></tr>\n' +
            '<tr style="background: #ddd;"><td>x</td><td style="text-align: left;">💬 コメント透過: 弱</td></tr>\n' +
            '<tr style="background: #fff;"><td>v</td><td style="text-align: left;">💬 コメント透過: 強</td></tr>\n' +
            '<tr style="background: #ddd;"><td>F</td><td style="text-align: left;">📺️ フルスクリーン</td></tr>\n' +
            '<tr style="background: #fff;"><td>R</td><td style="text-align: left;">🔁 更新</td></tr>\n' +
            '<tr style="background: #ddd;"><td>,</td><td style="text-align: left;">⚙️ 設定</td></tr>\n' +
            '<tr style="background: #fff;"><td>p</td><td style="text-align: left;">👨‍👩‍👦 フォロー中の番組</td></tr>\n' +
            '<tr style="background: #ddd;"><td>A</td><td style="text-align: left;">📣 広告</td></tr>\n' +
            '<tr style="background: #fff;"><td>G</td><td style="text-align: left;">🎁 ギフト Open/Close</td></tr>\n' +
            '<tr style="background: #ddd;"><td>U</td><td style="text-align: left;">🙆‍♂️ ユーザーを開く</td></tr>\n' +
            '<tr style="background: #fff;"><td>C</td><td style="text-align: left;">🏠 コミュニティを開く</td></tr>\n' +
            '<tr style="background: #ddd;"><td>?</td><td style="text-align: left;">❓ ヘルプ (この画面)</td></tr>\n' +
            '</table>',
        confirmButtonText: '閉じる'
    }).then(r => null)
}
