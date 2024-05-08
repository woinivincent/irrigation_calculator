import React,{useState} from 'react'

const InputForm = ({onSubmit})=>{
    const[cropType, setCropType] = useState('')
    const[cropArea, setCropArea] = useState('')
    const[temperature, setTemperature] = useState('')
    const[humidity, setHumidity] = useState('')
    const[windSpeed, setWindSpeed] = useState('')
    const[solarRadiation, setSolarRadiation] = useState('')
    const[soilTexture, setSoilTexture] = useState('')
    const[soilWaterRetention, setSoilWaterRetention] = useState('')
    const[rainfall, setRainfall] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit({
            cropType,
            cropArea,
            temperature,
            humidity,
            windSpeed,
            solarRadiation,
            soilTexture,
            soilWaterRetention,
            rainfall,

        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Tipo de cultivo:
                </label>
                <input
                type="text"
                value={cropType}
                onChange={(e) =>setCropType(e.target.value)}
                />
            </div>
            <div>
                <label>
                    Area de cultivo (m2):
                </label>
                <input
                type="number"
                value={cropArea}
                onChange={(e) =>setCropArea(e.target.value)}
                />
            </div>
            <div>
                <label>
                    Temperatura (ºC):
                </label>
                <input
                type="number"
                value={temperature}
                onChange={(e) =>setTemperature(e.target.value)}
                />
            </div>
            <div>
                <label>
                    Humedad(%):
                </label>
                <input
                type="number"
                value={humidity}
                onChange={(e) =>setHumidity(e.target.value)}
                />
            </div>
            <div>
                <label>
                    Velocidad del viento(m/s):
                </label>
                <input
                type="number"
                value={windSpeed}
                onChange={(e) =>setWindSpeed(e.target.value)}
                />
            </div>
            <div>
                <label>
                    Radiacion solar (MJ/m2/dia):
                </label>
                <input
                type="number"
                value={solarRadiation}
                onChange={(e) =>setSolarRadiation(e.target.value)}
                />
            </div>
            <div>
                <label>
                    Textura del suelo:
                </label>
                <input
                type="text"
                value={soilTexture}
                onChange={(e) =>setSoilTexture(e.target.value)}
                />
            </div>
            <div>
                <label>
                   capacidad de retencion de agua del suelo:
                </label>
                <input
                type="number"
                value={soilWaterRetention}
                onChange={(e) =>setSoilWaterRetention(e.target.value)}
                />
            </div>
            <div>
                <label>
                 Precipitaciones (mm):
                </label>
                <input
                type="number"
                value={rainfall}
                onChange={(e) =>setRainfall(e.target.value)}
                />
            </div>
        <button type='submit'> Calcular</button>
        </form>
    );
};
export default InputForm