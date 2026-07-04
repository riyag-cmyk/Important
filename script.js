// ==========================
// INDEX1 - FAKE LOADING
// ==========================
function fakeLoading(){

    let friend = document.getElementById("friend").value;

    if(!friend || friend.includes("--")){
        alert("Please select identity 😄");
        return;
    }

    document.body.innerHTML = `
    
    <div class="container">

        <h2>Verifying identity...</h2>

        <div style="font-size:60px;">🔍</div>

        <p>Checking emotional database...</p>
        <p>Loading friendship records...</p>

        <h3 id="loadText">0%</h3>

    </div>
    `;

    let progress = 0;

    let interval = setInterval(() => {

        progress += 10;

        document.getElementById("loadText").innerText = progress + "%";

        if(progress >= 100){

            clearInterval(interval);

            localStorage.setItem("friendName", friend);

            setTimeout(() => {
                window.location.href = "nickname.html";
            }, 600);
        }

    }, 180);
}


// ==========================
// NICKNAME VALIDATION
// ==========================
function validateNick(){

    let nickname = document.getElementById("nickname").value.trim();

    if(nickname === ""){
        alert("Nickname required 😄");
        return;
    }

    document.body.innerHTML = `
    
    <div class="container">

        <h2>Analyzing personality...</h2>

        <div style="font-size:60px;">🧠</div>

        <p>Detecting vibe level...</p>
        <p>Calculating friendship compatibility...</p>

        <h3 id="score">0%</h3>

    </div>
    `;

    let score = 0;

    let interval = setInterval(() => {

        score += 15;

        document.getElementById("score").innerText = score + "%";

        if(score >= 100){

            clearInterval(interval);

            localStorage.setItem("nickname", nickname);

            setTimeout(() => {
                window.location.href = "availability.html";
            }, 600);
        }

    }, 180);
}


// ==========================
// GREETING
// ==========================
function loadGreeting(){

    let nickname = localStorage.getItem("nickname");

    document.getElementById("greeting").innerText =
        "Hello, " + nickname + " 👋";
}


// ==========================
// YES BUTTON
// ==========================
function yesClicked(){
    window.location.href = "calendar.html";
}


// ==========================
// NO BUTTON
// ==========================
function noClicked(){

    let nick = localStorage.getItem("nickname");

    document.body.innerHTML = `
    
    <div class="container">

        <h2>Processing your response...</h2>

        <div style="font-size:60px;">🤖</div>

        <p>Analyzing emotional decision...</p>

        <h3 id="status">Reading mind...</h3>

    </div>
    `;

    let texts = [
        "Reading mind...",
        "Detecting hesitation...",
        "Checking friendship value...",
        "Reversing decision...",
        "Almost there..."
    ];

    let i = 0;

    let interval = setInterval(() => {

        document.getElementById("status").innerText = texts[i];

        i++;

        if(i >= texts.length){

            clearInterval(interval);

            setTimeout(() => {

                document.body.innerHTML = `
                
                <div class="container">

                    <h1>😏 Got you, ${nick}!</h1>

                    <p>
                    You tried to select <b>NO</b>...
                    </p>

                    <p>
                    But system has auto-corrected your answer to:
                    </p>

                    <h2 style="color:#00e676;">YES ✔</h2>

                    <p>
                    Reason: Friendship protocol cannot be declined 😎
                    </p>

                    <h3>Redirecting...</h3>

                </div>
                
                `;

                setTimeout(() => {
                    window.location.href = "calendar.html";
                }, 2500);

            }, 800);
        }

    }, 700);
}


// ==========================
// CONFIRM DATE
// ==========================
function confirmDate(){

    let date = document.getElementById("date").value;

    if(!date){
        alert("Select a date 📅");
        return;
    }

    localStorage.setItem("date", date);

    window.location.href = "confirmed.html";
}


// ==========================
// FINAL PRANK PAGE
// ==========================
function finalPage(){

    let nick = localStorage.getItem("nickname");
    let date = localStorage.getItem("date");

    let box = document.getElementById("final");

    box.innerHTML = `
        <h2>Hello ${nick} 👋</h2>

        <h1>Appointment Confirmed!!</h1>

        <p>Processing booking...</p>

        <div style="font-size:50px;">⏳</div>
    `;

    setTimeout(() => {

        box.innerHTML = `
        
        <h1>🎉 SURPRISE 🎉</h1>

        <h2>Congratulations, ${nick} 😎</h2>

        <p>
        You have officially booked a conversation with
        <b>Riya</b> 😂
        </p>

        <p>
        📅 Date: <b>${date}</b>
        </p>

        <hr>

        <p>No cancellation charges 😏</p>

        <p>But ignoring messages = <b>Unlimited guilt trips 😂</b></p>

        <button onclick="cancelAppointment()">
            ❌ Cancel Appointment
        </button>

        <h3>See you soon 🤝😂</h3>
        `;

        launchConfetti();

    }, 2200);
}


// ==========================
// CANCEL BUTTON PRANK
// ==========================
function cancelAppointment(){

    let msgs = [
        "Too late 😂",
        "Nice try 😏",
        "Request denied ❌",
        "Already locked in 📅",
        "You can't escape 😆",
        "Riya is waiting 😎"
    ];

    alert(msgs[Math.floor(Math.random() * msgs.length)]);
}


// ==========================
// CONFETTI
// ==========================
function launchConfetti(){

    let colors = ["#ff5252","#ffd740","#69f0ae","#40c4ff","#e040fb"];

    for(let i=0;i<120;i++){

        let c = document.createElement("div");
        c.className = "confetti";

        c.style.left = Math.random()*100 + "vw";
        c.style.background = colors[Math.floor(Math.random()*colors.length)];
        c.style.animationDuration = (Math.random()*3 + 2) + "s";

        document.body.appendChild(c);

        setTimeout(()=>c.remove(),6000);
    }
}