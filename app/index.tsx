import { Button } from "@react-navigation/elements";
import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import { useCameraPermissions } from "expo-camera";
import { StyleSheet } from "react-native";
import { navigate } from "expo-router/build/global-state/routing";
import QRCode from "react-native-qrcode-svg";

const styles = StyleSheet.create({
  connectButton: {
    marginTop: 20,
    width: 200,
    textAlign: "center",
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    color: "white",
    borderRadius: 8,
    fontWeight: "bold",
  },
}); 


export default function Index() {

  const [permission, requestPermission] = useCameraPermissions();

  const isPermission = Boolean(permission?.granted); 

  let logoT = require('../assets/images/favicon.png');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World</Text>
      <View style={{ gap: 20 }}>
      <Pressable onPress={requestPermission}>
        <Text style={styles.connectButton}> Open Camera</Text>
      </Pressable>
      
      <Pressable disabled = {!isPermission}  onPress={() => {navigate("/scanner")}}  >
        <Text style={[
          styles. connectButton,
          { opacity: !isPermission ? 0.5 : 1},
          ]}
        >Scan QR</Text>
      </Pressable>
          
      <QRCode 
        value = "https://skedula-business.vercel.app/"
        logo= {logoT}
        logoBackgroundColor="grey"
        size = {200}
        logoBorderRadius={10}
      />

    </View>

    </View>
  );
}
