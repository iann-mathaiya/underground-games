export default function GameCardSkeleton() {
  return (
    <div className='bg-slate-50 shadow rounded-md max-w-sm w-full'>
      <div className='p-1 h-fit animate-pulse rounded-xl'>
        <div className="aspect-video rounded-lg bg-slate-300" />

        <div className="mx-2 py-2 space-y-3">
            <div className="p-1.5 w-3/4 rounded-full bg-slate-300" />

            <div className="flex items-center justify-between">
                <div className="p-1.5 w-2/3 rounded-full bg-slate-300" />
                <div className="p-1.5 w-1/12 rounded-sm bg-slate-300" />
            </div>

        </div>
        

      </div>
    </div>
  )
}
