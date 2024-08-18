import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Platform,
  ScrollView,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { COLORS } from "../../constants/colors";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Page() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <SafeAreaProvider
      style={{
        backgroundColor: "#fff",
      }}
    >
      <ImageBackground
        source={require(`../../assets/images/jinja-bridge.jpg`)}
        style={{
          width: "100%",
          height: 250,
        }}
        imageStyle={{
          width: "100%",
          height: "100%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.6)", "transparent"]} // Gradient from transparent to semi-transparent black
          style={{
            paddingTop: insets.top + 20,
            paddingBottom: insets.bottom + 30,
            height: 250,
          }}
        >
          <View
            style={{
              flexDirection: "row",
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

            <Text style={styles.title}>Select Seats</Text>
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.scrollViewContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 180,
          }}
        >
          {/* seat layout */}
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
              },
              styles.busContainer,
            ]}
          >
            {/* first half of the bus */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              {/* column 1 */}
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>1</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>2</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>7</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>12</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>17</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>22</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>27</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>32</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>37</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>42</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>47</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>52</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>57</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>62</Text>
                </Pressable>
              </View>
              {/* column 2 */}
              <View>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>3</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>8</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>13</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>18</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>23</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>28</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>33</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>38</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>43</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>48</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>53</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>58</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>63</Text>
                </Pressable>
              </View>
            </View>

            {/* second half of the bus */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              {/* column 3 */}
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>4</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>9</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>14</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>19</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>24</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>29</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>34</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>39</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>44</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>49</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>54</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>59</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>65</Text>
                </Pressable>
              </View>
              {/* column 4 */}
              <View>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>5</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>10</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>15</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>20</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>25</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>30</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>35</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>40</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>45</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>50</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>55</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>60</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>66</Text>
                </Pressable>
              </View>
              {/* column 5 */}
              <View>
                <MaterialCommunityIcons
                  name="steering"
                  style={{
                    alignSelf: "center",
                  }}
                  size={40}
                />
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>6</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>11</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>16</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>21</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>26</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>31</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>36</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>41</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>46</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>51</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>56</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>61</Text>
                </Pressable>
                <Pressable style={styles.busSeat}>
                  <Text style={styles.seatNumber}>67</Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* indicator and button */}
          <View>
            <View
              style={{
                paddingHorizontal: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={[
                    styles.indicator,
                    {
                      backgroundColor: "#f2f2f2",
                    },
                  ]}
                ></View>
                <Text style={styles.subTitle}>Available</Text>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={[
                    styles.indicator,
                    {
                      backgroundColor: "#99CCFF",
                    },
                  ]}
                ></View>
                <Text style={styles.subTitle}>Booked</Text>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={[
                    styles.indicator,
                    {
                      backgroundColor: COLORS.primary,
                    },
                  ]}
                ></View>
                <Text style={styles.subTitle}>Selected</Text>
              </View>
            </View>
            <View
              style={{
                bottom: 0,
              }}
            >
              <Pressable
                style={[
                  styles.button,
                  isDisabled ? styles.disableButton : styles.activeButton,
                ]}
                disabled={isDisabled}
                onPress={isDisabled ? null : () => console.log("Checkout")}
              >
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "#fff",
  },
  subTitle: {
    fontFamily: "Roboto-Medium",
    color: "#555",
    paddingVertical: 15,
  },
  scrollViewContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 150,
    paddingHorizontal: 20,
  },

  busContainer: {
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginHorizontal: "5%",
    marginTop: 20,
  },
  busRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },

  busColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  busSeat: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 15,
    marginHorizontal: 1,
    marginBottom: 5,
  },

  seatNumber: {
    fontFamily: "Roboto-Medium",
    color: "#555",
    // fontSize: 8,
  },

  indicator: {
    marginTop: 20,
    padding: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 10,
    height: 10,
  },
  button: {
    padding: 10,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    borderRadius: 10,
    marginHorizontal: 20,
    position: "relative",
    marginTop: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  activeButton: {
    backgroundColor: COLORS.primary,
  },

  disableButton: {
    backgroundColor: "#cccccc",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    fontSize: 16,
  },
});
