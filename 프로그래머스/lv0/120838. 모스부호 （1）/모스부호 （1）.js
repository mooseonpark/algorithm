function solution(letter) {
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
    
    // let answer = '';
    // arr = letter.split('');
    // for(let i=0; i<arr.length; i++){
    //     answer+=morse[arr[i]]
    // }
    return letter.split(" ").map(a => morse[a]).join("")
}