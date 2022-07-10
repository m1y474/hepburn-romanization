import React from "react";
import { CheckProps } from "types";
import styles from "../styles/app.scss";

export default class Check extends React.Component<CheckProps> {
  render(): React.ReactNode {
    return (
      <label className={styles.check}>
        <input type="checkbox" onChange={(event) => this.props.onChange(event.target.checked)} />
        <span>{this.props.label}</span>
      </label>
    );
  }
}
