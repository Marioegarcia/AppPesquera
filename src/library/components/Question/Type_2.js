import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import res from "res/R";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default Type_2 = ({ data }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.gpElement}>
      <Text style={styles.lblgpElementTitle}>{data.title}</Text>
      <View
        style={[
          styles.gpElementItem,
          text !== "" && { borderColor: res.colors.valid },
        ]}
      >
        <TextInput
          placeholder={data.placeHolder}
          keyboardType="numeric"
          value={text}
          onChangeText={(value) => setText(value)}
          style={[
            styles.txtGpElementItemField,
            text !== "" && { borderColor: res.colors.valid },
          ]}
        />
        <MaterialCommunityIcons
          name="numeric"
          color={"red"}
          style={[
            styles.icGpElementItem,
            text !== "" && { color: res.colors.valid },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gpElement: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  lblgpElementTitle: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Calibri",
    textAlign: "center",
    fontWeight: "bold",
  },
  gpElementItem: {
    height: 60,
    minHeight: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    flexDirection: "row",
    marginTop: 5,
  },
  icGpElementItem: {
    color: "#000000",
    fontSize: 25,
    marginRight: 18,
    alignSelf: "center",
  },
  txtGpElementItemField: {
    height: 40,
    color: "#121212",
    fontSize: 12,
    fontFamily: res.fonts.value,
    textAlign: "justify",
    flex: 1,
    marginRight: 21,
    marginLeft: 15,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
