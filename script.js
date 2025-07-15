
// Conectores Prearmados
const tipoManguera = document.getElementById("tipoManguera");
const tipoConector = document.getElementById("tipoConector");
const tamaño = document.getElementById("tamaño");

// Conectores 2 Piezas
const tipoManguera2 = document.getElementById("tipoManguera2");
const tipoFerula = document.getElementById("tipoFerula");
const tamaño2 = document.getElementById("tamaño2");

// Cargar Tipo Manguera (Conectores Prearmados)
  for (let manguera in data) {
    tipoManguera.innerHTML += `<option value="${manguera}">${manguera}</option>`;
  }

  tipoManguera.addEventListener("change", () => {
    tipoConector.innerHTML = '<option value="">Tipo Conector</option>';
    tamaño.innerHTML = '<option value="">Tamaño</option>';
    tamaño.disabled = true;

    const conectores = data[tipoManguera.value];
    if (conectores) {
      tipoConector.disabled = false;
      for (let conector in conectores) {
        tipoConector.innerHTML += `<option value="${conector}">${conector}</option>`;
      }
    } else {
      tipoConector.disabled = true;
    }
  });

  tipoConector.addEventListener("change", () => {
    tamaño.innerHTML = '<option value="">Tamaño</option>';

    const medidas = data[tipoManguera.value][tipoConector.value];
    if (medidas) {
      tamaño.disabled = false;
      for (let medida in medidas) {
        const diametro = medidas[medida];
        tamaño.innerHTML += `<option value="${medida}">${medida} → ${diametro}</option>`;
      }
    } else {
      tamaño.disabled = true;
    }
  });

  // Cargar Tipo Manguera (Conectores 2 Piezas)
  for (let manguera2 in data2) {
    tipoManguera2.innerHTML += `<option value="${manguera2}">${manguera2}</option>`;
  }

  tipoManguera2.addEventListener("change", () => {
    tipoFerula.innerHTML = '<option value="">Tipo Ferula</option>';
    tamaño2.innerHTML = '<option value="">Tamaño</option>';
    tamaño2.disabled = true;

    const ferulas = data2[tipoManguera2.value];
    if (ferulas) {
      tipoFerula.disabled = false;
      for (let ferula in ferulas) {
        tipoFerula.innerHTML += `<option value="${ferula}">${ferula}</option>`;
      }
    } else {
      tipoFerula.disabled = true;
    }
  });

  tipoFerula.addEventListener("change", () => {
    tamaño2.innerHTML = '<option value="">Tamaño</option>';

    const medidas = data2[tipoManguera2.value][tipoFerula.value];
    if (medidas) {
      tamaño2.disabled = false;
      for (let medida in medidas) {
        const diametro = medidas[medida];
        tamaño2.innerHTML += `<option value="${medida}">${medida} → ${diametro}</option>`;
      }
    } else {
      tamaño.disabled = true;
    }
  });