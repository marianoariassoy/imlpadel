import { WhatsApp } from '../components/icons'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className='p-6'>
      <div className='text-sm text-center flex flex-col'>
        <span className='font-bold'>Interclubes DePádel</span>
        <span>Buenos Aires, Argentina. &copy; {year}</span>
        <div className='flex items-center justify-center gap-x-2 flex-wrap'>
          <span className='flex items-center gap-x-2'>
            Consultas
            <div className='flex items-center gap-x-1'>
              <WhatsApp />
              <a
                href='https://wa.me/5491169604530'
                className='hover:text-primary'
              >
                11 6960 4530
              </a>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
