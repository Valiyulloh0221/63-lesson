import './Header.scss';

function Header() {
  return (
    <header>
      <div className='container'>
        <nav className='nav'>
          <a href="#"><img src="/images/logo.png" alt="" /></a>
          <div className='nav-items'>
            <button className='nav-item'>Продукция</button>
            <button className='nav-item btn-logo'>Сертификаты</button>
            <button className='nav-item btn-logo'>Наша команда</button>
            <button className='nav-item btn-logo'>О нас</button>
            <button className='nav-item btn-logo'>Новости</button>
            <button className='nav-item btn-logo'>Вакансии</button>
            <button className='nav-item btn-logo'>Контакты</button>
            <button><img src="/images/dark.svg" alt="" /></button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;