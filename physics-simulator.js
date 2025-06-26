let animationFrameId;

function toggleMenu(element) {
    const submenu = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    arrow.classList.toggle('rotated');
}

//funcion para cargar los items
function cargarContenido(opcion) {
    // Remover clase active de todos los items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });

    // Agregar clase active al item seleccionado
    event.target.classList.add('active');

    // Cambiar el contenido según la opción seleccionada
    const contenido = document.getElementById('contenido');
    const opcionLower = opcion.toLowerCase();

    switch(opcion) {
        case 'Inicio':
            contenido.innerHTML = `
                <h2>Bienvenido a la página</h2>
                <p>Selecciona una opción del menú para ver su contenido.</p>
            `;
            break;
        case 'FFPNIEST':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>Cálculo de Fuerza de Fricción Estática</h2>
                        <input type="number" id="massInput" placeholder="Masa (kg)">
                        <input type="number" id="frictionCoefficientInput" placeholder="Coeficiente de fricción (μ)">
                        <p>Recuerda que como es fricción estática, no es posible mostrar una animación correspondiente
                        debido a que está quieto</p>
                        <button onclick="calculateFFEst()">Calcular</button> 
                        <div id="physicsResults"></div>
                    </div>
                </div>
            `;
            break;
        case 'CoefFricEstPNI':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>Cálculo de Coeficiente de fricción Estatico</h2>
                        <input type="number" id="frictionForceInput" placeholder="Fuerza de fricción (N)">
                        <input type="number" id="massInput" placeholder="Masa (kg)">
                        <p>Recuerda que como es fricción estática, no es posible mostrar una animación correspondiente
                         debido a que está quieto</p>
                        <button onclick="calculateFricCoefEst()">Calcular</button> 
                        <div id="physicsResults"></div>
                    </div>
                </div>
            `;
            break;
        case 'MasaEstPNI':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>Cálculo de Masa</h2>
                        <input type="number" id="frictionForceInput" placeholder="Fuerza de fricción (N)">
                        <input type="number" id="frictionCoefficientInput" placeholder="Coeficiente de fricción (μ)">
                        <p>Recuerda que como es fricción estática, no es posible mostrar una animación correspondiente
                        debido a que está quieto</p>
                        <button onclick="calculateMassEst()">Calcular</button> 
                        <div id="physicsResults"></div>
                    </div>
                </div>
            `;
            break;
        case 'FFPIEST' :
            contenido.innerHTML= `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>Cálculo de Fuerza de Fricción Estática</h2>
                        <input type="number" id="massInput" placeholder="Masa (kg)">
                        <input type="number" id="frictionCoefficientInput" placeholder="Coeficiente de fricción (μ)">
                        <input type="number" id="angleInput" placeholder="Ángulo (°)">
                        <input type="number" id="distanceInput" placeholder="Distancia sobre la rampa (m)">
                        <button onclick="calculateAndAnimateFFEstPI()">Calcular y Animar</button> 
                        <div id="physicsResults"></div>
                    </div>
                    <div class="animation-section">
                        <canvas id="physicsCanvas" width="400" height="300"></canvas>
                    </div>
                </div>
            `;
             break;
        case 'CoeficientePIF':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>Cálculo del Coeficiente de Fricción Estática (μ)</h2>
                        <input type="number" id="angleInput" placeholder="Ángulo de inclinación (°)">
                        <input type="number" id="massInput" placeholder="Masa (kg)">
                        <button onclick="calculateAndAnimateFrictionCoefficient()">Calcular y Animar</button> 
                        <div id="physicsResults"></div>
                    </div>
                    <div class="animation-section">
                        <canvas id="physicsCanvas" width="400" height="300"></canvas>
                    </div>
                </div>
                `;
            break;
        case 'MasaPIF':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>Cálculo de Fuerza de Masa</h2>
                        <input type="number" id="angleInput" placeholder="Ángulo de  inclinación(°)">
                        <input type="number" id="frictionForceInput" placeholder="Fuerza de Fricción (N)">
                        <button onclick="calculateAndAnimateMassPI()">Calcular y Animar</button> 
                        <div id="physicsResults"></div>
                    </div>
                    <div class="animation-section">
                        <canvas id="physicsCanvas" width="400" height="300"></canvas>
                    </div>
                </div>
                `;
            break;
        case 'ÁnguloPIF':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>Cálculo de Ángulo</h2>
                        <input type="number" id="massInput" placeholder="Masa (kg)">
                        <input type="number" id="frictionCoefficientInput" placeholder="Coeficiente de fricción (μ)">
                        <input type="number" id="frictionForceInput" placeholder="Fuerza de Fricción (N)">
                        <button onclick="calculateAndAnimateAngle()">Calcular y Animar</button> 
                        <div id="physicsResults"></div>
                    </div>
                    <div class="animation-section">
                        <canvas id="physicsCanvas" width="400" height="300"></canvas>
                    </div>
                </div>
                `;
            break;
        case 'FFPICIN':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>Fuerza de Fricción</h2> 
                        <input type="number" id="massInput" placeholder="Masa (kg)">
                        <input type="number" id="angleInput" placeholder="Ángulo (°)">
                        <input type="number" id="muInput" placeholder="Coeficiente de fricción">
                        <button onclick="calculateAndAnimateFriction1()">Calcular y Animar</button>
                        <div id="physicsResults"></div>
                    </div>
                    <div class="animation-section">
                        <canvas id="physicsCanvas" width="400" height="300"></canvas>
                    </div>
                </div>
                `;
            break;
        case 'CoeficientePIFCin':
            contenido.innerHTML = `
            <div class="simulator-container">
                <div class="controls-section">
                    <h2>Masa</h2> <!--titulo-->
                    <input type="number" id="forcefrictionInput" placeholder="Coeficiente de fuerza de fricción ()">
                    <input type="number" id="angleInput" placeholder="Angulo(°)">
                    <input type="number" id="velocityInput" placeholder="Velocidad (m/s)">
                    <button onclick="calculateAndAnimateMasa()">Calcular y Animar</button> 
                    <div id="physicsResults"></div>
                </div>
                <div class="animation-section">
                    <canvas id="physicsCanvas" width="400" height="300"></canvas>
                </div>
            </div>
                `;
            break;
        case 'MasaPIFCin':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>Coeficiente de friccion</h2> <!--titulo-->
                        <input type="number" id="massInput" placeholder="Masa (kg)">
                        <input type="number" id="forceFriccionInput" placeholder="Fuerza de Friccion (N)">
                        <input type="number" id="anguleInput" placeholder="Angulo(°)">
                        <input type="number" id="velocityInput" placeholder="Velocidad (m/s)">
                        <button onclick="calculateAndAnimateFFCin()">Calcular y Animar</button> 
                        <div id="physicsResults"></div>
                    </div>
                    <div class="animation-section">
                        <canvas id="physicsCanvas" width="400" height="300"></canvas>
                    </div>
                </div>
                `;
            break;
        case 'ÁnguloPIFCin':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>Angulo</h2> <!--titulo-->
                        <input type="number" id="massInput" placeholder="Masa (kg)">
                        <input type="number" id="ForceNormalInput" placeholder="Fuerza normal ()">
                        <input type="number" id="velocityInput" placeholder="Velocidad (m/s)">
                        <button onclick="calculateAndAnimateAngule()">Calcular y Animar</button> 
                        <div id="physicsResults"></div>
                    </div>
                    <div class="animation-section">
                        <canvas id="physicsCanvas" width="400" height="300"></canvas>
                    </div>
                </div>
                `;
            break;
        case 'FFPNICIN':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>Fuerza de Fricción</h2> <!--titulo-->
                        <input type="number" id="massInput" placeholder="Masa (kg)">
                        <input type="number" id="frictionCoeficentInput" placeholder="Coeficiente de fricción ()">
                        <input type="number" id="velocityInput" placeholder="Velocidad (m/s)">
                        <button onclick="calculateAndAnimateFFCin()">Calcular y Animar</button> 
                        <div id="physicsResults"></div>
                    </div>
                    <div class="animation-section">
                        <canvas id="physicsCanvas" width="400" height="300"></canvas>
                    </div>
                </div>
                `;
            break;
        case 'CoefFriCinPNI':
            contenido.innerHTML = `
                <div class="simulator-container">
                  <div class="controls-section"><!-- título -->
                    <h2>Coeficiente de Fricción</h2> 
                    <input type="number" id="massInput" placeholder="Masa (kg)">
                    <input type="number" id="forcefrictionInput" placeholder="Fuerza de fricción (N)">
                    <button onclick="calculateAndAnimateCoeficiente()">Calcular y Animar</button> 
                    <div id="physicsResults"></div>
                  </div>
                  <div class="animation-section">
                    <canvas id="physicsCanvas" width="400" height="300"></canvas>
                  </div>
                </div>
                `;
            break;
        case 'MasaCinPNI':
            contenido.innerHTML = `
                <div class="simulator-container">
                  <div class="controls-section">
                    <h2>Masa</h2> <!-- título -->
                    <input type="number" id="muInput" placeholder="Coef. de fricción (μ)">
                    <input type="number" id="forcefrictionInput" placeholder="Fuerza de fricción (N)">
                    <button onclick="calculateAndAnimateMasa()">Calcular y Animar</button> 
                    <div id="physicsResults"></div>
                  </div>
                  <div class="animation-section">
                    <canvas id="physicsCanvas" width="400" height="300"></canvas>
                  </div>
                </div>
                `;
            break;
        case 'SimulMCUNorm':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>Simulador de Movimiento Circular Uniforme (MCU)</h2>
                        <input type="number" id="masaInput" placeholder="Masa (kg)">
                        <input type="number" id="radioInput" placeholder="Radio (m)">
                        <input type="number" id="vueltasInput" placeholder="Número de vueltas">
                        <input type="number" id="tiempoInput" placeholder="Tiempo (s)">
                        <button onclick="calcularMCU()">Calcular y Animar</button> 
                        <div id="physicsResults"></div>
                    </div>
                    <div class="animation-section">
                        <canvas id="physicsCanvas" width="400" height="300"></canvas>
                    </div>
                </div>`;
            break;
        case 'SimulMCURueda':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>MCU - Cálculo del Período de una Rueda</h2>
                        <input type="number" id="tiempoInput" placeholder="Tiempo total (s)">
                        <input type="number" id="vueltasInput" placeholder="Número de vueltas">
                        <button onclick="calcularPeriodo()">Calcular y Animar</button> 
                        <div id="physicsResults"></div>
                    </div>
                    <div class="animation-section">
                        <canvas id="physicsCanvas" width="400" height="300"></canvas>
                    </div>
                </div>`;
            break;
        case 'MCU_Frecuencia':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>MCU - Cálculo de la Frecuencia</h2>
                        <input type="number" id="vueltasInput" placeholder="Número de vueltas">
                        <input type="number" id="tiempoInput" placeholder="Tiempo total (s)">
                        <button onclick="calcularFrecuenciaMCU()">Calcular y Animar</button> 
                        <div id="physicsResults"></div>
                    </div>
                    <div class="animation-section">
                        <canvas id="physicsCanvas" width="400" height="300"></canvas>
                    </div>
                </div>`;
            break;
        case 'MCU_VelocidadTangencial':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>MCU - Velocidad Tangencial</h2>
                        <input type="number" id="radioInput" placeholder="Radio (m)">
                        <input type="number" id="vueltasInput" placeholder="Número de vueltas">
                        <input type="number" id="tiempoInput" placeholder="Tiempo total (s)">
                        <button onclick="calcularVelocidadTangencialMCU()">Calcular y Animar</button> 
                        <div id="physicsResults"></div>
                    </div>
                    <div class="animation-section">
                        <canvas id="physicsCanvas" width="400" height="300"></canvas>
                    </div>
                </div>`;
            break;
        case 'MCU_Masa':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>MCU - Cálculo de Masa</h2>
                        <input type="number" id="fuerzaInput" placeholder="Fuerza centrípeta (N)">
                        <input type="number" id="radioInput" placeholder="Radio (m)">
                        <input type="number" id="velocidadInput" placeholder="Velocidad tangencial (m/s)">
                        <button onclick="calcularMasaMCU()">Calcular y Animar</button> 
                        <div id="physicsResults"></div>
                    </div>
                    <div class="animation-section">
                        <canvas id="physicsCanvas" width="400" height="300"></canvas>
                    </div>
                </div>`;
            break;
        case 'MCU_Radio':
            contenido.innerHTML = `
                <div class="simulator-container">
                    <div class="controls-section">
                        <h2>MCU - Cálculo del Radio</h2>
                        <input type="number" id="masaInput" placeholder="Masa (kg)">
                        <input type="number" id="velocidadInput" placeholder="Velocidad tangencial (m/s)">
                        <input type="number" id="fuerzaInput" placeholder="Fuerza centrípeta (N)">
                        <button onclick="calcularRadioMCU()">Calcular y Animar</button> 
                        <div id="physicsResults"></div>
                    </div>
                    <div class="animation-section">
                        <canvas id="physicsCanvas" width="400" height="300"></canvas>
                    </div>
                </div>`;
            break;
        case 'SimulWork':
            contenido.innerHTML = `
            <div class="simulator-container">
              <div class="controls-section">
                <h2>Trabajo</h2>
                <input type="number" id="fuerzaInput" placeholder="Fuerza (N)">
                <input type="number" id="distanciaInput" placeholder="Distancia (m)">
                <input type="number" id="anguloInput" placeholder="Ángulo (°)">
                <p><strong>Fórmula utilizada:</strong> W = F × d × cos(θ)</p>
                <button onclick="calcularYAnimartra()">Calcular y Animar</button>
                <div id="physicsResults"></div>
              </div>
              <div class="animation-section">
                <canvas id="physicsCanvas" width="400" height="300"></canvas>
              </div>
            </div>
            `;
            break;
        case 'SimulECin':
            contenido.innerHTML = `
            <div class="simulator-container">
              <div class="controls-section">
                <h2>Energía Cinética</h2>
                <input type="number" id="masaInput" placeholder="Masa (kg)">
                <input type="number" id="velocidadInput" placeholder="Velocidad (m/s)">
                <button onclick="calcularYAnimarECin()">Calcular y Animar</button>
                <div id="physicsResults"></div>
                <p><strong>Fórmula utilizada:</strong> K = ½ × m × v²</p>
              </div>
              <div class="animation-section">
                <canvas id="physicsCanvas" width="400" height="300"></canvas>
              </div>
            </div>
            `;
            break;
        case 'SimulEP':
            contenido.innerHTML = `
            <div class="simulator-container">
              <div class="controls-section">
                <h2>Energía Potencial</h2>
                <input type="number" id="masaInput" placeholder="Masa (kg)">
                <input type="number" id="alturaInput" placeholder="Altura (m)">
                <button onclick="calcularYAnimarEP()">Calcular y Animar</button>
                <div id="physicsResults"></div>
                <p><strong>Fórmula utilizada:</strong> U = m × g × h</p>
              </div>
              <div class="animation-section">
                <canvas id="physicsCanvas" width="400" height="300"></canvas>
              </div>
            </div>
            `;
            break;
        case 'SimulPot':
            contenido.innerHTML = `
            <div class="simulator-container">
              <div class="controls-section">
                <h2>Potencia</h2>
                <input type="number" id="trabajoInput" placeholder="Trabajo (J)">
                <input type="number" id="tiempoInput" placeholder="Tiempo (s)">
                <button onclick="calcularYAnimarPot()">Calcular y Animar</button>
                <div id="physicsResults"></div>
                <p><strong>Fórmula utilizada:</strong> P = W / t</p>
              </div>
              <div class="animation-section">
                <canvas id="physicsCanvas" width="400" height="300"></canvas>
              </div>
            </div>
            `;
            break;
        case 'SimulTrabajoNeto':
            contenido.innerHTML = `
            <div class="simulator-container">
              <div class="controls-section">
                <h2>Trabajo Neto</h2>
                <input type="number" id="masaInput" placeholder="Masa (kg)">
                <input type="number" id="viInput" placeholder="Velocidad inicial (m/s)">
                <input type="number" id="vfInput" placeholder="Velocidad final (m/s)">
                <button onclick="calcularYAnimarTrabajoNeto()">Calcular y Animar</button>
                <div id="physicsResults"></div>
                <p><strong>Fórmula utilizada:</strong> W<sub>neto</sub> = ½ × m × (v<sub>f</sub>² - v<sub>i</sub>²)</p>
              </div>
              <div class="animation-section">
                <canvas id="physicsCanvas" width="400" height="300"></canvas>
              </div>
            </div>
            `;
            break;
        case 'SimulConstK':
            contenido.innerHTML = `
            <div class="simulator-container">
              <div class="controls-section">
                <h2>Constante Elástica</h2>
                <input type="number" id="fuerzaInput" placeholder="Fuerza (N)">
                <input type="number" id="deformacionInput" placeholder="Deformación (m)">
                <button onclick="calcularYAnimarConstK()">Calcular y Animar</button>
                <div id="physicsResults"></div>
                <p><strong>Fórmula utilizada:</strong> k = F / x</p>
              </div>
              <div class="animation-section">
                <canvas id="physicsCanvas" width="400" height="300"></canvas>
              </div>
            </div>
            `;
            break;
        default:
            contenido.innerHTML = `
                <h2>${opcion}</h2>
                <p>Contenido para ${opcion}.</p>
            `;
    }
}



function calcularRadioMCU() {
    const masa = parseFloat(document.getElementById('masaInput').value);
    const velocidad = parseFloat(document.getElementById('velocidadInput').value);
    const fuerza = parseFloat(document.getElementById('fuerzaInput').value);

    if ([masa, velocidad, fuerza].some(v => isNaN(v) || v <= 0)) {
        alert('Por favor ingrese valores válidos (mayores que cero)');
        return;
    }

    const radio = (masa * Math.pow(velocidad, 2)) / fuerza;
    const velocidadAngular = velocidad / radio;
    const periodo = (2 * Math.PI) / velocidadAngular;
    const frecuencia = 1 / periodo;
    const aceleracionCentripeta = Math.pow(velocidad, 2) / radio;

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3>
        <ul>
            <li><strong>Radio de trayectoria:</strong> ${radio.toFixed(2)} m</li>
            <li><strong>Velocidad angular:</strong> ${velocidadAngular.toFixed(2)} rad/s</li>
            <li><strong>Período:</strong> ${periodo.toFixed(2)} s</li>
            <li><strong>Frecuencia:</strong> ${frecuencia.toFixed(2)} Hz</li>
            <li><strong>Aceleración centrípeta:</strong> ${aceleracionCentripeta.toFixed(2)} m/s²</li>
        </ul>
        <p class="formula">Fórmula: r = m·v²/F</p>
    `;

    animarMCU(radio, velocidadAngular);
}

function calcularMasaMCU() {
    const fuerza = parseFloat(document.getElementById('fuerzaInput').value);
    const radio = parseFloat(document.getElementById('radioInput').value);
    const velocidad = parseFloat(document.getElementById('velocidadInput').value);

    if ([fuerza, radio, velocidad].some(v => isNaN(v)) || [fuerza, radio, velocidad].some(v => v <= 0)) {
        alert('Ingrese valores válidos (mayores que cero)');
        return;
    }

    const masa = (fuerza * radio) / Math.pow(velocidad, 2);
    const velocidadAngular = velocidad / radio;
    const periodo = (2 * Math.PI) / velocidadAngular;
    const frecuencia = 1 / periodo;
    const aceleracionCentripeta = Math.pow(velocidad, 2) / radio;

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3>
        <ul>
            <li><strong>Masa:</strong> ${masa.toFixed(2)} kg</li>
            <li><strong>Velocidad angular:</strong> ${velocidadAngular.toFixed(2)} rad/s</li>
            <li><strong>Aceleración centrípeta:</strong> ${aceleracionCentripeta.toFixed(2)} m/s²</li>
            <li><strong>Período:</strong> ${periodo.toFixed(2)} s</li>
            <li><strong>Frecuencia:</strong> ${frecuencia.toFixed(2)} Hz</li>
        </ul>
        <p class="note">Fórmula utilizada: F = m·v²/r → m = F·r/v²</p>
    `;

    animarMCU(radio, velocidadAngular);
}

function calcularVelocidadTangencialMCU() {
    const radio = parseFloat(document.getElementById('radioInput').value);
    const vueltas = parseFloat(document.getElementById('vueltasInput').value);
    const tiempo = parseFloat(document.getElementById('tiempoInput').value);

    if ([radio, vueltas, tiempo].some(v => isNaN(v) || radio <= 0 || vueltas <= 0 || tiempo <= 0)) {
        alert('Por favor ingrese valores válidos (mayores que cero)');
        return;
    }

    const trayectoria = 2 * Math.PI * radio * vueltas;
    const velocidadTangencial = trayectoria / tiempo;
    const periodo = tiempo / vueltas;
    const frecuencia = vueltas / tiempo;
    const velocidadAngular = velocidadTangencial / radio;
    const aceleracionCentripeta = Math.pow(velocidadTangencial, 2) / radio;

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3>
        <ul>
            <li><strong>Velocidad tangencial:</strong> ${velocidadTangencial.toFixed(2)} m/s</li>
            <li><strong>Velocidad angular:</strong> ${velocidadAngular.toFixed(2)} rad/s</li>
            <li><strong>Aceleración centrípeta:</strong> ${aceleracionCentripeta.toFixed(2)} m/s²</li>
            <li><strong>Período:</strong> ${periodo.toFixed(2)} s</li>
            <li><strong>Frecuencia:</strong> ${frecuencia.toFixed(2)} Hz</li>
            <li><strong>Trayectoria recorrida:</strong> ${trayectoria.toFixed(2)} m</li>
        </ul>
    `;

    animarMCUr(velocidadAngular, radio);
}

function calculateFFEst() { //Calculo de Fuerza de Fricción estática
    const mass = parseFloat(document.getElementById('massInput').value);
    const mu = parseFloat(document.getElementById('frictionCoefficientInput').value);

    if (isNaN(mass) || isNaN(mu) || mass <= 0 || mu <= 0) {
        document.getElementById('physicsResults').innerHTML = `
            <p style="color: red;">Error: Ingrese valores numéricos mayores que cero</p>
        `;
        return;
    }

    const g = 9.81;
    const weight = mass * g;

    const normalForce = weight;
    const frictionForce = mu * normalForce;

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Peso:</strong> ${weight.toFixed(2)} N</p>
        <p><strong>Fuerza Normal:</strong> ${normalForce.toFixed(2)} N</p>
        <p><strong>Fuerza de Fricción:</strong> ${frictionForce.toFixed(2)} N</p>
    `;
}

function calculateMassEst() { //Cálculo de Masa de Fricción Estática
    const frictionForce = parseFloat(document.getElementById('frictionForceInput').value);
    const mu = parseFloat(document.getElementById('frictionCoefficientInput').value);

    if (isNaN(frictionForce) || isNaN(mu) ||  mu <= 0) {
        alert('Los valores deben ser mayores que cero');
        return;
    }

    const g = 9.81;
    const aux = mu * g;
    const mass = frictionForce / aux;
    const weight = mass * g;
    const normalForce = weight;

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Peso:</strong> ${weight.toFixed(2)} N</p>
        <p><strong>Fuerza Normal:</strong> ${normalForce.toFixed(2)} N</p>
        <p><strong>Masa:</strong> ${mass.toFixed(2)} kg</p>
    `;
}

function calculateFricCoefEst() { //Cálculo de Coeficiente de Fricción estática
    const frictionForce = parseFloat(document.getElementById('frictionForceInput').value);
    const mass = parseFloat(document.getElementById('massInput').value);

    if (isNaN(frictionForce) || isNaN(mass) || mass <= 0 || frictionForce <= 0) {
        alert('Los valores deben ser mayores que cero');
        return;
    }

    const g = 9.81;
    const weight = mass * g;
    const normalForce = weight;
    const mu = frictionForce / normalForce;

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Peso:</strong> ${weight.toFixed(2)} N</p>
        <p><strong>Fuerza Normal:</strong> ${normalForce.toFixed(2)} N</p>
        <p><strong>Coeficiente de Fricción (μ):</strong> ${mu.toFixed(4)}</p>
    `;
}

function calculateAndAnimateFFEstPI() {
    const mass = parseFloat(document.getElementById('massInput').value);
    const mu = parseFloat(document.getElementById('frictionCoefficientInput').value);
    const angleInput = document.getElementById('angleInput').value;
    const distanceInput = document.getElementById('distanceInput').value;

    let angle = parseFloat(angleInput);
    let distance = parseFloat(distanceInput);

    if (isNaN(mass) || isNaN(mu) || mass <= 0 || mu <= 0) {
        alert('Los valores deben ser mayores que cero');
        return;
    }

    // Si no se proporciona ángulo o distancia, usar valores por defecto
    angle = isNaN(angle) ? 30 : angle;
    distance = isNaN(distance) ? 5 : distance;

    const g = 9.81;
    const weight = mass * g;
    const angleRad = angle * Math.PI / 180;

    const normalForce = weight * Math.cos(angleRad);
    const frictionForce = mu * normalForce;
    const weightComponent = weight * Math.sin(angleRad);

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Peso:</strong> ${weight.toFixed(2)} N</p>
        <p><strong>Fuerza Normal:</strong> ${normalForce.toFixed(2)} N</p>
        <p><strong>Fuerza de Fricción Estática:</strong> ${frictionForce.toFixed(2)} N</p>
        <p><strong>Componente del peso paralela al plano:</strong> ${weightComponent.toFixed(2)} N</p>
        <p>${weightComponent <= frictionForce ? 
            "El objeto permanecerá en reposo (fricción estática)" : 
            "El objeto comenzará a moverse (fricción cinética)"}</p>
    `;

    startAnimation(angle, distance, angleRad);
}

function calculateAndAnimateAngle() {
    const frictionForce = parseFloat(document.getElementById('frictionForceInput').value);
    const mass = parseFloat(document.getElementById('massInput').value);
    const mu = parseFloat(document.getElementById('frictionCoefficientInput').value);

    if (isNaN(frictionForce) || isNaN(mass) || isNaN(mu) || mass <= 0 || mu <= 0) {
        alert('Los valores deben ser mayores que cero');
        return;
    }

    const g = 9.81;
    const weight = mass * g;
    const normalForce = weight; 

    const cosTheta = frictionForce / (mu * normalForce);

    if (Math.abs(cosTheta) > 1) {
        alert('No existe solución real para estos valores (cosθ debe estar entre -1 y 1)');
        return;
    }

    const angleRad = Math.acos(cosTheta);
    const angle = angleRad * (180 / Math.PI);

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Peso:</strong> ${weight.toFixed(2)} N</p>
        <p><strong>Fuerza Normal:</strong> ${normalForce.toFixed(2)} N</p>
        <p><strong>Ángulo calculado:</strong> ${angle.toFixed(2)}°</p>
    `;

    // Usar valores por defecto para distancia si se quiere animar
    startAnimation(angle, 5, angleRad);
}

function calculateAndAnimateMassPI() { //Base de todo
    const angle = parseFloat(document.getElementById('angleInput').value);
    const frictionForce = parseFloat(document.getElementById('frictionForceInput').value);

    if (isNaN(frictionForce) || isNaN(angle) || angle <= 0) {
        alert('Los valores deben ser mayores que cero');
        return;
    }

    const g = 9.81;
    const angleRad = angle * Math.PI / 180;
    const sinAngle = Math.sin(angleRad);

    const mass = frictionForce / (g * sinAngle);
    const weight = mass * g;

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Peso:</strong> ${weight.toFixed(2)} N</p>
        <p><strong>Masa:</strong> ${mass.toFixed(2)} kg</p>
        <p><strong>Fuerza de Fricción:</strong> ${frictionForce.toFixed(2)} N</p>

    `;

    startAnimation(angle, 5, angleRad);
}

function calculateAndAnimateFrictionCoefficient() {
    const angle = parseFloat(document.getElementById('angleInput').value);
    const mass = parseFloat(document.getElementById('massInput').value);

    if (isNaN(angle) || isNaN(mass) || mass <= 0) {
        alert('Por favor ingrese valores válidos (ángulo y masa > 0)');
        return;
    }

    const g = 9.81;
    const angleRad = angle * Math.PI / 180; // Convertir a radianes

    // Cálculo del coeficiente de fricción estática mínimo requerido para evitar el deslizamiento
    const minFrictionCoefficient = Math.tan(angleRad);

    const weight = mass * g;
    const normalForce = weight * Math.cos(angleRad);
    const frictionForceNeeded = weight * Math.sin(angleRad); // Fuerza necesaria para equilibrar

    // Resultado teórico (μ mínimo requerido)
    const theoreticalFrictionForce = minFrictionCoefficient * normalForce;

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Peso:</strong> ${weight.toFixed(2)} N</p>
        <p><strong>Fuerza Normal:</strong> ${normalForce.toFixed(2)} N</p>
        <p><strong>Componente del peso paralela al plano:</strong> ${frictionForceNeeded.toFixed(2)} N</p>
        <p><strong>Coeficiente de Fricción Mínimo (μ) requerido:</strong> ${minFrictionCoefficient.toFixed(4)}</p>
        <p>Para que el objeto no deslice, el coeficiente de fricción estática real debe ser ≥ ${minFrictionCoefficient.toFixed(4)}</p>
    `;

    // Usar valores por defecto para la animación
    const distance = 5; // metros
    startAnimation(angle, distance, angleRad);
}

function startAnimation(angle, distance, angleRad) { //Parte de la animación
    const canvas = document.getElementById('physicsCanvas');
    const ctx = canvas.getContext('2d');
    cancelAnimationFrame(animationFrameId);

    // Ajustar dimensiones del canvas para el nuevo diseño
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const startX = 50;
    const startY = 50;
    const planeLength = Math.min(300, canvasWidth - startX - 50);
    const boxSize = 20;
    const floorY = startY + planeLength * Math.sin(angleRad);

    const maxDistancePx = (distance / 5) * planeLength;
    const speed = 1.5;
    let position = 0;

    function drawArrow(x, y, dx, dy, color, text) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + dx, y + dy);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Flecha
        const arrowAngle = Math.atan2(dy, dx);
        const headLength = 8;
        ctx.beginPath();
        ctx.moveTo(x + dx, y + dy);
        ctx.lineTo(x + dx - headLength * Math.cos(arrowAngle - Math.PI/6), 
                   y + dy - headLength * Math.sin(arrowAngle - Math.PI/6));
        ctx.lineTo(x + dx - headLength * Math.cos(arrowAngle + Math.PI/6), 
                   y + dy - headLength * Math.sin(arrowAngle + Math.PI/6));
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();

        // Texto
        ctx.fillStyle = color;
        ctx.font = "10px Arial";
        ctx.fillText(text, x + dx + 5, y + dy + 5);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar plano inclinado
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(
            startX + planeLength * Math.cos(angleRad),
            startY + planeLength * Math.sin(angleRad)
        );
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Dibujar piso horizontal
        ctx.beginPath();
        ctx.moveTo(startX + planeLength * Math.cos(angleRad), floorY);
        ctx.lineTo(canvas.width - 20, floorY);
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Dibujar caja
        const centerX = startX + position * Math.cos(angleRad);
        const centerY = startY + position * Math.sin(angleRad);

        ctx.save();
        ctx.translate(centerX, centerY);
        const offset = (boxSize / 2) / Math.cos(angleRad);
        ctx.translate(0, -offset);
        ctx.rotate(angleRad);
        ctx.fillStyle = '#FF5733';
        ctx.fillRect(-boxSize/2, -boxSize/2, boxSize, boxSize);
        ctx.restore();

        // Dibujar flechas de fuerzas (más pequeñas para el nuevo diseño)
        drawArrow(centerX, centerY, 0, 30, 'blue', 'Peso');
        drawArrow(centerX, centerY, -25 * Math.cos(angleRad), -25 * Math.sin(angleRad), 'red', 'Fricción');
        drawArrow(centerX, centerY, 25 * Math.sin(angleRad), -25 * Math.cos(angleRad), 'green', 'Normal');

        // Mover la caja
        if (position < planeLength) {
            position += speed;
            if (startY + position * Math.sin(angleRad) >= floorY) {
                cancelAnimationFrame(animationFrameId);
            } else {
                animationFrameId = requestAnimationFrame(draw);
            }
        }
    }

    draw();
}

function calcularMCU() {
    const masa = parseFloat(document.getElementById("masaInput").value);
    const radio = parseFloat(document.getElementById("radioInput").value);
    const vueltas = parseFloat(document.getElementById("vueltasInput").value);
    const tiempo = parseFloat(document.getElementById("tiempoInput").value);
    const resultadoDiv = document.getElementById("physicsResults");

    if ([masa, radio, vueltas, tiempo].some(v => isNaN(v) || v <= 0)) {
        resultadoDiv.innerHTML = "<p style='color:red;'>Completa todos los campos correctamente.</p>";
        return;
    }

    const periodo = tiempo / vueltas;
    const frecuencia = 1 / periodo;
    const trayectoriaRecorrida = 2 * Math.PI * radio * vueltas;
    const velocidadTangencial = trayectoriaRecorrida / tiempo;
    const velocidadAngular = (2 * Math.PI) / periodo;
    const aceleracionCentripeta = Math.pow(velocidadTangencial, 2) / radio;
    const fuerzaCentripeta = masa * aceleracionCentripeta;

    resultadoDiv.innerHTML = `
        <h3>Resultados MCU:</h3>
        <ul>
            <li><strong>Periodo (T):</strong> ${periodo.toFixed(2)} s</li>
            <li><strong>Frecuencia (f):</strong> ${frecuencia.toFixed(2)} Hz</li>
            <li><strong>Velocidad tangencial (v):</strong> ${velocidadTangencial.toFixed(2)} m/s</li>
            <li><strong>Velocidad angular (ω):</strong> ${velocidadAngular.toFixed(2)} rad/s</li>
            <li><strong>Aceleración centrípeta:</strong> ${aceleracionCentripeta.toFixed(2)} m/s²</li>
            <li><strong>Fuerza centrípeta:</strong> ${fuerzaCentripeta.toFixed(2)} N</li>
            <li><strong>Trayectoria recorrida:</strong> ${trayectoriaRecorrida.toFixed(2)} m</li>
        </ul>
    `;
    
    if (radio >= 0) {
        animarMCU(radio, velocidadAngular);
    } else
        animarMCURdef(velocidadAngular);
        
}

function calcularPeriodo() {
    const tiempo = parseFloat(document.getElementById('tiempoInput').value);
    const vueltas = parseFloat(document.getElementById('vueltasInput').value);

    if (isNaN(tiempo) || isNaN(vueltas) || tiempo <= 0 || vueltas <= 0) {
        alert('Por favor ingrese valores válidos (mayores que cero)');
        return;
    }

    const periodo = tiempo / vueltas;
    const frecuencia = 1 / periodo;
    const velocidadAngular = (2 * Math.PI) / periodo;

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3>
        <ul>
            <li><strong>Período (T):</strong> ${periodo.toFixed(2)} segundos</li>
            <li><strong>Frecuencia (f):</strong> ${frecuencia.toFixed(2)} Hz</li>
            <li><strong>Velocidad angular (ω):</strong> ${velocidadAngular.toFixed(2)} rad/s</li>
        </ul>
    `;

    animarMCURdef(velocidadAngular);
}

function calcularFrecuenciaMCU() {
    const vueltas = parseFloat(document.getElementById('vueltasInput').value);
    const tiempo = parseFloat(document.getElementById('tiempoInput').value);

    if (isNaN(vueltas) || isNaN(tiempo) || vueltas <= 0 || tiempo <= 0) {
        alert('Por favor ingrese valores válidos (mayores que cero)');
        return;
    }

    const frecuencia = vueltas / tiempo;
    const periodo = 1 / frecuencia;
    const velocidadAngular = 2 * Math.PI * frecuencia;

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3>
        <ul>
            <li><strong>Frecuencia (f):</strong> ${frecuencia.toFixed(2)} Hz</li>
            <li><strong>Período (T):</strong> ${periodo.toFixed(2)} s</li>
            <li><strong>Velocidad angular (ω):</strong> ${velocidadAngular.toFixed(2)} rad/s</li>
        </ul>
    `;

    animarMCURdef(velocidadAngular);
}

function animarMCURdef(velocidadAngular, radio = 30) { // Radio por defecto 30px
    const canvas = document.getElementById("physicsCanvas");
    const ctx = canvas.getContext("2d");
    cancelAnimationFrame(animationFrameId);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radioPx = Math.min(30, radio * 10); // Escalar el radio para visualización
    let angle = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar trayectoria circular
        ctx.beginPath();
        ctx.arc(centerX, centerY, radioPx, 0, 2 * Math.PI);
        ctx.strokeStyle = '#aaa';
        ctx.stroke();

        // Dibujar objeto
        ctx.beginPath();
        const x = centerX + radioPx * Math.cos(angle);
        const y = centerY + radioPx * Math.sin(angle);
        ctx.arc(x, y, 8, 0, 2 * Math.PI);
        ctx.fillStyle = '#FF5733';
        ctx.fill();

        // Dibujar radio
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = '#555';
        ctx.stroke();

        // Dibujar vector velocidad (tangente)
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(
            x + 20 * Math.cos(angle + Math.PI/2),
            y + 20 * Math.sin(angle + Math.PI/2)
        );
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Actualizar ángulo según velocidad angular
        angle += velocidadAngular * 0.05;

        animationFrameId = requestAnimationFrame(draw);
    }

    draw();
}

function animarMCU(radio, velocidadAngular) {
const canvas = document.getElementById("physicsCanvas");
    const ctx = canvas.getContext("2d");
    cancelAnimationFrame(animationFrameId); // Detener animaciones previas

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radioPx = Math.min(30, radio * 10); // Escalar el radio para visualización
    let angle = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar trayectoria circular
        ctx.beginPath();
        ctx.arc(centerX, centerY, radioPx, 0, 2 * Math.PI);
        ctx.strokeStyle = '#aaa';
        ctx.stroke();

        // Dibujar objeto
        ctx.beginPath();
        const x = centerX + radioPx * Math.cos(angle);
        const y = centerY + radioPx * Math.sin(angle);
        ctx.arc(x, y, 8, 0, 2 * Math.PI);
        ctx.fillStyle = '#FF5733';
        ctx.fill();

        // Dibujar radio
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = '#555';
        ctx.stroke();

        // Dibujar vector velocidad (tangente)
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(
            x + 20 * Math.cos(angle + Math.PI/2),
            y + 20 * Math.sin(angle + Math.PI/2)
        );
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Actualizar ángulo según velocidad angular
        angle += velocidadAngular * 0.05;

        animationFrameId = requestAnimationFrame(draw);
    }

    draw();
}

function calcularYAnimartra() {
  const F = parseFloat(document.getElementById('fuerzaInput').value);
  const d = parseFloat(document.getElementById('distanciaInput').value);
  const ang = parseFloat(document.getElementById('anguloInput').value);

  if (isNaN(F) || isNaN(d) || isNaN(ang)) {
    alert("Completa todos los campos correctamente");
    return;
  }

  const rad = ang * Math.PI / 180;
  const trabajo = F * d * Math.cos(rad);

  document.getElementById('physicsResults').innerHTML = `
    <h3>Resultados:</h3>
    <p><strong>Trabajo:</strong> ${trabajo.toFixed(2)} J</p>
  `;

  animarCajatra(d);
}

function animarCajatra(distancia) {
  const canvas = document.getElementById("physicsCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let x = 20;
  const y = canvas.height / 2 - 20;
  const ancho = 40;
  const alto = 40;
  const dx = (distancia / 10);

  function mover() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#42a5f5";
    ctx.fillRect(x, y, ancho, alto);
    x += dx;
    if (x < canvas.width - ancho - 20) {
      requestAnimationFrame(mover);
    }
  }

  mover();
}

function calcularYAnimarECin() {
  const m = parseFloat(document.getElementById('masaInput').value);
  const v = parseFloat(document.getElementById('velocidadInput').value);

  if (isNaN(m) || isNaN(v)) {
    alert("Completa todos los campos correctamente");
    return;
  }

  const energia = 0.5 * m * v * v;

  document.getElementById('physicsResults').innerHTML = `
    <h3>Resultados:</h3>
    <p><strong>Energía Cinética:</strong> ${energia.toFixed(2)} J</p>
  `;

  animarVelocidadECin(v);
}

function animarVelocidadECin(velocidad) {
  const canvas = document.getElementById("physicsCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let x = 20;
  const y = canvas.height / 2 - 20;
  const ancho = 40;
  const alto = 40;
  const dx = Math.min(velocidad, 10);

  function mover() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#66bb6a";
    ctx.fillRect(x, y, ancho, alto);
    x += dx;
    if (x < canvas.width - ancho - 20) {
      requestAnimationFrame(mover);
    }
  }

  mover();
}

function calcularYAnimarEP() {
  const m = parseFloat(document.getElementById('masaInput').value);
  const h = parseFloat(document.getElementById('alturaInput').value);
  const g = 9.81;

  if (isNaN(m) || isNaN(h)) {
    alert("Completa todos los campos correctamente");
    return;
  }

  const energia = m * g * h;

  document.getElementById('physicsResults').innerHTML = `
    <h3>Resultados:</h3>
    <p><strong>Energía Potencial:</strong> ${energia.toFixed(2)} J</p>
  `;

  animarCaidaEP(h);
}

function animarCaidaEP(altura) {
  const canvas = document.getElementById("physicsCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let y = 10;
  const x = canvas.width / 2 - 20;
  const alto = 40;
  const ancho = 40;
  const maxY = Math.min(altura * 20, canvas.height - alto - 10);

  function caer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ab47bc";
    ctx.fillRect(x, y, ancho, alto);
    y += 2;
    if (y < maxY) {
      requestAnimationFrame(caer);
    }
  }

  caer();
}

function calcularYAnimarPot() {
  const W = parseFloat(document.getElementById('trabajoInput').value);
  const t = parseFloat(document.getElementById('tiempoInput').value);

  if (isNaN(W) || isNaN(t) || t <= 0) {
    alert("Completa todos los campos correctamente (tiempo > 0)");
    return;
  }

  const potencia = W / t;

  document.getElementById('physicsResults').innerHTML = `
    <h3>Resultados:</h3>
    <p><strong>Potencia:</strong> ${potencia.toFixed(2)} W</p>
  `;

  animarMedidorPot(potencia);
}

function animarMedidorPot(potencia) {
  const canvas = document.getElementById("physicsCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const barraMax = Math.min(potencia, 300);
  let valor = 0;

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fb8c00";
    ctx.fillRect(50, canvas.height - valor, 80, valor);
    valor += 2;
    if (valor <= barraMax) {
      requestAnimationFrame(animar);
    }
  }

  animar();
}

function calcularYAnimarTrabajoNeto() {
  const m = parseFloat(document.getElementById('masaInput').value);
  const vi = parseFloat(document.getElementById('viInput').value);
  const vf = parseFloat(document.getElementById('vfInput').value);

  if (isNaN(m) || isNaN(vi) || isNaN(vf)) {
    alert("Completa todos los campos correctamente");
    return;
  }

  const trabajoNeto = 0.5 * m * (vf * vf - vi * vi);

  document.getElementById('physicsResults').innerHTML = `
    <h3>Resultados:</h3>
    <p><strong>Trabajo Neto:</strong> ${trabajoNeto.toFixed(2)} J</p>
  `;

  animarCambioVelocidadTrabajoNeto(vi, vf);
}

function animarCambioVelocidadTrabajoNeto(vi, vf) {
  const canvas = document.getElementById("physicsCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let x = 20;
  const y = canvas.height / 2 - 20;
  const ancho = 40;
  const alto = 40;
  const aceleracion = (vf - vi) / 60;
  let velocidad = vi;

  function mover() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#7e57c2";
    ctx.fillRect(x, y, ancho, alto);
    x += velocidad / 2;
    velocidad += aceleracion;
    if (x < canvas.width - ancho - 20) {
      requestAnimationFrame(mover);
    }
  }

  mover();
}

function calcularYAnimarConstK() {
  const F = parseFloat(document.getElementById('fuerzaInput').value);
  const x = parseFloat(document.getElementById('deformacionInput').value);

  if (isNaN(F) || isNaN(x) || x === 0) {
    alert("Completa todos los campos correctamente (deformación ≠ 0)");
    return;
  }

  const k = F / x;

  document.getElementById('physicsResults').innerHTML = `
    <h3>Resultados:</h3>
    <p><strong>Constante Elástica:</strong> ${k.toFixed(2)} N/m</p>
  `;

  animarResorteConstK(x);
}

function animarResorteConstK(deformacion) {
  const canvas = document.getElementById("physicsCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const yBase = 80;
  const alturaFinal = yBase + deformacion * 100;
  let y = yBase;

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Línea del resorte
    ctx.beginPath();
    ctx.moveTo(190, 0);
    ctx.lineTo(190, y);
    ctx.strokeStyle = '#0288d1';
    ctx.lineWidth = 5;
    ctx.stroke();

    // Caja colgando
    ctx.fillStyle = '#4dd0e1';
    ctx.fillRect(170, y, 40, 40);

    if (y < alturaFinal) {
      y += 2;
      requestAnimationFrame(animar);
    }
  }

  animar();
}

function calculateAndAnimateFFCin1 () {
    const mass = parseFloat(document.getElementById("massInput").value); 
    const mu = parseFloat(document.getElementById("frictionCoeficentInput").value); 
    const velocity = parseFloat(document.getElementById("velocityInput").value); 

    //se repite cuanto sea necesario
    
    if (isNaN(mass) || isNaN(mu) || mass <= 0 || mu <= 0) {
        alert('Los valores deben ser mayores que cero');
        return;
    }
    //declara variables con el término const
    
    const g = 9.81;
	const weight = mass * g;
	const normalForce = weight;
	const frictionForce = mu * normalForce;
	const aux1 = -(mass * velocity * velocity);
	const aux2 = 2 * frictionForce * -1;
	const distance = aux1/aux2;
    
    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3> 
        <p><strong>Peso:</strong> ${weight.toFixed(2)} N</p>
        <p><strong>Fuerza Normal:</strong> ${normalForce.toFixed(2)} N</p>
        <p><strong>Fuerza de fricción:</strong> ${frictionForce.toFixed(2)} N</p>
        <p><strong>Distancia:</strong> ${distance.toFixed(2)} N</p>

    `;
    
    startAnimation(angle, distance, angleRad);
}

function calculateAndAnimateCoeficiente() {
    const mass = parseFloat(document.getElementById("massInput").value); 
    const forcefriction = parseFloat(document.getElementById("forcefrictionInput").value); 

    if (isNaN(mass) || isNaN(forcefriction) || mass <= 0 || forcefriction <= 0) {
        alert('Los valores deben ser mayores que cero');
        return;
    }

    const g = 9.81;
    const weight = mass * g;
    const coefficientFriction = forcefriction / weight;

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3> 
        <p><strong>Peso:</strong> ${weight.toFixed(2)} N</p>
        <p><strong>Fuerza de Fricción:</strong> ${forcefriction.toFixed(2)} N</p>
        <p><strong>Coeficiente de fricción:</strong> ${coefficientFriction.toFixed(2)}</p>
    `;

   
    startAnimation(0, 0, 0); // Placeholder: cambia según tu función real
}

function calculateAndAnimateMasa() {
    const mu = parseFloat(document.getElementById("muInput").value); 
    const forcefriction = parseFloat(document.getElementById("forcefrictionInput").value); 

    if (isNaN(mu) || isNaN(forcefriction) || mu <= 0 || forcefriction <= 0) {
        alert('Los valores deben ser mayores que cero');
        return;
    }

    const g = 9.81;
    const mass = forcefriction / (mu * g);
    const weight = mass * g;

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3> 
        <p><strong>Masa:</strong> ${mass.toFixed(2)} kg</p>
        <p><strong>Peso:</strong> ${weight.toFixed(2)} N</p>
        <p><strong>Fuerza de Fricción:</strong> ${forcefriction.toFixed(2)} N</p>
    `;

    startAnimation(0, 0, 0); // puedes ajustar estos valores si usas animación
}

function calculateAndAnimateFriction() {
    const mu = parseFloat(document.getElementById("muInput").value); 
    const angle = parseFloat(document.getElementById("angleInput").value); 
    const mass = parseFloat(document.getElementById("massInput").value); 

    if (isNaN(mu) || isNaN(angle) || isNaN(mass) || mu <= 0 || mass <= 0) {
        alert('Los valores deben ser mayores que cero');
        return;
    }

    const g = 9.81;
    const angleRad = angle * Math.PI / 180;
    const normalForce = mass * g * Math.cos(angleRad);
    const frictionForce = mu * normalForce;
    const weight = mass * g;

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3> 
        <p><strong>Peso:</strong> ${weight.toFixed(2)} N</p>
        <p><strong>Fuerza Normal:</strong> ${normalForce.toFixed(2)} N</p>
        <p><strong>Fuerza de Fricción:</strong> ${frictionForce.toFixed(2)} N</p>
    `;

    startAnimation(angle, frictionForce, angleRad); // si tienes animación, la mantienes
}

function calculateAndAnimatemasa () {
    const forcefriction = parseFloat(document.getElementById("forcefrictionInput").value); 
    const angle = parseFloat(document.getElementById("angleInput").value); 
    const velocity = parseFloat(document.getElementById("velocityInput").value); 

    //se repite cuanto sea necesario
    
    if (isNaN(mass) || isNaN(mu) || mass <= 0 || mu <= 0) {
        alert('Los valores deben ser mayores que cero');
        return;
    }
    //declara variables con el término const
    
    const g = 9.81;
	const senang = Math.sen(angle);
	const aux1 = senang * g;
	const mass = forcefriction/aux1;

    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3> 
        <p><strong>Angulo:</strong> ${angle.toFixed(2)} N</p>
        <p><strong>Fuerza friccion:</strong> ${forcefriction.toFixed(2)} N</p>
        <p><strong>Masa:</strong> ${mass.toFixed(2)} N</p>
    `;
    
    startAnimation(angle, distance, angleRad);
}

function calculateAndAnimateFFCin () {
    const mass = parseFloat(document.getElementById("massInput").value); 
    const angle = parseFloat(document.getElementById("frictionCoeficentInput").value); 
    const velocity = parseFloat(document.getElementById("velocityInput").value); 
	const forceFriccion = parseFloat(document.getElementById("frictionCoeficentInput").value); 
    //se repite cuanto sea necesario
    
    if (isNaN(mass) || isNaN(mu) || mass <= 0 || mu <= 0) {
        alert('Los valores deben ser mayores que cero');
        return;
    }
    //declara variables con el término const
    
    const g = 9.81;
	const arccosang = Math.cos(angle);
	const Forcenormal= mass * g * arccosang;
	const frictioncoefficient= forceFriccion/Forcenormal;
	const aux1 = -(mass * velocity * velocity);
	const aux2 = 2 * frictionForce * -1;
	const distance = aux1/aux2;
    
    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3> 
        <p><strong>Peso:</strong> ${weight.toFixed(2)} N</p>
        <p><strong>Fuerza Normal:</strong> ${Forcenormal.toFixed(2)} N</p>
        <p><strong>Fuerza de fricción:</strong> ${frictionForce.toFixed(2)} N</p>
        <p><strong>Distancia:</strong> ${distance.toFixed(2)} N</p>

    `;
    
    startAnimation(angle, distance, angleRad);
}

function calculateAndAnimateAngule () {
    const mass = parseFloat(document.getElementById("massInput").value); 
    const ForceNormal = parseFloat(document.getElementById("ForceNormalInput").value);
    //se repite cuanto sea necesario
    
    if (isNaN(mass) || isNaN(mu) || mass <= 0 || mu <= 0) {
        alert('Los valores deben ser mayores que cero');
        return;
    }
    
    const g = 9.81;
	const weight = mass * g;
	const cosTheta = ForceNormal / weight;

	
	if (cosTheta < -1 || cosTheta > 1) {
    console.error("Error: coseno fuera del rango válido");
	}else {
    
    document.getElementById('physicsResults').innerHTML = `
        <h3>Resultados:</h3> 
        <p><strong>Peso:</strong> ${weight.toFixed(2)} N</p>
        <p><strong>Fuerza Normal:</strong> ${ForceNormal.toFixed(2)} N</p>
        <p><strong>Angulo:</strong> ${cosTheta.toFixed(2)} N</p>

    `;
    
    startAnimation(angle, distance, angleRad);
	}
}


window.toggleMenu = toggleMenu;
window.cargarContenido = cargarContenido;
window.calculateFFEst = calculateFFEst;
window.calculateMassEst = calculateMassEst;
window.calculateFricCoefEst = calculateFricCoefEst;
window.calculateAndAnimateFFEstPI = calculateAndAnimateFFEstPI;
window.calculateAndAnimateAngle = calculateAndAnimateAngle;
window.calculateAndAnimateMassPI = calculateAndAnimateMassPI;
window.calculateAndAnimateFrictionCoefficient = calculateAndAnimateFrictionCoefficient;
window.startAnimation = startAnimation;
window.calcularMCU = calcularMCU;
window.animarMCU = animarMCU;
window.calcularPeriodo = calcularPeriodo;
window.calcularFrecuenciaMCU = calcularFrecuenciaMCU;
window.calcularVelocidadTangencialMCU = calcularVelocidadTangencialMCU;
window.calcularMasaMCU = calcularMasaMCU;
window.calcularRadioMCU = calcularRadioMCU;
window.calcularYAnimartra = calcularYAnimartra;
window.animarCajatra = animarCajatra;
window.calcularYAnimarECin = calcularYAnimarECin;
window.animarVelocidadECin = animarVelocidadECin;
window.calcularYAnimarEP = calcularYAnimarEP;
window.animarCaidaEP = animarCaidaEP;
window.calcularYAnimarPot = calcularYAnimarPot;
window.animarMedidorPot = animarMedidorPot;
window.calcularYAnimarTrabajoNeto = calcularYAnimarTrabajoNeto;
window.animarCambioVelocidadTrabajoNeto = animarCambioVelocidadTrabajoNeto;
window.calcularYAnimarConstK = calcularYAnimarConstK;
window.animarResorteConstK = animarResorteConstK;
window.animarResorteConstK = animarResorteConstK;
window.animarResorteConstK = animarResorteConstK;
window.animarResorteConstK = animarResorteConstK;
window.animarResorteConstK = animarResorteConstK;
window.animarResorteConstK = animarResorteConstK;
window.animarResorteConstK = animarResorteConstK;
window.animarResorteConstK = animarResorteConstK;