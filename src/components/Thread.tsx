import Upvotes from '@/components/Upvotes'
import Link from 'next/link'
import Metadata from '@/components/Metadata'

export default function Thread(props: { id: string }) {
	return (
		<div className="flex items-center gap-1">
			<div className="flex-shrink-0">
				<Upvotes vertical={true} />
			</div>

			<Link
				className="w-full min-w-0 rounded hover:bg-gray-800/75 p-3 flex flex-col justify-center cursor-pointer hover:shadow-lg transition-all"
				href={`/thread/${props.id}`}
			>
				<div className="font-medium text-gray-300">
					I&apos;m a thread look at me
				</div>
				<div className="text-sm text-gray-400 mt-1 truncate">
					Snippet of the thread&apos;s content Lorem ipsum dolor sit
					amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua...
				</div>
				<Metadata className="mt-1" />
			</Link>
		</div>
	)
}
