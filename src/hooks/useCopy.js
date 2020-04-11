import { useState } from 'react';
/**
 * A simple hook to use clipboard feature in browser
 *
 * @param {*} ref - Ref to the element
 * @returns {*} copied - copied status and
 * @returns {*} copyToClipboard - copy to clipboard helper function
 */
function useCopy(ref) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        ref.current.select();
        ref.current.setSelectionRange(0, 99999);

        document.execCommand('copy');
        setCopied(true);
    };

    return { copied, copyToClipboard };
}

export default useCopy;
