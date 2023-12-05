import Link from 'next/link'
import Button from '@/components/Button'

export default function Header() {
	return (
		<header className="flex my-6 items-center justify-between gap-5 w-full mb-6 pb-6 border-b border-gray-800">
			<Link href="/">
				<div className="font-bold">upvoot</div>
				<div className="text-sm mt-0.5 text-gray-400">
					a simple forum on AWS with Go, React, and TypeScript
				</div>
			</Link>
			<div className="flex gap-4 items-center">
				<Button type={3}>Sign in</Button>
				<Button type={1}>Sign up</Button>
			</div>
		</header>
	)
}
