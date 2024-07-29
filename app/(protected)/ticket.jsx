import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { COLORS } from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import { useState } from "react";

export default function Page() {
  const [selectedPrinter, setSelectedPrinter] = useState();
  const html = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ticket</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 30px;
        background-color: #f5f5f5;
        width: 970;
        margin: 0 auto;
      }
      .ticket-container {
        padding: 0 30px;
      }
      .ticket {
        background-color: #fff;
        border-radius: 10px;
        padding: 30px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      .dashed-line {
        border-bottom: 1px dashed #ccc;
        margin: 20px 0;
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .column {
        flex: 1;
        text-align: left;
      }
      .column-right {
        text-align: right;
      }
      .icon {
        background-color: #f0f0f0;
        border-radius: 50%;
        padding: 10px;
        display: inline-block;
      }
      .icon img {
        width: 36px;
        height: 36px;
      }
      .name,
      .from,
      .to,
      .bus-registration,
      .ticket-number,
      .passengers,
      .seat-numbers {
        font-size: 12px;
        font-family: "Poppins", sans-serif;
        font-weight: bold;
      }
      .label {
        font-size: 10px;
        color: #888;
        padding: 5px 0;
      }
      .value {
        font-size: 12px;
        font-family: "Poppins", sans-serif;
        font-weight: bold;
      }
      .date-time {
        flex: 1;
        display: flex;
        align-items: center;
        border: 2px solid #f0f0f0;
        border-radius: 10px;
        padding: 10px;
      }
      .date-time img {
        width: 18px;
        height: 18px;
      }
    </style>
  </head>
  <body>
    <div class="ticket-container">
      <div class="ticket">
        <!-- Name and Icon -->
        <div class="row">
          <div style="display: flex; align-items: center">
            <div class="icon">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 225.000000 225.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M395 2236 c-158 -39 -280 -165 -314 -324 -6 -29 -11 -125 -11 -212 0
-152 -1 -160 -19 -160 -42 0 -51 -34 -51 -197 0 -167 7 -199 45 -209 l25 -6 0
-363 c0 -233 4 -374 11 -392 16 -42 48 -72 91 -83 l38 -11 0 -115 c0 -109 1
-116 25 -139 24 -24 28 -25 183 -25 146 0 162 2 186 21 25 20 26 23 26 140 l0
119 495 0 495 0 0 -119 c0 -117 1 -120 26 -140 24 -19 40 -21 186 -21 155 0
159 1 183 25 24 23 25 30 25 138 l0 115 27 7 c15 3 40 16 56 27 55 39 57 54
57 452 l0 364 25 6 c38 10 45 42 45 209 0 163 -9 197 -51 197 -18 0 -19 8 -19
160 0 87 -5 183 -11 212 -35 166 -169 297 -334 327 -87 16 -1373 13 -1440 -3z
m1483 -157 c34 -17 75 -47 92 -67 l30 -37 -441 -3 c-242 -1 -636 -1 -875 0
l-434 3 30 37 c17 20 58 50 92 67 l61 31 692 0 692 0 61 -31z m-820 -601 l-3
-353 -422 -3 -423 -2 0 355 0 355 425 0 425 0 -2 -352z m982 -3 l0 -355 -422
2 -423 3 -3 353 -2 352 425 0 425 0 0 -355z m0 -749 l0 -265 -26 -20 c-27 -21
-32 -21 -889 -21 -857 0 -862 0 -889 21 l-26 20 0 265 0 264 915 0 915 0 0
-264z m-1550 -516 l0 -70 -70 0 -70 0 0 70 0 70 70 0 70 0 0 -70z m1410 0 l0
-70 -70 0 -70 0 0 70 0 70 70 0 70 0 0 -70z"
                  />
                  <path
                    d="M434 830 c-32 -13 -71 -65 -78 -104 -10 -51 22 -119 66 -142 42 -22
109 -22 143 0 114 75 65 257 -70 255 -22 0 -49 -4 -61 -9z"
                  />
                  <path
                    d="M1684 822 c-113 -72 -63 -255 69 -255 62 0 105 26 128 79 26 57 17
105 -26 152 -27 30 -39 36 -86 39 -41 3 -61 0 -85 -15z"
                  />
                </g>
              </svg>
            </div>
            <div style="padding-left: 10px">
              <div class="name">YY Coaches</div>
            </div>
          </div>
          <div style="display: flex; align-items: center">
            <div class="label">UGX</div>
            <div
              class="name"
              style="color: #007fff; padding-left: 10px; font-size: 24px"
            >
              120,000
            </div>
          </div>
        </div>
        <div class="dashed-line"></div>
        <!-- Departure and Destination -->
        <div class="row" style="margin-bottom: 20px">
          <div class="column">
            <div class="label">From</div>
            <div class="value">Kampala</div>
            <div class="label">YY Bus Terminal</div>
          </div>
          <div class="column column-right">
            <div class="label">To</div>
            <div class="value">Lira</div>
            <div class="label">YY Bus Terminal</div>
          </div>
        </div>
        <!-- Date and Time -->
        <div class="row">
          <div class="date-time" style="margin-right: 10px">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 220.000000 229.000000"
              preserveAspectRatio="xMidYMid meet"
              fill="#007fff"
            >
              <g
                transform="translate(0.000000,229.000000) scale(0.100000,-0.100000)"
                fill="#007fff"
                stroke="none"
              >
                <path
                  d="M584 2110 c-30 -12 -77 -65 -91 -102 -6 -18 -12 -61 -12 -94 l-1 -62
-89 -4 c-98 -5 -129 -18 -161 -71 -19 -31 -20 -56 -20 -760 0 -803 -3 -767 63
-807 31 -19 56 -20 827 -20 771 0 796 1 827 20 66 40 63 4 63 807 0 704 -1
729 -20 760 -32 53 -63 66 -160 71 l-88 4 -4 79 c-8 138 -65 189 -210 189 -72
0 -90 -4 -119 -23 -61 -41 -79 -80 -79 -168 l0 -79 -210 0 -210 0 0 79 c0 88
-18 127 -79 168 -29 20 -46 23 -120 22 -47 0 -95 -4 -107 -9z m168 -144 c4 -6
8 -86 8 -178 0 -155 -1 -168 -19 -178 -28 -15 -97 -12 -110 4 -8 9 -11 68 -9
187 l3 174 35 6 c41 7 82 0 92 -15z m826 -165 c2 -119 -1 -178 -9 -187 -13
-16 -82 -19 -110 -4 -18 10 -19 23 -19 175 0 90 3 171 6 180 5 13 19 15 68 13
l61 -3 3 -174z m280 -923 l-3 -553 -755 0 -755 0 -3 553 -2 552 760 0 760 0
-2 -552z"
                />
              </g>
            </svg>
            <div style="padding-left: 10px" class="value">12 Sept 2024</div>
          </div>
          <div class="date-time" style="margin-left: 10px">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 225.000000 225.000000"
              preserveAspectRatio="xMidYMid
              meet"
              fill="#007fff"
            >
              <g
                transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                fill="#007fff"
                stroke="none"
              >
                <path
                  d="M890 2221 c-222 -50 -401 -150 -565 -315 -135 -136 -236 -315 -287
      -506 -20 -74 -23 -109 -23 -275 1 -174 3 -198 27 -287 53 -195 148 -358 293
      -503 166 -166 357 -268 583 -311 95 -18 319 -18 414 0 465 89 831 467 898 925
      19 129 8 355 -23 466 -108 386 -405 683 -791 792 -78 22 -115 26 -266 29 -144
      3 -190 0 -260 -15z m465 -116 c265 -64 501 -239 639 -474 249 -425 148 -977
      -236 -1286 -99 -79 -266 -164 -388 -197 -122 -32 -367 -32 -488 0 -363 95
      -638 371 -735 735 -31 118 -31 366 0 484 57 214 176 402 341 536 145 119 286
      181 502 221 55 10 297 -2 365 -19z"
                />
                <path
                  d="M1080 1891 c-6 -13 -10 -158 -10 -405 0 -336 2 -387 16 -400 13 -14
      56 -16 320 -16 191 0 313 4 325 10 22 12 27 74 7 87 -7 4 -134 10 -283 13
      l-270 5 -5 350 c-3 193 -9 356 -13 363 -13 20 -75 15 -87 -7z"
                />
              </g>
            </svg>

            <div style="padding-left: 10px" class="value">12:00 PM</div>
          </div>
        </div>
        <div class="dashed-line"></div>
        <!-- Bus Registration and Ticket Number -->
        <div class="row">
          <div class="column">
            <div class="label">Bus Registration</div>
            <div class="value" style="color: #007fff">UBM-123-X</div>
          </div>
          <div class="column column-right">
            <div class="label">Ticket Number</div>
            <div class="value" style="color: #007fff">12345</div>
          </div>
        </div>
        <!-- Number of Passengers and Seat Numbers -->
        <div class="row" style="margin-top: 10px">
          <div class="column">
            <div class="label">Passengers</div>
            <div class="value" style="color: #007fff">4</div>
          </div>
          <div class="column column-right">
            <div class="label">Seat Numbers</div>
            <div class="value" style="color: #007fff">C2,C3,C4,D3</div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

  `;
  const print = async () => {
    // On iOS/android prints the given html.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  };

  const printToFile = async () => {
    // On iOS/android prints the given html.
    const { uri } = await Print.printToFileAsync({ html });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };
  return (
    <LinearGradient
      colors={[COLORS.accent, COLORS.primary]}
      style={styles.container}
      locations={[0.2, 1]}
    >
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 20,
          paddingVertical: 60,
        }}
      >
        <Pressable
          onPress={() => {
            router.back();
          }}
        >
          <Feather name="chevron-left" size={28} color="#fff" />
        </Pressable>

        <Text
          style={{
            fontSize: 25,
            color: COLORS.secondary,
            fontFamily: "Poppins-Bold",
            paddingHorizontal: 30,
            textAlign: "center",
          }}
        >
          Your Ticket
        </Text>
        <Pressable onPress={printToFile}>
          <Feather name="share-2" size={28} color="#fff" />
        </Pressable>
      </View>
      <View style={styles.ticketContainer}>
        <View style={styles.ticket}>
          {/* name and icon */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#f0f0f0",
                borderRadius: 50,
                padding: 10,
              }}
            >
              <Ionicons
                name="bus"
                size={36}
                color="#000" // You can set the color of the icon if needed
              />
            </View>

            {/* name */}
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-Bold",
                }}
              >
                YY Coaches
              </Text>
              {/* <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Roboto-Regular",
                  color: "#888",
                }}
              >
                Passenger
              </Text> */}
            </View>
          </View>
          <View style={styles.dashedLine} />

          {/* depature and destination */}
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Roboto-Regular",
                    color: "#888",
                  }}
                >
                  From
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Poppins-Bold",
                  }}
                >
                  Kampala
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Roboto-Regular",
                    color: "#888",
                  }}
                >
                  YY Bus Terminal
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Roboto-Regular",
                    color: "#888",
                    textAlign: "right",
                  }}
                >
                  To
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Poppins-Bold",
                    textAlign: "right",
                  }}
                >
                  Lira
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Roboto-Regular",
                    color: "#888",
                    textAlign: "right",
                  }}
                >
                  YY Bus Terminal
                </Text>
              </View>
            </View>
          </View>

          {/* date and time */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                borderColor: "#f0f0f0",
              }}
            >
              <Feather name="calendar" color={COLORS.primary} size={18} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Roboto-Bold",
                  paddingLeft: 10,
                }}
              >
                12 Sept 2024
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                borderColor: "#f0f0f0",
              }}
            >
              <Feather name="clock" color={COLORS.primary} size={18} />

              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Poppins-Bold",
                  paddingLeft: 10,
                }}
              >
                12:00 PM
              </Text>
            </View>
          </View>

          <View style={styles.dashedLine} />

          {/* bus details */}

          {/* bus registration and ticket numbwe */}
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Roboto-Regular",
                    color: "#888",
                  }}
                >
                  Bus Registration
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Poppins-Bold",
                    color: COLORS.primary,
                  }}
                >
                  UBM-123-X
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Roboto-Regular",
                    color: "#888",
                    textAlign: "right",
                  }}
                >
                  Ticket Number
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Poppins-Bold",
                    color: COLORS.primary,
                    textAlign: "right",
                  }}
                >
                  12345
                </Text>
              </View>
            </View>
          </View>

          {/* number of passengers and seat numbers */}
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Roboto-Regular",
                    color: "#888",
                  }}
                >
                  Passengers
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Poppins-Bold",
                    color: COLORS.primary,
                  }}
                >
                  4
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Roboto-Regular",
                    color: "#888",
                    textAlign: "right",
                  }}
                >
                  Seat Numbers
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Poppins-Bold",
                    color: COLORS.primary,
                    textAlign: "right",
                  }}
                >
                  C2,C3,C4,D3
                </Text>
              </View>
            </View>
          </View>

          {/* qr code */}
          <View
            style={{
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <QRCode
              value={JSON.stringify({
                name: "John Doe",
                boardingPoint: "YY Bus Terminal",
                from: "Kampala",
                to: "Lira",
                date: "12 Sept 2024",
                time: "12:00 PM",
                busRegistration: "UBM-123-X",
                ticketNumber: "12345",
                passengers: 4,
                seatNumbers: "C2,C3,C4,D3",
              })}
            />
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <Pressable style={styles.button} onPress={print}>
            <Text style={styles.buttonText}>Download Ticket</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ticketContainer: {
    paddingHorizontal: 30,
  },
  ticket: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
  },
  dashedLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderStyle: "dashed",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: COLORS.primary,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    fontSize: 16,
  },
});
