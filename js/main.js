
const request = superagent;


let posicionA = -1
let posicionB = 7
let suma = 0
let objetivo = 13
let stringRespuesta = ""
let numEvaluacion = 0

function handleInfoPi(apiRes){

  const responseObj = apiRes.body;

  while (suma !== objetivo) {
    numEvaluacion++
    posicionA++
    posicionB++
    suma = 0

    let sliced = responseObj.slice(posicionA,posicionB)

    let splited = sliced.split("")

    for (let i=0; i< splited.length; i++ ) {
      suma += parseInt(splited[i])
    }
    console.log(suma)
    stringRespuesta = sliced
  }

  console.log("respuesta: " + stringRespuesta + " encontrada en la " + numEvaluacion + " evaluacion.")
  }


request
    .get('https://uploadbeta.com/api/pi/?cached&n=10000')
    .then(handleInfoPi)
