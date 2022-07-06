import React, { useEffect, useState, useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import res from "res/R";
import FormInfo from "library/components/FormInfo";
import Config from "library/configForm";
import Question from "library/components/Question";
import StepIndicator from "library/components/StepIndicator";
import FormExecuteLoad from "library/components/Loading/FormExecute";

const FormExecute = (props) => {
  // const aceEditorRef = useRef();
  let aceEditorRef = React.createRef();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stepCount, setStepCount] = useState(0);
  const [activeStep, setActiveStep] = useState(0);


  const Paint = ({ data }) => {
    switch (data.type) {
      case 1:
        return useMemo(() => <Question.Type_1 data={data} />, [data]);
      case 2:
        return useMemo(() => <Question.Type_2 data={data} />, [data]);
      case 3:
        return useMemo(() => <Question.Type_3 data={data} />, [data]);
      case 4:
        return useMemo(() => <Question.Type_4 data={data} />, [data]);
      case 5:
        return useMemo(() => <Question.Type_5 data={data} />, [data]);
      case 7:
        return useMemo(() => <Question.Type_7 data={data} />, [data]);
      case 8:
        return useMemo(() => <Question.Type_8 data={data} />, [data]);
      case 9:
        return useMemo(() => <Question.Type_9 data={data} />, [data]);
      case 10:
        return useMemo(() => <Question.Type_10 data={data} />, [data]);
      case 11:
        return useMemo(() => <Question.Type_11 data={data} />, [data]);
      case 13:
        return useMemo(() => <Question.Type_13 data={data} />, [data]);
      case 14:
        return useMemo(() => <Question.Type_14 data={data} />, [data]);
      case 15:
        return useMemo(() => <Question.Type_15 data={data} />, [data]);
      case 16:
        return useMemo(() => <Question.Type_16 data={data} />, [data]);
      default:
        return useMemo(() => <Question.Type_12 data={data} />, [data]);
    }
  };

  useEffect(() => {
    if (props.route.params.data) {
      switch (props.route.params.data.idForm) {
        case 1:
          setFile(Config.FT_IV_24);
          break;
        case 2:
          setFile(Config.FT_IV_18);
          break;
        case 3:
          setFile(Config.FT_IV_14);
          break;
        case 4:
          setFile(Config.FT_IV_15);
          break;
        case 5:
          setFile(Config.FT_IV_19);
          break;
        default:
          setFile(Config.FT_TEST);
          break;
      }
      // setTimeout(() => {
      setLoading(false);
      // }, 2000);
    }
  }, [props.route.params]);

  onPressPosition = (position) => {
    setActiveStep(position);
  }

  const renderItem = ({ item }) => {
    return (
      <Paint data={item} />
    );
  };

  const renderFooter = () => (
    file ? (
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom:40, marginTop:30 }}>
        {
          activeStep !== 0 && (
            <TouchableOpacity
              style={[res.palette.btnDanger, { marginVertical: 20, marginHorizontal: 10 }]}
              onPress={async () => {
                setLoading(true);
                setActiveStep(activeStep - 1);
                setLoading(false);
                aceEditorRef.scrollToOffset({ x: 0, y: 0, animated: true, })
              }}
            >
              <Text style={res.palette.btnDangerText}>
                Atrás
              </Text>
            </TouchableOpacity>
          )
        }
        <TouchableOpacity
          style={[res.palette.btnConfirm, { marginVertical: 20 }]}
          onPress={async () => {
            if (parseInt(file.questions.length / 10) === (activeStep + 1)) {
              props.navigation.navigate("Main", {});
            } else {
              setLoading(true);
              setActiveStep(activeStep + 1);
              setLoading(false);
              aceEditorRef.scrollToOffset({ x: 0, y: 0, animated: true, })
              // aceEditorRef.scrollToTop();
            }
          }}
        >
          <Text style={res.palette.btnConfirmText}>
            {
              parseInt(file.questions.length / 10) === (activeStep + 1) ? 'ENVIAR' : 'Siguiente'
            }
          </Text>
        </TouchableOpacity>
      </View>
    ) :
      <>
      </>
  );

  const renderHeader = () => (
    <>
      <StepIndicator
        data={file ? file.questions : []}
        activeStep={activeStep}
        onPressAction={onPressPosition}
      />
      {/* <FormInfo data={props.route.params.data} /> */}
    </>
  );

  const renderList = () => {
    const tempStep = activeStep + 1;
    const questionStart = tempStep === 1 ? tempStep : tempStep * 10 - 9;
    const questionEnd = tempStep === parseInt(file.questions.length / 10) ? file.questions.length : questionStart + 9;

    const currentFilter = p => p.cons >= questionStart && p.cons <= questionEnd;
    return file.questions.filter(currentFilter);
  };

  return (
    <View style={styles.container}>
      <View style={{ display: !file || loading ? 'flex' : 'none' }}>
        <FormExecuteLoad />
      </View>
      <FlatList
        ref={ref => {
          aceEditorRef = ref;
        }}
        data={file ? renderList() : []}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: res.colors.simpleBackgroundColor,
  },
});

export default FormExecute;
