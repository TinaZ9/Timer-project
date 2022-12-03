const start = document.getElementById('start');
const setting = document.getElementById('setting');
let minute= document.getElementById('minute');
let second= document.getElementById('second');
let configure = true;
let settingConfig = true;
let time = 0;

setting.addEventListener("click", ()=>{
    
    if(settingConfig === true){
        minute.disabled = false;
        second.disabled = false;
        start.disabled=true;
        settingConfig = false;
        setting.innerHTML = "SAVE"

    }else{
        minute.disabled = true;
        second.disabled = true;
        start.disabled=false;
        settingConfig = true;
        setting.innerHTML = '<img src="images/gear.svg" alt="Settings" />'
    }
        time = Number(minute.value*60)+ Number(second.value)
    }
)

console.log(time);


start.addEventListener("click", () => {
    
    if(configure === true){
        start.innerHTML = "stop";
        configure = false;
    }else{
        start.innerHTML = "start";
        configure = true;
    }
    
    timer();
      
});




const timer = () => {
    let countdown =  setInterval(() =>{
                        if(time > 0){
                            let mytime = --time;
                            let min = Math.floor(mytime/60);
                            sec = String(mytime%60);
                            if(sec.slice().length === 1){
                                sec =  "0" + String(mytime%60);
                            }
                            
                            minute.value = min;
                            second.value = sec;

                            console.log(configure);
                            if(configure){
                                clearInterval(countdown)
                            }
                        
                        }
                        
                    }, 1000);
    
}

