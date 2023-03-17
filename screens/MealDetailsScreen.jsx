import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import MealDetails from "../components/MealDetails";
import List from "../components/MealsDetail/List";
import Subtitle from "../components/MealsDetail/Subtitle";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
// import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
import {useSelector, useDispatch} from 'react-redux'
import { addFavorite, removeFavorite } from "../store/redux/favoritesSlice";

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
//   const favCtx = useContext(FavoritesContext);
    const favMealIds = useSelector((state) => state.favMeals.ids)
    const dispatch = useDispatch()
    console.log(favMealIds);

  const mealIsFav = favMealIds.includes(mealId)

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const changeFavStatusHandler = () => {
    if (mealIsFav) {
        // favCtx.removeFavorite(mealId)
        dispatch(removeFavorite({id: mealId}))
    } else {
        // favCtx.addFavorite(mealId)
        dispatch(addFavorite({id: mealId}))
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={mealIsFav ? 'star' : 'star-outline'} color="white" onPress={changeFavStatusHandler} />;
      },
    });
  }, [navigation, changeFavStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    margin: 32,
  },
  image: {
    width: "100%",
    height: 500,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
