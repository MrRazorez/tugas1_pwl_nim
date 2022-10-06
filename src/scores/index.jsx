import React from "react";
import { useSelector } from "react-redux";

const Scores = () => {
    const oWin = useSelector((state) => state.counter.oWin);
    const xWin = useSelector((state) => state.counter.xWin);

    const reset = () => {
        window.localStorage.clear();
        window.location.reload();
    }

    return(
        <>
            <div className="p-3 flex justify-center items-center text-2xl">
                <table className="table-fixed border-8 border-separate border-spacing-2">
                    <thead className="border-2">
                        <tr className="border-2">
                            <th colSpan={2} className="border justify-center items-center">Scores</th>
                        </tr>
                        <tr className="border-2">
                            <th className="border justify-center items-center">O</th>
                            <th className="border justify-center items-center">X</th>
                        </tr>
                    </thead>
                    <tbody className="border-2">
                        <tr className="border-2">
                            <td className="border justify-center items-center">{oWin}</td>
                            <td className="border justify-center items-center">{xWin}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="p-3 flex justify-center items-center text-2xl">
                <button onClick={() => reset()}>
                    RESET
                </button>
            </div>
        </>
    )
}

export default Scores;