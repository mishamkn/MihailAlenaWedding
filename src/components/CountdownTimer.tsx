import {useState, useEffect} from 'react'
import './CountdownTimerStyles.css'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  type TimeUnit = 'days' | 'hours' | 'minutes' | 'seconds'
  type DeclensionForms = [string, string, string]

  const getTimeWords = (numbers: number[] = []) => {
    const forms: Record<TimeUnit, DeclensionForms> = {
      days: ['день', 'дня', 'дней'],
      hours: ['час', 'часа', 'часов'],
      minutes: ['минута', 'минуты', 'минут'],
      seconds: ['секунда', 'секунды', 'секунд'],
    }

    // Определяем правильную форму слова для числа
    const getWordForm = (number: number, forms: DeclensionForms): string => {
      const lastDigit = number % 10
      const lastTwoDigits = number % 100

      if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return forms[2] // мн.число (5-20, 25-30...)
      }

      switch (lastDigit) {
        case 1:
          return forms[0] // 1, 21, 31...
        case 2:
        case 3:
        case 4:
          return forms[1] // 2-4, 22-24...
        default:
          return forms[2] // 0,5-9,10,11-19...
      }
    }

    // Проверяем входные данные
    if (!Array.isArray(numbers)) {
      throw new Error('Аргумент должен быть массивом')
    }

    if (numbers.length !== 4) {
      throw new Error('Массив должен содержать 4 числа: дни, часы, минуты, секунды')
    }

    // Порядок соответствует: дни, часы, минуты, секунды
    const timeUnits: TimeUnit[] = ['days', 'hours', 'minutes', 'seconds']

    // Создаём результат
    return numbers.map((number, index) => ({
      number,
      word: getWordForm(number, forms[timeUnits[index]]),
    }))
  }

  useEffect(() => {
    const targetDate = new Date('August 1, 2025 00:00:00').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance <= 0) {
        clearInterval(interval)
        setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0})
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({days, hours, minutes, seconds})
    }

    const interval = setInterval(updateTimer, 1000)
    updateTimer() // Инициализация сразу

    return () => clearInterval(interval)
  }, [])

  const {days, hours, minutes, seconds} = timeLeft

  return (
    <div className='countdown-timer'>
      {getTimeWords([days, hours, minutes, seconds]).map(({number, word}) => (
        <div key={word}>
          {number} {word}
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer
