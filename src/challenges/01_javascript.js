import { wrapSnippit } from '../utils/helpers';

/* HTML markup for beginning and end of code snippets */

/***********************************
* Challenge Seed Templates
***********************************

{
  title: ``,
  subtitle: ``,
  choices: [
    ``,
    ``,
    ``,
    ``
  ],
  solution: ``,
  explanation: ``
},

*/

/***********************************
* Export Challenge Array
*********************************** */

export default {
  title: `Educación Vial`,
  category: `Educación Vial`,
  challenges: [
    {
      title: `Para rendir la prueba practica usted debe cumplir obligatoriamente los elemntos de seguridad`,
      subtitle: `elementos de seguridad`,
      choices: [
        `Si`,
        `No`
      ],
      solution: `0`
    },
    {
      title: `Con la licencia de conducir puedes conducir en todo el pais`,
      subtitle: `Validez de la licencia`,
      choices: [
        `Verdadero`,
        `Falso`
      ],
      solution: `0`
    },
    {
      title: `La prueba de alcoholemia sera realizada al:`,
      subtitle: `alcoholemia`,
      choices: [
        `Conductor`,
        `Relevo`,
        `Ambos`
      ],
      solution: `2`
    },
    {
      title: `Cuando debe facilitar paso a las ambulancias`,
      subtitle: `paso a ambulancias`,
      choices: [
        `dentro de la zona urbana`,
        `porque son vehículos prioritarios`,
        `cuando circulan en servicio urgente y con señales reglamentarias`
      ],
      solution: `2`
    },
    {
      title: `Cuando deja su vehiculo mas de 5 mins eun un lugar autorizado, es:`,
      subtitle: `dejar vehiculo`,
      choices: [
        `Estacionamiento`,
        `Detención`,
        `Parada`
      ],
      solution: `0`
    },
    {
      title: `En un cruce de vía ferrea. ¿A cuántos metros del riel mas cercano debe detener un vehículo antes de ejecutar el cruce?`,
      subtitle: `via ferrea`,
      choices: [
        `10 mts`,
        `15mts`,
        `20mts`
      ],
      solution: `2`
    },
    {
      title: `en una rotonda tiene prioridad de paso el vehiculo que:`,
      subtitle: `rotonda`,
      choices: [
        `circula por ella`,
        `circula fuera de ella`,
        `intenta ingresar a rotonda`
      ],
      solution: `0`
    },
    {
      title: `Las señales de tránsito actúan como guía en las vias públicas, si estan deterioradas el conductor debe respetar las mismas?`,
      subtitle: `señales deterioradas`,
      choices: [
        `Si`,
        `No`
      ],
      solution: `0`
    },
    {
      title: `En un cruce de calle sin semáforo ni agente de parada, ud, ve cruzar un peatón, que debe hacer?`,
      subtitle: `sin semaforo cruce de peaton`,
      choices: [
        `Parar y cederle el paso al peatón`,
        `Disminuir la marcha del vehículo`,
        `Seguir y atravesar el cruce porque tiene prioridad`
      ],
      solution: `0`
    },
    {
      title: `Que objeto tiene las señales en una vía`,
      subtitle: `objetivo señales`,
      choices: [
        `Informar, prevenir y reglamentar la circulación`,
        `Mejorar los caminos`,
        `Ayudar a los peatones`
      ],
      solution: `0`
    },
    {
      title: `Viajar sin equipo de herramientas, señales de emergencia e implementos de auxilio. Que tipo de infracción es?`,
      subtitle: `sin equipo de herramientas`,
      choices: [
        `Segundo grado`,
        `Primer grado`,
        `Tercer grado`
      ],
      solution: `0`
    },
    {
      title: `Los niños, ancianos y las personas con capacidades diferentes, en el cruce de vías tienen:`,
      subtitle: `personas especiales cruzando`,
      choices: [
        `Privilegio`,
        `Preferencia`,
        `Ninguna de las anteriores`
      ],
      solution: `0`
    },
    {
      title: `En una carretera asfaltada el límite de velocidad según el codigo de transito es:`,
      subtitle: `limite de velocidad carretera asfaltada`,
      choices: [
        `80Km/h`,
        `60Km/h`,
        `100Km/h`
      ],
      solution: `0`
    },
    {
      title: `Manejo defensivo significa, tener buenos hábitos de conducción, ser prudente en extremo, evitar todo exceso de confianza en si mismo`,
      subtitle: `manejo defensivo`,
      choices: [
        `Verdadero`,
        `Falso`
      ],
      solution: `0`
    },
    {
      title: `Que se entiende por isleta`,
      subtitle: `isleta`,
      choices: [
        `Marcas canalizadoras y orientadoras de tránsito, que no se pueden trapasar o circular sobre ellas con vehículo`,
        `Marcas en la calzada que indican lugares donde está permitido detenerse con el vehículo`,
        `Marcas en la calzada que indican lugares donde está permitido estacionar y/o detenerse`
      ],
      solution: `0`
    },
    {
      title: `Que seguro debe tener obligatoriamente un vehículo motorizado`,
      subtitle: `seguro obligatorio`,
      choices: [
        `Soat`,
        `Fiso`,
        `Ninguno`
      ],
      solution: `0`
    },
    {
      title: `El límite máximo de velocidad en zona escolar es:`,
      subtitle: `limite zona escolar`,
      choices: [
        `10Km/h`,
        `20Km/h`,
        `30Km/h`
      ],
      solution: `0`
    },
    {
      title: `Los vehículos pueden adelantar a otro vehículo por el lado:`,
      subtitle: `adelantar por lado`,
      choices: [
        `Izquierdo con precaución`,
        `Derecho con precaución`,
        `Por cualquiera de los lados pero con precaución`
      ],
      solution: `0`
    },
    {
      title: `Circulando por carretera y en caso de desperfecto mecánico, los triangulos de seguridad deben ser colocados a:`,
      subtitle: `triangulos de seguridad`,
      choices: [
        `30 mts en la parte delantera y 100 mts en la parte trasera`,
        `70 mts en la parte delantera y 80 mts en la parte trasera`,
        `90 mts en la parte delantera y 90 mts en la parte trasera`
      ],
      solution: `0`
    },
    {
      title: `El objeto del D.S No 420 es "Disminuir el riesgo de accidentes de tránsito en carreteras y caminos, en el sector del transporte público terrestre"`,
      subtitle: `DS 420`,
      choices: [
        `verdadero`,
        `falso`
      ],
      solution: `0`
    },
    {
      title: `Los peatones tienen la obligación de circular por la acera y no por la calzada. En caso de accidente el único responsable es el conductor del vehículo? Si esto ocurre en la acera, franja de seguridad, boca de calle?`,
      subtitle: `responsable de accidente`,
      choices: [
        `Si`,
        `No`
      ],
      solution: `0`
    },
    {
      title: `Esta permitido retroceder en una intersección`,
      subtitle: `retroceder en intersección`,
      choices: [
        `No`,
        `Si`
      ],
      solution: `0`
    },
    {
      title: `Cual de estas reglas corresponde a las normas generales de circulacion?`,
      subtitle: `normas generales de circulación`,
      choices: [
        `Circular por el lado derecho de la vía`,
        `Realizar inspección técnica a su vehículo`,
        `Mantener limpio y aseado su motorizado`
      ],
      solution: `0`
    },
    {
      title: `La señal que advierte la existencia y la naturales de un peligro en la via, es:`,
      subtitle: `señales de peligro`,
      choices: [
        `Preventiva`,
        `Reguladora`,
        `Informativa`
      ],
      solution: `0`
    },
    {
      title: `Las señales informativas tienen forma Rectangular`,
      subtitle: `señales informativas`,
      choices: [
        `Verdadero`,
        `Falso`
      ],
      solution: `0`
    },
    {
      title: `Cuantas clases de señalización existen`,
      subtitle: `clases de señalizacion`,
      choices: [
        `Cuatro`,
        `Dos`,
        `Tres`
      ],
      solution: `0`
    },
    {
      title: `Las líneas centrales que permiten adelantamiento son:`,
      subtitle: `lineas centrales`,
      choices: [
        `Una línea blanca discontinua`,
        `Una línea blanca continua`,
        `Una línea amarilla continua`
      ],
      solution: `0`
    },
    {
      title: `Con el fin de avisar al otro vehículo los cambios de carril, mientras conduce el vehículo. ¿qué luces debe utilizar?`,
      subtitle: `avisar cambio de carril`,
      choices: [
        `Luces direccionales`,
        `Luz alta`,
        `Luz baja`
      ],
      solution: `0`
    },
    {
      title: `Las señales verticales de prevención transmiten:`,
      subtitle: `señales verticales prevención`,
      choices: [
        `Advertencias sobre las caracteristicas de la via`,
        `Ordenes precisas`,
        `Prohibiciones`
      ],
      solution: `0`
    },
    {
      title: `Las señales constituidas por una placa, sostenidas por uno o mas pilares en las que se inscriben leyendas o simbolos destinados a regular la circulacion son señales horizontales`,
      subtitle: `señales horizontales`,
      choices: [
        `No`,
        `Si`
      ],
      solution: `0`
    },
    {
      title: `Se puede decir vehículo a todo medio de transporte?`,
      subtitle: `que es vehiculo`,
      choices: [
        `Si`,
        `No`
      ],
      solution: `0`
    },
    {
      title: `Conductor de acuerdo al código de tránsito es "la persona que conduce un vehículo motorizado y cuenta con una licencia de conducir"`,
      subtitle: `definicion de conductor`,
      choices: [
        `Verdadero`,
        `Falso`
      ],
      solution: `0`
    },
    {
      title: `El SOAT es un seguro obligatorio que cubre accidentes de todo tipo de vehículos motorizados?`,
      subtitle: `Que es el soat`,
      choices: [
        `Si`,
        `No`
      ],
      solution: `0`
    },
    {
      title: `Vehículo es todo medio de transporte de: personas, semovientes o cosas?`,
      subtitle: `que es vehiculo`,
      choices: [
        `Si`,
        `No`
      ],
      solution: `0`
    },
    {
      title: `Que factores atentan contra la seguridad vial`,
      subtitle: `factores seguridad vial`,
      choices: [
        `Exceso de velocidad, consumo de alcohol, imprudencia del conductor`,
        `Conducir un vehículo motorizado sin portar licencia`,
        `Ninguno de los dos`
      ],
      solution: `0`
    },
    {
      title: `Se podrá adelantar con su vehículo en:`,
      subtitle: `adelantar`,
      choices: [
        `Donde hay espacio y visibilidad`,
        `Bocacalles`,
        `Cruce de vía`
      ],
      solution: `0`
    },
    {
      title: `En carreteras y caminos en horario nocturno, los vehículos deberan circular utilizando luces:`,
      subtitle: `luces horario nocturno`,
      choices: [
        `De acuerdo a la necesidad`,
        `Altas`,
        `Bajas`
      ],
      solution: `0`
    },
    {
      title: `Si el conductor esta tomando medicamentos y por ello siente cansancio y sueño. Que debe hacer?`,
      subtitle: `que hacer cuando hay cansancio sueño`,
      choices: [
        `Abstenerse de conducir`,
        `Conducir normalmente`,
        `Conducir con precaución`
      ],
      solution: `0`
    },
    {
      title: `En zona urbana, el límite de velocidad maxima es:`,
      subtitle: `limite velociad zona urbana`,
      choices: [
        `40Km/h`,
        `60Km/h`,
        `80Km/h`
      ],
      solution: `0`
    },
    {
      title: `Quien tiene preferencia de paso?`,
      subtitle: `preferencia de paso`,
      choices: [
        `Los vehículos que circulan por una avenida`,
        `Los vehículos que circulan por una calle`,
        `Ninguna de las anteriores`
      ],
      solution: `0`
    },
    {
      title: `La acción de dejar un vehículo en zona autorizada, significa`,
      subtitle: `dejar vehiculo en zona autorizada`,
      choices: [
        `Estacionar`,
        `Detención`,
        `Parada`
      ],
      solution: `0`
    },
    {
      title: `Una señal en forma de rombo es una señal:`,
      subtitle: `señal forma rombo`,
      choices: [
        `Preventiva`,
        `Reguladora`,
        `Informativa`
      ],
      solution: `0`
    },
    {
      title: `La línea blanca continua`,
      subtitle: `linea blanca continua`,
      choices: [
        `Prohibe adelantamiento`,
        `Permite adelantamiento`,
        `Avisa estacionamiento`
      ],
      solution: `0`
    },
    {
      title: `La policia de transito determinara aumentar o disminuir las velociades maximas y minimas señaladas en los Art 113-114 previo estudio de las mismas`,
      subtitle: `aumentar disminuir limites de velocidad`,
      choices: [
        `Verdadero`,
        `Falso`
      ],
      solution: `0`
    },
    {
      title: `El conductor de un vehiculo que es alcanzado por otro que hizo conocer su intencion de adelantamiento que debe hacer`,
      subtitle: `aviso de adelantamiento`,
      choices: [
        `Mantener su posición hasta que el otro vehículo haya finalizado la maniobra`,
        `Detenerse para facilitar el adelantamiento`,
        `Aumentar velocidad`
      ],
      solution: `0`
    },
    {
      title: `En carretera de tierra ripeada el limite de velocidad es:`,
      subtitle: `carretera de tierra`,
      choices: [
        `70Km/h`,
        `60Km/h`,
        `50Km/h`
      ],
      solution: `0`
    },
    {
      title: `Solo el SEGIP puede otorgar licencia`,
      subtitle: `segip otorga licencia`,
      choices: [
        `Verdadero`,
        `Falso`
      ],
      solution: `0`
    },
    {
      title: `Un conductor de la categoria "P" esta autorizado para conducir vehiculos tipo`,
      subtitle: `categoria P`,
      choices: [
        `Ninguno de los anteriores`,
        `Taxi`,
        `Camión`
      ],
      solution: `0`
    },
    {
      title: `Las señales reguladoras tienen forma rectangular`,
      subtitle: `señales reguladoras`,
      choices: [
        `Falso`,
        `Verdadero`
      ],
      solution: `0`
    },
    {
      title: `Los accidentes de tránsito pueden ocurrir por los siguientes factores`,
      subtitle: `causas accidentes de transito`,
      choices: [
        `Factor humano, factor mecánico, factor climático`,
        `Factor social`,
        `Nimguno`
      ],
      solution: `0`
    },
    {
      title: `Si en algún cruce o intersección de calles nos encontramos con una autoridad de tránsito, debemos obedecerle aunque las otras señales o reglas indique lo contrario?`,
      subtitle: `autoridad de transito vs otras señales`,
      choices: [
        `Verdadero`,
        `Falso`
      ],
      solution: `0`
    },
    {
      title: `Está obligado a dar paso a las ambulancias en todas las ocaciones`,
      subtitle: `paso a ambulancias`,
      choices: [
        `No`,
        `Si`
      ],
      solution: `0`
    },
    {
      title: `Detener el vehiculo momentaneamente con el motor encendido y con el conductor al volante significa:`,
      subtitle: `Detener vehiculo`,
      choices: [
        `Detención`,
        `Parada`,
        `Estacionamiento`
      ],
      solution: `0`
    },
    {
      title: `Las señales reguladoras tienen forma de:`,
      subtitle: `señales reguladoras`,
      choices: [
        `circulo`,
        `rombo`,
        `rectangulo`
      ],
      solution: `0`
    },
    {
      title: `Cual es la señal que tiene por finalidad advertir la existencia y la naturaleza de un peligro en la via?`,
      subtitle: `señal advertir peligro`,
      choices: [
        `Preventiva`,
        `Reguladora`,
        `Informativa`
      ],
      solution: `0`
    },
    {
      title: `La línea transversal paso de cebra sirve para:`,
      subtitle: `linea transversal`,
      choices: [
        `Paso de peatones`,
        `Estacionamiento`,
        `Paso de conductores`
      ],
      solution: `0`
    },
    {
      title: `En avenidas el limite de velocidad es:`,
      subtitle: `limite velocidad`,
      choices: [
        `40Km/h`,
        `80Km/h`,
        `60Km/h`
      ],
      solution: `0`
    },
    {
      title: `Las señales informativas tienen forma`,
      subtitle: `señales informativas`,
      choices: [
        `Rectangular`,
        `Romboidal`,
        `Circular`
      ],
      solution: `0`
    },
    {
      title: `Restrictivas, preventivas e informativas son señales verticales`,
      subtitle: `señales verticales`,
      choices: [
        `Si`,
        `No`
      ],
      solution: `0`
    },
    {
      title: `Está permitido rebasar cuando existe una línea amarilla discontinua entre dos carriles de tráfico`,
      subtitle: `linea amarilla discontinua`,
      choices: [
        `Si`,
        `No`
      ],
      solution: `0`
    },
    {
      title: `Los vehiculos, dentro del radio urbano y rural y de forma general en las vias publicas circularan obligatoriamente por:`,
      subtitle: `circular via publica`,
      choices: [
        `Lado derecho`,
        `Lado izquierdo`,
        `Cualquier lado`
      ],
      solution: `0`
    },
    {
      title: `El adelantamiento de un vehiculo a otro, estacionado o en movimiento se hará por el lado izquierdo tomando en cuenta las siguientes precauciones:`,
      subtitle: `precauciones adelantamiento`,
      choices: [
        `Verificar si NO  se aproxima otro vehiculo por detras o en sentido contrario, observara el espacio y visibilidad y anunciara la maniobra con el brazo izquierdo o mediente el giñador de luz izquierda`,
        `Verificar si se aproxima otro vehiculo por detras o en sentido contrario, observara el espacio y visibilidad y anunciara la maniobra con el brazo izquierdo o mediente el giñador de luz izquierda`,
        `Ninguna de las anteriores`
      ],
      solution: `0`
    },
    {
      title: `Esta prohibido realizar el adelantamiento vehicular`,
      subtitle: `prohibido adelantar`,
      choices: [
        `En las curvas, bocacalles, cruce de vias`,
        `Por el lado izquierdo`,
        `Ninguna de las alternativas es correcta`
      ],
      solution: `0`
    },
    {
      title: `Cuando un vehiculo que esta en marcha se detiene para dejar o recoger pasajeros los vehículos que viene atrás deberán`,
      subtitle: `detenerse por pasajeros`,
      choices: [
        `Tomar las precauciones necesarias para adelantar`,
        `Tomar la delantera por el lado derecho`,
        `Tocar bocina`
      ],
      solution: `0`
    },
    {
      title: `Cuando 2 o mas vehiculos se encuentras circulando en direcciones opuestas, cada conductor desviara su vehiculo al:`,
      subtitle: `vehiculos en direccion opuesta`,
      choices: [
        `Lado derecho`,
        `Lado izquierdo`,
        `Ningun lado`
      ],
      solution: `0`
    },
    {
      title: `Para efectuar el cruce con otros vehículos en la noche es obligatorio utilizar:`,
      subtitle: `cruce en la noche`,
      choices: [
        `Luz baja`,
        `Luz alta para encandilar`,
        `Guiñadores`
      ],
      solution: `0`
    },
    {
      title: `Para dejar o recoger pasajeros el conductor debe tomar en cuenta:`,
      subtitle: `recoger pasajeros`,
      choices: [
        `Que su vehiculo no esté en movimiento, que se un lugar autorizado y que no sea en medio de la calzada`,
        `Puede dejar pasajeros en la calzada`,
        `Puede dejar y recoger pasajeros donde el decida`
      ],
      solution: `0`
    },
    {
      title: `el conductor para girar a la derecha o a la izquierda deberá utilizar:`,
      subtitle: `girar`,
      choices: [
        `Luces direccionales`,
        `Luz alta`,
        `Cambio de luces`,
        `Ninguna`
      ],
      solution: `0`
    }]
};
