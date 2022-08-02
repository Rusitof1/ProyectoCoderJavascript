class Producto {
  constructor(nombre, id, precio, img, descripcion) {
    (this.nombre = nombre),
      (this.id = id),
      (this.precio = precio),
      (this.img = img),
      (this.descripcion = descripcion);
  }
}

const catalogo = [];

const producto1 = new Producto(
  "Fernet",
  "01",
  1500,
  "https://http2.mlstatic.com/D_NQ_NP_775149-MLA42105276768_062020-O.jpg",
  "Con su estilo moderno y deportivo, la X RAISE se centra en la estabilidad, la comodidad y el rendimiento. La construcción con el sistema Quicklace™ para ajustes de cordones sencillos y talón y puntera reforzados"
);
const producto2 = new Producto(
  "Absolut",
  "02",
  1800,
  "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53424_default_big.jpeg",
  "Medida exterior: 210 x 310 x 130 cm. Tejido Polyester 68D / 190T. Piso Polietileno 100% PE SHEET 12x10 130 g/m2. Columna de Agua 1000mm P.U. Estructura Fibra de vidrio 7.9 mm. Peso: 3,90 kg"
);
const producto3 = new Producto(
  "Aperol",
  "03",
  2000,
  "https://vinotecalavia.com/3823-thickbox_default/aperol-spritz.jpg",
  "La Fugit 65 posee respaldo con tecnologia AirScape™ moldeado por inyección y las hombreras y el cinturón lumbar permiten que la mochila acompañe todos tus movimientos cuando te adentres en terrenos exigentes"
);
const producto4 = new Producto(
  "Bayles",
  "04",
  3800,
  "https://almacenbeberbien.com/web/wp-content/uploads/2020/09/Baileys.jpg",
  "Campera técnica de alta montaña para expediciones. 100% impermeable y cortaviento, alta respirabilidad y bajo peso. Tejido GORE-TEX® 3C PRO SHELL con tecnología MICRO GRID mejora resistencia a la abrasión interna y enganches"
);
const producto5 = new Producto(
  "Bombay",
  "05",
  5000,
  "https://http2.mlstatic.com/D_NQ_NP_2X_669612-MLA43643320606_102020-V.webp",
  "La transpiración se aisla de la piel gracias a las características del SPANDEX®. Una vez que la tela absorbe toda la humedad se dispersa rápidamente a través de las distintas capas para que se evapore más rápido"
);
const producto6 = new Producto(
  "Jonnie",
  "06",
  2600,
  "https://d2r9epyceweg5n.cloudfront.net/stores/001/997/262/products/red-label1-cc1194694dc124fa5516492678791331-1024-1024.png",
  "Sistema desmontable a bermuda. Confeccionada en una tela altamente respirable, gracias al SMART-DRY®. Esta prenda es de secado rápido. El material principal es Dry sec: microesmerilado y repelente al agua. Poliamida 100%"
);
const producto7 = new Producto(
  "Malibu",
  "07",
  2000,
  "https://cf.shopee.com.ar/file/6ec9e96f95f17c1fb7fb107f4a086c57",
  "Tecnologia: M-D Traction, la plantilla extraíble y la Entresuela de EVA moldeada garantiza una mejor amortiguación bajo los pies. La suela exterior de goma M-D Traction mejora el agarre y brinda durabilidad"
);
const producto8 = new Producto(
  "Smirnoff",
  "08",
  2000,
  "http://d3ugyf2ht6aenh.cloudfront.net/stores/871/106/products/vodka-smirnoff1-11d292c21c224c9b9f16002812336502-640-0.png",
  "Campera 100% impermeable y respirable ultraliviana para toda actividad outdoor y urbana. Campera Impermeable Watertight™ II con costuras totalmente termo-selladas y tecnología Omni-Tech®."
);

catalogo.push(
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8
);

/*const catalogoJSON = JSON.stringify(catalogo);*/

export { catalogo };
