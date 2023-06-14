import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { VotesScreen } from '../screens/VotesScreen'
import { WinnerScreen } from '../screens/WinnerScreen'

const {Screen, Navigator} = createBottomTabNavigator()

// serve para apontar para as telas chamadas
export function StackRoutes(){

    return(
        <Navigator>
            <Screen
                name='Votes'
                component={VotesScreen}
            />

            <Screen
                name='Winner'
                component={WinnerScreen}
            />
        </Navigator>
    )
}