var matrix = []
for(let i = 0; i <= 255; i++) {
    var col = [0]
    for (let i = 0; i <= 255; i++) {
        col.push(0)
    }
    matrix.push(col)
}

lines = ['SetCol 32 20',
        'SetRow 15 7',
        'SetRow 16 31',
        'QueryCol 32',
        'SetCol 2 14',
        'QueryRow 10']


for(var i=0; i < lines.length; i++) {
    var tempChar = lines[i].split(' ')

    // SetCol
    if (tempChar[0] === 'SetCol') {
        for(let j = 0; j <= 255; j++){
                matrix[j][parseInt(tempChar[1])] = parseInt(tempChar[2]);
        }
    }

    //SetRow
    else if (tempChar[0] === 'SetRow') {
        for(let k = 0; k <= 255; k++){
            matrix[parseInt(tempChar[1])][k] = parseInt(tempChar[2]);
        }
    }

    // QueryCol
    else if (tempChar[0] === 'QueryCol') {
        var tempCol = 0
        for(let j = 0; j <= 255; j++){
            tempCol += matrix[j][parseInt(tempChar[1])]
        }
        // console.log(tempCol)
        process.stdout.write(tempCol);
    }

    // QueryRow
    else if (tempChar[0] === 'QueryRow') {
        var tempCol = 0
        for(let k = 0; k <= 255; k++){
            tempCol += matrix[parseInt(tempChar[1])][k]
        }
        // console.log(tempCol)
        process.stdout.write(tempCol);
    }

    //Error
    else {
        console.log("ERROR INPUT" + tempChar[0])
    }
}
// var chars = 'SetCol 32 20'



var matrix = []
for(let i = 0; i <= 255; i++) {
    var col = [0]
    for (let i = 0; i <= 255; i++) {
        col.push(0)
    }
    matrix.push(col)
}

lines = ['SetCol 32 20',
    'SetRow 15 7',
    'SetRow 16 31',
    'QueryCol 32',
    'SetCol 2 14',
    'QueryRow 10']


for(var i=0; i < lines.length; i++) {
    var tempChar = lines[i].split(' ')

    // SetCol
    if (tempChar[0] === 'SetCol') {
        for(let j = 0; j <= 255; j++){
            matrix[j][parseInt(tempChar[1])] = parseInt(tempChar[2]);
        }
    }

    //SetRow
    else if (tempChar[0] === 'SetRow') {
        for(let k = 0; k <= 255; k++){
            matrix[parseInt(tempChar[1])][k] = parseInt(tempChar[2]);
        }
    }

    // QueryCol
    else if (tempChar[0] === 'QueryCol') {
        var tempCol = 0
        for(let j = 0; j <= 255; j++){
            tempCol += matrix[j][parseInt(tempChar[1])]
        }
        // console.log(tempCol)
        process.stdout.write(tempCol);
    }

    // QueryRow
    else if (tempChar[0] === 'QueryRow') {
        var tempCol = 0
        for(let k = 0; k <= 255; k++){
            tempCol += matrix[parseInt(tempChar[1])][k]
        }
        // console.log(tempCol)
        // process.stdout.write(tempCol);
    }

    //Error
    else {
        console.log("ERROR INPUT" + tempChar[0])
    }
}
// var chars = 'SetCol 32 20'
