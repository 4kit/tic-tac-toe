class TicTacToe {
    constructor() {
      this.currentPlayer = 'x';
      this.matrix = new Array(new Array("0","0","0"), new Array("0","0","0"), new Array("0","0","0"));
      //this.repeatTurn = false;
      this.turns = 0;
      this.winner = "no";

    }

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      //check if the cell is empty
      if (this.matrix[rowIndex][columnIndex] =="0" && this.turns<9) {

        //makr the cell
        this.matrix[rowIndex][columnIndex] = this.currentPlayer;

        //check if currentPlayer wins
        if (
        (this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][1] == this.matrix[0][2] && this.matrix[0][2]!="0") ||
        (this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[1][2] && this.matrix[1][2]!="0") ||
        (this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][1] == this.matrix[2][2] && this.matrix[2][2]!="0") ||

        (this.matrix[0][0] == this.matrix[1][0] && this.matrix[1][0] == this.matrix[2][0] && this.matrix[2][0]!="0") ||
        (this.matrix[0][1] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][1] && this.matrix[2][1]!="0") ||
        (this.matrix[0][2] == this.matrix[1][2] && this.matrix[1][2] == this.matrix[2][2] && this.matrix[2][2]!="0") ||

        (this.matrix[0][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][2] && this.matrix[2][2]!="0") ||
        (this.matrix[0][2] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][0] && this.matrix[2][0]!="0") ){
          this.winner = this.currentPlayer;
        }

        //switch currentPlayer
        if (this.currentPlayer =='o' ) {
          this.currentPlayer = 'x';
        } else {
          this.currentPlayer = 'o';
        }

        this.turns++;
        return true;

      } else {
        return false;
      }
    }

    isFinished() {
      if (this.winner == "no" && this.turns<9) {
        return false;
      } else {
        return true;
      }
    }

    getWinner() {
      if (this.winner == "no") {
        return null;
      } else {
        return this.winner;
      }
    }

    noMoreTurns() {
      if (this.turns>=9) {
        return true;
      } else {
        return false;
      }
    }

    isDraw() {
      console.log("ISDRAW LOG: " + this.turns + " " + this.winner);
      if (this.turns==9 && this.winner=="no") {
         return true;
      } else {
         return false;
      }
    }

    getFieldValue(rowIndex, colIndex) {
      if (this.matrix[rowIndex][colIndex] == "0") {
        return null;
      } else {
        return this.matrix[rowIndex][colIndex];
      }
    }
}

module.exports = TicTacToe;
