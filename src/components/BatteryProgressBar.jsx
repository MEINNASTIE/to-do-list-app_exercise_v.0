import { Component } from 'preact';
import { useBatteryStatus } from './useBatteryStatus';
import { h } from 'preact';
class BatteryStatus extends Component {
    render() {
        const batteryStatus = useBatteryStatus();
        const { level } = batteryStatus;
        const batteryPercentage = level * 100;

        return (
            <div className="battery_container">
                <div className="battery">
                    <div
                        className="battery_level"
                        style={{ height: `${batteryPercentage}%` }}
                    ></div>
                </div>
            </div>
        );
    }
}

export default BatteryStatus;