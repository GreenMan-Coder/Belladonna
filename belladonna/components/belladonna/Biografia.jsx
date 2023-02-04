import SocialNet from "./SocialNet"

const Biografia = () => {
    return <section className="container">

        <h1>¡Hola, soy Enid!</h1>
        <h3>Experta en depilación femenina con más de 30 años de experiencia.</h3>

        <p>
            Durante mi carrera, he ayudado a muchas personas a lograr una piel suave y libre de vello no deseado.  Mi enfoque en ofrecer soluciones personalizadas y eficaces para cada uno de mis clientes ha llevado a una base de clientes leales y satisfechos. <br/><br/>
            Además de mi práctica clínica,  también he desarrollado habilidades sobresalientes en otros aspectos de la belleza como el cuidado de la piel, cuidado de manos y pies tratamientos para el cabello y más. <br/><br/>
            Espero compartir mi pasión y conocimientos con ustedes a través de mi blog, y estoy emocionada de conectar con otras mujeres entusiastas de la belleza.<br/><br/>
            Si tienes alguna pregunta puedes compartirla por mi blog o escribirme a alguna de mis redes sociales.
        </p>

        <SocialNet/>
        <SocialNet/>
        <SocialNet/>
        <SocialNet/>

        <style jsx>{`
            .container {
                grid-column: 2/3;
                height: 95%;
                width: 95%;
            }
        `}</style>
    </section>
}
export default Biografia