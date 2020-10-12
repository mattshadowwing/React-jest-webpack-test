import * as React from 'react';

class Telephone extends React.Component {
    public render() {
        return (
            <div className="telephone solid">
                <h5>Telefoonboek</h5>
                <p>Vind collega’s op naam, trefwoord, functie, etc.</p>
                <div className="search">
                    <form>
                        <input type="text"/>
                        <button type="submit" className="icon icon-search"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Telephone;