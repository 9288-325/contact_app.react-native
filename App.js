// In App.js in a new project

import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function SignInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign In</Text>
      <View style={styles.signUpContainer}>
        <Text>Dont have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.formContainer}
          placeholder="Email"   
        />
      </View>
      <View style={styles.signUpContainer}>
        <Text>Paaword</Text>
        <TextInput
          style={styles.formContainer}
          placeholder="Password"   
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("ContactForm")}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
function SignUpScreen() {
  return (
    <View>
    <View style={styles.signUpContainer}>
      <Text>Sign Up Screen</Text>
    </View>
    <View style={styles.signUpContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.formContainer}
          placeholder="Email"   
        />
      </View>
      <View style={styles.signUpContainer}>
        <Text>Password</Text>
        <TextInput
          style={styles.formContainer}
          placeholder="Paaword"   
        />
      </View>
      <View style={styles.signUpContainer}>
        <Text>Secret</Text>
        <TextInput
          style={styles.formContainer}
          placeholder="Secret"   
        />
      </View>
      <TouchableOpacity>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      
    </View>
  );
}
function ContactFormScreen() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [text, setText] = useState("");
  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.Container}>Add Contacts</Text>
      <View style={styles.signUpContainer}>
        <Text>Name</Text>
        <TextInput
          style={styles.formContainer}
          placeholder="Name"
          onChangeText={(newText) => setName(newText)}
          defaultValue={name}
        />
      </View>
      <View style={styles.signUpContainer}>
        <Text>Ph no</Text>
        <TextInput
          style={styles.formContainer}
          placeholder="Phonenumber"
          onChangeText={(newText) => setNum(newText)}
          defaultValue={num}
        />
      </View>
      <View style={styles.signUpContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.formContainer}
          placeholder="Email"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
      </View>

      <TouchableOpacity>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ContactForm" component={ContactFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  signUpContainer: {
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },

  formContainer: {
    height: 40,
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
});

export default App;