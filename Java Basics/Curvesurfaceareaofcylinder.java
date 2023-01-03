import java.util.Scanner;

public class Curvesurfaceareaofcylinder {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("enter radius:");
        double radius = in.nextDouble();
        System.out.print("enter height:");
        double height = in.nextDouble();
        double Curvesurfaceareaofcylinder = (2*3.14*radius*height);
        System.out.println("Curve surface area of cylinder ="+ Curvesurfaceareaofcylinder);

    }
}
