import React, {Component, Fragment} from 'react'
import images from './images'
import './App.css'

class App extends Component {

    render() {
        const { logo, twlogo, erich, guilherme } = images
        return (
            <Fragment>
                <div className='navbar' />
                <div className='container'>
                    <header className='header'>
                        <img src={twlogo} alt='tw logo' />
                        <img src={logo} className='app-logo' alt='react logo' />
                    </header>
                    <section className='text' style={{paddingTop: '20px'}}>
                        Gostaríamos de convidar o Tecnopuc para um workshop de React + Redux na Thoughtworks.
                        Entre em contato conosco por <a target='_blank' rel='noopener noreferrer' href='http://google.com'>email</a>.
                    </section>
                    <div className='pic-cards'>
                        <img src={erich} alt='' />
                        <img src={guilherme} alt='' />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default App
