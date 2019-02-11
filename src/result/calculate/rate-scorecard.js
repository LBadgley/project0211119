function rateScorecard(scorecard) {
    const pirate = scorecard.pirate;
    const ninja = scorecard.ninja;
    const viking = scorecard.viking;

    if(ninja > pirate && ninja > viking) {
        return 'Ninja';
    }
    if(viking > pirate && viking > ninja) {
        return 'Viking';
    }
    else if(pirate > viking && pirate > ninja) {
        return 'Pirate';
    }
}

export default rateScorecard;