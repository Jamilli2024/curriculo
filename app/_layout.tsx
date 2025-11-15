// app/_layout.tsx (atualizado — 4 abas)
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#A84DB8",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          paddingBottom: 6,
          paddingTop: 6,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "500", marginBottom: 2 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sobre/index"
        options={{
          title: "Sobre",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="info-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="experiencia/index"
        options={{
          title: "Experiência",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="lightbulb" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="projetos/index"
        options={{
          title: "Projetos",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="code" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="funcionalidadeExtra/index"
        options={{
          title: "GitHub",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="book" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
