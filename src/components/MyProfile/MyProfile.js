import React, { useState } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import UserIcon from '../../assets/profile-user.svg';
const MyProfile = ({ user }) => {

    console.log(user);
    const [avatarUrl, setAvatarUrl] = useState(user.photoURL);

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={5}>
                    {!avatarUrl ? (
                        <Image src={UserIcon} size='medium' circular />
                    ) : (<Image src={avatarUrl} size='medium' circular />)}

                </Grid.Column>
                <Grid.Column width={9}>
                    <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default MyProfile;