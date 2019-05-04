import React from 'react'
import Glitch from './Glitch'
import slice1 from './images/bullGlitch/slice1.png'
import slice2 from './images/bullGlitch/slice2.png'
import slice3 from './images/bullGlitch/slice3.png'
import slice4 from './images/bullGlitch/slice4.png'
import slice5 from './images/bullGlitch/slice5.png'
import slice6 from './images/bullGlitch/slice6.png'
import slice7 from './images/bullGlitch/slice7.png'
import slice8 from './images/bullGlitch/slice8.png'
import slice9 from './images/bullGlitch/slice9.png'
import slice10 from './images/bullGlitch/slice10.png'
import slice11 from './images/bullGlitch/slice11.png'
import slice12 from './images/bullGlitch/slice12.png'
import slice13 from './images/bullGlitch/slice13.png'
import slice14 from './images/bullGlitch/slice14.png'
import slice15 from './images/bullGlitch/slice15.png'
import slice16 from './images/bullGlitch/slice16.png'
import slice17 from './images/bullGlitch/slice17.png'
import slice18 from './images/bullGlitch/slice18.png'
import slice19 from './images/bullGlitch/slice19.png'
import slice20 from './images/bullGlitch/slice20.png'
import slice21 from './images/bullGlitch/slice21.png'
import slice22 from './images/bullGlitch/slice22.png'
import slice23 from './images/bullGlitch/slice23.png'
import slice24 from './images/bullGlitch/slice24.png'
import slice25 from './images/bullGlitch/slice25.png'
import slice26 from './images/bullGlitch/slice26.png'
import slice27 from './images/bullGlitch/slice27.png'
import slice28 from './images/bullGlitch/slice28.png'
import slice29 from './images/bullGlitch/slice29.png'
import sorry1 from './images/sorry/slice1.png'
import sorry2 from './images/sorry/slice2.png'
import sorry3 from './images/sorry/slice3.png'
import sorry4 from './images/sorry/slice4.png'
import sorry5 from './images/sorry/slice5.png'
import sorry6 from './images/sorry/slice6.png'
import sorry7 from './images/sorry/slice7.png'
import sorry8 from './images/sorry/slice8.png'
import sorry9 from './images/sorry/slice9.png'
import sorry10 from './images/sorry/slice10.png'

const bull = [
  slice1,
  slice2,
  slice3,
  slice4,
  slice5,
  slice6,
  slice7,
  slice8,
  slice9,
  slice10,
  slice11,
  slice12,
  slice13,
  slice14,
  slice15,
  slice16,
  slice17,
  slice18,
  slice19,
  slice20,
  slice21,
  slice22,
  slice23,
  slice24,
  slice25,
  slice26,
  slice27,
  slice28,
  slice29,
]
const sorry = [
  sorry1,
  sorry2,
  sorry3,
  sorry4,
  sorry5,
  sorry6,
  sorry7,
  sorry8,
  sorry9,
  sorry10,
]

const App = ()  => {
  return (
    <div>
      <Glitch slices={[...bull, ...sorry]} />
    </div>
  );
}

export default App
