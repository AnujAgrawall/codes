import java.util.Scanner;
public class Largestnum {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
       System.out.println("enter nums");
        int a = in.nextInt();
        int b = in.nextInt();
        int c = in.nextInt();
        // Q fint the largest of 3 numbers
       /*  int max = a;
        if(b>max) {
            max = b;
        }if(c > max) {
            max=c;

        }    */ 
        int max = Math.max(c,Math.max(a,b));
        System.out.println(max);
    }
}
