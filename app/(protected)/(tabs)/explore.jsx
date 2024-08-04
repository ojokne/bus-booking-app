import { Link } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import { COLORS } from "../../../constants/colors";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Page() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#fff" }}
      >
        <View style={{ paddingVertical: 10 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins-Bold",
              paddingHorizontal: 20,
              color: "#555",
            }}
          >
            Top destinations from kampala
          </Text>

          {/* <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={styles.topPicks}>
              <Image
                style={styles.image}
                source="https://picsum.photos/id/110/367/267"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View style={styles.textContainer}>
                <Text style={styles.townName}>Lira, Uganda</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.fromText}>From UGX</Text>
                  <Text style={styles.amount}>30,000</Text>
                </View>

                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Find a bus</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.topPicks}>
              <Image
                style={styles.image}
                source="https://picsum.photos/id/25/367/267"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View style={styles.textContainer}>
                <Text style={styles.townName}>Lira, Uganda</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.fromText}>From UGX</Text>
                  <Text style={styles.amount}>30,000</Text>
                </View>

                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Find a bus</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.topPicks}>
              <Image
                style={styles.image}
                source="https://picsum.photos/id/28/367/267"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View style={styles.textContainer}>
                <Text style={styles.townName}>Lira, Uganda</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.fromText}>From UGX</Text>
                  <Text style={styles.amount}>30,000</Text>
                </View>

                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Find a bus</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.topPicks}>
              <Image
                style={styles.image}
                source="https://picsum.photos/id/29/367/267"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View style={styles.textContainer}>
                <Text style={styles.townName}>Lira, Uganda</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.fromText}>From UGX</Text>
                  <Text style={styles.amount}>30,000</Text>
                </View>

                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Find a bus</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView> */}
          {/* northern */}
          <View>
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                paddingHorizontal: 20,
                color: "#555",
              }}
            >
              Northern Uganda
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
              }}
            >
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/110/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Lira, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable
                    style={styles.button}
                    onPress={() => handleFindBus()}
                  >
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/25/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Gulu, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/28/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Arua, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/29/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Kitgum, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>

          {/* western */}
          <View>
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                paddingHorizontal: 20,
                color: "#555",
              }}
            >
              Western Uganda
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
              }}
            >
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/110/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Mbarara, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/25/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Kasese, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/28/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Kabale, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/29/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Isingiro, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>

          {/* eastern */}
          <View>
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                paddingHorizontal: 20,
                color: "#555",
              }}
            >
              Eastern Uganda
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
              }}
            >
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/110/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Mbale, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/25/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Tororo, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/28/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>kapchorwa, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/29/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Soroti, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <Link href="/(protected)/ticket" asChild>
        <Text
          style={{
            padding: 20,
            color:"blue"
          }}
        >
          Check ticket
        </Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.accent,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  topPicks: {
    borderRadius: 10,
    width: 250,
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
    fontFamily: "Poppins-Regular",
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
