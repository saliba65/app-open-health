/* eslint-disable no-param-reassign */
export default function flattenMessages(nestedMessages, prefix = "") {
  return (
    nestedMessages &&
    Object.keys(nestedMessages).reduce((messages, key) => {
      const value = nestedMessages[key];
      const prefixedKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === "string") {
        messages[prefixedKey] = value;
      } else {
        Object.assign(messages, flattenMessages(value, prefixedKey));
      }
      return messages;
    }, {})
  );
}
