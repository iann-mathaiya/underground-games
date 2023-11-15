export default function GenreListSkeleton() {
  return (
    <div className='max-w-sm w-full'>
      <div className='h-fit animate-pulse rounded-xl flex items-center gap-4 sm:gap-2'>
        <div className='h-12 w-12 sm:h-8 sm:w-8 rounded-lg bg-slate-300' />
        <div className='p-1.5 w-3/4 rounded-full bg-slate-300' />
      </div>
    </div>
  )
}
