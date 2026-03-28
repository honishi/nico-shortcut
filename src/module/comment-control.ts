import { showNotification } from "./notification-utility";
import {
  commentKeys,
  commentTransparencyNoneKeys,
  commentTransparencyStrongKeys,
  commentTransparencyWeakKeys,
  isKeyMatched,
  Options,
} from "./option-management";
import { changeCommentTransparency, getCommentButton, isCommentEnabled } from "./dom-utility";
import {
  commentTransparencyNoneTitle,
  commentTransparencyStrongTitle,
  commentTransparencyWeakTitle,
} from "./shortcut-title";

export function checkCommentControlKey(key: string, options: Options) {
  if (isKeyMatched(key, commentKeys, options)) {
    const commentButton = getCommentButton();
    if (commentButton == null) return;
    const wasCommentEnabled = isCommentEnabled();
    const expectedIsCommentEnabled = !wasCommentEnabled;
    commentButton.click();
    showNotification(`💬 コメント${expectedIsCommentEnabled ? "表示" : "非表示"}`);
  } else if (isKeyMatched(key, commentTransparencyNoneKeys, options)) {
    changeCommentTransparency(1);
    showNotification(commentTransparencyNoneTitle);
  } else if (isKeyMatched(key, commentTransparencyWeakKeys, options)) {
    changeCommentTransparency(2);
    showNotification(commentTransparencyWeakTitle);
  } else if (isKeyMatched(key, commentTransparencyStrongKeys, options)) {
    changeCommentTransparency(3);
    showNotification(commentTransparencyStrongTitle);
  }
}
