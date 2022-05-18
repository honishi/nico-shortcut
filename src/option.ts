import {
  advertiseKeys,
  clearOptions,
  commentKeys,
  commentTransparencyNoneKeys,
  commentTransparencyStrongKeys,
  commentTransparencyWeakKeys,
  extraFastForwardKeys,
  extraRewindKeys,
  extraVolumeDownKeys,
  extraVolumeUpKeys,
  fastForwardKeys,
  fullscreenKeys,
  giftKeys,
  helpKeys,
  loadOptions,
  maximizeVolumeWhenPageLoaded,
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
  saveOptions,
  settingKeys,
  showVolumeKeys,
  showVolumeWhenPageLoaded,
  volumeDownKeys,
  volumeUpKeys,
} from "./module/option-management";
import {
  advertiseTitle,
  commentTitle,
  commentTransparencyNoneTitle,
  commentTransparencyStrongTitle,
  commentTransparencyWeakTitle,
  extraFastForwardTitle,
  extraRewindTitle,
  extraVolumeDownTitle,
  extraVolumeUpTitle,
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
  showVolumeTitle,
  volumeDownTitle,
  volumeUpTitle,
} from "./module/shortcut-title";

const inputPlayStopKeysId = "input_play_stop_keys";
const inputRewindKeysId = "input_rewind_keys";
const inputFastForwardKeysId = "input_fast_forward_keys";
const inputExtraRewindKeysId = "input_extra_rewind_keys";
const inputExtraFastForwardKeysId = "input_extra_fast_forward_keys";
const inputPlayHeadKeysId = "input_play_head_keys";
const inputPlayLiveKeysId = "input_play_live_keys";
const inputPlayRate200KeysId = "input_play_rate_200_keys";
const inputPlayRate175KeysId = "input_play_rate_175_keys";
const inputPlayRate150KeysId = "input_play_rate_150_keys";
const inputPlayRate125KeysId = "input_play_rate_125_keys";
const inputPlayRate100KeysId = "input_play_rate_100_keys";
const inputPlayRate075KeysId = "input_play_rate_075_keys";
const inputPlayRate050KeysId = "input_play_rate_050_keys";
const inputPlayRate025KeysId = "input_play_rate_025_keys";
const inputShowVolumeKeysId = "input_show_volume_keys";
const inputMuteKeysId = "input_mute_keys";
const inputVolumeDownKeysId = "input_volume_down_keys";
const inputVolumeUpKeysId = "input_volume_up_keys";
const inputExtraVolumeDownKeysId = "input_extra_volume_down_keys";
const inputExtraVolumeUpKeysId = "input_extra_volume_up_keys";
const inputCommentKeysId = "input_comment_keys";
const inputCommentTransparencyNoneKeysId = "input_comment_transparency_none_keys";
const inputCommentTransparencyWeakKeysId = "input_comment_transparency_weak_keys";
const inputCommentTransparencyStrongKeysId = "input_comment_transparency_strong_keys";
const inputFullscreenKeysId = "input_fullscreen_keys";
const inputReloadKeysId = "input_reload_keys";
const inputSettingKeysId = "input_setting_keys";
const inputProgramsKeysId = "input_programs_keys";
const inputAdvertiseKeysId = "input_advertise_keys";
const inputGiftKeysId = "input_gift_keys";
const inputOpenUserKeysId = "input_open_user_keys";
const inputOpenCommunityKeysId = "input_open_community_keys";
const inputHelpKeysId = "input_help_keys";
const inputShowVolumeWhenPageLoadId = "input_show_volume_when_page_load";
const inputMaximizeVolumeWhenPageLoadId = "input_maximize_volume_when_page_load";

const restoreDefaultButtonId = "button_restore_default";
const saveButtonId = "button_save";
const optionMessageAreaId = "option_message_area";

const configureLabels = () => {
  setLabelValue(inputPlayStopKeysId, playStopTitle);
  setLabelValue(inputRewindKeysId, rewindTitle);
  setLabelValue(inputFastForwardKeysId, fastForwardTitle);
  setLabelValue(inputExtraRewindKeysId, extraRewindTitle);
  setLabelValue(inputExtraFastForwardKeysId, extraFastForwardTitle);
  setLabelValue(inputPlayHeadKeysId, playHeadTitle);
  setLabelValue(inputPlayLiveKeysId, playLiveTitle);
  setLabelValue(inputPlayRate200KeysId, playRate200Title);
  setLabelValue(inputPlayRate175KeysId, playRate175Title);
  setLabelValue(inputPlayRate150KeysId, playRate150Title);
  setLabelValue(inputPlayRate125KeysId, playRate125Title);
  setLabelValue(inputPlayRate100KeysId, playRate100Title);
  setLabelValue(inputPlayRate075KeysId, playRate075Title);
  setLabelValue(inputPlayRate050KeysId, playRate050Title);
  setLabelValue(inputPlayRate025KeysId, playRate025Title);
  setLabelValue(inputShowVolumeKeysId, showVolumeTitle);
  setLabelValue(inputMuteKeysId, muteTitle);
  setLabelValue(inputVolumeDownKeysId, volumeDownTitle);
  setLabelValue(inputVolumeUpKeysId, volumeUpTitle);
  setLabelValue(inputExtraVolumeDownKeysId, extraVolumeDownTitle);
  setLabelValue(inputExtraVolumeUpKeysId, extraVolumeUpTitle);
  setLabelValue(inputCommentKeysId, commentTitle);
  setLabelValue(inputCommentTransparencyNoneKeysId, commentTransparencyNoneTitle);
  setLabelValue(inputCommentTransparencyWeakKeysId, commentTransparencyWeakTitle);
  setLabelValue(inputCommentTransparencyStrongKeysId, commentTransparencyStrongTitle);
  setLabelValue(inputFullscreenKeysId, fullscreenTitle);
  setLabelValue(inputReloadKeysId, reloadTitle);
  setLabelValue(inputSettingKeysId, settingTitle);
  setLabelValue(inputProgramsKeysId, programsTitle);
  setLabelValue(inputAdvertiseKeysId, advertiseTitle);
  setLabelValue(inputGiftKeysId, giftTitle);
  setLabelValue(inputOpenUserKeysId, openUserTitle);
  setLabelValue(inputOpenCommunityKeysId, openCommunityTitle);
  setLabelValue(inputHelpKeysId, helpTitle);
  setLabelValue(inputShowVolumeWhenPageLoadId, "ページ表示時にボリュームを表示する");
  setLabelValue(
    inputMaximizeVolumeWhenPageLoadId,
    "ページ読み込み時にミュート解除 + ボリューム100%にする"
  );
};

function _saveOptions() {
  const keyMapOptions = {
    playStopKeys: getInputValue(inputPlayStopKeysId),
    rewindKeys: getInputValue(inputRewindKeysId),
    fastForwardKeys: getInputValue(inputFastForwardKeysId),
    extraRewindKeys: getInputValue(inputExtraRewindKeysId),
    extraFastForwardKeys: getInputValue(inputExtraFastForwardKeysId),
    playHeadKeys: getInputValue(inputPlayHeadKeysId),
    playLiveKeys: getInputValue(inputPlayLiveKeysId),
    playRate200Keys: getInputValue(inputPlayRate200KeysId),
    playRate175Keys: getInputValue(inputPlayRate175KeysId),
    playRate150Keys: getInputValue(inputPlayRate150KeysId),
    playRate125Keys: getInputValue(inputPlayRate125KeysId),
    playRate100Keys: getInputValue(inputPlayRate100KeysId),
    playRate075Keys: getInputValue(inputPlayRate075KeysId),
    playRate050Keys: getInputValue(inputPlayRate050KeysId),
    playRate025Keys: getInputValue(inputPlayRate025KeysId),
    showVolumeKeys: getInputValue(inputShowVolumeKeysId),
    muteKeys: getInputValue(inputMuteKeysId),
    volumeDownKeys: getInputValue(inputVolumeDownKeysId),
    volumeUpKeys: getInputValue(inputVolumeUpKeysId),
    extraVolumeDownKeys: getInputValue(inputExtraVolumeDownKeysId),
    extraVolumeUpKeys: getInputValue(inputExtraVolumeUpKeysId),
    commentKeys: getInputValue(inputCommentKeysId),
    commentTransparencyNoneKeys: getInputValue(inputCommentTransparencyNoneKeysId),
    commentTransparencyWeakKeys: getInputValue(inputCommentTransparencyWeakKeysId),
    commentTransparencyStrongKeys: getInputValue(inputCommentTransparencyStrongKeysId),
    fullscreenKeys: getInputValue(inputFullscreenKeysId),
    reloadKeys: getInputValue(inputReloadKeysId),
    settingKeys: getInputValue(inputSettingKeysId),
    programsKeys: getInputValue(inputProgramsKeysId),
    advertiseKeys: getInputValue(inputAdvertiseKeysId),
    giftKeys: getInputValue(inputGiftKeysId),
    openUserKeys: getInputValue(inputOpenUserKeysId),
    openCommunityKeys: getInputValue(inputOpenCommunityKeysId),
    helpKeys: getInputValue(inputHelpKeysId),
  };
  if (hasDuplicateKeyMap(keyMapOptions)) {
    showMessage("キーが重複しています...😰");
    return;
  }
  const allOptions = {
    ...keyMapOptions,
    showVolumeWhenPageLoaded: getInputChecked(inputShowVolumeWhenPageLoadId),
    maximizeVolumeWhenPageLoaded: getInputChecked(inputMaximizeVolumeWhenPageLoadId),
  };
  console.log(allOptions);
  saveOptions(allOptions, () => window.close());
}

// https://dev.to/shane/typescript-check-if-an-array-contains-only-unique-values-3b3e
function hasDuplicateKeyMap(keyMapOptions: Options): boolean {
  const shortcutKeys = Object.values(keyMapOptions)
    .map((value) => [...value])
    .reduce((previous, current) => previous.concat(current), []);
  const uniqueSet = new Set(shortcutKeys);
  const uniqueValues = Array.from(uniqueSet);
  return shortcutKeys.length !== uniqueValues.length;
}

function _loadOptions() {
  loadOptions((options) => {
    setInputValue(inputPlayStopKeysId, options[playStopKeys]);
    setInputValue(inputRewindKeysId, options[rewindKeys]);
    setInputValue(inputFastForwardKeysId, options[fastForwardKeys]);
    setInputValue(inputExtraRewindKeysId, options[extraRewindKeys]);
    setInputValue(inputExtraFastForwardKeysId, options[extraFastForwardKeys]);
    setInputValue(inputPlayHeadKeysId, options[playHeadKeys]);
    setInputValue(inputPlayLiveKeysId, options[playLiveKeys]);
    setInputValue(inputPlayRate200KeysId, options[playRate200Keys]);
    setInputValue(inputPlayRate175KeysId, options[playRate175Keys]);
    setInputValue(inputPlayRate150KeysId, options[playRate150Keys]);
    setInputValue(inputPlayRate125KeysId, options[playRate125Keys]);
    setInputValue(inputPlayRate100KeysId, options[playRate100Keys]);
    setInputValue(inputPlayRate075KeysId, options[playRate075Keys]);
    setInputValue(inputPlayRate050KeysId, options[playRate050Keys]);
    setInputValue(inputPlayRate025KeysId, options[playRate025Keys]);
    setInputValue(inputShowVolumeKeysId, options[showVolumeKeys]);
    setInputValue(inputMuteKeysId, options[muteKeys]);
    setInputValue(inputVolumeDownKeysId, options[volumeDownKeys]);
    setInputValue(inputVolumeUpKeysId, options[volumeUpKeys]);
    setInputValue(inputExtraVolumeDownKeysId, options[extraVolumeDownKeys]);
    setInputValue(inputExtraVolumeUpKeysId, options[extraVolumeUpKeys]);
    setInputValue(inputCommentKeysId, options[commentKeys]);
    setInputValue(inputCommentTransparencyNoneKeysId, options[commentTransparencyNoneKeys]);
    setInputValue(inputCommentTransparencyWeakKeysId, options[commentTransparencyWeakKeys]);
    setInputValue(inputCommentTransparencyStrongKeysId, options[commentTransparencyStrongKeys]);
    setInputValue(inputFullscreenKeysId, options[fullscreenKeys]);
    setInputValue(inputReloadKeysId, options[reloadKeys]);
    setInputValue(inputSettingKeysId, options[settingKeys]);
    setInputValue(inputProgramsKeysId, options[programsKeys]);
    setInputValue(inputAdvertiseKeysId, options[advertiseKeys]);
    setInputValue(inputGiftKeysId, options[giftKeys]);
    setInputValue(inputOpenUserKeysId, options[openUserKeys]);
    setInputValue(inputOpenCommunityKeysId, options[openCommunityKeys]);
    setInputValue(inputHelpKeysId, options[helpKeys]);
    setInputChecked(inputShowVolumeWhenPageLoadId, options[showVolumeWhenPageLoaded]);
    setInputChecked(inputMaximizeVolumeWhenPageLoadId, options[maximizeVolumeWhenPageLoaded]);
  });
}

function _clearOptions() {
  clearOptions(() => _loadOptions());
}

function showMessage(text: string) {
  const messageArea = document.getElementById(optionMessageAreaId) as HTMLSpanElement;
  messageArea.textContent = text;
}

function setLabelValue(forValue: string, value: string) {
  const label = document.querySelector(`label[for='${forValue}']`) as HTMLLabelElement;
  label.textContent = `${value}:`;
}

function setInputValue(elementId: string, value: string) {
  const input = document.getElementById(elementId) as HTMLInputElement;
  input.value = value;
}

function setInputChecked(elementId: string, value: boolean) {
  const input = document.getElementById(elementId) as HTMLInputElement;
  input.checked = value;
}

function getInputValue(elementId: string): string {
  const input = document.getElementById(elementId) as HTMLInputElement;
  return input.value;
}

function getInputChecked(elementId: string): boolean {
  const input = document.getElementById(elementId) as HTMLInputElement;
  return input.checked;
}

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    configureLabels();
    _loadOptions();
    document.getElementById(restoreDefaultButtonId)?.addEventListener("click", _clearOptions);
    document.getElementById(saveButtonId)?.addEventListener("click", _saveOptions);
  });
}

addEventListeners();
