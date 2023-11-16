import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import usePlatforms from "@/hooks/usePlatforms"

export default function PlatformSelector() {
  const { data: platforms } = usePlatforms()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant='outline' className='space-x-2'>
          <span>Platforms</span>
          <ChevronDownIcon className='w-4 h-4 text-slate-500' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {platforms.map((platform) => (
          <DropdownMenuItem key={platform.id}>{platform.name}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
