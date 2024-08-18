import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  FlatList,
  Platform,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { COLORS } from "../../constants/colors";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from "expo-linking";

export default function Page() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const handlePhoneCall = () => {
    // Replace with the phone number you want to dial
    const phoneNumber = "tel:+1234567890";
    Linking.openURL(phoneNumber);
  };

  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require(`../../assets/images/jinja-bridge.jpg`)}
        resizeMode="center"
        style={{
          width: "100%",
          height: 300,
        }}
        imageStyle={{
          width: "100%",
          height: "100%",
        }}
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.3)", "transparent"]} // Gradient from transparent to semi-transparent black
          style={{
            paddingTop: insets.top + 20,
            paddingBottom: insets.bottom + 30,
            height: 300,
          }}
        >
          <Pressable
            onPress={() => {
              router.back();
            }}
            style={{ paddingHorizontal: 20 }}
          >
            <Feather name="arrow-left" size={24} color="#fff" />
          </Pressable>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.curvedContainer}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View>
            {/* name and amount */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}
            >
              <View>
                <Text style={styles.title}>YY Coaches</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: -5,
                  }}
                >
                  <Fontisto
                    name="map-marker-alt"
                    size={12}
                    color={COLORS.primary}
                  />
                  <Text
                    style={{
                      fontFamily: "Roboto-Regular",
                      paddingHorizontal: 5,
                      color: "#888",
                    }}
                  >
                    Kampala - Lira
                  </Text>
                </View>
              </View>
              <Text style={styles.title}>UGX 30,000</Text>
            </View>

            {/* rating time and duration */}
            <View
              style={{
                paddingHorizontal: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Feather name="star" size={16} color={COLORS.primary} />
                <Text
                  style={{
                    fontFamily: "Poppins-Bold",
                    color: "#555",
                    paddingLeft: 5,
                    top: 3,
                  }}
                >
                  4.5
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Feather name="clock" size={16} color={COLORS.primary} />
                <Text
                  style={{
                    fontFamily: "Poppins-Bold",
                    color: "#555",
                    paddingLeft: 5,
                    top: 3,
                  }}
                >
                  22:00
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Fontisto
                  name="map-marker-alt"
                  size={12}
                  color={COLORS.primary}
                />
                <Text
                  style={{
                    fontFamily: "Poppins-Bold",
                    color: "#555",
                    paddingLeft: 5,
                    top: 3,
                  }}
                >
                  7 hrs
                </Text>
              </View>
            </View>

            {/* stops */}
            <View
              style={{
                paddingTop: 10,
                paddingHorizontal: 20,
              }}
            >
              <Text style={styles.subTitle}>Stops</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Poppins-Regular",
                        color: "#888",
                        top: -10,
                      }}
                    >
                      Karuma Bridge
                    </Text>
                  </View>

                  <View></View>
                </View>
              </View>
            </View>

            {/* amenities */}
            <View
              style={{
                paddingHorizontal: 20,
              }}
            >
              <Text style={styles.subTitle}>Amenities</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AntDesign name="wifi" size={24} color={"#888"} />
                    <Text
                      style={{
                        fontFamily: "Poppins-Regular",
                        color: "#888",
                        top: 3,
                      }}
                    >
                      Wifi
                    </Text>
                  </View>

                  <View></View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome name="tv" size={24} color={"#888"} />
                    <Text
                      style={{
                        fontFamily: "Poppins-Regular",
                        color: "#888",
                        top: 3,
                      }}
                    >
                      Central TV
                    </Text>
                  </View>

                  <View></View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="power-socket-uk"
                      size={24}
                      color={"#888"}
                    />
                    <Text
                      style={{
                        fontFamily: "Poppins-Regular",
                        color: "#888",
                        top: 3,
                      }}
                    >
                      Socket
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="popcorn"
                      size={24}
                      color={"#888"}
                    />
                    <Text
                      style={{
                        fontFamily: "Poppins-Regular",
                        color: "#888",
                        top: 3,
                      }}
                    >
                      Snacks
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* contact */}
            <View
              style={{
                paddingHorizontal: 20,
                backgroundColor: "#cbdbe2",
                marginHorizontal: 20,
                marginTop: 40,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#fff",
                      padding: 10,
                      borderRadius: 50,
                      marginRight: 10,
                    }}
                  >
                    <AntDesign name="user" size={48} color={"#cbdbe2"} />
                  </View>
                  <View>
                    <Text style={styles.subTitle}>Tommy Jaison</Text>

                    <Text
                      style={{
                        fontFamily: "Poppins-Regular",
                        color: "#888",
                        top: -10,
                      }}
                    >
                      Sales
                    </Text>
                  </View>
                </View>
                <Pressable onPress={handlePhoneCall}>
                  <AntDesign name="phone" size={24} color={"#3CB371"} />
                </Pressable>
              </View>
            </View>
          </View>

          <View
            style={{
              paddingBottom: 220,
            }}
          >
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Book Seats</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "#555",
  },
  subTitle: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    color: "#555",
    paddingVertical: 15,
  },
  curvedContainer: {
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 200,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    fontSize: 16,
  },
});
