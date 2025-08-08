
const niveles = {
    1: { tipo: 'ninguno' },
    2: { tipo: 'bordes' },
    3: { tipo: 'esquinas' },
    4: { tipo: 'borde-superior-inferior' },
    5: { tipo: 'borde-izquierdo-derecho' },
    6: { tipo: 'cruz-central' },
    7: { tipo: 'espina-central-horizontal' },
    8: { tipo: 'espina-central-vertical' },
    9: { tipo: 'caja-central' },
    10: { tipo: 'cuadricula' },
    11: { tipo: 'serpiente-horizontal' },
    12: { tipo: 'serpiente-vertical' },
    13: { tipo: 'diagonales' },
    14: { tipo: 'caminos-laterales' },
    15: { tipo: 'circulos-esquinas' },
  };
  

export function obtenerMapaPorNivel(nivel) {
    const filas = 30;
    const columnas = 30;
    const config = niveles[nivel];
    const obstaculos = [];
  
    //nivel 1
    if (!config || config.tipo === 'ninguno') {
      return obstaculos; // mapa vacío
    }
  // nivel 2
    if (config.tipo === 'bordes') {
      for(let x = 1; x <= columnas; x++) {
        obstaculos.push({ x, y: 1 });          // arriba
        obstaculos.push({ x, y: filas });      // abajo
      }
      for(let y = 2; y < filas; y++) {
        obstaculos.push({ x: 1, y });          // izquierda
        obstaculos.push({ x: columnas, y });   // derecha
      }
    }
  
    //nivel 3 

    else if (config.tipo === 'esquinas') {
        const lSize = 4; // tamaño de la L (3 bloques por lado)
      
        // esquina superior izquierda  lvl 3
        for (let i = 1; i <= lSize; i++) {
          obstaculos.push({ x: i, y: 1 });   // horizontal
          obstaculos.push({ x: 1, y: i });   // vertical
        }
      
        // esquina superior derecha  lvl 3
        for (let i = 0; i < lSize; i++) {
          obstaculos.push({ x: columnas - i, y: 1 });   // horizontal
          obstaculos.push({ x: columnas, y: i + 1 });   // vertical
        }
      
        // esquina inferior izquierda  lvl 3
        for (let i = 0; i < lSize; i++) {
          obstaculos.push({ x: i + 1, y: filas });          // horizontal
          obstaculos.push({ x: 1, y: filas - i });          // vertical
        }
      
        // esquina inferior derecha lvl 3
        for (let i = 0; i < lSize; i++) {
          obstaculos.push({ x: columnas - i, y: filas });         // horizontal
          obstaculos.push({ x: columnas, y: filas - i });         // vertical
        }
      }
      // nivel 4
    else if (config.tipo === 'borde-superior-inferior') {
      for(let x = 1; x <= columnas; x++) {
        obstaculos.push({ x, y: 1 });          // arriba
        obstaculos.push({ x, y: filas });      // abajo
      }
    }
    // nivel 5
    else if (config.tipo === 'borde-izquierdo-derecho') {
      for(let y = 1; y <= filas; y++) {
        obstaculos.push({ x: 1, y });          // izquierda
        obstaculos.push({ x: columnas, y });   // derecha
      }
    }
  
    else if (config.tipo === 'cruz-central') {
        const mitad = Math.floor(columnas / 2);
        for (let i = 1; i <= columnas; i++) {
          obstaculos.push({ x: i, y: mitad });
          obstaculos.push({ x: mitad, y: i });
        }
      }
      
      else if (config.tipo === 'espina-central-horizontal') {
        const filaCentral = Math.floor(filas / 2);
        for (let x = 1; x <= columnas; x++) {
          obstaculos.push({ x, y: filaCentral });
        }
      }
      
      else if (config.tipo === 'espina-central-vertical') {
        const columnaCentral = Math.floor(columnas / 2);
        for (let y = 1; y <= filas; y++) {
          obstaculos.push({ x: columnaCentral, y });
        }
      }
      
      else if (config.tipo === 'caja-central') {
        const inicioX = 10, finX = 20, inicioY = 10, finY = 20;
        for (let x = inicioX; x <= finX; x++) {
          obstaculos.push({ x, y: inicioY });
          obstaculos.push({ x, y: finY });
        }
        for (let y = inicioY + 1; y < finY; y++) {
          obstaculos.push({ x: inicioX, y });
          obstaculos.push({ x: finX, y });
        }
      }
      
      else if (config.tipo === 'cuadricula') {
        for (let y = 2; y <= filas; y += 4) {
          for (let x = 2; x <= columnas; x += 4) {
            obstaculos.push({ x, y });
          }
        }
      }
      
      else if (config.tipo === 'serpiente-horizontal') {
        for (let y = 5; y <= 25; y += 10) {
          for (let x = 1; x <= columnas; x++) {
            obstaculos.push({ x, y });
          }
        }
      }
      
      else if (config.tipo === 'serpiente-vertical') {
        for (let x = 5; x <= 25; x += 10) {
          for (let y = 1; y <= filas; y++) {
            obstaculos.push({ x, y });
          }
        }
      }
      
      else if (config.tipo === 'diagonales') {
        for (let i = 1; i <= columnas; i++) {
          obstaculos.push({ x: i, y: i }); // diagonal principal
          obstaculos.push({ x: i, y: columnas - i + 1 }); // diagonal secundaria
        }
      }
      
      else if (config.tipo === 'caminos-laterales') {
        for (let y = 2; y < filas; y++) {
          obstaculos.push({ x: 3, y });
          obstaculos.push({ x: columnas - 2, y });
        }
      }
      
      else if (config.tipo === 'circulos-esquinas') {
        const coords = [
          { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 }, // top-left
          { x: 28, y: 2 }, { x: 29, y: 2 }, { x: 28, y: 3 }, { x: 29, y: 3 }, // top-right
          { x: 2, y: 28 }, { x: 3, y: 28 }, { x: 2, y: 29 }, { x: 3, y: 29 }, // bottom-left
          { x: 28, y: 28 }, { x: 29, y: 28 }, { x: 28, y: 29 }, { x: 29, y: 29 } // bottom-right
        ];
        for (const c of coords) obstaculos.push(c);
      }
      
    return obstaculos;
  }
  