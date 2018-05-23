import React, {Component, Fragment} from 'react'
import images from './images'
import './App.css'

class App extends Component {

    render() {
        const { logo, twlogo, erich, guilherme } = images
        const defaultSpacing = <Fragment><br/><br/></Fragment>
        return (
            <Fragment>
                <div className='navbar' />
                <div className='container'>
                    <header className='header'>
                        <img src={twlogo} alt='tw logo' />
                        <img src={logo} className='app-logo' alt='react logo' />
                    </header>
                    <section className='text' style={{paddingTop: '20px'}}>
                        <span style={{paddingLeft: '30px'}}>Javascript</span> é a linguagem de programação mais popular em 2018 e React é a biblioteca que os programadores
                        mais gostariam de trabalhar [1]. Pensando nisso, montamos um workshop que abrange desde conceitos básicos até
                        alguns dos mais avançados do React e seu ecossistema.

                        { defaultSpacing }

                        Agenda: <br/>
                        <ul>
                            <li>
                                Identificando componentes
                            </li>
                            <li>
                                Criando o primeiro componente
                                <ul>
                                    <li>
                                        JSX
                                    </li>
                                    <li>
                                        Virtual Dom
                                    </li>
                                    <li>
                                        Render
                                    </li>
                                </ul>
                            </li>
                            <li>
                                React.Component
                                <ul>
                                    <li>
                                        Adicionando estado no componente
                                    </li>
                                    <li>
                                        Ciclo de vida
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Funções puras
                            </li>
                            <li>
                                Props
                                <ul>
                                    <li>
                                        propTypes
                                    </li>
                                    <li>
                                        Flow
                                    </li>
                                    <li>
                                        Typescript
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Single Source of Truth (SSOT)
                            </li>
                            <li>
                                Estados read-only
                            </li>
                            <li>
                                Alterando o estado com funções puras
                            </li>
                            <li>
                                Redux
                                <ul>
                                    <li>
                                        Action
                                    </li>
                                    <li>
                                        Reducer
                                    </li>
                                    <li>
                                        Store
                                    </li>
                                    <li>
                                        Middlewares
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Hands-on
                                <ul>
                                    <li>
                                        Construir um album de figurinhas da copa compartilhado
                                    </li>
                                    <li>
                                        Firebase
                                    </li>
                                    <li>
                                        Estado compartilhado
                                    </li>
                                    <li>
                                        Broadcast das figurinhas do pacotinho
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <br/>
                        Como estamos entrando no inverno, o preço sugerido é a doação de 5kg de alimento não perecível ou agasalhos.

                        { defaultSpacing }

                        <span className='references'>
                            References: <br/>
                            <div id='1'>[1] Most Loved, Dreaded, and Wanted Frameworks, Libraries, and Tools;
                            https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-frameworks-libraries-and-tools
                                acessado em 23 de maio, 2018</div>
                        </span>
                    </section>
                    <div className='pic-cards'>
                        <a href='https://twitter.com/erichmenezess' rel='noopener noreferrer' target='_blank'>
                            <img src={erich} alt='' />
                        </a>
                        <a href='https://twitter.com/golivesantos' rel='noopener noreferrer' target='_blank'>
                            <img src={guilherme} alt='' />
                        </a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default App
