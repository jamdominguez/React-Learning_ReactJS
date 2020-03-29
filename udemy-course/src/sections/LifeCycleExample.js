import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
    panda:'https://goo.gl/oNbtoq',
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd',
    dog: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_xtqShfxi5i6MY0KfSllUg-Jgl11E0ZUpcRo-WJ7WoduB4g60',
    horse: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyKO4eVD3UMDeANQT_DNDsS9d_UlgjWsJJ_6I2TA_NewXb0DDV'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES);

/**
 * AnimalImage
 */
class AnimalImage extends PureComponent{

    state = {src: ANIMAL_IMAGES[this.props.animal]}   

    componentWillReceiveProps(nextProps){
        console.clear();
        console.log('1. AnimalImage - componentWillReceiveProps');
        console.log(nextProps);        
        this.setState({src: ANIMAL_IMAGES[nextProps.animal]});            
    }
        
    componentWillUpdate(nextProps, nextState){
        console.log('3. AnimalImage - componentWillUpdate');
        console.log(nextProps, nextState)
        const img = document.querySelector('img');        
        img.animate([{filter: 'blur(0px)'},{filter:'blur(10px)'}],
                    {duration: 500, easing: 'ease'});
    }        

    componentDidUpdate(prevPros, prevState){
        console.log('4. AnimalImage - componentDidUpdate');
        console.log(prevPros, prevState)
        const img = document.querySelector('img');        
        img.animate([{filter: 'blur(10px)'},{filter:'blur(0px)'}],
                    {duration: 500, easing: 'ease'});
    }

    render(){
        console.info('AnimalImage - render');
        return(
            <div>
                <p>Selected: {this.props.animal}</p>
                <img alt={this.props.animal} src={this.state.src} width='250'/>
            </div>
        )
    }
}
AnimalImage.propTypes = {
    animal : PropTypes.oneOf(ANIMALS)
}


/**
 * LifeCycleExample
 */
export default class LifeCycleExample extends Component{

    state = {animal: 'panda'}        

    renderAnimalButton = (animal) => {
        return <button                    
                    key={animal} 
                    onClick={() => this.setState({animal})}>{animal}
                </button>
    }

    render(){
        return(
            <div>
                <h4>LifeCicleExample</h4>
                {ANIMALS.map(animal => this.renderAnimalButton(animal))}
                <AnimalImage animal={this.state.animal}/>
            </div>
        )
    }
}