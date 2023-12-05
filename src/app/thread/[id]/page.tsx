import Upvotes from '@/components/Upvotes'
import Button from '@/components/Button'
import Metadata from '@/components/Metadata'
import Comment from '@/components/Comment'

export default function Page({ params }: { params: { id: string } }) {
	return (
		<div>
			<div className="mb-8 pb-8 border-b border-gray-800">
				<div className="font-semibold text-lg">
					Title of the thread olor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
				</div>
				<div className="text-gray-400 mt-3">
					Body of the thread lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in
					voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</div>
				<div className="flex mt-5 items-center gap-1">
					<Upvotes />
					<Metadata className="ml-2" />
				</div>
			</div>
			<div className="flex flex-col gap-3 items-end">
				<textarea
					className="bg-gray-800 rounded p-3 w-full min-h-[5rem] resize-none outline-none border border-gray-700 focus:border-gray-500 transition-colors"
					placeholder="Add a comment..."
				></textarea>
				<Button type={2} disabled={true}>
					Post Comment
				</Button>
			</div>
			<div className="mt-8 flex flex-col gap-8 mb-12">
				{Array(10)
					.fill(0)
					.map((_, i) => (
						<Comment key={i} />
					))}
			</div>
		</div>
	)
}
