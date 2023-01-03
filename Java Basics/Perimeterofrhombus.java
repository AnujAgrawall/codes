import java.util.Scanner;

public class Perimeterofrhombus {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("enter side:");
        int side = in.nextInt();
        int Perimeterofrhombus = 4*side;
        System.out.println("Perimeter of rhombus=" + Perimeterofrhombus);
    }
}
