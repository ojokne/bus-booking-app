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
//       <ImageBackground
//         source={require("../../assets/images/lira-1.jpeg")}
//         style={styles.headerContainer}
//         imageStyle={styles.headerContainerImage}
//         resizeMode="cover"
//       >
//         <LinearGradient
//           colors={["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.6)"]} // Gradient from transparent to semi-transparent black
//           style={{
//             paddingHorizontal: 20,
//             paddingTop: insets.top + 20,
//             paddingBottom: insets.bottom + 30,
//             borderBottomLeftRadius: 20,
//             borderBottomRightRadius: 20,
//           }}
//         >
//           <Pressable
//             onPress={() => {
//               router.back();
//             }}
//           >
//             <Feather name="arrow-left" size={24} color="#fff" />
//           </Pressable>
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//               marginTop: 20,
//             }}
//           >
//             <Text style={styles.title}>Kampala</Text>
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 marginBottom: 30,
//               }}
//             >
//               <View
//                 style={{
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <MaterialCommunityIcons
//                   name="bus-side"
//                   size={36}
//                   color="#fff"
//                 />
//                 <View
//                   style={{
//                     flexDirection: "row",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Text
//                     style={{
//                       fontSize: 12,
//                       color: "#fff",
//                       fontFamily: "Roboto-Regular",
//                       paddingHorizontal: 5,
//                     }}
//                   >
//                     Monday, 01 Nov 2024
//                   </Text>
//                   <Entypo name="chevron-small-down" size={24} color={"#fff"} />
//                 </View>
//               </View>
//             </View>
//             <Text style={styles.title}>Lira</Text>
//           </View>
//         </LinearGradient>
//       </ImageBackground>

//       <ScrollView
//         // horizontal
//         showsHorizontalScrollIndicator={false}
//         showsVerticalScrollIndicator={false}
//         style={styles.scrollViewContainer}
//         contentContainerStyle={{
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <View
//           style={{
//             width: "90%",
//             paddingHorizontal: 20,
//             backgroundColor: "#fff",
//             borderRadius: 10,
//             elevation: 3,
//             shadowColor: "#888",
//             shadowOffset: {
//               width: 0,
//               height: 2,
//             },
//             shadowOpacity: 0.25,
//             marginBottom: 10,
//           }}
//         >
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//         </View>
//         <View
//           style={{
//             width: "90%",
//             paddingHorizontal: 20,
//             backgroundColor: "#fff",
//             borderRadius: 10,
//             elevation: 3,
//             shadowColor: "#888",
//             shadowOffset: {
//               width: 0,
//               height: 2,
//             },
//             shadowOpacity: 0.25,
//             marginBottom: 10,
//           }}
//         >
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//         </View>
//         <View
//           style={{
//             width: "90%",
//             paddingHorizontal: 20,
//             backgroundColor: "#fff",
//             borderRadius: 10,
//             elevation: 3,
//             shadowColor: "#888",
//             shadowOffset: {
//               width: 0,
//               height: 2,
//             },
//             shadowOpacity: 0.25,
//             marginBottom: 10,
//           }}
//         >
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//         </View>
//         <View
//           style={{
//             width: "90%",
//             paddingHorizontal: 20,
//             backgroundColor: "#fff",
//             borderRadius: 10,
//             elevation: 3,
//             shadowColor: "#888",
//             shadowOffset: {
//               width: 0,
//               height: 2,
//             },
//             shadowOpacity: 0.25,
//             marginBottom: 10,
//           }}
//         >
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//         </View>
//         <View
//           style={{
//             width: "90%",
//             paddingHorizontal: 20,
//             backgroundColor: "#fff",
//             borderRadius: 10,
//             elevation: 3,
//             shadowColor: "#888",
//             shadowOffset: {
//               width: 0,
//               height: 2,
//             },
//             shadowOpacity: 0.25,
//             marginBottom: 10,
//           }}
//         >
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//         </View>
//         <View
//           style={{
//             width: "90%",
//             paddingHorizontal: 20,
//             backgroundColor: "#fff",
//             borderRadius: 10,
//             elevation: 3,
//             shadowColor: "#888",
//             shadowOffset: {
//               width: 0,
//               height: 2,
//             },
//             shadowOpacity: 0.25,
//             marginBottom: 10,
//           }}
//         >
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//         </View>
//         <View
//           style={{
//             width: "90%",
//             paddingHorizontal: 20,
//             backgroundColor: "#fff",
//             borderRadius: 10,
//             elevation: 3,
//             shadowColor: "#888",
//             shadowOffset: {
//               width: 0,
//               height: 2,
//             },
//             shadowOpacity: 0.25,
//             marginBottom: 10,
//           }}
//         >
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//         </View>
//         <View
//           style={{
//             width: "90%",
//             paddingHorizontal: 20,
//             backgroundColor: "#fff",
//             borderRadius: 10,
//             elevation: 3,
//             shadowColor: "#888",
//             shadowOffset: {
//               width: 0,
//               height: 2,
//             },
//             shadowOpacity: 0.25,
//             marginBottom: 10,
//           }}
//         >
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//         </View>
//         <View
//           style={{
//             width: "90%",
//             paddingHorizontal: 20,
//             backgroundColor: "#fff",
//             borderRadius: 10,
//             elevation: 3,
//             shadowColor: "#888",
//             shadowOffset: {
//               width: 0,
//               height: 2,
//             },
//             shadowOpacity: 0.25,
//             marginBottom: 10,
//           }}
//         >
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//           <Text>Lorem ipsum dolor sit amet.</Text>
//         </View>
//       </ScrollView>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   headerContainer: {
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//     // height: 200,
//     zIndex: 1,
//   },
//   headerContainerImage: {
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   title: {
//     fontSize: 18,
//     color: "#fff",
//     fontFamily: "Poppins-Bold",
//     paddingVertical: 10,
//   },
//   scrollViewContainer: {
//     marginTop: 10,
//     position: "absolute",
//     top: 150,
//     zIndex: 2,
//     width: "100%",
//     height: "100%",
//     // backgroundColor: "#f5f5f5",
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
        style={styles.headerContainer}
        imageStyle={styles.headerContainerImage}
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
            }}
          >
            <Text style={styles.title}>Kampala</Text>
            <MaterialCommunityIcons name="bus-side" size={36} color="#fff" />

            <Text style={styles.title}>Lira</Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <View
        style={{
          position: "absolute",
          top: 130,
          zIndex: 2,
          backgroundColor: "#fff",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: "100%",
        }}
      >
        {/* <ScrollView
          // horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.scrollViewContainer}
          // contentContainerStyle={{
          //   justifyContent: "center",
          //   alignItems: "center",
          // }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: "#fff",
              borderRadius: 10,
              elevation: 3,
              shadowColor: "#888",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
            }}
          >
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              beatae consequatur consequuntur corporis non vero, ab optio iusto
              suscipit tenetur numquam, voluptas ducimus maxime, consectetur
              ipsum dignissimos accusamus quibusdam obcaecati. Deserunt facilis
              obcaecati id recusandae quo sint, fugit, laudantium unde dolores
              magnam possimus, at voluptas praesentium libero delectus hic quam
              dolor necessitatibus quidem eligendi quod nostrum. Saepe laborum
              commodi fugiat labore voluptate? Eum, eius aut maxime beatae
              laboriosam nisi maiores magnam aspernatur amet placeat sint
              praesentium minus necessitatibus at explicabo rem deserunt! A nam,
              sunt enim natus modi sit consequatur praesentium, deserunt autem
              repudiandae at neque commodi necessitatibus quos sed.
            </Text>
          </View>
        </ScrollView> */}

        <Pressable
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Feather name="calendar" size={18} color={"#000"} />

          <Text
            style={{
              // fontSize: 12,
              color: "#000",
              fontFamily: "Roboto-Bold",
              paddingHorizontal: 5,
            }}
          >
            Monday, 01 Nov 2024
          </Text>
          {/* <Entypo name="chevron-small-down" size={36} color={"#000"} /> */}
        </Pressable>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore
          perferendis repudiandae odit vel unde suscipit distinctio
          reprehenderit cum nemo atque voluptates autem nam veniam voluptas
          facilis aperiam obcaecati laudantium eius velit, amet incidunt porro
          alias! Maxime sed dolore, delectus deserunt, perferendis officia
          voluptatem autem, assumenda asperiores odio est quasi eum deleniti
          iste labore ea similique vero. Rerum eveniet maxime obcaecati amet
          enim quidem! Harum totam exercitationem hic quia temporibus distinctio
          modi minima odit ex, rem a! Animi dicta corporis quaerat quis nemo ab
          nobis magnam, ratione, labore maiores sed modi assumenda ullam
          distinctio pariatur unde mollitia culpa deleniti. Sunt.
        </Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,

    zIndex: 1,
  },
  headerContainerImage: {
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Poppins-Bold",
    paddingVertical: 10,
  },
  scrollViewContainer: {
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
