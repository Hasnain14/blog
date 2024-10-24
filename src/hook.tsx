import { useEffect, useState } from "react";

// JSX Files: When using TypeScript in files containing JSX (like React components), 
// the angle brackets can be confused with JSX syntax.
//  Adding a trailing comma clarifies that you’re using generics and not JSX.

export const useDebounce = <T,>(value: T, delay: number = 300): T => {
    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        // Set a timeout to update debounceValue after the specified delay
        const timeout = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        // Clean up the timeout if value or delay changes
        return () => {
            clearTimeout(timeout);
        };
    }, [value, delay]); // Re-run effect only when value or delay changes

    return debounceValue;
};
