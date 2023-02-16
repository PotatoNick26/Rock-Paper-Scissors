function reset() {
    heroEl.innerHTML = ` <h1 id="heading">Rock, Paper, or Scissors?</h1>
                <div id="text">
                    <p id="yc-el">Your Choice: </p>
                    <p id="oc-el"></p>
                </div>
                <div id="choice">
                    <button class="btn" id="rock">Rock</button>
                    <button class="btn" id="paper">Paper</button>
                    <button class="btn" id="scissors">Scissors</button>
                </div>
                <div id="srt-el">
                    <button class="btn" id="strtg">Start Game</button>
                </div>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <p id="yw">Your Wins: ${yW}</p> <p id="ow">Opponent's Wins: ${oW}</p>
            </div>`
            const rockEl = document.getElementById("rock")
 paperEl = document.getElementById("paper")
 scissorsEl = document.getElementById("scissors")
 yourChoiceEl = document.getElementById("yc-el")
 srt = document.getElementById("srt-el")
 strtEl = document.getElementById("strt")
 heroEl = document.getElementById("hero")
 choices = ["👊", "✋", "✌"]



 if (yourChoiceEl.textContent = "Your Choice: ") {
    srt.innerHTML = "<button class='btn' id='strtg'>Start Game</button>"
} 
rockEl.addEventListener("click", function() {
yourChoiceEl.textContent = "Your Choice: 👊";
srt.innerHTML = "<button class='btn' id='strt' onclick='choose()'>Choose Rock?</button>"

})
paperEl.addEventListener("click", function() {
yourChoiceEl.textContent = "Your Choice: ✋";
    srt.innerHTML = "<button class='btn' id='strt' onclick='choose()'>Choose Paper?</button>"
})
scissorsEl.addEventListener("click", function() {
yourChoiceEl.textContent = "Your Choice: ✌";
    srt.innerHTML = "<button class='btn' id='strt' onclick='choose()'>Choose Scissors?</button>"
})


}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //



let rockEl = document.getElementById("rock")
let paperEl = document.getElementById("paper")
let scissorsEl = document.getElementById("scissors")
let yourChoiceEl = document.getElementById("yc-el")
let srt = document.getElementById("srt-el")
let strtEl = document.getElementById("strt")
let heroEl = document.getElementById("hero")
let choices = ["👊", "✋", "✌"]
let yWEl = document.getElementById("yw")
let oWEl = document.getElementById("ow")
let yW = 0
let oW = 0


if (yourChoiceEl.textContent = "Your Choice: ") {
        srt.innerHTML = "<button class='btn' id='strtg'>Start Game</button>"
    } 
rockEl.addEventListener("click", function() {
    yourChoiceEl.textContent = "Your Choice: 👊";
    srt.innerHTML = "<button class='btn' id='strt' onclick='choose()'>Choose Rock?</button>"
    
})
paperEl.addEventListener("click", function() {
    yourChoiceEl.textContent = "Your Choice: ✋";
        srt.innerHTML = "<button class='btn' id='strt' onclick='choose()'>Choose Paper?</button>"
})
scissorsEl.addEventListener("click", function() {
    yourChoiceEl.textContent = "Your Choice: ✌";
        srt.innerHTML = "<button class='btn' id='strt' onclick='choose()'>Choose Scissors?</button>"
})

function choose() {
    if (yourChoiceEl.textContent === "Your Choice: 👊") {
        
        heroEl.innerHTML = `<div id="temp"><div id="text"><p id="yc-el">Your Choice: 👊</p> <p id="oc-el"></p></div> `
        
        const opponetChoiceEl = document.getElementById("oc-el")
        opponetChoiceEl.textContent = "Opponent's Choice: " + choices[Math.floor( Math.random() * 3 )]
        const hero = heroEl.innerHTML

        if (opponetChoiceEl.textContent === "Opponent's Choice: 👊") {
            heroEl.innerHTML = `<div id="temp"> <h1 id="fnlmsgt">You Tied...</h1>`+ hero + `
            <div id="fimg">
                <img src="images/rock.png" id="rockpng" class="choiceimg"> 
                <h1 id="vs"> VS </h1>
                <img src="images/rock.png" id="rockpng" class="choiceimg">
            </div>
            <button class="btn" id="rst" onclick="reset()">Reset</button> </div>`
        } else if (opponetChoiceEl.textContent === "Opponent's Choice: ✋") {
            heroEl.innerHTML = `<div id="temp"> <h1 id="fnlmsgl">You Lose</h1>`+ hero + `
            <div id="fimg">
                <img src="images/rock.png" id="rockpng" class="choiceimg"> 
                <h1 id="vs"> VS </h1>
                <img src="images/paper.png" id="paperpng" class="choiceimg">
            </div>
            <button class="btn" id="rst" onclick="reset()">Reset</button> </div>`

            oW += 1
        } else {
            heroEl.innerHTML = `<div id="temp"> <h1 id="fnlmsgw">You Win</h1>`+ hero + `
            <div id="fimg">
                <img src="images/rock.png" id="rockpng" class="choiceimg"> 
                <h1 id="vs"> VS </h1>
                <img src="images/scissors.png" id="scissorspng" class="choiceimg">
            </div>
            <button class="btn" id="rst" onclick="reset()">Reset</button> </div>`
            yW += 1
        }











    } else if (yourChoiceEl.textContent === "Your Choice: ✋") {
        

        
        heroEl.innerHTML = `<div id="temp"><div id="text"><p id="yc-el">Your Choice: ✋</p> <p id="oc-el"></p></div> 
        `
        
        const opponetChoiceEl = document.getElementById("oc-el")
        opponetChoiceEl.textContent = "Opponent's Choice: " + choices[Math.floor( Math.random() * 3 )]
        const hero = heroEl.innerHTML

        if (opponetChoiceEl.textContent === "Opponent's Choice: 👊") {
            heroEl.innerHTML = `<div id="temp"> <h1 id="fnlmsgw">You Win</h1>`+ hero + `
            <div id="fimg">
                <img src="images/paper.png" id="rockpng" class="choiceimg"> 
                <h1 id="vs"> VS </h1>
                <img src="images/rock.png" id="rockpng" class="choiceimg">
            </div>
            <button class="btn" id="rst" onclick="reset()">Reset</button> </div>`
            yW += 1
        } else if (opponetChoiceEl.textContent === "Opponent's Choice: ✋") {
            heroEl.innerHTML = `<div id="temp"> <h1 id="fnlmsgt">You Tied...</h1>`+ hero + `
            <div id="fimg">
                <img src="images/paper.png" id="rockpng" class="choiceimg"> 
                <h1 id="vs"> VS </h1>
                <img src="images/paper.png" id="paperpng" class="choiceimg">
            </div>
            <button class="btn" id="rst" onclick="reset()">Reset</button> </div>`
        } else {
            heroEl.innerHTML = `<div id="temp"> <h1 id="fnlmsgl">You Lose</h1>`+ hero + `
            <div id="fimg">
                <img src="images/paper.png" id="rockpng" class="choiceimg"> 
                <h1 id="vs"> VS </h1>
                <img src="images/scissors.png" id="scissorspng" class="choiceimg">
            </div>
            <button class="btn" id="rst" onclick="reset()">Reset</button> </div>`
            oW += 1
        }

    } else if (yourChoiceEl.textContent === "Your Choice: ✌") {
        


        heroEl.innerHTML = `<div id="temp"><div id="text"><p id="yc-el">Your Choice: ✌</p> <p id="oc-el"></p></div> 
        </div>`

        const opponetChoiceEl = document.getElementById("oc-el")
        opponetChoiceEl.textContent = "Opponent's Choice: " + choices[Math.floor( Math.random() * 3 )]
        const hero = heroEl.innerHTML

        if (opponetChoiceEl.textContent === "Opponent's Choice: 👊") {
            heroEl.innerHTML = `<div id="temp"> <h1 id="fnlmsgl">You Lose</h1>`+ hero + `
            <div id="fimg">
                <img src="images/scissors.png" id="scissorspng" class="choiceimg"> 
                <h1 id="vs"> VS </h1>
                <img src="images/rock.png" id="rockpng" class="choiceimg">
            </div>
            <button class="btn" id="rst" onclick="reset()">Reset</button> </div>`
            oW += 1
        } else if (opponetChoiceEl.textContent === "Opponent's Choice: ✋") {
            heroEl.innerHTML = `<div id="temp"> <h1 id="fnlmsgw">You Win</h1>`+ hero + `
            <div id="fimg">
                <img src="images/scissors.png" id="scissorspng" class="choiceimg"> 
                <h1 id="vs"> VS </h1>
                <img src="images/paper.png" id="paperpng" class="choiceimg">
            </div>
            <button class="btn" id="rst" onclick="reset()">Reset</button> </div>`
            yW += 1
        } else {
            heroEl.innerHTML = `<div id="temp"> <h1 id="fnlmsgt">You Tied...</h1>`+ hero + `
            <div id="fimg">
                <img src="images/scissors.png" id="scissorspng" class="choiceimg"> 
                <h1 id="vs"> VS </h1>
                <img src="images/scissors.png" id="scissorspng" class="choiceimg">
            </div>
            <button class="btn" id="rst" onclick="reset()">Reset</button> </div>`
        }
    }

    
}


