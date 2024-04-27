import { WhatsApp } from '../components/icons'

const Footer = () => {
  const year = new Date().getFullYear()
  const logos = [
    {
      alt: 'Logo de Head',
      url: 'https://www.instagram.com/headshoesargentina/',
      image: '/assets/logos/head.svg'
    },

    {
      alt: 'Logo de Kirschbaum',
      url: 'https://www.kirschbaumarg.com/',
      image: '/assets/logos/kirschbaum.svg'
    },
    {
      alt: 'Logo de Addnice',
      url: 'https://www.addnicetienda.com.ar/',
      image: '/assets/logos/addnice.svg'
    },
    {
      alt: 'Logo de QSports',
      url: 'https://www.qsports.shop/',
      image: '/assets/logos/qsports.svg'
    },
    {
      alt: 'Logo de Yuka',
      url: 'https://www.instagram.com/yuka_ant/',
      image: '/assets/logos/yuka.svg'
    },
    {
      alt: 'Logo de Urban',
      url: 'https://www.instagram.com/urbankicks.ar/',
      image: '/assets/logos/urban.svg'
    },

    {
      alt: 'Logo de TYP',
      url: 'https://www.instagram.com/typdeportes/',
      image: '/assets/logos/typ.svg'
    },
    {
      alt: 'Logo de Tienda Vinica',
      url: 'https://www.instagram.com/tiendavinica/',
      image: '/assets/logos/vinica.svg'
    }
  ]

  return (
    <div className='p-6 opacity-60 mt-6'>
      <div className='text-sm text-center flex flex-col gap-y-1'>
        <span className='font-bold'>Liga de clubes IML Padel</span>
        <span>Buenos Aires, Argentina. &copy; {year}</span>
        <div className='flex items-center justify-center gap-x-2 flex-wrap'>
          <span className='flex items-center gap-x-2'>
            Consultas
            <div className='flex items-center gap-x-1'>
              <WhatsApp />
              <a
                href='https://wa.me/5491126489928'
                className='hover:text-primary'
              >
                11 2648 9928
              </a>
            </div>
          </span>
        </div>
        <span></span>
      </div>
    </div>
  )
}

export default Footer
