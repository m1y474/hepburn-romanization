import React from "react";
import styles from "../styles/app.scss";

export default class Heading extends React.Component<{ text: string }> {
  render(): React.ReactNode {
    return <h2 className={styles.heading}>{this.props.text}</h2>;
  }
}
