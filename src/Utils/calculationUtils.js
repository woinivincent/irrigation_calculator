//calculo de evapotranspiracion potencial
function calculateEto(temperature, humidity, windSpeed, solarRadiation) {
  //implementacion del calculo de Etoutilizando el metodo de Penman-Monteith

  //Cconstantes
  const DELTA= 0.0385
  const GAMMA = 0.0667

  //calculos intermedios
  const es = 0.6108* Math.exp((17.27* temperature)/(temperature+237.3));//presion de vapor saturado
  const ea =(humidity/ 100) * es; //PRESION DE VAPOR ACTUAL
  const netRadiation =solarRadiation*(1 - 0.23) // RADIACION NETA (MJ/M2/DIA)
  const soilHeatFLux = 0.1 * netRadiation //flujo de calor del suelo
  const psychometricConstant = GAMMA * (1+0.34 * windSpeed) //constante psicometrica ajsutada

// calculo de ETo
    const eto = 
    (0.408 * DELTA * (netRadiation -soilHeatFLux) +
      psychometricConstant*(900 / (temperature + 273)) * windSpeed*(es-ea)) /
      (DELTA + GAMMA *(1+ 0.34*windSpeed));
     
  return eto;
}
//calculo de coeficiente de cultivo
function getCropCoefficient(cropType, growthStage) {
  //tablas o logica para determinar el Kc segun el tipo de cultivo y etapa de desarrollo
        // asumimos tablas precargadas a modo de ejemplo para determinar el kc

        const kcTable = {
            maize:{
                initial:0.3,
                mid:1.2,
                end:0.6,
            },
            wheat:{
                initial:0.4,
                mid:1.15,
                end: 0.25,
            },
            //agregar mas tipos de cultivo y etapas segun sea necesario
        };
        const kcValue = kcTable[cropType] ?.[growthStage] || 0.5
  return kcValue;
}


//funcion para calcular las precipitaciones
function calculatedEffectiveRainfall(soilTexture,soilWaterRetention, rainfall){
    //asumimos un factor de ajuste de 80% del 80% para suelos de textura media

    const effectiveRainfallFactor = 0.8;
    const effectiveRainfall = rainfall * effectiveRainfallFactor;

    return effectiveRainfall
} 
//funcion para calcular la evapotranspiracion
function calculateETc(eto, kc) {
  return eto * kc;
}

//calculo de necesidades hidricas

function calculateCropWaterNeeds(etc, effectiveRainfall) {
  return etc - effectiveRainfall;
}

//caculo del volumen de riego REQUERIDO
function calculateIrrigationVolume(cropWaterNeeds, cropArea) {
  return cropWaterNeeds * cropArea;
}



export {
    calculateEto,
    getCropCoefficient,
    calculateETc,
    calculateCropWaterNeeds,
    calculateIrrigationVolume,
    calculatedEffectiveRainfall,
}