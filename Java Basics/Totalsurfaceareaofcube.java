import java.util.Scanner;

public class Totalsurfaceareaofcube {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("enter area of cube:");
        int Area = in.nextInt();
        int Totalsurfaceareaofcube = (6*Area*Area);
        System.out.println("total surface area of cube ="+ Totalsurfaceareaofcube);
    }
}
