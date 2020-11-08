import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import BottomTabNavigator from './navigators/BottomTabNavigator';


const App = () => {
  const url = 'http://api-prd.axesso.de/amz/amazon-search-by-keyword-asin?keyword=Playstation4&domainCode=com';

  useEffect(() => {
    const testFetch =  async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      console.log(json);
    }
    testFetch();
  }, []);
  
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
