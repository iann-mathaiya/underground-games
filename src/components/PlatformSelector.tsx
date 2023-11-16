import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import usePlatforms from "@/hooks/usePlatforms"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { Platform } from "@/lib/schema"

interface Props {
  selectedPlatform: Platform | null
  onSelectPlatform: (platform: Platform) => void
}

export default function PlatformSelector({
  selectedPlatform,
  onSelectPlatform,
}: Props) {
  const { data: platforms, error } = usePlatforms()

  if (error) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant='outline' className='space-x-2'>
          <span>Platforms</span>
          <ChevronDownIcon className='w-4 h-4 text-slate-500' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Choose Platform</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {platforms.map((platform) => (
          <DropdownMenuCheckboxItem checked={platform.id === selectedPlatform?.id } onCheckedChange={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
