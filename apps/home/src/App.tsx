import { HI } from "@nam/utils";
import * as React from "react";
import styled from "styled-components";
import "./App.css";
import logo from "./logo.svg";

const AppWrapperKEKE = styled.div``;

class App extends React.Component {
  public static displayName = "HELLO";
  public componentDidMount() {
    alert(HI);
  }
  public render() {
    return (
      <AppWrapperKEKE>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React - HOME</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </AppWrapperKEKE>
    );
  }
}

export default App;
