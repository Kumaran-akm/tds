function flipCoin() {
    const coin = document.getElementById('coin');
    coin.classList.remove('flip');

    setTimeout(() => {
        const result = Math.random() < 0.5 ? 'heads' : 'tails';
        coin.style.backgroundImage = result === 'heads' ? 
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/5_Rupees_Obverse.png/1024px-5_Rupees_Obverse.png')" : 
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/5_Rupees_Reverse.png/1024px-5_Rupees_Reverse.png')";
        
        coin.classList.add('flip');
    }, 100);
}
