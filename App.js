import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealScreen from './screens/CategoryMealScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={
          screenOptionsConfig
         
        }
      >
          <Tab.Screen name="Meals" component={MealNav} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const Meal = createNativeStackNavigator();

function MealNav() {
  return (
    <Meal.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}
    >
      <Meal.Screen name="Categories" component={CategoriesScreen} />
      <Meal.Screen name="CategoryMeals" component={CategoryMealScreen} />
      <Meal.Screen name="MealDetail" component={MealDetailScreen} />
    </Meal.Navigator>
  );
}

const screenOptionsConfig = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    if (route.name === 'Meals') {
      return (
        <Ionicons
          name={'ios-information-circle-outline'}
          size={size}
          color={color}
        />
      );
    } else if (route.name === 'Favorites') {
      return (
        <Ionicons
          name={'ios-star'}
          size={size}
          color={color}
        />
      );
    }
  },
  tabBarInactiveTintColor: 'gray',
  tabBarActiveTintColor: 'tomato',
})

export default App;