export const playStopKeys = "playStopKeys";
export const rewindKeys = "rewindKeys";
export const fastForwardKeys = "fastForwardKeys";
export const extraRewindKeys = "extraRewindKeys";
export const extraFastForwardKeys = "extraFastForwardKeys";
export const playHeadKeys = "playHeadKeys";
export const playLiveKeys = "playLiveKeys";
export const playRate200Keys = "playRate200Keys";
export const playRate175Keys = "playRate175Keys";
export const playRate150Keys = "playRate150Keys";
export const playRate125Keys = "playRate125Keys";
export const playRate100Keys = "playRate100Keys";
export const playRate075Keys = "playRate075Keys";
export const playRate050Keys = "playRate050Keys";
export const playRate025Keys = "playRate025Keys";
export const showVolumeKeys = "showVolumeKeys";
export const muteKeys = "muteKeys";
export const volumeDownKeys = "volumeDownKeys";
export const volumeUpKeys = "volumeUpKeys";
export const extraVolumeDownKeys = "extraVolumeDownKeys";
export const extraVolumeUpKeys = "extraVolumeUpKeys";
export const commentKeys = "commentKeys";
export const commentTransparencyNoneKeys = "commentTransparencyNoneKeys";
export const commentTransparencyWeakKeys = "commentTransparencyWeakKeys";
export const commentTransparencyStrongKeys = "commentTransparencyStrongKeys";
export const fullscreenKeys = "fullscreenKeys";
export const reloadKeys = "reloadKeys";
export const settingKeys = "settingKeys";
export const adjustPlayerPositionKeys = "adjustPlayerPositionKeys";
export const programsKeys = "programsKeys";
export const advertiseKeys = "advertiseKeys";
export const giftKeys = "giftKeys";
export const openUserKeys = "openUserKeys";
export const openCommunityKeys = "openCommunityKeys";
export const helpKeys = "helpKeys";
export const showVolumeWhenPageLoaded = "showVolumeWhenPageLoaded";
export const maximizeVolumeWhenPageLoaded = "maximizeVolumeWhenPageLoaded";

const allOptionKeys = [
  playStopKeys,
  rewindKeys,
  fastForwardKeys,
  extraRewindKeys,
  extraFastForwardKeys,
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
  showVolumeKeys,
  muteKeys,
  volumeDownKeys,
  volumeUpKeys,
  extraVolumeDownKeys,
  extraVolumeUpKeys,
  commentKeys,
  commentTransparencyNoneKeys,
  commentTransparencyWeakKeys,
  commentTransparencyStrongKeys,
  fullscreenKeys,
  reloadKeys,
  settingKeys,
  adjustPlayerPositionKeys,
  programsKeys,
  advertiseKeys,
  giftKeys,
  openUserKeys,
  openCommunityKeys,
  helpKeys,
  showVolumeWhenPageLoaded,
  maximizeVolumeWhenPageLoaded,
];

export type Options = { [key: string]: any };

export function loadOptions(callback: (options: Options) => void) {
  chrome.storage.local.get(allOptionKeys, (items) => {
    const optionsWithDefaultValue = {
      playStopKeys: items[playStopKeys] ?? "k",
      rewindKeys: items[rewindKeys] ?? "j",
      fastForwardKeys: items[fastForwardKeys] ?? "l",
      extraRewindKeys: items[extraRewindKeys] ?? "J",
      extraFastForwardKeys: items[extraFastForwardKeys] ?? "L",
      playHeadKeys: items[playHeadKeys] ?? "h",
      playLiveKeys: items[playLiveKeys] ?? ";",
      playRate200Keys: items[playRate200Keys] ?? "g",
      playRate175Keys: items[playRate175Keys] ?? "t",
      playRate150Keys: items[playRate150Keys] ?? "f",
      playRate125Keys: items[playRate125Keys] ?? "r",
      playRate100Keys: items[playRate100Keys] ?? "d",
      playRate075Keys: items[playRate075Keys] ?? "s",
      playRate050Keys: items[playRate050Keys] ?? "w",
      playRate025Keys: items[playRate025Keys] ?? "a",
      showVolumeKeys: items[showVolumeKeys] ?? "o",
      muteKeys: items[muteKeys] ?? "m",
      volumeDownKeys: items[volumeDownKeys] ?? "u",
      volumeUpKeys: items[volumeUpKeys] ?? "i",
      extraVolumeDownKeys: items[extraVolumeDownKeys] ?? "U",
      extraVolumeUpKeys: items[extraVolumeUpKeys] ?? "I",
      commentKeys: items[commentKeys] ?? "c",
      commentTransparencyNoneKeys: items[commentTransparencyNoneKeys] ?? "z",
      commentTransparencyWeakKeys: items[commentTransparencyWeakKeys] ?? "x",
      commentTransparencyStrongKeys: items[commentTransparencyStrongKeys] ?? "v",
      fullscreenKeys: items[fullscreenKeys] ?? "F",
      reloadKeys: items[reloadKeys] ?? "R",
      settingKeys: items[settingKeys] ?? ",",
      adjustPlayerPositionKeys: items[adjustPlayerPositionKeys] ?? "p",
      programsKeys: items[programsKeys] ?? "P",
      advertiseKeys: items[advertiseKeys] ?? "A",
      giftKeys: items[giftKeys] ?? "G",
      openUserKeys: items[openUserKeys] ?? "S",
      openCommunityKeys: items[openCommunityKeys] ?? "C",
      helpKeys: items[helpKeys] ?? "?",
      showVolumeWhenPageLoaded: items[showVolumeWhenPageLoaded] ?? false,
      maximizeVolumeWhenPageLoaded: items[maximizeVolumeWhenPageLoaded] ?? false,
    };
    callback(optionsWithDefaultValue);
  });
}

export function saveOptions(options: Options, callback: () => void) {
  chrome.storage.local.set(options, callback);
}

export function clearOptions(callback: () => void) {
  chrome.storage.local.clear(callback);
}

export function isKeyMatched(inputKey: string, mapKey: string, options: Options): boolean {
  return [...options[mapKey]].includes(inputKey);
}
