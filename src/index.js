module.exports = function reverse (n) {
    const nInt = n.toString()
    const nIntSplit = nInt.split('');
    const nIntReversed = nIntSplit.reverse();
    const nIntReversedJoined = nIntReversed.join('');
    const answer = parseInt(nIntReversedJoined);
    return answer;
}