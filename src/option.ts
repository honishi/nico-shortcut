import {
    advertiseKeys,
    clearKeyMap,
    commentKeys,
    commentTransparencyNoneKeys,
    commentTransparencyStrongKeys,
    commentTransparencyWeakKeys,
    fastForwardKeys,
    fullscreenKeys,
    giftKeys,
    helpKeys,
    KeyMap,
    loadKeyMap,
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
    saveKeyMap,
    settingKeys,
    volumeDownKeys,
    volumeUpKeys
} from "./module/option_management";
import {
    advertiseTitle,
    commentTitle, commentTransparencyNoneTitle, commentTransparencyStrongTitle, commentTransparencyWeakTitle,
    fastForwardTitle, fullscreenTitle, giftTitle, helpTitle, muteTitle, openCommunityTitle, openUserTitle,
    playHeadTitle,
    playLiveTitle, playRate025Title,
    playRate050Title,
    playRate075Title,
    playRate100Title,
    playRate125Title,
    playRate150Title,
    playRate175Title,
    playRate200Title,
    playStopTitle, programsTitle, reloadTitle,
    rewindTitle, settingTitle, volumeDownTitle, volumeUpTitle
} from "./module/shortcut_title";

const inputPlayStopKeysId = "input_play_stop_keys"
const inputRewindKeysId = "input_rewind_keys"
const inputFastForwardKeysId = "input_fast_forward_keys"
const inputPlayHeadKeysId = "input_play_head_keys"
const inputPlayLiveKeysId = "input_play_live_keys"
const inputPlayRate200KeysId = "input_play_rate_200_keys"
const inputPlayRate175KeysId = "input_play_rate_175_keys"
const inputPlayRate150KeysId = "input_play_rate_150_keys"
const inputPlayRate125KeysId = "input_play_rate_125_keys"
const inputPlayRate100KeysId = "input_play_rate_100_keys"
const inputPlayRate075KeysId = "input_play_rate_075_keys"
const inputPlayRate050KeysId = "input_play_rate_050_keys"
const inputPlayRate025KeysId = "input_play_rate_025_keys"
const inputMuteKeysId = "input_mute_keys"
const inputVolumeDownKeysId = "input_volume_down_keys"
const inputVolumeUpKeysId = "input_volume_up_keys"
const inputCommentKeysId = "input_comment_keys"
const inputCommentTransparencyNoneKeysId = "input_comment_transparency_none_keys"
const inputCommentTransparencyWeakKeysId = "input_comment_transparency_weak_keys"
const inputCommentTransparencyStrongKeysId = "input_comment_transparency_strong_keys"
const inputFullscreenKeysId = "input_fullscreen_keys"
const inputReloadKeysId = "input_reload_keys"
const inputSettingKeysId = "input_setting_keys"
const inputProgramsKeysId = "input_programs_keys"
const inputAdvertiseKeysId = "input_advertise_keys"
const inputGiftKeysId = "input_gift_keys"
const inputOpenUserKeysId = "input_open_user_keys"
const inputOpenCommunityKeysId = "input_open_community_keys"
const inputHelpKeysId = "input_help_keys"

const restoreDefaultButtonId = "button_restore_default"
const saveButtonId = "button_save"
const optionMessageAreaId = "option_message_area"

const configureLabels = () => {
    setLabelValue(inputPlayStopKeysId, playStopTitle)
    setLabelValue(inputRewindKeysId, rewindTitle)
    setLabelValue(inputFastForwardKeysId, fastForwardTitle)
    setLabelValue(inputPlayHeadKeysId, playHeadTitle)
    setLabelValue(inputPlayLiveKeysId, playLiveTitle)
    setLabelValue(inputPlayRate200KeysId, playRate200Title)
    setLabelValue(inputPlayRate175KeysId, playRate175Title)
    setLabelValue(inputPlayRate150KeysId, playRate150Title)
    setLabelValue(inputPlayRate125KeysId, playRate125Title)
    setLabelValue(inputPlayRate100KeysId, playRate100Title)
    setLabelValue(inputPlayRate075KeysId, playRate075Title)
    setLabelValue(inputPlayRate050KeysId, playRate050Title)
    setLabelValue(inputPlayRate025KeysId, playRate025Title)
    setLabelValue(inputMuteKeysId, muteTitle)
    setLabelValue(inputVolumeDownKeysId, volumeDownTitle)
    setLabelValue(inputVolumeUpKeysId, volumeUpTitle)
    setLabelValue(inputCommentKeysId, commentTitle)
    setLabelValue(inputCommentTransparencyNoneKeysId, commentTransparencyNoneTitle)
    setLabelValue(inputCommentTransparencyWeakKeysId, commentTransparencyWeakTitle)
    setLabelValue(inputCommentTransparencyStrongKeysId, commentTransparencyStrongTitle)
    setLabelValue(inputFullscreenKeysId, fullscreenTitle)
    setLabelValue(inputReloadKeysId, reloadTitle)
    setLabelValue(inputSettingKeysId, settingTitle)
    setLabelValue(inputProgramsKeysId, programsTitle)
    setLabelValue(inputAdvertiseKeysId, advertiseTitle)
    setLabelValue(inputGiftKeysId, giftTitle)
    setLabelValue(inputOpenUserKeysId, openUserTitle)
    setLabelValue(inputOpenCommunityKeysId, openCommunityTitle)
    setLabelValue(inputHelpKeysId, helpTitle)
}

const saveOptions = () => {
    const keyMap = {
        playStopKeys: getInputValue(inputPlayStopKeysId),
        rewindKeys: getInputValue(inputRewindKeysId),
        fastForwardKeys: getInputValue(inputFastForwardKeysId),
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
        muteKeys: getInputValue(inputMuteKeysId),
        volumeDownKeys: getInputValue(inputVolumeDownKeysId),
        volumeUpKeys: getInputValue(inputVolumeUpKeysId),
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
    }
    if (hasDuplicate(keyMap)) {
        showMessage("キーが重複しています...😰")
        return
    }
    saveKeyMap(keyMap, () => window.close())
}

// https://dev.to/shane/typescript-check-if-an-array-contains-only-unique-values-3b3e
const hasDuplicate = (keyMap: KeyMap): boolean => {
    const shortcutKeys = Object.values(keyMap)
        .map((value) => [...value])
        .reduce((previous, current) => previous.concat(current), [])
    const uniqueSet = new Set(shortcutKeys)
    const uniqueValues = Array.from(uniqueSet)
    return shortcutKeys.length != uniqueValues.length
}

const loadOptions = () => {
    loadKeyMap((keyMap) => {
        setInputValue(inputPlayStopKeysId, keyMap[playStopKeys])
        setInputValue(inputRewindKeysId, keyMap[rewindKeys])
        setInputValue(inputFastForwardKeysId, keyMap[fastForwardKeys])
        setInputValue(inputPlayHeadKeysId, keyMap[playHeadKeys])
        setInputValue(inputPlayLiveKeysId, keyMap[playLiveKeys])
        setInputValue(inputPlayRate200KeysId, keyMap[playRate200Keys])
        setInputValue(inputPlayRate175KeysId, keyMap[playRate175Keys])
        setInputValue(inputPlayRate150KeysId, keyMap[playRate150Keys])
        setInputValue(inputPlayRate125KeysId, keyMap[playRate125Keys])
        setInputValue(inputPlayRate100KeysId, keyMap[playRate100Keys])
        setInputValue(inputPlayRate075KeysId, keyMap[playRate075Keys])
        setInputValue(inputPlayRate050KeysId, keyMap[playRate050Keys])
        setInputValue(inputPlayRate025KeysId, keyMap[playRate025Keys])
        setInputValue(inputMuteKeysId, keyMap[muteKeys])
        setInputValue(inputVolumeDownKeysId, keyMap[volumeDownKeys])
        setInputValue(inputVolumeUpKeysId, keyMap[volumeUpKeys])
        setInputValue(inputCommentKeysId, keyMap[commentKeys])
        setInputValue(inputCommentTransparencyNoneKeysId, keyMap[commentTransparencyNoneKeys])
        setInputValue(inputCommentTransparencyWeakKeysId, keyMap[commentTransparencyWeakKeys])
        setInputValue(inputCommentTransparencyStrongKeysId, keyMap[commentTransparencyStrongKeys])
        setInputValue(inputFullscreenKeysId, keyMap[fullscreenKeys])
        setInputValue(inputReloadKeysId, keyMap[reloadKeys])
        setInputValue(inputSettingKeysId, keyMap[settingKeys])
        setInputValue(inputProgramsKeysId, keyMap[programsKeys])
        setInputValue(inputAdvertiseKeysId, keyMap[advertiseKeys])
        setInputValue(inputGiftKeysId, keyMap[giftKeys])
        setInputValue(inputOpenUserKeysId, keyMap[openUserKeys])
        setInputValue(inputOpenCommunityKeysId, keyMap[openCommunityKeys])
        setInputValue(inputHelpKeysId, keyMap[helpKeys])
    })
}

const clearOptions = () => {
    clearKeyMap(() => loadOptions())
}

const showMessage = (text: string) => {
    const messageArea = document.getElementById(optionMessageAreaId) as HTMLSpanElement
    messageArea.textContent = text
}

const setLabelValue = (forValue: string, value: string) => {
    const label = document.querySelector(`label[for='${forValue}']`) as HTMLLabelElement
    label.textContent = `${value}:`
}

const setInputValue = (elementId: string, value: string) => {
    const input = document.getElementById(elementId) as HTMLInputElement
    input.value = value
}

const getInputValue = (elementId: string): string => {
    const input = document.getElementById(elementId) as HTMLInputElement
    return input.value
}

const addEventListeners = () => {
    document.addEventListener('DOMContentLoaded', () => {
        configureLabels()
        loadOptions()
        document.getElementById(restoreDefaultButtonId)?.addEventListener('click', clearOptions)
        document.getElementById(saveButtonId)?.addEventListener('click', saveOptions)
    })
}

addEventListeners()