import Upvotes from '@/components/Upvotes'
import Metadata from '@/components/Metadata'

export default function Comment() {
	return (
		<div className="flex gap-3 items-start">
			<Upvotes vertical={true} />
			<div>
				<div className="text-gray-400">
					lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</div>
				<Metadata className="mt-3" />
			</div>
		</div>
	)
}
