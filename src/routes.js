import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/login";
import Pokemon from "./pages/pokemon";
import CadastrarUsuario from "./pages/cadastro";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "LOGIN PESQUISA POKEMON",
          headerLeft: null,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "red",
          },
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
            
          },
          
        }}
      />
      <Stack.Screen
        name="CadastrarUsuario"
        component={CadastrarUsuario}
        options={{
          title: "CADASTRO DE TREINADOR",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "red",
          },
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "POKÉDEX PESQUISA",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "red",
          },
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}
