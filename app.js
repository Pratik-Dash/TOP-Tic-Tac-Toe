//setting up gameboard using Module
let winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let gameBoardModule = (()=>{

    let gameBoard = ["","","","","","","","",""]
    return {gameBoard}
})();

let gameModule = (()=>{

    let currentPlayer = "X";
    let resetButton = document.querySelector(".resetButton")
    resetButton.addEventListener("click",()=>{

        resetGame();
    })
    let statusText = document.querySelector(".status-text");

    let gridBoxClickHandler = ()=>{
        setStatus();
        let gridBoxes = document.querySelectorAll(".cell");
        gridBoxes.forEach(gridBox => gridBox.addEventListener('click',()=>{

            let gridBoxIndex = gridBox.getAttribute("index")
            if(gameBoardModule.gameBoard[gridBoxIndex] != ""){
                return
            }
            updateGridBox(gridBox,gridBoxIndex);
            checkWinConditions()
        }))

    }
    let updateGridBox = (gridBox,index)=>{

        gameBoardModule.gameBoard[index] = currentPlayer
        gridBox.textContent = currentPlayer
        console.log(gameBoardModule.gameBoard)


    }
    let switchPlayer = ()=>{
        currentPlayer === "X" ? currentPlayer = "O":currentPlayer = "X"
        setStatus()
    }
    let setStatus = ()=>{
        statusText.textContent = `Player ${currentPlayer}'s turn`
    }
    let checkWinConditions = ()=>{

        let flag = false;
        for(let i = 0;i<winConditions.length;i++)
        {
            let condition = winConditions[i]
            let cell1 = gameBoardModule.gameBoard[condition[0]]
            let cell2 = gameBoardModule.gameBoard[condition[1]]
            let cell3 = gameBoardModule.gameBoard[condition[2]]

            if(cell1 == ""|| cell2 == "" || cell3 == ""){

                continue
            }

            if(cell1 == cell2 && cell2 == cell3){

                flag = true;
                break;
            }
        }
        

        if(flag == true){
            statusText.textContent = `${currentPlayer} wins`
            resetButton.style.display = "block"
        }
        else if(!gameBoardModule.gameBoard.includes("")){

            statusText.textContent = `Draw`
            resetButton.style.display = "block"
        }
        else{
            switchPlayer();
        }
        
        
    }

    let resetGame = () =>{

        gameBoardModule.gameBoard = ["","","","","","","","",""]
        console.log(gameBoardModule.gameBoard)
        let gridBoxes = document.querySelectorAll(".cell");
        gridBoxes.forEach(gridBox => gridBox.textContent = "")
        currentPlayer = "X"
        resetButton.style.display = "none"
        
        
    }
    return{gridBoxClickHandler,resetGame}
})();

gameModule.gridBoxClickHandler();
let resetButton = document.querySelector(".resetButton")
resetButton.addEventListener("click",()=>{

    gameModule.resetGame();
    gameModule.gridBoxClickHandler();
})


















// let displayControllerModule = (()=>{

//    let renderGridBoxes = ()=>{
//     let gridBoxes = document.querySelectorAll(".cell");
//     gridBoxes.forEach(gridBox => gridBox.addEventListener("click",()=>{

        
//     }))}
//    return{renderGridBoxes}

// })()
// let playerFactory = (playerName, playerSymbol)=>{

//     let getPlayerName = ()=> playerName
//     let getPlayerSymbol = ()=>playerSymbol
//     return(getPlayerName,getPlayerSymbol)
// }

// let Optimus = playerFactory("Optimus","X");
// let Megatron = playerFactory("Megatron","O");

// displayControllerModule.renderGridBoxes();
