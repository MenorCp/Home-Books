import './index.scss';

import livro from '../../../assets/images/livro 1 1.png'

export default function CardOne(){
    return(
        <div className='cont-main-card'>
            <div className='cont-img-livro'>
                <img src={livro} />
            </div>
            <div className='cont-valor-livro'>
                <h1 className='nm-livro'>
                    Livro Sussuro na floresta Edição 1
                </h1>
                <h1 className='vl-desconto'>
                    R$ 75,00
                </h1>
                <h1 className='title-valor-livro'>
                    R$ 50,00
                </h1>
            </div>
            <div>

            </div>
        </div>
    )
}