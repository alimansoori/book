import { Image } from "semantic-ui-react";

function Logo(props) {


    return (
        <div className='ui logo shape'>
            <div className='active ui side'>
                <Image src={`/img/logo.png`} />
            </div>
        </div>
    )
}

export default Logo;