# React Native

[`React Native`](https://reactnative.dev/) is an open-source framework for building mobile applications using JavaScript and React. Developed by Facebook, React Native allows developers to create native-like experiences for iOS and Android platforms with a single codebase. It leverages the React library, enabling developers to use a familiar declarative style to build user interfaces for mobile apps.
<br/>

React Native components map directly to native UI components, ensuring high performance and a native look and feel. It supports hot-reloading, allowing developers to see the changes in real-time without rebuilding the entire application. React Native also provides a rich ecosystem of libraries and tools, making it a popular choice for cross-platform mobile development.

<br/>

React Native is :

- cross-platform: Allows for the development of both iOS and Android applications with a single codebase, reducing development time and effort.
- declarative: Utilizes a declarative programming style with React components, making it easy to understand and maintain the code.
- performant: Renders native UI components, resulting in high performance and a seamless user experience.

<br/>

## Example

```ts
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<View>
			<Text>{`Count: ${count}`}</Text>
			<Button title="Increment" onPress={() => setCount(count + 1)} />
		</View>
	);
};

export default App;
```

> React Native is an open-source framework for building cross-platform mobile applications using JavaScript and React, providing a native-like experience for both iOS and Android.
