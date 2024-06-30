import Card from './components/Card.jsx'
import ReputationInfo from './components/ReputationInfo.jsx';
import images from './assets/img_info.json';

import './App.css'

export default function App() {
  return (
    <>
      <header className='header'>
        <p className='roninAddress'>Donations: 0xd70e7713a2b21fbb525e2674aebfa7087a5d2d50</p>
        <h1 className='main_title'>Pixels Missions</h1>
        <div className='tasklist_corner'>
          <img src={images[2].img_url} className='corner_image' />
        </div>
        <div className='tasklist_container'>
          <img src={images[3].img_url} className='list_image' />
        </div>
      </header>
      <main className='container'>
        <ReputationInfo />
        <section className='cards_container'>
          <Card />
        </section>
      </main>
    </>
  )
}