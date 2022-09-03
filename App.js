import { useState } from 'react';
import { StyleSheet, View, FlatList, Modal, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, 
      {id: Math.random().toString(),value: goalTitle}
    ])
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) =>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  return (
    <Modal >
      <Button title='Add New Goal' onPress={()=>setIsAddMode(true)} />
      <View style={styles.screen}>
        <GoalInput 
          visible={isAddMode} 
          onAddGoal={addGoalHandler} 
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList 
          keyExtractor={(item,index) => item.id}
          data={courseGoals}
          renderItem={itemData => 
            <GoalItem 
              id={itemData.item.id}
              title={itemData.item.value}
              onDelete={removeGoalHandler}
            />
          }
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
