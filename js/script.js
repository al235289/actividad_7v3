// =======================================================
// EFECTO PARALLAX (Corregido, sin duplicados)
// =======================================================
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const height = window.innerHeight;
    let progress = Math.min(scroll / height, 1);
    const fastProg = Math.pow(progress, 0.4);

    const earth = document.getElementById('tierra-img');
    const sun = document.getElementById('sol-img');
    const moon = document.getElementById('luna-img');
    const mark = document.getElementById('mark-img');
    const asteroids = document.getElementById('asteroides');

    // tierra se hace pequeña y desaparece al 70% del scroll del viewport
    earth.style.transform = `scale(${1 - fastProg * 0.9}) translateY(${scroll * 1.5}px)`;
    earth.style.opacity = progress > 0.7 ? 0 : 1 - (progress * 1.4);

    // sol desaparece al 60% del scroll del viewport
    sun.style.transform = `scale(${1 - fastProg * 0.8}) translate(${scroll * 0.2}px, -${scroll * 0.1}px)`;
    sun.style.opacity = progress > 0.6 ? 0 : 1 - (progress * 1.6);

    // luna se hace pequeña y desaparece al 70% del scroll del viewport
    moon.style.transform = `scale(${1 - fastProg * 0.7}) translateX(${scroll * 0.4}px)`;
    moon.style.opacity = progress > 0.7 ? 0 : 1 - (progress * 1.4);

    // es para evitar que mark sea tocado por el cuadro negro
    const scaleMark = 1 + (fastProg * 13);
    mark.style.transform = `scale(${scaleMark}) translateY(-${scroll * 0.4}px)`;
    // si el scroll pasa de 0.7, Mark se desvanece rápido
    mark.style.opacity = progress > 0.7 ? (1 - progress) * 4 : 1;

    // aquí desaparecen los asteroides por completo
    asteroids.style.transform = `translateY(${scroll * 2.5}px)`;
    asteroids.style.opacity = progress > 0.6 ? 0 : 1 - (progress * 1.6);
});

window.addEventListener('scroll', () => {
    // Si la pantalla es más ancha que un celular, ejecuta el efecto
    if (window.innerWidth > 768) { 
        let value = window.scrollY;
        // Aquí adentro dejas tus variables
    }
});


// Aquí empiezan los dolores de cabeza

// 1. EL BUCLE 'FOR': Para la Evolución del Título (Rectángulos)
const contenedorLogos = document.getElementById('contenedor-logos');

for (let i = 1; i <= 4; i++) {
    let cajaLogo = document.createElement('div');
    cajaLogo.className = 'item-logo'; 
    // Usando el formato .jpg que indicaste
    cajaLogo.innerHTML = `<img src="img/logo${i}.jpg" alt="Logo Episodio ${i}">`;
    contenedorLogos.appendChild(cajaLogo);
}

// 2. DATOS DE PERSONAJES: Lista con poder hasta 300
const personajes = [
    { nombre: "Mark Grayson", poder: 290, faccion: "Tierra", imagen: "mark_avatar.png" },
    { nombre: "Omni-Man", poder: 275, faccion: "Viltrumita", imagen: "omni_avatar.png" },
    { nombre: "Battle Beast", poder: 293, faccion: "Independiente", imagen: "beast_avatar.png" },
    { nombre: "Rex Splode", poder: 160, faccion: "GDA", imagen: "rex_avatar.png" },
    { nombre: "Atom Eve", poder: 245, faccion: "Tierra", imagen: "eve_avatar.png" },
    { nombre: "Robot", poder: 200, faccion: "GDA", imagen: "robot_avatar.png" },
    { nombre: "Mauler Twins", poder: 180, faccion: "Independiente", imagen: "mauler_avatar.png" },
    { nombre: "Thragg", poder: 298, faccion: "Viltrumita", imagen: "thragg_avatar.png" },
    { nombre: "Cecil Stedman", poder: 20, faccion: "GDA", imagen: "cecil_avatar.png" },
    { nombre: "Allen the Alien", poder: 280, faccion: "Coalicion", imagen: "allen_avatar.png" },
    { nombre: "Space Racer", poder: 210, faccion: "Coalicion", imagen: "space_avatar.png" },
    { nombre: "Conquest", poder: 280, faccion: "Viltrumita", imagen: "conquest_avatar.png" },
    { nombre: "Oliver Grayson", poder: 230, faccion: "Tierra", imagen: "oliver_avatar.png" },
    { nombre: "Monster Girl", poder: 150, faccion: "GDA", imagen: "monster_avatar.png" },
    { nombre: "Duplí Kate", poder: 55, faccion: "GDA", imagen: "kate_avatar.png" },
    { nombre: "Rognarr", poder: 278, faccion: "Independiente", imagen: "rognarr_avatar.png" },
    { nombre: "Anissa", poder: 260, faccion: "Viltrumita", imagen: "anissa_avatar.png" },
    { nombre: "Inmortal", poder: 175, faccion: "GDA", imagen: "inmortal_avatar.png" },
    { nombre: "Lucan", poder: 255, faccion: "Viltrumita", imagen: "lucan_avatar.png" },
    { nombre: "Kregg", poder: 250, faccion: "Viltrumita", imagen: "kregg_avatar.png" },
    { nombre: "Thaedus", poder: 270, faccion: "Viltrumita", imagen: "thaedus_avatar.png" },
    { nombre: "Thula", poder: 225, faccion: "Viltrumita", imagen: "thula_avatar.png" },
    { nombre: "Bulletproof", poder: 110, faccion: "GDA", imagen: "bullet_avatar.png" },
    { nombre: "Darkwing", poder: 120, faccion: "GDA", imagen: "dark_avatar.png" },
    { nombre: "Shapersmith", poder: 140, faccion: "GDA", imagen: "shape_avatar.png" },
    { nombre: "Titan", poder: 50, faccion: "Independiente", imagen: "titan_avatar.png" }
    
];

const contenedorAmenazas = document.getElementById('contenedor-amenazas');

// orden de liusta
personajes.sort((a, b) => b.poder - a.poder);

//Aqui tengo 3 estructura de datos ¡aaaaaaahhhh! el 'FOR', 'IF/ELSE' y 'SWITCH' 
for (let i = 0; i < personajes.length; i++) {
    let personaje = personajes[i];
    
    // Aqui tengo mi generador de tarjetas automaticas
    let contenedorItem = document.createElement('div');
    contenedorItem.className = 'contenedor-tarjeta';

    // Rectángulo de la imagen
    let cajaPersonaje = document.createElement('div');
    cajaPersonaje.className = 'item-personaje-rect';
    
   // ESTRUCTURA IF / ELSE: Define color de borde y de fondo
    let colorBorde = "";
    let colorFondo = ""; 

    if (personaje.poder > 249) {
        colorBorde = "5px solid #ff3434";      
        colorFondo = "rgba(255, 0, 0, 0.5)";   
    } 
    
    else if (personaje.poder > 179) {
        colorBorde = "5px solid #ffa500";      
        colorFondo = "rgba(255, 166, 0, 0.5)"; 
    } 

     else if (personaje.poder > 119) {
        colorBorde = "5px solid rgb(0, 68, 255)";     
        colorFondo = "rgba(0, 68, 255, 0.5)"; 
    } 
    
    else {
        colorBorde = "5px solid #00ff00";     
        colorFondo = "rgba(0, 255, 0, 0.5)";   
    }

  
    cajaPersonaje.style.border = colorBorde;
    cajaPersonaje.style.backgroundColor = colorFondo;
// Aqui implemento las imganes automaticamente, solo buscando el nombre del personajes y formato
    cajaPersonaje.innerHTML = `<img src="img/${personaje.imagen}" alt="${personaje.nombre}">`;

  // Asignacion de grupo segun mi crieterio por ver la serie
    let etiqueta = "";
    switch (personaje.faccion) {
        case "Viltrumita": etiqueta = "Espacio"; break;
        case "GDA": etiqueta = "Aliado"; break;
        case "Tierra": etiqueta = "Defensor"; break;
        default: etiqueta = "Desconocido";
    }

// Mi generador de cajas de informacion de personajes (descripcion) PD:Ayuda mi gente
    let cajaTexto = document.createElement('div');
    cajaTexto.className = 'caja-texto-tarjeta';
    cajaTexto.innerHTML = `
        <div style="text-align: center; color: white; font-weight: bold;">
            <p style="margin-bottom: 4px; font-size: 16px;">${personaje.nombre}</p>
            <p style="font-size: 24px; color: #b3b3b3; margin-bottom: 2px;">Poder: ${personaje.poder}</p>
            <p style="font-size: 18px; color: #f7d200;">${etiqueta}</p>
        </div>
    `;

// Para tener el orden de como se colocar la caja en el HTML los hijos de cada uno SISIIS ACABE DIOS ME AYUDE AL FINAL DE LA CONTIENDA
    contenedorItem.appendChild(cajaPersonaje);
    contenedorItem.appendChild(cajaTexto);
    contenedorAmenazas.appendChild(contenedorItem);
}

//TERMINO INVINCIBLE Y ME SIENTO TRISTE MIENTRAS ESCRRIBO ESTE CODIGO, DIOS ME AYUDE