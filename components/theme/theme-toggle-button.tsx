'use client'

import type { ButtonProps } from '@/components/ui/button'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const ThemeToggleButton: React.FC<ButtonProps> = ({
	variant = 'secondary',
	size = 'icon',
	...props
}) => {
	const { theme, setTheme } = useTheme()
	return (
		<Button
			{...props}
			variant={variant}
			size={size}
			onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
		>
			<Sun
				size={16}
				className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
			/>
			<Moon
				size={16}
				className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
			/>
		</Button>
	)
}
