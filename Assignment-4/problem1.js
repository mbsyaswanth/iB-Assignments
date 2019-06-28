let StrikeRate = (score,balls) => {
    return (score/balls)*100;
}

console.log(StrikeRate(14,21).toFixed(2));