import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import CategoryScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'


const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "orange",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown: false
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Categories" component={CategoryScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, FavoriteStackNavigator };