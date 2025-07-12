import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { styles } from "./styles";

type Tarefa = {
  nome: string;
  concluida: boolean;
};

export default function Home() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [textoInput, setTextoInput] = useState<string>("");

  function adicionarTarefas() {
    if (textoInput.trim() !== "") {
      setTarefas((prevState) => [
        ...prevState,
        { nome: textoInput, concluida: false },
      ]);
      setTextoInput(""); // limpa input
    }
    console.log(tarefas);
  }

  function deletarTarefa(name: string) {
    setTarefas((prevState) =>
      prevState.filter((participant) => participant.nome != name)
    );
    return console.log(tarefas);
  }

  function alternarCheckbox(name: string) {
    setTarefas((prevState) =>
      prevState.map((tarefa) =>
        tarefa.nome === name
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  }

  const tarefasOrdenadas = [...tarefas].sort((a, b) => {
    if (a.concluida === b.concluida) return 0;
    if (!a.concluida && b.concluida) return -1;
    return 1;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.titulo}>
          lista <Text style={styles.tituloColor}>de</Text> tarefas
          <Text style={styles.tituloColor}>.</Text>
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          value={textoInput}
          style={styles.input}
          onChangeText={(text) => setTextoInput(text)}
        ></TextInput>
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={adicionarTarefas}
        >
          <Image source={require("../../../assets/images/botao-add.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerTarefas}>
        <View style={styles.containerTarefasTitulos}>
          <View style={styles.containerTitulos}>
            <Text style={styles.tituloDois}>Criadas</Text>
            <Text style={styles.numeroDeTarefas}>0</Text>
          </View>
          <View style={styles.containerTitulos}>
            <Text style={styles.tituloTres}>Concluídas</Text>
            <Text style={styles.numeroDeTarefas}>0</Text>
          </View>
        </View>
        <View style={styles.linha}></View>

        {/* <View style={styles.tarefa}>
          <View style={styles.tarefaAlign}>
            <Checkbox
              color={isChecked ? "#C562AF" : undefined}
              style={styles.tarefaCheckbox}
              value={isChecked}
              onValueChange={setChecked}
            ></Checkbox>
            <Text style={styles.textoTarefa}>{tarefas[0]}</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.delete}
              source={require("../../../assets/images/delete.png")}
            />
          </TouchableOpacity>
        </View> */}

        {tarefas.length > 0 && (
          <FlatList
            data={tarefasOrdenadas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.tarefa}>
                <View style={styles.tarefaAlign}>
                  <Checkbox
                    color={item.concluida ? "#C562AF" : undefined}
                    style={styles.tarefaCheckbox}
                    value={item.concluida}
                    onValueChange={() => alternarCheckbox(item.nome)}
                  ></Checkbox>
                  <Text
                    style={
                      item.concluida
                        ? styles.textoTarefaConcluida
                        : styles.textoTarefa
                    }
                  >
                    {item.nome}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => deletarTarefa(item.nome)}>
                  <Image
                    style={styles.delete}
                    source={require("../../../assets/images/delete.png")}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}
