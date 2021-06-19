import React from 'react';
import { render } from 'react-dom';
import DevTools from './devTools';

export default function showDevTools(store) {
    const popup = window.open(null, 'Redux DevTools', 'menubar=no,location=no,resizable=yes,scrollbars=no,status=no');
    // reload in case if it already exists
    popup.location.reload();

    setTimeout(() => {
        popup.document.write('<div id="react-devTools-root"></div>');
        render(
            <DevTools store={store} />,
            popup.document.getElementById('react-devTools-root')
        );
    }, 10);
}