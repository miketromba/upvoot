export default function Button({
	children,
	type = 1,
	disabled
}: {
	children: React.ReactNode
	type: 1 | 2 | 3
	disabled?: boolean
}) {
	let typeClasses = ''
	switch (type) {
		case 1:
			typeClasses = 'text-white bg-violet-600 hover:bg-violet-500'
			break
		case 2:
			typeClasses =
				'text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700'
			break
		case 3:
			typeClasses = 'text-gray-400 hover:text-white'
			break
	}
	return (
		<button
			className={`text-sm rounded px-3 py-2 transition-colors ${typeClasses} disabled:opacity-75 disabled:pointer-events-none`}
			disabled={!!disabled}
		>
			{children}
		</button>
	)
}
