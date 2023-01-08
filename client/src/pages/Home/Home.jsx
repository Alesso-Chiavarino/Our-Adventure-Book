import './Home.scss';
import AdventuresContainer from '../../components/AdventuresContainer/AdventuresContainer';
import Banner from '../../components/Banner/Banner';

const Home = () => {

    return (
        <section className='home'>
            <main className='container'>
                <Banner />
                <AdventuresContainer />
            </main>

        </section>
    )
}

export default Home;