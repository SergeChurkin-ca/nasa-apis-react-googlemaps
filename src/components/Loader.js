import spinner from './spinner.gif'


export default function Loader() {
    return (
        <div className='loader'>
            <img src={spinner} alt="spinner" />
            <h1>Fetching data from API</h1>
        </div>
    )
}
 