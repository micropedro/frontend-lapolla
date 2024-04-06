import Card from '@/components/Card'

const NextQuiniela = () => {
    return (<>
        <h2>Proximas Quinielas</h2>
        <div className='flex-between'>
            <Card content={contentCard} width={450} height={350} />
            <Card content={contentCard} width={450} height={350} />
        </div>
    </>)
}

const contentCard = () => (<>
    <p>Mini quiniela</p>
    <button type="button" className="btn btn-default">Jugar mini quiniela</button>
</>)

export default NextQuiniela