import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Experiencias() {
  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}
      >
        <Text style={styles.title}>Experiências</Text>
        <Text style={styles.subtitle}>
          Formação acadêmica e trajetória profissional em construção.
        </Text>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={[styles.iconCircle, { backgroundColor: "#A84DB880" }]}>
              <Text style={styles.icon}>🎓</Text>
            </View>
            <Text style={styles.sectionTitle}>Acadêmica</Text>
          </View>

          <View style={[styles.card, { marginBottom: 24 }]}>
            <Text style={styles.cardTitle}>UNICAP</Text>
            <Text style={styles.cardSubtitle}>
              Bacharelado em Sistemas para Internet
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>• 4º período (2025.1)</Text>
              <Text style={styles.listItem}>
                • Disciplinas em foco: React Native, APIs REST, Banco de Dados,
                UX/UI
              </Text>
              <Text style={styles.listItem}>
                • Projetos interdisciplinares com impacto social
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.sectionHeader}>
            <View style={[styles.iconCircle, { backgroundColor: "#A84DB880" }]}>
              <Text style={styles.icon}>🚀</Text>
            </View>
            <Text style={styles.sectionTitle}>Profissional</Text>
          </View>

          <View style={[styles.card, { marginBottom: 24 }]}>
            <Text style={[styles.cardTitle, { fontWeight: "500" }]}>
              Em busca da primeira oportunidade
            </Text>
            <Text style={[styles.text, { marginTop: 12 }]}>
              Aos 32 anos, estou no início da minha trajetória — e escolhi
              começar criando, não esperando.
            </Text>
            <View style={styles.list}>
              <Text style={styles.checkItem}>
                <Text style={styles.checkmark}>✓</Text>
                Desenvolvo projetos pessoais para aplicar conceitos reais de
                front-end e back-end
              </Text>
              <Text style={styles.checkItem}>
                <Text style={styles.checkmark}>✓</Text>
                Contribuo com comunidades de tecnologia no Nordeste (GitHub,
                meetups)
              </Text>
              <Text style={styles.checkItem}>
                <Text style={styles.checkmark}>✓</Text>
                Busco estágio ou primeiro desafio em empresa que valorize
                aprendizado contínuo
              </Text>
            </View>
          </View>

          <View>
            <Text style={[styles.sectionSubtitle, { marginBottom: 12 }]}>
              Habilidades Técnicas
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                • Front-end: HTML, CSS, JavaScript, React, React Native
              </Text>
              <Text style={styles.listItem}>
                • Back-end: Node.js (básico), APIs REST
              </Text>
              <Text style={styles.listItem}>
                • Ferramentas: Git/GitHub, VS Code, Figma, Expo
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
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
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },
  card: {
    backgroundColor: "#f9fafb",
    borderRadius: 16,
    padding: 24,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#A84DB8",
    marginTop: 4,
  },
  list: {
    marginTop: 12,
  },
  listItem: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
    marginBottom: 6,
  },
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  checkItem: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
    marginBottom: 8,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  checkmark: {
    color: "#10b981",
    marginRight: 8,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
  },
});
