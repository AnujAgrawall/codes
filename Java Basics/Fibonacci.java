import java.util.Scanner;

/**
 * Fibonacci
 */
public class Fibonacci {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("enter nth term:");
        int n = in.nextInt();
        int a = 0;
        int b = 1;
        int count = 2;
        while(count <=n) {
            int temp = b;
            b = b+a;
            a = temp;
            count++;
        }
        System.out.println(b);
    }
}

/*import java.util.Scanner;
public class Fibonacci {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int a = 0;
        int b = 1;
        int count = 2;

        while ( count <= n){
            int temp = b;
           b = b + a;
            a =temp;
            count++;
        }
        
        System.out.println(b);
    }
}*/
