import { useState, useEffect } from 'preact/hooks';

export const useBatteryStatus = () => {
    const [batteryStatus, setBatteryStatus] = useState({ level: 1.0, charging: false });

    useEffect(() => {
        const simulateBatteryStatus = () => {
            const battery = {
                level: 0.14, // 14%
                charging: true,
                addEventListener: (event, callback) => {
                    if (event === 'levelchange') {
                        setInterval(() => {
                            const newLevel = Math.max(0, battery.level - 0.01); // Decrease level
                            setBatteryStatus(prevState => ({ ...prevState, level: newLevel }));
                            callback();
                        }, 5000);
                    }
                    if (event === 'chargingchange') {
                        setInterval(() => {
                            setBatteryStatus(prevState => ({ ...prevState, charging: !prevState.charging }));
                            callback();
                        }, 10000);
                    }
                },
            };

            setBatteryStatus({
                level: battery.level,
                charging: battery.charging,
            });

            battery.addEventListener('levelchange', () => {
                setBatteryStatus(prevState => ({ ...prevState, level: battery.level }));
            });
            battery.addEventListener('chargingchange', () => {
                setBatteryStatus(prevState => ({ ...prevState, charging: battery.charging }));
            });
        };

        simulateBatteryStatus();
    }, []);

    return batteryStatus;
};