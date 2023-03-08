import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/style";

export default function HomeScreen({ navigation }){
    return(
        <View style={styles.container}>
            <Text>A Home Screen</Text>
            {/* <Button
                mode="outlined"
                onPress={() => {navigation.navigate("AboutScreen")}}>Sobre</Button>
            <Button
                mode="outlined"
                onPress={() => {navigation.navigate("AboutScreen")}}>Contato</Button>
            <Button
                mode="outlined"
                onPress={() => {navigation.navigate("Surprise")}}>Surpresa?</Button> */}
        </View>
    )
}