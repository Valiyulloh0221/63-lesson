import './Header.scss';
import '../../App';

function Header() {
  return (
    <>
      <header>
        <nav>
          <a href="#"><img src="/images/logo.png" alt="logo" /></a>
          <div className='nav-items'>
            <button className='nav-item'>Продукция</button>
            <button className='nav-item btn-logo'>Сертификаты</button>
            <button className='nav-item btn-logo'>Наша команда</button>
            <button className='nav-item btn-logo'>О нас</button>
            <button className='nav-item btn-logo'>Новости</button>
            <button className='nav-item btn-logo'>Вакансии</button>
            <button className='nav-item btn-logo'>Контакты</button>
            <button className='btn-til'><span>RU</span> | EN</button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;