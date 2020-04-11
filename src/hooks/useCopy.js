import { useState } from 'react';

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
