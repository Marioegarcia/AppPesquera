import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Switch, ButtonGroup } from "react-native-elements";
import "moment/locale/es";

import res from "res/R";

const Type_5 = ({ data }) => {
  const [check, setCheck] = useState(false);
  const [listData, setListData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    let buttonsList = [];
    data.data.map((item, key) => {
      buttonsList.push(item.title);
    });
    setListData(buttonsList);
  }, []);

  return (
    <View style={styles.gpElement}>
      <Text style={styles.lblgpElementTitle}>{data.title}</Text>
      <ButtonGroup
        onPress={setSelectedIndex}
        selectedIndex={selectedIndex}
        buttons={listData}
        // containerStyle={{ height: 50 }}
        vertical
      />
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
    // borderRadius: 5,
    // borderColor: "rgba(0,0,0,1)",
    // borderWidth: 1,
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
    color: "#121212",
    fontSize: 12,
    fontFamily: res.fonts.value,
    textAlign: "center",
    flex: 1,
    marginLeft: 15,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default Type_5;
