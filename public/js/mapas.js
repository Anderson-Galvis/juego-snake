
const niveles = {
    1: { tipo: 'ninguno' },
    2: { tipo: 'bordes' },
    3: { tipo: 'esquinas' },
    4: { tipo: 'borde-superior-inferior' },
    5: { tipo: 'borde-izquierdo-derecho' },
  };
  

export function obtenerMapaPorNivel(nivel) {
    const filas = 30;
    const columnas = 30;
    const config = niveles[nivel];
    const obstaculos = [];
  
    if (!config || config.tipo === 'ninguno') {
      return obstaculos; // mapa vacío
    }
  
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
  
    else if (config.tipo === 'borde-superior-inferior') {
      for(let x = 1; x <= columnas; x++) {
        obstaculos.push({ x, y: 1 });          // arriba
        obstaculos.push({ x, y: filas });      // abajo
      }
    }
  
    else if (config.tipo === 'borde-izquierdo-derecho') {
      for(let y = 1; y <= filas; y++) {
        obstaculos.push({ x: 1, y });          // izquierda
        obstaculos.push({ x: columnas, y });   // derecha
      }
    }
  
    // Puedes agregar más patrones para niveles 6, 7, etc.
  
    return obstaculos;
  }
  