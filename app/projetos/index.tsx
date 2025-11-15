import { ScrollView, StyleSheet, Text, View } from "react-native";

type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    id: "inclusiveaid",
    title: "InclusiveAID",
    tagline: "Tecnologia acessível para todos os perfis de deficiência",
    description:
      "App e site desenvolvidos em hackathon que adaptam automaticamente interface, navegação e leitura conforme o perfil do usuário (visual, auditiva, motora ou cognitiva). Funcionalidades incluem: alto contraste dinâmico, leitura de tela inteligente, navegação por atalhos e simplificação de conteúdo.",
    tech: ["React", "TypeScript", "Figma", "Acessibilidade Web"],
  },
  {
    id: "greenomie",
    title: "Greenomie",
    tagline: "Incentivando escolhas sustentáveis desde o primeiro semestre",
    description:
      "App desenvolvido no 1º período de Sistemas para Internet (UNICAP) para promover o consumo consciente. Conecta usuários a estabelecimentos que vendem produtos recicláveis ou sustentáveis, com sistema de recompensas por compras verdes (ex: descontos, selos de impacto) e acompanhamento de pegada ecológica pessoal.",
    tech: ["Figma"],
  },
];

export default function Projetos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meus Projetos</Text>
      <Text style={styles.subtitle}>
        Soluções que unem tecnologia, criatividade e impacto — todos com código
        aberto.
      </Text>

      <View style={styles.projectsList}>
        {projects.map((project) => (
          <View key={project.id} style={styles.projectCard}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectTagline}>{project.tagline}</Text>
              </View>
            </View>

            <Text style={styles.projectDescription} numberOfLines={3}>
              {project.description}
            </Text>

            <View style={styles.techRow}>
              {project.tech.map((t, i) => (
                <View key={i} style={styles.techTag}>
                  <Text style={styles.techText}>{t}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
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
  projectsList: {
    marginBottom: 32,
  },
  projectCard: {
    backgroundColor: "#f9fafb",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  projectTagline: {
    fontSize: 14,
    color: "#374151",
    fontStyle: "italic",
  },
  statusBadge: {
    backgroundColor: "#dbeafe",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1d4ed8",
  },
  projectDescription: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
    marginBottom: 16,
  },
  techRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  techTag: {
    backgroundColor: "#A84DB880",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  techText: {
    fontSize: 12,
    color: "#ffffffff",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  roleText: {
    fontSize: 13,
    color: "#64748b",
    fontStyle: "italic",
  },
  linksRow: {
    flexDirection: "row",
    gap: 8,
  },
  linkButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0f2fe",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  linkText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#0c4a6e",
    marginLeft: 4,
  },
  ctaSection: {
    backgroundColor: "#f0fdf4",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 24,
  },
  ctaText: {
    fontSize: 15,
    color: "#065f46",
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "500",
  },
  ctaButton: {
    backgroundColor: "#10b981",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
