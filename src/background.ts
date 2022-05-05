import {handleMessage} from "./module/handle_message";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    handleMessage(message)
    sendResponse("response from background.")
})