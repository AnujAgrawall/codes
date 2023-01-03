import java.util.Scanner;

/**
 * Perimeterofrectangle
 */
public class Perimeterofrectangle {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("length:");
        int length = in.nextInt();
        System.out.print("enter width:");
        int width = in.nextInt();
        int Perimeterofrectangle = (2*(length+width));
        System.out.println("Perimeter of rectangle ="+ Perimeterofrectangle);
    }
}