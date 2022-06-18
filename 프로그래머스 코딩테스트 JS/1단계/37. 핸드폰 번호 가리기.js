function solution(phone_number) {
    let arr = [];
    let length = phone_number.length
    arr = phone_number.split('').slice(length - 4, length)
    for(let i = 0; i < length - 4; i++) {
        arr.unshift('*');
    }
    return arr.join('');
}
