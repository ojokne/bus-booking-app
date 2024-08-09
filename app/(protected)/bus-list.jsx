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
//           }}
//         >
//           <Text style={styles.title}>Kampala</Text>
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <View
//               style={{
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <MaterialCommunityIcons name="bus-side" size={36} color="#fff" />
//               <View
//                 style={{
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontSize: 12,
//                     color: "#fff",
//                     fontFamily: "Roboto-Regular",
//                     paddingHorizontal: 5,
//                   }}
//                 >
//                   Monday, 01 Nov 2024
//                 </Text>
//                 <Entypo name="chevron-small-down" size={24} color={"#fff"} />
//               </View>
//             </View>
//           </View>
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
              marginTop: 20,
            }}
          >
            <Text style={styles.title}>Kampala</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="bus-side"
                  size={36}
                  color="#fff"
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#fff",
                      fontFamily: "Roboto-Regular",
                      paddingHorizontal: 5,
                    }}
                  >
                    Monday, 01 Nov 2024
                  </Text>
                  <Entypo name="chevron-small-down" size={24} color={"#fff"} />
                </View>
              </View>
            </View>
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
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            perferendis, nam unde laboriosam ea velit fuga consectetur explicabo
            ullam excepturi. Tempora magni eum iste eos voluptatum soluta
            provident nulla velit consectetur placeat cum possimus, pariatur
            laudantium perspiciatis praesentium consequatur omnis suscipit
            inventore laborum necessitatibus temporibus molestias vero. Facilis
            ab vero tenetur cupiditate fugiat enim perferendis aperiam pariatur
            accusamus eius consectetur atque a beatae aut amet praesentium
            commodi laborum, qui suscipit sunt laboriosam. Illum ut nulla ipsa
            eum possimus magni voluptate obcaecati facere minima quod suscipit
            eligendi officiis porro reiciendis perspiciatis quas, eius hic. Id,
            minus unde reprehenderit aliquid voluptatem magni.
          </Text>
        </ScrollView>
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
