import { StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS }  from '../data/dummy-data'

export default ({navigation}) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

  return(
    <MealList listData={favMeals} navigation={navigation}/>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})