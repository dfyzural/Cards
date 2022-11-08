import Card from './Card';
import shortid from "shortid";


const items = [
    {
        title: 'Card title',
        description:
            'Some quick example text to build on the card title and make up the  bulk of the cards content.',
        img: '../image-crap.jpg',
    },
    {
        title: 'Spectial title treatment',
        description:
            'With supporting text below as a natural lead-in to additional content',
    },
]

export default function Cards() {
    return (
        <div>
            {items.map((item) => (
                <Card key={shortid.generate()} {...item}> {item.img ? (
                    <img src={item.img} className="card-img-top" alt="..." />
                ) : null}
                </Card>
            ))}
        </div>
    )
}