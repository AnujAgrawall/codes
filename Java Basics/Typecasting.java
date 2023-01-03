import java.util.Scanner;

/**
 * Typecasting
 */
import java.util.Scanner;
public class Typecasting {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        byte b = 42;
        char c = 'a';
        short s = 121;
        int i = 4546454;
        float f = 5.54f;
        double d = .164656;
        double result = (f*b) +(i/c)-(d-s);
        System.out.println((f*b) + " " +(i/c)+" "+(d-s));
        // float + integer - double = double
        System.out.println(result);
    }
}