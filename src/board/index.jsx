import React from "react";
import { connect } from "react-redux";
import { setOwin, saveOwin, setXwin, saveXwin } from "../features/counter/counterSlice";
import { Slot } from "./components";

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.player = [];

        for (let i = 0; i < 2; i++) {
            this.player.push(new Slot());
        }
        this.player[0].pick = "O";
        this.player[1].pick = "X";

        this.state = {
            comp: ["", "", "", "", "", "", "", "", ""],
            turn: this.player[0].pick
        }

        this.buttonMati = false;
        this.winner = '';
    }

    shouldComponentUpdate() {
        return true;
    }

    findPlayer = () => {
        for (let i=0; i<this.player.length; i++) {
            if (this.player[i].pick === this.state.turn) {
                return i;
            }
        }
    }

    changeBoard = (i) => {
        if (!this.state.comp[i]) {
            let temp = this.state;

            if (this.player[this.findPlayer()].money.length !== 3) {
                temp.comp[i] = this.player[this.findPlayer()].pick;
                this.player[this.findPlayer()].money.push(i);
            } else {
                temp.comp[this.player[this.findPlayer()].money[0]] = "";
                temp.comp[i] = this.player[this.findPlayer()].pick;
                this.player[this.findPlayer()].money.shift();
                this.player[this.findPlayer()].money.push(i);
            }

            switch (this.findPlayer()) {
                case 0:
                    temp.turn = this.player[1].pick;
                    break;
                case 1:
                    temp.turn = this.player[0].pick;
                    break;
                default:
                    break;
            }

            this.setState(temp);
        }
    }

    changeAnnouncement = () => {
        let banner = document.getElementById("checkWinner");
        if (!this.buttonMati) {
            banner.innerHTML = "Player '"+this.winner+"' WIN!!!";
            this.buttonMati = true;
            this.setState(this.state);
        }

        switch (this.winner) {
            case 'O':
                this.props.setOwin();
                this.props.saveOwin();
                break;
            case 'X':
                this.props.setXwin();
                this.props.saveXwin();
                break;
            default:
                break;
        }
    }

    checkWinner = (i, j, k) => {
        if (this.state.comp[i] && this.state.comp[j] && this.state.comp[k]) {
            if (this.state.comp[i] === this.state.comp[j] && this.state.comp[i] === this.state.comp[k] && this.state.comp[j] === this.state.comp[k]) {
                this.winner = this.state.comp[i];
                return true;
            }
        }
    }

    componentDidUpdate() {
        if (this.checkWinner(0,1,2) || this.checkWinner(3,4,5) || this.checkWinner(6,7,8) ||
            this.checkWinner(0,3,6) || this.checkWinner(1,4,7) || this.checkWinner(2,5,8) ||
            this.checkWinner(0,4,8) || this.checkWinner(2,4,6)) {
            this.changeAnnouncement();
        }
    }

    render() {
        return(
            <>
                <h2 id='checkWinner' style={{fontSize: 25}} className="p-3 flex justify-center">...</h2>
                <div className="p-3 flex justify-center items-center">
                    <div className="inline-grid grid-cols-3 gap-4">
                        {this.state.comp.map((but, i) =>
                            <button key={i} onClick={() => this.changeBoard(i)}
                                className="
                                    bg-blue-900
                                    bg-cover
                                    text-sky-400
                                    text-5xl
                                    w-20
                                    h-20
                                    rounded-lg
                                    drop-shadow-md
                                    hover:brightness-50
                                    hover:saturate-200
                                ">
                                <b>{but}</b>
                            </button>
                        )}
                    </div>
                    <div className='p-3 flex justify-center gap-4' style={{fontSize: 25}}>
                        {/* eslint-disable-next-line */}
                        turned : <br/>{this.state.turn}
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOwin: () => dispatch(setOwin()),
        saveOwin: () => dispatch(saveOwin()),
        setXwin: () => dispatch(setXwin()),
        saveXwin: () => dispatch(saveXwin())
    }
}

export default connect(null, mapDispatchToProps)(Board);