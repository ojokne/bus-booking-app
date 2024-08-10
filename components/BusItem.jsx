import { Entypo } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, Text, View, StyleSheet } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default BusItem = () => {
  return (
    <Pressable style={styles.busContainer}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          style={styles.image}
          source={require("../assets/images/yy.jpeg")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <View style={{ paddingTop: 20, flex: 2 / 3, paddingHorizontal: 20 }}>
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
  );
};

const styles = StyleSheet.create({
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
