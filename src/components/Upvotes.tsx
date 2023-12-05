import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Upvotes({ vertical }: { vertical?: boolean }) {
	return (
		<div
			className={`flex items-center justify-center ${
				vertical
					? 'flex-col p-1 gap-1 rounded'
					: 'gap-2 rounded-full border border-gray-700 px-2 py-1'
			}`}
		>
			<div className="p-0.5 -m-1 flex-shrink-0 text-gray-400 hover:text-gray-300 hover:bg-gray-800 hover:scale-105 transition-all rounded-full cursor-pointer">
				<ChevronUpIcon className="w-5 h-5" />
			</div>
			<div className="text-gray-300 text-sm">5</div>
			<div className="p-0.5 -m-1 flex-shrink-0 text-gray-400 hover:text-gray-300 hover:bg-gray-800 hover:scale-105 transition-all rounded-full cursor-pointer">
				<ChevronDownIcon className="w-5 h-5" />
			</div>
		</div>
	)
}
