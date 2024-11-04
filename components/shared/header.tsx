import { ThemeToggleButton } from '@/components/theme/theme-toggle-button'

export default function Header() {
	return (
		<div className='absolute right-4 top-4 inline-flex gap-1'>
			<ThemeToggleButton />
		</div>
	)
}
