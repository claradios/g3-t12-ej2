import React from 'react';

class Colors extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3>Elige tu estilo:</h3>
                <div>
                    <label htmlFor="color1">
                        <input
                            onChange={this.props.handleChange}
                            id="color1"
                            type="radio"
                            value="#287233"
                            name="colors"
                        />
                        Claro</label>
                </div>
                <div>
                    <label htmlFor="color2">
                        <input
                            onChange={this.props.handleChange}
                            id="color2"
                            type="radio"
                            value="#4d0000"
                            name="colors"
                        />
                        Oscuro </label>
                </div>
            </React.Fragment>

        );
    }
}


export default Colors;