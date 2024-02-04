import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { useRef, useState } from "react";
import Colors from "@/constants/colors";
import * as Haptics from "expo-haptics";

import { CATEGORIES, MENUITEMS } from "@/constants";

interface Props {
  onCategoryChanged: (category: string) => void;
}

const ExploreHeader = ({ onCategoryChanged }: Props) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const selectCategory = (index: number) => {
    // const selected = itemsRef.current[index];
    setActiveIndex(index);

    // TODO: fix mesure
    /* selected?.measure((x, y) => {
        scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
      }); */

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChanged(CATEGORIES[index].name);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        {/* <View style={styles.actionRow}>
            <Link href={"/(modals)/search"} asChild>
            <TouchableOpacity>
              <View style={styles.searchBtn}>
                <Ionicons name="search" size={24} />
                <View>
                  <Text style={{ color: Colors.grey }}>
                    Find · Spot · Exercise
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={24} />
          </TouchableOpacity>
        </View> */}

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          ref={scrollRef}
          contentContainerStyle={{
            alignItems: "center",
            gap: 20,
            paddingHorizontal: 16,
          }}
        >
          {MENUITEMS.map((menuItem, index) => (
            <TouchableOpacity
              onPress={() => setSelectedMenuItem(index)}
              key={index}
              style={{ alignItems: "center" }}
            >
              <Image
                source={menuItem.img}
                style={
                  selectedMenuItem == index
                    ? styles.selectedMenuItem
                    : styles.menu
                }
              />
              <Text
                style={[
                  selectedMenuItem == index
                    ? { fontFamily: "fontBold", paddingTop: 6 }
                    : { fontFamily: "fontBold", paddingTop: 6 },
                ]}
              >
                {menuItem.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 200,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  menu: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  selectedMenuItem: {
    borderColor: Colors.grey,
    borderWidth: 2,
    borderRadius: 6,
    width: 80,
    height: 80,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  searchBtn: {
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 10,
    padding: 14,
    alignItems: "center",
    width: 280,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#c2c2c2",
    borderRadius: 30,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 24,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.black,
  },
  categoryTextActive: {
    fontSize: 14,
    color: Colors.black,
  },
  categoriesBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Colors.black,
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
});

export default ExploreHeader;
