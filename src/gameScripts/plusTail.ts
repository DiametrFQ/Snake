import  CglobalSettings  from "../global/settings.js";
const plusTail = (globalSettings: CglobalSettings) => {

    for(let i = 100; i > 0; i--) {
        globalSettings.r[i] = globalSettings.r[i-1]
        globalSettings.u[i] = globalSettings.u[i-1]
    }
}//Snake moves
export default plusTail