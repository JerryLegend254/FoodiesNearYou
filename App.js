import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation/Navigation";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";



function useImages(images) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    Asset.loadAsync(images)
      .then(() => setLoaded(true))
      .catch(setError);
  }, []);

  return [loaded, error];
}

export default function App() {
  const [imagesLoaded] = useImages([
    require("./assets/Splash1.jpg"),
    require("./assets/Splash2.jpg"),
    require("./assets/Splash3.jpg"),
    require("./assets/Splash4.jpg"),
    require("./assets/man.png"),
  ]);

  if (!imagesLoaded) {
    return <AppLoading />;
  }
  
  return <><Navigation /></>;
}