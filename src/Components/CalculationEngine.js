import React from "react";
import {
  calculateEto,
  getCropCoefficient,
  calculateETc,
  calculateCropWaterNeeds,
  calculateIrrigationVolume,
  calculatedEffectiveRainfall
} from "../Utils/calculationUtils";

const CalculationEngine = ({ inputData, onResultsCalculated }) => {
  const {
    cropType,
    cropArea,
    temperature,
    humidity,
    windSpeed,
    solarRadiation,
    soilTexture,
    soilWaterRetention,
    rainfall,
    growthStage
  } = inputData;

  const calculateResults = () => {
    const eto = calculateEto(temperature,humidity, windSpeed, solarRadiation);
    const kc = getCropCoefficient(cropType, growthStage); //se asume que se proporciona la etapa de creicimiento
    const etc = calculateETc(eto, kc);
    const effectiveRainfall = calculatedEffectiveRainfall(
      soilTexture,
      soilWaterRetention,
      rainfall
    );
    const cropWaterNeeds = calculateCropWaterNeeds(etc, effectiveRainfall);
    const irrigationVolume = calculateIrrigationVolume(
      cropWaterNeeds,
      cropArea
    );

    const results = {
      eto,
      kc,
      etc,
      cropWaterNeeds,
      irrigationVolume,
    };
    onResultsCalculated(results);
  };
  React.useEffect(() => {
    calculateResults();
  }, [inputData]);

  return <div>
    CalculationEngine
  </div>
};


export default CalculationEngine;
