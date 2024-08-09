import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
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
import { Entypo, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Page() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { origin, destination } = useLocalSearchParams();

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
            <Text style={styles.title}>{origin}</Text>
            <MaterialCommunityIcons name="bus-side" size={36} color="#fff" />

            <Text style={styles.title}>{destination}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.scrollViewContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Pressable style={styles.dateContainer}>
            <Feather name="calendar" size={18} color={COLORS.primary} />

            <Text
              style={{
                color: COLORS.primary,
                fontFamily: "Roboto-Bold",
                paddingLeft: 5,
              }}
            >
              Monday, 01 Nov 2024
            </Text>
            <Entypo
              name="chevron-small-down"
              size={28}
              color={COLORS.primary}
            />
          </Pressable>
          {/* bus list */}
          <Pressable style={styles.busContainer}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/images/yy.jpeg")}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View
                style={{ paddingTop: 20, flex: 2 / 3, paddingHorizontal: 20 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    YY Coaches
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    UGX 30,000
                  </Text>
                </View>
                <View
                  style={{
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#888",
                      paddingHorizontal: 1,
                      fontFamily: "Roboto-Light",
                    }}
                  >
                    Wifi
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    08:30
                  </Text>

                  <Text
                    style={{
                      color: "#888",
                      paddingHorizontal: 5,
                      fontSize: 12,
                      fontFamily: "Roboto-Light",
                    }}
                  >
                    --- 8hrs & 1 stop ---
                  </Text>

                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    16:00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    backgroundColor: "#ffe8cc",
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    color: "orange",
                    fontFamily: "Poppins-Bold",
                  }}
                >
                  4.5
                  <Entypo name="star" size={16} color={"orange"} />
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Light",
                    paddingLeft: 5,
                    fontSize: 10,
                  }}
                >
                  20 ratings
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                    fontSize: 12,
                  }}
                >
                  20
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                    fontSize: 12,
                  }}
                >
                  Seats available
                </Text>
              </View>
            </View>
          </Pressable>

          <Pressable style={styles.busContainer}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/images/yy.jpeg")}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View
                style={{ paddingTop: 20, flex: 2 / 3, paddingHorizontal: 20 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    YY Coaches
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    UGX 30,000
                  </Text>
                </View>
                <View
                  style={{
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#888",
                      paddingHorizontal: 1,
                      fontFamily: "Roboto-Light",
                    }}
                  >
                    Wifi
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    08:30
                  </Text>

                  <Text
                    style={{
                      color: "#888",
                      paddingHorizontal: 5,
                      fontSize: 12,
                      fontFamily: "Roboto-Light",
                    }}
                  >
                    --- 8hrs & 1 stop ---
                  </Text>

                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    16:00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    backgroundColor: "#ffe8cc",
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    color: "orange",
                    fontFamily: "Poppins-Bold",
                  }}
                >
                  4.5
                  <Entypo name="star" size={16} color={"orange"} />
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Light",
                    paddingLeft: 5,
                    fontSize: 10,
                  }}
                >
                  20 ratings
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                    fontSize: 12,
                  }}
                >
                  20
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                    fontSize: 12,
                  }}
                >
                  Seats available
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.busContainer}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/images/yy.jpeg")}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View
                style={{ paddingTop: 20, flex: 2 / 3, paddingHorizontal: 20 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    YY Coaches
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    UGX 30,000
                  </Text>
                </View>
                <View
                  style={{
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#888",
                      paddingHorizontal: 1,
                      fontFamily: "Roboto-Light",
                    }}
                  >
                    Wifi
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    08:30
                  </Text>

                  <Text
                    style={{
                      color: "#888",
                      paddingHorizontal: 5,
                      fontSize: 12,
                      fontFamily: "Roboto-Light",
                    }}
                  >
                    --- 8hrs & 1 stop ---
                  </Text>

                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    16:00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    backgroundColor: "#ffe8cc",
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    color: "orange",
                    fontFamily: "Poppins-Bold",
                  }}
                >
                  4.5
                  <Entypo name="star" size={16} color={"orange"} />
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Light",
                    paddingLeft: 5,
                    fontSize: 10,
                  }}
                >
                  20 ratings
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                    fontSize: 12,
                  }}
                >
                  20
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                    fontSize: 12,
                  }}
                >
                  Seats available
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.busContainer}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/images/yy.jpeg")}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View
                style={{ paddingTop: 20, flex: 2 / 3, paddingHorizontal: 20 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    YY Coaches
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    UGX 30,000
                  </Text>
                </View>
                <View
                  style={{
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#888",
                      paddingHorizontal: 1,
                      fontFamily: "Roboto-Light",
                    }}
                  >
                    Wifi
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    08:30
                  </Text>

                  <Text
                    style={{
                      color: "#888",
                      paddingHorizontal: 5,
                      fontSize: 12,
                      fontFamily: "Roboto-Light",
                    }}
                  >
                    --- 8hrs & 1 stop ---
                  </Text>

                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    16:00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    backgroundColor: "#ffe8cc",
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    color: "orange",
                    fontFamily: "Poppins-Bold",
                  }}
                >
                  4.5
                  <Entypo name="star" size={16} color={"orange"} />
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Light",
                    paddingLeft: 5,
                    fontSize: 10,
                  }}
                >
                  20 ratings
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                    fontSize: 12,
                  }}
                >
                  20
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                    fontSize: 12,
                  }}
                >
                  Seats available
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.busContainer}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/images/yy.jpeg")}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View
                style={{ paddingTop: 20, flex: 2 / 3, paddingHorizontal: 20 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    YY Coaches
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    UGX 30,000
                  </Text>
                </View>
                <View
                  style={{
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#888",
                      paddingHorizontal: 1,
                      fontFamily: "Roboto-Light",
                    }}
                  >
                    Wifi
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    08:30
                  </Text>

                  <Text
                    style={{
                      color: "#888",
                      paddingHorizontal: 5,
                      fontSize: 12,
                      fontFamily: "Roboto-Light",
                    }}
                  >
                    --- 8hrs & 1 stop ---
                  </Text>

                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    16:00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    backgroundColor: "#ffe8cc",
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    color: "orange",
                    fontFamily: "Poppins-Bold",
                  }}
                >
                  4.5
                  <Entypo name="star" size={16} color={"orange"} />
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Light",
                    paddingLeft: 5,
                    fontSize: 10,
                  }}
                >
                  20 ratings
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                    fontSize: 12,
                  }}
                >
                  20
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                    fontSize: 12,
                  }}
                >
                  Seats available
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.busContainer}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/images/yy.jpeg")}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View
                style={{ paddingTop: 20, flex: 2 / 3, paddingHorizontal: 20 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    YY Coaches
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    UGX 30,000
                  </Text>
                </View>
                <View
                  style={{
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#888",
                      paddingHorizontal: 1,
                      fontFamily: "Roboto-Light",
                    }}
                  >
                    Wifi
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    08:30
                  </Text>

                  <Text
                    style={{
                      color: "#888",
                      paddingHorizontal: 5,
                      fontSize: 12,
                      fontFamily: "Roboto-Light",
                    }}
                  >
                    --- 8hrs & 1 stop ---
                  </Text>

                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    16:00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    backgroundColor: "#ffe8cc",
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    color: "orange",
                    fontFamily: "Poppins-Bold",
                  }}
                >
                  4.5
                  <Entypo name="star" size={16} color={"orange"} />
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Light",
                    paddingLeft: 5,
                    fontSize: 10,
                  }}
                >
                  20 ratings
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                    fontSize: 12,
                  }}
                >
                  20
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                    fontSize: 12,
                  }}
                >
                  Seats available
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.busContainer}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                style={styles.image}
                source={require("../../assets/images/yy.jpeg")}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View
                style={{ paddingTop: 20, flex: 2 / 3, paddingHorizontal: 20 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    YY Coaches
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    UGX 30,000
                  </Text>
                </View>
                <View
                  style={{
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#888",
                      paddingHorizontal: 1,
                      fontFamily: "Roboto-Light",
                    }}
                  >
                    Wifi
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    08:30
                  </Text>

                  <Text
                    style={{
                      color: "#888",
                      paddingHorizontal: 5,
                      fontSize: 12,
                      fontFamily: "Roboto-Light",
                    }}
                  >
                    --- 8hrs & 1 stop ---
                  </Text>

                  <Text
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    16:00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    backgroundColor: "#ffe8cc",
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    color: "orange",
                    fontFamily: "Poppins-Bold",
                  }}
                >
                  4.5
                  <Entypo name="star" size={16} color={"orange"} />
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Light",
                    paddingLeft: 5,
                    fontSize: 10,
                  }}
                >
                  20 ratings
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                    fontSize: 12,
                  }}
                >
                  20
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                    fontSize: 12,
                  }}
                >
                  Seats available
                </Text>
              </View>
            </View>
          </Pressable>
        </ScrollView>
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
    position: "absolute",
    top: 130,
    zIndex: 2,
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    width: "100%",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  busContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#888",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    marginBottom: 10,
  },
  image: {
    flex: 1 / 3,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
