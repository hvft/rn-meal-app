import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "./MealItem";

export default ({ navigation, route }) => {
  const { categoryId } = route.params
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  )

  const renderMealItem = itemData => {
    return (
      <MealItem 
        title={itemData.item.title} 
        imageUrl={itemData.item.imageUrl}
        onSelectMeal={()=>{}} 
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    )
  }

  return(
    <View style={styles.screen}>
      <FlatList 
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '90%'}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})