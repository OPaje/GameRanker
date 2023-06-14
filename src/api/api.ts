
const baseApiURL = "http://192.168.100.31:8080/api/"

export async function clientGetGames(){

    const response = await fetch(`${baseApiURL}games`)

    const json = await response.json()
    return json

}

export async function clientSendingVotes(id:number){

    const requestOption = {
        method: 'PATCH'
    }

    fetch(`${baseApiURL}games/${id}/vote`, requestOption)
    .then(response=>response.text)
    .then(result=> console.log(result))
    .then(error => console.log('erro', error))

}

export async function clientGetWinner(){

    const response = await fetch(`${baseApiURL}games`)
    const json = await response.json()
    return json[0]

}