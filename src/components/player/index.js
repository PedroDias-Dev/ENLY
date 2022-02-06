import React from "react";

class Player {
    constructor(altura, largura, name) {
        this.name = name;
        this.altura = altura;
        this.largura = largura;
        this.x = 0;
        this.y = 0;
    }

    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }