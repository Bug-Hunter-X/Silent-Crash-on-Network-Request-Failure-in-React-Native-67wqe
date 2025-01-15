```javascript
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          const message = `HTTP error! status: ${response.status}`;
          throw new Error(message);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
        Alert.alert('Error', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    // Error is already shown via Alert.alert
    return (
      <View style={styles.container}>
        <Text>An error occurred.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Data: {JSON.stringify(data)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;
```