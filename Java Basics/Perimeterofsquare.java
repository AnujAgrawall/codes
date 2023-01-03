import java.util.Scanner;

public class Perimeterofsquare {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("enter side:");
        int side = in.nextInt();
        int Perimeterofsquare = 4*side;
        System.out.println("Perimeter of square=" + Perimeterofsquare);
    }
}
