import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function ProgressBar({ width }) {
  return (
    <View style={{ backgroundColor: "black", width: 200, marginHorizontal: 5 }}>
      <LinearGradient
        colors={["red", "yellow", "green"]}
        start={[0, 0]}
        end={[1, 0]}
        style={{ position: "absolute", left: 0, top: 0, bottom: 0, width }}
      />
    </View>
  );
}

function Bar({ number, title }) {
  return (
    <View
      style={{ flexDirection: "row", paddingBottom: 3, alignContent: "center" }}
    >
      <Text style={{ width: 50, textAlign: "right" }}>{title}</Text>
      <ProgressBar width={number} />

      <Text>{number}</Text>
    </View>
  );
}

export default function Card({ image, text, base }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
        alignContent: "center",
        paddingBottom: 10
      }}
    >
      <View
        style={{
          paddingHorizontal: 15,
          width: 120,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>{text}</Text>
        <Image
          style={{ width: 50, height: 50, marginVertical: 20 }}
          source={{ uri: image }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Bar title={"HP"} number={base["HP"]} />
        <Bar title={"ATK"} number={base["Attack"]} />
        <Bar title={"DEF"} number={base["Defense"]} />
        <Bar title={"SP.ATK"} number={base["Sp. Attack"]} />
        <Bar title={"SP.DEF"} number={base["Sp. Defense"]} />
        <Bar title={"SPEED"} number={base["Speed"]} />
      </View>
    </View>
  );
}
