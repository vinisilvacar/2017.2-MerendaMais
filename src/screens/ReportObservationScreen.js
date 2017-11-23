import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../components/Header';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: 'white',
  },

  buttonContainer: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
  },

  content: {
    marginBottom: 9,
    flex: 6,
    flexDirection: 'column',
  },

  checkbox: {
    height: 25,
    borderWidth: 2,
    width: 25,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    borderColor: 'black',
    borderRadius: 2,
    flexWrap: 'wrap',
  },
  text: {
    flexDirection: 'row',
  },
  label: {
    paddingTop: 15,
    fontSize: 15,
    flex: 1,
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 12,
    height: height * 0.25,
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: width * 0.05,
    textAlignVertical: 'top',
  },
  textBox: {
    paddingLeft: 10,
    paddingTop: 30,
    paddingRight: 10,
  },
});

export default class ReportObservationScreen extends React.Component {
  concludeReport() {
    this.props.setStatusReportObservation(true);
    Actions.mainReportsScreen();
  }

  render() {
    return (
      <View style={styles.principal}>
        <Header
          title={'Relatório'}
          subTitle={'Observações adicionais'}
          backButton
        />
        <KeyboardAvoidingView style={styles.content} behavior="padding">
          <ScrollView>
            <View behavior="padding">
              <View style={styles.textBox}>
                <TextInput
                  onChangeText={text => this.props.setReportObservation(text)}
                  style={styles.textInput}
                  multiline
                  value={this.props.observation}
                  underlineColorAndroid="transparent"
                  placeholder="Observações gerais que gostaria de adicionar (opcional)"
                />
              </View>
            </View>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() =>
                this.concludeReport()
              }
              key="setObservation"
            >
              <Text style={styles.buttonText}>Concluir</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

ReportObservationScreen.propTypes = {
  setStatusReportObservation: PropTypes.func.isRequired,
  setReportObservation: PropTypes.func.isRequired,
  observation: PropTypes.string.isRequired,
};
