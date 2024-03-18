import { ImageSourcePropType } from "react-native"
interface ImageDetails{
  [key: string]: ImageSourcePropType
}

export const imageDetails:ImageDetails ={
    Compassion :require('../assets/icons/compassion.png'),
    Courage : require('../assets/icons/courage.png'),
    Curiosity :require('../assets/icons/curiosity.png'),
    Distractor : require('../assets/icons/distractor.png'),
    Overthinker :require('../assets/icons/overthinkerGrey.png'),
    Procrastinator : require('../assets/icons/procrastinator.png'),
  }
  export interface IWreckerCard{
    description:string,
    progress:string,
    title:string
  }
  export interface IWreckerCardProp{
    data:IWreckerCard
  }

export  const survivingIcon = require('../assets/icons/surviving.png')
export const thrivingIcon = require('../assets/icons/thriving.png')
export const nextButtonIcon = require('../assets/icons/next.png')