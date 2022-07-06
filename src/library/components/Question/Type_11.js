import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import res from "res/R";
import FoundationIcon from "react-native-vector-icons/Foundation";

const Type_11 = ({ data }) => {
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
          multiline
          numberOfLines={3}
          placeholder={data.placeHolder}
          keyboardType="default"
          value={text}
          onChangeText={(value) => setText(value)}
          style={styles.txtGpElementItemField}
        />
        <FoundationIcon
          name="text-color"
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
    flex: 1,
    marginVertical: 15,
  },
  lblgpElementTitle: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Calibri",
    textAlign: "center",
    fontWeight: 'bold'
  },
  gpElementItem: {
    minHeight: 100,
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
    minHeight: 100,
    color: "#121212",
    fontSize: 12,
    fontFamily: res.fonts.value,
    textAlign: "justify",
    flex: 1,
    marginRight: 21,
    marginLeft: 15,
    alignSelf: "center",
    fontWeight: "bold",
    lineHeight: 12,
  },
});

export default Type_11;
