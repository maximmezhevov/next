import { ThemeProvider } from '@/components/theme/theme-provider'

export default function Providers({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<ThemeProvider>{children}</ThemeProvider>
		</>
	)
}
