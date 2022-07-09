import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import res from "res/R";
import { Chip } from "react-native-elements";

const Type_10 = ({ data }) => {
  const [listData, setListData] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => { }, [listData]);
  return (
    <View style={styles.gpElement}>
      <Text style={styles.lblgpElementTitle}>{data.title}</Text>
      <View
        style={[
          styles.gpElementItem,
          listData.length !== 0 && { borderColor: res.colors.valid },
        ]}
      >
        <TextInput
          placeholder={data.placeHolder}
          keyboardType="default"
          value={text}
          onChangeText={(value) => setText(value)}
          style={styles.txtGpElementItemField}
        />
        <TouchableOpacity
          disabled={text.length < 3}
          onPress={() => {
            if (text.length >= 3) {
              listData.push(text);
              setListData(listData);
              setText("");
            }
          }}
          style={[
            styles.btnPlus,
            text.length < 3 || { backgroundColor: res.colors.green },
          ]}
        >
          <Text style={styles.lblPlus}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerChip}>
        {listData.map((item, id) => (
          <Chip
            key={id}
            // onPress={() => alert()}
            onPress={() =>
              setListData(listData.filter((item, ind) => ind !== id))
            }
            iconRight
            icon={{
              name: "close",
              type: "font-awesome",
              size: 20,
              color: "white",
            }}
            title={item}
            buttonStyle={{ alignSelf: "center", margin: 5 }}
          />
        ))}
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
    fontWeight: 'bold'
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
    fontSize: 30,
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
  btnPlus: {
    backgroundColor: res.colors.simpleBorderColor,
    alignSelf: "center",
    borderRadius: 5,
    marginRight: 20,
  },
  lblPlus: {
    fontSize: 24,
    marginHorizontal: 10,
    color: "#FFFFFF",
  },
  containerChip: {
    margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Type_10;
