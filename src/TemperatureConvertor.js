import { useState } from "react";
import TemperatureInput from "./TemperatureInput";


function TemperatureConvertor() {
    const [temperature, setTemperature] = useState('')

    return (
        <div>
            <TemperatureInput
                temperature={temperature}
                changerTemperature={setTemperature} />

            <p>
                {temperature ? `Température saisie : ${temperature} °C` : 'aucune temperature saisie'}
            </p>
        </div>
    );
}

export default TemperatureConvertor;