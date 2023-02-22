import './index.scss';

// --COMPONENTES
import Cabecalho001 from '../../Components/Cabeçalho001';
import CardOne from '../../Components/CardHome';


//--ICONS
import favicon from '../../../assets/images/favoritos.svg'
import bibliotecaicon from '../../../assets/images/biblioteca-icon.svg';
import mybooksicon from '../../../assets/images/myboooks.svg';
import promoicon from '../../../assets/images/promo.svg';

export default function Homepg(){
    return(
        <main className='cont-main-homepg'>
            <section className='cont-cab-homepg'>
                <Cabecalho001/>
            </section>
            <section className='cont-faixa0-hmpg'> </section>
            <section className='cont-faixa1-hmpg'>
                <div className='cont-01-faixa1'>
                    <h1 className='title-faixa1'>
                        SEU AMBIENTE VIRTUAL DE LIVROS !
                    </h1>
                </div>
                <div className='cont-02-faixa1'>
                    <div className='card-01-faixa1'>
                        <img className='icon-favorito-faixa1' src={favicon} />
                        <h1 className='title-favoritos-faixa1'>
                            Meus favoritos
                        </h1>
                    </div>
                    <div className='card-02-faixa1'>
                        <img  className='biblioteca-icon-faixa1' src={bibliotecaicon} />
                        <h1 className='title-biblioteca-faixa1'>
                            Minha Biblioteca
                        </h1>
                    </div>
                    <div className='card-03-faixa1'>
                        <img className='mybooks-icon-faixa1' src={mybooksicon} />
                        <h1 className='title-mybooks-faixa1'>
                            Minhas Obras
                        </h1>
                    </div>
                </div>
            </section>
            <section className='cont-faixa2-hmpg'>
                <div className='cont-title-faixa2'>
                    <img src={promoicon} className='icon-promo-faixa2'/>
                    <h1 className='title-desc-faixa2'>
                        DESCONTOS IMPERDIVEIS
                    </h1>
                </div>
                <div className='cont-cards-faixa2'>
                    <CardOne />
                </div>
            </section>
        </main>
    )
}