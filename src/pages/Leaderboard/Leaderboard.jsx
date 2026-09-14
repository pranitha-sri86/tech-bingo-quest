import { useEffect, useState } from "react";
import { getLeaderboard } from "../../api/leaderboardApi";
import socket from "../../socket/socket";

function Leaderboard() {

    const [players, setPlayers] = useState([]);

    const load = async () => {
        try {
            const res = await getLeaderboard();
            setPlayers(res.leaderboard);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {

        load();

        socket.on("leaderboardUpdated", load);

        socket.on("winner", (winner) => {
            alert(`🏆 ${winner.name} Wins Tech Bingo Quest!`);
            load();
        });

        return () => {
    socket.off("leaderboardUpdated", load);
    socket.off("winner");
};

    }, []);

    return (
        <div>

            <h1>Leaderboard</h1>

            <table border="1" cellPadding="10">

                <thead>

                    <tr>
                       <th>Rank</th>
                      <th>Name</th>
                      <th>Roll No</th>
                      <th>Department</th>
                    <th>Score</th>
                        <th>Lines</th>
                    </tr>

                </thead>

                <tbody>

                    {players.map((p, index) => (

                        <tr key={p._id}>

                           <td>{index + 1}</td>
                           <td>{p.name}</td>
                           <td>{p.rollNo}</td>
                           <td>{p.department}</td>
                           <td>{p.score}</td>
                            <td>{p.bingoLines}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Leaderboard;