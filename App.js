import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  SafeAreaView,
  Alert,
} from "react-native";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      Alert.alert("Error", "Please enter both height and weight!");
      return;
    }

    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      Alert.alert("Error", "Enter valid positive numbers!");
      return;
    }

    const bmiValue = w / ((h / 100) * (h / 100));
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 25) setCategory("Normal weight");
    else if (bmiValue < 30) setCategory("Overweight");
    else setCategory("Obesity");
  };

  const getCategoryColor = () => {
    if (category === "Underweight") return "#F39C12";
    if (category === "Normal weight") return "#2ECC71";
    if (category === "Overweight") return "#E67E22";
    if (category === "Obesity") return "#E74C3C";
    return "#3498DB";
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>BMI Calculator</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter height (cm)"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter weight (kg)"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />

          <TouchableOpacity style={styles.button} onPress={calculateBMI}>
            <Text style={styles.buttonText}>Calculate BMI</Text>
          </TouchableOpacity>

          {bmi && (
            <View
              style={[
                styles.resultContainer,
                { borderColor: getCategoryColor() },
              ]}
            >
              <Text style={styles.resultText}>Your BMI: {bmi}</Text>
              <Text style={[styles.categoryText, { color: getCategoryColor() }]}>
                {category}
              </Text>
            </View>
          )}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F9F9",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#34495E",
    marginBottom: 30,
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#BDC3C7",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#3498DB",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
    width: "90%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 30,
    padding: 20,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    width: "90%",
    alignItems: "center",
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  categoryText: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "600",
  },
});
