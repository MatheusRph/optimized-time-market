const input = require("prompt-sync")();
const color = require("cli-color");

const planta : number[][] = [
    [22, 22, 22, 22, 22, 33, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 44],
    [44, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 44],
    [44, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 44, 44, 22, 22, 22, 22, 22, 22, 22, 22, 22]
  ];

  const planta2 : number[][] = [
    [22, 22, 22, 22, 22, 33, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 88, 22, 22, 88, 11, 22],
    [44, 11, 11, 11, 11, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [44, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 44],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 44],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 11, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 88, 22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 11, 11, 22],
    [22, 22, 11, 22, 22, 22, 22, 22, 11, 22, 22, 22, 11, 22, 22, 22, 22, 22, 11, 22],
    [22, 22, 11, 11, 88, 11, 11, 11, 44, 44, 22, 22, 11, 11, 88, 11, 11, 11, 11, 22]
  ];

const colorir = (text:number): string => {
    if (text ==22) {
        return color.red.bgRed('  ');
    } else if (text == 11){
        return color.blue.bgBlue('  ');
    } else if (text == 33) {
        return color.black.bgBlack('  ');
    } else if (text == 44) {
        return color.green.bgGreen('  ');
    } else {
        return color.yellow.bgYellow('  ');
    };
  };

  let x: number = 0;
  let y: number = 5;
  let passos: number = 0;
  
  
  const mostrarPlanta = (plantaAtual: number[][]): void => {
    console.clear();
    for (let i of plantaAtual) {
      let linha: string[] = [];
      for (let e of i) {
        linha.push(colorir(e));
      }
      console.log(linha.join(''));
    }
    console.log("Passos:", passos);
  };
  
const descer = (plantaAtual: number[][]): void => {
    if (x + 1 < plantaAtual.length && plantaAtual[x + 1][y] !== 22) {
        x = x + 1;
        passos++;
        plantaAtual[x-1][y] = 11;
        if (plantaAtual[x][y] != 44) {
            plantaAtual[x][y] = 33;
        };
    };
};
  
const subir = (plantaAtual: number[][]): void => {
    if (x - 1 >= 0 && plantaAtual[x - 1][y] !== 22) {
        x = x - 1;
        passos++;
        plantaAtual[x+1][y] = 11;
        if (plantaAtual[x][y] != 44) {
            plantaAtual[x][y] = 33;
        };
    };
};
  
const direita = (plantaAtual: number[][]): void => {
    if (y + 1 < plantaAtual[0].length && plantaAtual[x][y + 1] !== 22) {
        y = y + 1;
        passos++;
        plantaAtual[x][y-1] = 11;
        if (plantaAtual[x][y] != 44) {
            plantaAtual[x][y] = 33;
        };
    };
};
  
const esquerda = (plantaAtual: number[][]): void => {
  if (y - 1 >= 0 && plantaAtual[x][y - 1] !== 22) {
    plantaAtual[x][y] = 11;
    y = y - 1;
    passos++;
    plantaAtual[x][y+1] = 11;
    if (plantaAtual[x][y] != 44) {
        plantaAtual[x][y] = 33;
    };
  };
};
  
  const verificaProduto = (): boolean => {
    for (let linha of planta) {
      for (let item of linha) {
        if (item == 88) {
          return false;
        }
      }
    }
    return true;
  };
  
const start = (plantaAtual: number[][]): void => {
    mostrarPlanta(plantaAtual);
    let escolha: string = input("Digite uma direção (w, a, s, d) ou (q) para sair");
    if (escolha.toUpperCase() == "Q" || verificaProduto()) {
        return;
    } else if (escolha.toUpperCase() == "W") {
        subir(plantaAtual);
    } else if (escolha.toUpperCase() == "A") {
        esquerda(plantaAtual);
    } else if (escolha.toUpperCase() == "S") {
        descer(plantaAtual);
    } else if (escolha.toUpperCase() == "D") {
        direita(plantaAtual);
    }
    if (plantaAtual[x][y] == 44 && plantaAtual != planta2) {
        x = 0;
        y = 5;
        plantaAtual[x][y] = 33;
        plantaAtual = planta2;
    } else if (plantaAtual[x][y] == 44 && plantaAtual != planta) {
        x = 0;
        y = 5;
        plantaAtual[x][y] = 33;
        plantaAtual = planta;
    };  
    start(plantaAtual);
};
  
start(planta);