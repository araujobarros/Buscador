import React, { useState, useContext } from 'react';


import { 
    FormControl,
    InputGroup,
    DropdownButton,
    Dropdown,
    Button} from 'react-bootstrap';


const Header = () => {

    return (
        <>
            <InputGroup>
                <DropdownButton
                variant="outline-secondary"
                title="Web"
                id="input-group-dropdown-3"
                >
                    <Dropdown.Item href="#">Todas</Dropdown.Item>
                    <Dropdown.Item href="#">MercadoLivre</Dropdown.Item>
                    <Dropdown.Item href="#">Buscapé</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                variant="outline-secondary"
                title="Categorias"
                id="input-group-dropdown-4"
                align="end"
                >
                    <Dropdown.Item href="#">Geladeira</Dropdown.Item>
                    <Dropdown.Item href="#">TV</Dropdown.Item>
                    <Dropdown.Item href="#">Celular</Dropdown.Item>
                </DropdownButton>
                <FormControl aria-label="Text input with 2 dropdown buttons" />
                <Button >Search</Button>
            </InputGroup>
        </>
    )
}

export default Header;