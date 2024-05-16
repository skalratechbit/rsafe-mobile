/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import App from './src/App';
import {name as appName} from './app.json';
import { registerLicense } from '@syncfusion/ej2-base';

// const sync_fusion_license: string = process.env.SYNC_FUSION_LICENSE!;
// Registering Syncfusion license key
// registerLicense(sync_fusion_license);



export default function Main(){
    return (
        <PaperProvider>
            <App />
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => App);
