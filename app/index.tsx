import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>Bem vindo ao meu portifólio</Text>
        </View>

        <Text style={styles.nameText}>Jamilli Maria</Text>
        <Text style={styles.roleText}>
          Dev Front-end & Back-end (Full-Stack)
        </Text>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.sectionTitle}>Quem sou eu?</Text>
        <Text style={styles.aboutText}>
          Me chamo Jamilli, tenho 33 anos, atualmente cursando Sistemas para
          Internet na Universidade Católica de Pernambuco (UNICAP) e Análise e
          Desenvolvimento de Sistemas na Estácio.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  avatarContainer: {
    width: "100%",
    height: 112,
    borderRadius: 10,
    backgroundColor: "#A84DB8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  nameText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
  },
  roleText: {
    fontSize: 18,
    color: "#4B5563",
    marginTop: 8,
    textAlign: "center",
  },
  aboutContainer: {
    marginTop: 8,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 24,
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#374151",
  },
});
