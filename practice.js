let user_score=0;
let comp_score=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector('#user-score');
const compscore=document.querySelector('#comp-score');

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        user_score++;
        userscore.innerText=user_score;
        console.log("you win");
        msg.innerText=`You win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comp_score++;
        compscore.innerText=comp_score;
        console.log("you lose");
        msg.innerText=`You lose!  ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }


}

const drawfunction=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw!";
    msg.style.backgroundColor="#081b31";
}

const computerchoice=()=>{
    const options=["rock","paper","scissor"];
    const randomindex=Math.floor(Math.random()*3);
    return options[randomindex]
}

const playgame=(userchoice)=>{
    console.log("user choice =",userchoice)
    const compchoice=computerchoice();
    console.log("computer choice =",compchoice)

    if(userchoice===compchoice){
        drawfunction();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==='paper'){
            userwin=compchoice==="scissor"?false:true;

        }
        else{
            userwin=compchoice==="rock"?false:true;

        }
        showwinner(userwin,userchoice,compchoice)

    }


}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice)
        
    })
})