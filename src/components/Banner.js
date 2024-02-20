import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner(){
    const title = 'La maison jungle'
    return <div className='lmg-banner'>
                 <img src={logo} alt='La maison jungle' className='lmg-logo' />
                 <h1 className='lmg-title'>{title}</h1>
           </div>
   
}

export default Banner