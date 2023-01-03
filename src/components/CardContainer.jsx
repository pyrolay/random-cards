import { Card1 } from "./Card1/Card1"
import { Card2 } from "./Card2/Card2"
import { Card3 } from "./Card3/Card3"
import { Card4 } from "./Card4/Card4"
import { Card5 } from "./Card5/Card5"
import { Card6 } from "./Card6/Card6"

const CardContainer = ({ card }) => {

    if (card === 1) {
        return <Card1 />
    }

    if (card === 2) {
        return <Card2 />
    }

    if (card === 3) {
        return <Card3 />
    }

    if (card === 4) {
        return <Card4 />
    }

    if (card === 5) {
        return <Card5 />
    }

    if (card === 6) {
        return <Card6 />
    }
}

export { CardContainer }