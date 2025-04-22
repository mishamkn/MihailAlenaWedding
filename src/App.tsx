import {useState, useEffect} from 'react'
import {MapPin, Clock, MessageCircle, Phone, Gift, Shirt} from 'lucide-react'
import './styles.css'
import CountdownTimer from './components/CountdownTimer'

const weddingDate = '1 августа 2025'
const timingEvents = [
  {
    name: 'Сбор гостей ',
    time: '14:00',
  },
  {
    name: 'Торжественная церемония',
    time: '15:00',
  },
  {
    name: 'Праздничный ужин',
    time: '16:00',
  },
  {
    name: 'Завершение вечера',
    time: '23:00',
  },
]

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [introHeight, setIntroHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Получаем высоту приветственного изображения после загрузки
    const introImg = document.querySelector('.intro-image') as HTMLElement
    if (introImg) {
      setIntroHeight(introImg.offsetHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div style={{position: 'relative'}}>
        <img
          className='intro-image'
          src='./photos/SaveTheDate.png'
          style={{
            margin: 'auto',
            opacity: 1 - scrollY / introHeight,
          }}></img>
      </div>
      <div className='app-container' style={{opacity: (1.2 * scrollY) / introHeight}}>
        {/* Hero Section */}
        {/* <section className='hero-section'>
          <div className='hero-content'>
            <h2 className='hero-title'>Михаил & Алена</h2>
            <p className='hero-subtitle'>{weddingDate}</p>
            <Heart className='heart-icon' size={32} />
          </div>
        </section> */}

        {/* Our Story */}
        <section className='invite-section'>
          <div className='guest-card'>
            <h2 className='section-title'>Дорогие родные и близкие</h2>
            <p className='invite-text'>
              Один день в этом году будет особенно счастливым и ярким и мы бы хотели, чтобы в этот
              день все самые любимые были рядом с нами!
            </p>
            <p className='invite-text'>
              С большим удовольствием приглашаем Вас на нашу долгожданную свадьбу, которая состоится
              через:
            </p>
            <CountdownTimer />
            <p className='invite-text'>
              Будем рады разделить это важное событие для нашей будущей семьи с Вами!
            </p>
          </div>
        </section>

        <section className='timing-section'>
          <div className='guest-card'>
            <h2 className='section-title'>Тайминг</h2>
            {timingEvents.map(({name, time}) => (
              <li className='timing-item' key={name}>
                <div>{time}</div>
                <div>{name}</div>
              </li>
            ))}
          </div>
        </section>

        {/* Guest Information */}
        <section className='guest-section'>
          <div className='guest-container'>
            <div className='guest-card'>
              <Shirt className='guest-icon' size={32} />
              <h3 className='guest-title'>Dress Code</h3>
              <p className='guest-text'>
                Для нас важно, чтобы вы чувствовали себя комфортно и ослепительно, но просим Вас
                придерживаться цветовой гаммы нашего дресс кода.
              </p>
              <div className='dresscode-blocks'>
                <div className='dresscode-block-1' />
                <div className='dresscode-block-2' />
                <div className='dresscode-block-3' />
                <div className='dresscode-block-4' />
                <div className='dresscode-block-5' />
                <div className='dresscode-block-6' />
                <div className='dresscode-block-7' />
                <div className='dresscode-block-8' />
              </div>
              <p className='guest-text'>
                Мы хотим, чтобы наши фотографии получились стильными и атмосферными, и ваш наряд
                станет частью этой красивой истории!
              </p>
              <p className='guest-text'>
                Вдохновиться и вдохновить можно{' '}
                <a href='https://pin.it/2KZ92FPzw' target='_blank' rel='noreferrer'>
                  тут
                </a>{' '}
              </p>
            </div>
            <div className='guest-card'>
              <Gift className='guest-icon' size={32} />
              <h3 className='guest-title'>Подарки</h3>
              <p className='guest-text'>
                Ваше присутствие - лучший подарок для нас. Если хотите порадовать нас, будем
                благодарны за вклад в наше свадебное путешествие.
              </p>
              <p className='guest-text'>
                Цветы - это прекрасно, но в качестве альтернативы Вы можете подарить бутылочку
                алкогольного напитка с пожеланиями.
              </p>
              <p className='guest-text'>
                Если Вы планируете творческий подарок для нас, то можете связаться с нашим ведущим и
                уточнить у него, можно ли так сделать.
              </p>
              <div className='contact-container'>
                <a className='contact-item' href='tel:+79873648393'>
                  Дмитрий
                  <Phone className='contact-icon' size={20} />
                  +7 (987) 364-83-93
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Venue & Time */}
        <section className='venue-section'>
          <div className='guest-card'>
            <h2 className='section-title'>Место и Время</h2>
            <div className='venue-container'>
              <div className='venue-item'>
                <MapPin className='venue-icon' size={32} />
                <h3 className='venue-subtitle'>Место проведения</h3>
                <p className='venue-text'>
                  Ресторан "Берег"
                  <br />
                  ул. Ленина, 1
                </p>
              </div>
              <div className='venue-item'>
                <Clock className='venue-icon' size={32} />
                <h3 className='venue-subtitle'>Время</h3>
                <p className='venue-text'>
                  {weddingDate}
                  <br />
                  15:00
                </p>
              </div>
            </div>
            <div className='map-container'>
              <iframe
                src='https://yandex.ru/map-widget/v1/?ll=47.786094%2C52.045215&z=17&pt=47.786094%2C52.045215%2Ccomma&mode=search&text=%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%20BEREG&scroll=false'
                width='100%'
                height='100%'
                style={{border: 0}}
                loading='lazy'></iframe>
            </div>
          </div>
        </section>

        {/* RSVP Form */}
        <section className='rsvp-section'>
          <div className='guest-card'>
            <h2 className='section-title'>Пожалуйста, подтвердите свое присутствие</h2>
            <form className='rsvp-form'>
              <p className='rsvp-text'>
                Заполните небольшую форму{' '}
                <a href='https://forms.gle/et8ANWs2HCRnVvNn6' target='_blank' rel='noreferrer'>
                  по ссылке
                </a>{' '}
                для подтверждения своего присутствия. Укажите ваше имя и количество гостей, если вы
                идете семьей, а также Ваши пожелания.
              </p>
            </form>
          </div>
        </section>

        {/* Contact Information */}
        <footer className='footer-section'>
          <div className='guest-card'>
            <h2 className='section-title'>Контакты</h2>
            <div className='contact-container'>
              <a className='contact-item' href='tel:+79271570325'>
                <Phone className='contact-icon' size={20} />
                +7 (927) 157-03-25
              </a>
              <a
                className='contact-item'
                href='https://t.me/misha_mkn'
                target='_blank'
                rel='noreferrer'>
                <MessageCircle className='contact-icon' size={20} />
                @misha_mkn
              </a>
              <a
                className='contact-item'
                href='https://t.me/alena011101'
                target='_blank'
                rel='noreferrer'>
                <MessageCircle className='contact-icon' size={20} />
                @alena011101
              </a>
            </div>
          </div>
          P.S. Готовьтесь к вечеринке!
        </footer>
      </div>
    </>
  )
}

export default App
