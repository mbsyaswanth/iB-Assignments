let StrikeRate = (score,balls) => {
    return ((score/balls)*100).toFixed(2);
}

console.log(StrikeRate(14,21));