
function timeToIndex(string){
    const regex = /T(\d+):/;

    const match = string.match(regex);
    if (match) {
        const number = parseInt(match[1], 10);
        return number  // retorna o horario atual
    }
}

