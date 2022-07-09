import React from "react";
import { ButtonProps } from "types";
import { Clean, File } from "./Icons";
import styles from "../styles/app.scss";

export default class RoundedButton extends React.Component<ButtonProps> {
  render(): React.ReactNode {
    return (
      <button type={this.props.type} className={styles.button} onClick={() => this.props.onClick()}>
        {this.props.icon === "clean" ? <Clean /> : <File />}
        <small>{this.props.label}</small>
      </button>
    );
  }
}
