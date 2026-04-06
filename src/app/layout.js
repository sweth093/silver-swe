import './globals.css'

export const metadata = {
  title: 'Silver Gradient Search',
  description: 'Premium Next.js-powered search experience with silver gradient aesthetic',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
