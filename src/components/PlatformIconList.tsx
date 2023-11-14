import { Icons } from "./PlatformIcons"
import { Platform } from "@/hooks/useGames"

interface Props {
  platforms: Platform[]
}

export default function PlatformIconList({ platforms }: Props) {
  return (
    <div className='flex gap-2'>
      {platforms.map((platform) => {
        const Icon = Icons[platform.slug]

        return <Icon className='w-4 h-4 text-slate-500' />
      })}
    </div>
  )
}
