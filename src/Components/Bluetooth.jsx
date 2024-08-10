import React, { useState, useEffect } from 'react';

const BluetoothComponent = () => {
  const [device, setDevice] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Clean up and disconnect on unmount
    return () => {
      if (device && device.gatt.connected) {
        device.gatt.disconnect();
      }
    };
  }, [device]);

  const connectToDevice = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ services: ['heart_rate'] }],
        optionalServices: ['battery_service'] // Add optional services if needed
      });
      setDevice(device);
      const server = await device.gatt.connect();
      const service = await server.getPrimaryService('heart_rate');
      const characteristic = await service.getCharacteristic('heart_rate_measurement');
      await characteristic.startNotifications();
      characteristic.addEventListener('characteristicvaluechanged', handleCharacteristicValueChanged);
    } catch (error) {
      console.error('Error connecting to device:', error);
      setError(`Failed to connect to device: ${error.message}`);
    }
  };

  const handleCharacteristicValueChanged = (event) => {
    const value = event.target.value;
    const heartRate = value.getUint8(1);
    setData(heartRate);
  };

  return (
    <div>
      <button onClick={connectToDevice}>Connect to Watch</button>
      {device && <p>Connected to: {device.name}</p>}
      {data !== null && <p>Heart Rate: {data}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default BluetoothComponent;
