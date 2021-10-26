import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Formik } from "formik";
import * as Yup from 'yup'

import { TextInput } from "react-native-paper";
import { CheckBox } from "react-native-elements";

const Login = () => {
    const [checked, setChecked] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])
    const [showpassword,setShowPassword] = useState(true)

    const show = ()=>{
        setShowPassword({showpassword :!showpassword})
    }

    const validate = Yup.object({
        email: Yup.string().email('Not the correct format').required('*Required*'),
        password: Yup.string().min(6, 'Atleast 6 Characters ').required('*Required*'),
        checked: Yup.bool().oneOf([true], ' ').required('*Required*'),

    })
    const createUser = () => {
        setUsers([...users, {
            email: email,
            password: password
        }])
    }
    return (
        <SafeAreaView>
            <View style={{ padding: 10, margin: 20, marginTop: 50 }}>
                <Text style={{ alignSelf: 'flex-start', padding: 8, fontWeight: '700', fontSize: 25 }}>
                    Log In
                </Text>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        checked: false
                    }}
                    validateOnMount={true}
                    validationSchema={validate}
                    onSubmit={(values) => createUser(values.name, values.email, values.password, values.confirm, values.checked)}
                >
                    {({
                         errors,
                          values, 
                          handleChange,
                          handleBlur, 
                          touched
                         }) =>
                          (
                           <View> 
                            
                            <View style={styles.text}>
                                <TextInput
                                    value={values.email}
                                    placeholder={'Enter Email Address'}
                                    onBlur={handleBlur('email')}
                                    onChangeText={handleChange('email')}
                                    label="Email"
                                    style={styles.inputSearch}
                                    left={<TextInput.Icon name="email" size={30} style={{ padding: 4, marginTop: 10 }} />}
                                />
                                  {errors.email && touched.email ? (
                                <Text style={{ alignSelf: 'flex-start', color: 'red' }}> {errors.email}</Text>
                                ) : null}
                            </View>
                            <View style={styles.text}>
                                <TextInput
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    label="Password"
                                    style={styles.inputSearch}
                                    left={<TextInput.Icon name="lock" size={30} style={{ padding: 4, marginTop: 10 }} />}
                                    right={<TextInput.Icon name="eye" size={28} onPress={show} style={{ padding: 4, marginTop: 10 }} />}
                                    secureTextEntry={true}
                                /> 
                                 {errors.password && touched.password ? (
                                    <Text style={{ alignSelf: 'flex-start', color: 'red' }}>
                                        {errors.password}
                                    </Text>
                                ) : null}
                                    <Text
                                     style={{ 
                                         alignSelf: 'flex-start',
                                          padding: 5
                                           }}
                                    >
                                    Strong Password:EduSharp@123
                                    </Text>
                            </View>
                           
                                 <Text
                             style={{
                                  color: 'black',
                                   paddingLeft: 40,
                                    margin: 4
                                     }}
                            >
                               Accept T's & Cs</Text>
                            <Text style={{
                                alignSelf: 'flex-end',
                                 color: '#337af5',
                                  marginTop: -30
                            }}>
                                View More
                            </Text>   
                            <View style={{ marginTop: 38, }}>
                                <TouchableOpacity
                                 style={{
                                      backgroundColor: '#4372c4',
                                       alignSelf: 'center', 
                                       width: '70%',
                                        height: 40, 
                                        borderRadius: 20,
                                         margin: 8
                                          }} 
                                >
                                <Text style={{ color: 'white', alignSelf: 'center', padding: 6 }}>
                                Login</Text>
                                </TouchableOpacity>
                                <Text 
                                   style={{
                                        alignSelf: 'center',
                                         margin: 4
                                          }}
                                >
                                    Have an account?Sign In
                                </Text>
                            </View>

                            <View style={styles.screen}>
      <TextInput style={styles.input} placeholder="Type something here" />
    </View>
                    </View>
                    )}
                </Formik>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    Search: {
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 60,
        elevation: 8,
        borderRadius: 40
    },
    inputSearch: {
        width: '100%',
        height: 50, padding: 5, alignContent: 'center', shadowColor: '#d5dbe3', borderRadius: 50
    },
    text: {
        padding: 4,
        margin: 4,
    },
    
    screen: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e90ff',
      },
      input: {
        width: 300,
        height: 40,
        borderRadius: 15, 
        fontSize: 16,
      }
})
export default Login