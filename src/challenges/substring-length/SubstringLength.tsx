import { useState } from 'react'

export default function SubstringLength() {
    const [inputString, setInputString] = useState('AABCDDDEFGHI')

    function calcLongestSubstring(str: string) {
        let uniqueSubstrings: string[] = ['']
        let currentSubstringIndex = 0

        for (let i = 0; i < str.length; i++) {
            const char = str[i]

            // If character IS already in the current unique substring, then start a new substring and add it
            if (uniqueSubstrings[currentSubstringIndex].includes(char)) {
                currentSubstringIndex++
                uniqueSubstrings.push(char)
            }

            // Otherwise, if character is NOT already in the current substring, then add it to the current substring
            else {
                uniqueSubstrings[currentSubstringIndex] += char
            }
        }

        return uniqueSubstrings.reduce((longestItem, currentItem) => {
            return longestItem.length >= currentItem.length ? longestItem : currentItem
        })
    }

    function handleInputChange(val: string) {
        setInputString(val)
    }

    return (
        <>
            <h1>Substring Length</h1>
            <h2>Instructions</h2>
            <ol>
                <li>From: <a href="https://www.youtube.com/watch?v=zue3lAZyAec" target="_blank">www.youtube.com/watch?v=zue3lAZyAec</a></li>
                <li>
                    You are given the following strings:
                    <ul>
                        <li><code style={{ cursor: 'pointer' }} onClick={(() => setInputString('AABCDDDEFGHI'))}>AABCDDDEFGHI</code></li>
                        <li><code style={{ cursor: 'pointer' }} onClick={(() => setInputString('ABCDEFGHHHHHIJKKKKKLMN'))}>ABCDEFGHHHHHIJKKKKKLMN</code></li>
                        <li><code style={{ cursor: 'pointer' }} onClick={(() => setInputString('ABCDEFGHI'))}>ABCDEFGHI</code></li>
                        <li><code style={{ cursor: 'pointer' }} onClick={(() => setInputString('AAABBBCCC'))}>AAABBBCCC</code></li>
                    </ul>
                </li>
                <li>Write a function that returns the longest substring of unique characters within that string (e.g. for the first string above, the return would be <code>DEFGHI</code>).</li>
                <li>If there are multiple substrings with the same length, return the first occurrence.</li>
            </ol>
            <hr />
            {/* Add solution here */}
            <input
                type="text"
                value={inputString}
                onChange={(e) => handleInputChange(e.target.value)}
                style={{
                    width: '20rem'
                }}
            />
            <p>Longest substring: {calcLongestSubstring(inputString)}</p>
        </>
    )
}