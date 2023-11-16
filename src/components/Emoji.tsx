import meh from '../assets/emojis/meh.webp'
import bullsEye from '../assets/emojis/bulls-eye.webp'
import thumbsUp from '../assets/emojis/thumbs-up.webp'
import { twMerge } from 'tailwind-merge'

interface Props {
  rating: number
}

export default function Emoji({ rating }: Props) {
  if (rating < 3) return null

  const emojiMap: {[key: number]: Pick<HTMLImageElement, 'src' | 'alt' | 'sizes'>} = {
    3: { src: meh, alt: "Meh", sizes: 'w-6 h-6' },
    4: { src: thumbsUp, alt: "Recommended", sizes: 'w-5 h-5' },
    5: { src: bullsEye, alt: "Exceptional",  sizes: 'w-5 h-5'},
  }

  const emoji = emojiMap[rating] || null

  return <img className={twMerge(' object-cover object-center', emoji.sizes)} src={emoji.src} alt={emoji.alt} />
}
