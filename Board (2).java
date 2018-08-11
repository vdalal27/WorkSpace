package TicTacToeSample;


import java.util.Scanner;
public class Board {
    
  static int MAXDEPTH = 2;
  static Scanner in = new Scanner(System.in);
  public char [] squares = new char[26]; // element zero not used
  int moveCount = 0;
  int recursiveCallCount = 0;
  static final char freeChar = '_';  // to indicate the square is available.
  public Board() {
    for (int i = 1; i <= 25; i++) squares[i] = freeChar;  // all nine squares are initially available
  }
  public boolean moveToSquare(int square) {
    if (squares[square] != freeChar) return false; // already and X or O at that location
    squares[square] = xturn() ? 'X' : 'O'; 
    moveCount++;
    return true;
  }
  boolean xturn() { return moveCount % 2 == 0;}  // X's turn always follows an even number of previous moves

  boolean isFreeSquare(int square) { return squares[square] == freeChar; }

  void unDo(int square){
    moveCount--;
    squares[square] = freeChar;
  }
  boolean boardFull() { return moveCount == 25; }

  int lineValue(int s1, int s2, int s3, int s4) {
 
    
      
    if (squares[s1] == 'X' && squares[s2] == 'X' && squares[s3] == 'X' && squares[s4] == 'X') return 1;  // win for X
    if (squares[s1] == 'O' && squares[s2] == 'O' && squares[s3] == 'O' && squares[s4] == 'O') return -1; // win for O
    return 0;  // nobody has won yet
  }
  
  int boardValue() {
    int[][] wins = {{1,2,3,4},{2,3,4,5},{6,7,8,9},{7,8,9,10},{11,12,13,14},{12,13,14,15},{16,17,18,19},{17,18,19,20},
                    {21,22,23,24},{22,23,24,25},{1,6,11,16},{6,11,16,21},{2,7,12,17},{7,12,17,22},{3,8,13,18},
                    {8,13,18,23},{4,9,14,19},{9,14,19,24},{5,10,15,20},{10,15,20,25},{1,7,13,19},{7,13,19,25},
                    {2,8,14,20},{6,12,18,24},{5,9,13,17},{9,13,17,21},{4,8,12,16},{10,14,18,22}};
    for (int i = 0; i < wins.length; i++) {
      int v = lineValue(wins[i][0], wins[i][1], wins[i][2], wins[i][3]);
      if (v != 0) return v;  // a winning line of X's or O's has been found
    }
    return 0; // nobody has won so far
  }
  
 // draw the board
public void draw() {
  for (int i = 1; i < 26; i++){
    if (isFreeSquare(i)) System.out.print(i);
    else System.out.print(squares[i]);
    System.out.print(" ");
    if (i % 5 == 0) System.out.println();
  }
}

// get next move from the user.
public boolean userMove() {
  boolean legalMove;
  int s;
  System.out.print("\nEnter a square number: ");
  do {
	  s = in.nextInt();
      legalMove = squares[s] == freeChar;
      if (!legalMove) System.out.println("Try again: ");
  } while (!legalMove);
  Move m = new Move(s,evaluateMove(s,0));
  moveToSquare(s);
  System.out.println("Human move: " + m);
  this.draw();
  if (this.boardValue() != 0) return true; // a winning move
  return false;
}

public boolean computerMove() {
  try {Thread.sleep(600);} catch (InterruptedException e) {}
  Move m = this.bestMove(0);
  moveToSquare(m.square);
  System.out.println("\nComputer move: " + m);;
  draw();
  if (this.boardValue() != 0) return true; // a winning move
  return false;
}

// get a random number from min to max inclusive
static int rand(int min, int max) {
	return (int) (Math.random() * (max - min + 1) + min);
}


// randomize order of squares to look through
static void randomizeOrder(int[] squareList) {
	for (int i = 1; i < 26; i++)
		squareList[i] = i;
	for (int i = 1; i < 26; i++) {
			int index1 = rand(1,25);
			int index2 = rand(1,25);
			int temp = squareList[index1];
			squareList[index1] = squareList[index2];
			squareList[index2] = temp;			
	}
}

/* 
 *  Return a Move object representing a best move for the current player.
 *  Use minimax strategy, meaning out of all possible moves, choose the one that is the worst for your opponent.
 *  Provisionally make a move, then recursively evaluate your opponent's possible responses. 
 *  Your best move is the one that "minimizes" the value of your opponent's best response.
*/
public Move bestMove(int depth) {
 
  Move bestSoFar = new Move();  // an impossibly "bad" move.
  int [] squares = new int[26];
  randomizeOrder(squares);
  for (int i = 1; i < 26; i++)   // consider the possible moves in some random order
  {
    int s = squares[i];
    if (isFreeSquare(s)) 
    {
      Move m = new Move(squares[i],evaluateMove(s,depth)); 
      if (m.betterThan(bestSoFar))  bestSoFar = m;
    }
  }
  return bestSoFar;
}
public int evaluateMove(int square, int depth) {
    moveToSquare(square);    

    int val = boardValue() * (MAXDEPTH + 1 - depth);  // scale so earlier wins have more value

    if (!boardFull() && val == 0 && depth < MAXDEPTH){
        System.out.println("Entering Recurcive call on depth " + depth );
        System.out.println("Recursive call " + recursiveCallCount++ );
        val = bestMove(depth+1).value;  
    }
//  one level deeper recursion ,  notice we pass depth+1 to bestMove
    unDo(square);
     return val;

    /*
     * The numerical value of my move is equal to the value of opponent's best response. 
     * For example, suppose I'm X and I want to evaluate a move to a certain square.
     * We determine that O's best response (to some other square) has value -1. 
     * That's a good number for O. (In fact, it means a win for O) but a bad number for me.  
     * When comparing moves, we prefer small numbers for O and big numbers for X.
     * The Move.betterThan() method makes this determination.
     */
}

  // Move is an inner class and allows us to wrap a square and a value together. 
  // It's an inner class so we have access to the xturn() method of Board.
  class Move {
    int square, value;
    public Move(int square, int value) {
      this.square = square;
      this.value = value;
    }
    public Move() {
      this(0, Board.this.xturn() ? -100 : 100);  // give this impossible move an impossibly bad value
    }
  
    boolean betterThan(Move m) {
     // System.out.println("comparing... " + this.value + " and " + m.value);
      if (Board.this.xturn()){ 
     //     System.out.println("Returrning ... this " + this.value + " is greater");
           return this.value > m.value;
      }
      else{ 
     //     System.out.println("Returrning ... guest " + m.value + " is greater");
          return this.value < m.value;
      }
    }
    public String toString() {return "[ square=" + square + ", value=" + value + " ]";
    }
  }
  
  
public static void main(String [] args) {
    System.out.println("Inside main method");
  Board b = new Board();
  b.draw();
  if (Math.random() < 0.5) b.computerMove();
 // else  b.draw();  // human will move first
  while (!b.boardFull()) {
    if (b.userMove()) {
      System.out.println("Congratulations! You win!");
      break;
    }
    if (!b.boardFull() && b.computerMove()) {
      System.out.println("Computer wins this one.");
      break;
    }
  }
  if (b.boardValue() == 0)
    System.out.println("Tie!");
}
}

