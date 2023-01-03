import java.security.DrbgParameters.NextBytes;
import java.util.Scanner;

public class Volumeofcylinder {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("enter radius:");
        double radius = in.nextDouble();
        System.out.print("enetr height:");
        double height = in.nextDouble();
        double Volumeofcylinder = 3.14*radius*radius*height;
        System.out.println("volume of cylinder ="+ Volumeofcylinder);

    }
}
