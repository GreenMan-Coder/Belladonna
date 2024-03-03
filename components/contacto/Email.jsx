const Email = () => {
    return <section className="container">
        <h1>&bull; Envía un email &bull;</h1>
        <div className="underline"></div>

        <form action="#" method="post" id="contact_form">
            <div className="name">
                <input type="text" placeholder="¿Tu nombre?" name="name" id="name_input" required/>
            </div>
            <div className="email">
                <input type="email" placeholder="¿Tu email?" name="email" id="email_input" required/>
            </div>
            <div className="subject">
                <select name="subject" id="subject_input" required>
                    <option disabled hidden selected>Asunto</option>
                    <option>Servicio de depilación</option>
                    <option>Otro</option>
                </select>
            </div>
            <div className="message">
                <textarea name="message" placeholder="Déjanos mensaje" id="message_input" cols="30" rows="5" required></textarea>
            </div>
            <div className="submit">
                <input type="submit" value="enviar email" id="form_button" />
            </div>
        </form>
        <style jsx>{`
            .container {
                width: 100%;
                display: grid;
                grid-template-rows: 0.23fr 1fr;
                justify-items: center;
                align-items: center;
                border-radius: 3%;
                font-family: var(--font);
                box-sizing: border-box;
                padding-right: 2em;
            }

            h1{
                grid-row: 1/2;
                grid-column: 1/2;
                text-align: center;
                font-size: 2.3em;
                font-weight: 700;
                color: var(--normal-purple);
                letter-spacing: 3px;
                text-transform: uppercase;
                align-self: center;
            }

            .underline{
                grid-row: 1/2;
                grid-column: 1/2;
                justify-self: center;
                align-self: center;
                position: relative;
                top: 1.3em;
                border-bottom: solid 2px var(--light-purple);;
                width: 60%;
            }

            form {
                width: 100%;
                height: 100%;
                display: grid;
                align-items: center;
                justify-items: center;
            }

            .name {
                width: 95%;
                box-sizing: border-box;
                margin: 1.5em 0 1em 0;
            }

            .email{
                width: 95%;
                margin: 0 0 1em 0;
            }

            .subject {
                width: 95%;
            }

            select {
                text-transform: none;
                outline: none;
                -moz-appearance: none;
                -webkit-appearance: none;
            }
            select::-ms-expand {
                display: none;
            }
            input, select, textarea {
                font: inherit;
            }
            input {
                line-height: normal;
            }
            textarea {
                overflow: auto;
                line-height: 120%;
                resize: none;
            }
            input[type='text'], [type='email'], select, textarea {
                background: none;
                border: none;
                border-bottom: solid 2px var(--light-purple);
                color: var(--dark-purple);
                font-weight: 400;
                letter-spacing: 1px;
                margin: 0em 0 1.875em 0;
                padding: 0 0 0.575em 0;
                width: 100%;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                -ms-box-sizing: border-box;
                -o-box-sizing: border-box;
                box-sizing: border-box;
                -webkit-transition: all 0.3s;
                -moz-transition: all 0.3s;
                -ms-transition: all 0.3s;
                -o-transition: all 0.3s;
                transition: all 0.3s;
            }
            input[type='text']:focus, [type='email']:focus, textarea:focus {
                outline: none;
            }
            #form_button {
                position: relative;
                left: 3%;
                background: none;
                border: solid 2px var(--normal-purple);
                color: var(--tone-purple);
                cursor: pointer;
                display: inline-block;
                font-size: 0.875em;
                font-weight: 700;
                outline: none;
                padding: 1% 2%;
                text-transform: uppercase;
                -webkit-transition: all 0.3s;
                    -moz-transition: all 0.3s;
                    -ms-transition: all 0.3s;
                    -o-transition: all 0.3s;
                    transition: all 0.3s;
            }
            #form_button:hover {
                background: var(--normal-purple);
                color: var(--purple-blanco);
            }

            .message{
                width: 95%;
            }

            .submit{
                align-self: start;
            }

            @media screen and (max-width: 870px){
                .container{
                    margin: auto;
                    width: 70%;
                    padding: 0;
                }

                form{
                  height: 30em;
                }

                .name{
                  margin-top: 3em;
                }
            }
        `}</style>
    </section>
}
export default Email
