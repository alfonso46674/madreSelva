import React from 'react';
import './contact.scss';
import { Container,Row,Col } from 'react-bootstrap';

const Contact = () => {
  return(
    <Container className='ContactContainer'>
      <div>
        <h1>¿Quiénes somos?</h1>
        <p>Somos una plataforma de divulgación y creación de contenidos académicos en materia de arte y cultura. Nuestra labor es educativa y está dirigida a todo aquel interesado en formarse en estos ámbitos por medio de trabajos académicos en línea; sin embargo, esa no es nuestra única intención. Buscamos, también, facilitar la publicación de proyectos de esta índole de autores emergentes del área, cuyo objetivo sea compartir sus conocimientos y enriquecerse de los otros aquí presentados.</p>
        &nbsp;

        <h1>Acerca de nuestro nombre</h1>
        <p>El nombre de “Madreselva” se basa en las características y naturaleza misma de esta planta. Es un tipo de enredadera cuyo follaje es persistente y que en primavera se llena de flores blanquecinas con un perfume muy particular; al comienzo tiene un crecimiento lento, pero una vez que echa raíces fuertes y encuentra su ritmo acelera su esparcimiento exponencialmente. El encuentro y transversalización de contenidos y conocimientos vuelve a la plataforma algo similar a una enredadera, que eventualmente florecerá en muchos proyectos más que abonen al ámbito de la educación artística.</p>
        <p>El “apellido” de “Ecosistema de educación artística” proviene de la definición de ecosistema, que es el conjunto de especies de un área determinada que interactúan entre ellas y con su ambiente abiótico; mediante procesos como la depredación, el parasitismo, la competencia y la simbiosis, y con su ambiente al desintegrarse y volver a ser parte del ciclo de energía y de nutrientes. Las especies del ecosistema, incluyendo bacterias, hongos, plantas y animales dependen unas de otras. Las relaciones entre las especies y su medio, resultan en el flujo de materia y energía del ecosistema. Esta convivencia entre seres vivos que les permite crecer y cambiar según las relaciones que suceden en el espacio determinado es algo se espera suceda en la plataforma en aras de la mejora y enriquecimiento del medio de las artes y la cultura</p>
        &nbsp;

        <h1>Misión</h1>
        <p>“Madreselva, ecosistema de educación artística” es una empresa que busca desarrollar una plataforma digital de divulgación académica en temas de arte y cultura, a través de la cual se dará oportunidad de publicación a autores emergentes, así como brindar accesibilidad de este tipo de contenidos a quienes estén interesados en conocer al respecto. Proviene de la problemática de la falta de espacios especializados en estos temas por y para agentes del medio artístico y cultural que les interese desarrollar o informarse en materia trabajo académico del ámbito.</p>
        &nbsp;

        <h1>Visión</h1>
        <p>Lo que se espera con esta empresa cultural es formar una red de apoyo entre agentes del medio artístico de la Zona Metropolitana de Guadalajara y de México, con la posibilidad de eventualmente ser una red internacional digital en la que se comparta y consuma el trabajo académico de estos individuos. La facilidad y la accesibilidad de uso de esta plataforma es una de sus características particulares, además de la incesante cantidad de posibilidades de ramificación que presenta: temas, actividades y servicios de crítica, de educación, de gestión, curaduría, historia del arte, entre muchas otras.</p>
        &nbsp;

        <h1>Valores</h1>
        <Row>
          <Col  className=''>
            <h2><b>Calidad</b></h2>
            <p>Los trabajos académicos que se pueden encontrar en “Madreselva, ecosistema de educación artística” son revisados previamente por el comité editorial de la empresa para asegurar su pertinencia para la plataforma así como la calidad de los mismos. </p>
          </Col>
          <Col className=''>
            <h2><b>Pasión</b></h2>
            <p>Nos apasiona la búsqueda del conocimiento y de nuevas propuestas académicas que abonen al campo de las artes y la cultura, es por ello que nos parece necesario que existan más espacios de divulgación para ello que brinden plataforma a autores emergentes y profesionales del medio que quieran compartir sus investigaciones con todo el mundo.</p>
          </Col>
        </Row>

        <Row>
          <Col className=''> 
            <h2><b>Impacto social</b></h2>
            <p>El impacto social que puede tener los trabajos académicos en materia de arte y cultura es amplio, y es una de las bases de la existencia de “Madreselva, ecosistema de educación artística”. Creemos fielmente que el enriquecimiento del área a partir de estas plataformas digitales permite que exista mayor facilidad y accesibilidad en la formación de individuos que propongan ideas nuevas en el campo y lo mejoren constantemente.</p>
        </Col>
          <Col className=''>
            <h2><b>Acompañamiento</b></h2>
            <p>Creemos que tener un punto de encuentro para que los profesionales del ámbito de las artes y la cultura compartan sus trabajos, servicios y productos es esencial para crear mayor comunidad y vínculos entre dichos individuos. Porque en soledad se puede hacer mucho, pero en colectividad los límites son mucho menores y mucho más fáciles de sortear.</p>
        </Col>
        </Row>
        
        
        <Row>
          <Col className=''></Col>
          <Col xs={7} className=''>
            <h2><b>Tecnología y academia</b></h2>
            <p>Los avances tecnológicos y el nuevo mundo digital en la actualidad permiten que la investigación, publicación y consumo de trabajos académicos y educativos de cualquier área se optimicen y lleguen a muchas más personas de las que llegaría normalmente. Queremos aprovechar este medio para optimizar el alcance de la comunidad digital.</p>
          </Col>
          <Col className=''></Col>
        </Row>
        
        

        &nbsp;
        <h1>Origen de la plataforma</h1>
        <p>Este proyecto surge de la problemática encontrada en el medio de la publicación de trabajos académicos, de la falta de espacios digitales que den albergue a proyectos de ésta índole (académicos) especializados en temas de arte y de cultura. El desarrollo propio de proyectos de investigación referentes a educación artística dejó en entrevisto esta escasez, o en el caso de la existencia de plataformas de divulgación, los requisitos presentados en ellas para poder publicar eran demasiados además de cercanos a imposibles de cumplir para autores emergentes del medio.</p>
        <p>Publicar este tipo de trabajos en redes sociales no es la mejor opción, ni para los autores ni para aquellos que quieran consultar dichos trabajos. “Madreselva, ecosistema de educación artística” nace a partir de todo esto, se visualiza y se asienta como un espacio de encuentro para todos aquellos que quieran compartir sus trabajos académicos en distintos formatos (artículos, investigaciones, ensayos, manuales, materiales audiovisuales, entre otros), así como para todo aquel que tenga curiosidad por aprender y leer de ellos. Todo especializado a temas de arte y cultura, con una intención final educativa.</p>
      </div>
    </Container>
  )
} 

export default Contact