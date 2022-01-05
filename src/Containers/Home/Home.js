import React from "react";

import { useSelector } from "react-redux";

import styles from "./Home.module.css";

import Button from "../../Components/Button";

const Home = () => {

  const exampleState = useSelector(state => state.example.exampleState);

  return (
    <div className={styles.container}>
      This is the home container.
    </div>
  );
};

export default Home;
