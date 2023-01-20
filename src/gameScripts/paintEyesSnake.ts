import CglobalSettings from "../global/settings.js"
import paintCircle from "../paint/circle.js"

const paintEyesSnake = (globalSettings: CglobalSettings, ctx :CanvasRenderingContext2D, add31 :number, add32 :number, up :number, rght :number, down :number, left :number) => {

    const firstRight = globalSettings.r[0]
    const firstUp = globalSettings.u[0]

    paintCircle
    (
        ctx, 
        firstRight + rght,		    
        firstUp + down, 6, 
        'white'
    )
    
    paintCircle(
        ctx, 
        firstRight + rght + add31, 
        firstUp + down + add32, 
        2.5, 
        '#2965CA'
    )

    paintCircle(
        ctx, 
        firstRight + up,		    
        firstUp + left, 
        6, 
        'white'
    ) 

    paintCircle(
        ctx, 
        firstRight + up + add31,	
        firstUp + left + add32, 
        2.5, 
        '#2965CA'
    )
}

export default paintEyesSnake