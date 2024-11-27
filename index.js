



document.addEventListener('mousemove', (e)=>{

const mouseX = e.clientX
const mouseY = e.clientY

const anchor = document.getElementById('Character')
const rekt = anchor.getBoundingClientRect()
const anchorX = rekt.left + rekt.width / 2
const anchorY = rekt.top + rekt.height / 2

const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);




//rotate eyes
const eyes = document.querySelectorAll('.eye')
eyes.forEach(eye => {
    eye.style.transform = `rotate(${90+ angleDeg}deg)`
})
})


function angle(cx, cy, ex, ey){
    const dy = ey-cy;
    const dx = ex-cx;
    const rad = Math.atan2(dy, dx); //range (-pi, pi)
    const deg = rad * 180 / Math.PI //rads to degs, range (-180, 180)
    return deg

}



//show pictures


var ImageArray = []
var ArraySmash = []
var ArrayPass = []



for(i = 0; i < 43; i++){
    
    ImageArray.push(`./assets/femboys/image${i+1}.png`)

}
for(i = 0; i < ImageArray.length; i++){
    let image = new Image()
    image.src = ImageArray[i]
    

}

document.getElementById('ImageCard').src = ImageArray.splice(0, 1)[0]

function moveItem(e){
    if(ImageArray.length !== 0){
        document.getElementById('ImageCard').src = ImageArray.splice(0, 1)[0]
        
        if(e.id == "Smash"){
            ArraySmash.push(document.getElementById('ImageCard').src)
        }else{
            ArrayPass.push(document.getElementById('ImageCard').src)
        }

    } else {
        document.getElementById('ImageCard').src = "./assets/EndScreen.png"
        console.log(ArraySmash,ArrayPass)
        document.getElementById('ResultsBNT').style.display = ""
        
    }
    
}





document.getElementById('ResultsBNT').addEventListener('click', (e)=>{

    document.getElementById('ResultsHolder').style.display = ""


    for(let i = 0; i < ArrayPass.length; i++){
        let img = document.createElement('img')
        img.className = "ResultImg"
        img.src = ArrayPass[i]
        document.getElementById('imgholderpass').appendChild(img)
    }

    for(let k = 0; k < ArraySmash.length; k++){
        let img2 = document.createElement('img')
        img2.className = "ResultImg"
        img2.src = ArraySmash[k]
        document.getElementById('imgholdersmash').appendChild(img2)
    }
})





//detect speech bubble
function DetectBubble(e){
    document.getElementById('SpeechBubble').style.display = ""
    document.getElementById('Character').src = "./assets/Character2.png"
}

function CloseBubble(e){
    document.getElementById('SpeechBubble').style.display = "none"
        document.getElementById('Character').src = "./assets/Character.png"
}
















