import Banner from './components/Banner'
import Row from './components/Row'
import requests from '../src/requests'

function App() {
	return (
		<div className='App'>
			<Banner />
			<div className='container'>
				<Row
					title='Netflix Originals'
					fetchUrl={requests.fetchNetflixOriginals}
					isLargeRow
				/>
				<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
				<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
				<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
				<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
				<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
				<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
				<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
			</div>
		</div>
	)
}

export default App
