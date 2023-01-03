import java.util.Scanner;

public class Areaofrectangle {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("enter length:");
        int length = in.nextInt();
        System.out.print("enter width:");
        int width = in.nextInt();
        int Areaofrectangle =(width*length);
        System.out.println("Areaofrectangle="+ Areaofrectangle);
    }
}
