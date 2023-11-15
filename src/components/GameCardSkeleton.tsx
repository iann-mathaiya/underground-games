export default function GameCardSkeleton() {
  return (
    <div className='border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
      <div className='p-1 h-56 animate-pulse flex flex-col space-x-4 rounded-xl'>
        <div className=" aspect-video rounded-lg" />

        <div className="p-2 space-y-4">
            <div className="p-2 w-3/4 rounded-full" />

            <div className="flec items-center justify-between">
                <div className="p-2 w-2/3 rounded-full" />
                <div className="p-2 w-1/6 rounded-full" />
            </div>

        </div>
        

      </div>
    </div>
  )
}
