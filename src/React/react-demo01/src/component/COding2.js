// DFS
lines = [
    '4-2;BEGIN-3;3-4;2-END',
    '77-END;BEGIN-8;8-11;11-77',
    '4-2;BEGIN-3;3-4;2-3',
    'BEGIN-3;4-3;3-4;2-END',
    '77-END;BEGIN-8;8-77;11-11'
]


for(var i=0; i < lines.length; i++) {
    var tempChar = lines[i].split(';')

    //Init dictionary, begin, end
    var dic = {}
    var begin = -1;
    var end = -1;
    var flag = true;
    for (let j = 0; j < tempChar.length; j++) {
        var newChar = tempChar[j].split('-')

        // Self Loop  -> BAD
        if (newChar[0] === newChar[1]) {
            console.log('BAD')
            flag = false
            break;
        }

        // Save all chains into dic
        else {
            dic[newChar[0]] = newChar[1]
            if (newChar[0] === 'BEGIN') {
                begin = newChar[1]
            }
            if (newChar[1] === 'END') {
                end = newChar[0]
            }
        }
    }
    if(begin === -1 || end === -1){
        flag = false
        console.log("BAD")
    }

    //Check Bad or Good
    function DFS(dic, begin, end, lastNode) {
        // console.log(begin, dic[begin])
        if (lastNode === dic[begin]) {
            console.log('BAD');
            return;

        } else if (dic[begin] === 'END') {
            console.log('GOOD');
            return;
        } else {
            return DFS(dic, dic[begin], end, begin)
        }
    }

    if (flag === true) {
        DFS(dic, begin, end, -1)
    }
}

let a = 12
console.log(a.toString(2))
