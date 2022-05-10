import {handleMessage} from "./module/handle_message";

function listenMessage(message: any, sender: any, sendResponse: any) {
    console.log(message)
    handleMessage(message)
    sendResponse("response from background.")
}

chrome.runtime.onMessage.addListener(listenMessage)