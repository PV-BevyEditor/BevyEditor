import __wbg_init, { Runner } from "../webbuild/out/editorgame";
import { gizmoOptions, type GizmoOptions } from "$lib/stores/gizmoOptions";
import { Communication, HistoryList } from "./classes";

// Things that need to be accessible from the bevy editorgame need to be passed into the window object
declare global {
    interface Window {
        communication: ReturnType<typeof Communication>;
        historyList: typeof HistoryList;
    }
}
export const initCommunication = () => {
    window.communication = Communication();
    window.historyList = HistoryList;
    
    return window.communication;
};



const bits = {
    orientationIsGlobal: 0b0000_0001,
    scaleIsVisible: 0b0000_0010,
    translationIsVisible: 0b0000_0100,
    rotationIsVisible: 0b0000_1000,
};

export const init = () => __wbg_init().catch(console.log);
export let runner: Runner;
export const setRunner = () => runner = runner ?? new Runner();
export const start = () => {
    try {
        runner.startGame();
    } catch(e) {
        console.log(`Error occured:`, e);
    }
};













const setGizmoOptions = (options: {
    orientationIsGlobal?: boolean,
    scaleIsVisible?: boolean,
    translationIsVisible?: boolean,
    rotationIsVisible?: boolean,
}) => {
    let byte = 0;

    for (let [key, value] of Object.entries(options)) {
        if (!value) continue;

        byte |= bits[key as keyof typeof bits];
    }

    console.log(`Mapped`, options, `to ${byte}`);

    return byte;
};

gizmoOptions.subscribe((options: GizmoOptions) => {
    if (runner) runner.setGizmoOptions(setGizmoOptions(options));
});
