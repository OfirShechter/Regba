import { MessageAction, MessageInfo, actionToRepresentation } from "../../config/actionToRepresentation.config";
import { languageToRepresentation } from "../../config/languagesToRepresentation";

export async function generateMessage(action: MessageAction, message: string) {
    const actionInfo = actionToRepresentation[action];
  
    // Copy the text inside the text field
    await navigator.clipboard.writeText(
      await genMessage(action, actionInfo, message)
    );  
  }
  
async function genMessage(action: MessageAction, actionInfo: MessageInfo, givenMessage: string) {
    let translatedMessage = "";
    let header = actionInfo.messageHeader
      ? actionInfo.messageHeader
      : actionInfo.action;
  
    for (const language in languageToRepresentation) {
      const languageInfo = languageToRepresentation[language];
      const actionHeaderTranslation =
        languageInfo.actionHeaderTranslation[action];
      translatedMessage += `${
        languageInfo.icon
      } ${actionHeaderTranslation} ${await genTranslateUrl(
        languageInfo.key,
        givenMessage
      )} \n\n`;
    }
  
    return `
  --- ${actionInfo.icon} ---
  ${header}
  ${givenMessage}
  
  -- Translations Below -- 
  ${translatedMessage}
  `;
  }
  
function genTranslateUrl(language, message) {
    const translateUrl = `https://translate.google.co.il/?sl=iw&tl=${language}&text=${encodeURIComponent(
      message
    )}`;
  
    return shortenUrl(translateUrl);
  }
  
  async function shortenUrl(longUrl) {
    const apiUrl = `http://tinyurl.com/api-create.php?url=${encodeURIComponent(
      longUrl
    )}`;
  
    try {
      const response = await fetch(apiUrl);
      return response.text();
    } catch (error) {
      console.error("Error shortening URL:", error);
      return longUrl;
    }
  }

