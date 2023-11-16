import { useState } from "react"

import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

interface Props {
  onSelectSortOrder: (sortOrder: string) => void
}

interface SortOrder {
  label: string
  value: string
}

export default function SortSelector({ onSelectSortOrder }: Props) {
  const [selectedOrder, setSelectedOrder] = useState<SortOrder>({} as SortOrder)
  
  const sortOrders: SortOrder[] = [
    { label: "Relevance", value: "" },
    { label: "Date added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average rating", value: "rating" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='space-x-2'>
          <span>{selectedOrder?.label || "Relevance"}</span>
          <ChevronDownIcon className='w-4 h-4 text-slate-500' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Choose Order</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {sortOrders.map((order) => (
          <DropdownMenuCheckboxItem
            checked={selectedOrder.value === order.value}
            onCheckedChange={() => {
              onSelectSortOrder(order.value)
              setSelectedOrder(order)
            }}
            key={order.value}
          >
            {order.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
