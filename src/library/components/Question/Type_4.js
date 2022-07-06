import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import "moment/locale/es";

import res from "res/R";
moment.updateLocale("es", {
  months:
    "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
      "_"
    ),
});

const Type_4 = ({ data }) => {
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState(new Date(moment()));

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // console.warn("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
  };
  return (
    <TouchableOpacity
      style={styles.gpElement}
      onPress={() => {
        setDatePickerVisibility(true);
      }}
    >
      <Text style={styles.lblgpElementTitle}>{data.title}</Text>
      <View style={styles.gpElementItem}>
        <Text
          style={styles.txtGpElementItemField}
        >
          {moment(date).format("MMMM D")} del {moment(date).format("yyyy")}
        </Text>
        <FontistoIcon name="date" style={styles.icGpElementItem} />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </TouchableOpacity>
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
    borderColor: res.colors.valid,
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

export default Type_4;
