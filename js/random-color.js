// function
function colorGenaretor(){
    const number = Math.floor(Math.random()*16777215);
    const string = number.toString(16);
    return '#'+ string;
}


const cards = document.querySelectorAll('.card');
for(const card of cards){
    card.addEventListener('mouseenter', function(){
        const color = colorGenaretor()
        card.style.backgroundColor = color;
    })
}

const allCards = document.querySelectorAll('.card');
for(const card of allCards){
    card.addEventListener('mouseout', function(){
        const color = colorGenaretor()
        card.style.backgroundColor = '#462da0';
    })
}
