import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";

type PropsApi = {
  id: string;
  nome: string;
  descricao: string;
  valor: number;
  imagemUrl: string;
  jogoUrl: string;
  recomendado: boolean;
};

interface PropsComponent {
  data: PropsApi;
}

export function CardFlatlist({ data }: PropsComponent) {
  return (
    <View style={[styles.containerInfo]}>
      <LinearGradient
        colors={["#0A1823", "#18344A"]}
        style={styles.background}
      />
      <View style={styles.card}>
        <Image
          style={styles.imagemGame}
          source={{ uri: data.imagemUrl }}
          alt="Foto do Jogo"
        />
        <Text style={styles.gameName}>{data.nome}</Text>
        <Text style={styles.gameValor}>R$ {data.valor.toFixed(2)}</Text>
      </View>
    </View>
  );
}
