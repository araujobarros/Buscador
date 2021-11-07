import React, { useState, useContext } from 'react';


import { 
    FormControl,
    InputGroup,
    DropdownButton,
    Dropdown,
    Button} from 'react-bootstrap';


const Header = () => {

    const [webSearch, setWebSearch] = useState('Web');
    const [category, setCategory] = useState('Categorias');
    const [term, setTerm] = useState('');

    function handleSelect(event, setState) {
        setState(event);
    }

    return (
        <>
            <InputGroup>
                <DropdownButton
                variant="outline-secondary"
                title={webSearch}
                id="input-group-dropdown-3"
                value={webSearch}
                onSelect={ (event) => handleSelect(event, setWebSearch) }
                >
                    <Dropdown.Item eventKey="Todas">Todas</Dropdown.Item>
                    <Dropdown.Item eventKey="MercadoLivre">MercadoLivre</Dropdown.Item>
                    <Dropdown.Item eventKey="Buscapé">Buscapé</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                variant="outline-secondary"
                title="Categorias"
                id="input-group-dropdown-4"
                align="end"
                title={category}
                value = {category}
                onSelect={ (event) => handleSelect(event, setCategory) }
                >
                    <Dropdown.Item eventKey="Geladeira">Geladeira</Dropdown.Item>
                    <Dropdown.Item eventKey="TV">TV</Dropdown.Item>
                    <Dropdown.Item eventKey="Celular">Celular</Dropdown.Item>
                </DropdownButton>
                <FormControl
                aria-label="Text input with 2 dropdown buttons"
                valeu={term}
                onChange={ (event) => handleSelect(event.target.value, setTerm) }/>
                <Button >Search</Button>
            </InputGroup>
        </>
    )
}

export default Header;