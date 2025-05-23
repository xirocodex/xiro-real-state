import { Camera } from 'lucide-react'

export default function page() {
  return (
    <div>
      <div className="flex bg-gray-400">
        <div>Xiro-Real-State</div>
        <div>
          {' '}
          <Camera />{' '}
        </div>
      </div>

      <div className="min-h-screen bg-blue-50">
        <h2>This is Mid Section</h2>
      </div>
    </div>
  )
}
