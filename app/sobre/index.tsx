// app/sobre/index.tsx
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Sobre() {
  const sections = [
    {
      title: "Tecnologias Utilizadas",
      items: [
        "React Native",
        "Expo Router",
        "React Native Paper (UI components)",
        "GitHub API",
      ],
    },
    {
      title: "Funcionalidade Extra",
      content: [
        "Integração em tempo real com a API pública do GitHub",
        "Lista seus repositórios diretamente na tela de Projetos",
        "Atualiza automaticamente conforme você cria novos projetos",
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sobre este App</Text>
      <Text style={styles.subtitle}>
        Construído com intenção para mostrar quem sou, o que sei e como penso.
      </Text>

      {sections.map((section, i) => (
        <View key={i} style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.items ? (
            <View>
              {section.items.map((item, j) => (
                <Text key={j} style={styles.listItem}>
                  • {item}
                </Text>
              ))}
            </View>
          ) : section.content ? (
            <View>
              {section.content.map((line, j) => (
                <Text key={j} style={styles.listItem}>
                  ✓ {line}
                </Text>
              ))}
            </View>
          ) : null}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#4B5563",
    marginBottom: 24,
    lineHeight: 20,
  },
  sectionCard: {
    marginBottom: 24,
    backgroundColor: "#f9fafb",
    borderRadius: 16,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
  },

  listItem: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 8,
    lineHeight: 18,
  },
  tipBox: {
    backgroundColor: "#e0f2fe",
    borderLeftWidth: 4,
    borderLeftColor: "#0ea5e9",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    padding: 20,
    marginTop: 24,
  },
  tipTitle: {
    fontWeight: "600",
    color: "#0c4a6e",
  },
  tipText: {
    fontSize: 14,
    color: "#1f2937",
    marginTop: 4,
    lineHeight: 18,
  },
});
