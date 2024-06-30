import './Card.css';
import woodsign from '../assets/woodsign.png';
import images from '../assets/img_info.json';
import data from '../json/missions_data.json';


export default function Card() {
    return (
        <>
            {data.map((m, i) => (
                <article key={i} className='mission_card'>
                    <header className='mission_info'>
                        <h2 className='mission_name'>{m.mission_name}</h2>
                        <div className='wood_sign'>
                            <img src={woodsign} className='woodsign_image' />
                            <span className='mission_rep'>+{m.repPoints} rep points</span>
                        </div>
                    </header>
                    <div className='backpack_slots'>
                        <img src={images[0].img_url} className='backpack top' />
                        <img src={images[1].img_url} className='backpack row' />
                        <div className="backpack_grid">
                            {m.deliver.map((d, index) => (
                                <div key={index} className='slot'>
                                    <img src={d.itm_image} className='itm_image' />
                                    <span className='itm_name'>{d.itm_name}</span>
                                    <span className='quantity'>x{d.quantity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
}
