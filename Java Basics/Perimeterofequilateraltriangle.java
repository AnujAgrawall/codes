import java.util.Scanner;

public class Perimeterofequilateraltriangle {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("enter side:");
        int side = in.nextInt();
        int Perimeterofequilateraltriangle = 3*side;
        System.out.println("Perimeter of equilateral triangle=" + Perimeterofequilateraltriangle);
    }
}
