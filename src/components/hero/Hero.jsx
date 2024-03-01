import './Hero.scss';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-content-texts">
          <h4>LEANGROUP - тубы и этикетки</h4>
          <h1>Ламинатные тубы</h1>
          <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
          <button>Каталог</button>
        </div>
        <div className="hero-content-social">
          <a href="https://vk.com/"><img src="/images/vk.png" alt="" /></a>
          <a href="https://www.facebook.com/"><img src="/images/fb.png" alt="" /></a>
          <a href="https://www.linkedin.com/"><img src="/images/linkedin.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Hero