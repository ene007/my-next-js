import NewTodoForm from "../components/NewTodoForm"

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
