import CglobalSettings from "../global/settings.js"
const finish = (globalSettings: CglobalSettings) => {

    if (globalSettings.tailLenght === 100){
        document.body.style.background = "yellow"
        alert('Congratulations you won!')
        window.location.reload()
    }
    
}//The End(?).
export default finish