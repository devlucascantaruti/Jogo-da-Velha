document.addEventListener('DOMContentLoaded', () => {

    let pieces = document.querySelectorAll('.piece');

    pieces.forEach((piece) => {
        piece.addEventListener('click', handleClick);
    });

});

function handleClick(event){

    let piece = event.target;
    let position = piece.id;

    if(handleMove(position)){
        setTimeout(() => {
        alert("O Jogo Acabou - O vencedor foi o jogador " + playerTime);
    },10);
};  
    updatePiece(position);

}

function updatePiece(position){
    let piece = document.getElementById(position.toString());
    let symbol = board[position];
    piece.innerHTML = `<div class='${symbol}'></div>`;
}

function resetGame(){
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    pieces.forEach((piece) => {
        piece.innerHTML = '';
    });
}