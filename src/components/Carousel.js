import React from 'react'

import Card from '../components/Card'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Personal Website',
                    subTitle: 'ReactJS AWS HTML CSS',
                    imgSrc: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    link: 'https://github.com/FoxcroftN/neilfoxcroft.com-repo',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Quiz App',
                    subTitle: 'JavaScript HTML CSS',
                    imgSrc: 'https://images.unsplash.com/photo-1584697964190-7383cbee8277?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                    link: 'https://github.com/FoxcroftN/quiz-app',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Sudoku Solver',
                    subTitle: 'Python',
                    imgSrc: 'https://images.unsplash.com/photo-1577825294026-50dc375b9119?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
                    link: 'https://github.com/FoxcroftN/sudoku-solver',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">                
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;
