export type MessageAction = "goToShelter" | "stayInShelter" | "stayNearByShelter" | "ShelterOut" | "friendlyFire" | "freeText"
export type MessageInfo = {
  icon: string,
  action: string,
  description: string
  messageHeader?: string
}
export const actionToRepresentation: {[k in MessageAction]: MessageInfo} = {
  goToShelter: {
    icon: "🚨",
    action: "חירום - להיכנס לממד",
    description:
      "נא להיכנס למרחבים מוגנים ולסגור דלתות בתים.\n" +
      "נא להמשיך להישמע להנחיות פיקוד העורף\n",
  },
  stayInShelter: {
    icon: "🚨",
    action: "חירום - להישאר בממד",
    description:
      "יש להמשיך לשהות בממד עד להודעה חדשה.\n" +
      'אין לצאת מהממד ללא הודעה מפורשת של צח"י\n',
  },
  stayNearByShelter: {
    icon: "📢",
    action: "ניתן לצאת מהממד",
    description:
      "ניתן לצאת מן הממ\"דים.\n נבקש לעת עתה להישאר בקרבת מרחב מוגן\n" + "נבקש לעת עתה להישאר בקרבת מרחב מוגן\n",
  },
  ShelterOut: {
    icon: "🆓",
    action: "להיות בקרבת ממד",
    description: "להישאר בקרבת מרחב מוגן",
  },
  friendlyFire: {
    icon: "❗",
    action: "קולות ירי של כוחותינו",
    description:
      "קולות הירי הנשמעים כעת הם כתוצאה מירי של צה\"ל. הישוב בשגרה.\n",
  },
  freeText: {
    icon: "❗",
    action: "טקסט חופשי",
    description: "הדבק טקסט חופשי כאן",
    messageHeader: "שים לב!",
  },
};