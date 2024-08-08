// import React, { useState } from "react";
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Platform,
//   Pressable,
//   ImageBackground,
// } from "react-native";
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from "react-native-safe-area-context";
// import { COLORS } from "../../constants/colors";
// import {
//   Entypo,
//   Feather,
//   Fontisto,
//   Ionicons,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import { LinearGradient } from "expo-linear-gradient";

// export default function Page() {
//   const insets = useSafeAreaInsets();
//   const [destination, setDesination] = useState("");
//   const router = useRouter();

//   const handleFindBus = () => {
//     router.push({
//       pathname: "/(protected)/bus-list",
//       params: {
//         origin: "Kampala",
//         destination: "Lira",
//       },
//     });
//   };

//   return (
//     <SafeAreaProvider>
//       <View
//         style={[
//           styles.headerContainer,
//           {
//             paddingTop: insets.top + 30,
//             paddingBottom: insets.bottom + 30,
//             paddingHorizontal: 20,
//           },
//         ]}
//       >
//         <Pressable
//           onPress={() => {
//             router.back();
//           }}
//         >
//           <Feather name="arrow-left" size={24} color="#fff" />
//         </Pressable>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Text style={styles.title}>Kampala</Text>
//           <MaterialCommunityIcons name="bus-side" size={36} color="#fff" />
//           <Text style={styles.title}>Lira</Text>
//         </View>
//       </View>

//       <ScrollView
//         showsHorizontalScrollIndicator={false}
//         showsVerticalScrollIndicator={false}
//         style={{ backgroundColor: "#f5f5f5", marginTop: 20 }}
//       >
//         {/* popular destinations scroll bar */}
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{
//             justifyContent: "space-between",
//             alignItems: "center",
//             flexDirection: "row",
//           }}
//         ></ScrollView>
//       </ScrollView>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   headerContainer: {
//     backgroundColor: COLORS.accent,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   title: {
//     fontSize: 18,
//     color: "#fff",
//     fontFamily: "Poppins-Bold",
//     paddingVertical: 10,
//   },

//   button: {
//     padding: 10,
//     paddingVertical: Platform.OS === "ios" ? 15 : 10,
//     borderRadius: 10,
//     alignItems: "center",
//     width: "100%",
//     borderColor: "#555",
//     borderWidth: StyleSheet.hairlineWidth,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: "#555",
//     fontFamily: "Poppins-Regular",
//     fontSize: 12,
//   },
// });

import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Pressable,
  ImageBackground,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { COLORS } from "../../constants/colors";
import {
  Entypo,
  Feather,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Page() {
  const insets = useSafeAreaInsets();
  const [destination, setDesination] = useState("");
  const router = useRouter();

  const handleFindBus = () => {
    router.push({
      pathname: "/(protected)/bus-list",
      params: {
        origin: "Kampala",
        destination: "Lira",
      },
    });
  };

  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require("../../assets/images/lira-1.jpeg")}
        style={[
          {
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            height: 200,
            zIndex: 1,
          },
        ]}
        imageStyle={{
          width: "100%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.6)"]} // Gradient from transparent to semi-transparent black
          style={{
            paddingHorizontal: 20,
            paddingTop: insets.top + 20,
            paddingBottom: insets.bottom + 30,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            height: "100%",
          }}
        >
          <Pressable
            onPress={() => {
              router.back();
            }}
          >
            <Feather name="arrow-left" size={24} color="#fff" />
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={styles.title}>Kampala</Text>
            <MaterialCommunityIcons name="bus-side" size={36} color="#fff" />
            <Text style={styles.title}>Lira</Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#f5f5f5", marginTop: 20 }}
      >
        {/* popular destinations scroll bar */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        ></ScrollView>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.accent,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Poppins-Bold",
    paddingVertical: 10,
  },
  inputContainer: {
    position: "relative",
    marginVertical: 10,
    position: "absolute",
    top: 50,
    zIndex: 500,
    width: "100%",
    // paddingVertical: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    paddingLeft: 30,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#888",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: "50%",
    transform: [{ translateY: -7 }],
  },
  upComingTrips: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#888",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  upComingTripsTitle: {
    fontFamily: "Roboto-Medium",
    color: "#555",
    marginVertical: 10,
    fontSize: 18,
  },
  upComingTripsSubTitle: {
    fontFamily: "Roboto-Regular",
    color: "#888",
  },
  upComingTripsText: {
    fontFamily: "Roboto-Regular",
    color: "#A6A6A6",
  },

  popularDestinationsImageBackground: {
    flex: 1,
    height: 200,
    justifyContent: "flex-end",
    width: 140,
  },
  popularDestinationsImage: {
    borderRadius: 10,
  },
  popularDestinationsTextContainer: {
    padding: 10,
    borderBottomLeftRadius: 10, // Match border radius of image
    borderBottomRightRadius: 10, // Match border radius of image
  },
  popularDestinationsText: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 10,
  },
  topPicks: {
    borderRadius: 10,
    // width: 250,
    height: 250,
    margin: 10,
    elevation: 2,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  textContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 5,
  },

  townName: {
    fontFamily: "Roboto-Light",
    color: "#888",
    marginTop: 10,
  },
  fromText: {
    color: "#888",
    fontSize: 10,
    paddingVertical: 5,
    fontFamily: "Roboto-Light",
  },
  amount: {
    color: "#555",
    fontFamily: "Poppins-Bold",
    paddingHorizontal: 5,
  },
  button: {
    padding: 10,
    paddingVertical: Platform.OS === "ios" ? 15 : 10,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    borderColor: "#555",
    borderWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  buttonText: {
    color: "#555",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
});
