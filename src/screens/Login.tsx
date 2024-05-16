import * as React from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';



function Login(props: any) {
    const { navigation } = props;
    return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Login Text!</Text>
                <Button
                    title="Go to Internal Pages"
                    onPress={() => navigation.navigate('HomeNavigation')}
                />
            </View>
    );
  }

export default Login;