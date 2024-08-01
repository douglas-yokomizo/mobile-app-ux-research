"use client";
import { useEffect, useState } from "react";

const VirtualKeyboard = ({ isVisible, onChange, focusedInput }) => {
    const [inputValue, setInputValue] = useState("");
    const [lastAccentKey, setLastAccentKey] = useState("");

    useEffect(() => {
        if (isVisible && focusedInput !== null) {
            setInputValue("");
        }
    }, [isVisible, focusedInput]);

    const combineAccentWithChar = (accent, char) => {
        const accentsMap = {
            "´": { a: "á", e: "é", i: "í", o: "ó", u: "ú" },
            "~": { a: "ã", o: "õ", n: "ñ" },
        };
        return accentsMap[accent]?.[char] || char;
    };

    const handleKeyPress = (key) => {
        let newValue = inputValue;

        if (key === "backspace") {
            newValue = newValue.slice(0, -1);
        } else if (key === "space") {
            newValue += " ";
        } else {
            if (lastAccentKey) {
                const combinedChar = combineAccentWithChar(lastAccentKey, key);
                newValue = newValue + combinedChar;
                setLastAccentKey("");
            } else {
                newValue += key;
            }
        }

        setInputValue(newValue);

        if (focusedInput !== null) {
            onChange(newValue, focusedInput);
        }
    };

    const keysRow1 = "1234567890";

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-200 p-6 rounded-t-lg shadow-lg text-black">
            {[keysRow1].map((row, index) => (
                <div key={index} className="flex justify-center my-1">
                    {row.split("").map((key) => (
                        <button
                            key={key}
                            onClick={() => handleKeyPress(key)}
                            className="px-4 py-3 w-full bg-white border border-gray-400 rounded shadow mx-1"
                        >
                            {key}
                        </button>
                    ))}
                    {index === 0 && (
                        <button
                            onClick={() => handleKeyPress("backspace")}
                            className="mx-1 px-2 py-1 bg-white border border-gray-400 rounded shadow"
                        >
                            Backspace
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default VirtualKeyboard;
