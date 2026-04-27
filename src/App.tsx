import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    tag: "Origen",
    year: "2020–2021",
    title: "Cómo decidimos irnos a vivir a La Cabrera",
    summary: "Antes de que el proyecto tuviera nombre, hubo una decisión. Una búsqueda que empezó siendo de vivienda y terminó siendo de vida.",
    body: `La decisión no llegó de golpe. Llegó después de un período de escucha larga, de teletrabajar desde distintos lugares, de probar ecosistemas más pequeños, de sentir cómo cambia la mente y el cuerpo cuando el entorno cambia. La pandemia aceleró algo que ya estaba buscando forma.

Antes de La Cabrera, hubo Asturias. Hubo temporadas en lugares remotos trabajando desde la naturaleza. Hubo la comprobación de que esa forma de habitar y de crear se acomodaba mejor a lo que somos —a la capacidad creativa, al bienestar, al ritmo que necesitamos para hacer buen trabajo.

Desde ahí nació la búsqueda concreta: dónde irnos a vivir. Y llegó a través de una casa puesta en alquiler en un pueblo de 10 habitantes en Sigüenza, Guadalajara. La decisión se tomó con poca información y mucha confianza en el camino. En noviembre de 2021 nos instalamos en La Cabrera.

Esa es la raíz desde la que crece todo lo demás.`,
  },
  {
    id: 2,
    tag: "Primeros pasos",
    year: "2022",
    title: "El bar del pueblo y el primer gesto de arraigo",
    summary: "Instalarse en un lugar activa algo. Empiezas a ver sus necesidades, sus recursos, sus personas. La primera colaboración fue casi natural.",
    body: `Cuando te instalas en un lugar de verdad, algo cambia en cómo lo miras. Ya no eres de paso. Empiezas a entender sus ritmos, a conocer a quienes lo sostienen, a ver qué necesita y qué ya tiene.

El bar del pueblo —El Balcón del Dulce— llevaba unos años abierto y necesitaba una web. Desde las habilidades que traíamos —comunicación, estrategia, desarrollo tecnológico— pusimos al servicio del territorio lo que sabíamos hacer. Sin un proyecto formalmente constituido todavía. Sin nombre. Desde el gesto simple de aportar donde se puede.

Ese fue el primer caso. Y desde ahí empezamos también a vincularnos con la asociación de empresas local, a generar campañas de comunicación, a participar activamente en el tejido del territorio: la campaña de Reyes Magos, iniciativas comunitarias, presencia en lo cotidiano.

Paralelamente, las colaboraciones con otros territorios seguían creciendo. Lo local y lo más amplio empezaban a retroalimentarse.`,
  },
  {
    id: 3,
    tag: "Visibilidad",
    year: "Octubre 2022",
    title: "Presura 2022: la primera vez que le pusimos nombre a lo que estábamos haciendo",
    summary: "Una feria sobre despoblación, un expositor, una pequeña entrevista en un autobús. El momento en que el proyecto salió al mundo con nombre propio.",
    body: `Presura es la feria de referencia en España sobre el reto demográfico y la despoblación. Ese año, La Cabrera.eco tuvo expositor propio. Fue la primera vez que el proyecto se presentaba públicamente con nombre, con relato, con presencia física.

Grabamos una pequeña entrevista en el autobús de Presura —uno de los formatos de comunicación del evento— que circuló entre personas y proyectos vinculados al desarrollo rural. Una píldora pequeña, pero con algo dentro: la historia de dos personas que habían elegido quedarse, que estaban construyendo desde ahí, y que querían poner sus habilidades al servicio de otros territorios que también estaban buscando su camino.

Ese momento fue importante porque hizo visible algo que ya existía, pero que todavía no se había mostrado al mundo. A veces los proyectos necesitan ese acto de nombrarse para volverse reales también hacia afuera.`,
  },
  {
    id: 4,
    tag: "Territorio como aula",
    year: "2022",
    title: "La Noche de Emprendedores Rurales: cuando el territorio se convierte en sala",
    summary: "El primer evento situado. Dos emprendedores, sus proyectos, una noche en La Cabrera. La mirada colectiva como herramienta de desarrollo.",
    body: `Una noche. Dos emprendedores rurales con sus proyectos en proceso. Un espacio creado para que pudieran recibir miradas diversas —estratégica, comunicacional, tecnológica— y seguir avanzando con más claridad.

La Noche de Emprendedores Rurales fue el primer evento propio situado en el territorio. Pequeño, intencional, cuidado. La idea era sencilla y potente al mismo tiempo: que el acompañamiento ocurriera aquí, en el lugar, no desde una pantalla ni desde una ciudad de paso.

Esa experiencia nos enseñó algo que después ha guiado mucho de lo que hacemos: los proyectos cobran otra textura cuando se trabajan en el lugar que los origina. El territorio no es el telón de fondo. Es parte activa del proceso.`,
  },
  {
    id: 5,
    tag: "Colaboración",
    year: "2023–2024",
    title: "La Escuela Rural Emprendedora de Somiedo: diseñar desde la escucha",
    summary: "Un programa para mujeres rurales en Asturias, impulsado desde Ayuda en Acción. El diseño de experiencia de aprendizaje como práctica de arraigo.",
    body: `La Escuela Rural Emprendedora nació de una colaboración con Ayuda en Acción y la AEERS para acompañar a mujeres del Camino Real de la Mesa, en Asturias, en la creación y fortalecimiento de proyectos vinculados a su territorio.

La participación de La Cabrera.eco se centró en el diseño de la experiencia de aprendizaje, la facilitación y el acompañamiento. No como expertos que llegan a enseñar, sino como personas que escuchan primero y diseñan desde lo que hay, desde quiénes son las participantes, desde qué necesita ese territorio en ese momento.

Ese proyecto fue también una confirmación: el ecosistema emprendedor que habíamos rozado en Asturias antes de mudarnos a La Cabrera seguía siendo parte de nuestra red. La historia se conectaba hacia atrás y hacia adelante al mismo tiempo.`,
  },
  {
    id: 6,
    tag: "Evolución",
    year: "Noviembre 2025",
    title: "De autónoma a cooperativa: por qué Mycelium Coop nace de una convicción compartida",
    summary: "Tres años colaborando con Andrea Galdames. Una forma de trabajar que ya existía como práctica. El paso natural fue darle una estructura que fuera coherente con lo que acompañamos.",
    body: `Olatz y Andrea llevaban tres años colaborando en proyectos antes de que hubiera una estructura que lo sostuviera formalmente. En ese tiempo habían construido algo real: una forma compartida de entender el liderazgo, de acompañar procesos, de estar en los proyectos.

En noviembre de 2025 constituyen Mycelium Coop And., una cooperativa andaluza. La decisión fue también una declaración: si creemos en el liderazgo colaborativo y en el desarrollo desde dentro, nuestra propia forma de organizarnos tiene que demostrarlo.

La cooperativa integra tres líneas que se necesitan mutuamente: lacabrera.eco (arraigo territorial, la raíz), bemycelium (liderazgo regenerativo, la capacidad) y Mycelium Coop como forma de coherencia estructural. La Cabrera.eco pasa de ser un proyecto autónomo sostenido por Olatz a convertirse en una línea estratégica colectiva, con el talento de la cooperativa detrás.

El punto de llegada resultó ser también un nuevo punto de partida.`,
  },
];

const WebSummary = () => (
  <div style={{ padding: "3rem 2rem 4rem", maxWidth: 720, margin: "0 auto" }}>
    <div style={{
      fontFamily: "'Crimson Pro', Georgia, serif",
      color: "#2a2218",
      lineHeight: 1.75,
      fontSize: "1.1rem"
    }}>
      <div style={{
        fontSize: "0.72rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#7a6a4a",
        marginBottom: "1.2rem",
        fontFamily: "'DM Sans', sans-serif"
      }}>
        RESUMEN · PÁGINA WEB
      </div>

      <h1 style={{
        fontFamily: "'Crimson Pro', Georgia, serif",
        fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
        fontWeight: 600,
        lineHeight: 1.2,
        marginBottom: "2.2rem",
        color: "#1c1610"
      }}>
        De dónde venimos y por qué estamos aquí
      </h1>

      <p style={{ marginBottom: "1.4rem" }}>
        La historia de La Cabrera.eco comienza antes de tener nombre. Comienza en 2020, cuando Olatz y Nacho toman una decisión que no era solo de vivienda sino de vida: alejarse de la ciudad para habitar de otra manera, para recuperar un ritmo más propio, más en sintonía con lo que cada uno llevaba dentro. La pandemia aceleró lo que ya estaba buscando forma.
      </p>

      <p style={{ marginBottom: "1.4rem" }}>
        Lo que siguió fue un período de exploración real: teletrabajar desde distintos lugares, instalarse temporadas en ecosistemas más pequeños, sentir cómo cambia la mente y el cuerpo cuando el entorno cambia. Esa experiencia —parte de ella en Asturias, parte en lugares más remotos— fue confirmando que esa forma de habitar y de crear se acomodaba mejor a lo que son, a cómo trabajan mejor, a lo que necesitan para hacer buen trabajo.
      </p>

      <p style={{ marginBottom: "1.4rem" }}>
        En noviembre de 2021 llegaron a La Cabrera, un pueblo de 10 habitantes en Sigüenza, Guadalajara. La decisión se tomó con poca información y mucha confianza en el camino.
      </p>

      <p style={{ marginBottom: "1.4rem" }}>
        Instalarse en un lugar activa algo. Empiezas a verlo de otra manera: sus necesidades, sus recursos, sus personas. La primera colaboración fue casi natural —una web para el bar del pueblo— y desde ahí empezó a tomar forma una práctica: poner al servicio del territorio lo que sabíamos hacer. Comunicación, estrategia y tecnología, al servicio de proyectos que ya estaban naciendo desde dentro.
      </p>

      <p style={{ marginBottom: "1.4rem" }}>
        En 2022, el proyecto tomó nombre y presencia pública. Participamos en Presura, la feria de referencia sobre el reto demográfico, con expositor propio y relato. Organizamos la primera Noche de Emprendedores Rurales, un espacio situado en el territorio para acompañar proyectos con miradas diversas. Y las colaboraciones con otros territorios —la Escuela Rural Emprendedora en Somiedo, Trirural, Ponferrada Innova— fueron ampliando el alcance de lo que empezaba como una práctica local.
      </p>

      <p style={{ marginBottom: "1.4rem" }}>
        En 2025, un nuevo movimiento. Olatz y Andrea Galdames —con quienes llevaban ya tres años colaborando en proyectos de liderazgo y desarrollo— deciden dar el paso siguiente y crear juntas Mycelium Coop And., una cooperativa andaluza. La Cabrera.eco pasa a formar parte de su arquitectura estratégica: la línea de arraigo territorial, la raíz desde la que se construye.
      </p>

      <p style={{ marginBottom: "1.4rem" }}>
        Hoy La Cabrera.eco acompaña a territorios, organizaciones y comunidades que quieren construir desde lo que ya son. Con un Estudio Digital que traduce visión e identidad en herramientas concretas, y un Lab Territorial que desarrolla capacidades para que las personas del lugar puedan liderar sus propios procesos.
      </p>

      <p style={{
        fontStyle: "italic",
        color: "#5a4a2a",
        borderLeft: "2px solid #c8a96e",
        paddingLeft: "1.2rem",
        marginTop: "2rem"
      }}>
        El arraigo se construye en relación: entre personas, proyectos y territorios. Se sostiene en el tiempo cuando lo que emerge encuentra estructura y continuidad. Desde La Cabrera, Sigüenza.
      </p>
    </div>
  </div>
);

const BlogCard = ({ post, isOpen, onToggle }) => (
  <div
    style={{
      borderBottom: "1px solid #e2d9cc",
      padding: "1.6rem 0",
      cursor: "pointer",
    }}
    onClick={onToggle}
  >
    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
      <div style={{ flex: 1 }}>
        <div style={{
          display: "flex",
          gap: "0.8rem",
          alignItems: "center",
          marginBottom: "0.5rem",
          flexWrap: "wrap"
        }}>
          <span style={{
            fontSize: "0.65rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            background: "#f0e8d8",
            color: "#7a5c2a",
            padding: "0.2rem 0.6rem",
            borderRadius: "2px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500
          }}>
            {post.tag}
          </span>
          <span style={{
            fontSize: "0.75rem",
            color: "#a09070",
            fontFamily: "'DM Sans', sans-serif"
          }}>
            {post.year}
          </span>
        </div>
        <h3 style={{
          fontFamily: "'Crimson Pro', Georgia, serif",
          fontSize: "1.2rem",
          fontWeight: 600,
          color: "#1c1610",
          lineHeight: 1.3,
          margin: "0 0 0.4rem"
        }}>
          {post.title}
        </h3>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.88rem",
          color: "#6a5a40",
          lineHeight: 1.55,
          margin: 0
        }}>
          {post.summary}
        </p>
      </div>
      <div style={{
        fontSize: "1.2rem",
        color: "#c8a96e",
        flexShrink: 0,
        marginTop: "0.2rem",
        transition: "transform 0.2s",
        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)"
      }}>
        +
      </div>
    </div>

    {isOpen && (
      <div style={{
        marginTop: "1.4rem",
        padding: "1.4rem",
        background: "#faf6ef",
        borderRadius: "4px",
        fontFamily: "'Crimson Pro', Georgia, serif",
        fontSize: "1.05rem",
        color: "#2a2218",
        lineHeight: 1.8,
        whiteSpace: "pre-line"
      }}>
        {post.body}
      </div>
    )}
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("web");
  const [openPost, setOpenPost] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#fdfaf4",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        background: "#2a2218",
        padding: "2rem",
        textAlign: "center"
      }}>
        <div style={{
          fontSize: "0.65rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#c8a96e",
          marginBottom: "0.4rem"
        }}>
          lacabrera.eco
        </div>
        <div style={{
          fontFamily: "'Crimson Pro', serif",
          fontSize: "1.3rem",
          color: "#f5efdf",
          fontStyle: "italic"
        }}>
          Historia · Contenido para web y blog
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex",
        borderBottom: "1px solid #e2d9cc",
        background: "#fff",
        justifyContent: "center",
        gap: 0
      }}>
        {[
          { id: "web", label: "Resumen web" },
          { id: "blog", label: "Entradas de blog" },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "1rem 2rem",
              background: "none",
              border: "none",
              borderBottom: activeTab === tab.id ? "2px solid #c8a96e" : "2px solid transparent",
              color: activeTab === tab.id ? "#2a2218" : "#9a8a6a",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.06em",
              cursor: "pointer",
              fontWeight: activeTab === tab.id ? 500 : 400,
              transition: "all 0.15s"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "web" && <WebSummary />}

      {activeTab === "blog" && (
        <div style={{ padding: "2.5rem 2rem 4rem", maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#7a6a4a",
            marginBottom: "0.6rem"
          }}>
            ENTRADAS DE BLOG PROPUESTAS
          </div>
          <p style={{
            fontFamily: "'Crimson Pro', serif",
            fontSize: "1.1rem",
            color: "#5a4a2a",
            marginBottom: "2.5rem",
            lineHeight: 1.6,
            fontStyle: "italic"
          }}>
            Seis momentos de la historia que merecen su propio espacio. Cada entrada amplía un capítulo del relato —con el tono y la profundidad que el resumen no puede dar.
          </p>

          {blogPosts.map(post => (
            <BlogCard
              key={post.id}
              post={post}
              isOpen={openPost === post.id}
              onToggle={() => setOpenPost(openPost === post.id ? null : post.id)}
            />
          ))}

          <div style={{
            marginTop: "3rem",
            padding: "1.4rem",
            background: "#f0e8d8",
            borderRadius: "4px",
            fontSize: "0.85rem",
            color: "#6a5040",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.6
          }}>
            <strong style={{ display: "block", marginBottom: "0.4rem", color: "#3a2a18" }}>Nota de uso</strong>
            Estas entradas están pensadas como piezas independientes que construyen el relato acumulativo. Pueden publicarse en orden cronológico o temático, y cada una funciona como punto de entrada para alguien que llega al proyecto por primera vez —o para quien ya lo conoce y quiere entender su profundidad.
          </div>
        </div>
      )}
    </div>
  );
}

