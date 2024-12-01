

function rollDice(){

    const numOfDice= document.getElementById("numOfDice").value;
    const diceResult= document.getElementById("diceResult");
    const diceImagaes= document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        images.push(`<image src="dice_images/${value}.webp">`);

    }

    diceResult.textContent = `dice:  ${values.join(`, `)}`;
    diceImagaes.innerHTML = images.join('');
 
}