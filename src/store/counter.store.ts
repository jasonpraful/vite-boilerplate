import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
type State = {
	count: number
}

type Actions = {
	increment: () => void
	decrement: () => void
}

export const useCounterStore = create<State & Actions>()(
	immer((set) => ({
		count: 0,
		increment: () =>
			set((state) => {
				state.count += 1
			}),
		decrement: () =>
			set((state) => {
				state.count -= 1
			}),
	})),
)
