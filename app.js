//setting up gameboard using Module
let winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [3,5,9],
    [0,4,8],
    [2,4,6]
]

let gameBoardModule = (()=>{

    let gameBoard = ["","","","","","","","",""]
    return {gameBoard}
})();

let gameModule = (()=>{

    let currentPlayer = "X";
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
        }))

    }
    let updateGridBox = (gridBox,index)=>{

        gameBoardModule.gameBoard[index] = currentPlayer
        gridBox.textContent = currentPlayer
        switchPlayer()
        console.log(gameBoardModule.gameBoard)


    }
    let switchPlayer = ()=>{
        currentPlayer === "X" ? currentPlayer = "O":currentPlayer = "X"
        setStatus()
    }
    let setStatus = ()=>{
        statusText.textContent = `Player ${currentPlayer}'s turn`
    }
    return{gridBoxClickHandler}
})();

gameModule.gridBoxClickHandler();


















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
