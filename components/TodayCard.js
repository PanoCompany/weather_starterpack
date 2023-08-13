
export default function TodayCard({children, title}) {
  return (
    <div className='p-4 bg-white shadow-sm rounded-lg mt-2'>
        <h5 className='text-gray-400 text-sm font-semibold'>{title}</h5>
        {children}
    </div>
  )
}
