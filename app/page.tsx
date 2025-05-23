import { User } from 'lucide-react'

export default function page() {
  return (
    <div>
      <div className="flex bg-gray-200 px-20 py-5 justify-between ">
        <div>Xiro-Real-State</div>
        <div>
          {' '}
          <User />{' '}
        </div>
      </div>

      <div className="min-h-screen bg-blue-50 px-20 py-20">
        <h2>This is Mid Section</h2>
      </div>
    </div>
  )
}
