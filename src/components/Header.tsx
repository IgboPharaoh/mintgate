import { HStack, Input, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { Button } from './Button';
import { FiChevronDown } from 'react-icons/fi';
import { Federation } from '../federation.types';

export type HeaderProps = {
    data: Federation[];
    ascending: () => void;
    descending: () => void;
    datecCreated: () => void;
    isActive: () => void;
    isArchived: () => void;
    isAll: () => void;
};

export const Header = (props: HeaderProps): JSX.Element => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { value } = event.target;
        setSearchValue(value);
        console.log(searchValue);
    };

    const handleNewFederation = () => {
        console.log('new federation added');
    };

    return (
        <HStack>
            <Button label='Connect Federation' onClick={handleNewFederation} />
            <Input value={searchValue} placeholder='search for item' onChange={handleSearch} />
            <HStack flexDirection='row' alignItems={'center'}>
                {/* sort menu button */}
                <Menu>
                    <MenuButton as={ChakraButton} rightIcon={<FiChevronDown />}>
                        Sort
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={props.ascending}>Ascending</MenuItem>
                        <MenuItem onClick={props.descending}>Descending</MenuItem>
                        <MenuItem onClick={props.datecCreated}>Date Created</MenuItem>
                    </MenuList>
                </Menu>
                {/* filter menu button */}
                <Menu>
                    <MenuButton as={ChakraButton} rightIcon={<FiChevronDown />}>
                        Filter
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={props.isActive}>Active</MenuItem>
                        <MenuItem onClick={props.isArchived}>Archived</MenuItem>
                        <MenuItem onClick={props.isAll}>All</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </HStack>
    );
};
