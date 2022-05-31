type BadgeProps = {
  children: React.ReactNode
}

const Badge = ({ children }: BadgeProps) => (
  <div className="inline-block rounded-full border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-700 px-2 py-1 text-xs uppercase font-bold mr-3">
    {children}
  </div>
)

export default Badge
