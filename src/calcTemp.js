import React from "react";
import Button from "./Button";

const maxDigits = 10;
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      firstNum: ""
    };
    this.enterDigit = this.enterDigit.bind(this);
  }
  checkDot(displayStr, id) {
    return displayStr.includes(".");
  }
  enterDigit(id) {
    let updatedNum;
    // console.log(this.state.firstNum.length);
    if (id === "C") {
      updatedNum = "";
    } else {
      if (this.state.firstNum.length >= maxDigits) {
        return;
      }
      if (id === "." && this.checkDot(this.state.firstNum)) {
        return;
      }
      updatedNum = this.state.firstNum + id;
    }
    this.setState({
      firstNum: updatedNum
    });
  }

  render() {
    return (
      <div>
        <input disabled value={this.state.firstNum} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px"
            }}
          >
            <Button value="1" enterDigit= {this.enterDigit} />
            <Button value="2" enterDigit= {this.enterDigit} />
            <Button value="3" enterDigit= {this.enterDigit} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px"
            }}
          >
            <Button value="4" enterDigit= {this.enterDigit} />
            <Button value="5" enterDigit= {this.enterDigit} />
            <Button value="6" enterDigit= {this.enterDigit} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px"
            }}
          >
            <Button value="7" enterDigit= {this.enterDigit} />
            <Button value="8" enterDigit= {this.enterDigit} />
            <Button value="9" enterDigit= {this.enterDigit} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px"
            }}
          >
            <Button value="0" enterDigit= {this.enterDigit} />
            <Button value="." enterDigit= {this.enterDigit} />
            <Button value="C" enterDigit= {this.enterDigit} />
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
