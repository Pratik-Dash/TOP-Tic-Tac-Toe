//setting up gameboard using Module
let gameBoard = (()=>{

    let gameBoard = []
    return {}
})();

let displayController = (()=>{

    let diplayControllerTest = ()=>console.log("Testing display controller");
    return{diplayControllerTest}

})();

let player = (playerName, playerSymbol)=>{

    let getPlayerName  = ()=>console.log("Player Name: "+playerName)
    let getPlayerSymbol = ()=>console.log("Player Symbol: "+playerSymbol)
    return{
        getPlayerName,
        getPlayerSymbol
    }

}
displayController.diplayControllerTest()
let Mark = player("Mark","X")
let Jerry = player("Jerry","O")
Mark.getPlayerName();
Mark.getPlayerSymbol();