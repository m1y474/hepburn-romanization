import React from "react";
import styles from "@styles/app.scss";
import { HeadingProps } from "types";

export default class Heading extends React.Component<HeadingProps> {
  render(): React.ReactNode {
    return <h2 className={styles.heading}>{this.props.text}</h2>;
  }
}
