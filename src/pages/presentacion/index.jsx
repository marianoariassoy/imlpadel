import { Helmet } from 'react-helmet'
import { WhatsApp } from '../../components/icons'
import Item from './Item'
import Counter from './Counter'

const Presentacion = () => {
  const data = [
    {
      title: '🤔 ¿Qué necesito para realizar la inscripción?',
      text: `Para inscribirte necesitás leer la información completa de cómo se lleva adelante el torneo y armar tu equipo con un mínimo de 6 participantes en la lista de buena fe y un máximo de 14 jugadores. Tener o alquilar 2 canchas de Padel de la misma superficie para poder hacer de local.`
    },
    {
      title: '📅 Fechas',
      text: `Inicio de torneo: <strong>30 de Junio</strong><br />
Cierre de Inscripción: <strong>16 de Junio</strong><br />
Cierre de listas de buena fe: <strong>23 de Junio</strong>`
    },
    {
      title: '🏆 ¿Cómo es el formato de juego y del torneo?',
      text: `En todas las categorias se jugaran dos partidos (cada partido ganado sumara 1 punto).
      Todos los partidos se disputarán al mejor de 3 sets completos con punto de oro. 
      Todos los resultados y el reglamento general podrán ser vistos en este sitio web.
      `
    },
    {
      title: '🚀 ¿En qué categorías puedo inscribirme?',
      text: `<strong>Damas:</strong> 7ma/8va. <br/> 
      <strong>Cabelleros:</strong> 7ma/8va, 5ta/6ta.  
      `
    },
    {
      title: '🔞 ¿Hay restricciones por edad?',
      text: `Todas las categorías son libres de edad.`
    },
    {
      title: '🌍 ¿Dónde se juega?',
      text: `Cada equipo <strong >representa a un club</strong> que jugará de local reservando o alquilando cancha según corresponda.<br/>
      Zonas de juego: Zona Norte, Zona Oeste de Buenos Aires.`
    },

    {
      title: '🕛 ¿Qué día y horario se juega por categoría?',
      text: `<strong>Los dias domingos de 9hs a 17hs.</strong> <br/>
      Cada equipo podrá elegir el horario en condición de local. En caso de que una institución presente más de un equipo, la organización lo tendrá presente a la hora de las programaciones para no superponer horarios.
      `
    },
    {
      title: '🎉 ¿Que premios hay?',
      text: `Los equipos campeones obtendrán la copa del torneo IML Padel Apertura 2024, medallas, regalos, descuentos en ordenes de compra y un asado para el equipo, los equipos subcampeones obtendrán medallas,  regalos y descuentos en ordenes de compra.
      `
    },
    {
      title: '🎾 Pelotas',
      text: `<strong>El equipo visitante</strong> será el encargado de proveer las pelotas para el encuentro, deberan ser pelotas Yuka en tubo x2, que la liga se encargara de proveer.`
    },
    {
      title: '💵 ¿Cuál es el valor y como abonar la inscripción de cada jugador?',
      text: `<strong>Durante Mayo $10.000- </strong><br/>
      <strong>Durante Junio $12.000.- </strong><br/> <br/>
      <strong>Datos para transferencia bancaria:</strong> <br/>
      CVU: 0000168300000001419333<br/>
      Alias: imltenis2023
      <br/> 
      Enviar comprobante al área administrativa +54 9 11 3017-1475 <br/><br/>
      <strong>Para pagos en efectivo: </strong><br/>
      En TyP Deportes, Shopping Terrazas de Mayo, Av. Pres. Arturo Umberto Illia 3770, Los Polvorines.
      `
    },
    {
      title: '💵 ¿Cuál es el valor a abonar cada partido?',
      text: `El equipo local deberá afrontar los gastos del alquiler de las canchas.`
    },
    {
      title: '😀 ¿Cómo llevo adelante la inscripción?',
      text: `Cada equipo deberá tener un capitán responsable, quien será el encargado de realizar la inscripción y de enviar la lista de buena fe de su equipo hasta la fecha indicada. `
    }
  ]
  return (
    <section className='fade-in flex flex-col gap-y-6 text-sm max-w-xl m-auto'>
      <div className='text-center '>
        <h1 className='font-bold text-primary text-xl'>Bienvenido al Clausura 2024</h1>
        <span className='text-2xl'>🏆</span>
      </div>

      <Counter />

      <img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXZ3bnA0M3dxc3hwN2J6NW15d2p1bWk0c2hyMWQ5bG4wNWI1OXR4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/esTVyN05zikLotrcMj/giphy.gif' />

      <article>
        <p className='border-t border-b py-6 border-primary'>
          Formá parte de una de las <strong>ligas de equipos amateur</strong> más importantes de la zona.
          <br />
          Actualmente contamos con más de 90 equipos participando en <strong>IML Tenis.</strong> <br />
          Te invitamos a participar junto a tu grupo de amigos, jugando en tus canchas y también conociendo otras
          canchas y jugadores.
          <br />
          Vas a poder jugar <strong>cada semana</strong>, ver resultados y rankings siempre actualizados en nuestro
          sistema web.
          <br />
          Vas a poder particiar de diferentes certamenes y premios en nuestras redes sociales, como{' '}
          <strong> el jugador de la fecha</strong>,<strong> la batalla de los clubes</strong>, la elección{' '}
          <strong>del gran capitan</strong>. Además de participár de las finales junto a todas las categorías en un
          evento de cierre con entrega de premios y sorteos.
        </p>
      </article>

      {data.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          text={item.text}
        />
      ))}

      <div className='font-medium'>
        <a
          href='https://wa.me/5491126489928'
          className='hover:underline flex items-center gap-x-2 flex-wrap'
          target='_blank'
        >
          <span>Contactate por</span>
          <span className='flex items-center gap-x-1'>
            <WhatsApp /> WhatsApp haciendo click acá
          </span>
        </a>
      </div>
      <div className='mb-3 font-medium'>¡Nos vemos en la cancha! 😉</div>

      <img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG83ajN5dGtrMTN2eW0yd3Jrd2FoYWM3dmtpMGd3cWJncmt5emVhcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kMI4h7pHx1XQhPo7GU/giphy.gif' />

      <Helmet>
        <title>IML Padel Apertura 2024</title>
      </Helmet>
    </section>
  )
}

export default Presentacion
