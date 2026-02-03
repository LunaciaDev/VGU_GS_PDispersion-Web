import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import init, { Point, solve_p_dispersion } from '../pkg/p_dispersion'

function App() {
    const [result, setResult] = useState("Click me!");

    const solve_problem = () => {
        const points: Point[] = [];

        Array(10).fill(0).map((_value, row) => {
            Array(5).fill(0).map((_value, col) => {
                points.push(new Point(row, col));
            });
        });

        setResult("P-Dispersion for 10x5 choosing 5 seats: ".concat(solve_p_dispersion(points, 5).join(', ')));
    };

    useEffect(() => {
        (async () => { await init(); })();
    })

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => solve_problem()}>
                    {result}
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
