import './index.scss';

// --ICONES
import homeicon from '../../../assets/images/home.svg';
import bookicon from '../../../assets/images/book.svg';
import arrowicon from '../../../assets/images/arrow.svg';
import lupaicon from'../../../assets/images/lupa-icon.svg';
import loginicon from '../../../assets/images/login.svg';

export default function Cabecalho001(){
    return(
        <div className='cont-main-cabecalho'>
            <div className='cont-logo-hmbk'>
                <div className='cont-icons-logo'>
                    <div className='icon-one'>
                        <img className='icon-01' src={homeicon}/>
                    </div>
                    <div className='icon-two'>
                    <img className='icon-02' src={bookicon}/>
                    </div>
                </div>
                <div className='cont-nm-logo'>
                    <h1 className='title-logo-cb001'>
                        Home Books
                    </h1>
                </div>
            </div>
            <div className='cont-desc-cab'>
                <div className='cont-categorias'>
                    <h3 className='title-categorias-cb001'>
                        Categorias
                    </h3>
                    <img src={arrowicon} />
                </div>
                <div className='cont-destaques'>
                    <h3 className='title-destaques-cb001'>
                        Destaques
                    </h3>
                </div>
                <div className='cont-novidades'>
                    <h3 className='title-novidades-cb001'>
                        Novidades
                    </h3>
                </div>
            </div>
            <div className='cont-pesq-cab'>
                <input placeholder='Qual livro você procura?' className='input-busca-books' type='text'/>
                <button className='botao-busca-books'>
                    <img src={lupaicon} className='icon-lupa-cb001'/>
                </button>
            </div>
            <div className='cont-login-user'>
                <img src={loginicon} className='login-icon-cb001'/>
                <div className='cont-texts-login'>
                    <h4 className='boas-vindas-cb001'>
                        Seja bem vindo(a)
                    </h4>
                    <div className='cont-login-cadastro'>
                        <h4 className='login-cb001'>
                            Entre 
                        </h4>
                        <p className='ou-cb001'>
                            ou
                        </p>
                        <h4 className='cadastro-cb001'>Cadastre-se</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}