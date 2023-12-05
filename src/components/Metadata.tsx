export default function Metadata({ className }: { className?: string }) {
	return (
		<div className={`text-sm text-gray-500 ${className}`}>
			by <span className="text-gray-400">u/username</span> 1 hour ago
		</div>
	)
}
