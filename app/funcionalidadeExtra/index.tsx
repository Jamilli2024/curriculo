// app/projetos/index.tsx
import { MaterialIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};

export default function funcionalidadeExtra() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.github.com/users/Jamilli2024/repos?sort=updated&per_page=10"
        );
        if (!res.ok) throw new Error("Usuário não encontrado");
        const data: Repo[] = await res.json();
        const filtered = data.filter((r) => !r.fork).slice(0, 6);
        setRepos(filtered);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const openRepo = (url: string) => Linking.openURL(url);

  const getLanguageColor = (lang: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Java: "#b07219",
      Python: "#3572A5",
      Shell: "#89e051",
    };
    return lang && colors[lang] ? colors[lang] : "#94a3b8";
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meus Projetos</Text>
      <Text style={styles.subtitle}>
        Repositórios públicos do meu GitHub — atualizados em tempo real via API.
      </Text>

      {loading ? (
        <View style={styles.centeredContainer}>
          <ActivityIndicator size="large" color="#A84DB8" />
          <Text style={styles.loadingText}>Carregando projetos...</Text>
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <MaterialIcons name="error-outline" size={48} color="#ef4444" />
          <Text style={styles.errorTitle}>Erro ao carregar</Text>
          <Text style={styles.errorSubtitle}>
            Verifique se o usuário{" "}
            <Text style={styles.monospace}>@CauaGNP</Text> existe no GitHub.
          </Text>
        </View>
      ) : repos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <MaterialIcons name="inbox" size={48} color="#94a3b8" />
          <Text style={styles.emptyText}>
            Nenhum repositório público encontrado
          </Text>
        </View>
      ) : (
        <View>
          {repos.map((repo) => (
            <TouchableOpacity
              key={repo.id}
              onPress={() => openRepo(repo.html_url)}
              style={styles.repoCard}
            >
              <View style={styles.repoHeader}>
                <View style={styles.repoInfo}>
                  <Text style={styles.repoName}>{repo.name}</Text>
                  {repo.language && (
                    <View style={styles.languageRow}>
                      <View
                        style={[
                          styles.languageDot,
                          { backgroundColor: getLanguageColor(repo.language) },
                        ]}
                      />
                      <Text style={styles.languageText}>{repo.language}</Text>
                    </View>
                  )}
                </View>

                {repo.stargazers_count > 0 && (
                  <View style={styles.starBadge}>
                    <MaterialIcons name="star" size={14} color="#ea580c" />
                    <Text style={styles.starCount}>
                      {repo.stargazers_count}
                    </Text>
                  </View>
                )}
              </View>

              {repo.description && (
                <Text style={styles.repoDescription} numberOfLines={2}>
                  {repo.description.length > 100
                    ? repo.description.substring(0, 100) + "..."
                    : repo.description}
                </Text>
              )}

              <View style={styles.linkRow}>
                <MaterialIcons name="open-in-new" size={16} color="#A84DB8" />
                <Text style={styles.linkText}>Ver no GitHub</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View style={styles.footer}>
        <Text style={styles.footerHint}>Quer ver mais? Acesse meu perfil:</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/Jamilli2024")}
        >
          <Text style={styles.footerLink}>github.com/Jamilli2024</Text>
        </TouchableOpacity>
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
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 48,
  },
  loadingText: {
    marginTop: 16,
    color: "#4B5563",
    fontSize: 14,
  },
  errorContainer: {
    paddingVertical: 32,
    alignItems: "center",
  },
  errorTitle: {
    marginTop: 12,
    color: "#dc2626",
    fontWeight: "500",
    fontSize: 16,
  },
  errorSubtitle: {
    marginTop: 4,
    color: "#4B5563",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 16,
  },
  monospace: {
    fontFamily: "Courier New",
    fontWeight: "500",
  },
  emptyContainer: {
    paddingVertical: 32,
    alignItems: "center",
  },
  emptyText: {
    marginTop: 12,
    color: "#4B5563",
    fontSize: 14,
  },
  repoCard: {
    backgroundColor: "#f9fafb",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  repoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  repoInfo: {
    flex: 1,
  },
  repoName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },
  languageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  languageDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  languageText: {
    fontSize: 12,
    color: "#4B5563",
  },
  starBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff7ed",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  starCount: {
    marginLeft: 4,
    fontSize: 10,
    color: "#ea580c",
    fontWeight: "500",
  },
  repoDescription: {
    marginTop: 12,
    fontSize: 14,
    color: "#374151",
    lineHeight: 18,
  },
  linkRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  linkText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#A84DB8",
    fontWeight: "500",
  },
  footer: {
    marginTop: 32,
    paddingBottom: 24,
    alignItems: "center",
  },
  footerHint: {
    color: "#64748b",
    fontSize: 12,
    textAlign: "center",
  },
  footerLink: {
    marginTop: 4,
    color: "#A84DB8",
    fontWeight: "500",
    fontSize: 14,
    textAlign: "center",
  },
});
