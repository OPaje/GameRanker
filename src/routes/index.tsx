import {NavigationContainer} from '@react-navigation/native'
import {StackRoutes} from '../routes/stackRoutes'

export function Routes(){

    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}