export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} musleh.media. All rights reserved.</p>
        <p className="mt-1">el-Ghazieh, Lebanon</p>
      </div>
    </footer>
  )
}
