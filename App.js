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
  Alert,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Custom brand color for a distinct, professional look (Deep Maroon)
const PRIMARY_BRAND_COLOR = "#7E1D40"; 

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    // ... (Your calculation logic remains the same)
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
    // Using the custom brand color for "Normal weight"
    if (category === "Underweight") return "#FF9500"; 
    if (category === "Normal weight") return PRIMARY_BRAND_COLOR; // Custom Color for Goal
    if (category === "Overweight") return "#FF9500"; 
    if (category === "Obesity") return "#FF3B30"; 
    return PRIMARY_BRAND_COLOR;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.keyboardContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView 
            contentContainerStyle={styles.scrollContent} 
            showsVerticalScrollIndicator={false}
          >
            {/* LARGE TITLE HEADER - Pushed down with extra padding */}
            <View style={styles.headerContainer}>
              <Text style={styles.largeTitle}>Health Tracker</Text>
              <Text style={styles.subtitle}>Body Mass Index</Text>
            </View>

            {/* INPUT CARD CONTAINER - More "present" and larger padding */}
            <View style={styles.card}>
              <Text style={styles.cardHeader}>Enter your metrics</Text>
              
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Height (cm)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g., 175"
                  placeholderTextColor="#AEAEB2"
                  keyboardType="numeric"
                  value={height}
                  onChangeText={setHeight}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Weight (kg)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g., 70"
                  placeholderTextColor="#AEAEB2"
                  keyboardType="numeric"
                  value={weight}
                  onChangeText={setWeight}
                />
              </View>
            </View>

            {/* PRIMARY BUTTON - Distinct Maroon Color */}
            <TouchableOpacity 
                style={styles.button} 
                onPress={calculateBMI}
                activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Calculate BMI</Text>
            </TouchableOpacity>

            {/* RESULT DISPLAY - More "present" and deeper shadow */}
            {bmi && (
              <View style={styles.resultCard}>
                <Text style={styles.resultLabel}>Your Current BMI</Text>
                <Text style={[styles.bmiValue, { color: getCategoryColor() }]}>
                  {bmi}
                </Text>
                {/* Category Pill */}
                <View style={[
                  styles.categoryPill, 
                  { backgroundColor: getCategoryColor() }
                ]}>
                  <Text style={styles.categoryText}>{category}</Text>
                </View>
              </View>
            )}
            
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F2F2F7", // iOS System Background Light
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: "center",
    // *** FIX: Added large top padding to push content down ***
    paddingTop: 50, 
  },
  
  // --- iOS Header/Title Styles ---
  headerContainer: {
    width: '100%',
    paddingVertical: 10,
    marginBottom: 30, // Increased margin below the title block
  },
  largeTitle: {
    fontSize: 38, // Slightly larger font size
    fontWeight: '700', 
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400', 
    color: '#8E8E93',
  },
  
  // --- Card Container (More Presence) ---
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16, // Increased radius
    padding: 25, // More padding to feel bigger
    marginBottom: 30, // More space below the card
    // Deeper, more noticeable iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15, 
    shadowRadius: 8,
    elevation: 5,
  },
  cardHeader: {
    fontSize: 19,
    fontWeight: '600', 
    color: '#000000',
    marginBottom: 15,
    borderBottomColor: '#E5E5EA',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  
  // --- Input Group & Field Styles ---
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#48484A',
    marginBottom: 6,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: '400',
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },

  // --- Button Styles (Maroon) ---
  button: {
    backgroundColor: PRIMARY_BRAND_COLOR, // Custom Maroon Color
    paddingVertical: 18, // Taller button
    borderRadius: 14, // More rounded
    width: "100%",
    alignItems: "center",
    // Custom Shadow matching the maroon
    shadowColor: PRIMARY_BRAND_COLOR,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4, // Deeper shadow
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700", 
    fontSize: 19,
  },
  
  // --- Result Display (More Presence) ---
  resultCard: {
    marginTop: 40,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 35, // More padding
    alignItems: "center",
    // Deeper shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  resultLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#8E8E93',
    marginBottom: 15,
  },
  bmiValue: {
    fontSize: 64, // Largest, most impactful number display
    fontWeight: "700",
    marginBottom: 25,
  },
  categoryPill: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});