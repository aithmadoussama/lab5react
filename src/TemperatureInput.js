
function TemperatureInput({ temperature, changerTemperature }) {
    return (
        <input
            type="number"
            value={temperature}
            onChange={(event) => changerTemperature(event.target.value)}
            placeholder="Temperature C" />
    );
}

export default TemperatureInput;
