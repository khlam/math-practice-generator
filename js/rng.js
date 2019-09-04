function generateProblem(param) {
    return new Promise((resolve) => {
        switch(randomProblemType(param)) {
            case 'addition':
                console.log("not impl")
                break;
            case 'subtraction':
                console.log("not impl")
                break;
            case 'multiplication':
                console.log("not impl")
                break;
            case 'division':
                generateDivision(param).then(result => {
                    return resolve(result)
                })
            default:
                return
        }
    })
}

function randomProblemType(param) {
    if (params.init.addition || params.init.subtraction || params.init.multiplication || params.init.division) {
        let choices = ['addition', 'subtraction', 'multiplication', 'division']
        choice = choices[rand(0, 3)]
        while( !param.init[choice] ) {
            choice = choices[rand(0, 3)]
        }
        return choice
    }
    return "ERROR"
}

function rand(min, max) {
    let minimum = Math.ceil(min)
    let maximum = Math.floor(max)
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}