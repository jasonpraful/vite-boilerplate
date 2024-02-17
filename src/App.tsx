import { ArrowDownIcon, ArrowUpIcon } from '@radix-ui/react-icons'
import { useCounterStore } from '@store/counter.store'

import { Button } from './components/ui/button'

function App() {
	const { count, increment, decrement } = useCounterStore()

	return (
		<div className="h-dvh">
			<div className="flex h-screen flex-col items-center justify-center">
				<h1 className="mb-5 text-center text-3xl">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
						alt="React Logo"
						className="inline-block h-10 mr-5 motion-safe:animate-[spin_5s_linear_infinite]"
					/>
					Vite + React + TailwindCSS + Zustand
				</h1>
				<div className="flex flex-col">
					<div className="flex h-auto w-auto items-center  justify-center rounded-md border p-2 shadow-sm">
						<p aria-label="count" className="text-3xl">
							{count}
						</p>
					</div>
					<div className="mt-2 flex gap-5">
						<Button
							aria-label="increment"
							aria-description="Increment the count by 1"
							variant={'outline'}
							size={'icon'}
							onClick={increment}
						>
							<ArrowUpIcon />
						</Button>
						<Button
							variant={'outline'}
							aria-label="decrement"
							aria-description="Decrement the count by 1"
							size={'icon'}
							onClick={decrement}
						>
							<ArrowDownIcon />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
