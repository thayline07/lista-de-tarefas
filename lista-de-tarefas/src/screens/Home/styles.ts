import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  container: {
    paddingTop: 70,
    paddingBottom: 80,
    alignItems: "center",
    backgroundColor: "#0D0D0D",
  },
  titulo: {
    color: "#C562AF",
    fontWeight: "bold",
    fontSize: 34,
  },
  tituloColor: {
    color: "#B33791",
  },
  inputContainer: {
    marginTop: 20,
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
    marginHorizontal: 10,
    position: "absolute",
    top: "16.5%",
    left: 5,
    right: 20,
  },
  input: {
    backgroundColor: "#262626",
    padding: 20,
    flex: 1,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
  },
  botaoAdicionar: {
    backgroundColor: "#C562AF",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
  },
  containerTarefas: {
    marginTop: 60,
    marginHorizontal: 25,
  },
  containerTarefasTitulos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerTitulos: {
    display: "flex",
    flexDirection: "row",
    columnGap: 7,
    textAlign: "center",
  },
  tituloDois: {
    color: "#C562AF",
    fontWeight: "bold",
    fontSize: 16,
  },
  tituloTres: {
    color: "#B33791",
    fontWeight: "bold",
    fontSize: 16,
  },
  numeroDeTarefas: {
    color: "#d9d9d9",
    backgroundColor: "#262626",
    paddingHorizontal: 8,
    borderRadius: 10,
    fontWeight: "bold",
  },
  linha: {
    marginTop: 20,
    width: "100%",
    height: 1,
    backgroundColor: "#262626",
  },
  semTarefas: {
    alignItems: "center",
    marginTop: 60,
  },
  semTarefasTitulo: {
    color: "#808080",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 15,
  },
  semTarefasTexto: {
    color: "#808080",
    fontSize: 14,
  },
  tarefa: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  tarefaAlign: {
    display: "flex",
    flexDirection: "row",
    columnGap: 15,
    alignItems: "center",
  },
  tarefaCheckbox: {
    borderRadius: 20,
    padding: 6,
  },
  textoTarefa: {
    color: "#d9d9d9",
    fontSize: 15,
    flexWrap: "wrap",
    maxWidth: "83%",
  },
  textoTarefaConcluida: {
    color: "#808080",
    fontSize: 15,
    flexWrap: "wrap",
    maxWidth: "83%",
    textDecorationLine: "line-through",
  },
  delete: {
    width: 17,
    height: 17,
  },
});
