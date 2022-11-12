import { createResource, createSignal, Show } from 'solid-js'
import { Cast } from './components/Cast'

function App() {
	const [keyword, setKeyword] = createSignal('')
	const [castList] = createResource(keyword, async () => {
		return fetch('./cast.json')
			.then((res) => res.json())
			.then((data) => data.filter((item) => item.name.toLowerCase().match(keyword().toLowerCase())))
	})
	const handleChange = (e) => setKeyword(e.currentTarget.value)
	return (
		<div class='container'>
			<h1>Hoamnian Cast</h1>
			<input onKeyUp={handleChange} type='text' />
			<Show when={keyword()}>
				<Cast key={keyword} castList={castList} />
			</Show>
		</div>
	)
}

export default App
