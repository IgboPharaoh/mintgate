import React from 'react';
import { Button } from './Button';
import { Federation } from '../federation.types';
import { Link } from 'react-router-dom';
import { Collapse, HStack, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { SlWrench } from 'react-icons/sl';

interface FederationProps {
    federation: Federation;
    onClick: () => void;
}

export const FederationCard = (props: FederationProps): JSX.Element => {
    const { mint_pubkey, details, federation_id } = props.federation;

    const { isOpen, onToggle } = useDisclosure();

    const getFederationName = (name: string): string => {
        return name.charAt(0).toUpperCase() + name.charAt(1).toUpperCase();
    };

    return (
        <>
            <Stack padding={4} borderRadius={8} boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                <HStack style={cardMajorProps}>
                    <HStack style={cardMajorProps}>
                        <section style={nameWrapper}>
                            <h3 style={nameStyle}>{getFederationName(details.name)}</h3>
                        </section>
                        <section>
                            <Text>{details.description}</Text>
                            <Text>{mint_pubkey}</Text>
                        </section>
                    </HStack>
                    <section>
                        <Button label='More' onClick={onToggle} size={'sm'} />
                    </section>
                </HStack>
                <Collapse in={isOpen} animateOpacity>
                    <Stack>
                        <HStack>
                            <Text>Federation Description: </Text>
                            <Text>{details.description}</Text>
                        </HStack>
                        <Stack>
                            <HStack>
                                <Text>Date Created: </Text>
                                <Text>{details.date_created}</Text>
                            </HStack>
                            <Link to={`federation/${federation_id}`}>
                                <Button label='Configure' onClick={props.onClick} icon={<SlWrench size={12} />} />
                            </Link>
                        </Stack>
                    </Stack>
                </Collapse>
            </Stack>
        </>
    );
};

const cardMajorProps = {
    display: 'flex',
    FlexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
};

const nameWrapper = {
    backgroundColor: 'black',
    borderRadius: '50%',
    width: 54,
    height: 54,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const nameStyle = {
    color: 'white',
    margin: 0,
};
