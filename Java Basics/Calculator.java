/*import java.util.Scanner;
public class Calculator {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // take input from user till user does not press x or X
            int ans = 0;
        while (true) {
            // take the operator as input
            System.out.print("enter the operator");
            char op = in.next().trim().charAt(0);
            if (op == '+' || op == '-' || op == '/' || op == '*' || op == '%') {
                // input two numbers
                System.out.println("enter two numbers");
                int num1 = in.nextInt();
                int num2 = in.nextInt();

                if (op == '+') {
                    ans = num1 + num2;
                 }
                 if (op == '-') {
                    ans = num1 - num2;
                 }
                 if (op == '*') {
                    ans = num1 * num2;
                 }
                 if(op == '/') {
                    ans = num1 / num2;
                 }
                 if(op == '%') {
                    ans = num1 % num2;
                 }
            } else if (op == 'x' || op == 'X') {
                break;

            }else {
                System.out.println("invalid operator");
            }
            System.out.println(ans);
        }
        
    }
}
*/
import java.util.*; 
  
 public class Calculator  {
   
  public static void main(String args[]) {
   Scanner sc = new Scanner(System.in);
   System.out.println("enter a : ");
   int a = sc.nextInt();
   System.out.println("enter  b : ");
   int b = sc.nextInt();
   System.out.println("enter c : ");
   int c = sc.nextInt();
   
   System.out.println("enter operator : ");
   char operator = sc.next().charAt(0);
   switch (operator) {
case '+' : System.out.println(a + b + c);
          break;
 case '-' : System.out.println(a - b - c);
          break;
 case '*': System.out.println(a * b * c );
          break;
 case '/' : System.out.println(a / b / c);
          break;
 case '%' : System.out.print(a % b % c);
        break;
default : System.out.println("my calculator is not that advanced");
   }
}
   } 
 


  
  
  // calculator using switch statement