import React, { FunctionComponent, useState, useEffect } from 'react';

type ListingProps = {
    name: string
}

export const Listing: FunctionComponent<ListingProps> = ({name}) => {
    const [wasm, setWasm ] = useState();

    useEffect(() => {
        loadWasm();
    }, []);

    const loadWasm = async () => {
        try {
            
            const wasmVal = await import('stats-client-wasm');
            setWasm(wasmVal);
            
        } catch(error) {
            console.error(error);
        };
    }

    return wasm ? (
        <aside>
            <p>Listing imported from the WebAssembly component here.</p>
            <p>{wasm.process_message(name)}</p>
        </aside>
    ) : (
        <div>Loading...</div>
    );
}

export default Listing;
