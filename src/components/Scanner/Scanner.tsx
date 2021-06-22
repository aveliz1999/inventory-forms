import {useEffect, useState} from "react";
import {BrowserMultiFormatReader, DecodeHintType} from '@zxing/library';
import styles from "./Scanner.module.css";

export default function Scanner(args: {onScan: (scanResult: string) => void, onNoDevicesFound: () => void}) {

    const [reader, setReader] = useState<BrowserMultiFormatReader>();
    const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);

    useEffect(() => {
        const hints = new Map<DecodeHintType, any>();
        hints.set(2, [11, 4]);
        setReader(new BrowserMultiFormatReader(hints));
    }, []);

    useEffect(() => {
        setupReader();
    }, [reader]);

    async function setupReader() {
        if(!reader) {
            return;
        }
        const devices = (await reader.listVideoInputDevices()).filter(device => device.kind === 'videoinput');
        setDevices(devices);

        if(!devices.length) {
            return args.onNoDevicesFound();
        }

        reader.decodeFromConstraints({
            video: {
                facingMode: 'environment'
            }
        }, 'video', (result, error) => {
            if(result) {
                args.onScan(result.getText());
                reader.stopAsyncDecode();
                reader.stopContinuousDecode();
            }
        });
    }

    return devices.length ?
        <video id="video" className={styles.video}></video> :
        <div className={styles.error}>
            No camera found
        </div>
}