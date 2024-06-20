import {createStackNavigator} from '@react-navigation/stack'


import {StartScreen} from '../screens/StartScreen';
import {LoginScreen} from '../screens/LoginScreen';
import { PreCadastroScreen } from '../screens/PreCadastroScreen';
import { CadastroCScreen } from '../screens/CadastroCScreen';
import { CadastroMScreen } from '../screens/CadastroMScreen';
import { CadastroC2Screen } from '../screens/CadastroC2Screen';
import { CadastroM2Screen } from '../screens/CadastroM2Screen';
import { BottomTabsRotues } from './Bottom-tab.routes';

const { Screen, Navigator} = createStackNavigator();

export function StackRoutes(){
    return(
        //stack navigation
        <Navigator initialRouteName='start'>
            <Screen
                name='start'
                component={StartScreen}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='login'
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='preCadastro'
                component={PreCadastroScreen}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='cadastroC'
                component={CadastroCScreen}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='cadastroM'
                component={CadastroMScreen}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='cadastroC2'
                component={CadastroC2Screen}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='cadastroM2'
                component={CadastroM2Screen}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='home'
                component={BottomTabsRotues}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}