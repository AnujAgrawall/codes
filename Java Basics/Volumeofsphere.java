import java.util.Scanner;

public class Volumeofsphere {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("radius:");
        double radius = in.nextDouble();
        double Volumeofsphere = (4*(3.14*radius*radius*radius)/3);
        System.out.println("volume of cylindesphere ="+ Volumeofsphere);

    }
}
