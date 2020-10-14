export function newEvent(eventName: string, bubbles = false, cancelable = false): CustomEvent {
  const evt: CustomEvent = document.createEvent('CustomEvent');  // MUST be 'CustomEvent'
  evt.initCustomEvent(eventName, bubbles, cancelable, null);
  return evt;
}