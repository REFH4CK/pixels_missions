import './ReputationInfo.css'
import repData from '../json/reputation_data.json';

function ReputationInfo () {

  return(
    <>
      <section className='reputation_info_container'>
        <article className='rep_points rep_info'>
          <h2 className='title'>Reputation points</h2>
          <ul className='list'>
            {Object.entries(repData.reputation).map(([key, value]) => (
              <li key={key}>{key}: {value}</li>
            ))}
          </ul>
        </article>
        <article className='rep_access rep_info'>
          <h2 className='title'>Reputation access</h2>
          <ul className='list'>
            {Object.entries(repData.access).map(([key, value]) => (
              <li key={key}>{key}: {value}</li>
            ))}
          </ul>
        </article>
        


      </section>
    </>
  )

}

export default ReputationInfo;