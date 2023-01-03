import java.util.Scanner;

public class Areaofcircle {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("enter radius:");
        int radius = in.nextInt();
        float areaofcircle = (3.14f*radius*radius);
        System.out.println("area of circle=" + areaofcircle);
     
    }
}
