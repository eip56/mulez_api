import clsx from 'clsx'
const statuses = {
  0: 'text-rose-400 bg-rose-400/10',
  1: 'text-green-400 bg-green-400/10',
}

//<div className={classNames(statuses[item.status], 'flex-none rounded-full p-1')}>

export default function Status() {
  return (
    <div className={clsx('flex-none rounded-full p-1')}>
      <div className="h-1.5 w-1.5 rounded-full bg-current" />
    </div>
  )
}
