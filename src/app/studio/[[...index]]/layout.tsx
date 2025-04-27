export const metadata = {
  title: 'Accounting Zone CMS',
  description: 'Content management system for Accounting Zone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
 