import Thread from '@/components/Thread'

export default function Page() {
	return (
		<div className="flex gap-3 flex-col pb-12">
			{Array(10)
				.fill(0)
				.map((_, i) => (
					<Thread key={i} id={i.toString()} />
				))}
		</div>
	)
}
