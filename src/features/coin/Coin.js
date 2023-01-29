import { useSelector} from 'react-redux'

function Coin() {
    const count = useSelector((state) => state.counter.count)
    const color = useSelector((state) => state.theme.color)
    return (
        <>
        <span style = {{color:color}}>Coin: {count}</span>
        </>
    )
}
export default Coin