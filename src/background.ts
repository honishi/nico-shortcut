import {handleMessage} from "./module/handle_message";

const listenMessage = (message: any, sender: any, sendResponse: any) => {
    console.log(message)
    handleMessage(message)
    sendResponse("response from background.")
}

chrome.runtime.onMessage.addListener(listenMessage)