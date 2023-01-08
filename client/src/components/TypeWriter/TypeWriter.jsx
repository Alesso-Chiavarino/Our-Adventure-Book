import { Typewriter } from 'react-simple-typewriter'

const TypeWriter = () => {

  return (
          <Typewriter
            words={['Always', 'Siempre', 'Sempre', 'Toujours', 'Alltid', 'Immer', 'Uvijek', 'πάντοτε']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
  )

}

export default TypeWriter;