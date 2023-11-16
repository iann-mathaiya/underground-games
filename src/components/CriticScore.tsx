interface Props {
  score: number
}

export default function CriticScore({ score }: Props) {

    const statusColor = score > 75 ? 'text-green-700 bg-green-50 ring-green-600/20' : score > 60 ? 'text-yellow-700 bg-yellow-50 ring-yellow-600/20' : 'text-slate-700 bg-slate-50 ring-slate-600/20'

  if(score) return (
    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${statusColor}`}>
      {score}
    </span>
  )
}
