import Link from "next/link";
import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";
import SearchBox from "../search-box/SearchBox";

const HomepageHeading = ({ mobile }) => {
    return (
        <Segment
            className='masthead bg13'
        >
            <Container style={{display: "block"}}>
                <h1 class="ui header">
                    <span class="library">
                        Ketab Yab
                    </span>
                    <span class="tagline">
                        {`کتاب یاب، فروشگاه و موتور جستجو کتاب`}
                    </span>
                </h1>
                <div class="ui hidden divider"></div>
                <Link href='/shop'>
                    <Button
                        as='a'
                        inverted
                        size="huge"
                        basic
                    >{`فروشگاه`}</Button>
                </Link>
            </Container>
        </Segment>
    );
}

export default HomepageHeading;