import './Quality.scss';

function Quality() {
  return (
    <div className='quality'>
      <h2>Качество продукции подтверждают <span>сертификаты</span></h2>
      <div className='quality-images'>
        <div><img src="/images/sr-1.png" alt="" /></div>
        <div><img src="/images/sr-2.png" alt="" /></div>
        <div><img src="/images/sr-3.png" alt="" /></div>
        <div><img src="/images/sr-4.png" alt="" /></div>
        <div><img src="/images/sr-5.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Quality