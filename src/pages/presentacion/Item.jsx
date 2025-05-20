import HTMLTEXT from '../../hooks/useHTML'

const Item = ({ title, text }) => {
  return (
    <article className='flex flex-col gap-y-2 p-5 bg-black bg-opacity-10 rounded-xl shadow-md'>
      <h2 className='font-bold text-primary'>{title}</h2>
      <div>
        <HTMLTEXT text={text} />
      </div>
    </article>
  )
}

export default Item
