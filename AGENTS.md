# AGENTS

## 基本方針
- このリポジトリはニコニコ生放送の視聴ページ向け Chrome 拡張。対象は `https://live.nicovideo.jp/watch/*` のみ。
- 実装は TypeScript + Webpack。UI フレームワークは使っていない。
- 生成物の `dist/` はビルド結果なので直接編集しない。修正は `src/`、`public/`、`webpack/`、必要に応じて `docs/` に行う。

## 技術スタック
- Chrome Extension Manifest V3
- TypeScript
- Webpack
- `chrome.storage.local` による設定保存
- 補助ライブラリ: `notiflix`、`sweetalert2`、`semver`

## コードベース概要
- `src/content.ts`
  - 視聴ページで `load` / `focus` / `keydown` を監視し、保存済みショートカット設定を各制御モジュールに渡す。
- `src/background.ts`
  - インストール・アップデート時の処理、オプション初期化、リリースノート表示、メッセージ受信を担当する。
- `src/option.ts`
  - オプション画面本体。各ショートカット入力、重複チェック、保存、初期化を扱う。
- `src/popup.ts`
  - 拡張ポップアップ。オプション画面とリリースノートへの導線のみを持つ軽い実装。
- `src/module/dom-utility.ts`
  - ニコ生の DOM 操作用ユーティリティ。サイト側の class 名や構造に強く依存するため変更時は特に注意する。
- `src/module/*-control.ts`
  - 再生、音量、コメント、ページ操作、補助 UI をカテゴリ別に分離している。
- `src/module/option-management.ts`
  - オプションキー定義、デフォルト値、`chrome.storage.local` への保存・読込を担当する。
- `src/module/shortcut-title.ts`
  - 設定画面やヘルプで使うショートカット名の定義。
- `public/manifest.json`
  - 拡張の権限、content script、service worker、popup/options を定義する。
- `docs/`
  - GitHub Pages 用の公開ドキュメントとリリースノート。

## よくある変更箇所
- 新しいショートカットを追加する場合は、少なくとも以下を確認する。
  - `src/module/option-management.ts` にキー定義・デフォルト値を追加
  - `src/module/shortcut-title.ts` に表示名を追加
  - `src/option.ts` に入力欄 ID、保存、復元、ラベル設定を追加
  - 対応する `src/module/*-control.ts` に挙動を追加
  - 必要なら `src/module/help-control.ts` の表示内容も確認
- ニコ生の UI 変更に追従する場合は、まず `src/module/dom-utility.ts` の selector が壊れていないかを見る。
- オプションの保存キー名を変えると既存ユーザー設定の互換性に影響する。既存キーの改名は避け、必要なら移行処理を `src/background.ts` に追加する。

## ビルドと確認
- 開発ビルド: `npm run build-dev`
- 単発の開発ビルド: `npm run build-dev-once`
- 本番ビルド: `npm run build-prod`
- クリーン: `npm run clean`
- 整形付き lint: `npm run lint-fix`
- `package.json` に `test` script はない。変更確認は基本的にビルドと Chrome 上での手動確認になる。

## 実装上の注意
- `content.ts` の `keydown` では毎回 `loadOptions` を呼んでいる。頻度の高い経路なので、重い処理を追加しない。
- 入力中にショートカットが誤発火しないよう、フォーム系要素との干渉は `isInputFieldActive()` 前提で扱う。
- DOM 操作は null を返し得る。ニコ生側の UI 差分や AB テストで要素が欠けても落ちないようにする。
- `chrome.runtime.sendMessage` と `handleMessage` は URL を開く用途に使っている。権限追加やメッセージ種別追加時は `manifest` と合わせて確認する。
- `releaseNoteUrl` は GitHub Pages を向いている。リリース関連の変更では `docs/releases.md` も確認する。

## 変更後の確認観点
- 少なくとも `npm run build-dev-once` か `npm run build-prod` でビルドが通るか確認する。
- ショートカット追加・変更時は以下を手動確認する。
  - 対象ページでキー入力が期待どおり動く
  - 入力欄フォーカス中に誤発火しない
  - オプション画面で保存・復元・重複検知が機能する
  - popup からオプション画面を開ける
- DOM セレクタ変更時は、関連するボタンが見つからないケースでも例外が出ないことを確認する。

## Git / ドキュメント
- ユーザーに明示的に求められない限り、勝手に commit しない。
- commit message は Conventional Commits 形式で書く。
- リリースノートや公開説明を変える場合は `README.md` と `docs/` の整合も確認する。
