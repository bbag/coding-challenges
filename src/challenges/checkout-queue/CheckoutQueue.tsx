import { useEffect, useState } from 'react'

type Lanes = number[][]

export default function CheckoutQueue() {
    const [inputVal, setInputVal] = useState(0)
    const [lanes, setLanes] = useState<Lanes>([
        [6, 5, 12],
        [4, 17, 3],
        [15],
        [9, 5, 10, 14],
        [12, 8]
    ])

    function addNewItemsToCheckout() {

        // Since we want to return an array, we use `map` to create that array
        // `map` will basically say "for each lane in the `lanes` array, do X"
        const laneTotals = lanes.map(lane => {

            // For each lane, reduce that lane's value to the total count of all the items
            return lane.reduce((total, current) => total + current)
        })

        // Find the index of the lane where the lane's total is the min number in the `laneTotals` array
        const smallestLane = laneTotals.findIndex(lane => {
            return lane === Math.min.apply(null, laneTotals)
        })

        const newLanes = structuredClone(lanes)
        newLanes[smallestLane].push(inputVal)

        setLanes(newLanes)
        setInputVal(0)
    }

    function calcLaneTotal(laneArray: number[]) {
        return laneArray.reduce((acc, current) => acc + current)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('checking out...')
            const newLanes = structuredClone(lanes)

            // Map through each lane in `newLanes`
            newLanes.forEach(lane => {

                // Check if lane.length > 0
                if (lane.length > 0) {

                    // If it is, then check if the value of lane[0] is greater than 1
                    if (lane[0] > 1) {

                        // If it is, then reduce it by 1
                        lane[0]--
                    }

                    // If it's not (i.e. the value is 1 or somehow less) then remove that item from the `lane` array
                    else {
                        newLanes.splice(0, 1)
                    }
                }
            })

            setLanes(newLanes)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            <h1>Checkout Queue</h1>
            <h2>Instructions</h2>
            <ol>
                <li>From: <a href="https://www.youtube.com/watch?v=B9fmr1TpKHE" target="_blank">www.youtube.com/watch?v=B9fmr1TpKHE</a></li>
                <li>You are at a grocery store with <code>n</code> total items in your cart, and you are ready to checkout.</li>
                <li>
                    The available checkout lanes are defined by an array <code>lanes</code>, where each <code>lanes[i]</code> is an array of shoppers in that lane. Each shopper is represented by the number of items in their cart.
                    <ul>
                        <li>For example: <code>lanes = [[6, 5], [4, 17, 3], [15], [9, 5, 10, 14], [12, 8]]</code>.</li>
                        <li>There are 5 lanes (<code>lanes.length</code> = 5).</li>
                        <li>The first lane has two shoppers (<code>lanes[0].length</code> = 2).</li>
                        <li>The first shopper in that lane has 6 items (<code>lanes[0][0]</code> = 6), and the second shopper has 5 items (<code>lanes[0][1]</code> = 5).</li>
                    </ul>
                </li>
                <li>Create a number input for your items + a "Checkout" button, such that your items will be added to the lane with the smallest total item count.</li>
                <li><strong>Bonus:</strong> each second, remove one item from the first shopper's total (to simulate the checkout line moving).</li>
            </ol>
            <hr />
            {/* Add solution here */}
            <input type="number" value={inputVal} onChange={(e) => {setInputVal(parseInt(e.target.value))}} />
            <button onClick={addNewItemsToCheckout}>Checkout</button>
            <pre>
                {lanes.map((lane, laneIndex) => (
                    <span key={laneIndex}>
                        [{lane.map((item, itemIndex) => (
                            <span key={itemIndex}>
                                {item}{itemIndex < lane.length - 1 && <>, </>}
                            </span>
                        ))}]: {calcLaneTotal(lane)}
                        {laneIndex < lanes.length - 1 && <br />}
                    </span>
                ))}
            </pre>
        </>
    )
}