import Header from '../components/front/header/Header'
import Front from '../components/store/Front'

const Store = () => {
    return <section className="container">
        
        <Header/>
        <Front/>
        <style jsx>{`

            @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
            .container {
                font-family: 'Karla', sans-serif;
                display: grid;
            }

        `}</style>
    </section>
}

export default Store