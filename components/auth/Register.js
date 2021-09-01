import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import firebase from 'firebase'

export class Register extends Component {

    constructor(props) { 
        super(props)
        this.state = {
            email: "",
            password: "",
            name: ""
        }
    
        this.SignUp = this.SignUp.bind(this) //qp con estp


    }

    SignUp() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password) 
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
        /*
        async SignUp(){
            await let result = await firebase.auth().createUserWithEmailAndPassword(email, password) 
            console.log(result)
        }
        */
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="name"
                    onChangeText={(name) => this.setState({name})}
                />
                <TextInput
                    placeholder="email"
                    onChangeText={(email) => this.setState({email})}
                />
                <TextInput
                    placeholder="password"
                    secureTextEntry = {true }
                    onChangeText={(password) => this.setState({password})}
                />
                <Button
                    onPress={() => this.signUp()}
                    title="Sign Up"
                />
            </View>
                

        )
    }
}

export default Register
