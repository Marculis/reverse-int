module.exports = function reverse(n) {
    let a = parseInt(String(n).split("").reverse().join(""));
    return a;
};
