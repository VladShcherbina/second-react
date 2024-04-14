import React from "react";
import './SmilesContainer.css';


class SmilesContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            smiles: [
                { smile: '😀', id: 1, count: 0 },
                { smile: '😁', id: 2, count: 0 },
                { smile: '😇', id: 3, count: 0 },
                { smile: '🙃', id: 4, count: 0 },
                { smile: '😉', id: 5, count: 0 },
            ],
            winSmile: null
            
        }
    }

    handelOnClick = (id) => {

            const newSmailes = this.state.smiles.map((smile) => {
                if(smile.id === id) {
                    return {
                        ...smile,
                        count: smile.count + 1
                    }
                } 
                return smile
            })

            this.setState({
                smiles: newSmailes
            })
    }

    handelShowResults = () => {
        let winSmiles = this.state.smiles[0]
        this.state.smiles.forEach(smile => {
            if(smile.count > winSmiles.count) {
                winSmiles = smile
            }
        })
        this.setState({
            winSmile: winSmiles
        })
    }
    render() {
        return (
            <div>
                {this.state.smiles.map((smile) => {
                    return (
                        <div className="wrapper" key={smile.id}>
                            <div className="smileWrapper">{smile.smile}</div>
                            <button onClick={() => this.handelOnClick(smile.id)}>{smile.count}</button>
                        </div>
                        
                    )
                })}
                <button onClick={this.handelShowResults}>Show Results</button>
                <div>
                    {this.state.winSmile && (
                        <div>
                            {this.state.winSmile.smile}
                        </div>
                    )}
                </div>
            </div>
        )
    }    

}

export default SmilesContainer