import React, { useState } from 'react';
import { Header, FederationCard } from './components';
import { Federation } from './federation.types';
import { data } from './federation.data';
import { Stack } from '@chakra-ui/react';

export const Admin = React.memo(() => {
    const [fedlist, setFedlist] = useState<Federation[]>(data.federations);

    const ascending = () => {
        const fedListCopy = [...fedlist];
        const result = fedListCopy.sort((a, b) => {
            const paramsA = a.details.name;
            const paramsB = b.details.name;

            if (paramsA < paramsB) {
                return -1;
            }
            if (paramsA > paramsB) {
                return 1;
            }

            return 0;
        });

        setFedlist(result);
        return result;
    };

    const descending = () => {
        const fedListCopy = [...fedlist];
        const result = fedListCopy.sort((a, b) => {
            const paramsA = a.details.name;
            const paramsB = b.details.name;

            if (paramsA < paramsB) {
                return 1;
            }
            if (paramsA > paramsB) {
                return -1;
            }

            return 0;
        });

        setFedlist(result);
        return result;
    };

    const dateCreated = () => {
        const fedListCopy = [...fedlist];
        const result = fedListCopy.sort((a, b) => {
            const paramsA = a.details.date_created;
            const paramsB = b.details.date_created;

            if (paramsA < paramsB) {
                return 1;
            }
            if (paramsA > paramsB) {
                return -1;
            }

            return 0;
        });

        setFedlist(result);
        return result;
    };

    const isActive = () => {
        const result = data.federations.filter((federation) => {
            return federation.details.active === true;
        });

        setFedlist(result);
        return result;
    };

    const isArchived = () => {
        const result = data.federations.filter((federation) => {
            return federation.details.active === false;
        });

        setFedlist(result);
        return result;
    };

    const isAll = () => {
        setFedlist(data.federations);
    };

    return (
        <div className='App'>
            <div style={wrapperStyles}>
                <Header
                    data={data.federations}
                    ascending={ascending}
                    descending={descending}
                    datecCreated={dateCreated}
                    isActive={isActive}
                    isArchived={isArchived}
                    isAll={isAll}
                />
                <Stack spacing={6} marginTop={6}>
                    {fedlist.map((federation: Federation) => {
                        return <FederationCard key={federation.mint_pubkey} federation={federation} onClick={() => console.log('clicked')} />;
                    })}
                </Stack>
            </div>
        </div>
    );
});

const wrapperStyles = {
    margin: 32,
};

