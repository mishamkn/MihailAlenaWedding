import React, {useState} from 'react'
import {Heart, MapPin, Clock, MessageCircle, Phone, Gift, Shirt} from 'lucide-react'
import './styles.css' // Импорт стилей
import CountdownTimer from './components/CountdownTimer'

const weddingDate = '1 августа 2025'
const timingEvents = [
  {
    name: 'Сбор',
    time: '15:00',
  },
  {
    name: 'Фотосессия',
    time: '16:00',
  },
  {
    name: 'Свадьба',
    time: '17:00',
  },
  {
    name: 'Салют',
    time: '23:00',
  },
]

function App() {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    wishes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({name: '', guests: '1', wishes: ''})
  }

  return (
    <div className='app-container'>
      {/* Hero Section */}
      <section className='hero-section'>
        <div className='hero-content'>
          <h2 className='hero-title'>Михаил & Алена</h2>
          <p className='hero-subtitle'>{weddingDate}</p>
          <Heart className='heart-icon' size={32} />
        </div>
      </section>

      {/* Our Story */}
      <section className='invite-section'>
        <div className='guest-card'>
          <h2 className='section-title'>Дорогие родные и близкие</h2>
          <p className='invite-text'>
            Мы бы хотели пригласить Вас на нашу долгожданную свадьбу, которая состоится через:
          </p>
          <CountdownTimer />
          <p className='invite-text'>
            Будем рады разделить это важное событие для нашей будущей семьи с Вами!
          </p>
        </div>
      </section>

      {/* Timing  */}

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
        <div className='max-w-4xl mx-auto text-center'>
          {/* <h2 className='section-title'>Информация для гостей</h2> */}
          <div className='guest-grid'>
            <div className='guest-card'>
              <Shirt className='guest-icon' size={32} />
              <h3 className='guest-title'>Dress Code</h3>
              <p className='venue-text'>
                Чтобы праздник получился гармоничным и красивым, просим вас придерживаться нашего
                дресс-кода.
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
              <p className='venue-text'>
                Мы хотим, чтобы наши фотографии получились стильными и атмосферными, и ваш наряд
                станет частью этой красивой истории!
              </p>
            </div>
            <div className='guest-card'>
              <Gift className='guest-icon' size={32} />
              <h3 className='guest-title'>Подарки</h3>
              <p className='venue-text'>
                Ваше присутствие - лучший подарок для нас. Если хотите порадовать нас, будем
                благодарны за вклад в наше свадебное путешествие.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue & Time */}
      <section className='venue-section'>
        <div className='guest-card'>
          <h2 className='section-title'>Место и Время</h2>
          <div className='venue-grid'>
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
          <h2 className='section-title text-center'>Пожалуйста, подтвердите свое присутствие</h2>
          <form onSubmit={handleSubmit} className='rsvp-form'>
            <p className='rsvp-text'>
              Заполните небольшую форму{' '}
              <a href='https://forms.gle/7Np7b1qyZnV9zG6o7' target='_blank'>
                по ссылке
              </a>{' '}
              для подтверждения своего присутствия. Укажите ваше имя и колличество гостей, если вы
              идете семьей, а также Ваши пожелания.
            </p>
            {/* <div>
              <label htmlFor='name' className='form-label'>
                Ваше имя
              </label>
              <input
                type='text'
                id='name'
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className='form-input'
                required
              />
            </div>
            <div>
              <label htmlFor='guests' className='form-label'>
                Количество гостей
              </label>
              <select
                id='guests'
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
                className='form-input'>
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor='wishes' className='form-label'>
                Ваши пожелания
              </label>
              <textarea
                id='wishes'
                value={formData.wishes}
                onChange={(e) => setFormData({...formData, wishes: e.target.value})}
                className='form-input form-textarea'></textarea>
            </div> 
            <button type='submit' className='form-button'>
              Подтвердить присутствие
            </button> */}
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
            <a className='contact-item' href='https://t.me/misha_mkn' target='_blank'>
              <MessageCircle className='contact-icon' size={20} />
              @misha_mkn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
