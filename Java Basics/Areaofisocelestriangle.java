import java.util.Scanner;

public class Areaofisocelestriangle {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("enter base:");
        int base = in.nextInt();
        System.out.print("enter height:");
        int height= in.nextInt();
        float areaofisocelestriangle= (height*base)/2;
        System.out.println("Areaoftriangle="+ areaofisocelestriangle);
    }
}
