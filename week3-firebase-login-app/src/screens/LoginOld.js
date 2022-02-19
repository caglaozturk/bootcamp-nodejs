import React, { Component } from 'react'
// Importing components from react-native library.
import {View, Text } from 'react-native'

// extend olmak: miras alınması
export default class Login extends Component {
    // classtan nesne türetilirken ilk çalışan metot, 
    constructor(props) { 
        // ES standardizasyonunda zaten miras alınan bir nesne varsa o miras alınan nesnenşn kendi constructorını da bu şekilde tetiklemek zorundasınız
        super(props); 

        console.log("const çalıştı")
    }

    componentDidCatch() {
        console.log("component hata fırlatıldığında")
    }
    componentDidMount() {
        console.log("component yüklenmiş olur")
    }
    componentWillUnmount() {
        console.log("component çıkarılmadan önce")
    }

    render() {
        return (
            // Using react-natives built in components.
            <View>
                <Text>Login ekranı</Text>
            </View>
        )
    }
}
