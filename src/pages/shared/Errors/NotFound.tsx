import { flex } from "../../../styles";

export default () =>
    <article className={`${flex} flex-col font-bold`}>
        <h2 className='text-danger-main mb-[4.5vh] text-xl'>Algo deu errado!</h2>
        <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/64/000000/external-page-not-found-applications-dreamstale-lineal-dreamstale.png" alt='Pagina não encontrada' />
        <h3>Aparentemente, essa página não existe em nosso site.</h3>
    </article>