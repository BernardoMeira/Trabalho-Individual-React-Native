import { useEffect, useState } from "react";
import { styles } from "./style";
import { Alert, FlatList, Text, View, Image } from "react-native";
import { TextInputComponent } from "../../Components/TextInput";
import { CardFlatlist } from "../../Components/CardFlatlist";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "@expo/vector-icons/Ionicons";
import axios from "axios";

type PropsApi = {
  id: string;
  nome: string;
  descricao: string;
  valor: number;
  imagemUrl: string;
  jogoUrl: string;
  recomendado: boolean;
};

export function Home() {
  const [dataApi, setDataApi] = useState<PropsApi[]>([]);
  const [dataRecommendedItems, setDataRecommendedItems] = useState<PropsApi[]>(
    []
  );
  const [filterName, setFilterName] = useState<string>("");

  const loadApi = async () => {
    await axios
      .get("http://10.0.2.2:8080/games")
      .then((response) => {
        setDataApi(response.data);
        setDataRecommendedItems(
          response.data.filter((item: any) => item.recomendado)
        );
      })
      .catch((error) => {
        Alert.alert("Erro na requisição!", error.response.data);
        console.log("Erro na requisição!", error);
      });
  };

  const handleSearch = (nome: string) => {
    setFilterName(nome);
  };

  const resulFilters = dataApi.filter((nome) => {
    const inputName = filterName.toLocaleLowerCase();
    const nameApi = nome.nome.toLowerCase();
    return nameApi.includes(inputName);
  });

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#184656", "#21405F", "#18293D"]}
        style={styles.background}
      />
      <View style={styles.header}>
        <View style={styles.headerTop}>
          {/* <View style={styles.containerLogo}>
            <Image style={styles.logo} source={Logo} alt="Logo" />
          </View> */}
          <View style={styles.searchBar}>
            <TextInputComponent
              style={styles.styleInput}
              placeholder="Buscar..."
              onChangeValue={handleSearch}
              // logo={true}
            />
          </View>
          <View style={[styles.icons, { marginRight: 10 }]}>
            <Icon name="ellipsis-vertical" size={30} color={"#94999D"} />
          </View>
          <View style={styles.icons}>
            <Icon name="person-circle-outline" size={50} color={"#94999D"} />
          </View>
        </View>

        <View style={styles.headerBottom}>
          <View style={[{ flexDirection: "row" }]}>
            <Text style={styles.headerText}>MENU</Text>
            <View style={[{ marginTop: -4 }]}>
              <Icon name="chevron-down-outline" size={19} color={"#94999D"} />
            </View>
          </View>

          <Text style={styles.headerText}>WISHLIST</Text>
          <View style={[{ flexDirection: "row" }]}>
            <Text style={styles.headerText}>WALLET</Text>
            <Text style={[styles.headerText, { color: "#66c0f4" }]}>
              {" "}
              (R$ 0,00)
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.titleText}>RECOMENDADOS E EM DESTAQUE</Text>

      <FlatList
        horizontal={true}
        data={dataRecommendedItems}
        renderItem={({ item }) => <CardFlatlist data={item} />}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.titleText}>TODOS OS JOGOS</Text>

      <FlatList
        horizontal={true}
        data={resulFilters.reverse()}
        renderItem={({ item }) => <CardFlatlist data={item} />}
        keyExtractor={(item) => item.id}
      />
      {dataApi.length <= 0 && <Text>Loading...</Text>}
    </View>
  );
}
