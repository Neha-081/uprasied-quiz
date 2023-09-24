import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='max-w-[800px] font-mono m-auto border-x min-h-screen shadow bg-white'>{children}</body>
    </html>
  )
}
