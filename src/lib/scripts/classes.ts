/**
 * This singleton 'class' is passed to the window, such that it is accessible for the bevy wasm, such that it can pass component info
 * to the callbacks that can be registered in the listeners property.
 */

type Callback = (...args: any[]) => void;

interface Listeners {
    properties: Callback[];
    [key: string]: Callback[];
}

export const Communication = (function() {
    let listeners: Listeners = {
        properties: [],
    };

    return {
        getCallbacks: (callbackType: string) => listeners[callbackType as keyof Listeners],

        // TODO: Create a mechanic to remove callbacks from the listeners
        addCallback: (callbackType: keyof Listeners, callback: Callback) => {
            if (!listeners[callbackType]) {
                console.error(`Callback type ${callbackType} does not exist.`);
                return;
            }

            listeners[callbackType as keyof typeof listeners].push(callback);
        }
    };
});

type HistoryItem = {
    location: `editor` | `viewport`,
    undoAction: () => void,
    display: string,
    type: `transformation` | `property`,
};

export const HistoryList = (function() {
    let history: HistoryItem[] = [];
    let future: HistoryItem[] = [];
    let maxHistoryLength = 64;

    return {
        get: (amount: number = maxHistoryLength - 1) => history.slice(- amount),
        add: (historyItem: HistoryItem) => {
            history.push(historyItem)
            future = [];
        },
        undo: (amount: number = 1) => {

        },
        redo: (amount: number = 1) => {

        },
    };
})();
